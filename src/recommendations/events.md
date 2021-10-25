---
group: product-recommendations
title: Data Collection for Recommendations
ee_only: True
---

When you install and deploy an Adobe Commerce services product, such as [Product Recommendations]({{ page.baseurl }}/recommendations/install-configure.html) or [Live Search]({{ page.baseurl }}/live-search/install.html), the modules add user events that enable storefront behavioral data collection. Refer to the [Storefront Events SDK]({{ site.baseurl }}/shared-services/storefront-events-sdk.html) to learn how to handle events on an [{{site.data.var.ee}}](https://business.adobe.com/products/magento/magento-commerce.html) storefront. The Storefront Events SDK lists all events deployed. However, there are events specific to Product Recommendations as listed in the following table:

Event | Description | [Used for metrics?](https://docs.magento.com/user-guide/marketing/recommendation-metrics.html)
--- | --- | ---
`impression-render` | The recommendation unit is rendered on the page. | Yes
`rec-add-to-cart-click` | The customer clicks the **Add to cart** button for an item in the recommendation unit. | No (unless there is an add to cart button present in the recommendations template)
`rec-click` | The customer clicks a product in the recommendation unit. | Yes
`view` | The recommendation unit becomes viewable on the page, such as by scrolling into view. | Yes

{:.bs-callout-info}
The following events are not specific to Product Recommendations, but are required to return results: `view`, `add-to-cart`, and `place-order`.

If shoppers use ad blockers or enable privacy settings that prevent the `magento/product-recommendations` module from capturing events, the metrics reflected in the [Product Recommendations dashboard](https://docs.magento.com/user-guide/marketing/product-recommendations.html#dashboard) will not be accurate. Most likely, the engagement and revenue numbers will be underrepresented.

{:.bs-callout-info}
If [Cookie Restriction Mode](https://docs.magento.com/user-guide/stores/compliance-cookie-restriction-mode.html) is enabled, Magento does not collect behavioral data until the shopper consents to using cookies. If Cookie Restriction Mode is disabled, Magento collects behavioral data by default.
