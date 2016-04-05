---
layout: default
group: howdoi
subgroup: product-create-page
title: Customization using UI form declaration in own module
menu_title: Customization using UI form declaration in own module
menu_order: 2
github_link: howdoi/product-create-page/extension_xml.md
---

Declarative method should be preferred in almost cases, for example to introduce new fieldsets/fields/modals/etc.
All you need to do - is create file of UI form at path Vendor/ModuleName/view/adminhtml/ui_component/product_form.xml.
All that you declare in own file will be merged with one that declared in Catalog module (Magento/Catalog/view/adminhtml/ui_component/product_form.xml).
As you can see - mechanism is very similar to layouts merging.
By the way this method works for all UI forms and listings that exist in Magento.

Here, we'll discover product form extension on example of CatalogInventory module.

CatalogInventory/view/adminhtml/ui_component/product_form.xml:

{%highlight xml %}
<?xml version="1.0" encoding="UTF-8"?>
<!--
/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
-->
<form xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Ui:etc/ui_configuration.xsd">
    <modal name="advanced_inventory_modal">
        <argument name="data" xsi:type="array">
            <item name="config" xsi:type="array">
               <!-- modal configuration -->
            </item>
        </argument>
        <fieldset name="stock_data">
            <argument name="data" xsi:type="array">
                <item name="config" xsi:type="array">
                    <item name="label" xsi:type="string"/>
                    <item name="dataScope" xsi:type="string"/>
                </item>
            </argument>
            <container name="container_manage_stock">
                <argument name="data" xsi:type="array">
                    <item name="config" xsi:type="array">
                        <!-- container config -->
                    </item>
                </argument>
                <field name="manage_stock">
                    <argument name="data" xsi:type="array">
                        <item name="config" xsi:type="array">
                            <item name="formElement" xsi:type="string">select</item>
                            <item name="dataScope" xsi:type="string">manage_stock</item>
                            <item name="value" xsi:type="object">Magento\CatalogInventory\Model\Source\StockConfiguration</item>
                        </item>
                        <item name="options" xsi:type="object">Magento\Config\Model\Config\Source\Yesno</item>
                    </argument>
                </field>
                <!-- other fields -->
            </container>
        </fieldset>
        <!-- other fieldsets and fields -->
    </modal>
</form>
{%endhighlight%}

Summarizing, in this method you only need to create product_form.xml in your module with custom declarations of UI elements.

<div class="bs-callout bs-callout-tip">
  <p>See also extension of product form in ConfigurableProduct module</p>
</div>