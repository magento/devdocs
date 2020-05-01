---
group: product-recommendations
title: Recommendation Events
ee_only: True
---

When you deploy the `magento/product-recommendations` module, the module tracks the following user events. These events enable behavioral data collection.

{:.bs-callout-info}
If [Cookie Restriction Mode](https://docs.magento.com/m2/ce/user_guide/stores/compliance-cookie-restriction-mode.html) is enabled, Magento does not collect behavioral data until the shopper consents. If Cookie Restriction Mode is disabled, Magento collects behavioral data by default.

Event |Description
--- | ---
`add-to-cart` | A product is added to the cart
`add-to-wishlist` | A product is added to the wishlist
`apply-discount-action` | A discount code is applied to the cart
`edit-product-qty` | The quantity of a product in a cart changed to a non-zero value
`initiate-checkout` | The customer initiates checkout
`instant-purchase` | The customer completes an instant purchase.
`place-order` | The customer's order is submitted
`remove-discount-action` | A discount code is removed from a cart
`remove-from-cart` | A product is removed from a cart
`remove-from-wishlist` | A product is removed from a wishlist
`sign-in` | The customer signs into their account
`sign-out` | The customer signs out of their account
`view` | The customer views a product details page (PDP)
