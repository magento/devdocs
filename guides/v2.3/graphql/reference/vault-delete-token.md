---
group: graphql
title: deletePaymentToken mutation
---

The `deletePaymentToken` mutation 

## Syntax

`mutation: {deletePaymentToken(public_hash) {DeletePaymentTokenOutput}}`

## Example usage

The following example sets the shipping method to Best Way.

**Request**

``` text

```

**Response**

```json

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

[Cart query output]({{page.baseurl}}/graphql/reference/quote.html#cart-output) provides more information about the `Cart` object.
