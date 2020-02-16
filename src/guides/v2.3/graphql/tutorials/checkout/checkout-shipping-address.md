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

Use the [setShippingAddressesOnCart]({{ page.baseurl }}/graphql/mutations/set-shipping-method.html) mutation to set a shipping address. You can set the shipping address in the following ways:

*  Add a new shipping address
*  Assign the shipping address to be the same as the billing address
*  Use an address already defined in the logged-in customer's address book

## Create a new shipping address

The following mutation adds a shipping address to the quote.

`{ CART_ID }` is the unique shopping cart ID from [Step 2. Create empty cart]({{ page.baseurl }}/graphql/tutorials/checkout/checkout-add-product-to-cart.html).

**Request:**

{:.bs-callout .bs-callout-info}
For logged-in customers, send the customer's authorization token in the `Authorization` parameter of the header. See [Authorization tokens]({{page.baseurl}}/graphql/authorization-tokens.html) for more information.

```text
mutation {
  setShippingAddressesOnCart(
    input: {
      cart_id: "{ CART_ID }"
      shipping_addresses: [
        {
          address: {
            firstname: "John"
            lastname: "Doe"
            company: "Company Name"
            street: ["320 N Crescent Dr", "Beverly Hills"]
            city: "Los Angeles"
            region: "CA"
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
              "320 N Crescent Dr",
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
            }
          }
        ]
      }
    }
  }
}
```

## Assign the shipping address to be the same as the billing address

[Add a new address for billing and shipping]({{ page.baseurl }}/graphql/tutorials/checkout/checkout-billing-address.html) shows how to do this.

## Use the existing customer's address

First, query the customer to return a list of address IDs.

**Request:**

```text
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

```text
{
  "data": {
    "customer": {
      "addresses": [
        {
          "id": 2,
          "default_billing": true,
          "default_shipping": false
        },
        {
          "id": 3,
          "default_billing": false,
          "default_shipping": false
        },
        {
          "id": 4,
          "default_billing": false,
          "default_shipping": true
        }
      ]
    }
  }
}
```

Set `{ CUSTOMER_ADDRESS_ID }` to an `id` returned in the query.

`{ CART_ID }` is the unique shopping cart ID from [Step 2. Create empty cart]({{ page.baseurl }}/graphql/tutorials/checkout/checkout-add-product-to-cart.html).

**Request:**

```text
mutation {
  setShippingAddressesOnCart(
    input: {
      cart_id: "{ CART_ID }"
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
            "firstname": "John",
            "lastname": "Doe",
            "company": "Company Name",
            "street": [
              "320 N Crescent Dr",
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

1. On the Shipping step, the Shipping Address form contains the address details you entered.
