---
group: graphql
title: negotiableQuote query
b2b_only: true   
---

The `negotiableQuote` query returns a list of negotiable quotes that can be viewed by the logged-in customer.

This query requires a valid [customer authentication token]({{page.baseurl}}/graphql/mutations/generate-customer-token.html).

## Syntax

```graphql
{
    negotiableQuotes(
        filter: NegotiableQuoteFilterInput,
        pageSize: Int = 20,
        currentPage: Int = 1
    ): NegotiableQuotesOutput
}
```

## Example usage

The following example returns general information about the negotiable quotes that are accessible to the company user. The results are sorted by negotiable quote name, listed in ascending order.

**Request:**

```graphql
query{
  negotiableQuotes (sort: {
    sort_field: QUOTE_NAME
    sort_direction: ASC
  })
{
    items {
      uid
      name
      created_at
      status
    }
    total_count
  }
}
```

**Response:**

```json
{
  "data": {
    "negotiableQuotes": {
      "items": [
        {
          "uid": "xCA4wSZEHsb5QbFiKfoq5k1Dk8vIPBgb",
          "name": "April 22 request",
          "created_at": "2021-04-22 15:59:47",
          "status": "PENDING"
        },
        {
          "uid": "kw6mLEvl6vjjPNsjtJqwpamv5o0iT1bc",
          "name": "Discount request",
          "created_at": "2021-04-20 19:01:38",
          "status": "ORDERED"
        },
        {
          "uid": "BfYWqXwmUpL2Ra1igfrv6xyOMx89sFDu",
          "name": "Last request",
          "created_at": "2021-04-28 15:43:09",
          "status": "PENDING"
        },
        {
          "uid": "eywCZkG8avwW1eivuahc7oukY0ZFDC3H",
          "name": "Latest request",
          "created_at": "2021-04-26 16:35:48",
          "status": "OPEN"
        }
      ],
      "total_count": 4
    }
  }
}
```

## Input attributes

The `negotiableQuotes` query can take the following arguments.

{% include graphql/negotiable-quotes-input.md %}

## Output attributes

The `NegotiableQuotesOutput` object contains the following attributes.

Attribute | Data Type | Description
--- | --- | ---
`items` | [[NegotiableQuote]!](#NegotiableQuote) | A list of negotiable quotes
`page_info` | SearchResultPageInfo! | Contains pagination metadata
`total_count` | Int! | The number of negotiable quotes returned

### NegotiableQuote attributes {#NegotiableQuote}

{% include graphql/negotiable-quote.md %}
