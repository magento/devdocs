---
layout: tutorial
group: graphql
title: Step 3. Add product to cart
subtitle: GraphQL checkout tutorial
level3_subgroup: graphql-checkout
return_to:
  title: GraphQL Overview
  url: graphql/index.html
menu_order: 30
functional_areas:
  - Integration
contributor_name: Atwix
contributor_link: https://www.atwix.com/
---

GraphQL supports [7 types of product]({{ page.baseurl }}/graphql/reference/product-interface-implementations.html) which can be added into shopping cart:
 - bundle product
 - configurable product
 - downloadable product
 - grouped product
 - simple product
 - virtual product
 - gift card product (available for commerce version)

**Request**
The following query adds a simple product into shopping cart.
```text
mutation {  
  addSimpleProductsToCart(
    input: {
      cart_id: "{{ CART_ID }}"
      cartItems: [
        {
          data: {
            qty: 1
            sku: "simple-product"
          }
        }
      ]
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

where
`{{ CART_ID }}` - shopping cart unique ID from [Step 2. Create empty cart]({{ page.baseurl }}/graphql/tutorials/checkout/checkout-add-product-to-cart.html).

**Response**
```json
{
  "data": {
    "addSimpleProductsToCart": {
      "cart": {
        "items": [
          {
            "id": "508",
            "product": {
              "sku": "simple-product",
              "stock_status": "IN_STOCK"
            },
            "qty": 1
          }
        ]
      }
    }
  }
}
```

{:.bs-callout .bs-callout-info}
Send customer's authorization token in the `Authorization` parameter of the header if you add product into shopping cart as a registered customer. See ["Get customer authorization token"]({{ page.baseurl }}/graphql/get-customer-authorization-token.html) to get more details.

Use `updateCartItems` mutation query to update shopping cart items and `removeItemFromCart` to remove product from the shopping cart.
