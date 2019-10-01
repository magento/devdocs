---
group: graphql
title: removeCouponFromCart mutation
---

The `removeCouponFromCart` mutation removes a previously-applied coupon from the cart.

## Syntax

`mutation: {removeCouponFromCart(input: RemoveCouponFromCartInput)  {RemoveCouponFromCartOutput}}`

## Example usage

The following example removes a coupon from the cart.

**Request**

``` text
mutation {
  removeCouponFromCart(
    input:
      { cart_id: "IeTUiU0oCXjm0uRqGCOuhQ2AuQatogjG" }
    ) {
    cart {
      items {
        product {
          name
        }
        quantity
      }
      applied_coupon {
        code
      }
      prices {
        grand_total{
          value
          currency
        }
      }
    }
  }
}
```

**Response**

```json
{
  "data": {
    "removeCouponFromCart": {
      "cart": {
        "items": [
          {
            "product": {
              "name": "Strive Shoulder Pack"
            },
            "quantity": 1
          },
          {
            "product": {
              "name": "Affirm Water Bottle "
            },
            "quantity": 1
          }
        ],
        "applied_coupon": null,
        "prices": {
          "grand_total": {
            "value": 39,
            "currency": "USD"
          }
        }
      }
    }
  }
}
```

## Input attributes

The `removeCouponFromCart` mutation requires the `cart_id` attribute.

### removeCouponFromCart object {#removeCouponFromCart}

The `removeCouponFromCart` object must contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`cart_id` | String! | The unique ID that identifies the customer's cart

## Output attributes

The `removeCouponFromCart` object contains the `Cart` object.

Attribute |  Data Type | Description
--- | --- | ---
`cart` |[ Cart!](#CartObject) | Describes the contents of the specified shopping cart

### Cart object {#CartObject}

{% include graphql/cart-object.md %}

[Cart query output]({{page.baseurl}}/graphql/reference/quote.html#cart-output) provides more information about the `Cart` object.
