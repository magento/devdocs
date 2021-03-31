---
group: live-search
title: Search Admin Service
ee_only: True
---

The Search Admin Service provides clients, such as the Magento Search Admin UI, the ability to perform copy, read, update, and delete (CRUD) operations for search configurations. Because it is queried on every search request, the service provides search configuration information in a very low latency manner. See the [Architectural Overview]({{ page.baseurl }}/live-search/overview.html) for how the Search Admin Service interacts with Magento Commerce.

## Access patterns

|**Client**|**Data to Access**|**Access Patterns**
|---|---|---|
|Magento Admin UI| Facet configuration | CRUD (per store view)<br />- Save facet configuration<br />- Read facet configuration |
| |Synonyms configuration | CRUD (per store view)|
| |Product attribute metadata (may include data unrelated to search config)| Reads list of product attribute metadata (per store view)<br />Note: This API makes it unnecessary for the UI to call the metadata service. The admin service passes the request to the metadata service.|
| |Boost/Bury conditional rules| CRUD (per store view)<br />- Saves boost/bury conditional rules<br />- Reads all boost/bury conditional rules
|Search Service ||- Facet configuration<br />- Boost/bury conditional rules<br />- Search attribute config (subset of attribute metadata in Metadata service)|
|Synonyms|Periodically updates and reindexes based on synonym configuration.|- CRUD (dynamo - read/update timestamps)<br />- CRUD (elasticsearch -  reindexing)
| | Search attribute config (subset of attribute Metadata service)| Updates search attribute config.|

## Data Store

DynamoDB Accelerator (DAX) is used as a caching layer between the Search Admin microservice and the `DynamoDB` data store. Requests to `DynamoDB` are made through DAX and the cache is refreshed as items are updated.

### Dynamo Table Design

|**Field Name**|**Key Type**|**Data Type**|**Description**|
|---|---|---|---|
|Id|Partition key/Hash key|String|Composite ID of `MageId`, `EnvironmentId`, `WebsiteCode`, `StoreCode` and `StoreViewCode`.|
|MageId||String|Magento account identifier|
|EnvironmentId||String|Unique identifier of the Magento instance|
|WebsiteCode||String|Website code from Magento|
|StoreCode||String|Store code from Magento|
|StoreViewCode||String|Store view code from Magento|
|CreatedAt||Date|Timestamp when the configuration was created.<br />Pattern: yyyy-MM-dd'T'HH:mm:ss.SSS'Z'|
|UpdatedAt||Date|Timestamp when the configuration was last updated.<br />Pattern: [yyyy-MM-dd'T'HH:mm:ss.SSS'Z'|
|Synonyms||Binary (protobuf)|List of synonym groups. Max number: 100|
|FacetsConfiguration||Binary (protobuf)|List of facet configuration. Max number: 100|
|QueryConditionalRules||Binary (protobuf)|Query conditional rule <br />- Query - Query phrase<br />- Operator - is, contains, starts with<br />- Action - Boost, Bury<br />- AttributeCode - e.g. sku<br />- Values - array of values (e.g. for skus: [100,200,300]) |
|ProductMetadataRules||Binary (protobuf)||
|Search attribute config<br />(Subset of attribute metadata in Metadata service)||Binary (protobuf)|Product attribute metadata from Metadata service <br />Attributes relevant for search service:<br />- `attributeCode`<br />- `visibleInListing`<br />- `visibleInSearch`|
