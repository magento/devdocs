---
group: graphql
title: category endpoint
version: 2.3
---

The `category` endpoint allows you to search for a single category definition or the entire category tree. To return multiple category levels in a single call, define the response so that it contains up to ten nested `children` options. You cannot return the entire category tree if it contains more than 10 sublevels.

## Query structure

``` 
category (
   id: int
): CategoryTree
```

### Input attributes

Attribute | Data type | Description
--- | --- | ---
`id` | Int | The category ID to use as the starting point of your category search.

### Output attributes {#Categories}

The query returns a `CategoryTree` object, which implements `CategoryInterface`. It can contain the following top-level attributes:

Attribute | Data type | Description
--- | --- | ---
`id` | Int | An ID that uniquely identifies the category
`description`| String | An optional description of the category
`name`| String | The display name of the category
`path`| String | The path to the category, as a string of category IDs, separated by slashes (/). For example, `1/2/20`
`path_in_store`| String | Category path in the store
`url_key`| String | The url key assigned to the category
`url_path`| String | The url path assigned to the category
`position`| Int | The position of the category relative to other categories at the same level in tree
`level` | Int | Indicates the depth of the category within the tree
`created_at`| String | Timestamp indicating when the category was created
`updated_at`| String | Timestamp indicating when the category was updated
`product_count`| Int | The number of products in the category
`default_sort_by`| String | The attribute to use for sorting
`products(<attributes>)` | `CategoryProducts` | The list of products assigned to the category
`breadcrumbs` | `Breadcrumb` |
`children` | `CategoryTree` | A `CategoryTree` object that contains information about a child category. You can specify up to 10 levels of child categories.


#### CategoryProducts object

The `products` attribute can contain the following attributes:

Attribute | Data type | Description
--- | --- | ---
`pageSize` | Int | Specifies the maximum number of results to return at once. This attribute is optional. The default value is 20.
`currentPage` | Int |  Specifies which page of results to return. The default value is 1.
`sort` | `ProductSortInput` | Specifies which attribute to sort on, and whether to return the results in ascending or descending order. See [Searches and pagination in GraphQL]({{ page.baseurl }}/graphql/search-pagination.html) for more information.

The `CategoryProducts` object contains the following attributes:

Attribute | Data type | Description
--- | --- | ---
`items` | [ProductInterface] | An array of products that are assigned to the category. See [ProductInterface]({{ page.baseurl }}/graphql/reference/products.html#ProductInterface) for more information.
`page_info` | `SearchResultPageInfo` | An object that includes the `page_info` and `currentPage` values specified in the query
`total_count` | Int | The number of products returned


#### Breadcrumb object

A breadcrumb trail is a set of links that shows customers where they are in relation to other pages in the
store.

Attribute | Data type | Description
--- | --- | ---
`category_id` | Int | An ID that uniquely identifies the category
`category_name` | String |  The display name of the category
`category_level` | Int | Indicates the depth of the category within the tree
`category_url_key` | String | The url key assigned to the category


## Sample Queries

The following query returns information about category ID `20` and four levels of subcategories. In the sample data, category ID `20` is assigned to the "Women" category.

```
{
  category(id: 20) {
    products {
      total_count
      page_info {
        current_page
        page_size
      }
    }
    children_count
    children {
        id
        level
        name
        path
        children {
          id
          level
          name
          path
          children {
            id
            level
            name
            path
            children {
              id
              level
              name
              path
            }
          }
        }
      }
  }
}
```

The following query returns breadcrumb information about the women's tops category (`id` = 25).

```
{
  category (
   id: 25
) {
    id
    level
    name
    breadcrumbs {
      category_id
      category_name
      category_level
      category_url_key
    }
  }
}
```
