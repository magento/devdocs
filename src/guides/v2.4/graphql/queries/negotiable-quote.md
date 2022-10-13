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

The following example returns information about the negotiable quote with the UID of `kw6mLEvl6vjjPNsjtJqwpamv5o0iT1bc`. The buyer and seller agreed to a five percent discount on the order.

**Request:**

```graphql
query{
  negotiableQuote(uid: "kw6mLEvl6vjjPNsjtJqwpamv5o0iT1bc"){
    uid
    status
    total_quantity
    email
    items {
      product {
        name
        sku
        uid
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
      "uid": "kw6mLEvl6vjjPNsjtJqwpamv5o0iT1bc",
      "status": "ORDERED",
      "total_quantity": 3,
      "email": "tgarofalo@example.com",
      "items": [
        {
          "product": {
            "name": "Dual Handle Cardio Ball",
            "sku": "24-UG07",
            "price_range": {
              "maximum_price": {
                "regular_price": {
                  "value": 12
                }
              }
            }
          },
          "quantity": 1
        },
        {
          "product": {
            "name": "Sprite Yoga Companion Kit",
            "sku": "24-WG080",
            "price_range": {
              "maximum_price": {
                "regular_price": {
                  "value": 77
                }
              }
            }
          },
          "quantity": 1
        },
        {
          "product": {
            "name": "Zing Jump Rope",
            "sku": "24-UG04",
            "price_range": {
              "maximum_price": {
                "regular_price": {
                  "value": 12
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
          "created_at": "2021-04-20 19:57:49",
          "author": {
            "firstname": "Taina",
            "lastname": "Garofalo"
          },
          "text": "Requesting a 10% discount for being a repeat customer."
        },
        {
          "uid": "Mg==",
          "created_at": "2021-04-21 16:06:51",
          "author": {
            "firstname": "John Paul",
            "lastname": "Pope"
          },
          "text": "Hello Taina! Thanks for registering with Luma as a partner company.\r\n\r\nUnfortunately, we cannot grant your request, because the 10% discount is reserved for our frequent customers, and this is your first order. We can offer a 5% discount on this order."
        },
        {
          "uid": "Mw==",
          "created_at": "2021-04-21 16:12:48",
          "author": {
            "firstname": "Taina",
            "lastname": "Garofalo"
          },
          "text": "I understand. I&#039;ll accept your offer."
        },
        {
          "uid": "NA==",
          "created_at": "2021-04-21 17:03:36",
          "author": {
            "firstname": "John Paul",
            "lastname": "Pope"
          },
          "text": "Great! You should see a 5% discount in your cart. Shipping fees and taxes might apply."
        },
        {
          "uid": "NQ==",
          "created_at": "2021-04-21 17:54:34",
          "author": {
            "firstname": "Taina",
            "lastname": "Garofalo"
          },
          "text": "Adding a shipping address"
        }
      ],
      "history": [
        {
          "uid": "MQ==",
          "created_at": "2021-04-20 19:57:49",
          "author": {
            "firstname": "Taina",
            "lastname": "Garofalo"
          },
          "change_type": "CREATED",
          "changes": {
            "comment_added": {
              "comment": "Requesting a 10% discount for being a repeat customer."
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
            "total": {
              "new_price": null,
              "old_price": null
            }
          }
        },
        {
          "uid": "Mg==",
          "created_at": "2021-04-21 15:55:09",
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
            "total": {
              "new_price": null,
              "old_price": null
            }
          }
        },
        {
          "uid": "Mw==",
          "created_at": "2021-04-21 16:06:51",
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
              "new_expiration": "Never",
              "old_expiration": null
            },
            "total": {
              "new_price": null,
              "old_price": null
            }
          }
        },
        {
          "uid": "NA==",
          "created_at": "2021-04-21 16:12:48",
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
            "total": {
              "new_price": null,
              "old_price": null
            }
          }
        },
        {
          "uid": "NQ==",
          "created_at": "2021-04-21 17:02:18",
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
            "total": {
              "new_price": null,
              "old_price": null
            }
          }
        },
        {
          "uid": "Ng==",
          "created_at": "2021-04-21 17:03:36",
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
            "total": {
              "new_price": {
                "value": 95.95
              },
              "old_price": {
                "value": 101
              }
            }
          }
        },
        {
          "uid": "Nw==",
          "created_at": "2021-04-21 17:54:08",
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
            "total": {
              "new_price": null,
              "old_price": null
            }
          }
        },
        {
          "uid": "OA==",
          "created_at": "2021-04-21 17:54:34",
          "author": {
            "firstname": "Taina",
            "lastname": "Garofalo"
          },
          "change_type": "UPDATED",
          "changes": {
            "comment_added": {
              "comment": "Adding a shipping address"
            },
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
            "total": {
              "new_price": null,
              "old_price": null
            }
          }
        },
        {
          "uid": "OQ==",
          "created_at": "2021-04-21 18:23:56",
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
            "total": {
              "new_price": null,
              "old_price": null
            }
          }
        },
        {
          "uid": "MTA=",
          "created_at": "2021-04-21 18:24:46",
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
            "total": {
              "new_price": null,
              "old_price": null
            }
          }
        },
        {
          "uid": "MTE=",
          "created_at": "2021-04-21 18:29:29",
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
            "total": {
              "new_price": null,
              "old_price": null
            }
          }
        }
      ],
      "updated_at": "2021-04-21 18:29:28"
    }
  }
}
```

## Input attributes

The `negotiableQuote` query requires a valid negotiable quote ID.

Attribute | Data Type | Description
--- | --- | ---
`uid` | ID! | The unique ID assigned to the negotiable quote

## Output attributes

{% include graphql/negotiable-quote.md %}
