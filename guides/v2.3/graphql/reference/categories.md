---
group: graphql
title: categories endpoint
version: 2.3
github_link: graphql/reference/categories.md
---

The `categories` endpoint allows you to search for a single category definition or the entire category tree.

## Query structure

``` json
categories (
   filter: root_category_id: int
): Categories
```

### Input attributes

Attribute | Data type | Description
--- | --- | ---
`root_category_id` | Int | The ID in the category tree to use as the starting point of your category search.

### Output attributes {#Categories}

The query returns a `Categories` object. The top line of the response is `category_tree`.

Attribute | Data type | Description
--- | ---
`id` | Int | An ID that uniquely identifies the category
`description`| String | An optional description of the category
`name`| String | The display name of the category
`path`| String | The path to the category, as a string of category IDs, separated by slashes (/). For example, `1/2/20`
`path_in_store`| String | Category path in the store
`url_key`| String | The url key assigned to the category
`url_path`| String | The url path assigned to the category
`is_active`| Boolean | Indicates whether the category is enabled
`position`| Int | The position of the category relative to other categories at the same level in tree
`level` | Int | Indicates the depth of the category within the tree
`created_at`| String | Timestamp indicating when the category was created
`updated_at`| String | Timestamp indicating when the category was updated
`product_count`| Int | The number of products in the category
`default_sort_by`| String | The attribute to use for sorting


The response can contain up to ten nested `children` options that allow you to return multiple levels of the category tree. In most cases, the entire category tree can be returned in a single call. The following response definition returns two levels of categories:

{% highlight json %}
{
  category_tree {
    id
    level
    description
    children {
      id
      level
      description
    }
  }
}
{% endhighlight %}

## Sample Query

The following query returns information about category ID `20` (Women), which is defined in the sample data.

{% highlight json %}
{
  categories(filter: {root_category_id: 20}) {
    category_tree {
      id
      level
      is_active
      description
      all_children
      path
      children {
        id
        level
        is_active
        description
        all_children
        path
        children {
          id
          level
          is_active
          description
          all_children
          path
          children {
            id
            level
            is_active
            description
            all_children
            path
          }
        }
      }
    }
  }
}
{% endhighlight %}
