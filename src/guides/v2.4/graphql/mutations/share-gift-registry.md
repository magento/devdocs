---
group: graphql
title: shareGiftRegistry mutation
ee_only: true
contributor_name: Zilker Technology
contributor_link: https://www.ztech.io/
---
The `shareGiftRegistry` mutation allows the logged in customer to share a gift registry.

This mutation requires a valid [customer authentication token]({{page.baseurl}}/graphql/mutations/generate-customer-token.html).

## Syntax

```graphql
mutation {
  shareGiftRegistry(
    id: ID!
    sender: ShareGiftRegistrySenderInput!
    invitees: [ShareGiftRegistryInviteeInput!]!
  ) {
    ShareGiftRegistryOutput
  }
}
```

## Example usage

The following example creates a gift registry.

**Request:**

```graphql
mutation {
  shareGiftRegistry(
    id: <gift_registry_id>,
    sender: {
      name: "Sender name here",
      message: "Message here"
    },
    invitees: [
    {
      name: "Invitee 1",
      email: "invitee@mail.com"
    },
    {
      name: "Invitee 2",
      email: "invitee2@mail.com"
    },
    {
      name: "Invitee 3",
      email: "invitee3@mail.com"
    }
  ]
  ) {
    is_shared
  }
}
```

**Response:**

```json
{
  "data": {
    "shareGiftRegistry": {
     "is_shared": true
     }
  }
}
```

## Input attributes

Attribute |  Data Type | Description
--- | --- | ---
`id`| ID! | ID of the gift registry to be shared
`invitees`| [[ShareGiftRegistryInviteeInput!](#ShareGiftRegistryinviteeInput)]! | A list of people invited to participate in the event
`sender`| [ShareGiftRegistrySenderInput!](#ShareGiftRegistrySenderInput) | Information about the invitation sender

### ShareGiftRegistrySenderInput attributes {#ShareGiftRegistrySenderInput}

The `ShareGiftRegistrySenderInput` object contains the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`message` | String! | A brief message from the sender
`name`| String! | The name of the sender

### ShareGiftRegistryInviteeInput attributes {#ShareGiftRegistryinviteeInput}

The `ShareGiftRegistryInviteeInput` object contains the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`email` | String! | The email address of the invitee
`name`| String! | Name of the invitee

## Output attributes

Attribute |  Data Type | Description
--- | --- | ---
`is_shared` | Boolean! | Indicates whether the gift registry was successfully shared