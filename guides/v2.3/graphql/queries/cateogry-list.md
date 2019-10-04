---
group: graphql
title: categoryList query
---

The `categoryList` query searches for categories that match the criteria specified in filters. It replaces the deprecated `category` query, which allowed you to search by category ID only.

The `categoryList` query supports the following types of filters. You can specify multiple filters in a query.

-  Category ID
-  Display name
-  URL Key

The query returns a `CategoryTree` object. The top level of the `CategoryTree` object provides details about the queried category. This object includes the `children` attribute, which contains an array of its immediate subcategories. To return multiple category levels in a single call, define the response so that it contains up to ten nested `children` options.

{:.bs-callout-info}
You cannot return the entire category tree if it contains more than ten sublevels unless the `queryDepth` parameter in the GraphQL `di.xml` file has been reconfigured.

Use the `breadcrumbs` attribute to return information about the parent categories of the queried category.

## Syntax

```graphql
categoryList (
   filters: CategoryFilterInput
): CategoryTree
```

## Example usage

### Return the category tree of a top-level category

The following query returns information about category IDs `11` and `20` and two levels of subcategories. In the sample data, category IDs `11` and `20` are assigned to the `Men` and `Women` categories, respectively.

**Request**

```graphql
{
  categoryList(filters: {ids: {in: ["11", "20"]}}) {
    children_count
    children {
      id
      level
      name
      path
      url_path
      url_key
      children {
        id
        level
        name
        path
        url_path
        url_key
      }
    }
  }
}
```

**Response**

```json
{
  "data": {
    "categoryList": [
      {
        "children_count": "8",
        "children": [
          {
            "id": 13,
            "level": 3,
            "name": "Bottoms",
            "path": "1/2/11/13",
            "url_path": "men/bottoms-men",
            "url_key": "bottoms-men",
            "children": [
              {
                "id": 18,
                "level": 4,
                "name": "Pants",
                "path": "1/2/11/13/18",
                "url_path": "men/bottoms-men/pants-men",
                "url_key": "pants-men"
              },
              {
                "id": 19,
                "level": 4,
                "name": "Shorts",
                "path": "1/2/11/13/19",
                "url_path": "men/bottoms-men/shorts-men",
                "url_key": "shorts-men"
              }
            ]
          },
          {
            "id": 12,
            "level": 3,
            "name": "Tops",
            "path": "1/2/11/12",
            "url_path": "men/tops-men",
            "url_key": "tops-men",
            "children": [
              {
                "id": 14,
                "level": 4,
                "name": "Jackets",
                "path": "1/2/11/12/14",
                "url_path": "men/tops-men/jackets-men",
                "url_key": "jackets-men"
              },
              {
                "id": 15,
                "level": 4,
                "name": "Hoodies & Sweatshirts",
                "path": "1/2/11/12/15",
                "url_path": "men/tops-men/hoodies-and-sweatshirts-men",
                "url_key": "hoodies-and-sweatshirts-men"
              },
              {
                "id": 16,
                "level": 4,
                "name": "Tees",
                "path": "1/2/11/12/16",
                "url_path": "men/tops-men/tees-men",
                "url_key": "tees-men"
              },
              {
                "id": 17,
                "level": 4,
                "name": "Tanks",
                "path": "1/2/11/12/17",
                "url_path": "men/tops-men/tanks-men",
                "url_key": "tanks-men"
              }
            ]
          }
        ]
      },
      {
        "children_count": "8",
        "children": [
          {
            "id": 22,
            "level": 3,
            "name": "Bottoms",
            "path": "1/2/20/22",
            "url_path": "women/bottoms-women",
            "url_key": "bottoms-women",
            "children": [
              {
                "id": 27,
                "level": 4,
                "name": "Pants",
                "path": "1/2/20/22/27",
                "url_path": "women/bottoms-women/pants-women",
                "url_key": "pants-women"
              },
              {
                "id": 28,
                "level": 4,
                "name": "Shorts",
                "path": "1/2/20/22/28",
                "url_path": "women/bottoms-women/shorts-women",
                "url_key": "shorts-women"
              }
            ]
          },
          {
            "id": 21,
            "level": 3,
            "name": "Tops",
            "path": "1/2/20/21",
            "url_path": "women/tops-women",
            "url_key": "tops-women",
            "children": [
              {
                "id": 23,
                "level": 4,
                "name": "Jackets",
                "path": "1/2/20/21/23",
                "url_path": "women/tops-women/jackets-women",
                "url_key": "jackets-women"
              },
              {
                "id": 24,
                "level": 4,
                "name": "Hoodies & Sweatshirts",
                "path": "1/2/20/21/24",
                "url_path": "women/tops-women/hoodies-and-sweatshirts-women",
                "url_key": "hoodies-and-sweatshirts-women"
              },
              {
                "id": 25,
                "level": 4,
                "name": "Tees",
                "path": "1/2/20/21/25",
                "url_path": "women/tops-women/tees-women",
                "url_key": "tees-women"
              },
              {
                "id": 26,
                "level": 4,
                "name": "Bras & Tanks",
                "path": "1/2/20/21/26",
                "url_path": "women/tops-women/tanks-women",
                "url_key": "tanks-women"
              }
            ]
          }
        ]
      }
    ]
  }
}
```

