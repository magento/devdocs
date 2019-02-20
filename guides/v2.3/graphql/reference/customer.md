---
group: graphql
title: Customer endpoint
---

The `Customer` endpoint contains information about a customer account accessible through queries and mutations.

Currently, GraphQL relies on [session authentication]({{ page.baseurl }}/get-started/authentication/gs-authentication-session.html). To successfully return or modify information about a customer, you must be logged in as a customer in the same browser you are using to make GraphQL calls.

## Queries
Use queries to read server-side data, such as a specific customer's address.

### Syntax

`customer: Customer`

### Customer attributes
The customer object can contain the following attributes:

Attribute |  Data Type | Description 
--- | --- | ---
`addresses` | [CustomerAddress](#customerAddress)  | An array containing the customer's shipping and billing addresses
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

### Customer address attributes {#customerAddress}

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
`region` | CustomerAddressRegion | An object containing the region name, region code, and region ID
`region_id` | Int | A number that uniquely identifies the state, province, or other area
`street` | [String] | An array of strings that define the street number and name
`suffix` | String | A value such as Sr., Jr., or III
`telephone` | String | The telephone number
`vat_id` | String | The customer's Tax/VAT number (for corporate customers)

### Example usage

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

## Mutations
Use mutations to update server-side data, such as adding a new customer or modifying attributes for an existing customer.

### Manage customers

You can use customer mutations to create a new customer or modify personal information for an existing customer. See [manage customer address](#managecustomeraddress) to modify a customer's address.

* Create a customer
* Update an existing customer

**Manage customers attributes**

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

#### Create a customer
Creates a new customer account.

##### Syntax

`mutation: createCustomer`

##### Example usage

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

``` json
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
#### Update a customer

Updates the customer's personal information.

##### Syntax

`mutation: updateCustomer`

##### Example usage

The following call updates the first and last name and email address for a specific customer.

**Request**

``` text
mutation {
    updateCustomer(
        input: {
            firstname: "Robert"
            lastname: "Loblaws"
            email: "robloblaws@example.com"
            password: "b0bl0bl@w"
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
{
  "data": {
    "updateCustomer": {
      "customer": {
        "firstname": "Robert",
        "lastname": "Loblaws",
        "email": "robloblaws@example.com"
      }
    }
  }
}
```

### Manage customer address {#managecustomeraddress}
Use these mutations to create or modify the customer's address.

* Create a customer's address
* Update a customer's address
* Delete a customer's address 

**Manage customer address attibutes**

Attribute |  Data Type | Description
--- | --- | ---
`id` | Int | The ID assigned to the address object
`CustomerAddressInput` | [CustomerAddress](#customerAddress) | An array containing the customer’s shipping and billing addresses

#### Create customer address

Creates the customer's address.

##### Syntax

`mutation: createCustomerAddress`

##### Example usage

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

``` json
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

#### Update customer address

Updates the customer's address.

##### Syntax

`mutation: updateCustomerAddress`

##### Example usage

The following call updates the customer's city and postcode.

**Request**

``` text
mutation {
  updateCustomerAddress(id:3, input: {
    city: "New City"
    postcode: "5555"
  }) {
    id
  }
}
```

**Response**

``` json
{
  "data": {
    "updateCustomerAddress": {
      "id": 3
    }
  }
}
```
#### Delete customer address

Uses the customer's address `id` to delete the address.

##### Syntax

`mutation: deleteCustomerAddress`

##### Example usage

The following call deletes a customer's address.

**Request**

``` text
mutation {
  deleteCustomerAddress(id: 4)
}
```

**Response**

``` json
{
  "data": {
    "deleteCustomerAddress": true
  }
}
```

### Manage customer tokens

Use these mutations to create or revoke a customer's token.

* Generate a customer's token
* Revoke a customer's token

**Manage customer tokens attributes**

Attribute |  Data Type | Description
--- | --- | ---
`email` | String | The customer's email address
`password` | String | The customer's password

#### Generate a customer token

Creates a new customer token.

##### Syntax

`mutation: generateCustomerToken`

##### Example usage

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

``` json
{
  "data": {
    "generateCustomerToken": {
      "token": "ar4116zozoagxty1xjn4lj13kim36r6x"
    }
  }
}
```

#### Revoke a customer token

Revokes the customer's token.

##### Syntax

`mutation: remokeCustomerToken`

##### Example usage

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

* Change a customer's password

**Change customer password attributes**

Attribute |  Data Type | Description
--- | --- | ---
`currentPassword` | String | The customer's current password
`newPassword` | String | The customer's new password

##### Syntax

`mutation: changeCustomerPassword`

##### Example usage

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
    firstname
    middlename
    lastname
  }
}
```

**Response**

``` json
{
  "data": {
    "changeCustomerPassword": {
      "id": 1,
      "email": "roni_cost@example.com",
      "firstname": "Veronica",
      "lastname": "Costello"
    }
  }
}
```