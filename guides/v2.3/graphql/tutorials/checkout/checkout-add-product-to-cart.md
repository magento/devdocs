---
layout: tutorial
group: graphql
title: Step 3. Add product to cart
subtitle: GraphQl checkout tutorial
return_to:
  title: GraphQl checkout tutorial
  url: graphql/tutorials/index.html
menu_order: 3
contributor_name: Atwix
contributor_link: https://www.atwix.com/
---

**Request**
```text
mutation addSimpleProductsToCart(
  $cart_id: String!
  $qty: Float!
  $sku: String!
) {
  addSimpleProductsToCart(
    input: {
      cart_id: $cart_id
      cartItems: {
        customizable_options: []
        data: {
          qty: $qty
          sku: $sku
        }
      }
    }
  ) {
    cart {
      items {
        id
        product {
          sku
          stock_status
        }
        qty
      }
    }
  }
}
```

**Response**
```json
```