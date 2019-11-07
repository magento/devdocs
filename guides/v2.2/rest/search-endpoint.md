---
group: rest-api
title: Search with the /search endpoint
contributor_name: comwrap GmbH
contributor_link: https://www.comwrap.com/
---

By using `<host>/rest/<store_code>/V1/search`, you can search through the catalog. The obtained results will come from your configured search engine (**Stores** > Settings > **Configuration** > **Catalog** > **Catalog Search** > **Search engine**).
This means you can collect results from search engine that is enabled. And those results will be equal to the results that are coming by using the regular frontend search.

There are three types of request queries that are provided by default

*  quick_search_container
*  catalog_view_container
*  advanced_search_container

All of them run against the `catalogsearch_fulltext` index.

The basic usage is:

```http
GET {{URL}}rest/V1/search?searchCriteria[requestName]=quick_search_container&
searchCriteria[filter_groups][0][filters][0][field]=search_term&
searchCriteria[filter_groups][0][filters][0][value]=TermA
```
To specify more than one word in the search, separate the words with an empty space, just like you would do in the regular search box:

```http
GET {{URL}}rest/V1/search?searchCriteria[requestName]=quick_search_container&
searchCriteria[filter_groups][0][filters][0][field]=search_term&
searchCriteria[filter_groups][0][filters][0][value]=TermA TermB
```

The search term can be applied to any searchable attribute (**Stores** > Attributes > **Product**, open the attribute, or, when clicked Add New Attribute, from sidebar select **Storefront Properties**, and then if **Use in search** is set to `Yes`, the attribute is searchable). The search query can be part of the product name, SKU, or any other custom attribute.

Each searchable attribute has its search boost, which defaults to 1.
Exceptions are `sku`, with a boost of 6, and product `name`, with a boost of 5.

For both `quick_search_container` and `catalog_view_container`, three filters available by default

*  category_ids
*  price (from, to)
*  visibility

The `advanced_search_container` has the following filters:

*  category_ids
*  price (from, to)
*  sku

For more details, review `Magento/CatalogSearch/etc/search_request.xml`.

## Example filters

### Get products within a price range

```http
searchCriteria[requestName]=advanced_search_container&
searchCriteria[filter_groups][0][filters][0][field]=price.from&
searchCriteria[filter_groups][0][filters][0][value]=2&
searchCriteria[filter_groups][0][filters][1][field]=price.to&
searchCriteria[filter_groups][0][filters][1][value]=3
```

### Get products where the SKU might contain a specified string

```http
searchCriteria[requestName]=advanced_search_container&
searchCriteria[filter_groups][0][filters][0][field]=sku&
searchCriteria[filter_groups][0][filters][0][value]=shirt&
searchCriteria[filter_groups][0][filters][0][condition_type]=like
```

### Get all products from a given category

```http
searchCriteria[requestName]=catalog_view_container&
searchCriteria[filter_groups][0][filters][0][field]=category_ids&
searchCriteria[filter_groups][0][filters][0][value][0]=4&
searchCriteria[filter_groups][0][filters][0][condition_type]=eq
```

Both `quick_search_container` and `catalog_view_container` are equipped by default to return aggregations, specifying the particular buckets of results. This is not true for `advanced_search_container`.
