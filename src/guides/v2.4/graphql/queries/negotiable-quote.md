---
group: graphql
title: negotiableQuote query
b2b_only: true   
---

The `negotiableQuote` query retrieves details about the specified negotiable quote. Use the [`negotiableQuotes` query]({{page.baseurl}}/graphql/queries/negotiable-quotes.html) to return a list of valid `uid` values.

This query requires a valid [customer authentication token]({{page.baseurl}}/graphql/mutations/generate-customer-token.html).

## Syntax

```graphql
negotiableQuote (uid ID!): NegotiableQuote
```

## Example usage

The following example returns information about the negotiable quote with the ID of `Mw==`. The buyer and seller agreed to a five percent discount on the order.

**Request:**

```graphql
query{
  negotiableQuote(uid: "Mw=="){
    uid
    status
    items {
      product {
        name
        sku
        price_range {
          maximum_price {
            regular_price {
              value
            }
          }
        }
      }
      quantity
    }
    comments {
      uid
      created_at
      author {
        firstname
        lastname
      }
      text
    }
    history {
      uid
      created_at
      author {
        firstname
        lastname
      }
      change_type
      changes {
        comment_added {
          comment
        }
        statuses {
          changes {
            new_status
            old_status
          }
        }
        expiration {
          new_expiration
          old_expiration
        }
        products_removed {
          removed_from_catalog
          removed_from_quote {
            uid
            sku
            name
          }
        }
        total {
          new_price {
            value
          }
          old_price {
            value
          }
        }
      }
    }
    uid
    updated_at
  }
}
```

**Response:**

