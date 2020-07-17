---
layout: tutorial
group: graphql
title: Step 6. Set the shipping method
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

The `setShippingMethodsOnCart` mutation defines the shipping methods for your order. It requires these input parameters:

*  `cart_id`
*  `carrier_code`
*  `method_code`

`{ CART_ID }` is the unique shopping cart ID from [Step 2. Create empty cart]({{ page.baseurl }}/graphql/tutorials/checkout/checkout-add-product-to-cart.html).

{:.bs-callout .bs-callout-info}
For logged-in customers, send the customer's authorization token in the `Authorization` parameter of the header. See [Authorization tokens]({{page.baseurl}}/graphql/authorization-tokens.html) for more information.

**Request:**

The following mutation query assigns UPS "Ground" method.

```text
mutation {
  setShippingMethodsOnCart(input: {
    cart_id: "{ CART_ID }"
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
          carrier_title
          method_title
        }
      }
    }
  }
}
```

**Response:**

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
              "carrier_title": "United Parcel Service",
              "method_title": "Ground"
            }
          }
        ]
      }
    }
  }
}
```

## Verify this step {#verify-step}

1. Sign in as a customer to the website using the email `john.doe@example.com` and password `b1b2b3l@w+`.

1. Go to Checkout.

1. The selected shipping method is displayed in the Shipping Methods section on the Shipping step.
