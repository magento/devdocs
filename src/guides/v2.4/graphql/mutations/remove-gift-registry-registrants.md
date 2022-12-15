---
group: graphql
title: removeGiftRegistryRegistrants mutation
ee_only: true
redirect_to: https://developer.adobe.com/commerce/webapi/graphql/schema/gift-registry/mutations/remove-registrants/
status: migrated
---

The `removeGiftRegistryRegistrants` mutation removes one or more registrants from the specified gift registry.

This mutation requires a valid [customer authentication token]({{page.baseurl}}/graphql/mutations/generate-customer-token.html).

## Syntax

```graphql
mutation {
  removeGiftRegistryRegistrants(
    giftRegistryUid: ID!,
    registrantsUid: [ID!]!
  ) {
    RemoveGiftRegistryRegistrantsOutput
  }
}
```

## Example usage

The following example removes a registrant from the specified gift registry.

**Request:**

```graphql
mutation{
  removeGiftRegistryRegistrants(
      giftRegistryUid: "W9YcRai9JmzGglqP3p0USodTTM3BmjjY",
      registrantsUid: "OA=="
    ){
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
    "removeGiftRegistryRegistrants": {
      "gift_registry": {
        "uid": "W9YcRai9JmzGglqP3p0USodTTM3BmjjY",
        "registrants": [
          {
            "uid": "Mg==",
            "firstname": "Stacey",
            "lastname": "Gaines",
            "email": "staceyg@example.com"
          }
        ]
      }
    }
  }
}
```

## Input attributes

The `removeGiftRegistryRegistrants` mutation requires the following input.

Attribute |  Data Type | Description
--- | --- | ---
`giftRegistryRegistrantUid` | ID! | The unique ID of a `giftRegistryRegistrant` object
`registrantsUid` | [ID!]! | An array of registrant IDs to remove

## Output attributes

The `RemoveGiftRegistryRegistrantsOutput` output object contains the following attribute.

Attribute |  Data Type | Description
--- | --- | ---
`gift_registry` | [GiftRegistry](#GiftRegistry) | The gift registry after adding registrants

### GiftRegistry attributes {#GiftRegistry}

{% include graphql/gift-registry.md %}
