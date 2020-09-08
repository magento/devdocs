---
group: graphql
title: customer query
redirect_from:
  - /guides/v2.3/graphql/reference/customer.html
---

The `customer` query returns information about the logged-in customer, store credit history and customer's wishlist.

To return or modify information about a customer, Magento recommends you use customer tokens in the header of your GraphQL calls. However, you also can use [session authentication]({{ page.baseurl }}/get-started/authentication/gs-authentication-session.html).

## Syntax

`{customer: {Customer}}`

## Example usage

### Retrieving the logged-in customer

The following call returns information about the logged-in customer. Provide the customer's token in the header section of the query.

**Request:**

```graphql
{
  customer {
    firstname
    lastname
    suffix
    email
    addresses {
      firstname
      lastname
      street
      city
      region {
        region_code
        region
      }
      postcode
      country_code
      telephone
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "customer": {
      "firstname": "John",
      "lastname": "Doe",
      "suffix": null,
      "email": "jdoe@example.com",
      "addresses": [
       {
         "firstname": "John",
         "lastname": "Doe",
         "street": [
           "123 Elm Street"
         ],
         "city": "Anytown",
         "region": {
           "region_code": "MI",
           "region": "Michigan"
         }
         "postcode": "78758",
         "country_code": "US",
         "telephone": "512 555-1212"
        }
      ]
    }
  }
}
```

### Retrieving the store credit history

The following example returns the store credit history for the logged-in user.

**Request:**

```graphql
query {
  customer {
    firstname
    lastname
    store_credit {
      enabled
      balance_history(pageSize: 10) {
        items {
          action
          actual_balance {
            currency
            value
          }
          balance_change {
            currency
            value
          }
          date_time_changed
        }
        page_info {
          page_size
          current_page
          total_pages
        }
        total_count
      }
      current_balance {
        currency
        value
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "customer": {
      "firstname": "John",
      "lastname": "Doe",
      "store_credit": {
        "enabled": true,
        "balance_history": {
          "items": [
            {
              "action": "Updated",
              "actual_balance": {
                "currency": "USD",
                "value": 10
              },
              "balance_change": {
                "currency": "USD",
                "value": -100
              },
              "date_time_changed": "2019-07-15 21:47:59"
            },
            {
              "action": "Updated",
              "actual_balance": {
                "currency": "USD",
                "value": 110
              },
              "balance_change": {
                "currency": "USD",
                "value": 10
              },
              "date_time_changed": "2019-07-15 21:47:18"
            },
            {
              "action": "Created",
              "actual_balance": {
                "currency": "USD",
                "value": 100
              },
              "balance_change": {
                "currency": "USD",
                "value": 100
              },
              "date_time_changed": "2019-07-15 16:31:05"
            }
          ],
          "page_info": {
            "page_size": 10,
            "current_page": 1,
            "total_pages": 1
          },
          "total_count": 3
        },
        "current_balance": {
          "currency": "USD",
          "value": 10
        }
      }
    }
  }
}
```
### Retrieve the customer's wish list

The following query returns the customer's wish list:

**Request:**

```graphql
{
  customer {
    wishlist {
      items {
        id
        description
        qty
        product {
          sku
          name
          price_range {
            maximum_price {
              regular_price {
                value
              }
            }
          }
        }
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "customer": {
      "wishlist": {
        "items": [
          {
            "id": 1,
            "description": "I need this",
            "qty": 1,
            "product": {
              "sku": "24-WG080",
              "name": "Sprite Yoga Companion Kit",
              "price_range": {
                "maximum_price": {
                  "regular_price": {
                    "value": 77
                  }
                }
              }
            }
          },
          {
            "id": 2,
            "description": null,
            "qty": 1,
            "product": {
              "sku": "24-UG04",
              "name": "Zing Jump Rope",
              "price_range": {
                "maximum_price": {
                  "regular_price": {
                    "value": 12
                  }
                }
              }
            }
          }
        ]
      }
    }
  }
}
```
## Output attributes

