---
group: graphql
title: category endpoint
---

The `category` endpoint allows you to search for a single category definition or the entire category tree. To return multiple category levels in a single call, define the response so that it contains up to ten nested `children` options. You cannot return the entire category tree if it contains more than 10 sublevels unless the `queryDepth` parameter in the GraphQL `di.xml` file has been reconfigured.

## Query structure

``` text
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
`breadcrumbs` | `Breadcrumb` | A `Breadcrumb` object contains information the categories that comprise the breadcrumb trail for the specified category
`children` | `CategoryTree` | A `CategoryTree` object that contains information about a child category. You can specify up to 10 levels of child categories.
`created_at`| String | Timestamp indicating when the category was created
`default_sort_by`| String | The attribute to use for sorting
`description`| String | An optional description of the category
`id` | Int | An ID that uniquely identifies the category
`level` | Int | Indicates the depth of the category within the tree
`name`| String | The display name of the category
`path_in_store`| String | Category path in the store
`path`| String | The path to the category, as a string of category IDs, separated by slashes (/). For example, `1/2/20`
`position`| Int | The position of the category relative to other categories at the same level in tree
`product_count`| Int | The number of products in the category
`products(<attributes>)` | `CategoryProducts` | The list of products assigned to the category
`updated_at`| String | Timestamp indicating when the category was updated
`url_key`| String | The url key assigned to the category
`url_path`| String | The url path assigned to the category

#### CategoryProducts object

The `products` attribute can contain the following attributes:

Attribute | Data type | Description
--- | --- | ---
`currentPage` | Int |  Specifies which page of results to return. The default value is 1.
`pageSize` | Int | Specifies the maximum number of results to return at once. This attribute is optional. The default value is 20.
`sort` | `ProductSortInput` | Specifies which attribute to sort on, and whether to return the results in ascending or descending order. [Searches and pagination in GraphQL]({{ page.baseurl }}/graphql/search-pagination.html) describes sort orders.

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
`category_level` | Int | Indicates the depth of the category within the tree
`category_name` | String |  The display name of the category
`category_url_key` | String | The url key assigned to the category

#### CategoryTree object

This `CategoryTree` object contains information about the next level of subcategories of the category specified in the original query.

Attribute | Data type | Description
--- | --- | ---
`children` | [CategoryTree] | An array containing the next level of subcategories

## Sample Queries

The following query returns information about category ID `20` and four levels of subcategories. In the sample data, category ID `20` is assigned to the "Women" category.

**Request**

``` text
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
**Response**

```json
{
  "data": {
    "category": {
      "products": {
        "total_count": 0,
        "page_info": {
          "current_page": 1,
          "page_size": 20
        }
      },
      "children_count": "8",
      "children": [
        {
          "id": 21,
          "level": 3,
          "name": "Tops",
          "path": "1/2/20/21",
          "children": []
        },
        {
          "id": 22,
          "level": 3,
          "name": "Bottoms",
          "path": "1/2/20/22",
          "children": [
            {
              "id": 23,
              "level": 4,
              "name": "Jackets",
              "path": "1/2/20/21/23",
              "children": []
            },
            {
              "id": 24,
              "level": 4,
              "name": "Hoodies & Sweatshirts",
              "path": "1/2/20/21/24",
              "children": []
            },
            {
              "id": 25,
              "level": 4,
              "name": "Tees",
              "path": "1/2/20/21/25",
              "children": []
            },
            {
              "id": 26,
              "level": 4,
              "name": "Bras & Tanks",
              "path": "1/2/20/21/26",
              "children": []
            },
            {
              "id": 27,
              "level": 4,
              "name": "Pants",
              "path": "1/2/20/22/27",
              "children": []
            },
            {
              "id": 28,
              "level": 4,
              "name": "Shorts",
              "path": "1/2/20/22/28",
              "children": []
            }
          ]
        }
      ]
    }
  }
}
```

The following query returns breadcrumb information about the women's tops category (`id` = 25).

**Request**

``` text
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

**Response**

```json
{
  "data": {
    "category": {
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
  }
}
```
