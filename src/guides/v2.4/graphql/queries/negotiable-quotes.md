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

The following example returns information about XXX.

**Request:**

```graphql

```

**Response:**

```json

```

## Input attributes

The `negotiableQuote` query can take the following arguments.

Attribute |  Data Type | Description
--- | --- | ---
`currentPage` | Int | Specifies which page of results to return. The default value is 1
`filter` | NegotiableQuoteFilterInput | Defines a filter for narrowing the query results
`pageSize` | Int | Specifies the maximum number of results to return at once. Defaults to 20

### NegotiableQuoteFilterInput attributes {#NegotiableQuoteFilterInput}

The `NegotiableQuoteFilterInput` object defines the filter to use to return a list of negotiable quotes.

Attribute |  Data Type | Description
--- | --- | ---
`ids` | FilterEqualTypeInput | Filter by the ID of one or more negotiable quotes
`name` | FilterMatchTypeInput | Filter by the negotiable quote name

### FilterEqualTypeInput attributes {#FilterEqualTypeInput}

Use the `FilterEqualTypeInput` object to construct a filter that returns values that are equal to the specified string or are in an array of values.

Attribute |  Data Type | Description
--- | --- | ---
`eq` | String | A string to filter on
`in` | [String] | An array of values to filter on

### FilterMatchTypeInput attributes {#FilterMatchTypeInput}

Use the `FilterMatchTypeInput` object to construct a filter that returns products that exactly match a string or contain the specified pattern.

Attribute |  Data Type | Description
--- | --- | ---
`match` | String | One or more words to filter on

## Output attributes

The `negotiableQuote` query returns the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`items` | [[NegotiableQuote]!](#NegotiableQuote) | A list of negotiable quotes
`page_info` | SearchResultPageInfo! | Contains pagination metadata
`total_count` | Int! | The number of negotiable quotes returned

### NegotiableQuote attributes {#NegotiableQuote}

{% include graphql/negotiable-quote.md %}
