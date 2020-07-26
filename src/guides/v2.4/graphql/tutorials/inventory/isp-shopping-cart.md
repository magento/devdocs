---
layout: tutorial
group: graphql
title: Step 1. Create an empty cart
subtitle: GraphQL In-store pickup tutorial
level3_subgroup: graphql-inventory
return_to:
  title: GraphQL Overview
  url: graphql/index.html
menu_order: 10
functional_areas:
  - Integration
---

{:.bs-callout-info}
This tutorial assumes that you have already created a customer. If you have not, see [Authorization tokens]({{page.baseurl}}/graphql/authorization-tokens.html) for details about creating a customer.

The [`customerCart` query]({{page.baseurl}}/graphql/queries/customer-cart.html) returns the active cart for the logged-in customer. If the cart does not exist, the query creates one. You must specify the customer’s authorization token in the headers. Otherwise, the query fails. ["Get customer authorization token"]({{ page.baseurl }}/graphql/get-customer-authorization-token.html) describes describes these tokens.

The customer does not have an active cart. The following query creates an empty cart and returns the cart ID. You must specify the customer’s authorization token in the headers of the call.

**Headers:**

`Authorization: Bearer <customer token>`

`Store: default`

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
      "id": "AGRqP1L4VifCX9qqJO7KBKo1zAkvJrYZ"
    }
  }
}
```

In the subsequent tutorial steps, the unique shopping cart identifier `AhO82AZbXTuLZF6KsRjQz2jf0GwCHcjc` will be listed as `{ CART_ID }`.

## Verify this step {#verify-step}

There are no additional verification steps. The value of `id` is not displayed on the website or in the Magento Admin.
