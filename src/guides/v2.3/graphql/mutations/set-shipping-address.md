---
group: graphql
title: setShippingAddressesOnCart mutation
redirect from:
  - /guides/v2.3/graphql/reference/quote-set-shipping-address.html
---

The `setShippingAddressesOnCart` mutation sets one or more shipping addresses on a specific cart. The shipping address does not need to be specified in the following circumstances:

*  The cart contains only virtual items
*  When you defined the billing address, you set the `same_as_shipping` attribute to `true`. Magento assigns the same address as the shipping address.

## Syntax

```graphql
mutation {
  setShippingAddressesOnCart(
    input: SetShippingAddressesOnCartInput
  ) {
    SetShippingAddressesOnCartOutput
  }
}
```

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
            }
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

{% include graphql/cart-address-input.md %}

### ShippingAddressInput object {#ShippingAddressInput}

Attribute |  Data Type | Description
--- | --- | ---
`address` | [CartAddressInput](#CartAddressInputShip) | The shipping address for the cart
`customer_address_id` | Int | The unique ID that identifies the customer's address
`customer_notes` | String | Text provided by the customer

## Output attributes

The `SetShippingAddressOnCartOutput` object contains the `Cart` object.

Attribute |  Data Type | Description
--- | --- | ---
`cart` |[Cart!](#CartObject) | Describes the contents of the specified shopping cart

### Cart object {#CartObject}

{% include graphql/cart-object.md %}

[Cart query output]({{page.baseurl}}/graphql/queries/cart.html#cart-output) provides more information about the `Cart` object.

## Errors

Error | Description
--- | ---
`Could not find a address with ID "XXX"` | The specified `input`.`shipping_addresses`.`customer_address_id` value does not exist in the `customer_address_entity` database table.
`Could not find a cart with ID "XXX"` | The specified `cart_id` value does not exist in the `quote_id_mask` database table.
`Current customer does not have permission to address with ID "XXX"` | The specified address ID in the `input`.`shipping_addresses`.`customer_address_id` argument belongs to another customer.
`Required parameter "cart_id" is missing.` | The value specified in the `cart_id` argument is empty.
`Required parameter "shipping_addresses" is missing` | The `shipping_addresses` argument is empty.
`The Cart includes virtual product(s) only, so a shipping address is not used.` | You do not need to specify a shipping address because virtual products are not delivered.
`The current customer isn't authorized.` | The current customer is not currently logged in, or the customer's token does not exist in the `oauth_token` table.
`The current user cannot perform operations on cart "XXX"` | An unauthorized user (guest) tried to update a shipping address of a customer's cart, or an authorized user (customer) tried to update the shipping address of another customer's cart.
`The shipping address cannot contain "customer_address_id" and "address" at the same time.` | Specify either the ID of the existing customer's address in the `input`.`shipping_addresses`.`customer_address_id` argument or a new customer's address in the `input`.`shipping_addresses`.`address` argument (but not both).
`You cannot specify multiple shipping addresses.` | You cannot specify more than one customer's address in the `input`.`shipping_addresses`.`address` argument.
