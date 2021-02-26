---
group: graphql
title: removeGiftRegistryRegistrants mutation

---
The `removeGiftRegistryRegistrants` mutation .

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

```

**Response:**

```json

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
