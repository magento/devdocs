---
group: graphql
title: updateCustomerV2 mutation
redirect_to: https://developer.adobe.com/commerce/webapi/graphql/schema/customer/mutations/update-v2/
status: migrated
---

The `updateCustomerV2` mutation updates the personal information in an existing customer account. Use the [`updateCustomerEmail` mutation]({{page.baseurl}}/graphql/mutations/update-customer-email.html) to update the customer's email address.

The `updateCustomerV2` mutation supersedes the `updateCustomer` mutation as the means to update a customer account. The input objects differ between these two mutations. The `updateCustomer` mutation required the `CustomerInput` object, as did the `createCustomer` mutation. Updating a customer does not require any specific attribute, while several attributes are required when you create a customer. You could not determine this by looking at the schema for those mutations. The `updateCustomerV2` mutation requires the `CustomerUpdateInput` object, which it does not share with the [`createCustomerV2` mutation]({{page.baseurl}}/graphql/mutations/create-customer-v2.html).

To return or modify information about a customer, we recommend you use customer tokens in the header of your GraphQL calls. However, you also can use [session authentication](https://developer.adobe.com/commerce/webapi/get-started/authentication/gs-authentication-session).

## Syntax

`mutation: {updateCustomerV2(input: CustomerUpdateInput!) {CustomerOutput}}`

## Example usage

The following call updates the first name and the newsletter subscription status for a specific customer.

**Request:**

```graphql
mutation {
  updateCustomerV2(
    input: {
      firstname: "Robert"
      is_subscribed: false
    }
  ) {
    customer {
      firstname
      is_subscribed
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "updateCustomerV2": {
      "customer": {
        "firstname": "Robert",
        "is_subscribed": false
      }
    }
  }
}
```

## Input attributes

The following table lists the attributes you can use as input for the `updateCustomerV2` mutation.

Attribute |  Data Type | Description
--- | --- | ---
`allow_remote_shopping_assistance` | Boolean | Indicates whether the customer has enabled remote shopping assistance
`date_of_birth` | String | The customer's date of birth. In keeping with current security and privacy best practices, be sure you are aware of any potential legal and security risks associated with the storage of customers' full date of birth (month, day, year) along with other personal identifiers, such as full name, before collecting or processing such data.
`dob` | String | Deprecated. Use `date_of_birth` instead. The customer's date of birth
`firstname` | String | The customer's first name
`gender` | Int | The customer's gender (Male - 1, Female - 2)
`is_subscribed` | Boolean | Indicates whether the customer subscribes to the store's newsletter
`lastname` | String | The customer's last name
`middlename` | String | The customer's middle name
`password` | String | The customer's password
`prefix` | String | An honorific, such as Dr., Mr., or Mrs.
`suffix` | String | A value such as Sr., Jr., or III
`taxvat` | String | The customer's Tax/VAT number (for corporate customers)

## Output attributes

The `CustomerOutput` object contains the `Customer` object.

The following table lists the top-level attributes of the `customer` object. See the [`customer` query]({{page.baseurl}}/graphql/queries/customer.html) for complete details about this object.

{% include graphql/customer-output-24.md %}

## Related topics

*  [customer query]({{page.baseurl}}/graphql/queries/customer.html)
*  [createCustomerV2 mutation]({{page.baseurl}}/graphql/mutations/create-customer-v2.html)
*  [createCustomerAddress mutation]({{page.baseurl}}/graphql/mutations/create-customer-address.html)
*  [updateCustomerAddress mutation]({{page.baseurl}}/graphql/mutations/update-customer-address.html)
*  [updateCustomerEmail mutation]({{page.baseurl}}/graphql/mutations/update-customer-email.html)
*  [deleteCustomerAddress mutation]({{page.baseurl}}/graphql/mutations/delete-customer-address.html)
