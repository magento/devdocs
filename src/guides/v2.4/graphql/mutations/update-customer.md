---
group: graphql
title: updateCustomer mutation
---

{:.bs-callout-warning}
Magento recommends using the [updateCustomerV2 mutation]({{page.baseurl}}/graphql/mutations/update-customer-v2.html) to update a customer.

The `updateCustomer` mutation updates the customer's personal information.

To return or modify information about a customer, Magento recommends you use customer tokens in the header of your GraphQL calls. However, you also can use [session authentication]({{ page.baseurl }}/get-started/authentication/gs-authentication-session.html).

## Syntax

`mutation: {updateCustomer(input: CustomerInput!) {CustomerOutput}}`

## Example usage

The following call updates the first name and email address for a specific customer.

**Request:**

```graphql
mutation {
  updateCustomer(
    input: {
      firstname: "Rob"
      email: "robloblaw@example.com"
    }
  ) {
    customer {
      firstname
      email
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "updateCustomer": {
      "customer": {
        "firstname": "Rob",
        "email": "robloblaw@example.com"
      }
    }
  }
}
```

## Input attributes

The following table lists the attributes you can use as input for the `updateCustomer` mutation. The [Customer attributes]({{page.baseurl}}/graphql/queries/customer.html#customerAttributes) table lists the attributes Magento returns.

{% include graphql/create-customer.md %}

## Output attributes

The `updateCustomer` mutation returns the `CustomerOutput` object.

The following table lists the top-level attributes of the `customer` object. See the [`customer` query]({{page.baseurl}}/graphql/queries/customer.html) for complete details about this object.

{% include graphql/customer-output-24.md %}

## Related topics

*  [customer query]({{page.baseurl}}/graphql/queries/customer.html)
*  [createCustomer mutation]({{page.baseurl}}/graphql/mutations/create-customer.html)
*  [createCustomerAddress mutation]({{page.baseurl}}/graphql/mutations/create-customer-address.html)
*  [updateCustomerAddress mutation]({{page.baseurl}}/graphql/mutations/update-customer-address.html)
*  [deleteCustomerAddress mutation]({{page.baseurl}}/graphql/mutations/delete-customer-address.html)
