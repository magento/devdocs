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
This mutation query creates an empty cart:
```text
mutation {
  createEmptyCart
}
```

**Response**
```json
{
  "data": {
    "createEmptyCart": "gqjcFzgL8hNxxdrqLDEkMP487nOWBXOv"
  }
}
```

If you create a shopping cart for the registered customer then you should send customer's authorization token in the `Authorization` parameter of the header:

![GraphiQL Authorization Bearer]({{ page.baseurl }}/graphql/images/graphql-authorization.png)
