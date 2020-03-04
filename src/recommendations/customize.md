---
group: product-recommendations
title: Customize Recommendations
---

When you install the Product Recommendations module, Magento creates the `ProductRecommendationsLayout` directory under your Magento theme directory. The `ProductRecommendationsLayout` directory contains the files you can customize if you want to make changes to how the recommendations appear on your storefront and where those recommendation units are placed.

The following table describes each subdirectory under `ProductRecommendationsLayout`:

|**Directory**|**Purpose**|
|---|---|
|`layout`|Contains `*.xml` files for each page type|
|`templates`|Contains files that call the fetch and render scripts|
|`web\js`|Contains the JavaScript files that fetch and render recommendations for your store|
|`web\template`|Contains the template for the `magento/product-recommendations` module|

This topic will focus on how you can customize the recommendations template and the location where recommendation units appear on your site.

## Template updates

If you want to customize how the recommendations display on your storefront, you can modify or overwrite the following template:

`<your theme>/Magento_ProductRecommendationsLayout/web/template/recommendations.html`

However, to ensure Magento can successfully collect metrics for the recommendations on your storefront, you must preserve the following tags in the `recommendations.html` file:

|Tag|Use|
|---|---|
|`<div data-bind="attr : {'data-unit-id' : unitId }"...</div>`| Collects view events.|
|`<a data-bind="attr : {'data-sku' : sku, 'data-unit-id'}"...</a>`| Collects click events. <br/>**Note:** If you add any anchor tags, you must include these attributes.|

Refer to the [template overview]({{ site.baseurl }}/guides/v{{ site.version }}/frontend-dev-guide/templates/template-walkthrough.html) for more information about how to modify templates in Magento.

## Recommendation unit placement

When you [create a new recommendation](https://docs.magento.com/m2/ee/user_guide/marketing/create-new-rec.html), you specify [where you want the recommendation unit to appear](https://docs.magento.com/m2/ee/user_guide/marketing/product-recommendations.html#productrecplacement) on your page. You can select either above the main content or below the main content. You can, however, customize that location by editing the `*.xml` files responsible for the layout. Magento creates these files when you create a recommendation.

1. Locate the `layout` directory: `<your theme>/Magento_ProductRecommendationsLayout/layout/<page handles>.xml`.

    The following table lists the XML filenames used in the above `<page handles>` variable depending on your page:

    |Filename|Page|
    |---|---|
    |`catalog_category_view.xml`|Category|
    |`catalog_product_view.xml`|Product detail|
    |`checkout_cart_index.xml`|Cart|
    |`checkout_onepage_success.xml`|Checkout|
    |`cms_index_index.xml`|Home|

1. Open the page you want to modify. For example, let's modify the `catalog_category_view.xml` file. It should look something like this:

    ```html
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

    Note that `<referenceBlock name="main.content">` contains `name="product_recommendations_product_below_content"` which means the recommendation unit will appear after the main content. But maybe you want the recommendation unit to appear after the product image on the product detail page.

1. Here is the code after you make your updates:

    ```html
    <?xml version="1.0"?>
    <page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
            <referenceBlock name="page.wrapper">
        <block class="Magento\Framework\View\Element\Template" before="product.info" name="product_recommendations_fetcher" template="Magento_ProductRecommendationsStorefront::fetcher.phtml" />
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

    Note that `<referenceBlock name=` now contains the container layout name where you want the recommendation unit to appear: `<referenceBlock name="product.info.media">`. You can specify any open-source container layout name. If you want the recommendation unit to appear before or after the block, specify the `after="-"` or `before="-"` attribute.

Refer to [layout overview]({{ site.baseurl }}/guides/v{{ site.version }}/frontend-dev-guide/layouts/layout-overview.html) for more information.
