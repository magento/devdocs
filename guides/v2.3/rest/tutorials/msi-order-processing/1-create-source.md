---
layout: tutorial
group: rest
title: Step 1. Create a source
menu_title: Step 1. Create a source
menu_order: 10
level3_subgroup: msi-tutorial
return_to:
  title: REST Tutorials
  url: rest/tutorials/index.html
version: 2.3
github_link: rest/tutorials/msi-order-processing/1-create-source.md
functional_areas:
  - Integration
---

**Sources** are the physical locations where product inventory is managed and shipped for order fulfillment, or where services are available. These locations can include warehouses, brick-and-mortar stores, distribution centers, and drop shippers. MSI leverages the quantities and salable quantities per stock and manages inventory amounts automatically for managed products and orders.

**Endpoint**

`POST http://<host>/rest/all/V1/inventory/sources`

**Scope**

`all` store views

**Headers**

Content-Type application/json

Authorization: Bearer <admin_token>

**Payload**

The `name`, `source_code`, `country_id`, and `postcode` attributes are required.


``` json
{
   "source" : {
      "name" : "London Warehouse",
      "source_code" : "uk_warehouse",
      "postcode" : "WC2N 5DU",
      "enabled" : true,
      "contact_name" : "Ethan Carter",
      "country_id" : "GB",
      "city" : "London"
   }
}
```

**Response**
Magento returns an empty array.

`[]`

## Add more sources

Use the same endpoint to add several other sources.

### London Flagship Store

``` json
{
   "source" : {
      "name" : "London Flagship Store",
      "source_code" : "uk_store",
      "postcode" : "SW1A 1AB",
      "enabled" : true,
      "contact_name" : "Ralf Schneider",
      "country_id" : "GB",
      "city" : "London"
   }
}
```

### Berlin Warehouse

``` json
{
   "source" : {
      "name" : "Berlin Warehouse",
      "source_code" : "de_warehouse",
      "postcode" : "10115",
      "enabled" : true,
      "contact_name" : "Ralf Schneider",
      "country_id" : "DE",
      "city" : "Berlin"
   }
}
```

### US warehouse

``` json
{
   "source" : {
      "name" : "New York Warehouse",
      "source_code" : "us_warehouse",
      "postcode" : "11368",
      "enabled" : true,
      "contact_name" : "Fred Wilson",
      "country_id" : "US",
      "city" : "New York"
   }
}
```

## Verify this step

In Admin, click **Stores** > **Manage Sources**.  The new sources are displayed in the Sources grid.
