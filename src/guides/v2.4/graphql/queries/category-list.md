---
group: graphql
title: categoryList query
---

The `categoryList` query searches for categories that match the criteria specified in filters. It replaces the deprecated `category` query, which allowed you to search by category ID only.

{:.bs-callout-info}
This query does not support pagination. Use the [`categories` query]({{page.baseurl}}/graphql/queries/categories.html) if you expect to return a large number of categories.

The `categoryList` query supports the following types of filters. You can specify multiple filters in a query.

-  Category ID
-  Category name
-  URL key
-  URL path

If you do not provide any filter input, the query returns the root category.

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

**Request:**

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

**Response:**

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

The following query returns breadcrumb information about categories that have the name `Tops`.

**Request:**

```graphql
{
  categoryList(filters: {name: {match: "Tops"}}) {
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

**Response:**

```json
{
  "data": {
    "categoryList": [
      {
        "id": 12,
        "level": 3,
        "name": "Tops",
        "breadcrumbs": [
          {
            "category_id": 11,
            "category_name": "Men",
            "category_level": 2,
            "category_url_key": "men"
          }
        ]
      },
      {
        "id": 21,
        "level": 3,
        "name": "Tops",
        "breadcrumbs": [
          {
            "category_id": 20,
            "category_name": "Women",
            "category_level": 2,
            "category_url_key": "women"
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

{% include graphql/category-filter-input.md %}

## Output attributes {#Categories}

The query returns a `CategoryTree` object, which implements [`CategoryInterface`]({{page.baseurl}}/graphql/interfaces/category-interface.html). The `CategoryTree` object can contain the following attribute and all attributes defined in `CategoryInterface`:

Attribute | Data type | Description
--- | --- | ---
`children` | `CategoryTree` | An array containing the next level of subcategories. By default, you can specify up to 10 levels of child categories
