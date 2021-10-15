---
group: live-search
title: Live Search SDK
ee_only: True
---

Live Search SDK includes a GraphQL Playground that can be used to query products and associated facets from the Admin. As an API counterpart/wrapper, it also provides a Javascript SDK.

## Requirements

The GraphOL Playground API is unauthenticated, but requires an API key with the value set to “`search_gql` The following headers are required for this API:

||**Required Headers**
|---|---|
|`productSearch`| - `MagentoEnvironmentId`<br />- `MagentoWebsiteCode`<br />- `MagentoStoreCode`<br />- `MagentoStoreViewCode`<br />- `x-api-key:{Magento api key}`<br />- `x-gw-signature:{jwt}`|
|`attributeMetadata`| (same as above)`|

## Example request

`productAttribute`

```graphql
query {
  attributeMetadata
  {
    attributes {
      attributeCode
      dataType
      multiSelect
      label
      required
      unique
      global
      visible
      searchable
      filterable
      visibleInCompareList
      visibleInListing
      sortable
      visibleInSearch
      filterableInSearch
      searchWeight
      usedForRules
      deleted
      numeric
    }
  }
}
```
