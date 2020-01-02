---
group: b2b-developer-guide
title: Manage shared catalogs
ee_only: true
functional_areas:
  - B2B
  - Catalog
  - Integration
---

## Manage custom shared catalogs

{{site.data.var.b2b}} provides two types of shared catalog: public and custom. A public catalog is the default shared catalog. It is automatically displayed to all guest customers and to logged-in customers that are not company users. The seller assigns a custom shared catalog to specific companies as configured by admin. There can only be one public catalog, and it cannot be deleted.

**Service name:**

`sharedCatalogSharedCatalogRepositoryV1`

**REST Endpoints:**

```terminal
POST /V1/sharedCatalog
PUT  /V1/sharedCatalog/:id
GET  /V1/sharedCatalog/:sharedCatalogId
DELETE  /V1/sharedCatalog/:sharedCatalogId
GET  /V1/sharedCatalog/
```

**Shared catalog parameters:**

Name | Description | Format | Requirements
--- | --- | --- | ---
`id` | The system-generated shared catalog ID number | integer | Required to update a shared catalog. Not applicable for create operations.
`name` | The display name of the shared catalog. Must be unique | string | Required to create or update a shared catalog.
`description` | Describes the shared catalog | string | Optional
`customer_group_id` | A system-generated ID. It cannot be changed. | integer |  0 - Not logged in; 1 - General; 2 - Wholesale; 3 - Retailer
`type` | Indicates whether this is a custom or public shared catalog. | integer | Required to create or update a shared catalog. 0 - Custom; 1 - Public
`created_by` | The user ID of the admin who created the shared catalog | integer | Optional
`store_id`  | The store ID the shared catalog is assigned to | integer | Required to create or update a shared catalog.
`tax_class_id`  | | integer |  Required to create a shared catalog. 2 - Taxable goods; 3 - Retail Customer

### Create a custom shared catalog

When B2B is enabled, the system creates a public shared catalog named `Default (General)`. Magento allows only one public shared catalog at a time. You can create an unlimited number of custom shared catalogs.

**Sample Usage:**

`POST <host>/rest/<store_code>/V1/sharedCatalog`

**Payload:**

```json
{
  "sharedCatalog": {
    "name": "Test",
    "type": 0,
    "store_id": 0,
    "tax_class_id": 3
  }
}
```

**Response:**

The shared catalog `id`, such as `2`.

### Update a characteristics of a shared catalog

You cannot change the `type` from public (`1`) to custom (`0`). If you need to replace the public shared catalog, create a custom catalog and change its type to public.

**Sample Usage:**

`PUT <host>/rest/<store_code>/V1/sharedCatalog/2`

```json
{
  "sharedCatalog": {
    "id": 2,
    "name": "Custom shared catalog",
    "description": "Just a sample custom shared catalog.",
    "type": 0,
    "store_id": 0,
    "tax_class_id": 3
  }
}
```

**Response:**

The shared catalog `id`, such as `2`.

### Retrieve general information about a shared catalog

This call returns information about the specified shared catalog.

**Sample Usage:**

`GET <host>/rest/<store_code>/V1/sharedCatalog/2`

**Payload:**

Not applicable

**Response:**

```json
{
    "id": 2,
    "name": "Custom shared catalog",
    "description": "Just a sample custom shared catalog.",
    "customer_group_id": 4,
    "type": 0,
    "created_at": "2017-07-21 15:39:40",
    "created_by": 1,
    "store_id": 0,
    "tax_class_id": 3
}
```

### Delete a shared catalog

Only custom shared catalogs can be deleted. When a custom catalog is deleted, the assigned companies are re-assigned to the default public catalog.

**Sample Usage:**

`DELETE <host>/rest/<store_code>/V1/sharedCatalog/2`

**Payload:**

Not applicable

**Response:**

`true`, indicating the request was successful

### Search for a shared catalog

The following search returns all the custom shared catalogs (`type = 0`) in the system.

See [Search using REST APIs]({{ page.baseurl }}/rest/performing-searches.html) for information about constructing a search query.

**Sample Usage:**

`GET <host>/rest/<store_code>/V1/sharedCatalog?searchCriteria[filter_groups][0][filters][0][field]=type&searchCriteria[filter_groups][0][filters][0][value]=0&searchCriteria[filter_groups][0][filters][0][condition_type]=eq`

**Payload:**

Not applicable

**Response:**

```json
{
    "items": [
        {
            "id": 2,
            "name": "Custom shared catalog",
            "description": "Just a sample custom shared catalog.",
            "customer_group_id": 4,
            "type": 0,
            "created_at": "2017-07-21 15:39:40",
            "created_by": 1,
            "store_id": 0,
            "tax_class_id": 3
        }
    ],
    "search_criteria": {
        "filter_groups": [
            {
                "filters": [
                    {
                        "field": "type",
                        "value": "0",
                        "condition_type": "eq"
                    }
                ]
            }
        ]
    },
    "total_count": 1
}
```

## Related information

*  [Integrate with the SharedCatalog module]({{ page.baseurl }}/b2b/shared-catalog.html)
*  [Assign categories and products]({{ page.baseurl }}/b2b/shared-cat-product-assign.html)
*  [Assign companies]({{ page.baseurl }}/b2b/shared-cat-company.html)
