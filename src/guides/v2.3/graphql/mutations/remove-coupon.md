---
group: graphql
title: removeCouponFromCart mutation
redirect from:
  - /guides/v2.3/graphql/reference/quote-remove-coupon.html
---

The `removeCouponFromCart` mutation removes a previously-applied coupon from the cart. The cart must contain at least one item in order to remove the coupon.

## Syntax

```graphql
mutation {
  removeCouponFromCart(
    input: RemoveCouponFromCartInput
  ) {
    RemoveCouponFromCartOutput
  }
}
```

## Example usage

The following example removes a coupon from the cart.

**Request:**

```graphql
mutation {
  removeCouponFromCart(
    input: {
      cart_id: "IeTUiU0oCXjm0uRqGCOuhQ2AuQatogjG"
    }
  ) {
    cart {
      items {
        product {
          name
        }
        quantity
      }
      applied_coupons {
        code
      }
      prices {
        grand_total {
          value
          currency
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
        "applied_coupons": null,
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

The `removeCouponFromCart` mutation must contain the following attribute:

Attribute |  Data Type | Description
--- | --- | ---
`cart_id` | String! | The unique ID that identifies the customer's cart

## Output attributes

The `removeCouponFromCart` mutation returns the `Cart` object.

Attribute |  Data Type | Description
--- | --- | ---
`cart` |[Cart!](#CartObject) | Describes the contents of the specified shopping cart

### Cart object {#CartObject}

{% include graphql/cart-object.md %}

[Cart query output]({{page.baseurl}}/graphql/queries/cart.html#cart-output) provides more information about the `Cart` object.

## Errors

Error | Description
--- | ---
`Cart does not contain products.` | The coupon cannot be removed from the empty cart.
`Could not find a cart with ID "XXX"` | The specified `cart_id` value does not exist in the `quote_id_mask` table.
`Current user does not have an active cart.` | The user cannot perform this mutation on the inactive cart.
`Required parameter "cart_id" is missing` | The required `cart_id` argument contains an empty value.
`The coupon code couldn't be deleted. Verify the coupon code and try again.` | The coupon was not removed from the cart. Check the existing shopping cart price rules for details.
`The current user cannot perform operations on cart XXX` | An unauthorized user (guest) tried to add the product into a customer's cart, or an authorized user (customer) tried to add the product into the cart of another customer.
`Wrong store code specified for cart` | The specified `cart_id` does not exist in specified store.
