---
layout: tutorial
group: graphql
title: Step 8. Set email on the cart (guest customers only)
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

{:.bs-callout-tip}
Skip this step if you placed the order as a registered customer.

If you place an order as a guest user, you must set a quote email address. Use the `setGuestEmailOnCart` mutation query for that.

`{ CART_ID }` is the unique shopping cart ID from [Step 2. Create empty cart]({{ page.baseurl }}/graphql/tutorials/checkout/checkout-add-product-to-cart.html).

**Request:**

```graphql
mutation {
  setGuestEmailOnCart(input: {
    cart_id: "{ CART_ID }"
    email: "guest@example.com"
  }) {
    cart {
      email
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "setGuestEmailOnCart": {
      "cart": {
        "email": "guest@example.com"
      }
    }
  }
}
```

## Verify this step {#verify-step}

There are no additional verification steps. `quote`.`customer_email` is displayed for administrator on back-end side.
