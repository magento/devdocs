---
group: graphql
title: createGiftRegistry mutation
ee_only: true
contributor_name: Zilker Technology
contributor_link: https://www.ztech.io/
---
The `createGiftRegistry` mutation creates a gift registry for the logged in customer.

This mutation requires a valid [customer authentication token]({{page.baseurl}}/graphql/mutations/generate-customer-token.html).

The `id` input attribute is optional. If a value is not specified, Magento will create one. If you specify a value, then you can create a gift registry and make multiple updates in a single call.

When assigning a shipping address, you must specify only one of `address_data` or `address_id`.

Only the gift registry owner can view these attributes

*  `created_on`
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
            event_name: "My Wedding Event",
            message: "My wedding message"
            privacy_settings: PRIVATE
            status: ACTIVE
            type_id: "3"
            shipping_address: {
                address_id: 1
            }
            registrants: [
                {
                    first_name: "First"
                    last_name: "Last"
                    email: "first@mail.com"
                    dynamic_attributes: [
                        {
                            code: "role"
                            value: "bride"
                        }
                    ]
                },
                {
                    first_name: "Second"
                    last_name: "Last 2"
                    email: "second@mail.com"
                    dynamic_attributes: [
                        {
                            code: "role"
                            value: "partner"
                        }
                    ]
                }
            ]
            dynamic_attributes: [
                {
                    code: "number_of_guests"
                    value: "101"
                },
                {
                    code: "event_date"
                    value: "2022-12-12"
                },
                {
                    code: "event_country"
                    value: "MD"
                },
                {
                    code: "event_location"
                    value: "Unknown"
                }
            ]
        }
    ) {
        gift_registry {
            event_name
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
              "id": 1,
              "event_name": "My Wedding Event",
              "type": {
                  "id": 3,
                  "label": "bridal_registry",
                  "dynamic_attributes_metadata": [
                       {
                        "code": 1,
                        "input_type": "sample_input_type",
                        "attribute_group": "att_group",
                        "label": "metadata of dynamic attributes",
                        "is_required": true,
                        "sort_order": 0
                       } ]
                  },
              "message": "My wedding message",
              "created_on": "22 September 2020",
              "privacy_settings": "PRIVATE",
              "status": "ACTIVE",
              "owner_name": "Owner",
              "registrants": [
                  {
                      "id": 1,
                      "first_name": "First",
                      "last_name": "Last",
                      "email": "first@mail.com",
                      "dynamic_attributes": [
                          {
                              "code": "role",
                              "value": "bride"
                          }
                      ]
                  },
                  {
                      "first_name": "Second",
                      "last_name": "Last 2",
                      "email": "second@mail.com",
                      "dynamic_attributes": [
                          {
                              "code": "role",
                              "value": "partner"
                          }
                      ]
                  }
              ],
              "shipping_address": {
                   "address_id": 1
              },
              "dynamic_attributes": [
                  {
                      "code": "number_of_guests",
                      "value": "101"
                  }, {
                      "code": "event_date",
                      "value": "2022-12-12"
                  }, {
                      "code": "event_country",
                      "value": "MD"
                }, {
                      "code": "event_location",
                      "value": "Unknown"
                }
              ],
              "items": [
                 {
                   "id": "P1",
                   "quantity": 2,
                   "quantity_fulfilled": 2,
                   "added_on": "22 September 2020"
                 },
                 {
                   "id": "P2",
                   "quantity": 4,
                   "quantity_fulfilled": 2,
                   "added_on": "22 September 2020"
                 }
              ]
              }
        }
     }
  }
```

## Input attributes

The `CreateGiftRegistryInput` input object defines the gift registry.

### CreateGiftRegistryInput attributes

The `CreateGiftRegistryInput` object contains the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`dynamic_attributes` | [[GiftRegistryDynamicAttributeInput](#GiftRegistryDynamicAttributeInput)] | An array of attributes that define elements of the gift registry. Each attribute is specified as a code-value pair
`event_name` | String! | The name of the event
`id`| ID |  An optional gift registry ID. It can be generated on the client and then be used to send multiple gift-registry related mutations in a single request
`message` | String! | A message describing the event
`privacy_settings` | GiftRegistryPrivacySettings! | Indicates whether the registry is PRIVATE or PUBLIC
`registrants` | [[AddGiftRegistryRegistrantInput!](#AddGiftRegistryRegistrantInput)]! | The list of people who receive notifications about the registry
`shipping_address` | [GiftRegistryShippingAddressInput](#GiftRegistryShippingAddressInput) | The address for shipping the gift registry. Specify either the `address_data` object or the `address_id` attribute. Validation fails if both are provided
`status` | GiftRegistryStatus! | An enum that states whether the gift registry is ACTIVE or INACTIVE. Only the registry owner can access this attribute
`type_id` | String! | The type of the event

### AddGiftRegistryRegistrantInput attributes {#AddGiftRegistryRegistrantInput}

The `AddGiftRegistryRegistrantInput` object contains the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`dynamic_attributes` | [[GiftRegistryDynamicAttributeInput](#GiftRegistryDynamicAttributeInput)] | An array of attributes that define elements of the gift registry. Each attribute is specified as a code-value pair
`email` | String! | The email address of the registrant
`first_name` | String! | The first name of the registrant
`last_name` | String! | The last name of the registrant

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
`address_data` | [CustomerAddressInput](#CustomerAddressInput) | The complete details of the shipping address
`address_id` | Int | The ID of predefined customer address

### CustomerAddressInput attributes {#CustomerAddressInput}

{% include graphql/customer-address-input.md %}

## Output attributes

The `CreateGiftRegistryOutput` output object contains the following attribute:

Attribute |  Data Type | Description
--- | --- | ---
`gift_registry` | [GiftRegistry](#GiftRegistry) | Contains the created gift registry

### GiftRegistry attributes {#GiftRegistry}

{% include graphql/gift-registry.md %}
