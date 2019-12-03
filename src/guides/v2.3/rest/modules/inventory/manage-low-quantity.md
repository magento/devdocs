---
group: rest-api
title: Manage low-quantity notifications
---

Low stock notification alert the merchant that the salable quantity of a stock has reached a critical threshold. The Admin allows the merchant to configure low-quantity notifications from several locations:

*  The **Notify for Quantity Below** field (**Stores** > **Settings** > **Configuration** > **Catalog** > **Inventory** > **Product Stock Options**) sets the default value globally for all products for the entire website/store.
*  The Advanced Inventory **Notify for Quantity Below** field (**Catalog** > **Products** > specific product > **Advanced Inventory**) overrides the value set at the website/store level. The value applies to all of the product's sources.
*  The **Notify Quantity** fields (**Catalog** > **Products** > specific product > **Assigned Sources** section) override all other settings. The merchant can assign a different threshold for each source for the specific product.

Magento deducts either the global or the overriding quantity from the total salable quantity for the stock.

The REST low-quantity notification endpoints manage the values that merchants set from the **Notify Quantity** fields.

**Service names:**

```http
inventoryLowQuantityNotificationApiGetSourceItemConfigurationV1
inventoryLowQuantityNotificationApiSourceItemConfigurationsSaveV1
inventoryLowQuantityNotificationApiDeleteSourceItemsConfigurationV1
```

**REST endpoints:**

```http
POST /V1/inventory/low-quantity-notification
GET /V1/inventory/low-quantity-notification/:sourceCode/:sku
POST /V1/inventory/low-quantity-notifications-delete
```

**sourceItemConfigurations parameters:**

Name | Description | Type | Requirements
--- | --- | --- | ---
`source_code` | The product's assigned source code  | String | Required to create or delete a threshold
`notify_stock_qty` | The threshold at which Magento notifies the merchant that the salable quantity of a product is low. | Float | Required to create a threshold
`sku` | The SKU of the affected product   | String | Required for to create or delete a threshold

## Create a low quantity notification

The `POST /V1/inventory/low-quantity-notification` endpoint accepts an array of values that map a SKU to a source and specify when to notify the merchant of a low stock quantity.

**Sample usage:**

`POST <host>/rest/<store_code>/V1/inventory/low-quantity-notification`

**Payload:**

```json
{
  "sourceItemConfigurations": [
    {
      "source_code": "baltimore_wh",
      "notify_stock_qty": 10,
      "sku": "sp1"
    },
    {
      "source_code": "austin_wh",
      "notify_stock_qty": 8,
      "sku": "sp1"
    },
    {
      "source_code": "reno_wh",
      "notify_stock_qty": 5,
      "sku": "sp1"
    }
  ]
}
```

**Response:**

An empty array `[]`

## Return low-quantity notification information

This call returns the `notify_stock_qty` for the specified source and SKU.

**Sample Usage:**

`GET <host>/rest/<store_code>/V1/inventory/low-quantity-notification/reno_wh/sp1`

**Payload:**

None

**Response:**

```json
{
"source_code": "reno_wh",
"notify_stock_qty": 5,
"sku": "sp1
}
```

## Delete a low-quantity notification

The `POST /V1/inventory/low-quantity-notifications-delete` endpoint deletes the notification threshold for an array of sourceItem objects. Each object specified a SKU amd source.

**Sample usage:**

`POST <host>/rest/<store_code>/V1/inventory/low-quantity-notifications-delete`

**Payload:**

```json
{
  "sourceItems": [
    {
      "sku": "sp1",
      "source_code": "reno_wh"
    }
  ]
}
```

**Response:**

Magento returns an empty array.

`[]`
