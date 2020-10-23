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

Similar to the previous step, we will add a billing address to the customer. `{ CART_ID }` is the unique shopping cart ID from [Step 2. Create empty cart]({{ page.baseurl }}/graphql/tutorials/checkout/checkout-add-product-to-cart.html). In this example, the `default_billing` parameter is set to `true`. The street address is also different, so we can see that different addresses are being created.

Send the customer's authorization token in the `Authorization` parameter of the header. See [Authorization tokens]({{page.baseurl}}/graphql/authorization-tokens.html) for more information.

**Request:**

```graphql
mutation {
  createCustomerAddress(input: {
    region: {
      region: "Arizona"
      region_code: "AZ"
      region_id: 4
    }
    country_code: US
    street: ["123 Stone Ave."]
    telephone: "7777777777"
    postcode: "77777"
    city: "Phoenix"
    firstname: "Bob"
    lastname: "Loblaw"
    default_shipping: false
    default_billing: true
  }) {
    id
    region {
      region
      region_code
    }
    country_code
    street
    telephone
    postcode
    city
    default_shipping
    default_billing
  }
}
```

**Response:**

```json
{
  "data": {
    "createCustomerAddress": {
      "id": 3,
      "region": {
        "region": "Arizona",
        "region_code": "AZ"
      },
      "country_code": "US",
      "street": [
        "123 Stone Ave."
      ],
      "telephone": "7777777777",
      "postcode": "77777",
      "city": "Phoenix",
      "default_shipping": false,
      "default_billing": true
    }
  }
}
```

## Same address for billing and shipping

So far, we have created separate billing and shipping addresses and added them to the customer record.

A common scenario is using the same address for both billing and shipping. A common pattern offers the ability to use the same address for both.

The following mutation includes the `same_as_shipping` attribute, which allows the same address to be used for billing and shipping on the cart.

**Request:**

```graphql
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
        region{
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

We can confirm that the same address is specified for both addresses.

## Use an existing customer address

If you wish to change one of the addresses to use existing addresses, that is as follows.
First, query the customer to return the list of address IDs.

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
        },
        {
          "id": 3,
          "default_billing": true,
          "default_shipping": false
        }
      ]
    }
  }
}
```

Set `{ CUSTOMER_ADDRESS_ID }` to an `id` returned in the query.

`{ CART_ID }` is the unique shopping cart ID from [Step 2. Create empty cart]({{ page.baseurl }}/graphql/tutorials/checkout/checkout-add-product-to-cart.html).

Using the results from above, we can set the `{ CUSTOMER_ADDRESS_ID}` to `3` to use the default billing address.

**Request:**

```graphql
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
        region{
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

```json
{
  "data": {
    "setBillingAddressOnCart": {
      "cart": {
        "billing_address": {
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
          }
        }
      }
    }
  }
}
```

The value of the `street` attribute ("123 Stone Ave.") is the default billing address we created at the beginning of this page.

## Verify this step {#verify-step}

1. Sign in as a customer to the website using the email `john.doe@example.com` and password `b1b2b3l@w+`.

1. Go to Checkout.

1. Go to the Review & Payments step. The Billing Address form is populated with the address details you entered.
