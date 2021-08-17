---
group: graphql
title: setPaymentMethodAndPlaceOrder mutation
contributor_name: Something Digital
contributor_link: https://www.somethingdigital.com/
redirect from:
  - /guides/v2.3/graphql/reference/quote-set-payment-place-order.html
---

{:.bs-callout-warning}
The `setPaymentMethodAndPlaceOrder` mutation has been deprecated. Use the [setPaymentMethodOnCart]({{page.baseurl}}/graphql/mutations/set-payment-method.html) and [placeOrder]({{page.baseurl}}/graphql/mutations/place-order.html) mutations instead. You can run the two methods in the same call if your use case allows it.

The `setPaymentMethodAndPlaceOrder` mutation sets the cart payment method and converts the cart into an order. The
mutation returns the resulting order ID. You cannot manage orders with GraphQL, because orders are part of the backend.
You can use REST or SOAP calls to manage orders to their completion.

Perform the following actions before using the `setPaymentMethodAndPlaceOrder` mutation:

-  Create an empty cart
-  Add one or more products to the cart
-  Set the billing address
-  Set the shipping address (non-virtual carts only)
-  Set the shipping method (non-virtual carts only)
-  For guest customers, assign an email to the cart

## Syntax

```graphql
mutation {
  setPaymentMethodAndPlaceOrder(
    input: SetPaymentMethodAndPlaceOrderInput
  ) {
    PlaceOrderOutput
  }
}
```

## Example usage

**Request:**

```graphql
mutation {
  setPaymentMethodAndPlaceOrder(
    input: {
      cart_id: "IeTUiU0oCXjm0uRqGCOuhQ2AuQatogjG"
      payment_method: {
        code: "checkmo"
      }
    }
  ) {
    order {
      order_id
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "setPaymentMethodAndPlaceOrder": {
      "order": {
        "order_id": "000000006"
      }
    }
  }
}
```

## Input attributes

The `placeOrderInput` object must contain the following attribute:

Attribute |  Data Type | Description
--- | --- | ---
`cart_id` | String! | The unique ID that identifies the customer’s cart
`payment_method` | [PaymentMethodInput!](#PaymentMethodInput) | The payment method data for the cart

### PaymentMethodInput attributes {#PaymentMethodInput}

{% include graphql/quote-payment-input.md %}

## Output attributes

The `placeOrderOutput` object contains the `order` object, which contains the following attribute:

Attribute |  Data Type | Description
--- | --- | ---
`order_id` | String! | The unique ID that identifies the order

## Errors

Error | Description
--- | ---
`Could not find a cart with ID "XXX"` | The specified `cart_id` value does not exist in the `quote_id_mask` table.
`Guest email for cart is missing.` |  The guest attempted to place an order but did not provide an email address. See the [setGuestEmailOnCart]({{ page.baseurl }}/graphql/mutations/set-guest-email.html) mutation.
`Required parameter "cart_id" is missing` | The required `cart_id` argument contains an empty value.
`Required parameter "code" for "payment_method" is missing.` | The value specified in the `code` argument is empty.
`The current user cannot perform operations on cart "XXX"` | An unauthorized user (guest) tried to set a payment method and place an order with a customer's cart, or an authorized user (customer) tried to set a payment method and place an order with a cart of another customer.
`The shipping address is missing. Set the address and try again.` | You ran `setPaymentMethodAndPlaceOrder` mutation before [setShippingAddressesOnCart]({{ page.baseurl }}/graphql/mutations/set-shipping-method.html). Set a shipping address first. [GraphQL checkout tutorial](https://devdocs.magento.com/guides/v2.3/graphql/tutorials/checkout/index.html) shows the order placement sequence.
`The requested Payment Method is not available.` | The payment method specified in the `payment_method` argument is disabled or does not exist.
`Unable to place order: Some of the products are out of stock.` | Some of the products in a cart are out of stock.
