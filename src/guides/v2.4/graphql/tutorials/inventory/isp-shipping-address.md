---
layout: tutorial
group: graphql
title: Step 4. Set the shipping address
subtitle: GraphQL In-store pickup tutorial
level3_subgroup: graphql-inventory
return_to:
  title: GraphQL Overview
  url: graphql/index.html
menu_order: 40
functional_areas:
  - Integration
---

When the customer selects a location for in-store pickup, you must provide the address of that location using the [`setShippingAddressesOnCart`]({{ page.baseurl }}/graphql/mutations/set-shipping-address.html) mutation. The payload must specify a valid source name in the `pickup_location_code` attribute.

In the following example, the customer has chosen to pick up the order at the Brooklyn store. The shipping address for this store was defined in the [Order Processing with Inventory Management]({{page.baseurl}}/rest/tutorials/inventory/index.html) tutorial.

**Headers:**

`Authorization: Bearer <customer token>`

`Store: default`

**Request:**

```graphql
mutation {
  setShippingAddressesOnCart(
    input: {
      cart_id: ""{ CART_ID }""
      shipping_addresses: [
        {
          customer_address_id: 2
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
            "firstname": "Jane",
            "lastname": "Doe",
            "street": [
              "263 S 4th St"
            ],
            "city": "Brooklyn",
            "region": {
              "code": "NY",
              "label": "New York"
            },
            "postcode": "11211",
            "telephone": "516-555-1111",
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

This step cannot be verified from the Admin.
