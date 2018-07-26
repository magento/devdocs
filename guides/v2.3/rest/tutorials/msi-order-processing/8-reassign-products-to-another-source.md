---
layout: tutorial
group: rest
title: Step 8. Reassign products to another source
menu_title: Step 8. Reassign products to another source
menu_order: 80
level3_subgroup: msi-tutorial
return_to:
  title: REST Tutorials
  url: rest/tutorials/index.html
version: 2.3
github_link: rest/tutorials/msi-order-processing/8-reassign-products-to-another-source.md
functional_areas:
  - Integration
---

Currently, Magento assigns any newly-created product to the default source. For this tutorial, we want to assign the new products to the custom source.

## Unassign products from the default source

**Endpoint**

`POST http://<host>/rest/all/V1/inventory/source-items-delete`

**Scope**

`all` store view

**Headers**

Content-Type application/json
Authorization: Bearer <admin_token>

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

## Assign products to a custom source

**Endpoint**

`POST http://<host>/rest/all/V1/inventory/source-items`

**Scope**

`all` store views

**Headers**

Content-Type application/json
Authorization: Bearer <admin_token>

**Payload**

``` json
{
  "sourceItems": [{
	"sku": "sp1",
	"source_code": "uk_warehouse",
  "quantity": 10,
  "status": 1
	},
  {
  "sku": "sp1",
	"source_code": "uk_store",
  "quantity": 5,
  "status": 1
  },
  {
  "sku": "sp1",
	"source_code": "de_warehouse",
  "quantity": 25,
  "status": 1
  },
  {
  "sku": "sp1",
	"source_code": "us_warehouse",
  "quantity": 60,
  "status": 1
  },
  {
	"sku": "sp2",
	"source_code": "uk_warehouse",
  "quantity": 25,
  "status": 1
	},
  {
  "sku": "sp2",
	"source_code": "uk_store",
  "quantity": 0,
  "status": 1
  },
  {
  "sku": "sp2",
	"source_code": "de_warehouse",
  "quantity": 50,
  "status": 1
  },
  {
  "sku": "sp2",
	"source_code": "us_warehouse",
  "quantity": 50,
  "status": 1
  }]
}
```

**Response**

Magento returns an empty array.

`[]`

## Verify this step

In Admin, click **Catalog** > **Products**.  The Simple Running Backpack and 20% Discount products are assigned to Texas Sport Equipment Source #017.
