---
layout: tutorial
group: graphql
title: Step 6. Set shipping method
subtitle: GraphQl checkout tutorial
return_to:
  title: GraphQl checkout tutorial
  url: graphql/tutorials/index.html
menu_order: 6
contributor_name: Atwix
contributor_link: https://www.atwix.com/
---

Use `cart` query to retrieve available shipping methods for your quote.
**Request**
```text
query {
  cart (cart_id: "{$maskedQuoteId}") {
    shipping_addresses {
        available_shipping_methods {
          amount
          base_amount
          carrier_code
          carrier_title
          error_message
          method_code
          method_title
          price_excl_tax
          price_incl_tax
        }
    }
  }
}
```

**Response**
```json

```

Use `setShippingMethodsOnCart` mutation query to define a shipping method for your order.

**Request**
The following mutation query assigns UPS "Ground" method. 
```text
mutation {
  setShippingMethodsOnCart(input: {
    cart_id: "$maskedQuoteId"
    shipping_methods: [
      {
        cart_address_id: $shippingAddressId
        carrier_code: "ups"
        method_code: "GND"
      }
    ]
  }) {
    cart {
      shipping_addresses {
        selected_shipping_method {
          carrier_code
          method_code
          label
        }
      }
    } 
  }
}
```

**Response**
```json

```
