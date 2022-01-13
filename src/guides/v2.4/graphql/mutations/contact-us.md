---
group: graphql
title: contactUs mutation
pwa_only: true
---

The `contactUs` mutation allows a Contact Us form to display on the site.

## Syntax

 `mutation: contactUs(input: ContacUsInput!): ContactUsOutput`

## Example usage

The following example adds a Contact Us form to the site.

**Request:**

```graphql
mutation {
  contactUs(
    input: {
      comment: "My comment",
      email: "bobloblaw@example.com",
      telephone: "(555)-CALL-BOB",
      name: "Bob Loblaw" }) {
    status
  }
}
```

**Response:**

```json
{
  "data": {
    "contactUs": {
      "status": true
    }
  }
}
```

## Input attributes

The `contactUs` mutation requires the  `contactUsInput` object.

### contactUsInput object {#contactUsInput}

The `contactUsInput` object must contain the following attributes:

Attribute | Data Type | Description
--- | --- | ---
`email` | String! | The email address of the shopper
`name` | String! | The full name of the shopper
`telephone` | String | The shopper's telephone number
`comment` | String! | The shopper's comment to the merchant

## Output attributes

The `contactUsOutput` object returns a Boolean value indicting the success or failure of the request.

Attribute |  Data Type | Description
--- | --- | ---
`status` | Boolean! | Indicates whether the request was successful
