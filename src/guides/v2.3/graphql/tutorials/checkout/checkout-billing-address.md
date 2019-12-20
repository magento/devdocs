---
layout: tutorial
group: graphql
title: Step 5. Set billing address
subtitle: GraphQL checkout tutorial
level3_subgroup: graphql-checkout
return_to:
  title: GraphQL Overview
  url: graphql/index.html
menu_order: 50
functional_areas:
  - Integration
contributor_name: Atwix
contributor_link: https://www.atwix.com/
---

{:.bs-callout-tip}
You must always set the billing address to place an order.

Use the [setBillingAddressOnCart]({{ page.baseurl }}/graphql/mutations/set-billing-address.html) mutation to set a billing address. You can set the billing address in the following ways:

*  Add a new billing address
*  Add a new billing address and set it as the shipping addresses
*  Use an address from the logged-in customer's address book

## Add a new billing address

The following mutation adds a new billing address. `{ CART_ID }` is the unique shopping cart ID from [Step 2. Create empty cart]({{ page.baseurl }}/graphql/tutorials/checkout/checkout-add-product-to-cart.html).

**Request:**

{:.bs-callout-info}
For logged-in customers, send the customer's authorization token in the `Authorization` parameter of the header. See ["Get customer authorization token"]({{ page.baseurl }}/graphql/get-customer-authorization-token.html) for more information.

```text
mutation {
  setBillingAddressOnCart(
    input: {
      cart_id: "{ CART_ID }"
      billing_address: {
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
    }
  ) {
    cart {
      billing_address {
        firstname
        lastname
        company
        street
        city
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

```json
{
  "data": {
    "setBillingAddressOnCart": {
      "cart": {
        "billing_address": {
          "firstname": "John",
          "lastname": "Doe",
          "company": "Company Name",
          "street": [
            "320 N Crescent Dr",
            "Beverly Hills"
          ],
          "city": "Los Angeles",
          "postcode": "90210",
          "telephone": "123-456-0000",
          "country": {
            "code": "US",
            "label": "US"
          }
        }
      }
    }
  }
}
```

## Add a new address for billing and shipping

The following mutation includes the `same_as_shipping` attribute, which allows the same address to be used for billing and shipping.

**Request:**

```text
mutation {
  setBillingAddressOnCart(
    input: {
      cart_id: "{ CART_ID }"
      billing_address: {
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
          same_as_shipping: true
      }
    }
  ) {
    cart {
      billing_address {
        firstname
        lastname
        company
        street
        city
        postcode
        telephone
        country {
          code
          label
        }
      }
      shipping_addresses {
        firstname
        lastname
        company
        street
        city
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

```json
{
  "data": {
    "setBillingAddressOnCart": {
      "cart": {
        "billing_address": {
          "firstname": "John",
          "lastname": "Doe",
          "company": "Company Name",
          "street": [
            "320 N Crescent Dr",
            "Beverly Hills"
          ],
          "city": "Los Angeles",
          "postcode": "90210",
          "telephone": "123-456-0000",
          "country": {
            "code": "US",
            "label": "US"
          }
        },
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

## Use an existing customer address

First, query the customer to return the list of address IDs.

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
  "data": {
    "customer": {
      "addresses": [
        {
          "id": 2,
          "default_billing": true,
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
  setBillingAddressOnCart(
    input: {
      cart_id: "{ CART_ID }"
      billing_address: {
          customer_address_id: { CUSTOMER_ADDRESS_ID }
      }
    }
  ) {
    cart {
      billing_address {
        firstname
        lastname
        company
        street
        city
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

```json
{
  "data": {
    "setBillingAddressOnCart": {
      "cart": {
        "billing_address": {
          "firstname": "John",
          "lastname": "Doe",
          "company": "Company Name",
          "street": [
            "320 N Crescent Dr",
            "Beverly Hills"
          ],
          "city": "Los Angeles",
          "postcode": "90210",
          "telephone": "123-456-0000",
          "country": {
            "code": "US",
            "label": "US"
          }
        }
      }
    }
  }
}
```

## Verify this step {#verify-step}

1. Sign in as a customer to the website using the email `john.doe@example.com` and password `b1b2b3l@w+`.

1. Go to Checkout.

1. Go to the Review & Payments step. The Billing Address form is populated with the address details you entered.
