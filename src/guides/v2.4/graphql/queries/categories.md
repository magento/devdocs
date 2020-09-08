---
group: graphql
title: categories query
---

The `categories` query returns a list of categories that match the specified filter. This query differs from the `categoryList` query in that it supports pagination.

The `categories` query supports the following types of filters. You can specify multiple filters in a query.

-  Category ID
-  Category name
-  URL key
-  URL path

The query returns a `CategoryResult` object, which contains pagination information and an array of `CategoryTree` items. The top level of the `CategoryTree` object provides details about the queried category. This object includes the `children` attribute, which contains an array of its immediate subcategories. To return multiple category levels in a single call, define the response so that it contains up to ten nested `children` options.

{:.bs-callout-info}
You cannot return the entire category tree if it contains more than ten sublevels unless the `queryDepth` parameter in the GraphQL `di.xml` file has been reconfigured.

Use the `breadcrumbs` attribute to return information about the parent categories of the queried category.

## Syntax

```graphql
categories(filters: CategoryFilterInput pageSize: Int currentPage: Int): CategoryResult
```

## Example usage

The following query returns the top-level categories (as well as two levels of children) displayed on the Luma storefront. Because the `currentPage` attribute is set to `2`, the second page of results are returned.

**Request:**

```graphql
{
  categories(filters: {ids: {in: ["3", "9", "11", "20", "37", "38"]}} pageSize:3 currentPage: 2){
    total_count
    items {
      id
      level
      name
      path
      children_count
      children {
        id
        level
        name
        path
        children_count
        children {
          id
          level
          name
          path
        }
      }
    }
    page_info {
      current_page
      page_size
      total_pages
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "categories": {
      "total_count": 6,
      "items": [
        {
          "id": 20,
          "level": 2,
          "name": "Women",
          "path": "1/2/20",
          "children_count": "8",
          "children": [
            {
              "id": 22,
              "level": 3,
              "name": "Bottoms",
              "path": "1/2/20/22",
              "children_count": "2",
              "children": [
                {
                  "id": 27,
                  "level": 4,
                  "name": "Pants",
                  "path": "1/2/20/22/27"
                },
                {
                  "id": 28,
                  "level": 4,
                  "name": "Shorts",
                  "path": "1/2/20/22/28"
                }
              ]
            },
            {
              "id": 21,
              "level": 3,
              "name": "Tops",
              "path": "1/2/20/21",
              "children_count": "4",
              "children": [
                {
                  "id": 23,
                  "level": 4,
                  "name": "Jackets",
                  "path": "1/2/20/21/23"
                },
                {
                  "id": 24,
                  "level": 4,
                  "name": "Hoodies & Sweatshirts",
                  "path": "1/2/20/21/24"
                },
                {
                  "id": 25,
                  "level": 4,
                  "name": "Tees",
                  "path": "1/2/20/21/25"
                },
                {
                  "id": 26,
                  "level": 4,
                  "name": "Bras & Tanks",
                  "path": "1/2/20/21/26"
                }
              ]
            }
          ]
        },
        {
          "id": 37,
          "level": 2,
          "name": "Sale",
          "path": "1/2/37",
          "children_count": "0",
          "children": []
        },
        {
          "id": 38,
          "level": 2,
          "name": "What's New",
          "path": "1/2/38",
          "children_count": "0",
          "children": []
        }
      ],
      "page_info": {
        "current_page": 2,
        "page_size": 3,
        "total_pages": 2
      }
    }
  }
}
```

## Input attributes

If you omit the `filters` attribute, the query returns the store's default root category.

Attribute | Data type | Description
--- | --- | ---
`filters` | CategoryFilterInput | Contains filter definitions
`pageSize` | Int | Specifies the maximum number of results to return at once. The default value is 20
`currentPage` | Int | Specifies which page of results to return. The default value is 1

### CategoryFilterInput object

{% include graphql/category-filter-input.md %}

## Output attributes {#Categories}

The `categories` query returns a `CategoryResult` object, which contains the following attributes:

Attribute | Data type | Description
--- | --- | ---
`items` | [CategoryTree] | A list of categories that match filter criteria
`page_info`| SearchResultPageInfo | An object that includes the `page_info` and `currentPage` values specified in the query.
`total_count` | Int | The total number of categories that match the criteria

### CategoryTree attributes

The `items` attribute contains a `CategoryTree` object, which implements [`CategoryInterface`]({{page.baseurl}}/graphql/interfaces/category-interface.html). The `CategoryTree` object can contain the following attribute and all attributes defined in `CategoryInterface`:

Attribute | Data type | Description
--- | --- | ---
`children` | `CategoryTree` | An array containing the next level of subcategories. By default, you can specify up to 10 levels of child categories

### SearchResultPageInfo

Attribute | Data type | Description
--- | --- | ---
current_page | Int | Specifies which page of results to return
page_size | Int | Specifies the maximum number of items to return
total_pages | Int | Total pages
