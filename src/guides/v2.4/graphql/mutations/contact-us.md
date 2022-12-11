---
group: graphql
title: contactUs mutation
pwa_only: true
redirect_to: https://developer.adobe.com/commerce/webapi/graphql/schema/store/mutations/contact-us/
layout: migrated
---

The `contactUs` mutation submits the contents of the Contact Us form.

## Syntax

 `mutation: contactUs(input: ContactUsInput!): ContactUsOutput`

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
      name: "Bob Loblaw" }
      ) {
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
