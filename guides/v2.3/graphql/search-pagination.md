---
group: graphql
title: Searches and pagination in GraphQL
version: 2.3
github_link: graphql/search-pagination.md
---

A GraphQL search query can contain the following components:

* A full text search keyword
* Filters (search criteria).
* Pagination information
* Sorting instructions

## Specifying full text search keywords

The `search` element causes Magento to perform a full text search on the specified keywords. (This is the same type of search that is performed from the storefront. If multiple keywords are specified, each keyword is evaluated separately.

The `search` element is optional, but it can be used with or without filters. Each query must contain a `search` or `filter` element.


## Specifying filters

The `filter` element defines which search criteria to use to find the desired results. As with a REST call, each filter defines the field to be searched, the condition type, and the search value.

Search filters are logically ANDed unless an `or` statement is specified. The search query can contain unlimited number of nested `or` clauses. However, you cannot perform a logical `or` across two `and` clauses, such as (A AND B) OR (X AND Y).

### Search fields

Each object type defines which fields can be searched. See the object-specific documentation for details.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
You cannot specify the same search field twice in a GraphQL query.
</div>

### Condition types and search values

The following table lists available condition types and provides the SQL statement equivalents.

Magento GraphQL clause | SQL equivalent
--- | ---
`eq: "value"`	| <code><i>field</i> = 'value'</code>
`neq: "value"` |<code><i>field</i> != 'value'</code>
`like: "value%"`	| <code><i>field</i> LIKE 'value%'</code>
`nlike: "value%"`	|<code><i>field</i> NOT LIKE 'value%'</code>
`in: [1, 2, 3] `	| <code><i>field</i> IN (1, 2, 3)</code>
`nin: [1, 2, 3]`	| <code><i>field</i> NOT IN (1, 2, 3)</code>
`notnull: true`	| <code><i>field</i> IS NOT NULL</code>
`null: true`	| <code><i>field</i> IS NULL</code>
`lt: "value"`	| <code><i>field</i> < 'value'</code>
`gt: "value"`	| <code><i>field</i> > 'value'</code>
`gteq: "value"`	| <code><i>field</i> >= 'value'</code>
`lteq: "value"`	| <code><i>field</i> <= 'value'</code>
`moreq: "value"` | <code><i>field</i> >= 'value'</code>
`from: "value1"` `to: "value2"` | <code><i>field</i> BETWEEN 'value1' AND 'value2'</code>
`finset: [1, 2, 3]`	| <code>FINSET(<i>field</i>, '1, 2, 3')</code>

<div class="bs-callout bs-callout-info" id="info" markdown="1">
* `to` and `from` must always be used together. These condition types can be used in the same search term. For example, `qty: {from: "10" to: "20"}`.
* `gt` and `lt` can be used in the same search term. For example, `qty: {lt: "10" gt: "20"}`.
</div>

## Specifying pagination

Currently, Magento's GraphQL implementation of pagination uses offsets so that it operates in the same manner as REST and SOAP requests.

The `pageSize` attribute specifies the maximum number of items to return. If no value is specified, 20 items are returned.

The `currentPage` attribute specifies which page of results to return. If no value is specified, the first page is returned. If you specify a value that is greater than the number of available pages, an error is returned.

## Sorting instructions

The `sort` object allows you to specify which field or fields to use for sorting the results. If you specify more than one field, Magento sorts by the first field listed. Then, if any items have the same value, those items will be sorted by the secondary field.  The value for each field can be set to either `ASC` or `DESC`.

In the following example, Magento returns a list of items that are sorted in order of decreasing price. If two or more items have the same price, the items are listed in alphabetic order by name.

```
sort: {
  price: DESC
  name:  ASC
}
```

## Example Searches

The following sections provide examples of each type of search. These examples use the Magento Open Source sample data.

### Full text search

The following search returns items that contain the word `yoga` or `pants`. The Catalog Search index contains search terms taken from the product `name`, `description`, `short_description` and related attributes.

{% highlight json %}
{
    products(
      search: "Yoga pants"
    )
    {
        total_count
        items {
          name
          sku
          price {
            regularPrice {
              amount {
                value
                currency
              }
            }
          }
        }
        page_info {
          page_size
          current_page
        }
      }
}
{% endhighlight  %}

The search returns 45 items.


### Full text search with filters

The following sample query returns a list of products that meets the following criteria:

* The product name, product description, or related field contains the string `Messenger` (which causes it to be available for full text searches).
* The SKU begins with `24-MB`
* The price is less than $50.

The response for each item includes the `name`, `sku`, `price` and `description` only. Up to 25 results are returned at a time, in decreasing order of price.

{% highlight json %}
{
    products(
      search: "Messenger"
      filter: {
             sku: {like: "24-MB%"}
             price: {lt: "50"}
             }
        pageSize: 25
          sort: {
          price: DESC
        }
    )
    {
      items
      	{
          name
          sku
          description
          price {
            regularPrice {
              amount {
                value
                currency
              }
            }
          }

        }
        total_count
        page_info {
            page_size
        }
    }
}
{% endhighlight %}

The query returns the following:

{% highlight json %}
{
  "data": {
    "products": {
      "items": [
        {
          "name": "Wayfarer Messenger Bag",
          "sku": "24-MB05",
          "description": "<p>Perfect for class, work or the gym, the Wayfarer Messenger Bag is packed with pockets. The dual-buckle flap closure reveals an organizational panel, and the roomy main compartment has spaces for your laptop and a change of clothes. An adjustable shoulder strap and easy-grip handle promise easy carrying.</p>\n<ul>\n<li>Multiple internal zip pockets.</li>\n<li>Made of durable nylon.</li>\n</ul>",
          "price": {
            "regularPrice": {
              "amount": {
                "value": 45,
                "currency": "USD"
              }
            }
          }
        },
        {
          "name": "Rival Field Messenger",
          "sku": "24-MB06",
          "description": "<p>The Rival Field Messenger packs all your campus, studio or trail essentials inside a unique design of soft, textured leather - with loads of character to spare. Two exterior pockets keep all your smaller items handy, and the roomy interior offers even more space.</p>\n<ul>\n<li>Leather construction.</li>\n<li>Adjustable fabric carry strap.</li>\n<li>Dimensions: 18\" x 10\" x 4\".</li>\n</ul>",
          "price": {
            "regularPrice": {
              "amount": {
                "value": 45,
                "currency": "USD"
              }
            }
          }
        }
      ],
      "total_count": 2,
      "page_info": {
        "page_size": 25
      }
    }
  }
}
{% endhighlight %}


### Simple search using a timestamp

The following search finds all products that were added after the specified time (midnight, November 1, 2017).

{% highlight json %}
{
    products(
      filter: {
          created_at: {gt: "2017-11-01 00:00:00"}
        }
        pageSize: 25
          sort: {
          price: DESC
        }
    )
    {
        total_count
        items {
          name
          sku
          price {
            regularPrice {
              amount {
                value
                currency
              }
            }
          }
        }
        page_info {
          page_size
          current_page
        }
      }
}
{% endhighlight %}

### Simple Logical OR search

The following example searches for all products whose `sku` begins with the string `24-MB` or whose `name` ends with `Bag`.

{% highlight json %}
{
    products(
      filter: {
          or: {
            sku: {like: "24-MB%"}
            name: {like: "%Bag"}
						}
       	 }
        pageSize: 25
          sort: {
          price: DESC
        }
    )
    {
        total_count
        items {
          name
          sku
          price {
            regularPrice {
              amount {
                value
                currency
              }
            }
          }
        }
        page_info {
          page_size
          current_page
        }
      }
}
{% endhighlight %}

The query returns 8 items.

### Logical AND and OR search

This query searches for products that have `name` that ends with `Orange` or has a `sku` that indicates the product is a pair of women’s shorts in size 29 (`WSH%29%`). The system performs a logical AND to restrict the results to those that cost from $40 to $49.99.

{% highlight json %}
{
    products(
      filter: {
          price: {from: "40" to: "49.99"}
          name: {like: "%Orange"}
            or: {
              sku: {like: "WSH%29%"}
       	 }
        }
        pageSize: 25
          sort: {
          price: DESC
        }
    )
    {
        total_count
        items {
          name
          sku
          price {
            regularPrice {
              amount {
                value
              }
            }
          }
        }
        page_info {
          page_size
          current_page
        }
      }
}
{% endhighlight %}

The query returns 4 items.
