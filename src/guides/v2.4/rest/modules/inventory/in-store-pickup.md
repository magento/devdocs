---
group: rest-api
title: In-Store Pickup
contributor_name: Oleksandr Kravchuk
contributor_link: https://github.com/swnsma
---

The Inventory In-Store Pickup functionality exposes an endpoint that retrieves a list of pickup locations, and another endpoint that notifies the customer that their order is ready for pickup.

**Service names:**

```http
inventoryInStorePickupApiGetPickupLocationsV1
inventoryInStorePickupSalesApiNotifyOrdersAreReadyForPickupV1
```

**REST endpoints:**

```http
GET /V1/inventory/in-store-pickup/pickup-locations
POST /V1/order/notify-orders-are-ready-for-pickup
```

## Search for pickup locations

The `GET /V1/inventory/in-store-pickup/pickup-locations` endpoint searches for and filters on pickup locations, allowing the shopper to quickly narrow the results. The endpoint does not require authentication.

Search terms, filters, and other attributes are specified as query parameters in the URL. This endpoint uses a different syntax than other Magento GET calls that send `searchCriteria` parameters. Instead, the `GET /V1/inventory/in-store-pickup/pickup-locations` endpoint requires that each query parameter begins with `searchRequest`. The `scopeCode` parameter is required. All other parameters are optional.

Name | Type | Description
--- | --- | ---
`[scopeCode]=` | String | Required. The Sales Channel code of the assigned Stock.
`[scopeType]=` | String | The Sales Channel type. The default value is `website`.
`[area][radius]=` | Int | The radius, in kilometers, to search. The Distance Priority Algorithm must be configured to search an area. This parameter must be used with `[area][searchTerm]`.
`[area][searchTerm]=` | String | The text to search, such as a city or region. This parameter must be used with `[area][radius]`.
`[filters][country][value]=` | String | Filters by the specified `country_id`.
`[filters][country][conditionType]=` | String | Optional. The default value is `eq`.
`[filters][postcode][value]=` | String | Filters by the specified `postcode`.
`[filters][postcode][conditionType]=` | String | Optional. The default value is `eq`.
`[filters][region][value]=` | String | Filters by the specified `region`.
`[filters][region][conditionType]=` | String | Optional. The default value is `eq`.
`[filters][city][value]=` | String | Filters by the specified `city`.
`[filters][city][conditionType]=` | String | Optional. The default value is `eq`.
`[filters][street][value]=` | String | Filters by the specified `street`.
`[filters][street][conditionType]=` | String | Optional. The default value is `eq`.
`[filters][name][value]=` | String | Filters by the specified display `name`.
`[filters][name][conditionType]=` | String | Optional. The default value is `eq`.
`[filters][pickupLocationCode][value]=` | String | Filters by the specified source code name.
`[filters][pickupLocationCode][conditionType]=` | String | Optional. The default value is `eq`.
`[extensionAttributes][productsInfo][0][sku]=` | String | Returns a list of products with the specified SKU that are assigned to each pickup location. Locations without all the assigned products will be filtered out.
`[extensionAttributes][productsInfo][0][extensionAttributes]=` | String | Extension point reserved for future use.
`[pageSize]=` | Int | Specifies the maximum number of items to return.
`[currentPage]=` | Int | Returns the current page.
`[sort][0][field]=` | String | Specifies the field to sort on.
`[sort][0][direction]=` | String | Specifies whether to return results in ascending (`ASC`) or descending (`DESC`) order. The default is `DESC`.

[Search using REST endpoints]({{page.baseurl}}/rest/performing-searches.html) provides a full list of supported condition types.

**Sample Usage:**

`GET <host>/rest/<store_code>/V1/inventory/in-store-pickup/pickup-locations`

**Payload:**

Define the payload as part of the `GET` request string.

```http
searchRequest[area][radius]=1500&
searchRequest[area][searchTerm]=Austin&
searchRequest[scopeCode]=base&
searchRequest[extensionAttributes][productsInfo][0][sku]=SKU1
```

**Response:**

Magento returns Pickup Locations list, search request given and total results count.

```json
{
  "items": [
    {
      "pickup_location_code": "txspeqs",
      "name": "Sport Equipment Store",
      "email": "sales@company.com",
      "contact_name": "Ethan Carter",
      "description": "Sport Equipment Store description",
      "latitude": 29.7543,
      "longitude": -95.3609,
      "country_id": "US",
      "region_id": 57,
      "region": "Texas",
      "city": "Houston",
      "street": "4631 Airport Blvd #125",
      "postcode": "77010",
      "phone": "(555) 555-5555"
    }
  ],
  "search_request": {
    "area": {
      "radius": 1500,
      "search_term": "Austin"
    },
    "current_page": 1,
    "scope_type": "website",
    "scope_code": "base",
    "extension_attributes": {
      "products_info": [
        {
          "sku": "SKU1"
        }
      ]
    }
  },
  "total_count": 1
}
```

## Mark an order as ready for pickup

The `POST /V1/order/notify-orders-are-ready-for-pickup` endpoint creates a shipment and sends an email notifying the customer that the order is ready to be picked up.
The endpoint requires appropriate permission to resource `Magento_InventoryInStorePickupApi::notify_orders_are_ready_for_pickup`.

**Sample Usage:**

`POST <host>/rest/<store_code>/V1/order/notify-orders-are-ready-for-pickup`

**Payload:**

```json
{
  "orderIds": [
    81
  ]
}
```

**Response:**

Magento returns an array with success status and an array of error messages for each failed order.

```json
{
  "successful": true,
  "failed": []
}
```
