---
group: graphql
title: RequisitionListItemInterface attributes and implementations
b2b_only: true
redirect_to: https://developer.adobe.com/commerce/webapi/graphql/schema/b2b/requisition-list/interfaces/item/
status: migrated
---

`RequisitionListItemInterface` provides details about items in a requisition list. It has the following implementations:

*  [`BundleRequisitionListItem`](#BundleRequisitionListItem)
*  [`ConfigurableRequisitionListItem`](#ConfigurableRequisitionListItem)
*  [`DownloadableRequisitionListItem`](#DownloadableRequisitionListItem)
*  [`GiftCardRequisitionListItem`](#GiftCardRequisitionListItem)
*  [`SimpleRequisitionListItem`](#SimpleRequisitionListItem)
*  [`VirtualRequisitionListItem`](#VirtualRequisitionListItem)

{:.bs-callout-info}
There is not an implementation for grouped products. The items within a grouped product are managed individually.

## Attributes

The `RequisitionListItemInterface` defines the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`customizable_options` | [SelectedCustomizableOption]! | Selected custom options for an item in the requisition list
`product` | [ProductInterface!]({{page.baseurl}}/graphql/interfaces/product-interface.html) | Contains details about an item added to a requisition list
`quantity` | Float! | The amount added
`uid` | ID! | The unique ID for the requisition list item

## Implementations

### BundleRequisitionListItem attributes {#BundleRequisitionListItem}

The `BundleRequisitionListItem` implementation adds the following attribute.

Attribute |  Data Type | Description
--- | --- | ---
`bundle_options`| [SelectedBundleOption]! | An array of selected options for a bundle product

### ConfigurableRequisitionListItem attributes {#ConfigurableRequisitionListItem}

The `ConfigurableRequisitionListItem` implementation adds the following attribute.

Attribute |  Data Type | Description
--- | --- | ---
`configurable_options`| [SelectedConfigurableOption] | Selected configurable options for an item in the requisition list

### DownloadableRequisitionListItem attributes {#DownloadableRequisitionListItem}

The `ConfigurableRequisitionListItem` implementation adds the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`links`| [DownloadableProductLinks] | An array of links for downloadable products in the requisition list
`samples` | [DownloadableProductSamples] | An array of links to downloadable product samples

### GiftCardRequisitionListItem attributes {#GiftCardRequisitionListItem}

The `GiftCardRequisitionListItem` implementation adds the following attribute.

Attribute |  Data Type | Description
--- | --- | ---
`gift_card_options` | GiftCardOptions! | An array that defines gift card properties

#### GiftCardOptions attributes {#GiftCardOptions}

The GiftCardOptions object provides details about a gift card. All attributes are optional for a requisition list.

Attribute |  Data Type | Description
--- | --- | ---
`amount`| Money | The amount and currency of the gift card
`custom_giftcard_amount` | Money | The custom amount and currency of the gift card
`message` | String | A message to the recipient
`recipient_email` | String | The name of the person receiving the gift card
`sender_email` | String | The email address of the person sending the gift card
`sender_name` | String | The name of the person sending the gift card

### SimpleRequisitionListItem attributes {#SimpleRequisitionListItem}

The SimpleRequisitionListItem data type does not provide additional attributes to the `RequisitionListItemInterface`.

### VirtualRequisitionListItem attributes {#VirtualRequisitionListItem}

The VirtualRequisitionListItem data type does not provide additional attributes to the `RequisitionListItemInterface`.

## Example usage

The following mutation adds a product to a requisition list and returns information about the products in the list.

**Request:**

```graphql
mutation {
  addProductsToRequisitionList(
      requisitionListUid: "Mg=="
      requisitionListItems: [
        {
            sku: "MS10"
            quantity: 1
            selected_options: ["Y29uZmlndXJhYmxlLzkzLzUw","Y29uZmlndXJhYmxlLzE2MC8xNjg"]
        }
      ]
    ) {
    requisition_list {
      uid
      items {
        items {
          ... on RequisitionListItemInterface {
            uid
            product {
              uid
              sku
              name
            }
            quantity
          }
        }
      }
      items_count
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "addProductsToRequisitionList": {
      "requisition_list": {
        "uid": "Mg==",
        "items": {
          "items": [
            {
              "uid": "Mg==",
              "product": {
                "uid": "MTA=",
                "sku": "24-WB05",
                "name": "Savvy Shoulder Tote"
              },
              "quantity": 1
            },
            {
              "uid": "Mw==",
              "product": {
                "uid": "NTk2",
                "sku": "MS10",
                "name": "Logan  HeatTec&reg; Tee"
              },
              "quantity": 1
            }
          ]
        },
        "items_count": 2
      }
    }
  }
}
```
