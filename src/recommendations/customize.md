---
group: product-recommendations
title: Overriding the Product Recommendations Template
---

If you want to customize how the recommendations display on your storefront, you can modify or overwrite the following template:

`<your theme>/Magento_ProductRecommendationsLayout/web/template/recommendations.html`

However, to ensure Magento can successfully collect metrics for the recommendations on your storefront, you must preserve the following tags in the `recommendations.html` file:

|Tag|Use|
|---|---|
|`<div data-bind="attr : {'data-unit-id' : unitId }"...</div>`| Collects view events|
|`<a data-bind="attr : {'data-sku' : sku, 'data-unit-id'}"...</a>`| Collects click events. **Note** If you add any anchor tags, you must include these attributes.|

Refer to the [template overview]({{ site.baseurl }}/guides/v{{ site.version }}/frontend-dev-guide/templates/template-walkthrough.html) for more information about how to modify templates in Magento.