```json
{
  "data": {
    "negotiableQuote": {
      "uid": "Mw==",
      "status": "ORDERED",
      "items": [
        {
          "product": {
            "name": "Push It Messenger Bag",
            "sku": "24-WB04",
            "price_range": {
              "maximum_price": {
                "regular_price": {
                  "value": 45
                }
              }
            }
          },
          "quantity": 1
        },
        {
          "product": {
            "name": "Rival Field Messenger",
            "sku": "24-MB06",
            "price_range": {
              "maximum_price": {
                "regular_price": {
                  "value": 45
                }
              }
            }
          },
          "quantity": 1
        },
        {
          "product": {
            "name": "Strive Shoulder Pack",
            "sku": "24-MB04",
            "price_range": {
              "maximum_price": {
                "regular_price": {
                  "value": 32
                }
              }
            }
          },
          "quantity": 1
        }
      ],
      "comments": [
        {
          "uid": "MQ==",
          "created_at": "2021-03-24 15:13:42",
          "author": {
            "firstname": "Taina",
            "lastname": "Garofalo"
          },
          "text": "I would like a 10% discount on this order"
        },
        {
          "uid": "Mg==",
          "created_at": "2021-03-25 14:16:12",
          "author": {
            "firstname": "John Paul",
            "lastname": "Pope"
          },
          "text": "Hello Taina! Thanks for registering with Luma as a partner company.\r\n\r\nUnfortunately, we cannot grant your request, because the 10% discount is reserved for our frequent customers, and this is your first order. We can offer a 5% discount on this order."
        },
        {
          "uid": "Mw==",
          "created_at": "2021-03-25 14:18:13",
          "author": {
            "firstname": "Taina",
            "lastname": "Garofalo"
          },
          "text": "I understand. I&#039;ll accept your offer."
        },
        {
          "uid": "NA==",
          "created_at": "2021-03-25 14:21:22",
          "author": {
            "firstname": "John Paul",
            "lastname": "Pope"
          },
          "text": "Great! You should see a 5% discount in your cart. Shipping fees and taxes might apply."
        }
      ],
      "history": [
        {
          "uid": "MQ==",
          "created_at": "2021-03-24 15:13:42",
          "author": {
            "firstname": "Taina",
            "lastname": "Garofalo"
          },
          "change_type": "CREATED",
          "changes": {
            "comment_added": {
              "comment": "I would like a 10% discount on this order"
            },
            "statuses": {
              "changes": [
                {
                  "new_status": "SUBMITTED",
                  "old_status": null
                }
              ]
            },
            "expiration": {
              "new_expiration": "Never",
              "old_expiration": null
            },
            "products_removed": {
              "removed_from_catalog": [],
              "removed_from_quote": []
            },
            "total": {
              "new_price": null,
              "old_price": null
            }
          }
        },
        {
          "uid": "Mg==",
          "created_at": "2021-03-24 15:16:08",
          "author": {
            "firstname": "admin",
            "lastname": "admin"
          },
          "change_type": "UPDATED",
          "changes": {
            "comment_added": null,
            "statuses": {
              "changes": [
                {
                  "new_status": "PENDING",
                  "old_status": "SUBMITTED"
                }
              ]
            },
            "expiration": {
              "new_expiration": "Never",
              "old_expiration": null
            },
            "products_removed": {
              "removed_from_catalog": [],
              "removed_from_quote": []
            },
            "total": {
              "new_price": null,
              "old_price": null
            }
          }
        },
        {
          "uid": "Mw==",
          "created_at": "2021-03-25 14:16:12",
          "author": {
            "firstname": "admin",
            "lastname": "admin"
          },
          "change_type": "UPDATED",
          "changes": {
            "comment_added": {
              "comment": "Hello Taina! Thanks for registering with Luma as a partner company.\r\n\r\nUnfortunately, we cannot grant your request, because the 10% discount is reserved for our frequent customers, and this is your first order. We can offer a 5% discount on this order."
            },
            "statuses": {
              "changes": [
                {
                  "new_status": "UPDATED",
                  "old_status": "PENDING"
                }
              ]
            },
            "expiration": {
              "new_expiration": "2021-04-23",
              "old_expiration": null
            },
            "products_removed": {
              "removed_from_catalog": [],
              "removed_from_quote": []
            },
            "total": {
              "new_price": null,
              "old_price": null
            }
          }
        },
        {
          "uid": "NA==",
          "created_at": "2021-03-25 14:18:13",
          "author": {
            "firstname": "Taina",
            "lastname": "Garofalo"
          },
          "change_type": "UPDATED",
          "changes": {
            "comment_added": {
              "comment": "I understand. I&#039;ll accept your offer."
            },
            "statuses": {
              "changes": [
                {
                  "new_status": "SUBMITTED",
                  "old_status": "UPDATED"
                }
              ]
            },
            "expiration": {
              "new_expiration": "Never",
              "old_expiration": null
            },
            "products_removed": {
              "removed_from_catalog": [],
              "removed_from_quote": []
            },
            "total": {
              "new_price": null,
              "old_price": null
            }
          }
        },
        {
          "uid": "NQ==",
          "created_at": "2021-03-25 14:18:37",
          "author": {
            "firstname": "admin",
            "lastname": "admin"
          },
          "change_type": "UPDATED",
          "changes": {
            "comment_added": null,
            "statuses": {
              "changes": [
                {
                  "new_status": "PENDING",
                  "old_status": "SUBMITTED"
                }
              ]
            },
            "expiration": {
              "new_expiration": "Never",
              "old_expiration": null
            },
            "products_removed": {
              "removed_from_catalog": [],
              "removed_from_quote": []
            },
            "total": {
              "new_price": null,
              "old_price": null
            }
          }
        },
        {
          "uid": "Ng==",
          "created_at": "2021-03-25 14:21:22",
          "author": {
            "firstname": "admin",
            "lastname": "admin"
          },
          "change_type": "UPDATED",
          "changes": {
            "comment_added": {
              "comment": "Great! You should see a 5% discount in your cart. Shipping fees and taxes might apply."
            },
            "statuses": {
              "changes": [
                {
                  "new_status": "UPDATED",
                  "old_status": "PENDING"
                }
              ]
            },
            "expiration": {
              "new_expiration": "Never",
              "old_expiration": null
            },
            "products_removed": {
              "removed_from_catalog": [],
              "removed_from_quote": []
            },
            "total": {
              "new_price": {
                "value": 115.9
              },
              "old_price": {
                "value": 122
              }
            }
          }
        },
        {
          "uid": "Nw==",
          "created_at": "2021-03-25 14:45:18",
          "author": {
            "firstname": "Taina",
            "lastname": "Garofalo"
          },
          "change_type": "UPDATED",
          "changes": {
            "comment_added": null,
            "statuses": {
              "changes": [
                {
                  "new_status": "OPEN",
                  "old_status": "UPDATED"
                }
              ]
            },
            "expiration": {
              "new_expiration": "Never",
              "old_expiration": null
            },
            "products_removed": {
              "removed_from_catalog": [],
              "removed_from_quote": []
            },
            "total": {
              "new_price": null,
              "old_price": null
            }
          }
        },
        {
          "uid": "OA==",
          "created_at": "2021-03-25 14:45:37",
          "author": {
            "firstname": "Taina",
            "lastname": "Garofalo"
          },
          "change_type": "UPDATED",
          "changes": {
            "comment_added": null,
            "statuses": {
              "changes": [
                {
                  "new_status": "SUBMITTED",
                  "old_status": "OPEN"
                }
              ]
            },
            "expiration": {
              "new_expiration": "Never",
              "old_expiration": null
            },
            "products_removed": {
              "removed_from_catalog": [],
              "removed_from_quote": []
            },
            "total": {
              "new_price": null,
              "old_price": null
            }
          }
        },
        {
          "uid": "OQ==",
          "created_at": "2021-03-25 15:03:23",
          "author": {
            "firstname": "admin",
            "lastname": "admin"
          },
          "change_type": "UPDATED",
          "changes": {
            "comment_added": null,
            "statuses": {
              "changes": [
                {
                  "new_status": "PENDING",
                  "old_status": "SUBMITTED"
                }
              ]
            },
            "expiration": {
              "new_expiration": "Never",
              "old_expiration": null
            },
            "products_removed": {
              "removed_from_catalog": [],
              "removed_from_quote": []
            },
            "total": {
              "new_price": null,
              "old_price": null
            }
          }
        },
        {
          "uid": "MTA=",
          "created_at": "2021-03-25 16:04:11",
          "author": {
            "firstname": "admin",
            "lastname": "admin"
          },
          "change_type": "UPDATED",
          "changes": {
            "comment_added": null,
            "statuses": {
              "changes": [
                {
                  "new_status": "UPDATED",
                  "old_status": "PENDING"
                }
              ]
            },
            "expiration": {
              "new_expiration": "Never",
              "old_expiration": null
            },
            "products_removed": {
              "removed_from_catalog": [],
              "removed_from_quote": []
            },
            "total": {
              "new_price": null,
              "old_price": null
            }
          }
        },
        {
          "uid": "MTE=",
          "created_at": "2021-03-25 16:05:08",
          "author": {
            "firstname": "Taina",
            "lastname": "Garofalo"
          },
          "change_type": "UPDATED",
          "changes": {
            "comment_added": null,
            "statuses": {
              "changes": [
                {
                  "new_status": "OPEN",
                  "old_status": "UPDATED"
                },
                {
                  "new_status": "ORDERED",
                  "old_status": "OPEN"
                }
              ]
            },
            "expiration": {
              "new_expiration": "Never",
              "old_expiration": null
            },
            "products_removed": {
              "removed_from_catalog": [],
              "removed_from_quote": []
            },
            "total": {
              "new_price": null,
              "old_price": null
            }
          }
        }
      ],
      "updated_at": "2021-03-25 16:05:07"
    }
  }
}
```

## Input attributes

The `negotiableQuote` query requires a valid negotiable quote ID.

Attribute |  Data Type | Description
--- | --- | ---
`uid` | ID! | The unique ID assigned to the negotiable quote

## Output attributes

{% include graphql/negotiable-quote.md %}
