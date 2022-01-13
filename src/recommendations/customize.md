---
group: product-recommendations
title: Customize Recommendations
ee_only: True
---

When you install the Product Recommendations module, Magento creates the `ProductRecommendationsLayout` directory. This directory contains template files that you can customize to change how the recommendations appear on your storefront. Specifically, you can modify or override the following template:

`<your theme>/Magento_ProductRecommendationsLayout/web/template/recommendations.html`

For more information about how to modify template files in Magento, refer to the [template overview]({{ site.gdeurl }}/frontend-dev-guide/templates/template-walkthrough.html).

If you do modify the `recommendations.html` file, you must preserve the following tags within the file to ensure Magento can successfully collect metrics for the recommendations on your storefront:

|Tag|Use|
|---|---|
|`<div data-bind="attr : {'data-unit-id' : unitId }"...</div>`| Collects view events.|
|`<a data-bind="attr : {'data-sku' : sku, 'data-unit-id'}"...</a>`| Collects click events. <br/>**Note:** If you add any anchor tags, you must include these attributes.|

In addition to the `recommendations.html` file, the `ProductRecommendationsLayout` directory contains the following subdirectories:

|Directory|Purpose|
|---|---|
|`layout`|Contains `*.xml` files for each page type|
|`templates`|Contains files that call the fetch and render scripts|
|`web/js`|Contains the JavaScript files that fetch and render recommendations for your store|
|`web/template`|Contains the template for the `magento/product-recommendations` module|

## Recommendation unit positioning

When you [create a recommendation]({{ site.user_guide_url }}/marketing/create-new-rec.html), you specify [where you want the recommendation unit to appear]({{ site.user_guide_url }}/marketing/product-recommendations.html#productrecplacement) on your page. For example, you can select to place the recommendations either at the top or the bottom of the main content container. However, you can customize this placement. If you created a recommendation unit for Page Builder, you can use the Page Builder editing environment to customize where you want the recommendation unit to display on the page. For all other page types, you can edit the `*.xml` files responsible for the layout. Magento generates these `*.xml` files when you create a recommendation.

1. Change to the `layout` directory:

    ```bash
    cd `<your theme>/Magento_ProductRecommendationsLayout/layout`
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

Refer to [layout overview]({{ site.gdeurl }}/frontend-dev-guide/layouts/layout-overview.html) for more information about the types of blocks on the page.

## Product attributes

If you want to draw attention to certain products in a recommendation unit, you can fetch and render any custom product attributes you have defined in the Admin. For example, you can apply a badge in a recommendation unit to indicate a product is on sale:

![Add Badge]({{ page.baseurl }}/recommendations/images/unit.png)

To make sure a custom product attribute in available when you render the recommendation unit on the page, set the `Used in Product Listing` property to `Yes` in the [Product Attributes](https://docs.magento.com/user-guide/stores/attribute-product-create.html#step-4-describe-the-storefront-properties) page in the Admin.

When this property is set, that custom product attribute is included in the JSON payload when the recommendations service fetches the product data. You can then apply your storefront stylings so that attribute is applied to the product.
