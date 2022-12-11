---
group: graphql
title: giftRegistry query
ee_only: true   
contributor_name: EY
redirect_to: https://developer.adobe.com/commerce/webapi/graphql/schema/gift-registry/queries/gift-registry/
layout: migrated
---

The `giftRegistry` query retrieves details about the specified gift registry. Use the [`customer` query]({{page.baseurl}}/graphql/queries/customer.html) to return a list of valid `uid` values.

This query requires a valid [customer authentication token]({{page.baseurl}}/graphql/mutations/generate-customer-token.html).

## Syntax

```graphql
giftRegistry(uid: ID!): GiftRegistry
```

## Example usage

The following example returns information about the gift registry with the ID of 1.

**Request:**

```graphql
query{
  giftRegistry(giftRegistryUid: "W9YcRai9JmzGglqP3p0USodTTM3BmjjY"){
    uid
    type {
      uid
      label
    }
    event_name
    owner_name
    status
    privacy_settings
    registrants {
     uid
      firstname
      lastname
    }
    shipping_address {
      street
      city
      region {
        region
      }
      postcode
      country_code
    }
    dynamic_attributes {
      code
      group
      label
      value
    }
    event_name
    items {
      uid
      quantity
      quantity_fulfilled
      product {
        uid
        name
        sku
      }
    }
    message
  }
}
```

**Response:**

```json
{
  "data": {
    "giftRegistry": {
      "uid": "W9YcRai9JmzGglqP3p0USodTTM3BmjjY",
      "type": {
        "uid": "MQ==",
        "label": "Birthday"
      },
      "event_name": "Theo's 45th Birthday",
      "owner_name": "Veronica Costello",
      "status": "ACTIVE",
      "privacy_settings": "PUBLIC",
      "registrants": [
        {
          "uid": "Mg==",
          "firstname": "Stacey",
          "lastname": "Gaines"
        }
      ],
      "shipping_address": {
        "street": [
          "6146 Honey Bluff Parkway"
        ],
        "city": "Calder",
        "region": {
          "region": "Michigan"
        },
        "postcode": "49628-7978",
        "country_code": "US"
      },
      "dynamic_attributes": [
        {
          "code": "event_country",
          "group": "EVENT_INFORMATION",
          "label": "Country",
          "value": "US"
        },
        {
          "code": "event_date",
          "group": "EVENT_INFORMATION",
          "label": "Event Date",
          "value": "2021-01-28"
        }
      ],
      "items": [
        {
          "uid": "MQ==",
          "quantity": 1,
          "quantity_fulfilled": 0,
          "product": {
            "uid": "Nw==",
            "name": "Impulse Duffle",
            "sku": "24-UB02"
          }
        },
        {
          "uid": "Mg==",
          "quantity": 1,
          "quantity_fulfilled": 0,
          "product": {
            "uid": "Mg==",
            "name": "Strive Shoulder Pack",
            "sku": "24-MB04"
          }
        },
        {
          "uid": "Mw==",
          "quantity": 1,
          "quantity_fulfilled": 0,
          "product": {
            "uid": "Nzg0",
            "name": "Supernova Sport Pant",
            "sku": "MP04"
          }
        },
        {
          "uid": "NA==",
          "quantity": 1,
          "quantity_fulfilled": 0,
          "product": {
            "uid": "OTcx",
            "name": "Rapha  Sports Short",
            "sku": "MSH07"
          }
        },
        {
          "uid": "NQ==",
          "quantity": 1,
          "quantity_fulfilled": 0,
          "product": {
            "uid": "OTQ1",
            "name": "Hawkeye Yoga Short",
            "sku": "MSH05"
          }
        },
        {
          "uid": "Ng==",
          "quantity": 1,
          "quantity_fulfilled": 0,
          "product": {
            "uid": "NDk=",
            "name": "Yoga Adventure",
            "sku": "240-LV06"
          }
        },
        {
          "uid": "Nw==",
          "quantity": 1,
          "quantity_fulfilled": 0,
          "product": {
            "uid": "MTk=",
            "name": "Go-Get'r Pushup Grips",
            "sku": "24-UG05"
          }
        }
      ],
      "message": "Theo's 45th Birthday"
    }
  }
}
```

## Input attributes

The `giftRegistry` query requires the gift registry ID.

Attribute |  Data Type | Description
--- | --- | ---
`uid` | ID! | The unique ID assigned to the gift registry

## Output attributes

{% include graphql/gift-registry.md %}
