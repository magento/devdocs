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

`setShippingMethodsOnCart` mutation query is using to define a shipping method for your order and requires the next input parameters:
 - `cart_id`
 - `cart_address_id`
 - `carrier_code`
 - `method_code`

### Get `cart_address_id` and available shipping methods

Use `cart` query to retrieve `cart_address_id` and available shipping methods for your quote.

**Request**
```text
query {
  cart (cart_id: "{{ CART_ID }}") {
    shipping_addresses {
      address_id  
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

where 
`{{ CART_ID }}` - shopping cart unique ID from [Step 2. Create empty cart]({{ page.baseurl }}/graphql/tutorials/checkout/checkout-add-product-to-cart.html).

**Response**

```json
{
  "data": {
    "cart": {
      "shipping_addresses": [
        {
          "address_id": 937,
          "available_shipping_methods": [
            {
              "amount": 5,
              "base_amount": 5,
              "carrier_code": "flatrate",
              "carrier_title": "Flat Rate",
              "error_message": "",
              "method_code": "flatrate",
              "method_title": "Fixed",
              "price_excl_tax": 5,
              "price_incl_tax": 5
            },
            {
              "amount": 9.9,
              "base_amount": 9.9,
              "carrier_code": "ups",
              "carrier_title": "United Parcel Service",
              "error_message": "",
              "method_code": "GND",
              "method_title": "Ground",
              "price_excl_tax": 9.9,
              "price_incl_tax": 9.9
            }
          ]
        }
      ]
    }
  }
}
```

In the next tutorial steps value of `address_id` field - `937` will be mentioned as `{{ CART_SHIPPING_ADDRESS_ID }}`.

### Specify shipping method for your order

**Request**

The following mutation query assigns UPS "Ground" method. 

```text
mutation {
  setShippingMethodsOnCart(input: {
    cart_id: "{{ CART_ID }}"
    shipping_methods: [
      {
        cart_address_id: {{ CART_SHIPPING_ADDRESS_ID }}
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
`{{ CART_SHIPPING_ADDRESS_ID }}` - shipping address ID from the query above.

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
