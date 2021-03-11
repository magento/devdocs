---
group: live-search
title: Indexing
ee_only: True
---

Product attribute properties ("metadata") determine how an attribute can be used in the catalog, its appearance and behavior in the store, and the data that is included in data transfer operations. The properties and labels associated with each attribute determine how it can be used and its presentation in the store. If you click on any of the attributes, say color, it will take you to its metadata that allows you to set specific properties that can have implications on search results, positioning, etc. The scope of attribute metadata is `website/store/store view`. 

Live Search dynamically indexes attributes based on product attribute metadata and supports:

-  Full sync of catalog data (search and rex)
-  Update sync of catalog data (search and rex)
-  Indexing ML for p-rex

The Live Search API allows a client to sort by any product attribute that has the [storefront property](https://docs.magento.com/user-guide/stores/attributes-product.html) `Use in Search` set to `Yes` in the Magento Admin.

## Indexing pipeline

The client calls the search service from the storefront to retrieve (filterable, sortable) index metadata. Only searchable product attributes with the `Use in Layered Navigation` property set to `Filterable (with results)` and `Use for Sorting in Product Listing` set to `Yes`can be called by the search service.

To construct a dynamic query, the search service needs to know which attributes are searchable and their weight. Live Search honors Magento search weights (1-10, where 10 is the highest priority).

![Live Search indexing client search diagram]({{ page.baseurl }}/live-search/images/indexing-pipeline.png)
<br />_Indexing pipeline_

1. Get list of Search merchants from `registry-service`, which returns list of `environmentId`s.

1. Call Metadata-service api to get list of store views and their attribute metadata where the attribute metadata has changed between ts1 to ts2.

1. Store attributes that need to be indexed.

1. For each store view, reindex if the attribute metadata used for indexing has changed.

1. Store attributes are indexed by Elasticsearch (ES).

## Client search

The Live Search API allows a client to sort by any sortable product attribute by setting the [storefront property](https://docs.magento.com/user-guide/stores/attributes-product.html), `Used for sorting in product listings` to `Yes`. Depending on the theme, this setting causes the attribute to be included as an option in the [Sort by](https://docs.magento.com/user-guide/catalog/navigation-pagination.html) control on catalog pages. Up to 300 product attributes can be indexed by Live Search, with [storefront properties](https://docs.magento.com/user-guide/stores/attributes-product.html) that are searchable and filterable.

### Sortable attribute workflow

The Live Search API endpoint returns attribute metadata that includes the sortable property setting. After an attribute is updated, it might take up to two hours for the metadata returned to sync with Magento attribute data.

![Live Search indexing client search diagram]({{ page.baseurl }}/live-search/images/indexing-client-search.png)
<br />_Client search_

1.	Merchant updates attribute property to make it sortable.

1.	Product feed updates metadata SaaS.

1.	Elasticsearch (ES) indexer picks up updated attribute from metadata SaaS on a cadence, such as every hour, and updates ES index based on the attribute.

1.	ES indexer updates the search metadata table (dynamo table) to reflect the attribute change.

1.	`attributeMetadata` query returns fields from the search metadata table which now includes updates to the sortable attribute.

## Example

```text
type SearchableAttribute {
    attribute: String!
    weight: float
}
 
type SortableAttribute {
    attribute: String!
    label: String
    numeric: boolean
}
 
type FilterableInSearchAttribute {
    attribute: String!
    label: String
    numeric: boolean
}
 
type AttributeMetadataResponse {
    sortable: [SortableAttribute!]
    filterableInSearch: [FilterableInSearchAttribute!]
    searchable: [SearchableAttribute!]
}
 
query attributeMetadata {
  // no longer need the filter argument. The response will be derived by the selections
  attributeMetadata () {
    sortable {
      label
      attribute
      numeric
    },
    filterableInSearch {
      label
      attribute
      numeric
    }
  }
}
```

## Category feed

The category feed has two new fields: `StoreCode` and `WebsiteCode`.

|**DynamoDB table**|**Description**|
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
