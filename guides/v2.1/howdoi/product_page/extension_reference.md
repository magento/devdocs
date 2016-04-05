---
layout: default
group: howdoi
subgroup: product-create-page
title: Customization via referencing from layout handle
menu_title: Customization via referencing from layout handle
menu_node: parent
menu_order: 3
github_link: howdoi/product-create-page/extension_class.md
---

In layout structure UI components are wrapped in blocks that are created on fly.
So, you can reference UI component by name the same way as you reference block.

Example of such usage you can see in ProductVideo module in layout handle that contains product form
app/code/Magento/ProductVideo/view/adminhtml/layout/catalog_product_form.xml:

{%highlight xml%}
<?xml version="1.0"?>
<!--
/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
-->
<layout xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_layout.xsd">
    <!-- Reference to UI form the same way as to block -->
    <referenceContainer name="product_form">
        <block name="gallery" class="Magento\Catalog\Block\Adminhtml\Product\Helper\Form\Gallery">
            <arguments>
                <argument name="config" xsi:type="array">
                    <item name="label" xsi:type="string" translate="true">Images And Videos</item>
                    <item name="collapsible" xsi:type="boolean">true</item>
                    <item name="opened" xsi:type="boolean">false</item>
                    <item name="sortOrder" xsi:type="string">22</item>
                    <item name="canShow" xsi:type="boolean">true</item>
                    <item name="componentType" xsi:type="string">fieldset</item>
                </argument>
            </arguments>
            <block class="Magento\Catalog\Block\Adminhtml\Product\Helper\Form\Gallery\Content" as="content">
                <block class="Magento\ProductVideo\Block\Adminhtml\Product\Edit\NewVideo" name="new-video" template="Magento_ProductVideo::product/edit/slideout/form.phtml"/>
            </block>
        </block>
    </referenceContainer>
</layout>
{%endhighlight%}

Avoid using reference block way is it become deprecated and just for legacy code.
During developing your customization, you should prefer declaration of UI product form in custom module or class Modifiers to follow new standards of UI components in Magento.
