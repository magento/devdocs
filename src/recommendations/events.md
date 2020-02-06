---
group: product-recommendations
title: Recommendation Events
---

When you deploy the `product-recommendations` module, the module tracks the following user events, which enables behavioral data collection.

Event |Description
--- | ---
`add-to-cart` | Triggered when a cart updates with a new item
`add-to-wishlist` | Triggered when a wishlist updates with a new item
`apply-discount-action` | Triggered when a discount is applied to a cart
`edit-product-qty` | Triggered when the number of items in a cart is modified
`initiate-checkout` | Triggered when the shopper clicks the **Proceed to Checkout** button
`instant-purchase` | Triggered when the shopper completes an instant purchase. Typically triggered on a product page, but could be triggered on product listing pages like category and search results
`place-order` | Triggered when the customer's order is complete
`remove-discount-action` | Triggered when a discount is removed from a cart
`remove-from-cart` | Triggered when an item is removed from a cart
`remove-from-wishlist` | Triggered when an item from a wishlist is removed
`sign-in` | Triggered when the shopper signs into their account
`sign-out` | Triggered when the shopper signs out of their account
`view` | Triggered when a shopper views a product details page (PDP)
