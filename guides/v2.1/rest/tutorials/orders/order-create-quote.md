---
layout: tutorial
group: rest
title: Step 4. Create a quote
subtitle: Order processing tutorial
return_to:
  title: REST tutorials
  url: rest/tutorials/index.html
menu_order: 4
level3_subgroup: order-tutorial
version: 2.1
redirect_from:
  - /guides/v2.1/get-started/order-tutorial/order-create-quote.html
  - /guides/v2.2/get-started/order-tutorial/order-create-quote.html
  - /guides/v2.3/get-started/order-tutorial/order-create-quote.html
functional_areas:
  - Integration
  - Orders
  - Cart
---

When a customer adds an item to their {% glossarytooltip c7ecb18d-cefe-452d-83e2-3c4d5e355db9 %}shopping cart{% endglossarytooltip %} for the first time, Magento creates a {% glossarytooltip 77e19d0d-e7b1-4d3d-9bad-e92fbb9fb59a %}quote{% endglossarytooltip %}. Magento uses a quote to perform tasks such as

* Track each item the customer wants to buy, including the quantity and base cost
* Gather information about the customer, including billing and shipping addresses
* Determine shipping costs
* Calculate the subtotal, add costs (shipping fees, taxes, etc.) and apply coupons to determine the grand total
* Determine the {% glossarytooltip 422b0fa8-b181-4c7c-93a2-c553abb34efd %}payment method{% endglossarytooltip %}
* Place the order so that the merchant can fulfill it.

### Types of carts {#cart-types}

Magento identifies three types of users that can create a shopping cart:

* An {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}admin{% endglossarytooltip %} user can create a cart on behalf of a customer. For all admin requests, you must provide an admin {% glossarytooltip 34ecb0ab-b8a3-42d9-a728-0b893e8c0417 %}authorization{% endglossarytooltip %} token in the call's authorization header.
* A logged-in customer. Calls to create a cart and add items must contain the customer's authorization token in the authorization header.
* A guest user. These users could be customers who haven't logged in yet, or they could be users who have no intention of creating an account. An anonymous user's cart is called a guest cart.

### Create a cart for a logged-in customer {#create-cart}

This tutorial manages the cart of a logged-in customer. Unless otherwise noted, all calls must specify customer's token `q0u66k8h42yaevtchv09uyy3y9gaj2ap` in the header.

**Endpoint**

`POST http://<host>/rest/default/V1/carts/mine`

**Headers**

`Content-Type` `application/json`

`Authorization` `Bearer <customer token>`

**Payload**

None

**Response**

The response is the `quoteId`: `4`

<div class="bs-callout bs-callout-info" id="info" markdown="1">
Some calls refer to this parameter as the `cartId`.
</div>

### Verify this step {#verify-step}

There are no additional verification steps.`quoteId` values are not displayed on the {% glossarytooltip a3c8f20f-b067-414e-9781-06378c193155 %}website{% endglossarytooltip %} or in Admin.
