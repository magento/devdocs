---
group: live-search
title: Facets
ee_only: True
---

Faceting is a high-performance filtering method that uses multiple dimensions of searchable static and dynamic attribute values as search criteria. The available facets appear in the left sidebar of search results pages, with the most commonly used facets “pinned” to the top of the list.

{:.bs-callout-info}
Go to [Facets](https://docs.magento.com/user-guide/live-search/facets.html) in the _Magento Commerce User Guide_ for information about facet setup, attribute requirements, and their use from the Admin and storefront.

## Types of facets

There are two types of facets: Pinned and dynamic.

### Pinned

Merchants can pin commonly-used facets to the top of the list.

### Dynamic

Dynamic facets appear only when relevant, and the selection changes according to the products returned. In the storefront Filters list, dynamic facets appear in alphabetic order after any pinned facets. To streamline search results, facets are set to `dynamic` by default.

Intelligent facets are product attributes that our Adobe Sensei AI platform finds extremely relevant to the given product set and query. This calculation takes into account the attribute meta data of the entire catalog and determines relevance at query time to deliver the most relevant facets for any query.  

Popular facets are product attributes that are most often present in the result set. 

## Select type

A facet can be either single- or multi-select, based on the [input type](https://docs.magento.com/user-guide/stores/attributes-input-types.html) that is assigned to the corresponding attribute.

|**Select type**|**Description**|*
|---|---|
|Single select |A single-select facet offers multiple options, but allows the shopper to choose only one. Examples: Dropdown, Visual Swatch or Text Swatch|
|Multi-select| A multi-select facet allows a shopper to choose more than one option. The logical operator that is assigned to a multi-select facet determines the product set that is returned. Options: <br />- Multi-select (or) - The returned products match any of the selected values.<br />- Multi-select (and) - The returned products match all selected facet values.

### Facet aggregation

Facet aggregation is performed as follows if the storefront has three facets (categories, color and price) and the shopper filters on all three (color = blue, price is from $10.00-50.00, categories = `promotions`).

-  `categories` aggregation - Aggregates `categories`, applies `color` and `price` filters, but not the `categories` filter.
-  `color` aggregation - Aggregates `color`, applies `price` and `categories` filters, but not the `color` filter.
-  `price` aggregation - aggregates `price`, applies `color` and `categories` filters, but not the `price` filter.

## Default attribute values

The following product attributes have hardcoded properties that correspond to their default [Storefront Property](https://docs.magento.com/user-guide/stores/attributes-product.html) settings in the Admin.

|**Property**|**Storefront Property**|**Attribute**
|---|---|---|
| Sortable | Used for Sorting in Product Listing | `price`|
| Searchable | Use in Search | `price` <br />`sku`<br />`name`|
| FilterableInSearch | Use in Layered Navigation - Filterable (with results)| `price`<br />`visibility`<br />[category_name]|

## Facet type examples

A search of the Luma catalog for “bag” returns the following facet types:

```text
"type": "PINNED"
"type": "INTELLIGENT"
"type": "POPULAR"
```
### Example query

```graphql
query {query {
   productSearch(
      phrase: "bag",
      page_size: 100,
      sort: [{attribute: "price", direction: DESC}]  )   {
         total_count
         facets {
            title
            attribute
            type }
         suggestions
         page_info {
            current_page
            page_size
            total_pages  }
         }
      }
```

### Example response

```json
{
  "extensions": {
    "request-id": "gck5NeAlTFBifkXkAWIcqsw2HxPYzmIy"
  },
  "data": {
    "productSearch": {
      "total_count": 13,
      "facets": [
        {
          "title": "Categories",
          "attribute": "categories",
          "type": "PINNED"
        },
        {
          "title": "Price",
          "attribute": "price",
          "type": "PINNED"
        },
        {
          "title": "Material",
          "attribute": "material",
          "type": "INTELLIGENT"
        },
        {
          "title": "Color",
          "attribute": "color",
          "type": "INTELLIGENT"
        },
        {
          "title": "Eco Collection",
          "attribute": "eco_collection",
          "type": "POPULAR"
        },
        {
          "title": "Climate",
          "attribute": "climate",
          "type": "POPULAR"
        }
      ],
      "suggestions": [
        "bag",
        "bag-orange",
        "duffle bag",
        "it messenger bag",
        "wayfarer messenger bag"
      ],
      "page_info": {
        "current_page": 1,
        "page_size": 13,
        "total_pages": 1
      }
    }
  },
  "status": 200
}
```