### Customer attributes {#customerAttributes}

The `customer` object can contain the following attributes:

{% include graphql/customer-output.md %}

### Wishlist attributes {#Wishlist}

Attribute | Data type | Description
--- | --- | ---
`items` | [[WishlistItem](#wishlistitem)] | An array of items in the customer's wish list
`items_count` | Int | The number of items in the wish list
`id` | ID | The unique identifier of the wish list
`sharing_code` | String | An encrypted code that Magento uses to link to the wish list
`updated_at` | String | The time of the last modification to the wish list

### WishlistItem attributes {#wishlistitem}

Attribute | Data type | Description
--- | --- | ---
`added_at` | String | The time when the customer added the item to the wish list
`description` | String | The customer's comment about this item
`id` | Int | The wish list item ID
`product` | [ProductInterface]({{ page.baseurl }}/graphql/interfaces/product-interface.html) | The ProductInterface contains attributes that are common to all types of products. Note that descriptions may not be available for custom and EAV attributes
`qty` | Float | The quantity of this wish list item

### Store credit attributes

In {{site.data.var.ee}}, the merchant can assign store credit to customers. Magento maintains the history of all changes to the balance of store credit available to the customer. The customer must be logged in to access the store credit history and balance.

Store credits must be enabled to return store credit attributes. If store credits are disabled after previously being enabled, the query returns the customer's current balance as null.

Attribute |  Data Type | Description
--- | --- | ---
`store_credit` | [CustomerStoreCredit](#CustomerStoreCredit) | Contains the store credit information for the logged-in customer

### CustomerStoreCredit attributes {#CustomerStoreCredit}

The `store_credit` object contains store credit information, including the balance and history.

Attribute |  Data Type | Description
--- | --- | ---
`balance_history` | [`CustomerStoreCreditHistory`](#CustomerStoreCreditHistory) | Lists changes to the amount of store credit available to the customer. If the history or store credit feature is disabled, then a null value will be returned.<br/><br/>You can specify the following optional parameters to control paging in the output.<br/><br/>`pageSize` - An integer that specifies the maximum number of results to return at once. The default value is 20.<br/><br/>`currentPage` - An integer that specifies which page of the results to return. The default value is 1
`current_balance` | Money | The current store credit balance
`enabled` | Boolean | Indicates whether store credits are enabled. If the feature is disabled, then the balance will not be returned

### CustomerStoreCreditHistory attributes {#CustomerStoreCreditHistory}

The `CustomerStoreCreditHistory` object contains an array of store credit items and paging information. If the store credit or store credit history feature is disabled, then a null value will be returned.

Attribute |  Data Type | Description
--- | --- | ---
`items` | [[`CustomerStoreCreditHistoryItem`](#CustomerStoreCreditHistoryItem)] | An array of products that match the specified search criteria
`page_info` | SearchResultPageInfo | An object that includes the `page_size` and `current_page` values specified in the query
`total_count` | Int | The number of items returned

### CustomerStoreCreditHistoryItem attributes {#CustomerStoreCreditHistoryItem}

The `CustomerStoreCreditHistoryItem` object contains information about a specific change to the customer's store credit.

Attribute |  Data Type | Description
--- | --- | ---
`action` | String | The action taken on the customer's store credit
`actual_balance` | Money | The store credit available to the customer as a result of this action
`balance_change` | Money | The amount added to or subtracted from the store credit as a result of this action
`date_time_changed` | String | Date and time when the store credit change was made

## Related topics

*  [isEmailAvailable query]({{page.baseurl}}/graphql/queries/is-email-available.html)
*  [generateCustomerToken mutation]({{page.baseurl}}/graphql/mutations/generate-customer-token.html)
*  [createCustomer mutation]({{page.baseurl}}/graphql/mutations/create-customer.html)
*  [createCustomerAddress mutation]({{page.baseurl}}/graphql/mutations/create-customer-address.html)
