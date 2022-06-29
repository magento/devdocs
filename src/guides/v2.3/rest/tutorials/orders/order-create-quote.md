---
layout: tutorial
group: rest-api
title: Step 4. Create a quote
subtitle: Order processing tutorial
return_to:
  title: REST tutorials
  url: rest/tutorials/index.html
menu_order: 4
level3_subgroup: order-tutorial
redirect_from:
  - /guides/v2.3/get-started/order-tutorial/order-create-quote.html
functional_areas:
  - Integration
  - Orders
  - Cart
---

When a customer adds an item to their [shopping cart](https://glossary.magento.com/shopping-cart) for the first time, Magento creates a [quote](https://glossary.magento.com/quote). Magento uses a quote to perform tasks such as

*  Track each item the customer wants to buy, including the quantity and base cost
*  Gather information about the customer, including billing and shipping addresses
*  Determine shipping costs
*  Calculate the subtotal, add costs (shipping fees, taxes, etc.) and apply coupons to determine the grand total
*  Determine the [payment method](https://glossary.magento.com/payment-method)
*  Place the order so that the merchant can fulfill it.

### Types of carts {#cart-types}

Magento identifies three types of users that can create a shopping cart:

*  An [admin](https://glossary.magento.com/admin) user can create a cart on behalf of a customer. For all admin requests, you must provide an admin [authorization](https://glossary.magento.com/authorization) token in the call's authorization header.
*  A logged-in customer. Calls to create a cart and add items must contain the customer's authorization token in the authorization header.
*  A guest user. These users could be customers who haven't logged in yet, or they could be users who have no intention of creating an account. An anonymous user's cart is called a guest cart.

### Create a cart for a logged-in customer {#create-cart}

All calls for a logged in customer must specify customer's token `q0u66k8h42yaevtchv09uyy3y9gaj2ap` in the header.

{:.bs-callout-info}
Use the `V1/guest-carts` endpoint to create a cart on behalf of a guest. Do not include an authorization token. The `quoteId` for the guest customer quote will be masked.

**Endpoint:**

`POST <host>/rest/<store_code>/V1/carts/mine`

**Headers:**

`Content-Type: application/json`

`Authorization: Bearer <customer token>`

**Payload:**

None

**Response:**

The response is the `quoteId: 4`

{:.bs-callout-tip}
Some calls refer to this parameter as the `cartId`.

### Verify this step {#verify-step}

There are no additional verification steps.`quoteId` values are not displayed on the [website](https://glossary.magento.com/website) or in Admin.
