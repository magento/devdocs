---
layout: tutorial
group: graphql
title: Step 10. Place order
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

{{ CART_ID }}` is the unique shopping cart ID from [Step 2. Create empty cart]({{ page.baseurl }}/graphql/tutorials/checkout/checkout-add-product-to-cart.html).

**Request**

```text
mutation {
  placeOrder(input: {cart_id: "{{ CART_ID }}"}) {
    order {
      order_id
    }
  }
}
```

**Response**

```json
{
  "data": {
    "placeOrder": {
      "order": {
        "order_id": "000000001"
      }
    }
  }
}
```

{:.bs-callout .bs-callout-info}
For logged-in customers, send the customer's authorization token in the `Authorization` parameter of the header. See ["Get customer authorization token"]({{ page.baseurl }}/graphql/get-customer-authorization-token.html) for more information.
