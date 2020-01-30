---
group: product-recommendations
title: Overriding the Product Recommendations Template
---

If you want to customize how the recommendations display on your storefront, you can modify or overwrite the following template:

`<your theme>/Magento_ProductRecommendationsLayout/web/template/recommendations.html`

To ensure recommendations are fetched correctly, you need to preserve the following tags in the `recommendations.html` file:

-  `<div data-bind="attr : {'data-unit-id' : unitId }"`

-  `<a tabindex="-1" class="product photo product-item-photo" data-bind="attr : {'data-sku' : sku, 'data-unit-id'...</a>`

-  `<a class="product-item-link" data-bind="attr : {'data-sku' : sku, 'data-unit-id'...</a>`

Refer to the [template overview]({{ base.baseurl }}/frontend-dev-guide/templates/template-walkthrough.html) for more information about how to modify the default template.
