---
group: graphql
title: createGiftRegistry mutation
ee_only: true
contributor_name: EY
redirect_to: https://developer.adobe.com/commerce/webapi/graphql/schema/gift-registry/mutations/create/
layout: migrated
---
The `createGiftRegistry` mutation creates a gift registry for the logged in customer.

This mutation requires a valid [customer authentication token]({{page.baseurl}}/graphql/mutations/generate-customer-token.html).

The `id` input attribute is optional. If a value is not specified, Magento will create one. If you specify a value, then you can create a gift registry and make multiple updates in a single call.

When assigning a shipping address, you must specify only one of `address_data` or `address_id`.

Only the gift registry owner can view the following output attributes:

*  `created_at`
*  `privacy_settings`
*  `shipping_address`
*  `status`

## Syntax

```graphql
mutation {
  createGiftRegistry(
    giftRegistry: CreateGiftRegistryInput!
  ) {
    CreateGiftRegistryOutput
  }
}
```

## Example usage

The following example creates a gift registry.

**Request:**

```graphql
mutation {
  createGiftRegistry(
    giftRegistry: {
      gift_registry_type_uid: "Mw=="
      event_name: "Bill and Julie's wedding"
      message: "Help us celebrate Bill and Julie's wedding, which will be held on May 1, 2021"
      privacy_settings: PRIVATE
      status: ACTIVE
      shipping_address: {
        address_id: 1
      }
      registrants: [
        {
          firstname: "Julie"
          lastname: "Rao"
          email: "julierao@example.com"
          dynamic_attributes: [{
            code: "role"
            value: "Bride" }]
        }
        {
          firstname: "Bill"
          lastname: "Preston"
          email: "bpreston@example.com"
          dynamic_attributes: [{
            code: "role"
            value: "Groom" }]
        }
      ]
      dynamic_attributes: [
        {
          code: "number_of_guests"
          value: "101"
        }
        {
          code: "event_date"
          value: "2021-05-01"
        }
        {
          code: "event_country"
          value: "US"
        }
        {
          code: "event_location"
          value: "Ann Arbor, MI"
        }
      ]
    }
  ) {
    gift_registry {
      uid
      event_name
      message
      owner_name
      privacy_settings
      status
      registrants {
        uid
        firstname
        lastname
        email
        dynamic_attributes {
          code
          label
          value
        }
      }
      type {
        uid
        label
      }
      items {
        uid
        product {
          uid
          sku
          name
        }
        quantity
        quantity_fulfilled
      }
      shipping_address {
        firstname
        lastname
        street
        region {
          region
        }
        postcode
        country_code
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "createGiftRegistry": {
      "gift_registry": {
        "uid": "iSJHFdAtF8YBM5ALgNyNIgQmnbOW9t69",
        "event_name": "Bill and Julie's wedding",
        "message": "Help us celebrate Bill and Julie's wedding, which will be held on May 1, 2021",
        "owner_name": "Veronica Costello",
        "privacy_settings": "PRIVATE",
        "status": "ACTIVE",
        "registrants": [
          {
            "uid": "OQ==",
            "firstname": "Julie",
            "lastname": "Rao",
            "email": "julierao@example.com",
            "dynamic_attributes": [
              {
                "code": "role",
                "label": "Role",
                "value": "Bride"
              }
            ]
          },
          {
            "uid": "MTA=",
            "firstname": "Bill",
            "lastname": "Preston",
            "email": "bpreston@example.com",
            "dynamic_attributes": [
              {
                "code": "role",
                "label": "Role",
                "value": "Groom"
              }
            ]
          }
        ],
        "type": {
          "uid": "Mw==",
          "label": "Wedding"
        },
        "items": [],
        "shipping_address": {
          "firstname": "Veronica",
          "lastname": "Costello",
          "street": [
            "6146 Honey Bluff Parkway"
          ],
          "region": {
            "region": "Michigan"
          },
          "postcode": "49628-7978",
          "country_code": "US"
        }
      }
    }
  }
}
```

## Input attributes

The `CreateGiftRegistryInput` input object defines the gift registry.

Attribute |  Data Type | Description
--- | --- | ---
`dynamic_attributes` | [[GiftRegistryDynamicAttributeInput](#GiftRegistryDynamicAttributeInput)] | An array of attributes that define elements of the gift registry. Each attribute is specified as a code-value pair
`event_name` | String! | The name of the event
`gift_registry_type_uid` | ID! | The ID of the selected event type
`message` | String! | A message describing the event
`privacy_settings` | GiftRegistryPrivacySettings! | Indicates whether the registry is PRIVATE or PUBLIC
`registrants` | [[AddGiftRegistryRegistrantInput!](#AddGiftRegistryRegistrantInput)]! | The list of people who receive notifications about the registry
`shipping_address` | [GiftRegistryShippingAddressInput](#GiftRegistryShippingAddressInput) | The address for shipping the gift registry. Specify either the `address_data` object or the `address_id` attribute. Validation fails if both are provided
`status` | GiftRegistryStatus! | An enum that states whether the gift registry is ACTIVE or INACTIVE. Only the registry owner can access this attribute

### AddGiftRegistryRegistrantInput attributes {#AddGiftRegistryRegistrantInput}

The `AddGiftRegistryRegistrantInput` object contains the following attributes:

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

### GiftRegistryShippingAddressInput attributes {#GiftRegistryShippingAddressInput}

The `GiftRegistryShippingAddressInput` object contains the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`address_data` | CustomerAddressInput | The complete details of the shipping address
`address_id` | ID | The ID of predefined customer address

{% include graphql/customer-address-input.md %}

## Output attributes

The `CreateGiftRegistryOutput` output object contains the following attribute:

Attribute |  Data Type | Description
--- | --- | ---
`gift_registry` | [GiftRegistry](#GiftRegistry) | Contains the created gift registry

### GiftRegistry attributes {#GiftRegistry}

{% include graphql/gift-registry.md %}
