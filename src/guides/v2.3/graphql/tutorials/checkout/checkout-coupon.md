---
layout: tutorial
group: graphql
title: Step 7. Apply a coupon
subtitle: GraphQL checkout tutorial
level3_subgroup: graphql-checkout
return_to:
  title: GraphQL Overview
  url: graphql/index.html
menu_order: 70
functional_areas:
  - Integration
contributor_name: Atwix
contributor_link: https://www.atwix.com/
---

Use [applyCouponToCart]({{ page.baseurl }}/graphql/mutations/apply-coupon.html) to apply a discount coupon to the specified `cart_id`.

`{ CART_ID }` is the unique shopping cart ID from [Step 2. Create empty cart]({{ page.baseurl }}/graphql/tutorials/checkout/checkout-add-product-to-cart.html).

`{ COUPON_CODE }` is an existing Magento coupon code. It cannot be generated with GraphQL.

## Create a coupon

Coupons must be generated from the Admin.

Creating a coupon is described in [Coupon Codes](https://docs.magento.com/user-guide/marketing/price-rules-cart-coupon.html).
For the purpose of this tutorial, create a Cart Price Rule with:

For **Rule Information**:

-  **Rule Name**: Watch Coupon
-  **Active**: Yes
-  **Websites**: Main Website
-  **Customer Groups**: Select all of them
-  **Coupon**: Specific Coupon
-  **Coupon Code**: Watch20
-  **Uses per Coupon**: 5
-  **Uses per Customer**: 5

For **Actions**

-  **Apply**: Percent of product price discount
-  **Discount Amount**: 20

Save this rule.
The **Coupon Code** value is the name of the coupon the end user enters.
To verify the coupon works, create an order with a product using guest checkout.
When checking out, enter `Watch20` in the Apply Discount Code field and press the Apply Discount button.
The discount should be applied in the cart.

When the coupon is set up, we can apply it via GraphQL. Replace the `{ CART_ID }` with your generated ID and replace the `{ COUPON_CODE }` with `Watch20` below.

For logged-in customers, send the customer's authorization token in the `Authorization` parameter of the header. See [Authorization tokens]({{page.baseurl}}/graphql/authorization-tokens.html) for more information.

**Request:**

```graphql
mutation {
  applyCouponToCart(
    input: {
      cart_id: "{ CART_ID }"
      coupon_code: "{ COUPON_CODE }"
    }
  ) {
    cart {
      applied_coupons {
        code
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
        "applied_coupons": [
          {
            "code": "Watch20"
          }
        ]
      }
    }
  }
}
```

## Verify this step {#verify-step}

1. Sign in as a customer to the website using the email `john.doe@example.com` and password `b1b2b3l@w+`.

1. Go to Checkout.

1. The discount is displayed in the Order Summary block.

## Remove a coupon

Use [removeCouponFromCart]({{ page.baseurl }}/graphql/mutations/remove-coupon.html) to remove a discount coupon from the shopping cart.

**Request:**

```graphql
mutation {
  removeCouponFromCart(input: { cart_id: "{ CART_ID }" }) {
    cart {
      applied_coupons {
        code
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
        "applied_coupons": {
          "applied_coupon": null
        }
      }
    }
  }
}
```
