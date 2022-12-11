---
group: live-search
title: Facets
ee_only: True
redirect_to: https://experienceleague.adobe.com/docs/commerce-merchant-services/live-search/live-search-admin/facets/facets.html
layout: migrated
---

Faceting is a high-performance filtering method that uses multiple dimensions of searchable static and dynamic attribute values as search criteria. The available facets appear in the left sidebar of search results pages, with the most commonly used facets “pinned” to the top of the list. The [`productSearch` query]({{ site.baseurl }}/live-search/product-search.html) contains an example where facets have been configured.

{:.bs-callout-info}
Go to [Facets]({{ site.user_guide_url }}/live-search/facets.html) in the _{{site.data.var.ee}} User Guide_ for information about facet setup, attribute requirements, [types of facets]({{ site.user_guide_url }}/live-search/facets-type.html), and their use from the Admin and storefront.

## Facet aggregation

Facet aggregation is performed as follows if the storefront has three facets (categories, color and price) and the shopper filters on all three (color = blue, price is from $10.00-50.00, categories = `promotions`).

-  `categories` aggregation - Aggregates `categories`, applies `color` and `price` filters, but not the `categories` filter.
-  `color` aggregation - Aggregates `color`, applies `price` and `categories` filters, but not the `color` filter.
-  `price` aggregation - Aggregates `price`, applies `color` and `categories` filters, but not the `price` filter.

## Default attribute values

Product attributes have some [storefront properties]({{ site.user_guide_url }}/stores/attributes-product.html) that are enabled by default.

|**Property**|**Storefront Property**|**Attribute**
|---|---|---|
| Sortable | Used for Sorting in Product Listing | `price`|
| Searchable | Use in Search | `price` <br />`sku`<br />`name`|
| FilterableInSearch | Use in Layered Navigation - Filterable (with results)| `price`<br />`visibility`<br />`category_name`|
