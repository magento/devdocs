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

`POST <host>/rest/all/V1/inventory/sources`

**Scope:**

`all` store views

**Headers:**

`Content-Type`: `application/json`

`Authorization`: `Bearer <admin_token>`

**Payload:**

```json
{
   "source" : {
      "name" : "Baltimore Warehouse",
      "source_code" : "baltimore_wh",
      "postcode" : "21214",
      "enabled" : true,
      "contact_name" : "Ethan Carter",
      "country_id" : "US",
      "street": "901 Harford Rd.",
      "city" : "Baltimore",
      "region_id": 31,
      "latitude": 39.290882,
      "longitude": -76.610759
      }
}
```

**Response:**

Magento returns an empty array.

`[]`

## Add more sources

Use the same endpoint to create sources representing the Austin, Reno, Berlin, and Frankfurt warehouses as well as the source for virtual and downloadable products.

### Austin warehouse

```json
{
   "source" : {
      "name" : "Austin Warehouse",
      "source_code" : "austin_wh",
      "postcode" : "78758",
      "enabled" : true,
      "contact_name" : "Karen Chen",
      "country_id" : "US",
      "street": "1822 W Braker Ln",
      "city" : "Austin",
      "region_id": 57,
      "latitude": 30.271129,
      "longitude": -97.7437
      }
}
```

### Reno warehouse

```json
{
   "source" : {
      "name" : "Reno Warehouse",
      "source_code" : "reno_wh",
      "postcode" : "89512",
      "enabled" : true,
      "contact_name" : "Fred Wilson",
      "country_id" : "US",
      "street": "1674 N Virginia St",
      "city" : "Reno",
      "region_id": 39,
      "latitude": 39.526139,
      "longitude": -119.812688
   }
}
```

### Berlin warehouse

```json
{
   "source" : {
      "name" : "Berlin Warehouse",
      "source_code" : "berlin_wh",
      "postcode" : "10115",
      "enabled" : true,
      "contact_name" : "Angela Kohl",
      "country_id" : "DE",
      "street": "Am Nordbahnhof 5",
      "city" : "Berlin",
      "region_id": 82,
      "latitude": 52.52343,
      "longitude": 13.41144
   }
}
```

### Frankfurt warehouse

```json
{
   "source" : {
      "name" : "Frankfurt Warehouse",
      "source_code" : "frankfurt_wh",
      "postcode" : "60327",
      "enabled" : true,
      "contact_name" : "Ralf Schneider",
      "country_id" : "DE",
      "street": "Frankfurt am Main, Stadt",
      "city" : "Frankfurt",
      "region_id": 86,
      "latitude": 50.110645,
      "longitude": 8.682092
   }
}
```

### Headquarters

This source will be used to fulfill virtual and downloadable products.

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

In Admin, click **Stores** > **Inventory** > **Sources**.  The new sources are displayed in the Sources grid.
