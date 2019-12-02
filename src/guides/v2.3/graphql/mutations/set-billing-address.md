---
group: graphql
title: setBillingAddressOnCart mutation
redirect from:
  - /guides/v2.3/graphql/reference/quote-set-billing-address.html
---

The `setBillingAddressOnCart` mutation sets the billing address for a specific cart. If you set the `use_for_shipping` attribute to `true`, Magento assigns the same address as the shipping address.

## Syntax

`mutation: {setBillingAddressOnCart(input: SetBillingAddressOnCartInput) {SetBillingAddressOnCartOutput}}`

## Example usage

The following example creates a new billing address for a specific cart.

**Request:**

```graphql
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

**Response:**

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

## Input attributes

The top-level `SetBillingAddressOnCartInput` object is listed first. All child objects are listed in alphabetical order.

### SetBillingAddressOnCartInput object {#SetBillingAddressOnCartInput}

Attribute |  Data Type | Description
--- | --- | ---
`billing_address` | [BillingAddressInput!](#BillingAddressInput) | The billing address for a specific cart
`cart_id` | String! | The unique ID that identifies the customer's cart

### BillingAddressInput object {#BillingAddressInput}

Attribute |  Data Type | Description
--- | --- | ---
`address` | [CartAddressInput](#CartAddressInput) | The billing address for the cart
`customer_address_id` | Int | The unique ID that identifies the customer's address
`use_for_shipping` | Boolean | Specifies whether to use the billing address for the shipping address (`True`/`False`)

### CartAddressInput object {#CartAddressInput}

{% include graphql/cart-address-input.md %}

## Output attributes

The `SetBillingAddressOnCartOutput` object contains the `Cart` object.

Attribute |  Data Type | Description
--- | --- | ---
`cart` |[Cart!](#CartObject) | Describes the contents of the specified shopping cart

### Cart object {#CartObject}

{% include graphql/cart-object.md %}

[Cart query output]({{page.baseurl}}/graphql/queries/cart.html#cart-output) provides more information about the `Cart` object.
