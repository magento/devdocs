---
group: product-recommendations
title: Data Collection for Recommendations
ee_only: True
---

When you install and configure an Adobe Commerce services product, such as [Product Recommendations]({{ page.baseurl }}/recommendations/install-configure.html) or [Live Search]({{ page.baseurl }}/live-search/install.html), the modules deploy user events to your storefront. These events collect behavioral data from your shoppers and are used to compute product recommendations. For example, the `view` event is used to compute the `Viewed this, viewed that` recommendation type and the `place-order` event is used to compute the `Bought this, bought that` recommendation type.

If you are using the default Adobe Commerce storefront or [PWA](https://magento.github.io/pwa-studio/product-recs/), handling these events is done for you. If you are writing your own custom storefront, learn how you can [integrate Product Recommendations]({{ site.baseurl }}/recommendations/headless.html) into your storefront.

The [Storefront Events Collector]({{ site.baseurl }}/shared-services/storefront-event-collector.html#quick-start) lists all the events deployed to your storefront. From that list, however, there is a subset of events specific to Product Recommendations. These events collect data when shoppers interact with recommendation units on the storefront and power the metrics used to help you analyze how well your recommendations are performing.

Event | Description | [Used for metrics?](https://docs.magento.com/user-guide/marketing/recommendation-metrics.html)
--- | --- | ---
`impression-render` | The recommendation unit is rendered on the page. | Yes
`rec-add-to-cart-click` | The customer clicks the **Add to cart** button for an item in the recommendation unit. | No (unless there is an add to cart button present in the recommendations template)
`rec-click` | The customer clicks a product in the recommendation unit. | Yes
`view` | The recommendation unit becomes viewable on the page, such as by scrolling into view. | Yes

{:.bs-callout-info}
The following events are not specific to Product Recommendations, but are required to return results:

-  `view`
-  `add-to-cart`
-  `place-order`

Many shoppers use ad blockers or enable privacy settings. These configurations prevent the `magento/product-recommendations` module from capturing events, which causes the metrics in the [Product Recommendations dashboard](https://docs.magento.com/user-guide/marketing/product-recommendations.html#dashboard) to underreport engagement and revenue numbers.

{:.bs-callout-info}
If [Cookie Restriction Mode](https://docs.magento.com/user-guide/stores/compliance-cookie-restriction-mode.html) is enabled, Adobe Commerce does not collect behavioral data until the shopper consents to using cookies. If Cookie Restriction Mode is disabled, Adobe Commerce collects behavioral data by default.
