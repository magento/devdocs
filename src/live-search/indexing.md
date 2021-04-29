---
group: live-search
title: Indexing
ee_only: True
---

Product attribute properties ("metadata") determine how an attribute can be used in the catalog, its appearance and behavior in the store, and the data that is included in data transfer operations. The scope of attribute metadata is `website/store/store view`.

The Live Search API allows a client to sort by any product attribute that has the [storefront property](https://docs-beta.magento.com/user-guide/stores/attributes-product.html) `Use in Search` set to `Yes` in the Adobe Commerce Admin.

## Indexing pipeline

The client calls the search service from the storefront to retrieve (filterable, sortable) index metadata. Only searchable product attributes with the `Use in Layered Navigation` property set to `Filterable (with results)` and `Use for Sorting in Product Listing` set to `Yes`can be called by the search service.

To construct a dynamic query, the search service needs to know which attributes are searchable and their weight. Live Search honors Adobe Commerce search weights (1-10, where 10 is the highest priority).

![Live Search indexing client search diagram]({{ page.baseurl }}/live-search/images/indexing-pipeline.svg)
_Indexing pipeline_

1. Get list of Search merchants from `registry-service`, which returns list of `environmentId`s.

1. Call `metadata-service` API to get list of store views and their attribute metadata where the attribute metadata has changed between `ts1` to `ts2`.

1. Store attributes that need to be indexed.

1. For each store view, reindex if the attribute metadata used for indexing has changed.

1. Store attributes are indexed by the Live Search query service.

## Client search

The Live Search API allows a client to sort by any sortable product attribute by setting the [storefront property](https://docs-beta.magento.com/user-guide/stores/attributes-product.html), `Used for sorting in product listings` to `Yes`. Depending on the theme, this setting causes the attribute to be included as an option in the [Sort by](https://docs-beta.magento.com/user-guide/catalog/navigation-pagination.html) control on catalog pages. Up to 300 product attributes can be indexed by Live Search, with [storefront properties](https://docs-beta.magento.com/user-guide/stores/attributes-product.html) that are searchable and filterable.

The index metadata is stored in the indexing pipeline and is accessible by the search service.

![Live Search index metadata API diagram]({{ page.baseurl }}/live-search/images/index-metadata-api.svg)
_Index Metadata_

### Sortable attribute workflow

1. Client calls Search Service.

1. Search Service calls Search Admin Service.

1. Search Service calls Indexing Pipeline.

## Category feed

The category feed has two new fields: `StoreCode` and `WebsiteCode`.

|**Field**|**Description**|
|--- |--- |
|`Id` |Partition Key: `CategoryId`, `StoreViewCode`, `StoreCode`, `WebsiteCode`, `MageID`, `EnvironmentId`|
|`StoreViewId`| |
|`CategoryID`| |
|`Category`|Protobuf|
|`StoreViewCode`||
|`StoreCode`|New field|
|`WebsiteCode`|New field|
|`MageId`||
|`EnvironmentId`||
|`LastModifiedTs`||
|`LastPublishedTs`||
|`Deleted`|
