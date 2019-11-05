---
group: rest-api
title: Search using the /search endpoint
---

By using `GET {{URL}}rest/V1/search` one can search through the catalog. The obtained results will come from the selected search engine (System -> Configuration -> Catalog -> Catalog Search -> Search engine).
This means, one is able to collect results from Elasticsearch for example, having possible result sets very similar to the ones that are visible by using the regular frontend search.

There are three types of request queries that are provided by default
* quick_search_container
* catalog_view_container
* advanced_search_container


All of them run against the `catalogsearch_fulltext` index.

The basic usage is:

```
GET {{URL}}rest/V1/search?searchCriteria[requestName]=quick_search_container&
searchCriteria[filter_groups][0][filters][0][field]=search_term&
searchCriteria[filter_groups][0][filters][0][value]=Shirt
```

If one would like to combine more than one word in the search, then, simply separate the words with an empty space, just like you would do in the regular search box

```
GET {{URL}}rest/V1/search?searchCriteria[requestName]=quick_search_container&
searchCriteria[filter_groups][0][filters][0][field]=search_term&
searchCriteria[filter_groups][0][filters][0][value]=Polo Shirt
```

Please notice that the search term can be applied to any searchable attribute (`Use in search` is set to `Yes`). So the search query can be part of the product name, sku or any other custom attribute that you have.

Each searchable attribute has its search boost, and this defaults to 1.
Exceptions are `sku` with boost 6 and product `name` with boost 5.

For both the `quick_search_container` and `catalog_view_container` there are three filters available by default
* category_ids
* price (from, to)
* visibility

The `advanced_search_container` has the following filters
* category_ids
* price (from, to)
* sku

For more details, please check `Magento/CatalogSearch/etc/search_request.xml`

A sample usage of the filters may be:

* Get products within a price range

```
searchCriteria[requestName]=advanced_search_container&
searchCriteria[filter_groups][0][filters][0][field]=price.from&
searchCriteria[filter_groups][0][filters][0][value]=2&
searchCriteria[filter_groups][0][filters][1][field]=price.to&
searchCriteria[filter_groups][0][filters][1][value]=3
```

* Get product where the SKU might contain some string

```
searchCriteria[requestName]=advanced_search_container&
searchCriteria[filter_groups][0][filters][0][field]=sku&
searchCriteria[filter_groups][0][filters][0][value]=shirt&
searchCriteria[filter_groups][0][filters][0][condition_type]=like
```

* Get all products from a given category

```
searchCriteria[requestName]=catalog_view_container&
searchCriteria[filter_groups][0][filters][0][field]=category_ids&
searchCriteria[filter_groups][0][filters][0][value][0]=4&
searchCriteria[filter_groups][0][filters][0][condition_type]=eq
```

Both `quick_search_container` and `catalog_view_container` are equiped by default to return aggregations, specifying the particular buckets of results (but not the `advanced_search_container`).