---
group: graphql
title: updateCustomerEmail mutation
---

Use the `updateCustomerEmail` mutation to change the email address for the logged-in customer.

To return or modify information about a customer, Magento recommends you use customer tokens in the header of your GraphQL calls. However, you also can use [session authentication]({{ page.baseurl }}/get-started/authentication/gs-authentication-session.html).

## Syntax

`mutation: updateCustomerEmail(email: String! password: String!): CustomerOutput`

## Example usage

The following call updates the customer's email address.

**Request:**

```graphql
mutation {
  updateCustomerEmail(email: "new_email@example.com", password: "roni_cost3@example.com") {
    customer {
      email
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "updateCustomerEmail": {
      "customer": {
        "email": "new_email@example.com"
      }
    }
  }
}
```

## Input attributes

The `updateCustomerEmail` mutation requires the following inputs:

Attribute |  Data Type | Description
--- | --- | ---
`email` | String! | The customer's new email address
`password` | String! | The customer's password

## Output attributes

The `updateCustomerEmail` mutation returns the `customer` object.

The following table lists the top-level attributes of the `customer` object. See the [`customer` query]({{page.baseurl}}/graphql/queries/customer.html) for complete details about this object.

{% include graphql/customer-output-24.md %}

## Related topics

*  [customer query]({{page.baseurl}}/graphql/queries/customer.html)
*  [updateCustomerV2 mutation]({{page.baseurl}}/graphql/mutations/update-customer-v2.html)
