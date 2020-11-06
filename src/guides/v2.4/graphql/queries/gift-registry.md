---
group: graphql
title: giftRegistry query
ee_only: true   
contributor_name: Zilker Technology
contributor_link: https://www.ztech.io/
---

The `giftRegistry` query retrieves the gift registry details by ID.

## Syntax

```graphql
giftRegistry(id: ID!): GiftRegistry
```

## Example usage

The following example returns information about the gift registry with the ID of 1.

**Request:**

```graphql
query {
    giftRegistry(id: 1) {
      id
      event_name
      message
      privacy_settings
      status
      owner_name
      registrants {
        first_name
        last_name
        email
      }
      shipping_address {
        address_id
      }
      type {
        id
        label
        dynamic_attributes_metadata {
            code
            label
        }
    }
}
```

**Response:**

```json
{
  "data": {
    "giftRegistry": {
      "id": 1,
      "event_name": "My Wedding Event",
      "message": "My wedding message",
      "privacy_settings": PRIVATE,
      "status": ACTIVE,
      "owner_name": "Last First",
      "registrants": {
          "first_name": "First",
          "last_name": "Last",
          "email": "first@example.com"
      }
      "shipping_address": {
          "address_id": 1
      }
      "type": {
          "id": 1,
          "label": "Wedding Gift Card",
          "dynamic_attributes_metadata": {
              "code": "role",
              "label": "coupon"
          }
    }
    }
  }
}
```

## Input attributes

The `giftRegistry` query requires the gift registry ID.

Attribute |  Data Type | Description
--- | --- | ---
`id` | ID! | The ID assigned to the gift registry

## Output attributes

{% include graphql/gift-registry.md %}
