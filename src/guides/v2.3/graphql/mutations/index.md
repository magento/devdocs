---
group: graphql
title: Using mutations
redirect_from:
  - /guides/v2.3/graphql/mutations.html
---

While GraphQL queries perform read operations, mutations change the data. A mutation can create, update, or delete objects and fields. In REST terminology, queries operate like `GET` requests, while mutations are similar to `POST`, `PUT`, and `DELETE`.

## Structure of a mutation

A mutation contains the following elements:

*  The keyword `mutation`
*  An operation name for your local implementation. This name is required if you include variables. Otherwise, it is optional.
*  The mutation name
*  The input object or attributes. Most mutations require an input object that contains data or individual attributes for the Magento server to process. However, some mutations, such as `createEmptyCart`, do not require an input object. In this particular case, the authorization token passed with the request provides the needed context.
*  The output object, which specifies which data the mutation returns.

The following example shows the structure of the `createCustomer` mutation:

```graphql
mutation myCreateCustomer {
  createCustomer(
    input: CustomerInput!
  ) {
    CustomerOutput
  }
}
```

In this example, `myCreateCustomer` identifies your implementation.  `CustomerInput` is a non-nullable object that defines a customer. (The exclamation point indicates the value is non-nullable.) The `CustomerOutput` object defines which fields to return.

Now let's take a look at a fully-defined mutation. This time, we'll specify the minimum fields needed as input to create a customer (`firstname`, `lastname`, `email`, and `password`). We could include the same fields in the output, but GraphQL allows you to return only the data you need, which is the customer `email`.

```graphql
mutation myCreateCustomerNoVariables {
  createCustomer(
    input: {
      firstname: "Melanie"
      lastname: "Shaw"
      email: "mshaw@example.com"
      password: "Password1"
    }
  ) {
    customer {
      email
    }
  }
}
```

The mutation returns the customer email:

```json
{
  "data": {
    "createCustomer": {
      "customer": {
        "email" : "mshaw@example.com"
      }
    }
  }
}
```

## Mutation input

A mutation can require either an object as input (as shown above) or one or more scalar values. When specifying an object, you must include the `input: {}` keyword. When the mutation requires scalar values, specify the field name and value, as shown below:

```graphql
mutation myGenerateCustomerToken {
  generateCustomerToken(
    email: "mshaw@example.com"
    password: "Password1"
  ) {
    token
  }
}
```

## Mutation variables

Specifying variables in a mutation can help increase code re-use. Consider the following requirements when generating a mutation that contains one or more variables:

*  All variables must be declared up-front, immediately after the operation name.
*  Variables are typed: they can be scalar or an object.
*  You must use all declared variables. Object variables are defined in JSON.

The following example declares the `$CustomerInput` variable. It is referenced in the `input` statement.

```graphql
mutation myCreateCustomerWithVariables($CustomerInput: CustomerInput!) {
  createCustomer(
    input: $CustomerInput
  ) {
    customer {
      email
    }
  }
}
```

The `$CustomerInput` variable is defined as a JSON object:

```json
{
  "CustomerInput": {
    "firstname": "Melanie",
    "lastname": "Shaw",
    "email": "mshaw@example.com",
    "password": "Password1"
  }
}
```

This example updates the customer's email using two scalar variables (`$email`, `$password`).

```graphql
mutation myUpdateCustomer($email: String!, $password: String!) {
  updateCustomer(
    input: {
      email: $email
      password: $password
    }
  ) {
    customer {
      email
    }
  }
}
```

The variables are defined separately.

```json
{
  "email": "melanie.shaw@example.com",
  "password": "Password1"
}
```
