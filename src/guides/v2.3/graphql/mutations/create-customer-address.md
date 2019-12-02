---
group: graphql
title: createCustomerAddress mutation
---

Use the `createCustomerAddress` mutation to create the customer's address.

To return or modify information about a customer, Magento recommends you use customer tokens in the header of your GraphQL calls. However, you also can use [session authentication]({{ page.baseurl }}/get-started/authentication/gs-authentication-session.html).

## Syntax

`mutation: {createCustomerAddress(input: CustomerAddressInput!) {CustomerAddress}}`

## Example usage

The following call creates an address for the specified customer.

**Request:**

```graphql
mutation {
  createCustomerAddress(input: {
    region: {
      region: "Arizona"
      region_id: 4
      region_code: "AZ"
    }
    country_id: US
    street: ["123 Main Street"]
    telephone: "7777777777"
    postcode: "77777"
    city: "Phoenix"
    firstname: "Bob"
    lastname: "Loblaw"
    default_shipping: true
    default_billing: false
  }) {
    id
    customer_id
    region {
      region
      region_id
      region_code
    }
    country_id
    street
    telephone
    postcode
    city
    default_shipping
    default_billing
  }
}
```

**Response:**

```json
{
  "data": {
    "createCustomerAddress": {
      "id": 4,
      "customer_id": 5,
      "region": {
        "region": "Arizona",
        "region_id": 4,
        "region_code": "AZ"
      },
      "country_id": "US",
      "street": [
        "123 Main Street"
      ],
      "telephone": "7777777777",
      "postcode": "77777",
      "city": "Phoenix",
      "default_shipping": true,
      "default_billing": false
    }
  }
}
```

## Input attributes

Attribute |  Data Type | Description
--- | --- | ---
`id` | Int | The ID assigned to the address object
`CustomerAddressInput` | [CustomerAddress](#customerAddressInput) | An array containing the customer’s shipping and billing addresses

{% include graphql/customer-address-input.md %}

## Output attributes

The `createCustomerAddress` mutation returns the following attributes:

{% include graphql/customer-address-output.md %}

## Errors

Error | Description
--- | ---
`Expected type CustomerAddressInput!, found "".` | The `input` attribute contains an empty value.
`"input" value should be specified` | The `input` attribute is specified but is empty.
`Required parameters are missing: firstname` | The `input.firstname` attribute was omitted or contains an empty value.
`"Street Address" cannot contain more than 2 lines.` | The `input.street` attribute contains array with more than two elements.
`Syntax Error: Expected Name, found )` | The `input` attribute was omitted.
`The current customer isn't authorized.` | The current customer is not currently logged in, or the customer's token does not exist in the `oauth_token` table.

## Related topics

*  [customer query]({{page.baseurl}}/graphql/queries/customer.html)
*  [createCustomer mutation]({{page.baseurl}}/graphql/mutations/create-customer.html)
*  [updateCustomer mutation]({{page.baseurl}}/graphql/mutations/update-customer.html)
*  [updateCustomerAddress mutation]({{page.baseurl}}/graphql/mutations/update-customer-address.html)
*  [deleteCustomerAddress mutation]({{page.baseurl}}/graphql/mutations/delete-customer-address.html)
