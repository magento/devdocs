---
group: live-search
title: Live Search SDK
ee_only: True
---

Live Search SDK includes a GraphQL Playground that can be used to query products and associated facets from the Magento Admin. In addition to the `productSearch query`, it also supports `categorySearch`, which is a quick way to retrieve categories only for relevant search results (recommended for fast search as you type queries). As an API counterpart/wrapper, it also provides a Javascript SDK.

## Requirements

The GraphOL Playground API is unauthenticated, but requires an API key with the value set to “`search_gql` The following headers are required for this API:

||**Required Headers**
|---|---|
|`facetsConfiguration`| - `MagentoEnvironmentId`<br />- `MagentoWebsiteCode`<br />- `MagentoStoreCode`<br />- `MagentoStoreViewCode`<br />- `x-api-key:{Magento api key}`<br />- `x-gw-signature:{jwt}`|
|`synonyms`| Same as above|
|`productAttributeMetadata`| Same as above|
|`synonymSuggestions`| Same as above|

## GraphQL Schema

See [search-admin-service](https://git.corp.adobe.com/magento-datalake/search-admin-service/blob/master/search-admin/src/main/resources/com.adobe.magento.search.admin/facetsConfiguration.graphqls) on GitHub for the GraphQL Schema for queries and mutations.

#### Example requests

`facetsConfiguration`

```
query {
  facetsConfiguration
  {
    facetsConfig {
      title
      attributeCode
      displayOrder
      facetType
      dataType
      displayOrder
      maxValue
      multiSelect
      aggregationType
      aggregationRanges {
        from
        to
      }
      numeric
    }
  }
}
```

`synonym`

```
query {
    synonyms {
      synonymsGroups {
        id
        type
        anchor
        terms
      }
    }
  }
```

`productAttribute`

```
query {
  productAttributeMetadata
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

`querySynonymSuggestions`

```
query {
    querySynonymSuggestions(words: ["olive", "emerald"]) {
    suggestions
  }
}
```
