---
group: product-recommendations
title: Recommendation Events
ee_only: True
---

When you deploy the `magento/product-recommendations` module, the module adds user events that enable behavioral data collection.

If shoppers use ad blockers or enable privacy settings that prevent the `magento/product-recommendations` module from capturing events, the metrics reflected in the [Product Recommendations dashboard](https://docs.magento.com/user-guide/marketing/product-recommendations.html#dashboard) will not be accurate. Most likely, the engagement and revenue numbers will be underrepresented.

{:.bs-callout-info}
If [Cookie Restriction Mode](https://docs.magento.com/user-guide/stores/compliance-cookie-restriction-mode.html) is enabled, Magento does not collect behavioral data until the shopper consents. If Cookie Restriction Mode is disabled, Magento collects behavioral data by default.

The following table shows the storefront events specific to Product Recommendations.

Event | Description
--- | ---
`impression-render` | The recommendation unit is rendered on the page.
`rec-add-to-cart-click` | The customer clicks the **Add to cart** button for an item in the recommendation unit.
`rec-click` | The customer clicks a product in the recommendation unit.
`view` | The recommendation unit becomes viewable on the page, such as by scrolling into view

Refer to the [Storefront Events SDK]{{ site.baseurl }}/shared-services/storefront-events-sdk.html) to learn about the event publishing and subscription service available to all Adobe Commerce merchants.
