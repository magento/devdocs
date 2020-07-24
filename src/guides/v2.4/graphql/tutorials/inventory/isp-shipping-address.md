---
layout: tutorial
group: graphql
title: Step 5. Set the shipping address
subtitle: GraphQL In-store pickup tutorial
level3_subgroup: graphql-inventory
return_to:
  title: GraphQL Overview
  url: graphql/index.html
menu_order: 50
functional_areas:
  - Integration
---

When the customer selects a location for in-store pickup, you must provide the address of that location using the [`setShippingAddressesOnCart`]({{ page.baseurl }}/graphql/mutations/set-shipping-address.html) mutation. The payload must specify a valid source name in the `pickup_location_code` attribute.

In the following example, the customer has chosen to pick up the order at the Brooklyn store. The shipping address for this store was defined in the [Order Processing with Inventory Management]({{page.baseurl}}/rest/tutorials/inventory/index.html) tutorial.

`{ CART_ID }` is the unique shopping cart ID from [Step 2. Create empty cart]({{ page.baseurl }}/graphql/tutorials/inventory/isp-add-product-to-cart.html).

**Headers:**

`Authorization: Bearer <customer token>`

`Store: default`

**Request:**

```graphql
mutation {
  setShippingAddressesOnCart(
    input: {
      cart_id: "{ CART_ID }"
      shipping_addresses: [
        {
          address: {
            firstname: "Tai"
            lastname: "Hozie"
            street: ["263 S 4th St"]
            city: "Brooklyn"
            region: "NY"
            postcode: "11211"
            country_code: "US"
            telephone: "555-737-8088"
            save_in_address_book: false
          }
          pickup_location_code: "brooklyn"
        }
      ]
    }
  ) {
    cart {
      shipping_addresses {
        firstname
        lastname
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

```json
{
  "data": {
    "setShippingAddressesOnCart": {
      "cart": {
        "shipping_addresses": [
          {
            "firstname": "Tai",
            "lastname": "Hozie",
            "company": null,
            "street": [
              "263 S 4th St"
            ],
            "city": "Brooklyn",
            "region": {
              "code": "NY",
              "label": "New York"
            },
            "postcode": "11211",
            "telephone": "555-737-8088",
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

1. Sign in as a customer to the website using the email `jdoe@example.com` and password `Password1`.

1. Go to Checkout.

1. On the Shipping step, the pickup location is displayed.
