---
group: graphql
title: category endpoint
version: 2.3
github_link: graphql/reference/categories.md
---

The `category` endpoint allows you to search for a single category definition or the entire category tree.

## Query structure

``` json
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
--- | ---
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
`products(<attributes>) | `CategoryProducts` | The list of products assigned to the category
`children` | `CategoryTree` |

The `products` attribute can contain the following attributes:

Attribute | Data type | Description
--- | ---
`pageSize` | Int | Specifies the maximum number of results to return at once. This attribute is optional. The default value is 20.
`currentPage` | Int |  Specifies which page of results to return. The default value is 1.
`sort` | `ProductSortInput` Specifies which attribute to sort on, and whether to return the results in ascending or descending order. See [Searches and pagination in GraphQL]({{ page.baseurl }}/graphql/search-pagination.html) for more information.

#### CategoryProducts

The `CategoryProducts` object contains the following attributes:

Attribute | Data type | Description
--- | ---
`items` | [ProductInterface] | An array of products that are assigned to the category. See [ProductInterface]({{ page.baseurl }}/graphql/reference/products.html#ProductInterface) for more information.
`page_info` | `SearchResultPageInfo` | An object that includes the `page_info` and `currentPage` values specified in the query
`total_count` | Int | The number of products returned


The response can contain up to ten nested `children` options that allow you to return multiple levels of the category tree. In most cases, the entire category tree can be returned in a single call. The following response definition returns two levels of categories:

{% highlight json %}
{
  category_tree {
    id
    level
    name
    children {
      id
      level
      name
    }
  }
}
{% endhighlight %}

## Sample Query

The following query returns information about category ID `20` and four levels of subcategories. In the sample data, category ID `20` is assigned to the "Women" category.

{% highlight json %}
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
{% endhighlight %}
