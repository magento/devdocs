---
group: frontend-developer-guide
subgroup: D_CSS
title: Add custom CSS preprocessor
menu_order: 8
menu_node:
level3_menu_node: level3child
level3_subgroup: custom-preprocess
functional_areas:
  - Frontend
---

## What's in this topic

This topic describes how to add a custom {% glossarytooltip 6c5cb4e9-9197-46f2-ba79-6147d9bfe66d %}CSS{% endglossarytooltip %} preprocessor. Adding [Sass](http://sass-lang.com/) support is used as an example.

## Sample Sass module

Magento has a sample [module-sample-scss](https://github.com/magento/magento2-samples/tree/master/module-sample-scss) {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %} implementing the {% glossarytooltip 45f1f76d-91cd-4789-a8b5-1e3f321a6280 %}Sass{% endglossarytooltip %} preprocessor.

You can view it as example when adding your custom preprocessor. Or install the module as is if you need to add Sass preprocessing. Installing a module is described in the [repository's Readme file](https://github.com/magento/magento2-samples/blob/master/README.md).

## Adding a custom preprocessor 

### Prerequisites

For the sake of compatibility, upgradability and easy maintenance, do not edit the default Magento code. Create a new custom module for your customizations.

For details about creating a module refer to the [Magento PHP Developer Guide]({{ page.baseurl }}/extension-dev-guide/bk-extension-dev-guide.html).

### Step by step instruction

To add a custom preprocessor, take the following steps:

1. In your module directory, add the {% glossarytooltip edb42858-1ff8-41f9-80a6-edf0d86d7e10 %}adapter{% endglossarytooltip %} {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} class. It must implement the `Magento\Framework\View\Asset\ContentProcessorInterface` interface. 
For illustration, see the adapter for Sass in the sample module: [module-sample-scss/Preprocessor/Adapter/Scss/Processor.php](https://github.com/magento/magento2-samples/blob/master/module-sample-scss/Preprocessor/Adapter/Scss/Processor.php)

2. If the browser compilation is possible for your file types, that is, if the corresponding {% glossarytooltip 312b4baf-15f7-4968-944e-c814d53de218 %}JavaScript{% endglossarytooltip %} {% glossarytooltip 08968dbb-2eeb-45c7-ae95-ffca228a7575 %}library{% endglossarytooltip %} exists, create the custom renderer for the client-side compilation. This will allow the default [client-side compilation functionality]({{ page.baseurl }}/frontend-dev-guide/css-topics/css-preprocess.html#client-side) to be applied for your files type as well. 
You can use the default Magento renderer for reference: [app/code/Magento/Developer/Model/View/Page/Config/ClientSideLessCompilation/Renderer.php]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Developer/Model/View/Page/Config/ClientSideLessCompilation/Renderer.php)

2. If in your custom preprocessor, the syntax of the importing directives is different from `@import` and `@magento_import`, you must implement custom processor classes. 
You can view the default Magento processors for reference: [lib/internal/Magento/Framework/Css/PreProcessor/Instruction]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Css/PreProcessor/Instruction). 

2. In `<your_module_dir>/etc/di.xml`, declare the following:
	* your custom adapter 
	* your processor (if relevant)
	* the renderer for the client-side compilation (if relevant)

The content of your `di.xml` will be similar to the following:

**`<your_module_dir>/etc/di.xml`**
{%highlight xml%}

<?xml version="1.0"?>
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:ObjectManager/etc/config.xsd">
    <virtualType name="AlternativeSourceProcessors">
        <arguments>
            <argument name="alternatives" xsi:type="array">
                <item name="%your_preprocessor_name%" xsi:type="array">
                    <item name="class" xsi:type="string">%Your\Adapter\Class%</item>
                </item>
                <!-- Use the following syntax to set the priority of processors. That is, what file types will the system search for, when requested CSS files are not found. The following lines set SCSS to be prior to LESS -->
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
{%endhighlight%}

## Related reading

- [Magento PHP Developer Guide]({{ page.baseurl }}/extension-dev-guide/bk-extension-dev-guide.html)

