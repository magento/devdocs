---
group: product-recommendations
title: Customize
ee_only: True
---

When you install the Product Recommendations module, Adobe Commerce creates the `ProductRecommendationsLayout` directory. This directory contains template files that you can customize to change how the recommendations appear on your storefront. Specifically, you can modify or override the following template:

`<your theme>/Magento_ProductRecommendationsLayout/web/template/recommendations.html`

For more information about modifying template files, refer to [Template customization]({{ site.gdeurl }}/frontend-dev-guide/templates/template-walkthrough.html) in the Frontend Developer Guide.

If you modify the `recommendations.html` file, you must preserve the following tags in the file to ensure that Adobe Commerce can collect recommendation metrics from your storefront:

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

When you [create]({{ site.user_guide_url }}/recommendations/create.html) a recommendation, you specify the [location]({{ site.user_guide_url }}/recommendations/placement.html) where it appears on the page. A recommendation unit can be placed at either the top or the bottom of the main content container. However, you can customize this placement. If you create a Page Builder recommendation content type, use the Page Builder tools to position the recommendation unit on the page. For all other page types, edit the `*.xml` files that are generated when the recommendation is created.

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

## Custom Product attributes

Developers often need access to custom product attribute values in recommendations units on storefronts so that they can add visual treatments to products based on those attributes.

For example, if your store sells some organic products, you might have a custom attribute on those products designating them as `Organic = Yes`. You may need access to this attribute value on the storefront so that you can give these products special visual treatment when they appear in Recommendations. Similarly, access to these custom product attribute values allows you to badge products or drive custom logic in the presentation layer of your site.

![Add Badge]({{ page.baseurl }}/recommendations/images/unit.png)

To make sure a custom product attribute is available when you render the recommendation unit on the page, set the `Used in Product Listing` property to `Yes` in the [Product Attributes](https://docs.magento.com/user-guide/stores/attribute-product-create.html#step-4-describe-the-storefront-properties) page in the Admin.

When this property is set, the JSON payload includes an `attributes` object that contains an array of attribute codes and values. You can then apply custom storefront styling based on these attribute values, such as adding special visual treatments or badges as mentioned previously.

{:.bs-callout-info}
Product attribute changes can take up to an hour to appear in the JSON payload.
