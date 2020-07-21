---
layout: tutorial
group: graphql
title: Step 6. Set the billing address
subtitle: GraphQL In-store pickup tutorial
level3_subgroup: graphql-inventory
return_to:
  title: GraphQL Overview
  url: graphql/index.html
menu_order: 60
functional_areas:
  - Integration
---

Because the customer in this tutorial has already placed an order, we will use the billing address she previously defined. To keep the payloads as minimal as possible,  we will call the [`customer` query]({{page.baseurl}}/graphql/queries/customer.html) to return the `id` of the billing address, and then specify that `id` in the [setBillingAddressOnCart]({{ page.baseurl }}/graphql/mutations/set-billing-address.html) mutation.

## Retrieve the customer's billing address

Query the customer to return the list of address IDs.

**Headers:**

`Authorization: Bearer <customer token>`

`Store: us`

**Request:**

```graphql
query {
  customer {
    default_billing
  }
}
```

**Response:**

```json
{
  "data": {
    "customer": {
      "default_billing": "4"
    }
  }
}
```

## Set the billing address

Now that we have the value of the `default_billing` attribute, we can set the billing address. The `{ CART_ID }` is the unique shopping cart ID from [Step 2. Create empty cart]({{ page.baseurl }}/graphql/tutorials/inventory/isp-add-product-to-cart.html).

**Headers:**

`Authorization: Bearer <customer token>`

`Store: us`

**Request:**

```graphql
mutation {
  setBillingAddressOnCart(
    input: {
      cart_id: "{ CART_ID }"
      billing_address: {
          customer_address_id: "4"
      }
    }
  ) {
    cart {
      billing_address {
        firstname
        lastname
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
          "firstname": "Jane",
          "lastname": "Doe",
          "street": [
            "160 1st St."
          ],
          "city": "Mineola",
          "region": {
            "code": "NY",
            "label": "New York"
          },
          "postcode": "11501",
          "telephone": "516-555-1111",
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
