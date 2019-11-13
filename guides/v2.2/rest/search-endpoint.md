---
group: rest-api
title: Search with the /search endpoint
contributor_name: comwrap GmbH
contributor_link: https://www.comwrap.com/
---

By using `<host>/rest/<store_code>/V1/search`, you can search through the catalog. The response will come from your configured search engine (**Stores** > Settings > **Configuration** > **Catalog** > **Catalog Search** > **Search engine**).
This means you can collect results from the search engine that is enabled. These results are the same as those returned by using the regular frontend search.

Magento provides three types of request queries by default:

*  quick_search_container
*  catalog_view_container
*  advanced_search_container

All of them run against the `catalogsearch_fulltext` index.

The basic usage is:

```http
GET <host>/rest/<store_code>/V1/search?searchCriteria[requestName]=quick_search_container&
searchCriteria[filter_groups][0][filters][0][field]=search_term&
searchCriteria[filter_groups][0][filters][0][value]=TermA
```
To specify more than one word in the search, separate the words with an empty space, just like you would do in the regular search box:

```http
GET <host>/rest/<store_code>/V1/search?searchCriteria[requestName]=quick_search_container&
searchCriteria[filter_groups][0][filters][0][field]=search_term&
searchCriteria[filter_groups][0][filters][0][value]=TermA TermB
```

The search term can be applied to any searchable attribute. To make an attribute searchable, set **Stores** > Attributes > **Product** > <selected_attribute> >  **Storefront Properties** > **Use in Search** to **Yes**. The search query can include the product name, SKU, or any other custom attribute.

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
GET <host>/rest/<store_code>/V1/search?searchCriteria[requestName]=advanced_search_container&
searchCriteria[filter_groups][0][filters][0][field]=price.from&
searchCriteria[filter_groups][0][filters][0][value]=2&
searchCriteria[filter_groups][0][filters][1][field]=price.to&
searchCriteria[filter_groups][0][filters][1][value]=3
```

### Get products where the SKU might contain a specified string

```http
GET <host>/rest/<store_code>/V1/search?searchCriteria[requestName]=advanced_search_container&
searchCriteria[filter_groups][0][filters][0][field]=sku&
searchCriteria[filter_groups][0][filters][0][value]=shirt&
searchCriteria[filter_groups][0][filters][0][condition_type]=like
```

### Get all products from a given category

```http
GET <host>/rest/<store_code>/V1/search?searchCriteria[requestName]=catalog_view_container&
searchCriteria[filter_groups][0][filters][0][field]=category_ids&
searchCriteria[filter_groups][0][filters][0][value][0]=4&
searchCriteria[filter_groups][0][filters][0][condition_type]=eq
```

## Some differences between the search types

* Only the `quick_search_container` san use `search_term` as field
* Both `quick_search_container` and `catalog_view_container` are equipped by default to return aggregations, specifying the particular buckets of results. This is not true for `advanced_search_container`.
* The `catalog_view_container` can query for product visibility, the `advanced_search_container` cannot
* The `advanced_search_container` can query for product sku (and use any condition, e.g. `eq`, `like`, `finset` etc.), the `catalog_view_container` cannot


## Some differences between GET V1/search and GET V1/products

Property | Products | Search
--- | --- | ---
Needs authorization token| Yes | No
Direct access to product data | Yes | No (the Search engine acts as proxy)
Can specify any product attribute | Yes | No
Has product data in the response | Yes | No
Usage feels like | Admin panel product grid search | Frontend catalog search
Results sorted by search relevance | No | Yes
Has aggregations/buckets in the response | No | `quick_search_container` and `catalog_view_container`

##Summary

The `V1/search` endpoint is likely more useful assuming you have only human (or human like) search terms at hand, targeted to isolate only one, or a really limited set of products. The added benefit is that the results are pre-sorted by their applicable search relevance.

In all other cases, for example when building and filtering product collections, and especially when other non-human backend data is available, e.g. attribute's options ids, the `V1/products` endpoint is always a good choice.