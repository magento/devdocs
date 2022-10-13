---
group: graphql
title: removeGiftRegistry mutation
ee_only: true
---
The `removeGiftRegistry` mutation deletes the specified registry from the customers list of gift registries.

This mutation requires a valid [customer authentication token]({{page.baseurl}}/graphql/mutations/generate-customer-token.html).

## Syntax

```graphql
removeGiftRegistry ( giftRegistryUid ID! ) RemoveGiftRegistryOutput
```

## Example usage

The following example deletes the specified gift registry.

**Request:**

```graphql
mutation{
  removeGiftRegistry(giftRegistryUid: "lobehNsInxfDeTt290DO5vH6DVltN74S"){
    success
  }
}
```

**Response:**

```json
{
  "data": {
    "removeGiftRegistry": {
      "success": true
    }
  }
}
```

## Input attributes

The `removeGiftRegistry` mutation requires the following input.

Attribute |  Data Type | Description
--- | --- | ---
`giftRegistryUid` | ID! | The unique ID of the gift registry to update

## Output attributes

The `RemoveGiftRegistryOutput` output object contains the following attribute:

Attribute |  Data Type | Description
--- | --- | ---
`success` | Boolean! | Indicates whether the gift registry was successfully deleted
