---
layout: tutorial
group: rest-api
title: Step 6. Reassign products to custom sources
subtitle: Order processing with MSI
menu_title: Step 6. Reassign products to custom sources
menu_order: 60
level3_subgroup: msi-tutorial
return_to:
  title: REST Tutorials
  url: rest/tutorials/index.html
functional_areas:
  - Integration
---


When you initially install or upgrade Magento with MSI, MSI assigns all existing and newly created products to the default source. For this tutorial, we want to assign the new products to custom sources. As part of this process, we will unassign the products from the default source.

{:.bs-callout .bs-callout-info}
When you unassign a product from a source, Magento removes all quantity data saved for that source.

## Unassign products from the default source

Use the `POST V1/inventory/source-items-delete` endpoint to unassign one or more products from the specified source. The `sku` and `source_code` attributes are required for each product.

{:.bs-callout .bs-callout-warning}
Unassigning a source clears all quantity data. For this example, this is OK, because the default source did not contain any quantity data. Reassigning a source that contains real quantity data can potentially cause havoc with pending orders with reservations and affect the salable quantity counts. See the [merchant documentation](https://github.com/magento-engcom/msi/wiki/Overview) for more details.

**Endpoint**

`POST http://<host>/rest/all/V1/inventory/source-items-delete`

**Scope**

`all` store views

**Headers**

`Content-Type`: `application/json`

`Authorization`: `Bearer <admin_token>`

**Payload**

``` json
{
	"sourceItems": [{
		"sku": "sp1",
		"source_code": "default"
	},
	{
		"sku": "sp2",
		"source_code": "default"
	},
	{
		"sku": "vp1",
		"source_code": "default"
	}]
}
```

**Response**

Magento returns an empty array.

`[]`

## Assign products to custom sources

Now we can assign each product to one or more sources. The `POST V1/inventory/source-items` endpoint allows you to specify the quantity of each product that is available at each source.

**Endpoint**

`POST http://<host>/rest/all/V1/inventory/source-items`

**Scope**

`all` store views

**Headers**

`Content-Type`: `application/json`
`Authorization`: `Bearer <admin_token>``

**Payload**

``` json
{
  "sourceItems": [{
  	"sku": "sp1",
    "source_code": "baltimore_wh",
    "quantity": 50,
    "status": 1
  },
  {
  	"sku": "sp1",
  	"source_code": "austin_wh",
  	"quantity": 10,
  	"status": 1
  },
  {
  	"sku": "sp1",
  	"source_code": "reno_wh",
  	"quantity": 100,
  	"status": 1
  },
  {
  	"sku": "sp1",
  	"source_code": "berlin_wh",
  	"quantity": 200,
  	"status": 1
  },
  {
  	"sku": "sp1",
  	"source_code": "frankfurt_wh",
  	"quantity": 300,
  	"status": 1
  },
  {
  	"sku": "sp2",
  	"source_code": "baltimore_wh",
  	"quantity": 25,
  	"status": 1
  },
  {
  	"sku": "sp2",
  	"source_code": "austin_wh",
  	"quantity": 0,
  	"status": 1
  },
  {
  	"sku": "sp2",
  	"source_code": "reno_wh",
  	"quantity": 50,
  	"status": 1
  },
  {
  	"sku": "sp2",
  	"source_code": "berlin_wh",
  	"quantity": 50,
  	"status": 1
  },
  {
  	"sku": "sp2",
  	"source_code": "frankfurt_wh",
  	"quantity": 75,
  	"status": 1
  },
  {
  	"sku": "vp1",
  	"source_code": "hq",
  	"quantity": 9999,
  	"status": 1
  }]
}
```

**Response**

Magento returns an empty array.

`[]`

## Verify this step

In Admin, click **Catalog** > **Products**.  Products `sp1`, `sp2`, and `vp1` display quantities per assigned source in the **Quantity Per Source** column and an aggregated total of products per stock in the **Salable Quantity** column.
