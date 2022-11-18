---
group: graphql
title: updateGiftRegistryRegistrants mutation
ee_only: true
migrated_to: https://developer.adobe.com/commerce/webapi/graphql/schema/gift-registry/mutations/update-registrants/
layout: migrated
---

The `updateGiftRegistryRegistrants` mutation updates properties of one or more registrants of the specified gify registry.

This mutation requires a valid [customer authentication token]({{page.baseurl}}/graphql/mutations/generate-customer-token.html).

## Syntax

```graphql
mutation {
  updateGiftRegistryRegistrants(
    giftRegistryUid: ID!,
    registrants: [UpdateGiftRegistryRegistrantInput!]!
  ) {
    UpdateGiftRegistryRegistrantsOutput
  }
}
```

## Example usage

The following example updates a registrant's e-mail address.

**Request:**

```graphql
mutation{
  updateGiftRegistryRegistrants(
      giftRegistryUid: "W9YcRai9JmzGglqP3p0USodTTM3BmjjY",
      registrants: {
          giftRegistryRegistrantUid: "OA=="
          email: "new-email@example.com"
        }
    )
    {
    gift_registry {
      uid
      registrants {
        uid
        firstname
        lastname
        email
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "updateGiftRegistryRegistrants": {
      "gift_registry": {
        "uid": "W9YcRai9JmzGglqP3p0USodTTM3BmjjY",
        "registrants": [
          {
            "uid": "Mg==",
            "firstname": "Stacey",
            "lastname": "Gaines",
            "email": "staceyg@example.com"
          },
          {
            "uid": "OA==",
            "firstname": "Monica",
            "lastname": "Resendez",
            "email": "new-email@example.com"
          }
        ]
      }
    }
  }
}
```

## Input attributes

The `updateGiftRegistryRegistrants` mutation requires the following input.

Attribute |  Data Type | Description
--- | --- | ---
`giftRegistryRegistrantUid` | ID! | The unique ID of a `giftRegistryRegistrant` object
`registrants` | [UpdateGiftRegistryRegistrantInput!]! | An array of registrants to update

### UpdateGiftRegistryRegistrantInput attributes

The `UpdateGiftRegistryRegistrantInput` object can contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`dynamic_attributes` | [[GiftRegistryDynamicAttributeInput](#GiftRegistryDynamicAttributeInput)] | As a result of the update, only the values of provided attributes will be affected. If the attribute is missing in the request, its value will not be changed
`email` | String | The updated email address of the registrant
`firstname` | String | The updated first name of the registrant
`giftRegistryRegistrantUid` | ID! | The unique ID of a `giftRegistryRegistrant` object
`lastname` | String | The updated last name of the registrant

### GiftRegistryDynamicAttributeInput attributes {#GiftRegistryDynamicAttributeInput}

The `GiftRegistryDynamicAttributeInput` object can contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`code` | ID! | A unique key for an additional attribute of the event
`value` | String! | A corresponding value for the code

## Output attributes

The `UpdateGiftRegistryRegistrantsOutput` output object contains the following attribute.

Attribute |  Data Type | Description
--- | --- | ---
`gift_registry` | [GiftRegistry](#GiftRegistry) | The gift registry after updating registrants

### GiftRegistry attributes {#GiftRegistry}

{% include graphql/gift-registry.md %}
