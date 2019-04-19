---
layout: tutorial
group: graphql
title: Step 2. Create empty cart
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

**Request**

The following mutation query creates an empty cart:

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

In the next tutorial steps the unique shopping cart identifier - `A7jCcOmUjjCh7MxDIzu1SeqdqETqEa5h` will be mentioned as `{{ CART_ID }}`.

{:.bs-callout .bs-callout-info}
Send customer's authorization token in the `Authorization` parameter of the header if you create a shopping cart for a registered customer. See ["Get customer authorization token"]({{ page.baseurl }}/graphql/get-customer-authorization-token.html) to get more details.
