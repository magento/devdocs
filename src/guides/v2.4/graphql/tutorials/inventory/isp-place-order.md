---
layout: tutorial
group: graphql
title: Step 8. Place the order
subtitle: GraphQL In-store pickup tutorial
level3_subgroup: graphql-inventory
return_to:
  title: GraphQL Overview
  url: graphql/index.html
menu_order: 80
functional_areas:
  - Integration
---

The `placeOrder` mutation places an order.

`{ CART_ID }` is the unique shopping cart ID from [Step 2. Create empty cart]({{ page.baseurl }}/graphql/tutorials/inventory/isp-add-product-to-cart.html).

**Headers:**

`Authorization: Bearer <customer token>`

`Store: us`

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

1. Sign in as a customer to the website using the email `jdoe@example.com` and password `Password1`.

1. Go to **My Account** > **My Orders**. The order you created is displayed.  The order is also displayed on the Orders grid (**Sales** > **Orders**) in the Magento Admin.
