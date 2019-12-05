---
group: rest-api
title: Manage source items

---

If Magento is configured to manage inventory, when you upgrade to version 2.3, Magento assigns all existing products to the default source. Currently, Magento also assigns newly-created products to the default source. Single Source merchants do not need to manage source items, but Multi Source merchants may need to move products from the default source to a custom source, or move products from one custom source to another.

**Service names:**

```http
inventoryApiSourceItemsDeleteV1
inventoryApiSourceItemsSaveV1
inventoryApiSourceItemRepositoryV1
```

**REST endpoints:**

```http
POST V1/inventory/source-items-delete
POST V1/inventory/source-items
GET V1/inventory/source-items
```

**sourceItems parameters:**

Name | Description | Type | Requirements
--- | --- | --- | ---
sku | The SKU of an existing product | String | Required to assign or unassign a source
source_code | The source to assign or unassign | String | Required to assign or unassign a source
quantity | The total amount of inventory available for this SKU and source | Float | Optional
status |  Indicates whether the product is out of stock (0) or in stock (1) | Integer | Optional

## Unassign products from a source

Use the `POST V1/inventory/source-items-delete` endpoint to unassign one or more products from the specified source. The `sku` and `source_code` attributes are required for each product.

{:.bs-callout-warning}
Unassigning a source clears all quantity data. For this example, this is OK, because the default source did not contain any quantity data. Reassigning a source that contains real quantity data can potentially cause havoc with pending orders with reservations and affect the salable quantity counts. See the [merchant documentation](https://github.com/magento-engcom/msi/wiki/Overview) for more details.

**Sample usage:**

`POST <host>/rest/<store_code>/V1/inventory/source-items-delete`

**Payload:**

```json
{
    "sourceItems": [{
        "sku": "new_product1",
        "source_code": "default"
    },
    {
        "sku": "new_product2",
        "source_code": "default"
    }]
}
```

**Response:**

Magento returns an empty array.

`[]`

## Assign products to a source {#assign}

`POST V1/inventory/source-items` is a powerful endpoint that allows you to define which sources carry each product as well as how many units are available at each source. You can use the endpoint to set up the initial quantities for each SKU at each source or add quantities as you receive shipments to replenish your supply.

The following example assigns `1000` units of product `new_product1` to the `central` source and `2000` units to the `east` source. It also assigns `500` units of product `new_product2` to the `central` source and `250` units to the `east` source.

**Sample usage:**

`POST <host>/rest/<store_code>/V1/inventory/source-items`

**Payload:**

```json
{
  "sourceItems": [{
    "sku": "new_product1",
    "source_code": "central",
    "quantity": 1000,
    "status": 1
  },
  {
    "sku": "new_product1",
    "source_code": "east",
    "quantity": 2000,
    "status": 1
  },
  {
    "sku": "new_product2",
    "source_code": "central",
    "quantity": 500,
    "status": 1
  },
  {
    "sku": "new_product2",
    "source_code": "east",
    "quantity": 250,
    "status": 1
  }]
}
```

**Response:**

Magento returns an empty array.

`[]`

## Search for source items

The following call returns all source items for `sku` = `new_product2`.

See [Search using REST APIs]({{ page.baseurl }}/rest/performing-searches.html) for information about constructing a search query.

**Sample Usage:**

`GET <host>/rest/<store_code>/V1/inventory/source-items?searchCriteria[filter_groups][0][filters][0][field]=sku&searchCriteria[filter_groups][0][filters][0][value]=new_product2&searchCriteria[filter_groups][0][filters][0][condition_type]=eq`

**Payload:**

None

**Response:**

{% collapsible Show code sample %}

```json
{
    "items": [
        {
            "sku": "new_product2",
            "source_code": "central",
            "quantity": 500,
            "status": 1
        },
        {
            "sku": "new_product2",
            "source_code": "east",
            "quantity": 250,
            "status": 1
        }
    ],
    "search_criteria": {
        "filter_groups": [
            {
                "filters": [
                    {
                        "field": "sku",
                        "value": "new_product2",
                        "condition_type": "eq"
                    }
                ]
            }
        ]
    },
    "total_count": 2
}
```

{% endcollapsible %}
