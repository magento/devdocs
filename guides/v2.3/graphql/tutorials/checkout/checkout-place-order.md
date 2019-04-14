---
layout: tutorial
group: graphql
title: Step 8. Place order
subtitle: GraphQl checkout tutorial
return_to:
  title: GraphQl checkout tutorial
  url: graphql/tutorials/index.html
menu_order: 8
contributor_name: Atwix
contributor_link: https://www.atwix.com/
---

**Request**
```text
mutation placeOrder(
  $cart_id: String!
) {
  placeOrder(
    input: {
      cart_id: $cart_id
    }
  ) {
    order {
      order_id
    }
  }
}
```

**Response**
```json
```
