---
layout: tutorial
group: rest-api
title: Step 2. Create sources
subtitle: Order processing with Inventory Management
menu_title: Step 2. Create sources
menu_order: 20
level3_subgroup: msi-tutorial
return_to:
  title: REST Tutorials
  url: rest/tutorials/index.html
functional_areas:
  - Integration
---

**Sources** are the physical locations from which you manage product inventory and ship orders. These locations can include warehouses, brick-and-mortar stores, distribution centers, and drop shippers. Magento leverages the quantities and salable quantities per stock and manages inventory amounts automatically for managed products and orders. Virtual and downloadable products can also be assigned to a source.

You cannot delete or disable the default source. You can create, modify, enable, and disable custom sources, but you cannot delete them.

This step guides you through the process of creating sources for your inventory, including warehouses for the physical products and another source for virtual and downloadable products.

For more information about sources, see [Inventory Management overview]({{ page.baseurl }}/inventory/index.html).

{:.bs-callout-info}
This step requires an admin token. See [Generate the admin token]({{ page.baseurl }}/rest/tutorials/prerequisite-tasks/create-admin-token.html) for more information.

## Create the first source

The `POST V1/inventory/sources` endpoint creates the Baltimore Warehouse (`baltimore_wh`) source. The `name`, `source_code`, `country_id`, and `postcode` attributes are required. The  `latitude`, `longitude`, and other address-related attributes enable the Distance Priority Source Selection Algorithm (SSA) to calculate the distance between the source and the shipping address. The value assigned to `source_code` cannot be changed.

The `source_code` values will be used in subsequent steps.

**Endpoint:**

`POST <host>/rest/default/V1/inventory/sources`

**Scope:**

`default` store view

**Headers:**

`Content-Type`: `application/json`

`Authorization`: `Bearer <admin_token>`

**Payload:**

```json
{
   "source" : {
      "name" : "Northeast Warehouse",
      "source_code" : "ne_wh",
      "postcode" : "07306",
      "enabled" : true,
      "contact_name" : "Ethan Carter",
      "country_id" : "US",
      "street": "645 Newark Ave.",
      "city" : "Jersey City",
      "region_id": 41,
      "latitude": 40.733790,
      "longitude": -74.058720
      }
}
```

**Response:**

Magento returns an empty array.

`[]`

## Add more sources

Use the same endpoint to create a source for the Leipzig warehouse. We will designate the Brooklyn, Huntington, Manhattan, Berlin, and Frankfurt stores as in-store pick up locations. We will also create the HQ source for virtual and downloadable products.

### Leipzig warehouse

Use the following payload to create the Leipzig warehouse:

```json
{
   "source" : {
      "name" : "Leipzig Warehouse",
      "source_code" : "de_wh",
      "postcode" : "04109",
      "enabled" : true,
      "contact_name" : "Claudia Mabuse",
      "country_id" : "DE",
      "street": "Willy-Brandt-Platz 5",
      "city" : "Leipzig",
      "region_id": 41,
      "latitude": 51.344410,
      "longitude": 12.380790
      }
}
```

### Brooklyn store

Use the following payload to create the Brooklyn store.

```json
{
   "source" : {
      "name" : "Brooklyn Store",
      "source_code" : "brooklyn",
      "postcode" : "11211",
      "enabled" : true,
      "contact_name" : "Tai Hozie",
      "country_id" : "US",
      "street": "263 S 4th St",
      "city" : "Brooklyn",
      "region_id": 43,
      "latitude": 40.710070,
      "longitude": -73.957160,
      "phone": "555 737-8088",
      "extension_attributes": {
        "is_pickup_location_active": true,
        "frontend_name": "Brooklyn (Williamsburg) Store",
        "frontend_description": "Williamsburg, Brooklyn"
    }
  }
}
```
### Long Island store

Use the following payload to create the Long Island store:

```json
{
   "source" : {
      "name" : "Long Island Store",
      "source_code" : "huntington",
      "postcode" : "11743",
      "enabled" : true,
      "contact_name" : "Leslie Arzy",
      "country_id" : "US",
      "street": "55 Gerard St,",
      "city" : "Huntington",
      "region_id": 43,
      "latitude": 40.872510,
      "longitude": -73.429352,
      "phone": "555 939-4444",
      "extension_attributes": {
        "is_pickup_location_active": true,
        "frontend_name": "Long Island (Huntington) Store",
        "frontend_description": "Huntington, Long Island"
    }
  }
}
```

### Manhattan store

Use the following payload to create the Manhattan store:

``` json
{
   "source" : {
      "name" : "Manhattan Store",
      "source_code" : "manhattan",
      "postcode" : "10011",
      "enabled" : true,
      "contact_name" : "Kiara Smith",
      "country_id" : "US",
      "street": "70 W. 10th St",
      "city" : "New York",
      "region_id": 43,
      "latitude": 40.734600,
      "longitude": -73.998490,
      "phone": "555 838-4500",
      "extension_attributes": {
        "is_pickup_location_active": true,
        "frontend_name": "Manhattan (Greenwich Village) Store",
        "frontend_description": "Greenwich Village, Manhattan"
    }
  }
}
```
### Berlin store

Use the following payload to create the Berlin store:

```json
{
   "source" : {
      "name" : "Berlin Store",
      "source_code" : "berlin",
      "postcode" : "10115",
      "enabled" : true,
      "contact_name" : "Tereza Schmidt",
      "country_id" : "DE",
      "street": "Am Nordbahnhof 5",
      "city" : "Berlin",
      "region_id": 82,
      "latitude": 52.52343,
      "longitude": 13.41144,
      "phone": "49-030-555-55555",
      "extension_attributes": {
        "is_pickup_location_active": true,
        "frontend_name": "Berlin Store",
        "frontend_description": "Central Station, Berlin"
      }
   }
}
```

### Frankfurt store

Use the following payload to create the Frankfurt store:

```json
{
   "source" : {
      "name" : "Frankfurt Store",
      "source_code" : "frankfurt",
      "postcode" : "60327",
      "enabled" : true,
      "contact_name" : "Ralf Schneider",
      "country_id" : "DE",
      "street": "Frankfurt am Main, Stadt",
      "city" : "Frankfurt",
      "region_id": 86,
      "latitude": 50.110645,
      "longitude": 8.682092,
      "phone": "49-069-555-66666",
      "extension_attributes": {
        "is_pickup_location_active": true,
        "frontend_name": "Frankfurt Store",
        "frontend_description": "Central Station, Frankfurt"
      }
   }
}
```

### Headquarters

The `hq` source will fulfill virtual and downloadable products.

```json
{
   "source" : {
      "name" : "HQ",
      "source_code" : "hq",
      "postcode" : "10022",
      "enabled" : true,
      "contact_name" : "Francine Helen",
      "country_id" : "US",
      "street": "909 3rd Ave",
      "city" : "New York",
      "region_id": 43,
      "latitude": 40.7571,
      "longitude": -73.9657
   }
}
```

## Verify this step

In Admin, click **Stores** > Inventory > **Sources**.  The new sources are displayed in the Sources grid.
