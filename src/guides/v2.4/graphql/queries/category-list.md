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
-  Parent category ID
-  URL key
-  URL path

If you do not provide any filter input, the query returns the root category.

The query returns a `CategoryTree` object. The top level of the `CategoryTree` object provides details about the queried category. This object includes the `children` attribute, which contains an array of its immediate subcategories.

{:.bs-callout-info}
You cannot return the entire category tree if the total number of nodes in the request exceeds the value specified in the `queryDepth` attribute defined in the GraphQL `di.xml` file. By default, this value is 20. [Query security]({{page.baseurl}}/graphql/security-configuration.html) further describes query depths.

Use the `breadcrumbs` attribute to return information about the parent categories of the queried category.

## Syntax

```graphql
categoryList (
   filters: CategoryFilterInput
): CategoryTree
```

## Example usage

### Return the category tree of a top-level category

The following query returns information about category IDs `12` and `21` and two levels of subcategories. In the sample data, category IDs `11` and `20` are assigned to the `Men` and `Women` categories, respectively.

**Request:**

```graphql
{
  categoryList(
    filters: {
      ids: {in: ["12", "21"]}
      parent_id: {in: ["2"]}
    }
  ) {
    children_count
    children {
      uid
      level
      name
      path
      url_path
      url_key
      children {
        uid
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
            "uid": "MjM=",
            "level": 3,
            "name": "Bottoms",
            "path": "1/2/21/23",
            "url_path": "women/bottoms-women",
            "url_key": "bottoms-women",
            "children": [
              {
                "uid": "Mjg=",
                "level": 4,
                "name": "Pants",
                "path": "1/2/21/23/28",
                "url_path": "women/bottoms-women/pants-women",
                "url_key": "pants-women"
              },
              {
                "uid": "Mjk=",
                "level": 4,
                "name": "Shorts",
                "path": "1/2/21/23/29",
                "url_path": "women/bottoms-women/shorts-women",
                "url_key": "shorts-women"
              }
            ]
          },
          {
            "uid": "MjI=",
            "level": 3,
            "name": "Tops",
            "path": "1/2/21/22",
            "url_path": "women/tops-women",
            "url_key": "tops-women",
            "children": [
              {
                "uid": "MjQ=",
                "level": 4,
                "name": "Jackets",
                "path": "1/2/21/22/24",
                "url_path": "women/tops-women/jackets-women",
                "url_key": "jackets-women"
              },
              {
                "uid": "MjU=",
                "level": 4,
                "name": "Hoodies & Sweatshirts",
                "path": "1/2/21/22/25",
                "url_path": "women/tops-women/hoodies-and-sweatshirts-women",
                "url_key": "hoodies-and-sweatshirts-women"
              },
              {
                "uid": "MjY=",
                "level": 4,
                "name": "Tees",
                "path": "1/2/21/22/26",
                "url_path": "women/tops-women/tees-women",
                "url_key": "tees-women"
              },
              {
                "uid": "Mjc=",
                "level": 4,
                "name": "Bras & Tanks",
                "path": "1/2/21/22/27",
                "url_path": "women/tops-women/tanks-women",
                "url_key": "tanks-women"
              }
            ]
          }
        ]
      },
      {
        "children_count": "8",
        "children": [
          {
            "uid": "MTQ=",
            "level": 3,
            "name": "Bottoms",
            "path": "1/2/12/14",
            "url_path": "men/bottoms-men",
            "url_key": "bottoms-men",
            "children": [
              {
                "uid": "MTk=",
                "level": 4,
                "name": "Pants",
                "path": "1/2/12/14/19",
                "url_path": "men/bottoms-men/pants-men",
                "url_key": "pants-men"
              },
              {
                "uid": "MjA=",
                "level": 4,
                "name": "Shorts",
                "path": "1/2/12/14/20",
                "url_path": "men/bottoms-men/shorts-men",
                "url_key": "shorts-men"
              }
            ]
          },
          {
            "uid": "MTM=",
            "level": 3,
            "name": "Tops",
            "path": "1/2/12/13",
            "url_path": "men/tops-men",
            "url_key": "tops-men",
            "children": [
              {
                "uid": "MTU=",
                "level": 4,
                "name": "Jackets",
                "path": "1/2/12/13/15",
                "url_path": "men/tops-men/jackets-men",
                "url_key": "jackets-men"
              },
              {
                "uid": "MTY=",
                "level": 4,
                "name": "Hoodies & Sweatshirts",
                "path": "1/2/12/13/16",
                "url_path": "men/tops-men/hoodies-and-sweatshirts-men",
                "url_key": "hoodies-and-sweatshirts-men"
              },
              {
                "uid": "MTc=",
                "level": 4,
                "name": "Tees",
                "path": "1/2/12/13/17",
                "url_path": "men/tops-men/tees-men",
                "url_key": "tees-men"
              },
              {
                "uid": "MTg=",
                "level": 4,
                "name": "Tanks",
                "path": "1/2/12/13/18",
                "url_path": "men/tops-men/tanks-men",
                "url_key": "tanks-men"
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
    uid
    level
    name
    breadcrumbs {
      category_uid
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
        "uid": "MjI=",
        "level": 3,
        "name": "Tops",
        "breadcrumbs": [
          {
            "category_uid": "MjE=",
            "category_name": "Women",
            "category_level": 2,
            "category_url_key": "women"
          }
        ]
      },
      {
        "uid": "MTM=",
        "level": 3,
        "name": "Tops",
        "breadcrumbs": [
          {
            "category_uid": "MTI=",
            "category_name": "Men",
            "category_level": 2,
            "category_url_key": "men"
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
