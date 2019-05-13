---
group: graphql
title: Set billing and shipping addresses
---

Magento GraphQL supports billing and shipping addresses, including address books.

## Set the billing address

Use the `setBillingAddressOnCart` mutation to set a new billing address for a specific cart.

If you set the `use_for_shipping` attribute to `true`, Magento assigns the same address as the shipping address. 

### Syntax

`mutation: {setBillingAddressOnCart(input: SetBillingAddressOnCartInput) {SetBillingAddressOnCartOutput}}`

### Example usage

The following example creates a new billing address for a specific cart.

**Request**

``` text
mutation {
  setBillingAddressOnCart(
    input: {
      cart_id: "4JQaNVJokOpFxrykGVvYrjhiNv9qt31C"
      billing_address: {
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
          save_in_address_book: true
        }
        use_for_shipping: false
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
      }
    }
  }
}
```

**Response**

```json
{
  "data": {
    "setBillingAddressOnCart": {
      "cart": {
        "billing_address": {
          "firstname": "Bob",
          "lastname": "Roll",
          "company": "Magento",
          "street": [
            "Magento Pkwy",
            "Main Street"
          ],
          "city": "Austin",
          "postcode": "78758",
          "telephone": "8675309"
        }
      }
    }
  }
}
```

### Input attributes

The top-level `SetBillingAddressOnCartInput` object is listed first. All child objects are listed in alphabetical order.

#### SetBillingAddressOnCartInput object {#SetBillingAddressOnCartInput}

Attribute |  Data Type | Description
--- | --- | ---
`billing_address` | [BillingAddressInput!](#billingAddressInput) | The billing address for a specific cart
`cart_id` | String! | The unique ID that identifies the customer's cart

#### BillingAddressInput object {#BillingAddressInput}

Attribute |  Data Type | Description
--- | --- | ---
`address` | [CartAddressInput](#cartAddressInput) | The billing address for the cart
`customer_address_id` | Int | The unique ID that identifies the customer's address
`use_for_shipping` | Boolean | Specifies whether to use the billing address for the shipping address (`True`/`False`)

#### CartAddressInput object {#CartAddressInput}

{% include graphql/cart-address-input.md %}

### Output attributes

The `SetBillingAddressOnCartOutput` object contains the `Cart` object.

Attribute |  Data Type | Description
--- | --- | ---
`cart` | Cart! | Describes the contents of the specified shopping cart.

#### Cart object

{% include graphql/cart-object.md %}

## Set shipping addresses

Use the `setShippingAddressesOnCart` mutation to set one or more shipping addresses on a specific cart.

### Syntax

`mutation: {setShippingAddressesOnCart(input: SetShippingAddressesOnCartInput) {SetShippingAddressesOnCartOutput}}`

### Example usage

The following example sets a shipping address for a specific cart.

**Request**

``` text
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
        postcode
        telephone
      }
    }
  }
}
```

**Response**

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
            "postcode": "78758",
            "telephone": "8675309"
          }
        ]
      }
    }
  }
}
```

### Input attributes

The top-level `SetShippingAddressesOnCartInput` object is listed first. All child objects are listed in alphabetical order.

#### SetShippingAddressesOnCartInput object {#SetShippingAddressesOnCartInput}

Attribute |  Data Type | Description
--- | --- | ---
`cart_id` | String! | The unique ID that identifies the customer's cart
`billing_address` | [ShippingAddressInput!](#shippingAddressInput) | The billing address for a specific cart

#### CartAddressInput object {#CartAddressInputShip}

{% include graphql/cart-address-input.md %}

#### ShippingAddressInput object {#ShippingAddressInput}

Attribute |  Data Type | Description
--- | --- | ---
`address` | [CartAddressInput](#CartAddressInputShip) | The shipping address for the cart
`customer_address_id` | Int | The unique ID that identifies the customer's address


### Output attributes

The `SetShippingAddressOnCartOutput` object contains the `Cart` object.

Attribute |  Data Type | Description
--- | --- | ---
`cart` | Cart! | Describes the contents of the specified shopping cart.

#### Cart object

{% include graphql/cart-object.md %}
