---
layout: tutorial
group: graphql
title: Step 4. Set the shipping address
subtitle: GraphQL checkout tutorial
level3_subgroup: graphql-checkout
return_to:
  title: GraphQL Overview
  url: graphql/index.html
menu_order: 40
functional_areas:
  - Integration
contributor_name: Atwix
contributor_link: https://www.atwix.com/
---

Use the [setShippingAddressesOnCart]({{ page.baseurl }}/graphql/mutations/set-shipping-address.html) mutation to set a shipping address.

## Add shipping address to the cart

In this step, we use the `setShippingAddressesOnCart` mutation to add a shipping address to the cart.

If using guest checkout, run the following example.

If using a logged in customer, send the customer's authorization token in the `Authorization` parameter of the header. See [Authorization tokens]({{page.baseurl}}/graphql/authorization-tokens.html) for more information.

**Request:**

```graphql
mutation {
  setShippingAddressesOnCart(
    input: {
      cart_id: "hD5ac9d7N5539DMVhs5uIzwS04hsD3vy"
      shipping_addresses: [
        {
          address: {
            firstname: "John"
            lastname: "Doe"
            company: "Company Name"
            street: ["3320 N Crescent Dr", "Beverly Hills"]
            city: "Los Angeles"
            region: "CA"
            region_id: 12
            postcode: "90210"
            country_code: "US"
            telephone: "123-456-0000"
            save_in_address_book: false
          }
        }
      ]
    }
  ) {
    cart {
      shipping_addresses {
        firstname
        lastname
        company
        street
        city
        region {
          code
          label
        }
        postcode
        telephone
        country {
          code
          label
        }
        available_shipping_methods{
          carrier_code
          carrier_title
          method_code
          method_title
        }
      }
    }
  }
}
```

**Response:**

`setShippingAddressesOnCart` returns the new address details.

```json
{
  "data": {
    "setShippingAddressesOnCart": {
      "cart": {
        "shipping_addresses": [
          {
            "firstname": "John",
            "lastname": "Doe",
            "company": "Company Name",
            "street": [
              "3320 N Crescent Dr",
              "Beverly Hills"
            ],
            "city": "Los Angeles",
            "region": {
              "code": "CA",
              "label": "California"
            },
            "postcode": "90210",
            "telephone": "123-456-0000",
            "country": {
              "code": "US",
              "label": "US"
            },
            "available_shipping_methods": [
              {
                "carrier_code": "flatrate",
                "carrier_title": "Flat Rate",
                "method_code": "flatrate",
                "method_title": "Fixed"
              },
              {
                "carrier_code": "tablerate",
                "carrier_title": "Best Way",
                "method_code": "bestway",
                "method_title": "Table Rate"
              }
            ]
          }
        ]
      }
    }
  }
}
```

`{ CART_ID }` is the unique shopping cart ID from [Step 2. Create empty cart]({{ page.baseurl }}/graphql/tutorials/checkout/checkout-add-product-to-cart.html).

Note the `available_shipping_methods` in the response. We will use this information in a later step.

## Verify this step {#verify-step}

1. Sign in as a customer to the website using the email `john.doe@example.com` and password `b1b2b3l@w+`.

1. Go to Checkout.

1. On the Shipping step, the Shipping Address form contains the address details you entered.
