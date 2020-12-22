---
group: product-recommendations
title: Recommendation Events
ee_only: True
---

When you deploy the `magento/product-recommendations` module, the module tracks the following user events. These events enable behavioral data collection.

If shoppers use ad blockers or enable privacy settings that prevent the `magento/product-recommendations` module from capturing events, the metrics reflected in the [Product Recommendations dashboard](https://docs.magento.com/user-guide/marketing/product-recommendations.html#dashboard) will not be accurate. Most likely, the engagement and revenue numbers will be underrepresented.

{:.bs-callout-info}
If [Cookie Restriction Mode](https://docs.magento.com/m2/ce/user_guide/stores/compliance-cookie-restriction-mode.html) is enabled, Magento does not collect behavioral data until the shopper consents. If Cookie Restriction Mode is disabled, Magento collects behavioral data by default.

Event | Category | Description
--- | ---
`add-to-cart` | product | A product is added to the cart
`add-to-wishlist` | product | A product is added to the wishlist
`apply-discount-action` | shopping-cart | A discount code is applied to the cart
`edit-product-qty` | shopping-cart | The quantity of a product in a cart changed to a non-zero value
`impression-render` | recommendation-unit | The recommendation unit is rendered on the page.
`initiate-checkout` | shopping-cart | The customer initiates checkout
`instant-purchase` | checkout |  The customer completes an instant purchase
`place-order` | checkout | The customer's order is submitted
`rec-add-to-cart-click` | recommendation-unit | The customer clicks the **Add to cart** button for an item in the recommendation unit.
`rec-click` | recommendation-unit | The customer clicks a product in the recommendation unit.
`remove-discount-action` | shopping-cart | A discount code is removed from a cart
`remove-from-cart` | product | A product is removed from a cart
`remove-from-wishlist` | product | A product is removed from a wishlist
`sign-in` | shopper | The customer signs into their account
`sign-out` | shopper | The customer signs out of their account
`view` | product | The customer views a product details page (PDP)
`view` | recommendation-unit | The recommendation unit becomes viewable on the page, such as by scrolling into view
