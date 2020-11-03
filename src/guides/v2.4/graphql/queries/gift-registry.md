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

The following example returns information about the gift card with gift card ID : 1

**Request:**
``` graphql
query {
    giftRegistry(id: 1) {
      id
      registrants {
        first_name
        last_name
        email
      }
      shipping_address {
        country_code
        postcode
      }
    }
}
```
**Response:**
``` json
{
  "data": {
    "giftRegistry": {
      "id": 1
      "event_name": "My Wedding Event",
      "message": "My wedding message"
      "registrants": {
          "first_name": "First",
          "last_name": "Last",
          "email": "first@example.com"
        }
    }
  }
}
```

## Input attributes

The `giftRegistry`  query requires the gift card 'ID'.

Attribute |  Data Type | Description
--- | --- | ---
id| ID! | Gift Card ID

## Output attributes

The `giftRegistry` object returns the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
id | ID! | Gift Card ID
event_name | String! | Gift Card event name
type | [GiftRegistryType](#giftregistrytype) | Gift Card Registry ID
message | String! | Gift Card message
created_on | String! | Gift Card Creation date
privacy_settings | `GiftRegistryPrivacySettings!` | Gift Card Privacy settings
status | `GiftRegistryStatus!` | Gift Card status
owner_name | String! | Gift Card owner name
registrants | [GiftRegistryRegistrant](#giftregistryregistrant)| Gift Card registrants
shipping_address | CustomerAddress | Gift Card shipping address
dynamic_attributes | ` GiftRegistryDynamicAttribute`  |  Additional attributes which are specified as a code-value pair
items | [GiftRegistryItemInterface](#giftregistryiteminterface) | Gift Card items list

### GiftRegistryType attributes {#giftregistrytype}

The `GiftRegistryType` object contains the following attributes:

Attribute | Data type | Description
--- | --- | ---
id | ID! | Gift RegistryType ID
label | String! | Gift RegistryType Label
dynamic_attributes_metadata | [GiftRegistryDynamicAttributeMetadataInterface](#giftregistrydynamicattributemetadatainterface) | Additional attributes which are specified as a code-value pair

### GiftRegistryRegistrant attributes {#giftregistryregistrant}

The `GiftRegistryRegistrant` object contains the following attributes:

Attribute | Data type | Description
--- | --- | ---
id | ID! | Gift Registry Registrant ID
first_name | String! |Gift Registry Registrant First Name
last_name | String! | Gift Registry Registrant Last Name
email | String! |Gift Registry Registrant Email address
dynamic_attributes_metadata | [GiftRegistryDynamicAttributeMetadataInterface](#giftregistrydynamicattributemetadatainterface) |  Additional attributes which are specified as a code-value pair

### GiftRegistryItemInterface attributes {#giftregistryiteminterface}

The `GiftRegistryItemInterface` object contains the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
id | String! | GiftCard item ID
quantity | Float! | Quantity of the GiftCard Items
quantity_fulfilled | Float! | Fulfilled quantity of the GiftCard items
note | String | A brief message about the GiftCard item
added_on | String! | The date on which the GiftCard item was added
product | ProductInterface | The details about the product

### GiftRegistryDynamicAttributeMetadataInterface attributes {#giftregistrydynamicattributemetadatainterface}

The `GiftRegistryDynamicAttributeMetadataInterface` object contains the following attributes:

Attribute | Data type | Description
--- | --- | ---
code | String! | Gift Registry Dynamic Attribute code.
input_type | String! | Input type of the dynamic attribute.
attribute_group | String! | Attribute group of the dynamic attribute.
label | String! | GiftCard Dynamic attribute label.
is_required | Boolean! | Status of the Gift Card.
sort_order | Int | SortOrder of the GiftCard dynamic attributes.
