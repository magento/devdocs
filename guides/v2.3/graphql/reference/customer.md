---
group: graphql
title: Customer endpoint
---

The `Customer` endpoint contains information about a customer account accessible through queries and mutations.

To return or modify information about a customer, Magento recommends you use customer tokens in the header of your GraphQL calls. However, you also can use [session authentication]({{ page.baseurl }}/get-started/authentication/gs-authentication-session.html).

## Queries

The `customer` query returns information about the logged-in customer.

The `isEmailAvailable` query checks whether the specified email has already been used to create a customer account. A value of `true` indicates the email address is available, and the customer can use the email address to create an account.

### Syntax

`{customer: {Customer}}`

`{isEmailAvailable (email): {IsEmailAvailableOutput}}`

### Customer attributes {#customerAttributes}
The customer object can contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`addresses` | [CustomerAddress](#customerAddress)  | An array containing the customer's shipping and billing addresses
`created_at` | String | Timestamp indicating when the account was created
`default_billing` | String | The ID assigned to the billing address
`default_shipping` | String | The ID assigned to the shipping address
`dob` | String | The customer's date of birth
`email` | String | The customer's email address
`firstname` | String | The customer's first name
`gender` | Int | The customer's gender (Male - 1, Female - 2)
`group_id` | Int | The group assigned to the user. Default values are 0 (Not logged in), 1 (General), 2 (Wholesale), and 3 (Retailer)
`id` | Int | The ID assigned to the customer
`is_subscribed` | Boolean | Indicates whether the customer is subscribed to the company's newsletter
`lastname` | String | The customer's family name
`middlename` |String | The customer's middle name
`prefix` | String | An honorific, such as Dr., Mr., or Mrs.
`reward_update_notification` | Int | The number of the email template to use for notifications about reward updates. This attribute is defined in the Reward module.
`reward_warning_notification` | Int | The number of the email template to use for notifications about rewards points expiring. This attribute is defined in the Reward module.
`suffix` | String | A value such as Sr., Jr., or III
`taxvat` | String | The customer's Tax/VAT number (for corporate customers)

### Customer address attributes {#customerAddress}

The values assigned to attributes such as `firstname` and `lastname` in this object may be different from those defined in the Customer object.

Attribute |  Data Type | Description
--- | --- | ---
`city` | String | The city or town
`company` | String | The customer's company
`country_id` | String | The customer's country
`custom_attributes` | [CustomerAddressAttribute](#CustomerAddressAttribute) | Address custom attributes
`customer_id` | Int | The customer ID
`default_billing` | Boolean | Indicates whether the address is the default billing address
`default_shipping` | Boolean | Indicates whether the address is the default shipping address
`extension_attributes` | [CustomerAddressAttribute](#CustomerAddressAttribute) | Address extension attributes
`fax` | String | The fax number
`firstname` | String | The first name of the person associated with the shipping/billing address
`id` | Int | The ID assigned to the address object
`lastname` | String | The family name of the person associated with the shipping/billing address
`middlename` | String | The middle name of the person associated with the shipping/billing address
`postcode` | String | The customer's ZIP or postal code
`prefix` | String | An honorific, such as Dr., Mr., or Mrs.
`region` | [CustomerAddressRegion](#customerAddressRegion) | An object that defines the customer's state or province
`region_id` | Int | A number that uniquely identifies the state, province, or other area
`street` | [String] | An array of strings that define the street number and name
`suffix` | String | A value such as Sr., Jr., or III
`telephone` | String | The telephone number
`vat_id` | String | The customer's Tax/VAT number (for corporate customers)

### Customer address region attributes {#customerAddressRegion}

The `CustomerAddressRegion` object can contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`region_code` | String | The address region code
`region` | String | The state or province name
`region_id` | Int | Uniquely identifies the region

### Customer address attribute {#CustomerAddressAttribute}

The `CustomerAddressAttribute` object consists of:

Attribute |  Data Type | Description
--- | --- | ---
`attribute_code` | String | Attribute code
`value` | String | Attribute value

### isEmailAvailable query attribute

Attribute |  Data Type | Description
--- | --- | ---
`email` | String! | The email address to check

### IsEmailAvailableOutput attribute

Attribute |  Data Type | Description
--- | --- | ---
`is_email_available` | Boolean | A value of `true` indicates the email address is available, and the customer can use the email address to create an account

### Example usage

The following call returns information about the logged-in customer. Provide the customer's token in the header section of the query.

**Request**

``` text
{
  customer {
    firstname
    lastname
    suffix
    email
    id
    addresses {
      firstname
      lastname
      street
      city
      region {
        region_code
        region
        region_id
      }
      postcode
      country_id
      telephone
    }
  }
}
```

**Response**

```
{
  "data": {
    "customer": {
      "firstname": "John",
      "lastname": "Doe",
      "suffix": null,
      "email": "jdoe@example.com",
      "id": 3,
      "addresses": [
       {
         "firstname": "John",
         "lastname": "Doe",
         "street": [
           "123 Elm Street"
         ],
         "city": "Anytown",
         "region": {
           "region_code": "MI",
           "region": "Michigan",
           "region_id": 33
         }
         "postcode": "78758",
         "country_id": "US",
         "telephone": "512 555-1212"
        }
      ]
    }
  }
}
```

The following example checks whether the email address `customer@example.com` is available to create a customer account.

**Request**

```text
{
  isEmailAvailable(email: "customer@example.com") {
    is_email_available
  }
}
```

**Response**

```json
{
  "data": {
    "isEmailAvailable": {
      "is_email_available": true
    }
  }
}
```

## Mutations
Use mutations to update server-side data, such as adding a new customer or modifying attributes for an existing customer.

### Manage customers
{:.no_toc}

You can use customer mutations to create a new customer or modify personal information for an existing customer. See [manage customer address](#managecustomeraddress) to modify a customer's address.

**Manage customers attributes**

The following table lists the attributes you can use as input for mutations that create or update customers. The [Customer attributes](#customerAttributes) table lists the attributes Magento returns.

Attribute |  Data Type | Description
--- | --- | ---
`dob` | String | The customer’s date of birth
`email` | String | The customer’s email address. Required to create a customer
`firstname` | String | The customer’s first name. Required to create a customer
`gender` | Int | The customer's gender (Male - 1, Female - 2)
`is_subscribed` | Boolean | The customer's new password
`lastname` | String | The customer’s last name. Required to create a customer
`middlename` | String | The customer’s middle name
`password` | String | The customer's password. Required to create a customer
`prefix` | String | An honorific, such as Dr., Mr., or Mrs.
`suffix` | String | A value such as Sr., Jr., or III
`taxvat` | String | The customer’s Tax/VAT number (for corporate customers)

### Create a customer
Creates a new customer account.

#### Syntax

`mutation: {createCustomer(input: CustomerInput!) {CustomerOutput}}`

#### Example usage

The following call creates a new customer.

**Request**

``` text
mutation {
  createCustomer(
    input: {
      firstname: "Bob"
      lastname: "Loblaw"
      email: "bobloblaw@example.com"
      password: "b0bl0bl@w"
      is_subscribed: true
    }
  ) {
    customer {
      id
      firstname
      lastname
      email
      is_subscribed
    }
  }
}
```

**Response**

``` text
{
  "data": {
    "createCustomer": {
      "customer": {
        "id": 5,
        "firstname": "Bob",
        "lastname": "Loblaw",
        "email": "bobloblaw@example.com",
        "is_subscribed": true
      }
    }
  }
}
```
### Update a customer

Updates the customer's personal information.

#### Syntax

`mutation: {updateCustomer(input: CustomerInput!) {CustomerOutput}}`

#### Example usage

The following call updates the first name and email address for a specific customer.

**Request**

``` text
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

**Response**

``` text
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

### Manage customer address {#managecustomeraddress}
{:.no_toc}

Use these mutations to create or modify the customer's address.

#### Manage customer address attributes

Attribute |  Data Type | Description
--- | --- | ---
`id` | Int | The ID assigned to the address object
`CustomerAddressInput` | [CustomerAddress](#customerAddressInput) | An array containing the customer’s shipping and billing addresses

#### Customer address input attributes {#customerAddressInput}

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

### Create customer address

Creates the customer's address.

#### Syntax

`mutation: {createCustomerAddress(input: CustomerAddressInput!) {CustomerAddress}}`

#### Example usage

The following call creates an address for the specified customer.

**Request**

``` text
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

``` text
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

### Update customer address

Updates the customer's address.

#### Syntax

`mutation: {updateCustomerAddress(id: Int!input: CustomerAddressInput) {CustomerAddress}}`

#### Example usage

The following call updates the customer's city and postcode.

**Request**

``` text
mutation {
  updateCustomerAddress(id:3, input: {
    city: "New City"
    postcode: "5555"
  }) {
    id
    city
    postcode
  }
}
```

**Response**

``` text
{
  "data": {
    "updateCustomerAddress": {
      "id": 3,
      "city": "New City",
      "postcode": 5555
    }
  }
}
```
### Delete customer address

Deletes the specified customer address.

#### Syntax

`mutation: {deleteCustomerAddress(id: Int!) {Boolean}}`

#### Example usage

The following call deletes a customer's address.

**Request**

``` text
mutation {
  deleteCustomerAddress(id: 4)
}
```

**Response**

``` text
{
  "data": {
    "deleteCustomerAddress": true
  }
}
```

### Manage customer tokens
{:.no_toc}

Use these mutations to create or revoke a customer's token.

**Manage customer tokens attributes**

Attribute |  Data Type | Description
--- | --- | ---
`email` | String | The customer's email address
`password` | String | The customer's password

### Generate a customer token

Creates a new customer token.

#### Syntax

`mutation: {generateCustomerToken(email: String!password: String!) {CustomerToken}}`

#### Example usage

The following call creates a new customer token.

**Request**

``` text
mutation {
  generateCustomerToken(
    email: "bobloblaw@example.com"
    password: "b0bl0bl@w"
  ) {
    token
  }
}
```

**Response**

``` text
{
  "data": {
    "generateCustomerToken": {
      "token": "ar4116zozoagxty1xjn4lj13kim36r6x"
    }
  }
}
```

### Revoke a customer token

Revokes the customer's token.

#### Syntax

`mutation: {revokeCustomerToken: RevokeCustomerTokenOutput}`

#### Example usage

The following call revokes the customer's token.

**Request**

``` text
mutation {
  revokeCustomerToken {
    result
  }
}
```

**Response**

```json
{
  "data": {
    "revokeCustomerToken": {
      "result": true
    }
  }
}
```

### Change customer password

Changes the password for the logged-in customer.

**Change customer password attributes**

Attribute |  Data Type | Description
--- | --- | ---
`currentPassword` | String | The customer's current password
`newPassword` | String | The customer's new password

#### Syntax

`mutation: {changeCustomerPassword(currentPassword: String!newPassword: String!) {Customer}}`

#### Example usage

The following call updates the customer's password.

**Request**

``` text
mutation {
  changeCustomerPassword(
    currentPassword: "roni_cost3@example.com",
    newPassword: "roni_cost4@example.com"
  ) {
    id
    email
  }
}
```

**Response**

```json
{
  "data": {
    "changeCustomerPassword": {
      "id": 1,
      "email": "roni_cost@example.com"
    }
  }
}
```
