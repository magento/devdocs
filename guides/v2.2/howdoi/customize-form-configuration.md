---
layout: tutorial
group: how-do-i
subgroup:
title: Customize the form configuration
subtitle: Customize Product Creation Form
menu_node:
level3_subgroup: product-creation-form
menu_order: 2
---

Customizing the form config file (that is, declarative customization) is preferable for changes like introducing new fields, field sets and modals.

To customize the product creation form, take the following steps:

1. In your custom module, add an empty `product_form.xml` in the `<your_module_dir>/view/adminhtml/ui_component/` directory.

1. In this file, add content similar to the following:

```xml
<form xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Ui:etc/ui_configuration.xsd">

...

    <fieldset name="%fieldset_name%">
        <argument name="data" xsi:type="array">
            <item name="config" xsi:type="array">
                <item name="label" xsi:type="string" translate="true">%field set label as displayed in UI%</item>
                <item name="sortOrder" xsi:type="number">%order for displaying%</item>
            </item>
         </argument>
        <!--field sets can be nested -->
        <fieldset name="%nested_fieldset_name%">
            <argument name="data" xsi:type="array">
                <item name="config" xsi:type="array">
                    <item name="label" xsi:type="string" translate="true">%Nested fieldset Label as displayed in UI%</item>
                    <item name="collapsible" xsi:type="boolean">true</item>
                </item>
            </argument>
            <field name="%field_name%">
                <argument name="data" xsi:type="array">
                    <item name="config" xsi:type="array">
                        <item name="%field_option1%" xsi:type="%option_type%">%value%</item>
                        <item name="%field_option2%" xsi:type="%option_type%">%value%</item>
....
                    </item>
                </argument>
            </field>
        </fieldset>
    </fieldset>
...
</form>
```

## Add new elements {#add-elements}

By default, the new elements (fields, field sets, modals, grids) which you add in the form configuration file, are displayed on the form whatever product is created; that is, for all [product types](https://glossary.magento.com/product-types).

In the [modifier class described further]({{page.baseurl}}/howdoi/customize-modifier-class.html), you can set the conditions for displaying certain elements for certain product types.

## Customize existing fields and field sets {#customize}

Your `product_form.xml` is merged with the same files from the other modules. So there is no need to copy their content, you only need to define changes. Even if you want to customize the existing entities, you only have to mention those options, the values of which are customized.

To customize an existing entity, declare only those options, the values of which are customized, do not copy its entire configuration.

To delete an existing field, or field set, in your `product_form.xml` use the following construction:

```xml
...
    <fieldset name="%fieldset_name%">
        <argument name="data" xsi:type="array">
            <item name="disabled" xsi:type="boolean">true</item>
        </argument>
    </fieldset>
...
```

For reference, view the product form configuration files of the Magento modules:

*  `<Magento_Catalog_module_dir>/view/adminhtml/ui_component/product_form.xml`
*  `<Magento_CatalogInventory_module_dir>/view/adminhtml/ui_component/product_form.xml`
*  `<Magento_ConfigurableProduct_module_dir>/view/adminhtml/ui_component/product_form.xml`
