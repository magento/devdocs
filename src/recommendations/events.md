---
group: product-recommendations
title: Collect Data
ee_only: True
---

When you install and configure SaaS-based Adobe Commerce features such as [Product Recommendations]({{ site.user_guide_url }}/recommendations/install-configure.html) or [Live Search]({{ site.user_guide_url }}/live-search/install.html), the modules deploy behavioral data collection to your storefront. This mechanism collects anonymized behavioral data from your shoppers and powers product recommendations. For example, the `view` event is used to compute the `Viewed this, viewed that` recommendation type, and the `place-order` event is used to compute the `Bought this, bought that` recommendation type.

The following events are not specific to Product Recommendations, but are required to return results:

-  `view`
-  `add-to-cart`
-  `place-order`

The [Storefront Events Collector]({{ site.baseurl }}/shared-services/storefront-event-collector.html#quick-start) lists all the events deployed to your storefront. From that list, however, there is a subset of events specific to Product Recommendations. These events collect data when shoppers interact with recommendation units on the storefront and power the metrics used to help you analyze how well your recommendations are performing.

Event | Description | [Used for metrics?]({{ site.user_guide_url }}/recommendations/workspace.html)
--- | --- | ---
`impression-render` | The recommendation unit is rendered on the page. | Yes
`rec-add-to-cart-click` | The customer clicks the **Add to cart** button for an item in the recommendation unit. | Yes, when an **Add to cart** button is present in the recommendations template.
`rec-click` | The customer clicks a product in the recommendation unit. | Yes
`view` | The recommendation unit becomes viewable on the page, such as by scrolling into view. | Yes

If your storefront is implemented with PWA Studio, refer to the [PWA documentation](https://developer.adobe.com/commerce/pwa-studio/integrations/product-recommendations/). If you use a custom frontend technology such as React or Vue JS, refer to the user guide to learn how to integrate Product Recommendations in a [headless]({{ site.user_guide_url }}/recommendations/headless.html) environment.

Ad blockers and privacy settings can prevent the `magento/product-recommendations` module from capturing events and might cause the engagement and revenue [metrics]({{ site.user_guide_url }}/recommendations/workspace.html) to be underreported.

{:.bs-callout-info}
If [Cookie Restriction Mode]({{ site.user_guide_url }}/stores/compliance-cookie-restriction-mode.html) is enabled, Adobe Commerce does not collect behavioral data until the shopper consents to using cookies. If Cookie Restriction Mode is disabled, Adobe Commerce collects behavioral data by default.