### Return breadcrumb information

The following query returns breadcrumb information about the women's `Tops` category (`id` = 25).

**Request**

```graphql
{
  categoryList(filters: {ids: {eq: "25"}}) {
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

**Response**

```json
{
  "data": {
    "categoryList": [
      {
        "id": 25,
        "level": 4,
        "name": "Tees",
        "breadcrumbs": [
          {
            "category_id": 20,
            "category_name": "Women",
            "category_level": 2,
            "category_url_key": "women"
          },
          {
            "category_id": 21,
            "category_name": "Tops",
            "category_level": 3,
            "category_url_key": "tops-women"
          }
        ]
      }
    ]
  }
}
```

## Input attributes

You must specify the `filters` attribute as input to your query.

Attribute | Data type | Description
--- | --- | ---
`filters` | CategoryFilterInput | Contains filter definitions

### CategoryFilterInput object

The `CategoryFilterInput` object defines the filters to be used in this query.

Attribute | Data type | Description
--- | --- | ---
`ids` | FilterEqualTypeInput | Filters by the specified category IDs
`name` | FilterMatchTypeInput | Filters by the display name of the category
`url_key` | FilterEqualTypeInput | Filters by the part of the URL that identifies the category

### FilterEqualTypeInput object

Use the `FilterEqualTypeInput` object to construct filters that search by category ID or URL key.

Attribute | Data type | Description
--- | --- | ---
`eq` | String | Use this attribute to exactly match the specified string. For example, to filter on a specific URL key, specify a value like `shorts-women`
`in` | [String] | Use this attribute to filter on an array of values. For example, to filter on category IDs 4, 5, and 6, specify a value of `["4", "5", "6"]`

### FilterMatchTypeInput object

Use the `FilterMatchTypeInput` object to construct a filter that matches the specified display name.

Attribute | Data type | Description
--- | --- | ---
`match` | String | Use this attribute to perform a fuzzy match on the specified string. For example, to filter on a specific category name, specify a value such as `Tops`

## Output attributes {#Categories}

The query returns a `CategoryTree` object, which implements `CategoryInterface`. It can contain the following top-level attributes:

Attribute | Data type | Description
--- | --- | ---
`breadcrumbs` | `Breadcrumb` | A `Breadcrumb` object contains information about the categories that comprise the breadcrumb trail for the specified category
`children` | `CategoryTree` | A `CategoryTree` object that contains information about a child category. You can specify up to 10 levels of child categories
`created_at`| String | Timestamp indicating when the category was created
`default_sort_by`| String | The attribute to use for sorting
`description`| String | An optional description of the category
`id` | Int | An ID that uniquely identifies the category
`level` | Int | Indicates the depth of the category within the tree
`name`| String | The display name of the category
`path_in_store`| String | The category path in the store
`path`| String | The path to the category, as a string of category IDs, separated by slashes (/). For example, `1/2/20`
`position`| Int | The position of the category relative to other categories at the same level in tree
`product_count`| Int | The number of products in the category
`products(<attributes>)` | `CategoryProducts` | The list of products assigned to the category
`updated_at`| String | Timestamp indicating when the category was updated
`url_key`| String | The URL key assigned to the category
`url_path`| String | The URL path assigned to the category
`url_suffix` | String | The part of the URL that is appended to the `url_key`, such as `.html`. This attribute is defined in the `CatalogUrlRewriteGraphQl` module

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
`items` | [[ProductInterface]]({{ page.baseurl }}/graphql/product/product-interface.html) | An array of products that are assigned to the category
`page_info` | `SearchResultPageInfo` | An object that includes the `page_info` and `currentPage` values specified in the query
`total_count` | Int | The number of products returned

### Breadcrumb object

A breadcrumb trail is a set of links that shows customers where they are in relation to other pages in the
store.

Attribute | Data type | Description
--- | --- | ---
`category_id` | Int | An ID that uniquely identifies the category
`category_level` | Int | Indicates the depth of the category within the tree
`category_name` | String |  The display name of the category
`category_url_key` | String | The url key assigned to the category
`category_url_path` | String | The URL path of the category

### CategoryTree object

This `CategoryTree` object contains information about the next level of subcategories of the category specified in the original query.

Attribute | Data type | Description
--- | --- | ---
`children` | [CategoryTree] | An array containing the next level of subcategories
