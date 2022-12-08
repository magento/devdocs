---
group: graphql
title: moveCartItemsToGiftRegistry mutation
ee_only: true
contributor_name: Atwix
contributor_link: https://www.atwix.com/
redirect_to: https://developer.adobe.com/commerce/webapi/graphql/schema/gift-registry/mutations/move-cart-items/
layout: migrated
---

The `moveCartItemsToGiftRegistry` mutation moves all items from the cart to a gift registry.

This mutation requires a valid [customer authentication token]({{page.baseurl}}/graphql/mutations/generate-customer-token.html).

## Syntax

```graphql
mutation {
    moveCartItemsToGiftRegistry (
        cartUid: ID!,
        giftRegistryUid: ID!
    ) {
        MoveCartItemsToGiftRegistryOutput
    }
}
```

## Example usage

The following example moves all items from the cart to a gift registry.

**Request:**

``` graphql
mutation {
  moveCartItemsToGiftRegistry (
      cartUid:"8k0Q4MpH2IGahWrTRtqM61YV2MtLPApz",
      giftRegistryUid:"Owu5mdQ3uyfOAWzj8lFlHZW4uCDaMWC6"
  ) {
  gift_registry {
      uid
      created_at
      owner_name
      status
      type {
        label
      }
      message
      items {
        product {
          sku
          name
        }
      }
    }
    status
    user_errors {
      code
      message
      product_uid
      gift_registry_uid
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "moveCartItemsToGiftRegistry": {
      "gift_registry": {
        "uid": "Owu5mdQ3uyfOAWzj8lFlHZW4uCDaMWC6",
        "status": "ACTIVE",
        "created_at": "2021-05-06 21:19:05",
        "owner_name": "Veronica Costello",
        "type": {
          "label": "Birthday"
        },
        "message": "Birthday",
        "items": [
          {
            "product": {
              "sku": "24-UG06",
              "name": "Affirm Water Bottle "
            }
          }
        ]
      },
      "status": true,
      "user_errors": []
    }
  }
}
```

## Input attributes

The `moveCartItemsToGiftRegistry` mutation requires the following input:

Attribute |  Data Type | Description
--- | --- | ---
`cartUid` | ID! | The unique ID that identifies the customer's cart
`giftRegistryUid` | ID! | The unique ID of a `GiftRegistry` object

## Output attributes

The `MoveCartItemsToGiftRegistryOutput` object can contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`gift_registry` | [GiftRegistry!](#GiftRegistry) | The gift registry containing the moved items
`status` | Boolean! | Indicates whether the attempt to move the cart items to the gift registry was successful
`user_errors` | [[GiftRegistryItemsUserError!](#GiftRegistryItemsUserError)] | An array of errors encountered while moving items from the cart to the gift registry

### GiftRegistry attributes {#GiftRegistry}

{% include graphql/gift-registry.md %}

### GiftRegistryItemsUserError attributes {#GiftRegistryItemsUserError}

{% include graphql/gift-registry-items-user-error.md %}
