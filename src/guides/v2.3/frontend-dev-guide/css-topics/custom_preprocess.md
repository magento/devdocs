---
group: frontend-developer-guide
title: Add custom CSS preprocessor
functional_areas:
  - Frontend
---

## What's in this topic

This topic describes how to add a custom [CSS](https://glossary.magento.com/css) preprocessor. Adding [Sass](http://sass-lang.com/) support is used as an example.

## Sample Sass module

Magento has a sample [module-sample-scss](https://github.com/magento/magento2-samples/tree/master/module-sample-scss) [module](https://glossary.magento.com/module) implementing the [Sass](https://glossary.magento.com/sass) preprocessor.

You can view it as example when adding your custom preprocessor. Or install the module as is if you need to add Sass preprocessing. Installing a module is described in the [repository's Readme file](https://github.com/magento/magento2-samples/blob/master/README.md).

## Adding a custom preprocessor

### Prerequisites

For the sake of compatibility, upgradability and easy maintenance, do not edit the default Magento code. Create a new custom module for your customizations.

For details about creating a module refer to the [Magento PHP Developer Guide]({{ page.baseurl }}/extension-dev-guide/bk-extension-dev-guide.html).

### Step by step instruction

To add a custom preprocessor, take the following steps:

1. In your module directory, add the [adapter](https://glossary.magento.com/adapter) [PHP](https://glossary.magento.com/php) class. It must implement the `Magento\Framework\View\Asset\ContentProcessorInterface` interface. For illustration, see the adapter for Sass in the sample module: [module-sample-scss/Preprocessor/Adapter/Scss/Processor.php](https://github.com/magento/magento2-samples/blob/master/module-sample-scss/Preprocessor/Adapter/Scss/Processor.php)

1. If the browser compilation is possible for your file types, that is, if the corresponding [JavaScript](https://glossary.magento.com/javascript) [library](https://glossary.magento.com/library) exists, create the custom renderer for the client-side compilation. This will allow the default [client-side compilation functionality]({{ page.baseurl }}/frontend-dev-guide/css-topics/css-preprocess.html#client-side) to be applied for your files type as well. You can use the default Magento renderer for reference: [app/code/Magento/Developer/Model/View/Page/Config/ClientSideLessCompilation/Renderer.php]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Developer/Model/View/Page/Config/ClientSideLessCompilation/Renderer.php)

1. If in your custom preprocessor, the syntax of the importing directives is different from `@import` and `@magento_import`, you must implement custom processor classes. You can view the default Magento processors for reference: [lib/internal/Magento/Framework/Css/PreProcessor/Instruction]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Css/PreProcessor/Instruction).

1. In `<your_module_dir>/etc/di.xml`, declare the following:

   *  your custom adapter
   *  your processor (if relevant)
   *  the renderer for the client-side compilation (if relevant)

The content of your `di.xml` will be similar to the following:

**`<your_module_dir>/etc/di.xml`**

```xml
<?xml version="1.0"?>
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:ObjectManager/etc/config.xsd">
    <virtualType name="AlternativeSourceProcessors">
        <arguments>
            <argument name="alternatives" xsi:type="array">
                <item name="%your_preprocessor_name%" xsi:type="array">
                    <item name="class" xsi:type="string">%Your\Adapter\Class%</item>
                </item>
                <!-- Use the following syntax to set the priority of processors. That is, what file types will the system search for, when requested CSS files are not found. The following lines set SCSS to be prior to Less -->
                <item name="less" xsi:type="array">
                    <item name="after" xsi:type="string">scss</item>
                </item>
            </argument>
        </arguments>
    </virtualType>
    <!-- Add the following declaration if you have custom processors for importing directives -->
    <virtualType name="AssetPreProcessorPoolForSourceThemeDeploy" type="Magento\Framework\View\Asset\PreProcessor\Pool">
        <arguments>
            <argument name="preprocessors" xsi:type="array">
                <item name="%your_preprocessor%" xsi:type="array">
                    <item name="magento_import" xsi:type="array">
                        <item name="class" xsi:type="string">%Your\Import\Processor%</item>
                    </item>
                    <item name="import" xsi:type="array">
                        <item name="after" xsi:type="string">magento_import</item>
                        <item name="class" xsi:type="string">%Your\Magento_import\Processor%</item>
                    </item>
                </item>
            </argument>
        </arguments>
    </virtualType>
    <!-- Declare the renderer for client-side compilation -->
<type name="Magento\Developer\Model\View\Page\Config\RendererFactory">
        <arguments>
            <argument name="rendererTypes" xsi:type="array">
                <item name="client_side_compilation" xsi:type="string">%Your\Client\Side\Renderer%</item>
            </argument>
        </arguments>
    </type>
</config>
```

## Related reading

*  [Magento PHP Developer Guide]({{ page.baseurl }}/extension-dev-guide/bk-extension-dev-guide.html)
