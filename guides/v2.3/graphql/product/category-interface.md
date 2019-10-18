---
group: graphql
title: CategoryInterface attributes
---

`CategoryInterface` defines attributes that can be returned in the [`category` query]({{page.baseurl}}/graphql/queries/category.html) and the [`products` query]({{page.baseurl}}/graphql/queries/products.html).

## CategoryInterface attributes

The following table defines the `CategoryInterface` attributes and objects.

Attribute | Type | Description
--- | --- | ---
`breadcrumbs` | [Breadcrumb] | A Breadcrumb object contains information the categories that comprise the breadcrumb trail for the specified category
`created_at` | String | Timestamp indicating when the category was created
`default_sort_by` | String | The attribute to use for sorting
`description` | String | An optional description of the category
`id` | Int | An ID that uniquely identifies the category
`level` | Int | Indicates the depth of the category within the tree
`name` | String | The display name of the category
`path_in_store` | String | Category path in the store
`path` | String | The path to the category, as a string of category IDs, separated by slashes (/). For example, 1/2/20
`position` | Int | The position of the category relative to other categories at the same level in tree
`product_count` | Int | The number of products in the category
`products(<attributes>)` | CategoryProducts | The list of products assigned to the category
`updated_at` | String | Timestamp indicating when the category was updated
`url_key` | String | The URL key assigned to the category
`url_path` | String | The URL path assigned to the category

### Breadcrumb object

A breadcrumb trail is a set of links that shows customers where they are in relation to other pages in the
store.

Attribute | Data type | Description
--- | --- | ---
`category_id` | Int | An ID that uniquely identifies the category
`category_level` | Int | Indicates the depth of the category within the tree
`category_name` | String |  The display name of the category
`category_url_key` | String | The url key assigned to the category

### CategoryProducts object

The `products` attribute can contain the following attributes:

Attribute | Data type | Description
--- | --- | ---
`currentPage` | Int |  Specifies which page of results to return. The default value is 1
`pageSize` | Int | Specifies the maximum number of results to return at once. This attribute is optional. The default value is 20
`sort` | `ProductSortInput` | Specifies which attribute to sort on, and whether to return the results in ascending or descending order. [Searches and pagination in GraphQL]({{ page.baseurl }}/graphql/search-pagination.html) describes sort orders

The `CategoryProducts` object contains the following attributes:

Attribute | Data type | Description
--- | --- | ---
`items` | [ProductInterface] | An array of products that are assigned to the category. See [ProductInterface]({{ page.baseurl }}/graphql/product/product-interface.html) for more information
`page_info` | `SearchResultPageInfo` | An object that includes the `page_info` and `currentPage` values specified in the query
`total_count` | Int | The number of products returned
