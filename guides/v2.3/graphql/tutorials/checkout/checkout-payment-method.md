---
layout: tutorial
group: graphql
title: Step 7. Set payment method
subtitle: GraphQl checkout tutorial
return_to:
  title: GraphQl checkout tutorial
  url: graphql/tutorials/index.html
menu_order: 7
contributor_name: Atwix
contributor_link: https://www.atwix.com/
---

Use the following query to get all available payment methods for your order.

**Request**
```text
{
  cart(cart_id: "$maskedQuoteId") {
    available_payment_methods {
      code
      title
    }
  }
}
```

**Response**
```json
```
