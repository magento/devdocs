---
group: ui-components-guide
title: Add a category attribute
contributor_name: SwiftOtter Studios
contributor_link: https://swiftotter.com/
---

Category attributes were automatically displayed in the [admin](https://glossary.magento.com/admin) panel of Magento 1. In Magento 2, it is necessary to explicitly render it with a [UI Component](https://glossary.magento.com/ui-component). This is quite easy to do and provides a great degree of control over the form input. In the code examples below, replace `attribute_id` and `Your Category Attribute Name` with your own values.

## Step #1: Create the Attribute

The following is a full example of an install script that creates a [category](https://glossary.magento.com/category) attribute. If you already have a category attribute, it is not necessary.

```php
// File: Namespace/Module/Setup/InstallData.php

use Magento\Framework\Setup\{
    ModuleContextInterface,
    ModuleDataSetupInterface,
    InstallDataInterface
};

use Magento\Eav\Setup\EavSetup;
use Magento\Eav\Setup\EavSetupFactory;

class InstallData implements InstallDataInterface
{
    private $eavSetupFactory;

    public function __construct(EavSetupFactory $eavSetupFactory) {
        $this->eavSetupFactory = $eavSetupFactory;
    }

    public function install(ModuleDataSetupInterface $setup, ModuleContextInterface $context)
    {
        $eavSetup = $this->eavSetupFactory->create(['setup' => $setup]);
        $eavSetup->addAttribute(\Magento\Catalog\Model\Category::ENTITY, 'attribute_id', [
            'type'     => 'int',
            'label'    => 'Your Category Attribute Name',
            'input'    => 'boolean',
            'source'   => 'Magento\Eav\Model\Entity\Attribute\Source\Boolean',
            'visible'  => true,
            'default'  => '0',
            'required' => false,
            'global'   => \Magento\Eav\Model\Entity\Attribute\ScopedAttributeInterface::SCOPE_STORE,
            'group'    => 'Display Settings',
        ]);
    }
}
```

## Step #2: Display the Attribute

The category UI Component is rendered with configuration from the `category_form.xml` file. All files with that name are merged together. As a result, you can add a field by creating a `category_form.xml` file in the `view/adminhtml/ui_component` directory in your [module](https://glossary.magento.com/module).

Here is a full example of adding a field under the "Display Settings" group. It is important to note that `attribute_id` should match the ID of the attribute that you created in the install script.

```xml
<!-- Namespace/Module/view/adminhtml/ui_component/category_form.xml -->
<?xml version="1.0"?>
<form xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Ui:etc/ui_configuration.xsd">
    <fieldset name="display_settings">
        <field name="attribute_id">
            <argument name="data" xsi:type="array">
                <item name="config" xsi:type="array">
                    <item name="dataType" xsi:type="string">boolean</item>
                    <item name="formElement" xsi:type="string">checkbox</item>
                    <item name="label" xsi:type="string" translate="true">Your Category Attribute Name</item>
                    <item name="prefer" xsi:type="string">toggle</item>
                    <item name="valueMap" xsi:type="array">
                        <item name="true" xsi:type="string">1</item>
                        <item name="false" xsi:type="string">0</item>
                    </item>
                    <item name="default" xsi:type="number">0</item>
                </item>
            </argument>
        </field>
    </fieldset>
</form>
```

## Step #3: Upgrade and Run

[Upgrade the database schema]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-db-upgr.html) to install the attribute [and clear your cache]({{ page.baseurl }}/howdoi/php/php_clear-dirs.html#howdoi-clear-how).

## How it works

UI Component configuration is merged. When you add a new file, Magento will merge that with the base UI Component configuration file. In the example above, that is `category_form.xml`. The nodes inside of that reflect the structure of the base file. There are only two nodes necessary in this case before the custom field is added: `<form>` and `<fieldset>`. Inside of that, the `<field>` node is used to add a field with a name that matches the id of the attribute you want to render.

The `<field>` node is declared originally in `vendor/magento/module-ui/view/base/ui_component/etc/definition.xml`. If you open that file and look for `<field>`, you will notice that there is only a PHP class referenced—nothing particularly helpful. This is where the `config` elements in the example above come in important. Notice the value of `<item name="formElement">` (`checkbox`)? Now, if you look in `definition.xml`, you will find a `<checkbox>` node that has some configuration values. In the PHP class that the `<field>` element references, it looks up the `formElement` to use and loads that. As a result, `<checkbox>` is the node. In this case, that has the information that we are looking for.

One of those elements is particularly useful when determining what XML you need to provide for your field: `<item name="component">`. That is a Javascript file that handles the functionality of the field. In our case, it is located in `vendor/magento/module-ui/view/base/web/js/form/element/single-checkbox.js`. If you open that file, there is a `defaults` object which contains values that can be modified through the XML above. For example, notice: `defaults.prefer: 'checkbox'`. In the XML above, we declared `<item name="prefer">toggle</item>`. As a result, the [XML](https://glossary.magento.com/xml) value overrides the default value, and the [Javascript](https://glossary.magento.com/javascript) renders a toggle instead of a plain checkbox.

This opens up the opportunity for you to customize nearly anything about the UI Component. It also should provide you with a basis of how to determine what configuration is available for you to set through XML.
