---
group: graphql
title: setShippingMethodsOnCart mutation
redirect from:
  - /guides/v2.3/graphql/reference/quote-shipping-method.html
---

The `setShippingMethodsOnCart` mutation sets one or more shipping methods on a cart. By default, Magento GraphQL supports the following shipping methods:

Label | Carrier code | Method code
--- | --- | ---
DHL | dhl | Varies
Federal Express | fedex | Varies
Flat Rate | flatrate | flatrate
Free Shipping | freeshipping | freeshipping
Best Way | tablerate | bestway
United Parcel Service | ups | Varies
United States Postal Service | usps | Varies

## Syntax

```graphql
mutation {
  setShippingMethodsOnCart(
    input: setShippingMethodsOnCartInput
  ) {
    setShippingMethodsOnCartOutput
  }
}
```

## Example usage

The following example sets the shipping method to Best Way.

**Request:**

```graphql
mutation {
  setShippingMethodsOnCart(
    input: {
      cart_id: "IeTUiU0oCXjm0uRqGCOuhQ2AuQatogjG",
      shipping_methods: [
        {
          carrier_code: "tablerate"
          method_code: "bestway"
        }
      ]
    }
  ) {
    cart {
      shipping_addresses {
        selected_shipping_method {
          carrier_code
          carrier_title
          method_code
          method_title
          amount {
            value
            currency
          }
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
    "setShippingMethodsOnCart": {
      "cart": {
        "shipping_addresses": [
          {
            "selected_shipping_method": {
              "carrier_code": "tablerate",
              "carrier_title": "Best Way",
              "method_code": "bestway",
              "method_title": "Table Rate",
              "amount": {
                "value": 0,
                "currency": "USD"
              }
            }
          }
        ]
      }
    }
  }
}
```

## Input attributes

The top-level `setShippingMethodsOnCartInput` object is listed first. All child objects are listed in alphabetical order.

### setShippingMethodsOnCartInput object {#setShippingMethodsOnCartInput}

Attribute |  Data Type | Description
--- | --- | ---
`cart_id` | String! | The unique ID that identifies the customer's cart
`shipping_methods` | [ShippingMethodInput!](#ShippingMethodInput) | The shipping address for a specific cart

### ShippingMethodInput object {#ShippingMethodInput}

Attribute |  Data Type | Description
--- | --- | ---
`carrier_code` | String! | A string that identifies a commercial carrier or an offline shipping method
`method_code` | String! | A string that indicates which service a commercial carrier will use to ship items. For offline shipping methods, this value is similar to the label displayed on the checkout page

## Output attributes

The `ShippingMethodOutput` object contains the `Cart` object.

Attribute |  Data Type | Description
--- | --- | ---
`cart` |[ Cart!](#CartObject) | Describes the contents of the specified shopping cart

### Cart object {#CartObject}

{% include graphql/cart-object.md %}

[Cart query output]({{page.baseurl}}/graphql/queries/cart.html#cart-output) provides more information about the `Cart` object.

## Errors

Error | Description
--- | ---
`Could not find a cart with ID "XXX"` | The specified `cart_id` value does not exist in the `quote_id_mask` table.
`Carrier with such method not found: carrier_code, method_code` | A specified carrier method was not found, or it is not applicable for the defined shipping address.
`Required parameter "cart_id" is missing` | The value specified in the `cart_id` argument is empty.
`Required parameter "carrier_code" is missing.` | The value specified in the `shipping_methods`.`carrier_code` argument is empty.
`Required parameter "method_code" is missing.` | The value specified in the `shipping_methods`.`method_code` argument is empty.
`Required parameter "shipping_methods" is missing` | The value specified in the `shipping_methods` argument is empty.
`The current user cannot perform operations on cart "XXX"` | An unauthorized user (guest) tried to set a shipping method for an order on behalf of an authorized user (customer), or a customer tried to set a shipping method for an order on behalf of another customer.
`The shipping method can't be set for an empty cart. Add an item to cart and try again.` | The shipping method cannot be set for an empty cart.
`You cannot specify multiple shipping methods.` | You can set only one shipping method for an order.
