---
group: rest-api
title: In-Store Pickup
contributor_name: Oleksandr Kravchuk
contributor_link: https://github.com/swnsma
---

In-Store Pickup functionality expose multiple several endpoints to receive list of Pickup Locations and to notify customer that order is ready for pickup.

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

## Search for the list of Pickup Locations

Endpoint is responsible for searching Pickup Locations. It has a wide variety of request parameters making it quite flexible.

**Sample Usage:**

`GET <host>/rest/<store_code>/V1/inventory/in-store-pickup/pickup-locations`

Name | Description | Type
--- | --- | ---
`area` | For searching locations by area defined by a distance radius from the customer address | \Magento\InventoryInStorePickupApi\Api\Data\SearchRequest\AreaInterface
`area[radius]` | Search radius in KM | Int
`area[searchTerm]` | Search term string | String
`filters` | Set of Pickup Location fields filters | \Magento\InventoryInStorePickupApi\Api\Data\SearchRequest\FiltersInterface
`filters[country]` | Filter by country | \Magento\InventoryInStorePickupApi\Api\Data\SearchRequest\FilterInterface
`filters[postcode]` | Filter by postcode | \Magento\InventoryInStorePickupApi\Api\Data\SearchRequest\FilterInterface
`filters[region]` | Filter by region | \Magento\InventoryInStorePickupApi\Api\Data\SearchRequest\FilterInterface
`filters[city]` | Filter by city | \Magento\InventoryInStorePickupApi\Api\Data\SearchRequest\FilterInterface
`filters[street]` | Filter by street | \Magento\InventoryInStorePickupApi\Api\Data\SearchRequest\FilterInterface
`filters[name]` | Filter by name | \Magento\InventoryInStorePickupApi\Api\Data\SearchRequest\FilterInterface
`filters[pickupLocationCode]` | Filter by pickup location code | \Magento\InventoryInStorePickupApi\Api\Data\SearchRequest\FilterInterface
`pageSize` | Result page size | Int
`currentPage` | Current page | Int
`scopeType` | Scope type (expects `website` by default)| String
`scopeCode` | Scope code (Sales Channel Code)| String
`sort` | Sort orders for pickup locations list | \Magento\Framework\Api\SortOrder[]
`extensionAttributes[productsInfo]` | list of products that be assigned to each pickup location. Locations without all the products assigned will be filtered out | \Magento\InventoryInStorePickupApi\Api\Data\SearchRequest\ProductInfoInterface[]
`extensionAttributes[productsInfo][0][sku]` | Product SKU | String
`extensionAttributes[productsInfo][0][extensionAttributes]` | Extension point for future customizations | \Magento\InventoryInStorePickupApi\Api\Data\SearchRequest\ProductInfoExtensionInterface

**Payload:**

Payload should be placed as a part of GET request string.

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

## Mark Order as Ready for Pickup

Send an email to the customer that the order is ready to be picked up and create a shipment.

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

**Response**

Magento returns an array with success status and an array of error messages for each failed order.

```json
{
  "successful": true,
  "failed": []
}
```
