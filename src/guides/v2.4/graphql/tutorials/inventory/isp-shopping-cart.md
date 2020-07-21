---
layout: tutorial
group: graphql
title: Step 2. Create an empty cart
subtitle: GraphQL In-store pickup tutorial
level3_subgroup: graphql-inventory
return_to:
  title: GraphQL Overview
  url: graphql/index.html
menu_order: 20
functional_areas:
  - Integration
---

The [`customerCart` query]({{page.baseurl}}/graphql/queries/customer-cart.html) returns the active cart for the logged-in customer. If the cart does not exist, the query creates one. You must specify the customer’s authorization token in the headers. Otherwise, the query fails. ["Get customer authorization token"]({{ page.baseurl }}/graphql/get-customer-authorization-token.html) describes describes these tokens.

The customer created in the REST tutorial does not have an active cart. The following query creates an empty cart and returns the cart ID. You must specify the customer’s authorization token in the headers of the call.

**Headers:**

`Authorization: Bearer <customer token>`

`Store: us`

**Request:**

```graphql
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
      "id": "AhO82AZbXTuLZF6KsRjQz2jf0GwCHcjc"
    }
  }
}
```

In the subsequent tutorial steps, the unique shopping cart identifier `AhO82AZbXTuLZF6KsRjQz2jf0GwCHcjc` will be listed as `{ CART_ID }`.

## Verify this step {#verify-step}

There are no additional verification steps. The value of `id` is not displayed on the website or in the Magento Admin.
