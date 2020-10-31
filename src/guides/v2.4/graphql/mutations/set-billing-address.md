---
group: graphql
title: setBillingAddressOnCart mutation
---

The `setBillingAddressOnCart` mutation sets the billing address for a specific cart. If you set the `same_as_shipping` attribute to `true`, Magento assigns the same address as the shipping address.

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
        same_as_shipping: false
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
        country{
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
`same_as_shipping` | Boolean | Specifies whether to use the shipping address for the billing address
`use_for_shipping` | Boolean | Deprecated. Use `same_as_shipping` instead

### CartAddressInput object {#CartAddressInput}

{% include graphql/cart-address-input-24.md %}

## Output attributes

The `SetBillingAddressOnCartOutput` object contains the `Cart` object.

Attribute |  Data Type | Description
--- | --- | ---
`cart` |[Cart!](#CartObject) | Describes the contents of the specified shopping cart

### Cart object {#CartObject}

{% include graphql/cart-object-24.md %}

[Cart query output]({{page.baseurl}}/graphql/queries/cart.html#cart-output) provides more information about the `Cart` object.
