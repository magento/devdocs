---
layout: tutorial
group: rest
title: Step 5. Assign sales channels to the stocks
menu_title: Step 5. Assign sales channels to the stocks
menu_order: 50
level3_subgroup: msi-tutorial
return_to:
  title: REST Tutorials
  url: rest/tutorials/index.html
version: 2.3
github_link: rest/tutorials/msi-order-processing/5-assign-sales-channel.md
functional_areas:
  - Integration
---

**NOTE TO REVIEWER** _After I execute these calls, Admin no longer displays the Stock grid. Instead, it displays "No such entity. The information returns as expected when I call the corresponding GET endpoints._"


We can now assign a sales channel for each stock.

## Assign the UK website

**Endpoint**

`PUT http://<host>/rest/all/V1/inventory/stocks/2`

**Scope**

`all` store views

**Headers**

Content-Type application/json

Authorization: Bearer <admin_token>

**Payload**

``` json
{
  "stock": {
    "stock_id": 2,
    "name": "UK Stock",
    "extension_attributes": {
      "sales_channels": [
        {
          "type": "website",
          "code": "uk"
        }
      ]
    }
  }
}
```

**Response**

The `stock_id`, such as `2`.

## Assign the US website

**Endpoint**

`PUT http://<host>/rest/all/V1/inventory/stocks/3`

**Scope**

`all` store views

**Headers**

Content-Type application/json
Authorization: Bearer <admin_token>

**Payload**

``` json
{
  "stock": {
    "stock_id": 3,
    "name": "US Stock",
    "extension_attributes": {
      "sales_channels": [
        {
          "type": "website",
          "code": "us"
        }
      ]
    }
  }
}
```

## Verify this step
