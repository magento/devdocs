---
layout: default
group: graphql
title: Searches and pagination in GraphQL
github_link: graphql/search-pagination.md
---

A GraphQL search query contains the following components:

* Filters (search criteria).
* Pagination information
* Sorting instructions

The following sample query returns a list of products in which the SKU begins with `24-MB` and the price is less than $50. The response for each item includes the `name`, `sku`, and `price` only. Up to 25 results are returned at a time, in decreasing order of price.

{% highlight json %}
{
    products(
      find: {
        and: {
             sku: {like: "24-MB%"}
             price: {lt: "50"}
             }
        }
        pageSize: 25
          order: {
          price: DESC
        }
    )
    {
        total_count
        items {
          name
          sku
          price
        }
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
      "total_count": 5,
      "items": [
        {
          "name": "Rival Field Messenger",
          "sku": "24-MB06",
          "price": 45
        },
        {
          "name": "Wayfarer Messenger Bag",
          "sku": "24-MB05",
          "price": 45
        },
        {
          "name": "Crown Summit Backpack",
          "sku": "24-MB03",
          "price": 38
        },
        {
          "name": "Joust Duffle Bag",
          "sku": "24-MB01",
          "price": 34
        },
        {
          "name": "Strive Shoulder Pack",
          "sku": "24-MB04",
          "price": 32
        }
      ],
      "page_info": {
        "page_size": 25
      }
    }
  }
}
{% endhighlight %}


## Specifying filters

A search query must contain a top-level `and` operator, and the search criteria are specified within. The search query can contain one or two nested `and` or `or` clauses. However, you cannot perform a logical `or` across two `and` clauses, such as (A AND B) OR (X AND Y).


### Condition types

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
`moreq: "value"` |
`from: "value"` |
`to: "value"` |
`finset: [1, 2, 3]`	| <code>FINSET(<i>field</i>, '1, 2, 3')</code>

**Notes:**

* `to` and `from` must always be used together. These condition types can be used in the same search term. For example, `qty: {from: "10" to: "20"}`.
* `gt` and `lt` can be used in the same search term. For example, `qty: {lt: "10" gt: "20"}`.


### Simple search using a timestamp

The following search finds all products that were added after the specified time (midnight, November 1, 2017).

{% highlight json %}
{
    products(
      find: {
        and: {
             created_at: {gt: "2017-11-01 00:00:00"}
             }
        }
        pageSize: 25
          order: {
          price: DESC
        }
    )
    {
        total_count
        items {
          name
          sku
          price
        }
        page_info {
          page_size
          current_page
        }
      }
}
{% endhighlight %}

### Simple Logical OR search

The following example searches for all products whose names contain the string `Leggings` or `Parachute`.

{% highlight json %}
{
    products(
      find: {
        and: {
          or: {
            name: {like: "%Leggings%"}
            name: {like: "%Parachute%"}
						}
       	 }
        }
        pageSize: 25
          order: {
          price: DESC
        }
    )
    {
        total_count
        items {
          name
          sku
          price
        }
        page_info {
          page_size
          current_page
        }
      }
}
{% endhighlight %}

### Logical AND and OR search search

This query searches the `sku`s for women’s shorts (WSH%) or pants (WP%) in size 29. The system performs logical ANDs to restrict the results to those that cost from $40 to $49.99 and has a name that contains the string `Orange`.


{% highlight json %}

{
    products(
      find: {
        and: {
          price: {from: "40" to: "49.99"}
          name: {like: "%Orange"}
            or: {
              sku: {like: "WSH%29%"}
              sku: {like: "WP%29%"}
						}
       	 }
        }
        pageSize: 25
          order: {
          price: DESC
        }
    )
    {
        total_count
        items {
          name
          sku
          price
        }
        page_info {
          page_size
          current_page
        }
      }
}
{% endhighlight %}

The query returns 6 items.

### Logical AND and two OR search

This query returns items with

* Has a `sku` that begins with `WP`, AND
* Has a `price` that's less than 60, AND
* Has a `name` that contains the string `Parachute` OR `Capri`, AND
* Has a `status` of `1` OR `visibility` of `1`

{% highlight json %}
{
    products(
        find:
        {
          and:
          {
            price: {lt:"60"}
            sku: {like: "WP%"}

           or:
            {
              name:{like:"%Parachute%"}
              name:{like: "%Capri%"}

            }
             or:{
              status: {eq: "1"}
              visibility: {eq: "1"}
            }
          }
        }
        pageSize:100
        currentPage:1
        order:
       {
        price:DESC
       }
    )
    {
        items
         {
           name
           sku
           price
           status
           type_id
           visibility

         }
        total_count
        page_info
        {
          page_size
          current_page
        }
    }
}
{% endhighlight %}

This query returns 42 items.

## Specifying pagination

Currently, Magento's GraphQL implementation of pagination uses offsets so that it operates in the same manner as REST and SOAP requests.

The `pageSize` attribute specifies the maximum number of items to return. If no value is specified, 100 items are returned.

The `currentPage` attribute specifies which page of results to return. If no value is specified, the first page is returned. If you specify a value that is greater than the number of available pages, an error is returned.


## Sorting instructions

The `order` object allows you to specify which field to use for sorting the results. If you specify more than one field, Magento sorts by the first field listed. Then, if any items have the same value, those items will be sorted by the secondary field.  The value for each field can be set to either `ASC` or `DESC`.

In the following example, Magento returns a list of items that are sorted in order of increasing price. If two or more items have the same price, the items are listed in alphabetic order by name.

```
order: {
  price: ASC
  name:  DESC
}
```
