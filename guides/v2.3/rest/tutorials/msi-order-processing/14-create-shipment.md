---
layout: tutorial
group: rest
title: Step 14. Create a shipment
menu_title: Step 14. Create a shipment
menu_order: 140
level3_subgroup: msi-tutorial
return_to:
  title: REST Tutorials
  url: rest/tutorials/index.html
version: 2.3
github_link: rest/tutorials/msi-order-processing/14-create-shipment.md
functional_areas:
  - Integration
---

When you a shipment with MSI, you can have many more options than are possible with standard single-source shipments. One of the most significant parts of MSI is the Source Selection Algorithm (SSA). SSA analyzes and determines the best match for sources and shipping using order information for determining shipping costs, aggregated stock quantities, source location against destination, and additional configured settings. The algorithm then provides a list of source items with quantities to deduct per each source item.


At moment of writing, there is only one available SSA in MSI. You can get the list of all available algorithms this way:



**Endpoint**

`POST http://<host>/rest/test/V1/`

where `1` is the ``

**Scope**

`test` store view

**Headers**

`Content-Type` `application/json`

`Authorization` `Bearer <admin token>`

**Payload**

``` json
{
  "capture": true,
  "notify": true
}
```

**Response**


## Verify this step {#verify-step}
