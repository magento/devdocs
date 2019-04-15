---
layout: tutorial
group: graphql
title: Step 9. Set quote email (for guest only)
subtitle: GraphQl checkout tutorial
return_to:
  title: GraphQl checkout tutorial
  url: graphql/tutorials/index.html
menu_order: 9
contributor_name: Atwix
contributor_link: https://www.atwix.com/
---

{:.bs-callout .bs-callout-tip}
Skip this step if you place order as a registered customer. 

If you place order as a guest user you must set a quote email address. Use `setGuestEmailOnCart` mutation query for that.

**Request**

```text
mutation {
  setGuestEmailOnCart(input: {
    cart_id: "{{ CART_ID }}"
    email: "guest_email@example.com"
  }) {
    cart {
      guest_email
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
    "setGuestEmailOnCart": {
      "cart": {
        "guest_email": "guest_email@example.com"
      }
    }
  }
}
```
