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

Use the [setShippingAddressesOnCart]({{ page.baseurl }}/graphql/mutations/set-shipping-address.html) mutation to set a shipping address. You can set the shipping address in the following ways:

*  Add a new shipping address
*  Use an address already defined in the logged-in customer's address book

This tutorial covers both methods.

## Add shipping address to the cart

In this step, we use the `setShippingAddressesOnCart` mutation to add a shipping address to the cart. 

Send the customer's authorization token in the `Authorization` parameter of the header. See [Authorization tokens]({{page.baseurl}}/graphql/authorization-tokens.html) for more information.

**Request:**

```graphql
mutation {
  setShippingAddressesOnCart(
    input: {
      cart_id: "{ CART_ID }"
      shipping_addresses: [
        {
          address: {
            firstname: "Bob"
            lastname: "Loblaw"
            company: "Magento"
            street: ["123 Main Street"]
            city: "Phoenix"
            region: "AZ"
            postcode: "78758"
            country_code: "US"
            telephone: "8675309"
            save_in_address_book: false
          },
          pickup_location_code: "txspeqs"
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
        pickup_location_code
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
    "createCustomerAddress": {
      "id": 2,
      "region": {
        "region": "Arizona",
        "region_code": "AZ"
      },
      "country_code": "US",
      "street": [
        "123 Main Street"
      ],
      "telephone": "7777777777",
      "postcode": "77777",
      "city": "Phoenix",
      "default_shipping": true,
      "default_billing": false
    }
  }
}
```

## Use the existing customer's address

Now that the customer has a shipping address, we can apply it to the cart.
First, query the customer to return a list of address IDs.

**Request:**

```graphql
query {
  customer {
    addresses {
      id
      default_billing
      default_shipping
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "customer": {
      "addresses": [
        {
          "id": 2,
          "default_billing": false,
          "default_shipping": true
        }
      ]
    }
  }
}
```

Set `{ CUSTOMER_ADDRESS_ID }` to the `id` returned in the query.

`{ CART_ID }` is the unique shopping cart ID from [Step 2. Create empty cart]({{ page.baseurl }}/graphql/tutorials/checkout/checkout-add-product-to-cart.html).

**Request:**

```graphql
mutation {
  setShippingAddressesOnCart(
    input: {
      cart_id: "{ CART_ID }
      shipping_addresses: {
          customer_address_id: { CUSTOMER_ADDRESS_ID }
      }
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
        country
        {
          code
          label
        }
        available_shipping_methods {
          carrier_title
          carrier_code
          method_code
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
    "setShippingAddressesOnCart": {
      "cart": {
        "shipping_addresses": [
          {
            "firstname": "Bob",
            "lastname": "Loblaw",
            "company": null,
            "street": [
              "123 Stone Ave."
            ],
            "city": "Phoenix",
            "region": {
              "code": "AZ",
              "label": "Arizona"
            },
            "postcode": "77777",
            "telephone": "7777777777",
            "country": {
              "code": "US",
              "label": "US"
            },
            "available_shipping_methods": [
              {
                "carrier_title": "Flat Rate",
                "carrier_code": "flatrate",
                "method_code": "flatrate"
              },
              {
                "carrier_title": "Best Way",
                "carrier_code": "tablerate",
                "method_code": "bestway"
              }
            ]
          }
        ]
      }
    }
  }
}
```

The response includes the available shipping methods. We will need one of those values when setting the delivery method.

## Verify this step {#verify-step}

1. Sign in as a customer to the website using the email `john.doe@example.com` and password `b1b2b3l@w+`.

1. Go to Checkout.

1. On the Shipping step, the Shipping Address form contains the address details you entered.
