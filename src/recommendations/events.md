---
group: product-recommendations
title: Recommendation Events
---

When you deploy the `product-recommendations` module, the module tracks the following user events, which enables behavioral data collection.

Event |Description
--- | ---
`add-to-cart` | A product has been added to the cart
`add-to-wishlist` | A wishlist updates with a new item
`apply-discount-action` | A discount is applied to a cart
`edit-product-qty` | The number of items in a cart is modified
`initiate-checkout` |The shopper clicked the **Proceed to Checkout** button
`instant-purchase` | The shopper completes an instant purchase. Typically triggered on a product page, but could be triggered on product listing pages like category and search results
`place-order` | The customer's order is complete
`remove-discount-action` | A discount is removed from a cart
`remove-from-cart` | An item is removed from a cart
`remove-from-wishlist` | An item from a wishlist is removed
`sign-in` | The shopper signs into their account
`sign-out` | The shopper signs out of their account
`view` | A shopper views a product details page (PDP)
