---
layout: default
group: get-started
subgroup: 20_REST
title: Order Processing Tutorial
menu_title: Step 5. Create a quote
menu_order: 25
level3_menu_node: level3child
level3_subgroup: order
version: 2.1
github_link: get-started/order/order-create-quote.md
---

Previous Step: [Create a customer]({{page.baseurl}}/get-started/order/order-create-customer.html) | Next Step: [Add items to the cart]({{page.baseurl}}/get-started/order/order-add-items.html)


## Step 5. Create a quote

When a customer adds an item to their shopping cart for the first time, Magento creates a quote. Magento uses a quote to perform tasks such as

* Track each item the customer wants to buy, including the quantity and base cost
* Gather information about the customer, including billing and shipping addresses
* Determine shipping costs
* Calculate the subtotal, add costs (shipping fees, taxes, etc.) and apply coupons to determine the grand total
* Determine the payment method
* Place the order so that the merchant can fulfill it.

### Types of carts {#cart-types}
Magento identifies three types of users that can create a shopping cart:

* An admin user can create a cart on behalf of a customer. For all admin requests, you must provide an admin authorization token in the call's authorization header.
* A logged-in customer. Calls to create a cart and add items must contain the customer's authorization token in the authorization header.
* A guest user. These users could be customers who haven't logged in yet, or they could be users who have no intention of creating an account. An anonymous user's cart is called a guest cart.

### Create a cart for a logged-in customer {#create-cart}
This tutorial manages a the cart of a logged-in customer. Unless otherwise noted, all calls must specify customer's token `q0u66k8h42yaevtchv09uyy3y9gaj2ap` in the header.

**Endpoint**

`POST /V1/carts/mine`

**Headers**

`Content-Type` `application/json`

`Authorization` `Bearer <customer token>`

**Payload**

None

**Response**

The response is the `quoteId`. Some calls refer to this parameter as the `cartId`.

`4`

Previous Step: [Create a customer]({{page.baseurl}}/get-started/order/order-create-customer.html) | Next Step: [Add items to the cart]({{page.baseurl}}/get-started/order/order-add-items.html)
