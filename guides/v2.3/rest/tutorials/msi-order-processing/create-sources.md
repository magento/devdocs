---
layout: tutorial
group: rest
title: Step 2. Create sources
subtitle: Order processing with MSI
menu_title: Step 2. Create sources
menu_order: 20
level3_subgroup: msi-tutorial
return_to:
  title: REST Tutorials
  url: rest/tutorials/index.html
functional_areas:
  - Integration
---

**Sources** are the physical locations from which you manage product inventory and ship orders. These locations can include warehouses, brick-and-mortar stores, distribution centers, and drop shippers. MSI leverages the quantities and salable quantities per stock and manages inventory amounts automatically for managed products and orders. Virtual and downloadable products can also be assigned to a source.

You cannot delete or disable the default source. You can create, modify, enable, and disable custom sources, but you cannot delete them.

This step guides you through the process of creating sources for your inventory, including warehouses for the physical products and another source for virtual and downloadable products.

For more information about sources, see the Wiki topic [Create sources](https://github.com/magento-engcom/msi/wiki/Create-Sources).

{:.bs-callout .bs-callout-info}
This step requires an admin token. See [Generate the admin token]({{ page.baseurl }}/rest/tutorials/prerequisite-tasks/create-admin-token.html) for more information.

## Create the first source

The `POST V1/inventory/sources` endpoint creates the Baltimore Warehouse (`baltimore_wh`) source. The `name`, `source_code`, `country_id`, and `postcode` attributes are required. The value assigned to `source_code` cannot be changed.

The `source_code` values will be used in subsequent steps.

**Endpoint**

`POST http://<host>/rest/all/V1/inventory/sources`

**Scope**

`all` store views

**Headers**

`Content-Type`: `application/json`

`Authorization`: `Bearer <admin_token>`

**Payload**

``` json
{
   "source" : {
      "name" : "Baltimore Warehouse",
      "source_code" : "baltimore_wh",
      "postcode" : "21214",
      "enabled" : true,
      "contact_name" : "Ethan Carter",
      "country_id" : "US",
      "city" : "Baltimore"
   }
}
```

**Response**
Magento returns an empty array.

`[]`

## Add more sources

Use the same endpoint to create sources representing the Austin, Reno, Berlin, and Frankfurt warehouses as well as the source for virtual and downloadable products.

### Austin warehouse

``` json
{
   "source" : {
      "name" : "Austin Warehouse",
      "source_code" : "austin_wh",
      "postcode" : "78758",
      "enabled" : true,
      "contact_name" : "Karen Chen",
      "country_id" : "US",
      "city" : "Austin"
   }
}
```

### Reno warehouse

``` json
{
   "source" : {
      "name" : "Reno Warehouse",
      "source_code" : "reno_wh",
      "postcode" : "89512",
      "enabled" : true,
      "contact_name" : "Fred Wilson",
      "country_id" : "US",
      "city" : "Reno"
   }
}
```

### Berlin warehouse

``` json
{
   "source" : {
      "name" : "Berlin Warehouse",
      "source_code" : "berlin_wh",
      "postcode" : "10115",
      "enabled" : true,
      "contact_name" : "Angela Kohl",
      "country_id" : "DE",
      "city" : "Berlin"
   }
}
```

### Frankfurt warehouse

``` json
{
   "source" : {
      "name" : "Frankfurt Warehouse",
      "source_code" : "frankfurt_wh",
      "postcode" : "60327",
      "enabled" : true,
      "contact_name" : "Ralf Schneider",
      "country_id" : "DE",
      "city" : "Frankfurt"
   }
}
```

### Headquarters

This source will be used to fulfill virtual and downloadable products.

``` json
{
   "source" : {
      "name" : "HQ",
      "source_code" : "hq",
      "postcode" : "10022",
      "enabled" : true,
      "contact_name" : "Francine Helen",
      "country_id" : "US",
      "city" : "Manhattan"
   }
}
```

## Verify this step

In Admin, click **Stores** > **Manage Sources**.  The new sources are displayed in the Sources grid.
