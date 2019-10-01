---
layout: tutorial
group: graphql
title: Step 8. Apply a coupon
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

Use [applyCouponToCart]({{ page.baseurl }}/graphql/reference/quote-apply-coupon.html) to apply a discount coupon to the the specified `cart_id`.

`{ CART_ID }` is the unique shopping cart ID from [Step 2. Create empty cart]({{ page.baseurl }}/graphql/tutorials/checkout/checkout-add-product-to-cart.html).

`{ COUPON_CODE }` is an existing Magento coupon code. It cannot be generated with GraphQL.

**Request**

{:.bs-callout .bs-callout-info}
For logged-in customers, send the customer's authorization token in the `Authorization` parameter of the header. See ["Get customer authorization token"]({{ page.baseurl }}/graphql/get-customer-authorization-token.html) for more information.

```text
mutation {
  applyCouponToCart(
    input: {
      cart_id: "{ CART_ID }"
      coupon_code: "{ COUPON_CODE }"
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

**Response**

```json
{
  "data": {
    "applyCouponToCart": {
      "cart": {
        "applied_coupon": {
          "code": "{ COUPON_CODE }"
        }
      }
    }
  }
}
```

Use [removeCouponFromCart]({{ page.baseurl }}/graphql/reference/quote-remove-coupon.html) to remove a discount coupon from the shopping cart.

**Request**

{:.bs-callout .bs-callout-info}
For logged-in customers, send the customer's authorization token in the `Authorization` parameter of the header. See ["Get customer authorization token"]({{ page.baseurl }}/graphql/get-customer-authorization-token.html) for more information.

```text
mutation {
  removeCouponFromCart(input: { cart_id: "{ CART_ID }" }) {
    cart {
      applied_coupon {
        code
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
        "applied_coupon": {
          "applied_coupon": null
        }
      }
    }
  }
}
```

## Verify this step {#verify-step}

1. Sign in as a customer to the website using the email `john.doe@example.com` and password `b1b2b3l@w+`.

2. Go to Checkout.

3. The discount is displayed in the Order Summary block.
