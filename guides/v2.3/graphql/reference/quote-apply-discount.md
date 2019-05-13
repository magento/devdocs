---
group: graphql
title: Manage coupons
---

You can use GraphQL to apply a coupon to a cart or remove a coupon from the same cart.

## Apply a coupon to a cart

The `applyCouponToCart` mutation applies a pre-defined coupon code to the specified cart. Valid coupon codes are defined in cart price rules.

### Syntax

`mutation: {applyCouponToCart(input: ApplyCouponToCartInput) {ApplyCouponToCartOutput}}`

### Example usage

The following example applies the coupon code `H2O` to the cart. For this coupon to be valid, the Affirm Water Bottle (`sku`: 24-UG06) must be in the cart.

**Request**

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
        "applied_coupon": {
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

### Input attributes

The `applyCouponToCart` mutation requires the `cart_id` and `coupon_code`. 

#### ApplyCouponToCartInput object {#ApplyCouponToCartInput}

The `ApplyCouponToCartInput` object must contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`cart_id` | String! | The unique ID that identifies the customer's cart
`coupon_code` | String! | A valid coupon code


### Output attributes

The `ApplyCouponToCartOutput` object contains the `Cart` object.

Attribute |  Data Type | Description
--- | --- | ---
`cart` | Cart! | Describes the contents of the specified shopping cart.

#### Cart object

{% include graphql/cart-object.md %}

## Remove a coupon from a cart

The `removeCouponFromCart` mutation removes a previously-applied coupon from the cart.

### Syntax

`mutation: {removeCouponFromCart(input: RemoveCouponFromCartInput){ RemoveCouponFromCartOutput}}`

### Example usage

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

### Input attributes

The `removeCouponFromCart` mutation requires the `cart_id` attribute. 

#### removeCouponFromCart object {#removeCouponFromCart}

The `removeCouponFromCart` object must contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`cart_id` | String! | The unique ID that identifies the customer's cart

### Output attributes

The `removeCouponFromCart` object contains the `Cart` object.

Attribute |  Data Type | Description
--- | --- | ---
`cart` | Cart! | Describes the contents of the specified shopping cart.

#### Cart object

{% include graphql/cart-object.md %}
