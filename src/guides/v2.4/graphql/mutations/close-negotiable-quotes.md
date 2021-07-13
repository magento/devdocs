---
group: graphql
title: closeNegotiableQuotes mutation
b2b_only: true
---

The `closeNegotiableQuotes` mutation closes an active negotiable quote. Once a quote is closed, it cannot be re-opened. Closed negotiable quotes can be viewed by the merchant and company users.

This mutation requires a valid [customer authentication token]({{page.baseurl}}/graphql/mutations/generate-customer-token.html).

## Syntax

```graphql
    closeNegotiableQuotes(
        input: CloseNegotiableQuotesInput!
    ): CloseNegotiableQuotesOutput
```

## Example usage

The following example closes the specified negotiable quote. The response includes a list of all the company negotiable quotes.

**Request:**

```graphql
mutation{
  closeNegotiableQuotes(input: {quote_uids: ["FYGOCooAxSJnMdxI9v0cMI5EBaTPtwrr"]} ){
    closed_quotes {
      uid
      name
      status
    }
    negotiable_quotes {
      total_count
      items {
        uid
        name
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
    "closeNegotiableQuotes": {
      "closed_quotes": [
        {
          "uid": "FYGOCooAxSJnMdxI9v0cMI5EBaTPtwrr",
          "name": "New request",
          "status": "SUBMITTED"
        }
      ],
      "negotiable_quotes": {
        "total_count": 3,
        "items": [
          {
            "uid": "kw6mLEvl6vjjPNsjtJqwpamv5o0iT1bc",
            "name": "Discount request",
            "status": "ORDERED"
          },
          {
            "uid": "xCA4wSZEHsb5QbFiKfoq5k1Dk8vIPBgb",
            "name": "April 22 request",
            "status": "SUBMITTED"
          },
          {
            "uid": "FYGOCooAxSJnMdxI9v0cMI5EBaTPtwrr",
            "name": "New request",
            "status": "CLOSED"
          }
        ]
      }
    }
  }
}
```

## Input attributes

The `CloseNegotiableQuotesInput` object contains the following attribute.

Attribute | Data Type | Description
--- | --- | ---
`quote_item_uids` | [ID!]! | A list of unique IDs from `NegotiableQuote` objects

## Output attributes

The `CloseNegotiableQuotesOutput` output object contains the following attribute.

Attribute | Data Type | Description
--- | --- | ---
`closed_quotes` | [NegotiableQuote] | An array containing the negotiable quotes that were just closed
`negotiable_quotes (filter NegotiableQuoteFilterInput, pageSize = 20 Int, currentPage = 1 Int)` | NegotiableQuotesOutput | A list of negotiable quotes that the customer can view

The `negotiable_quotes` attribute takes the following arguments.

{% include graphql/negotiable-quotes-input.md %}
### NegotiableQuote attributes {#NegotiableQuote}

{% include graphql/negotiable-quote.md %}
