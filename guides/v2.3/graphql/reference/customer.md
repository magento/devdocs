---
group: graphql
title: Customer endpoint
---

Magento's GraphQL API provides queries and mutations to help you retrieve and update your customer's information.

The `Customer` endpoint returns information about a customer account.

Currently, GraphQL relies on [session authentication]({{ page.baseurl }}/get-started/authentication/gs-authentication-session.html). To successfully return information about a customer, you must be logged in as a customer in the same browser you are using to make GraphQL calls. The GraphQL call returns information about this customer.

Use queries to read server-side data, such as retrieving a specific customer's address.

The following fields describe the available `Customer` queries with Magento's GraphQL API.

## Query structure

`customer: Customer`

## Customer object

Attribute |  Data Type | Description
--- | --- | ---
`addresses` | [CustomerAddresses]  | An array containing the customer's shipping and billing addresses
`created_at` | String | Timestamp indicating when the account was created
`default_billing` | String | The ID assigned to the billing address
`default_shipping` | String | The ID assigned to the shipping address
`dob` | String | The customer's date of birth
`email` | String | The customer's email address. Required
`firstname` | String | The customer's first name
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

### CustomerAddress object

The values assigned to attributes such as `firstname` and `lastname` in this object may be different from those defined in the Customer object.

Attribute |  Data Type | Description
--- | --- | ---
`city` | String | The city or town
`company` | String | The customer's company
`country_id` | String | The customer's country
`customer_id` | Int | The customer ID
`default_billing` | Boolean | Indicates whether the address is the default billing address
`default_shipping` | Boolean | Indicates whether the address is the default shipping address
`fax` | String | The fax number
`firstname` | String | The first name of the person associated with the shipping/billing address
`id` | Int | The ID assigned to the address object
`lastname` | String | The family name of the person associated with the shipping/billing address
`middlename` | String | The middle name of the person associated with the shipping/billing address
`postcode` | String | The customer's ZIP or postal code
`prefix` | String | An honorific, such as Dr., Mr., or Mrs.
`region` | CustomerAddressesRegion | An object containing the region name, region code, and region ID
`region_id` | Int | A number that uniquely identifies the state, province, or other area
`street` | [String] | An array of strings that define the street number and name
`suffix` | String | A value such as Sr., Jr., or III
`telephone` | String | The telephone number
`vat_id` | String | The customer's Tax/VAT number (for corporate customers)

## Example usage

The following call returns information about the logged-in customer.

**Request**

``` text
{
  customer
  {
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
      region_id
      postcode
      country_id
      telephone
    }
  }
}
```

**Response**

``` json
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
         "region_id": 57,
         "postcode": "78758",
         "country_id": "US",
         "telephone": "512 555-1212"
        }
      ]
    }
  }
}
```
## Mutation

Use `Customer` mutations to update server-side data, such as adding a new customer or modififying attributes for an existing customer.

The following fields describe the available `Customer` mutations with Magento's GraphQL API.

### Mutation structure

`mutation: Customer`

### changeCustomerPassword object

Changes the password for the logged-in customer.

Attribute |  Data Type | Description
--- | --- | ---
`currentPassword` | String | The customer's current password
`newPassword` | String | The customer's new password


## Example usage

The following call updates the customer's password.

**Request**

``` text
mutation {
  changeCustomerPassword(
    currentPassword: "Password1",
    newPassword: "Password2"
  ) {
    id
    email
    firstname
    middlename
    lastname
  }
}
```

**Response**

``` json

```

### createCustomer object

Creates a new customer account.

Uses the `CustomerInput` attribute, which contains the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`dob` | String | The customer’s date of birth
`email` | String | The customer’s email address. Required
`firstname` | String | The customer’s first name
`gender` | Int | The customer's gender (Male - 1, Female - 2)
`is_subscribed` | Boolean | The customer's new password
`lastname` | String | The customer’s last name
`middlename` | String | The customer’s middle name
`password` | String | The customer's password
`prefix` | String | An honorific, such as Dr., Mr., or Mrs.
`suffix` | String | A value such as Sr., Jr., or III
`taxvat` | String | The customer’s Tax/VAT number (for corporate customers)

## Example usage

The following call creates a new customer.

**Request**

``` text
mutation {
    createCustomer(
        input: {
            firstname: "{$newFirstname}"
            lastname: "{$newLastname}"
            email: "{$newEmail}"
            password: "{$currentPassword}"
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

``` json

```

### createCustomerAddress object

Creates the customer's address.

Uses the `CustomerAddressInput` attribute (link to CustomerAddress object).

## Example usage

The following call creates an address for the specified customer.

**Request**

``` text
mutation{
  createCustomerAddress(input: {
    prefix: "Mr."
    firstname: "John"
    middlename: "A"
    lastname: "Smith"
    telephone: "123456789"
    street: ["Line 1", "Line 2"]
    city: "Test City"
    region: {
        region_id: 1
    }
    country_id: US
    postcode: "9999"
    default_shipping: true
    default_billing: false
  }) {
    id
  }
}
```

**Response**

``` json

```
### deleteCustomerAddress object

Deletes the customer's address.

Uses the customer's address `id` attribute to delete the address.

## Example usage

The following call deletes a customer's address.

**Request**

``` text
mutation {
  deleteCustomerAddress(id: {$addressId})
}
```

**Response**

``` json

```
### generateCustomerToken object

Creates a new customer token.

Attribute |  Data Type | Description
--- | --- | ---
`email` | String | The customer's email address
`password` | String | The customer's password

## Example usage

The following call creates a new customer token.

**Request**

``` text
mutation {
	generateCustomerToken(
        email: "{$userName}"
        password: "{$password}"
    ) {
        token
    }
}
```

**Response**

``` json

```
### revokeCustomerToken object

Revokes the customer's token. (WHY WOULD YOU WANT TO DO THIS?)

Returns the `RevokeCustomerTokenOutput` Boolean (successful - 0, unsuccessful - 1).

## Example usage

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

``` json

```
### updateCustomer object

Updates the customer's personal information. Use the `CustomerInput` argument with the following additional attributes.

Attribute |  Data Type | Description
--- | --- | ---
`gender`| Int | The customer's gender (Male - 1, Female - 2)
`password`| Int | The customer's password


## Example usage

The following call updates the gender and city for a specific customer.

**Request**

``` text
mutation {
    updateCustomer(
        input: {
            firstname: "{$newFirstname}"
            lastname: "{$newLastname}"
            email: "{$newEmail}"
            password: "{$currentPassword}"
        }
    ) {
        customer {
            firstname
            lastname
            email
        }
    }
}
```

**Response**

``` json

```
### updateCustomerAddress object

Updates the customer's address.

Attribute |  Data Type | Description
--- | --- | ---
`id` | Int | The ID assigned to the customer
`CustomerAddressInput` | [CustomerAddresses] | An array containing the customer’s shipping and billing addresses

## Example usage

The following call updates the customer's address.

**Request**

``` text
mutation {
  updateCustomerAddress(id:{$addressId}, input: {
    city: "New City"
    postcode: "5555"
  }) {
    id
  }
}
```

**Response**

``` json

```