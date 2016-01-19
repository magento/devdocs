---
layout: default
group: mtf-guide
subgroup: 50_Entities
title: Entities of the Magento Testing Framework
menu_title: Page
menu_order: 6
github_link: mtf/mtf_entities/mtf_page.md
---

<h2>Page</h2>

* TOC
{:toc}

## Page overview {#mtf_page_overview}

A page object is a class that serves to interact with the Magento page under test.
A page serves as container for [blocks]({{site.gdeurl}}mtf/mtf_entities/mtf_page.html).

In the functional tests, the Page Object Design Pattern is used. Test uses the block methods of the page object class to interact with application under test. The benefit of this approach is that the tests don’t need to be changed after changes in the UI.
Only the code in the corresponding block must be changed.

This approach provides the following advantages:

- Clean separation between test code and page specific code like locator.
- Single repository for the services or operations provided by the page.
- Decreased duplication of the code.

You can learn from this topic how to create new page, add blocks to the page. Furthermore, it discusses mechanism of extending the page in another module.

## Create page {#mtf_page_create}

The general flow is the following:

1. Create an XML file in the Page directory of the module to which it belongs

2. Add the previously created blocks presented on this page to the `<page>` node

3. Run the page generator

Let's see an example of the Magento Widget page:

`<magento2>/dev/tests/functional/tests/app/Magento/Widget/Test/Page/Adminhtml/WidgetInstanceIndex.xml`

where four blocks have been added:

{%highlight xml%}

<?xml version="1.0" encoding="utf-8"?>
<!--
/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
 -->
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../../../../../../vendor/magento/mtf/etc/pages.xsd">
    <page name="WidgetInstanceIndex" area="Adminhtml" mca="admin/widget_instance/index" module="Magento_Widget">
        <block name="pageActionsBlock" class="Magento\Backend\Test\Block\GridPageActions" locator=".page-main-actions" strategy="css selector" />
        <block name="widgetGrid" class="Magento\Widget\Test\Block\Adminhtml\Widget\WidgetGrid" locator="#widgetInstanceGrid" strategy="css selector" />
        <block name="messagesBlock" class="Magento\Backend\Test\Block\Messages" locator="#messages" strategy="css selector" />
        <block name="systemMessageDialog" class="Magento\AdminNotification\Test\Block\System\Messages" locator='[role="dialog"].ui-popup-message' strategy="css selector" />
    </page>
</config>

{%endhighlight%}

