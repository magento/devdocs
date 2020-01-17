---
group: product-recommendations
title: Recommendation Events
---

When you deploy the `product-recommendations` module, the module tracks the following user events, which enables behavioral data collection. This type of data is required by Adobe Sensei to compute product affinities based on production shopper behavior like product views, adds-to-cart, and checkouts. Magento does not collect personally identifiable information.

Event |Description
--- | ---
`add-to-cart` | Triggered when the customer adds an item to their cart
`add-to-wishlist` | Triggered when the customer adds an item to their wishlist
`apply-discount-action` | Triggered when the customer applies a discount to a cart
`edit-product-qty` | Triggered when the customer modifies the number of items in their cart
`initiate-checkout` | Triggered when the customer clicks the **Proceed to Checkout** button
`instant-purchase` | Triggered when the customer selects the **Add to Cart** button on a category page
`place-order` | Triggered when the customer clicks the **Place Order** button
`remove-discount-action` | Triggered when the customer removes a discount from a cart
`remove-from-cart` | Triggered when the customer removes an item from their cart
`remove-from-wishlist` | Triggered when the customer removes an item from their wishlist
`sign-in` | Triggered when the customer signs into their account
`sign-out` | Triggered when the customer signs out of their account
`view` | Triggered when the customer views a specific item on the products page
