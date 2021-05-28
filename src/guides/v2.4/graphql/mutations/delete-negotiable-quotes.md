---
group: graphql
title: deleteNegotiableQuotes mutation
b2b_only: true
---

The `deleteNegotiableQuotes` mutation causes the specified negotiable quotes to be invisible from the Admin or from the storefront. The quotes are still present in the database.

You can run the `deleteNegotiableQuotes` mutation when negotiable quotes are have the following statuses:

*  SUBMITTED
*  UPDATED
*  OPEN
*  CLOSED
*  DECLINED
*  EXPIRED

This mutation requires a valid [customer authentication token]({{page.baseurl}}/graphql/mutations/generate-customer-token.html).

## Syntax

```graphql
deleteNegotiableQuotes(
    input: DeleteNegotiableQuotesInput!
): DeleteNegotiableQuotesOutput
```

## Example usage

The following example deletes the specified negotiable quote. The response includes a list of all the company negotiable quotes.

**Request:**

```graphql
mutation{
  deleteNegotiableQuotes(input:
  {
    quote_uids: ["FYGOCooAxSJnMdxI9v0cMI5EBaTPtwrr"]
  }){
    negotiable_quotes {
     items {
      uid
      name
      created_at
      buyer {
        firstname
        lastname
      }
      status
      updated_at
      prices {
        grand_total {
          value
          currency
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
    "deleteNegotiableQuotes": {
      "negotiable_quotes": {
        "items": [
          {
            "uid": "kw6mLEvl6vjjPNsjtJqwpamv5o0iT1bc",
            "name": "Discount request",
            "created_at": "2021-04-20 19:01:38",
            "buyer": {
              "firstname": "Taina",
              "lastname": "Garofalo"
            },
            "status": "ORDERED",
            "updated_at": "2021-04-21 18:29:28",
            "prices": {
              "grand_total": {
                "value": 110.95,
                "currency": "USD"
              }
            }
          },
          {
            "uid": "xCA4wSZEHsb5QbFiKfoq5k1Dk8vIPBgb",
            "name": "April 22 request",
            "created_at": "2021-04-22 15:59:47",
            "buyer": {
              "firstname": "Taina",
              "lastname": "Garofalo"
            },
            "status": "SUBMITTED",
            "updated_at": "2021-04-23 18:21:44",
            "prices": {
              "grand_total": {
                "value": 208.8,
                "currency": "USD"
              }
            }
          }
        ]
      }
    }
  }
}
```

## Input attributes

The `DeleteNegotiableQuotesInput` object contains the following attribute.

Attribute | Data Type | Description
--- | --- | ---
`quote_uids` | [ID!]! | An array of unique IDs indicating which items to remove from the negotiable quote

## Output attributes

The `DeleteNegotiableQuotesOutput` output object contains the following attribute.

Attribute | Data Type | Description
--- | --- | ---
`negotiable_quotes (filter NegotiableQuoteFilterInput, pageSize = 20 Int, currentPage = 1 Int)` | NegotiableQuotesOutput | A list of negotiable quotes that the customer can view

This attribute takes the following arguments.

{% include graphql/negotiable-quotes-input.md %}

### NegotiableQuote attributes {#NegotiableQuote}

{% include graphql/negotiable-quote.md %}
