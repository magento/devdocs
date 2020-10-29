---
group: graphql
title: addProductsToWishlist mutation
---

The `addProductsToWishlist` mutation adds one or more products to the specified wish list. This mutation supports all product types.

This mutation requires a valid [customer authentication token]({{page.baseurl}}/graphql/mutations/generate-customer-token.html).

In {{site.data.var.ce}}, customers can have only one wish list. In {{site.data.var.ee}}, customers can have multiple wish lists.

{:.bs-callout-tip}
To determine whether wish lists are enabled, specify the `magento_wishlist_general_is_enabled` attribute in the [`storeConfig` query]({{page.baseurl}}/graphql/queries/store-config.html).

## Syntax

`mutation: addProductsToWishlist(wishlistId: ID!, wishlistItems: [WishlistItemInput!]!): AddProductsToWishlistOutput`

## Example usage

The following example adds a simple product (`24-MB01`), a configurable product (`WJ01-M-Red`), and a bundle product (`24-WG080`) to the customer's wish list. The SKU `WG-09` is invalid, and error information is returned in the `user_errors` object.

{:.bs-callout-info}
In Magento 2.4.1, the `addProductsToWishlist` mutation does not return `selected_options` or `entered_options` objects. Support for these objects will be provided in a future release.

To determine the value of the `wishlistId` attribute, run the `customer` query and check the value of `wishlist.id` in the response.

**Request:**

``` graphql
mutation {
  addProductsToWishlist(
  wishlistId: 1
  wishlistItems: [
    {
      sku: "24-MB01"
      quantity: 1
    }
    {
      sku: "WG-09"
      quantity: 1
    }
    {
      parent_sku: "WJ01"
      sku: "WJ01-M-Red"
      quantity: 1
    }
    {
      sku: "24-WG080"
      quantity: 1
      selected_options: [
        "YnVuZGxlLzEvMS8x"
        "YnVuZGxlLzIvNC8x"
        "YnVuZGxlLzMvNy8x"
        "YnVuZGxlLzQvOC8x"
      ]
    }
  ]){
    wishlist {
      id
      items_count
      items {
        id
        qty
        product {
          name
          sku
          id
          price_range {
            minimum_price {
              regular_price {
                currency
                value
              }
            }
            maximum_price {
              regular_price {
                currency
                value
              }
            }
          }
        }
      }
    }
    user_errors {
      code
      message
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "addProductsToWishlist": {
      "wishlist": {
        "id": "1",
        "items_count": 3,
        "items": [
          {
            "id": 16,
            "qty": 1,
            "product": {
              "name": "Joust Duffle Bag",
              "sku": "24-MB01",
              "id": 1,
              "price_range": {
                "minimum_price": {
                  "regular_price": {
                    "currency": "USD",
                    "value": 34
                  }
                },
                "maximum_price": {
                  "regular_price": {
                    "currency": "USD",
                    "value": 34
                  }
                }
              }
            }
          },
          {
            "id": 17,
            "qty": 1,
            "product": {
              "name": "Stellar Solar Jacket",
              "sku": "WJ01",
              "id": 1226,
              "price_range": {
                "minimum_price": {
                  "regular_price": {
                    "currency": "USD",
                    "value": 75
                  }
                },
                "maximum_price": {
                  "regular_price": {
                    "currency": "USD",
                    "value": 75
                  }
                }
              }
            }
          },
          {
            "id": 18,
            "qty": 1,
            "product": {
              "name": "Sprite Yoga Companion Kit",
              "sku": "24-WG080",
              "id": 46,
              "price_range": {
                "minimum_price": {
                  "regular_price": {
                    "currency": "USD",
                    "value": 61
                  }
                },
                "maximum_price": {
                  "regular_price": {
                    "currency": "USD",
                    "value": 77
                  }
                }
              }
            }
          }
        ]
      },
      "user_errors": [
        {
          "code": "PRODUCT_NOT_FOUND",
          "message": "Could not find a product with SKU \"WG-09\""
        }
      ]
    }
  }
}
```

## Input attributes

The `addProductsToWishlist` mutation requires the following input.

Attribute |  Data Type | Description
--- | --- | ---
`wishlistId` | ID! | The ID of the customer's wish list
`wishlistItems`| [[WishlistItemInput(#WishlistItemInput)]!]! | An array containing each product to be added to the wish list

### WishlistItemInput attributes {#WishlistItemInput}

The `WishlistItemInput` object defines each item to add to the wish list.

Attribute |  Data Type | Description
--- | --- | ---
`entered_options`| [EnteredOptionInput!] | An array of options that the customer entered
`parent_sku` | String | For complex product types, the SKU of the parent product
`quantity` | Float! | The amount or number of items to add
`selected_options` | [ID] | An array of strings corresponding to options the customer selected
`sku` | String! | The SKU of the product to add. For complex product types, specify the child product SKU

### EnteredOptionInput attributes {#EnteredOptionInput}

{% include graphql/entered-option-input.md %}

## Output attributes

The `AddProductsToWishlistOutput` object contains the customer's wish list and error message information.

Attribute |  Data Type | Description
--- | --- | ---
`user_errors` | [[WishListUserInputError!](#WishListUserInputError)] | An array of errors encountered while adding products to a wish list
`wishlist` | [Wishlist!](#Wishlist) | Contains the wish list with all items that were successfully added

### Wishlist attributes {#Wishlist}

{% include graphql/wishlist.md %}

### WishListUserInputError attributes {#WishListUserInputError}

{% include graphql/wishlist-user-input-errors.md %}
