---
group: graphql
title: customer query
---

The `customer` query returns information about the logged-in customer, store credit history and customer's wishlist.

To return or modify information about a customer, Magento recommends you use customer tokens in the header of your GraphQL calls. However, you also can use [session authentication]({{ page.baseurl }}/get-started/authentication/gs-authentication-session.html).

## Syntax

`{customer: {Customer}}`

## Example usage

### Retrieve basic information about the logged-in customer

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
### Retrieve a summary of the customer's order history {#order-history}

The following example returns a summary of the logged-in customer's previous orders.

**Request:**

```graphql
query {
  customer {
    orders(
      pageSize: 20
    ) {
      items {
        id
        order_date
        total {
          grand_total {
            value
            currency
          }
        }
        status
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
      "orders": {
        "items": [
          {
            "id": "MQ==",
            "order_date": "2020-03-18 17:25:20",
            "total": {
              "grand_total": {
                "value": 36.39,
                "currency": "USD"
              }
            },
            "status": "Complete"
          },
          {
            "id": "Mg==",
            "order_date": "2020-03-18 17:25:20",
            "total": {
              "grand_total": {
                "value": 39.64,
                "currency": "USD"
              }
            },
            "status": "Closed"
          },
          {
            "id": "Mw==",
            "order_date": "2020-03-21 22:41:38",
            "total": {
              "grand_total": {
                "value": 205.68,
                "currency": "USD"
              }
            },
            "status": "Pending"
          },
          {
            "id": "NA==",
            "order_date": "2020-08-03 02:35:35",
            "total": {
              "grand_total": {
                "value": 159.13,
                "currency": "USD"
              }
            },
            "status": "Complete"
          },
          {
            "id": "NQ==",
            "order_date": "2020-09-08 03:57:11",
            "total": {
              "grand_total": {
                "value": 132.57,
                "currency": "USD"
              }
            },
            "status": "Complete"
          }
        ]
      }
    }
  }
}
```

### Retrieve detailed information about a specific order {#order-details}

The following example returns details about one of the customer's previous orders.

These topics contain examples with fragments and provide even more details:

*  [CreditMemoItemInterface attributes and implementations]({{page.baseurl}}/graphql/interfaces/credit-memo-item-interface.html)
*  [InvoiceItemInterface attributes and implementations]({{page.baseurl}}/graphql/interfaces/invoice-item-interface.html)
*  [OrderItemInterface attributes and implementations]({{page.baseurl}}/graphql/interfaces/order-item-interface.html)
*  [ShipmentItemInterface attributes and implementations]({{page.baseurl}}/graphql/interfaces/shipment-item-interface.html)

**Request:**

