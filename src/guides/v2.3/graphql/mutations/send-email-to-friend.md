---
group: graphql
title: sendEmailToFriend mutation
---

Use the `sendEmailToFriend` mutation to allow Magento to send a message on behalf of a customer to the specified email addresses.

{:.bs-callout-info}
The **Stores** > **Configuration** > **Catalog** > **Email to a friend** > **Enabled** field must be set to **Yes** to implement this mutation.

## Syntax

`mutation: {sendEmailToFriend(input: SendEmailToFriendInput): {SendEmailToFriendOutput}}`

## Example usage

The following example sends a message to two friends.

**Request:**

```graphql
mutation {
  sendEmailToFriend(
    input: {
      product_id: 10
      sender: {
        name: "Veronica Cost"
        email: "roni_cost@example.com"
        message: "Sarah needs this! http://luma.example.com/savvy-shoulder-tote.html"
      }
      recipients: [
        { name: "Amie Franklin", email: "afranklin@example.com" }
        { name: "Tomoko", email: "tomoko@example.com" }
      ]
    }
  ) {
    sender {
      name
      email
    }
    recipients {
      name
      email
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "sendEmailToFriend": {
      "sender": {
        "name": "Veronica Cost",
        "email": "roni_cost@example.com",
      },
      "recipients": [
        {
          "name": "Amie Franklin",
          "email": "afranklin@example.com"
        },
        {
          "name": "Tomoko",
          "email": "tomoko@example.com"
        }
      ]
    }
  }
}
```

## Input attributes

The `SendEmailToFriendInput` object contains the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`product_id` | Int! | The ID of the product that the customer is referencing
`recipients` | [SendEmailToFriendRecipientInput]! | An array containing information about each recipient
`sender` | SendEmailToFriendSenderInput! | Information about the customer and the content of the message

### SendEmailToFriendRecipientInput object {#SendEmailToFriendRecipientInput}

The `SendEmailToFriendRecipientInput` object must contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`email` | String! | The email address of the recipient
`name` | String! | The name of the recipient

### SendEmailToFriendSenderInput object {#SendEmailToFriendSenderInput}

The `SendEmailToFriendSenderInput` object must contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`email` | String! | The email address of the sender
`message` | String! | The text of the message to be sent
`name` | String! | The name of the sender

## Output attributes

The `SendEmailToFriendOutput` object contains the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`recipients` | [SendEmailToFriendRecipient] | An array containing information about each recipient
`sender` | SendEmailToFriendSender | Information about the customer and the content of the message

### SendEmailToFriendRecipient object

The `SendEmailToFriendRecipientInput` object can contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`email` | String | The email address of the recipient
`name` | String | The name of the recipient

### SendEmailToFriendSender object

The `SendEmailToFriendSender` object can contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`email` | String | The email address of the sender
`message` | String | The text of the message
`name` | String | The name of the sender
