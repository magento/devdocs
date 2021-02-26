---
group: graphql
title: updateGiftRegistryRegistrants mutation

---
The `updateGiftRegistryRegistrants` mutation .

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

The following example updates a registrant to the specified gift registry.

**Request:**

```graphql

```

**Response:**

```json

```

## Input attributes

The `updateGiftRegistryRegistrants` mutation requires the following input.

Attribute |  Data Type | Description
--- | --- | ---
`dynamic_attributes` | [[GiftRegistryDynamicAttributeInput](#GiftRegistryDynamicAttributeInput)] | An array of attributes that define elements of the gift registry. Each attribute is specified as a code-value pair
`email` | String! | The email address of the registrant
`firstname` | String! | The first name of the registrant
`lastname` | String! | The last name of the registrant

giftRegistryRegistrantUid: ID! @doc(description: "The unique ID of a `giftRegistryRegistrant` object")
firstname: String @doc(description: "The updated first name of the registrant")
lastname: String @doc(description: "The updated last name of the registrant")
email: String @doc(description: "The updated email address of the registrant")
dynamic_attributes: [GiftRegistryDynamicAttributeInput] @doc(description: "As a result of the update, only the values of provided attributes will be affected. If the attribute is missing in the request, its value will not be changed")

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
