---
group: product-recommendations
title: Customize Recommendations
ee_only: True
---

When you install the Product Recommendations module, Magento creates the `ProductRecommendationsLayout` directory under your Magento theme directory. This directory contains files that you can customize to change how the recommendations appear on your storefront and where those recommendation units are placed.

The following table describes each subdirectory under `ProductRecommendationsLayout`:

|**Directory**|**Purpose**|
|---|---|
|`layout`|Contains `*.xml` files for each page type|
|`templates`|Contains files that call the fetch and render scripts|
|`web/js`|Contains the JavaScript files that fetch and render recommendations for your store|
|`web/template`|Contains the template for the `magento/product-recommendations` module|

This topic describes how you can customize the recommendations template as well as the placement of recommendation units on your site.

## Update template

If you want to customize how the recommendations display on your storefront, you can modify or overwrite the following template:

`<your theme>/ProductRecommendationsLayout/web/template/recommendations.html`

However, to ensure Magento can successfully collect metrics for the recommendations on your storefront, you must preserve the following tags in the `recommendations.html` file:

|Tag|Use|
|---|---|
|`<div data-bind="attr : {'data-unit-id' : unitId }"...</div>`| Collects view events.|
|`<a data-bind="attr : {'data-sku' : sku, 'data-unit-id'}"...</a>`| Collects click events. <br/>**Note:** If you add any anchor tags, you must include these attributes.|

Refer to the [template overview]({{ site.baseurl }}/guides/v{{ site.version }}/frontend-dev-guide/templates/template-walkthrough.html) for more information about how to modify templates in Magento.

## Customize recommendation unit positioning

When you [create a recommendation](https://docs.magento.com/m2/ee/user_guide/marketing/create-new-rec.html), you specify [where you want the recommendation unit to appear](https://docs.magento.com/m2/ee/user_guide/marketing/product-recommendations.html#productrecplacement) on your page. For example, you can select to place the recommendations either at the top or the bottom of the main content container. However, you can customize this placement. If you created a recommendation unit for Page Builder, you can use the Page Builder editing environment to customize where you want the recommendation unit to display on the page. For all other page types, you can edit the `*.xml` files responsible for the layout. Magento generates these `*.xml` files when you create a recommendation.

1. Change to the `layout` directory:

    ```bash
    cd `<your theme>/ProductRecommendationsLayout/layout`
    ```

    The following table lists the XML files present in this directory:

    |Filename|Page|
    |---|---|
    |`catalog_category_view.xml`|Category|
    |`catalog_product_view.xml`|Product detail|
    |`checkout_cart_index.xml`|Cart|
    |`checkout_onepage_success.xml`|Checkout|
    |`cms_index_index.xml`|Home|

    {:.bs-callout-info}
    The filenames in the `layout` directory might be different if your store uses third-party extensions.

1. Let's modify the `catalog_product_view.xml` file so that the recommendation unit appears after the product image on the product detail page. Before you customize this XML file, let's take a look at the file and understand the sections you will need to modify:

    ```xml
    <?xml version="1.0"?>
    <page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
        <referenceBlock name="page.wrapper">
            <block class="Magento\Framework\View\Element\Template" before="-" name="product_recommendations_fetcher" template="Magento_ProductRecommendationsStorefront::fetcher.phtml" />
        </referenceBlock>
        <body>
            <referenceBlock name="main.content">
                <block class="Magento\ProductRecommendationsStorefront\Block\Renderer" after="-" name="product_recommendations_product_below_content" template="Magento_ProductRecommendationsStorefront::renderer.phtml">
                    <arguments>
                        <argument name="pagePlacement" xsi:type="string">below-main-content</argument>
                    </arguments>
                </block>
            </referenceBlock>
        </body>
    </page>
    ```

    In the above snippet, the `main.content` reference block indicates the recommendation unit will be placed somewhere relative to that element. Its `block` element contains the `after="-"` attribute, which specifies that the recommendation unit will be displayed on the page after the main content block.

1. Let's modify this file by specifying a different content block.

    You will change the reference block `name` from `main.content` to `product.info.media`.

    ```xml
    <?xml version="1.0"?>
    <page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
        <referenceBlock name="page.wrapper">
            <block class="Magento\Framework\View\Element\Template" before="-" name="product_recommendations_fetcher" template="Magento_ProductRecommendationsStorefront::fetcher.phtml" />
        </referenceBlock>
        <body>
            <referenceBlock name="product.info.media">
                <block class="Magento\ProductRecommendationsStorefront\Block\Renderer" after="-" name="product_recommendations_product_below_content" template="Magento_ProductRecommendationsStorefront::renderer.phtml">
                    <arguments>
                        <argument name="pagePlacement" xsi:type="string">below-main-content</argument>
                    </arguments>
                </block>
            </referenceBlock>
        </body>
    </page>
    ```

    This change results in your recommendation unit appearing after the product image on the product detail page. If you want the recommendation unit to appear before the `product.info.media`, change the `after="-"` attribute to `before="-"`. The `pagePlacement` argument is an internal argument that should not be modified.

Refer to [layout overview]({{ site.baseurl }}/guides/v{{ site.version }}/frontend-dev-guide/layouts/layout-overview.html) for more information about the types of blocks on the page.
