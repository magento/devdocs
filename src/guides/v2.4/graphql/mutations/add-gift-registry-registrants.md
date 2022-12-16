---
group: graphql
title: addGiftRegistryRegistrants mutation
ee_only: true
redirect_to: https://developer.adobe.com/commerce/webapi/graphql/schema/gift-registry/mutations/add-registrants/
status: migrated
---

The `addGiftRegistryRegistrants` mutation adds a registrant to the specified gift registry.

This mutation requires a valid [customer authentication token]({{page.baseurl}}/graphql/mutations/generate-customer-token.html).

## Syntax

```graphql
mutation {
  addGiftRegistryRegistrants(
    giftRegistryUid: ID!,
    registrants: [AddGiftRegistryRegistrantInput!]!
  ) {
    AddGiftRegistryRegistrantsOutput
  }
}
```

## Example usage

The following example adds a registrant to the specified gift registry.

**Request:**

```graphql
mutation {
  addGiftRegistryRegistrants (
    giftRegistryUid: "W9YcRai9JmzGglqP3p0USodTTM3BmjjY",
    registrants: {
        firstname: "Monica"
        lastname: "Resendez"
        email: "monica@example.com"
    }
  ){
    gift_registry {
      uid
      event_name
      registrants {
        uid
        firstname
        lastname
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "addGiftRegistryRegistrants": {
      "gift_registry": {
        "uid": "W9YcRai9JmzGglqP3p0USodTTM3BmjjY",
        "event_name": "Theo's 45th Birthday",
        "registrants": [
          {
            "uid": "Mg==",
            "firstname": "Stacey",
            "lastname": "Gaines"
          },
          {
            "uid": "OA==",
            "firstname": "Monica",
            "lastname": "Resendez"
          }
        ]
      }
    }
  }
}
```

## Input attributes

The `addGiftRegistryRegistrants` mutation requires the following input.

Attribute |  Data Type | Description
--- | --- | ---
`dynamic_attributes` | [[GiftRegistryDynamicAttributeInput](#GiftRegistryDynamicAttributeInput)] | An array of attributes that define elements of the gift registry. Each attribute is specified as a code-value pair
`email` | String! | The email address of the registrant
`firstname` | String! | The first name of the registrant
`lastname` | String! | The last name of the registrant

### GiftRegistryDynamicAttributeInput attributes {#GiftRegistryDynamicAttributeInput}

The `GiftRegistryDynamicAttributeInput` object contains the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`code` | ID! | A unique key for an additional attribute of the event
`value` | String! | A corresponding value for the code

## Output attributes

The `AddGiftRegistryRegistrantsOutput` output object contains the following attribute.

Attribute |  Data Type | Description
--- | --- | ---
`gift_registry` | [GiftRegistry](#GiftRegistry) | The gift registry after adding registrants

### GiftRegistry attributes {#GiftRegistry}

{% include graphql/gift-registry.md %}
