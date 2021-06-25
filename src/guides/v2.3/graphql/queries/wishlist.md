---
group: graphql
title: wishlist query
redirect_from:
  - /guides/v2.3/graphql/reference/wishlist.html
---

{:.bs-callout-warning}
The `wishlist` query has been deprecated. Wish list information is now provided by the [customer]({{page.baseurl}}/graphql/queries/customer.html) query.

Use the `wishlist` query to retrieve information about a customer's wish list. [Authorization tokens]({{page.baseurl}}/graphql/authorization-tokens.html) describes how to supply an authorization token for a specific customer.

## Syntax

`wishlist: WishlistOutput`

## Example usage

The following query returns the customer's wish list:

**Request:**

```graphql
{
  wishlist {
    items_count
    name
    sharing_code
    updated_at
    items {
      id
      qty
      description
      added_at
      product {
        sku
        name
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "wishlist": {
      "items_count": 2,
      "name": "Wish List",
      "sharing_code": "KAXDj0HlM7Y2s58mllsVhSJvRj4fWIZj",
      "updated_at": "2019-02-13 22:47:45",
      "items": [
        {
          "id": 1,
          "qty": 1,
          "description": "My first priority",
          "added_at": "2019-02-20 14:38:02",
          "product": {
            "sku": "MJ09",
            "name": "Taurus Elements Shell"
          }
        },
        {
          "id": 2,
          "qty": 1,
          "description": null,
          "added_at": "2019-02-20 14:38:28",
          "product": {
            "sku": "MSH11",
            "name": "Arcadio Gym Short"
          }
        }
      ]
    }
  }
}
```

## Output attributes

Attribute | Data type | Description
--- | --- | ---
`items` | [WishlistItem](#wishlistitem) | An array of items in the customer's wish list
`items_count` | Int | The number of items in the wish list
`name` | String | When multiple wish lists are enabled, the name the customer assigns to the wish list
`sharing_code` | String | An encrypted code that Magento uses to link to the wish list
`updated_at` | String | The time of the last modification to the wish list

### Wish list item attributes {#wishlistitem}

Attribute | Data type | Description
--- | --- | ---
`added_at` | String | The time when the customer added the item to the wish list
`description` | String | The customer's comment about this item
`id` | Int | The wish list item ID
`product` | [ProductInterface]({{ page.baseurl }}/graphql/interfaces/product-interface.html) | The ProductInterface contains attributes that are common to all types of products. Note that descriptions may not be available for custom and EAV attributes
`qty` | Float | The quantity of this wish list item
