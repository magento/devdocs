---
layout: tutorial
group: graphql
title: Step 10. Place the order
subtitle: GraphQL checkout tutorial
level3_subgroup: graphql-checkout
return_to:
  title: GraphQL Overview
  url: graphql/index.html
menu_order: 100
functional_areas:
  - Integration
contributor_name: Atwix
contributor_link: https://www.atwix.com/
---

The `placeOrder` mutation places an order.

`{ CART_ID }` is the unique shopping cart ID from [Step 2. Create empty cart]({{ page.baseurl }}/graphql/tutorials/checkout/checkout-add-product-to-cart.html).

Send the customer's authorization token in the `Authorization` parameter of the header. See [Authorization tokens]({{page.baseurl}}/graphql/authorization-tokens.html) for more information.

**Request:**

```graphql
mutation {
  placeOrder(input: {cart_id: "{ CART_ID }"}) {
    order {
      order_number
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "placeOrder": {
      "order": {
        "order_number": "000000001"
      }
    }
  }
}
```

## Verify this step {#verify-step}

1. Sign in as a customer to the website using the email `john.doe@example.com` and password `b1b2b3l@w+`.

1. Go to **My Account** > **My Orders**. The order you created is displayed.  The order is also displayed on the Orders grid (**Sales** > **Orders**) in the Magento Admin.
