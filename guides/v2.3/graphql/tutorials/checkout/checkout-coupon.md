---
layout: tutorial
group: graphql
title: Step 8. Apply coupon
subtitle: GraphQL checkout tutorial
level3_subgroup: graphql-checkout
return_to:
  title: GraphQL Overview
  url: graphql/index.html
menu_order: 80
functional_areas:
  - Integration
contributor_name: Atwix
contributor_link: https://www.atwix.com/
---

Use [applyCouponToCart]({{ page.baseurl }}/graphql/reference/quote.html#apply-coupon-to-cart) to apply a discount coupon to shopping cart.

**Request**

```text
mutation {
  applyCouponToCart(
    input: {
      cart_id: "{{ CART_ID }}"
      coupon_code: "{{ COUPON_CODE }}"
    }
  ) {
    cart {
      applied_coupon {
        code
      }
    }
  }
}
```

`{{ CART_ID }}` - shopping cart unique ID from [Step 2. Create empty cart]({{ page.baseurl }}/graphql/tutorials/checkout/checkout-add-product-to-cart.html).
`{{ COUPON_CODE }}` - coupon code.

**Response**

```json
{
  "data": {
    "applyCouponToCart": {
      "cart": {
        "applied_coupon": {
          "code": "{{ COUPON_CODE }}"
        }
      }
    }
  }
}
```

Use [removeCouponFromCart]({{ page.baseurl }}/graphql/reference/quote.html#remove-coupon-from-cart) to remove a discount coupon from shopping cart.

**Request**

```text
mutation {
  removeCouponFromCart(input: { cart_id: "{{ CART_ID }}" }) {
    cart {
      applied_coupon {
        code
      }
    }
  }
}
```

where
`{{ CART_ID }}` - shopping cart unique ID from [Step 2. Create empty cart]({{ page.baseurl }}/graphql/tutorials/checkout/checkout-add-product-to-cart.html).

**Response**

```json
{
  "data": {
    "removeCouponFromCart": {
      "cart": {
        "applied_coupon": {
          "code": "{{ COUPON_CODE }}"
        }
      }
    }
  }
}
```

where 
`{{ COUPON_CODE }}` - coupon code that has been applied to cart.
