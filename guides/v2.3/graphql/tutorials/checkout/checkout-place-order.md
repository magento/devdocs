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

Use `placeOrder` mutation query to place order.

**Request**
```text
mutation {
  placeOrder(input: {cart_id: "A7jCcOmUjjCh7MxDIzu1SeqdqETqEa5h"}) {
    order {
      order_id
    }
  }
}
```

where
`{{ CART_ID }}` - shopping cart unique ID from [Step 2. Create empty cart]({{ page.baseurl }}/graphql/tutorials/checkout/checkout-add-product-to-cart.html).

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
Send customer's authorization token in the `Authorization` parameter of the header if you place order as a registered customer. See ["Get customer authorization token"]({{ page.baseurl }}/graphql/get-customer-authorization-token.html) to get more details.
