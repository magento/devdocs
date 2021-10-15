Attribute | Data Type | Description
--- | --- | ---
`currentPage` | Int | Specifies which page of results to return. The default value is 1
`filter` | [NegotiableQuoteFilterInput](#NegotiableQuoteFilterInput) | Defines a filter for narrowing the query results
`pageSize` | Int | Specifies the maximum number of results to return at once. Defaults to 20
`sort` | [NegotiableQuoteSortInput](#NegotiableQuoteSortInput) | Specifies how to sort the results

### NegotiableQuoteFilterInput attributes {#NegotiableQuoteFilterInput}

The `NegotiableQuoteFilterInput` object defines the filter to use to return a list of negotiable quotes.

Attribute | Data Type | Description
--- | --- | ---
`ids` | FilterEqualTypeInput | Filter by the ID of one or more negotiable quotes
`name` | FilterMatchTypeInput | Filter by the negotiable quote name

### FilterEqualTypeInput attributes {#FilterEqualTypeInput}

Use the `FilterEqualTypeInput` object to construct a filter that returns values that are equal to the specified string or are in an array of values.

Attribute | Data Type | Description
--- | --- | ---
`eq` | String | A string to filter on
`in` | [String] | An array of values to filter on

### FilterMatchTypeInput attributes {#FilterMatchTypeInput}

Use the `FilterMatchTypeInput` object to construct a filter that returns products that exactly match a string or contain the specified pattern.

Attribute | Data Type | Description
--- | --- | ---
`match` | String | One or more words to filter on

### NegotiableQuoteSortInput attributes {#NegotiableQuoteSortInput}

Attribute | Data Type | Description
--- | --- | ---
`sort_field` | NegotiableQuoteSortableField! | CREATED_AT (default), QUOTE_NAME, or UPDATED_AT
`sort_direction` | SortEnum! | ASC or DESC (default)
