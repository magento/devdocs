---
group: product-recommendations
title: Recommendation Events
ee_only: True
---

When you deploy the `magento/product-recommendations` module, the module tracks the following user events. These events enable behavioral data collection.

{:.bs-callout-info}
If [Cookie Restriction Mode](https://docs.magento.com/m2/ce/user_guide/stores/compliance-cookie-restriction-mode.html) is enabled, Magento does not collect behavioral data until the shopper consents. If Cookie Restriction Mode is disabled, Magento collects behavioral data by default.

Event | Category | Description
--- | ---
`add-to-cart` | product | A product is added to the cart
`add-to-wishlist` | product | A product is added to the wishlist
`apply-discount-action` | shopping-cart | A discount code is applied to the cart
`edit-product-qty` | shopping-cart | The quantity of a product in a cart changed to a non-zero value
`impression-render` | recommendation-unit | The recommendation unit is rendered on the page. If there are _N_ items rendered, there will be _N_ recommended item contexts attached to this event (one per item recommended).
`initiate-checkout` | shopping-cart | The customer initiates checkout
`instant-purchase` | checkout |  The customer completes an instant purchase
`place-order` | checkout | The customer's order is submitted
`rec-add-to-cart-click` | recommendation-unit | The customer clicks the **Add to cart** button for an item in the recommendation unit. The recommended item context represents the item the customer clicked.
`rec-click` | recommendation-unit | **Not supported on Chrome**. The customer clicks a product in the recommendation unit. The recommended item context represents the item the customer clicked.
`remove-discount-action` | shopping-cart | A discount code is removed from a cart
`remove-from-cart` | product | A product is removed from a cart
`remove-from-wishlist` | product | A product is removed from a wishlist
`sign-in` | shopper | The customer signs into their account
`sign-out` | shopper | The customer signs out of their account
`view` | product | The customer views a product details page (PDP)
`view` | recommendation-unit | The recommendation unit becomes viewable on the page, such as by scrolling into view, appearing, and so on