The following table explains `<page>` attributes.
{:#mtf_page_attributes}

|`<page>` attribute|Description|Example with explanaintion|
|---|---|---|
|`name`|Name of the page PHP class, that will be generated in `<magento2>/dev/tests/functional/generated/Magento/<module>/Page/<area>/<name>.php`.|`WidgetInstanceIndex` |
|`area`|The page usage area. Determines a [type of the page](#mtf_page_types). The directory with the name assigned to `area` will be created in the module. Value can be `Adminhtml` for the Admin area, or any other for another area.|`Adminhtml`. The page class will be generated in the `<magento2>/dev/tests/functional/generated/Magento/Widget/Page/Adminhtml`. |
|`mca`{:#mca}|Path following the base URL for the Magento pages (storefront or Admin), or full URL for other pages. MCA is an abbreviation of the Module Controller Action.|`admin/widget_instance/index`. Considering that `area="Adminhtml"`, the Magento page under test is `http://example.com/admin/admin/widget_instance/index`|
|`module`|Module where the page will be generated. |`Magento_Widget`. The page will be generated in the `<magento2>/dev/tests/functional/Magento/Widget/Page`|

{% include mtf/block_attributes.md %}

Also, block can contain a `render` node. [Read about renders in the Block topic]({{site.gdeurl}}mtf/mtf_entities/mtf_block.html#mtf_block_render).

{% include mtf/page-generator.html %}

## Page types {#mtf_page_types}

Depending on the `area` and `mca` attributes page can be of one of the following types:

* Admin page is extended from the [Magento\Mtf\Page\BackendPage][] class
* Storefront page is extended from the [Magento\Mtf\Page\FrontendPage][] class
* External page is extended from the [Magento\Mtf\Page\ExternalPage][] class

### Admin page {#mtf_page_admin}

Admin page has `area="Adminhtml"` in the `<page>` of the page XML file. Generated page extends the [Magento\Mtf\Page\BackendPage][] class. You will log in automatically to the Admin.

The page will be opened as a concatenation of `app_backend_url` from `<magento2>/dev/tests/functional/phpunit.xml` and [mca](#mca) link.

### Storefront page {#mtf_page_storefront}

Storefront page is recognizable by `area` assigned any value except `Adminhtml`, *and* `mca` doesn't have `http`. This type of page extends the [Magento\Mtf\Page\FrontendPage][] class.

The page will be opened as concatenation of `app_frontend_url` from `<magento2>/dev/tests/functional/phpunit.xml` and [mca](#mca) link.

### External page {#mtf_page_extern}

External page has `area` assigned any value except `Adminhtml`, *and* `mca` containing `http`. The generated page extends [Magento\Mtf\Page\ExternalPage][] class.

The page will be opened using [mca](#mca) link.

## Merge pages {#mtf_page_merge}

Sometimes you need to use blocks from different modules in one page. 

To add blocks from different modules to the page, you can merge pages. Just follow the steps:

1. [Create an XML page](#mtf_page_create) in the corresponding module
2. Assign [page attributes](#mtf_page_attributes)
  * with the same name as the page you want to merge
  * with the same `mca`
  * without `module` and `area` attributes
3. Add blocks
4. Run the page generator

For example, we have `dev/tests/functional/tests/app/Magento/Catalog/Test/Page/Product/CatalogProductView.xml` page and want to add three blocks from the Magento_Review module.

`dev/tests/functional/tests/app/Magento/Catalog/Test/Page/Product/CatalogProductView.xml` contains:

{%highlight xml%}
<?xml version="1.0" encoding="utf-8"?>
<!--
/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
 -->
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../../../../../../vendor/magento/mtf/etc/pages.xsd">
    <page name="CatalogProductView" area="Product" mca="catalog/product/view" module="Magento_Catalog">
        <block name="viewBlock" class="Magento\Catalog\Test\Block\Product\View" locator="#maincontent" strategy="css selector" />
        <block name="additionalInformationBlock" class="Magento\Catalog\Test\Block\Product\Additional" locator="#additional" strategy="css selector" />
        <block name="customOptionsBlock" class="Magento\Catalog\Test\Block\Product\View\CustomOptions" locator="#product-options-wrapper" strategy="css selector" />        
        <block name="messagesBlock" class="Magento\Backend\Test\Block\Messages" locator=".page.messages" strategy="css selector" />
        <block name="titleBlock" class="Magento\Theme\Test\Block\Html\Title" locator=".page-title-wrapper h1.page-title .base" strategy="css selector" />        
    </page>
</config>

{%endhighlight%}

We should create `dev/tests/functional/tests/app/Magento/Review/Test/Page/Product/CatalogProductView.xml` page with blocks we want to add:

{%highlight xml%}
<?xml version="1.0" encoding="utf-8"?>
<!--
/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
 -->
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../../../../../../vendor/magento/mtf/etc/pages.xsd">
    <page name="CatalogProductView" mca="catalog/product/view">
        <block name="reviewSummary" class="Magento\Review\Test\Block\Product\View\Summary" locator=".product-reviews-summary" strategy="css selector" />
        <block name="customerReviewBlock" class="Magento\Review\Test\Block\Product\View" locator="#customer-reviews" strategy="css selector" />
        <block name="reviewFormBlock" class="Magento\Review\Test\Block\ReviewForm" locator="#review-form" strategy="css selector" />
    </page>
</config>
{%endhighlight%}

And generate the updated page:

    php <magento2>/dev/tests/functional/utils/generate/page.php
    
The result is in the `<magento2>/dev/tests/functional/generated/Magento/Catalog/Test/Page/Product/CatalogProductView.php` with the following code:

<script src="https://gist.github.com/dshevtsov/d5be380739c696fcb847.js"></script>

<!-- LINK DEFINITIONS -->

[Block]: {{site.gdeurl}}mtf/mtf_entities/mtf_block.html
[Magento\Mtf\Page\BackendPage]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/Page/BackendPage.php
[Magento\Mtf\Page\FrontendPage]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/Page/FrontendPage.php
[Magento\Mtf\Page\ExternalPage]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/Page/ExternalPage.php


