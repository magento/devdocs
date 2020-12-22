---
group: graphql
title: applyCouponToCart mutation
redirect from:
  - /guides/v2.3/graphql/reference/quote-apply-coupon.html
---

The `applyCouponToCart` mutation applies a pre-defined coupon code to the specified cart. Valid coupon codes are defined in cart price rules.

## Syntax

`mutation: {applyCouponToCart(input: ApplyCouponToCartInput) {ApplyCouponToCartOutput}}`

## Example usage

The following example applies the coupon code `H2O` to the cart. For this coupon to be valid, the Affirm Water Bottle (`sku`: 24-UG06) must be in the cart.

**Request:**

``` text
mutation {
  applyCouponToCart(
    input: {
      cart_id: "IeTUiU0oCXjm0uRqGCOuhQ2AuQatogjG",
      coupon_code: "H20"
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
        grand_total{
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
    "applyCouponToCart": {
      "cart": {
        "items": [
          {
            "product": {
              "name": "Gold Membership"
            },
            "quantity": 2
          },
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
        "applied_coupons": {
          "code": "H20"
        },
        "prices": {
          "grand_total": {
            "value": 134.08,
            "currency": "USD"
          }
        }
      }
    }
  }
}
```

## Input attributes

The `applyCouponToCart` mutation requires the `cart_id` and `coupon_code`.

### ApplyCouponToCartInput object {#ApplyCouponToCartInput}

The `ApplyCouponToCartInput` object must contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`cart_id` | String! | The unique ID that identifies the customer's cart
`coupon_code` | String! | A valid coupon code

## Output attributes

The `ApplyCouponToCartOutput` object contains the `Cart` object.

Attribute |  Data Type | Description
--- | --- | ---
`cart` |[Cart!](#CartObject) | Describes the contents of the specified shopping cart

### Cart object {#CartObject}

{% include graphql/cart-object-24.md %}

[Cart query output]({{page.baseurl}}/graphql/queries/cart.html#cart-output) provides more information about the `Cart` object.

## Errors

Error | Description
--- | ---
`A coupon is already applied to the cart. Please remove it to apply another` | The value specified in the `coupon_code` argument has already applied to cart. Use [removeCouponFromCart]({{page.baseurl}}/graphql/mutations/remove-coupon.html) to remove the current coupon and to apply another.
`Cart does not contain products.` | The coupon cannot be applied to an empty cart.
`Could not find a cart with ID "XXX"` | The specified `cart_id` value does not exist in the `quote_id_mask` table.
`Required parameter "coupon_code" is missing` | The required `coupon_code` argument contains an empty value.
`The coupon code isn't valid. Verify the code and try again.` | The entered coupon code is not applicable. Check the existing shopping cart price rules for details.
`The current user cannot perform operations on cart XXX` | An unauthorized user (guest) tried to add the product into a customer's cart, or an authorized user (customer) tried to add the product into the cart of another customer.