```graphql
{
  customer {
    orders(filter: {number: {eq: "000000001"}}) {
      total_count
      items {
        id
        number
        order_date
        status
        items {
          product_name
          product_sku
          product_url_key
          product_sale_price {
            value
          }
          product_sale_price {
            value
            currency
          }
          quantity_ordered
          quantity_invoiced
          quantity_shipped
          eligible_for_return
        }
        carrier
        shipments {
          id
          number
          items {
            product_name
            quantity_shipped
          }
        }
        total {
          base_grand_total {
            value
            currency
          }
          grand_total {
            value
            currency
          }
          total_tax {
            value
          }
          subtotal {
            value
            currency
          }
          taxes {
            amount {
              value
              currency
            }
            title
            rate
          }
          total_shipping {
            value
          }
          shipping_handling {
            amount_including_tax {
              value
            }
            amount_excluding_tax {
              value
            }
            total_amount {
              value
            }
            taxes {
              amount {
                value
              }
              title
              rate
            }
          }
          discounts {
            amount {
              value
              currency
            }
            label
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
      "orders": {
        "total_count": 1,
        "items": [
          {
            "id": "MQ==",
            "number": "000000001",
            "order_date": "2020-11-14 22:25:48",
            "status": "Processing",
            "items": [
              {
                "product_name": "Iris Workout Top",
                "product_sku": "WS03-XS-Red",
                "product_url_key": "iris-workout-top",
                "product_sale_price": {
                  "value": 29,
                  "currency": "USD"
                },
                "quantity_ordered": 1,
                "quantity_invoiced": 1,
                "quantity_shipped": 1,
                "eligible_for_return": true
              }
            ],
            "carrier": "Flat Rate",
            "shipments": [
              {
                "id": "MDAwMDAwMDAx",
                "number": "000000001",
                "items": [
                  {
                    "product_name": "Iris Workout Top",
                    "quantity_shipped": 1
                  }
                ]
              }
            ],
            "total": {
              "base_grand_total": {
                "value": 36.39,
                "currency": "USD"
              },
              "grand_total": {
                "value": 36.39,
                "currency": "USD"
              },
              "total_tax": {
                "value": 2.39
              },
              "subtotal": {
                "value": 29,
                "currency": "USD"
              },
              "taxes": [
                {
                  "amount": {
                    "value": 2.39,
                    "currency": "USD"
                  },
                  "title": "US-MI-*-Rate 1",
                  "rate": 8.25
                }
              ],
              "total_shipping": {
                "value": 5
              },
              "shipping_handling": {
                "amount_including_tax": {
                  "value": 5
                },
                "amount_excluding_tax": {
                  "value": 5
                },
                "total_amount": {
                  "value": 5
                },
                "taxes": []
              },
              "discounts": []
            }
          }
        ]
      }
    }
  }
}
```

### Retrieve the store credit history

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

The following query returns the customer's wish lists. {{site.data.var.ee}} allows customers to have multiple wish lists.

**Request:**

```graphql
{
  customer {
    wishlists {
      id
      name
      items_count
      items_v2 {
        items {
          id
          product {
            uid
            name
            sku
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
      "wishlists": [
        {
          "id": "1",
          "name": "Vacation Wants",
          "items_count": 10,
          "items_v2": {
            "items": [
              {
                "id": "1",
                "product": {
                  "uid": "MTM=",
                  "name": "Overnight Duffle",
                  "sku": "24-WB07"
                }
              },
              {
                "id": "2",
                "product": {
                  "uid": "MTA=",
                  "name": "Savvy Shoulder Tote",
                  "sku": "24-WB05"
                }
              },
              {
                "id": "3",
                "product": {
                  "uid": "MTE=",
                  "name": "Endeavor Daytrip Backpack",
                  "sku": "24-WB06"
                }
              },
              {
                "id": "4",
                "product": {
                  "uid": "MTA5OA==",
                  "name": "Miko Pullover Hoodie",
                  "sku": "WH04"
                }
              },
              {
                "id": "5",
                "product": {
                  "uid": "MTIyNg==",
                  "name": "Stellar Solar Jacket",
                  "sku": "WJ01"
                }
              },
              {
                "id": "6",
                "product": {
                  "uid": "MTcyMg==",
                  "name": "Nora Practice Tank",
                  "sku": "WT03"
                }
              },
              {
                "id": "7",
                "product": {
                  "uid": "MTY5MA==",
                  "name": "Bella Tank",
                  "sku": "WT01"
                }
              },
              {
                "id": "17",
                "product": {
                  "uid": "MTg=",
                  "name": "Pursuit Lumaflex&trade; Tone Band",
                  "sku": "24-UG02"
                }
              },
              {
                "id": "18",
                "product": {
                  "uid": "MQ==",
                  "name": "Joust Duffle Bag",
                  "sku": "24-MB01"
                }
              },
              {
                "id": "20",
                "product": {
                  "uid": "NTI=",
                  "name": "Sprite Yoga Companion Kit",
                  "sku": "24-WG080"
                }
              }
            ]
          }
        },
        {
          "id": "2",
          "name": "Lose the Muffintop",
          "items_count": 5,
          "items_v2": {
            "items": [
              {
                "id": "8",
                "product": {
                  "uid": "NDk=",
                  "name": "Advanced Pilates & Yoga (Strength)",
                  "sku": "240-LV08"
                }
              },
              {
                "id": "10",
                "product": {
                  "uid": "MTQ1MA==",
                  "name": "Layla Tee",
                  "sku": "WS04"
                }
              },
              {
                "id": "11",
                "product": {
                  "uid": "MTU2Mg==",
                  "name": "Radiant Tee",
                  "sku": "WS12"
                }
              },
              {
                "id": "12",
                "product": {
                  "uid": "MTYxMA==",
                  "name": "Electra Bra Top",
                  "sku": "WB01"
                }
              },
              {
                "id": "13",
                "product": {
                  "uid": "MTY0Mg==",
                  "name": "Celeste Sports Bra",
                  "sku": "WB03"
                }
              }
            ]
          }
        }
      ]
    }
  }
}
```
## Output attributes

