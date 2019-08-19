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

**Request**

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

**Response**

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

### Customer address input attributes {#customerAddressInput}

Attribute |  Data Type | Description
--- | --- | ---
`city` | String | The city or town
`company` | String | The customer's company
`country_id` | CountryCodeEnum | The customer's country
`custom_attributes` | [CustomerAddressAttributeInput](#customerAddressAttributeInput) | Address custom attributes
`customer_id` | Int | The customer ID
`default_billing` | Boolean | Indicates whether the address is the default billing address
`default_shipping` | Boolean | Indicates whether the address is the default shipping address
`fax` | String | The fax number
`firstname` | String | The first name of the person associated with the shipping/billing address
`lastname` | String | The family name of the person associated with the shipping/billing address
`middlename` | String | The middle name of the person associated with the shipping/billing address
`postcode` | String | The customer's ZIP or postal code
`prefix` | String | An honorific, such as Dr., Mr., or Mrs.
`region` | [CustomerAddressRegionInput](#customerAddressRegionInput) | An object that defines the customer's state or province
`street` | [String] | An array of strings that define the street number and name
`suffix` | String | A value such as Sr., Jr., or III
`telephone` | String | The telephone number
`vat_id` | String | The customer's Tax/VAT number (for corporate customers)

### Customer address attributes {#customerAddressAttributeInput}

The `CustomerAddressAttributeInput` object can contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`attribute_code` | String | Attribute code
`value` | String | Attribute value

### Customer address region input attributes {#customerAddressRegionInput}

The `customerAddressRegionInput` object can contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`region_code` | String | The address region code
`region` | String | The state or province name
`region_id` | Int | Uniquely identifies the region

## Output attributes

Attribute |  Data Type | Description
--- | --- | ---
`CustomerAddress` | [CustomerAddress]({{page.baseurl}}/graphql/queries/customer.html#customerAddress) | Information about the customer’s addresses

## Related topics

* [customer query]({{page.baseurl}}/graphql/queries/customer.html)
* [createCustomer mutation]({{page.baseurl}}/graphql/mutations/create-customer.html)
* [updateCustomer mutation]({{page.baseurl}}/graphql/mutations/update-customer.html)
* [updateCustomerAddress mutation]({{page.baseurl}}/graphql/mutations/update-customer-address.html)
* [deleteCustomerAddress mutation]({{page.baseurl}}/graphql/mutations/delete-customer-address.html)
