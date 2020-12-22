---
group: graphql
title: setShippingAddressesOnCart mutation
---

The `setShippingAddressesOnCart` mutation sets one or more shipping addresses on a specific cart. The shipping address does not need to be specified in the following circumstances:

*  The cart contains only virtual items
*  When you defined the billing address, you set the `same_as_shipping` attribute to `true`. Magento assigns the same address as the shipping address.

## Syntax

`mutation: {setShippingAddressesOnCart(input: SetShippingAddressesOnCartInput) {SetShippingAddressesOnCartOutput}}`

## Example usage

**Request:**

```graphql
mutation {
  setShippingAddressesOnCart(
    input: {
      cart_id: "4JQaNVJokOpFxrykGVvYrjhiNv9qt31C"
      shipping_addresses: [
        {
          address: {
            firstname: "Bob"
            lastname: "Roll"
            company: "Magento"
            street: ["Magento Pkwy", "Main Street"]
            city: "Austin"
            region: "TX"
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

```json
{
  "data": {
    "setShippingAddressesOnCart": {
      "cart": {
        "shipping_addresses": [
          {
            "firstname": "Bob",
            "lastname": "Roll",
            "company": "Magento",
            "street": [
              "Magento Pkwy",
              "Main Street"
            ],
            "city": "Austin",
            "region": {
              "code": "TX",
              "label": "Texas"
            },
            "postcode": "78758",
            "telephone": "8675309",
            "country": {
              "code": "US",
              "label": "US"
            },
            "pickup_location_code": "txspeqs"
          }
        ]
      }
    }
  }
}
```

## Input attributes

The top-level `SetShippingAddressesOnCartInput` object is listed first. All child objects are listed in alphabetical order.

### SetShippingAddressesOnCartInput object {#SetShippingAddressesOnCartInput}

Attribute |  Data Type | Description
--- | --- | ---
`cart_id` | String! | The unique ID that identifies the customer's cart
`shipping_addresses` | [ShippingAddressInput!](#ShippingAddressInput) | The shipping address for a specific cart

### CartAddressInput object {#CartAddressInputShip}

{% include graphql/cart-address-input-24.md %}

### ShippingAddressInput object {#ShippingAddressInput}

Attribute |  Data Type | Description
--- | --- | ---
`address` | [CartAddressInput](#CartAddressInputShip) | The shipping address for the cart
`customer_address_id` | Int | The unique ID that identifies the customer's address
`customer_notes` | String | Text provided by the customer
`pickup_location_code` | String | The code of the in-store pickup location where the customer will receive the order.

## Output attributes

The `SetShippingAddressOnCartOutput` object contains the `Cart` object.

Attribute |  Data Type | Description
--- | --- | ---
`cart` |[Cart!](#CartObject) | Describes the contents of the specified shopping cart

### Cart object {#CartObject}

{% include graphql/cart-object-24.md %}

[Cart query output]({{page.baseurl}}/graphql/queries/cart.html#cart-output) provides more information about the `Cart` object.
