---
layout: default
group: mtf-guide
subgroup: 50_Entities
title: Entities of the Functional Testing Framework
menu_title: Page
menu_order: 6
version: 2.0
github_link: mtf/mtf_entities/mtf_page.md
---

<h2>Page</h2>

* TOC
{:toc}

## Page overview {#mtf_page_overview}

A page object is a class that serves to interact with the Magento page under test.
A page serves as container for [blocks]({{page.baseurl}}mtf/mtf_entities/mtf_page.html).

In the functional tests, Page Object Design Pattern is used. Test uses block methods of page object class to interact with application under test.

Benefit of this approach is that tests don’t need to be changed after changes in the UI. Only code in corresponding block must be changed. This approach provides the following advantages:

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

|`<page>` attribute|Description|Example with explanation|
|---|---|---|
|`name`|Name of the page PHP class, that will be generated in `<magento2>/dev/tests/functional/generated/Magento/<module>/Page/<area>/<name>.php`.|`WidgetInstanceIndex` |
|`area`|The page usage area. Determines a [type of the page](#mtf_page_types). The directory with the name assigned to `area` will be created in the module. Value can be `Adminhtml` for the Admin area, or any other for another area.|`Adminhtml`. The page class will be generated in the `<magento2>/dev/tests/functional/generated/Magento/Widget/Page/Adminhtml`. |
|`mca`{:#mca}|Path following the base URL for the Magento pages (storefront or Admin), or full URL for other pages. MCA is an abbreviation of the Module Controller Action.|`admin/widget_instance/index`. Considering that `area="Adminhtml"`, the Magento page under test is `http://example.com/admin/admin/widget_instance/index`|
|`module`|Module where the page will be generated. |`Magento_Widget`. The page will be generated in the `<magento2>/dev/tests/functional/Magento/Widget/Page`|

{% include mtf/block_attributes.md %}

Also, block can contain a `render` node. [Read about renders in the Block topic]({{page.baseurl}}mtf/mtf_entities/mtf_block.html#mtf_block_render).

{% include mtf/page-generator.html %}

## Page types {#mtf_page_types}

Depending on `area` and `mca` attributes, page can be of one of the following types:

* Admin page is extended from [Magento\Mtf\Page\BackendPage][] class
* Storefront page is extended from [Magento\Mtf\Page\FrontendPage][] class
* External page is extended from [Magento\Mtf\Page\ExternalPage][] class

### Admin page {#mtf_page_admin}

Admin page has attribute `area="Adminhtml"` in `<page>` node of the page XML file. Generated page extends  [Magento\Mtf\Page\BackendPage][] class. You will log in automatically to the Admin.

The page will be opened as a concatenation of `app_backend_url` from `<magento2>/dev/tests/functional/phpunit.xml` and [mca](#mca) link.

### Storefront page {#mtf_page_storefront}

Storefront page is recognizable by `area` assigned any value except `Adminhtml`, *and* `mca` doesn't have `http`. This type of page extends class [Magento\Mtf\Page\FrontendPage][].

Page will be opened as concatenation of `app_frontend_url` from `<magento2>/dev/tests/functional/phpunit.xml` and [mca](#mca) link.

### External page {#mtf_page_extern}

External page has `area` assigned any value except `Adminhtml`, *and* `mca` containing `http`. Generated page extends class [Magento\Mtf\Page\ExternalPage][].

The page will be opened using [mca](#mca) link.

## Merge pages {#mtf_page_merge}

Page merging can help you to override modules declared in a page, or add blocks from different modules.

Pages are merged when they have the same `name` attribute value.

Pages are merged module by module in the order that modules are loaded in Magento. All new modules are loaded after related Magento modules (according to the dependencies) so that the pages from new modules are merged the last.

### Add blocks from different modules {#add-block-another-module}

To add blocks from different modules to the page, you can merge pages by following steps:

**Step 1.** [Create an XML page](#mtf_page_create) in the corresponding module

**Step 2.** Assign [page attributes](#mtf_page_attributes)

* with the same name as the page you want to merge
* with the same `mca`
* the `module` and `area` attributes can be omitted
  
**Step 3.** Add blocks to the page

**Step 4.** Run the page generator

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

{% highlight xml %}
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

    php <magento2>/dev/tests/functional/utils/generate.php
    
The result is in the `<magento2>/dev/tests/functional/generated/Magento/Catalog/Test/Page/Product/CatalogProductView.php` with the following code:

{%highlight php%}
<?php
/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
namespace Magento\Catalog\Test\Page\Product;
use Magento\Mtf\Page\FrontendPage;
/**
 * Class CatalogProductView
 */
class CatalogProductView extends FrontendPage
{
    const MCA = 'catalog/product/view';
    /**
     * Blocks' config
     *
     * @var array
     */
    protected $blocks = [
        'viewBlock' => [
            'class' => 'Magento\Catalog\Test\Block\Product\View',
            'locator' => '#maincontent',
            'strategy' => 'css selector',
        ],
        'additionalInformationBlock' => [
            'class' => 'Magento\Catalog\Test\Block\Product\Additional',
            'locator' => '#additional',
            'strategy' => 'css selector',
        ],
        'customOptionsBlock' => [
            'class' => 'Magento\Catalog\Test\Block\Product\View\CustomOptions',
            'locator' => '#product-options-wrapper',
            'strategy' => 'css selector',
        ],
        'messagesBlock' => [
            'class' => 'Magento\Backend\Test\Block\Messages',
            'locator' => '.page.messages',
            'strategy' => 'css selector',
        ],
        'titleBlock' => [
            'class' => 'Magento\Theme\Test\Block\Html\Title',
            'locator' => '.page-title-wrapper h1.page-title .base',
            'strategy' => 'css selector',
        ],
        'reviewSummary' => [
            'class' => 'Magento\Review\Test\Block\Product\View\Summary',
            'locator' => '.product-reviews-summary',
            'strategy' => 'css selector',
        ],
        'customerReviewBlock' => [
            'class' => 'Magento\Review\Test\Block\Product\View',
            'locator' => '#customer-reviews',
            'strategy' => 'css selector',
        ],
        'reviewFormBlock' => [
            'class' => 'Magento\Review\Test\Block\ReviewForm',
            'locator' => '#review-form',
            'strategy' => 'css selector',
        ],
    ];
    /**
     * @return \Magento\Catalog\Test\Block\Product\View
     */
    public function getViewBlock()
    {
        return $this->getBlockInstance('viewBlock');
    }
    /**
     * @return \Magento\Catalog\Test\Block\Product\Additional
     */
    public function getAdditionalInformationBlock()
    {
        return $this->getBlockInstance('additionalInformationBlock');
    }
    /**
     * @return \Magento\Catalog\Test\Block\Product\View\CustomOptions
     */
    public function getCustomOptionsBlock()
    {
        return $this->getBlockInstance('customOptionsBlock');
    }
    /**
     * @return \Magento\Backend\Test\Block\Messages
     */
    public function getMessagesBlock()
    {
        return $this->getBlockInstance('messagesBlock');
    }
    /**
     * @return \Magento\Theme\Test\Block\Html\Title
     */
    public function getTitleBlock()
    {
        return $this->getBlockInstance('titleBlock');
    }
    /**
     * @return \Magento\Review\Test\Block\Product\View\Summary
     */
    public function getReviewSummary()
    {
        return $this->getBlockInstance('reviewSummary');
    }
    /**
     * @return \Magento\Review\Test\Block\Product\View
     */
    public function getCustomerReviewBlock()
    {
        return $this->getBlockInstance('customerReviewBlock');
    }
    /**
     * @return \Magento\Review\Test\Block\ReviewForm
     */
    public function getReviewFormBlock()
    {
        return $this->getBlockInstance('reviewFormBlock');
    }
}
{%endhighlight%}

### Block overriding {#override-blocks}

Your module can influence functionality of another module that is defined in a corresponding block of that module. In this case, you can override existing block by a block from your module.
 
To override blocks, follow:

**Step 1.** [Create an XML page](#mtf_page_create) in your new module with the name of page you want to merge.

**Step 2.** Assign [page attributes](#mtf_page_attributes)

* with the same name as the page you want to merge
* with the same `mca`
* without `module` and `area` attributes
  
**Step 3.** Add blocks that you want to override (indicating a block class with new behaviour)

**Step 4.** Run the page generator.

Let's see an example with the following use case:

- A Magento_NewModule changes the category creation behaviour of a Magento_Catalog module.
- `editForm` block from page `\Magento\Catalog\Test\Page\Adminhtml\CatalogCategoryEdit` must be changed according to new functionality.

Let us see page `\Magento\Catalog\Test\Page\Adminhtml\CatalogCategoryEdit`:

{% highlight xml %}

<?xml version="1.0" encoding="utf-8"?>
<!--
/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
 -->
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../../../../../../vendor/magento/mtf/etc/pages.xsd">
    <page name="CatalogCategoryEdit" area="Adminhtml" mca="catalog/category/edit" module="Magento_Catalog">
        <block name="messagesBlock" class="Magento\Backend\Test\Block\Messages" locator="#messages" strategy="css selector"/>
        <block name="formPageActions" class="Magento\Catalog\Test\Block\Adminhtml\Category\Edit\PageActions" locator=".page-main-actions" strategy="css selector"/>
        <block name="editForm" class="Magento\Catalog\Test\Block\Adminhtml\Category\Edit\CategoryForm" locator="#container" strategy="css selector"/>
        <block name="modalBlock" class="Magento\Ui\Test\Block\Adminhtml\Modal" locator="._show[data-role=modal]" strategy="css selector"/>
    </page>
</config>

{% endhighlight %}

The block that we want to change is:

{% highlight xml %}
<block name="editForm" class="Magento\Catalog\Test\Block\Adminhtml\Category\Edit\CategoryForm" locator="#container" strategy="css selector"/>
{% endhighlight %}

We shouldn't change the `editForm` block in the Magento_Catalog module because in case of disabling of a Magento_NewModule module, the test will fail. Best way in this case is to create a new block in a Magento_NewModule module that covers new functionality.

Assume that we already created the new block `\Magento\NewModule\Test\Block\Adminhtml\Category\Edit\CategoryForm`.

To use the `editForm` block from the Magento_NewModule, we must follow:
  
**Step 1.** Create a `CatalogCategoryEdit.xml` page in the `<magento2>/dev/tests/functional/tests/app/Magento/NewModule/Test/Page/Adminhtml` directory.

**Step 2.** Assign page attributes

 * with the same name as the page you want to merge
 * with the same `mca`
 * without `module` and `area` attributes
     
{% highlight xml %}

<?xml version="1.0" encoding="utf-8"?>
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../../../../../../vendor/magento/mtf/etc/pages.xsd">
    <page name="CatalogCategoryEdit" mca="catalog/category/edit">
    </page>
</config>

{% endhighlight %}

**Step 3.** Add blocks that you want to redirect.

{% highlight xml %}
<?xml version="1.0" encoding="utf-8"?>
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../../../../../../vendor/magento/mtf/etc/pages.xsd">
    <page name="CatalogCategoryEdit" mca="catalog/category/edit">
        <block name="editForm" class="\Magento\NewModule\Test\Block\Adminhtml\Category\Edit\CategoryForm" locator="//div[contains(@data-bind, 'category_form')]" strategy="xpath"/>
    </page>
</config>
{% endhighlight %}

**Step 4.** Run the page generator.

Enter in terminal:

    php <magento2>/dev/tests/functional/utils/generate.php

Now when you call `editForm` block from the `CatalogCategoryEdit` page, class `\Magento\NewModule\Test\Block\Adminhtml\Category\Edit\CategoryForm` will be used.

<!-- LINK DEFINITIONS -->

[Block]: {{page.baseurl}}mtf/mtf_entities/mtf_block.html
[Magento\Mtf\Page\BackendPage]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/Page/BackendPage.php
[Magento\Mtf\Page\FrontendPage]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/Page/FrontendPage.php
[Magento\Mtf\Page\ExternalPage]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/Page/ExternalPage.php


