---
layout: tutorial
group: rest-api
title: Step 11. Filter orders.
subtitle: Order processing tutorial
contributor_name: Ziffity
contributor_link: https://www.Ziffity.com/
return_to:
  title: REST tutorials
  url: rest/tutorials/index.html
menu_order: 11
level3_subgroup: order-tutorial
redirect_from:
  - /guides/v2.3/get-started/order-tutorial/filter-orders.html
functional_areas:
  - Integration
  - Orders
  - Sales
---

We can filter orders by attributes using REST Api endpoints. Here I take one example, filtering orders by attribute `status`.

**Endpoint:**

`GET <host>/rest/<store_code>/V1/orders/`

**Headers:**

`Content-Type` `application/json`

`Authorization` `Bearer <administrator token>`

**Params**

Param | Value | Description
--- | --- | ---
searchCriteria[filter_groups][0][filters][0][field] | status | Attribute name to filter
searchCriteria[filter_groups][0][filters][0][value] | pending | Attribute value to filter
fields | items[increment_id,entity_id] | Attributes needs to be return as response

**Payload:**

Not applicable

**Response:**

```json
{
    "items": [
        {
            "entity_id": 13403,
            "increment_id": "WA0013403"
        },
        {
            "entity_id": 2490,
            "increment_id": "WA0002490"
        },
        {
            "entity_id": 925,
            "increment_id": "WA0000925"
        }
    ]
}
```

### Verify this step {#verify-step}

1. Log in to [Admin](https://glossary.magento.com/admin). Click **Sales** > **Orders**. Filter orders grid by attribute status = 'pending'. Verify the data is same as we get in API response.




