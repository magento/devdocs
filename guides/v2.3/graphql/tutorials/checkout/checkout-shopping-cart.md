---
layout: tutorial
group: graphql
title: Step 2. Create empty cart
subtitle: GraphQl checkout tutorial
return_to:
  title: GraphQl checkout tutorial
  url: graphql/tutorials/index.html
menu_order: 2
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