### Customer attributes {#customerAttributes}

The `customer` object can contain the following attributes:

{% include graphql/customer-output-24.md %}

### CompareList attributes {#CompareList}

The `CompareList` object can contain the following attributes:

{% include graphql/compare-list-output.md %}

### CustomerAddress attributes {#customerAddressOutput}

The values assigned to attributes such as `firstname` and `lastname` in this object may be different from those defined in the `Customer` object.

The `CustomerAddress` output returns the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`city` | String | The city or town
`company` | String | The customer's company
`country_code` | CountryCodeEnum | The customer's country
`country_id` | String | Deprecated. Use `country_code` instead. The customer's country
`custom_attributes` | [CustomerAddressAttribute](#customerAddressAttributeOutput) | Deprecated. Not applicable for GraphQL
`customer_id` | Int | Deprecated. This attribute is not applicable for GraphQL. The ID assigned to the customer
`default_billing` | Boolean | Indicates whether the address is the default billing address
`default_shipping` | Boolean | Indicates whether the address is the default shipping address
`extension_attributes` | [CustomerAddressAttribute](#customerAddressAttributeOutput) | Address extension attributes
`fax` | String | The fax number
`firstname` | String | The first name of the person associated with the shipping/billing address
`id` | Int | The ID assigned to the address object
`lastname` | String | The family name of the person associated with the shipping/billing address
`middlename` | String | The middle name of the person associated with the shipping/billing address
`postcode` | String | The customer's ZIP or postal code
`prefix` | String | An honorific, such as Dr., Mr., or Mrs.
`region` | [CustomerAddressRegion](#customerAddressRegionOutput) | An object that defines the customer's state or province
`region_id` | Int | The unique ID for a pre-defined region
`street` | [String] | An array of strings that define the street number and name
`suffix` | String | A value such as Sr., Jr., or III
`telephone` | String | The telephone number
`vat_id` | String | The customer's Tax/VAT number (for corporate customers)

#### CustomerAddressAttribute attributes {#customerAddressAttributeOutput}

The `CustomerAddressAttribute` output data type has been deprecated because the contents are not applicable for GraphQL. It can contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`attribute_code` | String | Attribute code
`value` | String | Attribute value

#### CustomerAddressRegion attributes {#customerAddressRegionOutput}

The `customerAddressRegion` output returns the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`region` | String | The state or province name
`region_code` | String | The address region code
`region_id` | Int | The unique ID for a pre-defined region

### orders input attributes {#orders}

{% include graphql/customer-orders-output.md %}

#### ProductReview object {#ProductReview}

{% include graphql/product-review.md %}

#### ProductReviews object {#ProductReviews}

`ProductReviews` contains an array of reviews written about the product.

Attribute |  Data Type | Description
--- | --- | ---
`items` | [[ProductReview]](#ProductReview)! | An array of product reviews
`page_info` | [SearchResultPageInfo!]({{page.baseurl}}/graphql/queries/products.html#SearchResultPageInfo) | Metadata for pagination rendering

### Return attributes {#Return}

{% include graphql/return.md %}

### Returns attributes {#Returns}

The Returns object contains an array of [Return](#Return) objects.

### Store credit attributes

In {{site.data.var.ee}}, the merchant can assign store credit to customers. Magento maintains the history of all changes to the balance of store credit available to the customer. The customer must be logged in to access the store credit history and balance.

Store credits must be enabled to return store credit attributes. If store credits are disabled after previously being enabled, the query returns the customer's current balance as null.

Attribute |  Data Type | Description
--- | --- | ---
`store_credit` | [CustomerStoreCredit](#CustomerStoreCredit) | Contains the store credit information for the logged-in customer

#### CustomerStoreCredit attributes {#CustomerStoreCredit}

The `store_credit` object contains store credit information, including the balance and history.

Attribute |  Data Type | Description
--- | --- | ---
`balance_history` | [`CustomerStoreCreditHistory`](#CustomerStoreCreditHistory) | Lists changes to the amount of store credit available to the customer. If the history or store credit feature is disabled, then a null value will be returned.<br/><br/>You can specify the following optional parameters to control paging in the output.<br/><br/>`pageSize` - An integer that specifies the maximum number of results to return at once. The default value is 20.<br/><br/>`currentPage` - An integer that specifies which page of the results to return. The default value is 1
`current_balance` | Money | The current store credit balance
`enabled` | Boolean | Indicates whether store credits are enabled. If the feature is disabled, then the balance will not be returned

#### CustomerStoreCreditHistory attributes {#CustomerStoreCreditHistory}

The `CustomerStoreCreditHistory` object contains an array of store credit items and paging information. If the store credit or store credit history feature is disabled, then a null value will be returned.

Attribute |  Data Type | Description
--- | --- | ---
`items` | [[`CustomerStoreCreditHistoryItem`](#CustomerStoreCreditHistoryItem)] | An array of products that match the specified search criteria
`page_info` | SearchResultPageInfo | An object that includes the `page_size` and `current_page` values specified in the query
`total_count` | Int | The number of items returned

#### CustomerStoreCreditHistoryItem attributes {#CustomerStoreCreditHistoryItem}

The `CustomerStoreCreditHistoryItem` object contains information about a specific change to the customer's store credit.

Attribute |  Data Type | Description
--- | --- | ---
`action` | String | The action taken on the customer's store credit
`actual_balance` | Money | The store credit available to the customer as a result of this action
`balance_change` | Money | The amount added to or subtracted from the store credit as a result of this action
`date_time_changed` | String | Date and time when the store credit change was made

### Wishlist attributes {#Wishlist}

{% include graphql/wishlist.md %}

## B2B output attributes {#B2b}

If B2B is installed the `Customer` object can contain additional information.

### RequisitionListFilterInput attributes {#RequisitionListFilterInput}

The `RequisitionListFilterInput` object defines filters that limit the number of requisition lists returned.

Attribute |  Data Type | Description
--- | --- | ---
`name` | FilterMatchTypeInput | Filter by the display name of the requisition list
`uids` | FilterEqualTypeInput | Filter requisition lists by one or more requisition list IDs

### RequisitionList attributes {#RequisitionList}

{% include graphql/requisition-list.md %}

### RequisitionLists attributes {#RequisitionList}

The RequisitionLists object contains an array of requisition lists.

Attribute |  Data Type | Description
--- | --- | ---
`items` | [[RequisitionList]](#RequisitionList) | An array of requisition lists
`page_info` | SearchResultPageInfo | Contains pagination metadata
`total_count` | Int | The number of returned requisition lists

## Related topics

*  [isEmailAvailable query]({{page.baseurl}}/graphql/queries/is-email-available.html)
*  [generateCustomerToken mutation]({{page.baseurl}}/graphql/mutations/generate-customer-token.html)
*  [createCustomer mutation]({{page.baseurl}}/graphql/mutations/create-customer.html)
*  [createCustomerAddress mutation]({{page.baseurl}}/graphql/mutations/create-customer-address.html)
