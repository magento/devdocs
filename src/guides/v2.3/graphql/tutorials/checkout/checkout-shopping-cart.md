---
layout: tutorial
group: graphql
title: Step 2. Create an empty cart
subtitle: GraphQL checkout tutorial
level3_subgroup: graphql-checkout
return_to:
  title: GraphQL Overview
  url: graphql/index.html
menu_order: 20
functional_areas:
  - Integration
contributor_name: Atwix
contributor_link: https://www.atwix.com/
---

The `customerCart` query returns the active cart for the logged-in customer. If the cart does not exist, the query creates one. The customer’s authorization token must be specified in the headers. ["Get customer authorization token"]({{ page.baseurl }}/graphql/get-customer-authorization-token.html) describes describes these tokens.

{:.bs-callout-info}
Use the [`createEmptyCart`]({{page.baseurl}}/graphql/mutations/create-empty-cart.html) mutation to create an empty shopping cart and generate a cart ID for a guest user. If the guest later logs in as a customer, use the [`mergeCarts`]({{page.baseurl}}/graphql/mutations/merge-carts.html) mutation to transfer the contents of the guest cart into the customer's cart.

**Request:**

The customer created in the previous step does not have an active cart. The following query creates an empty cart and returns the cart ID:

```text
{
  customerCart{
    id
  }
}
```

**Response:**

```json
{
  "data": {
    "customerCart": {
      "id": "A7jCcOmUjjCh7MxDIzu1SeqdqETqEa5h"
    }
  }
}
```

In the subsequent tutorial steps, the unique shopping cart identifier `A7jCcOmUjjCh7MxDIzu1SeqdqETqEa5h` will be listed as `{ CART_ID }`.

## Verify this step {#verify-step}

There are no additional verification steps. The value of `id` value is not displayed on the website or in the Magento Admin.
