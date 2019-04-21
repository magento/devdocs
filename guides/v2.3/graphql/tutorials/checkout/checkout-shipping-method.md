---
layout: tutorial
group: graphql
title: Step 6. Set shipping method
subtitle: GraphQL checkout tutorial
level3_subgroup: graphql-checkout
return_to:
  title: GraphQL Overview
  url: graphql/index.html
menu_order: 60
functional_areas:
  - Integration
contributor_name: Atwix
contributor_link: https://www.atwix.com/
---

`setShippingMethodsOnCart` mutation query is using to define a shipping method for your order and requires the next input parameters:
 - `cart_id`
 - `carrier_code`
 - `method_code`

**Request**

The following mutation query assigns UPS "Ground" method.

```text
mutation {
  setShippingMethodsOnCart(input: {
    cart_id: "{{ CART_ID }}"
    shipping_methods: [
      {
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

where
`{{ CART_ID }}` - shopping cart unique ID from [Step 2. Create empty cart]({{ page.baseurl }}/graphql/tutorials/checkout/checkout-add-product-to-cart.html).

**Response**

```json
{
  "data": {
    "setShippingMethodsOnCart": {
      "cart": {
        "shipping_addresses": [
          {
            "selected_shipping_method": {
              "carrier_code": "ups",
              "method_code": "GND",
              "label": "United Parcel Service - Ground"
            }
          }
        ]
      }
    }
  }
}
```

{:.bs-callout .bs-callout-info}
Send customer's authorization token in the `Authorization` parameter of the header if you set shipping method for a registered customer. See ["Get customer authorization token"]({{ page.baseurl }}/graphql/get-customer-authorization-token.html) to get more details.
