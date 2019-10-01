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

The `createEmptyCart` mutation creates an empty shopping cart and generates a cart ID.

{:.bs-callout .bs-callout-info}
For logged-in customers, send the customer's authorization token in the Authorization parameter of the header. See ["Get customer authorization token"]({{ page.baseurl }}/graphql/get-customer-authorization-token.html) for more information.

**Request**

The following mutation creates an empty cart:

```text
mutation {
  createEmptyCart
}
```

**Response**

```json
{
  "data": {
    "createEmptyCart": "A7jCcOmUjjCh7MxDIzu1SeqdqETqEa5h"
  }
}
```

In the subsequent tutorial steps, the unique shopping cart identifier `A7jCcOmUjjCh7MxDIzu1SeqdqETqEa5h` will be listed as `{ CART_ID }`.

## Verify this step {#verify-step}

There are no additional verification steps. The values of `quote` and `entity_id` value are  not displayed on the website or in the Magento Admin.
