---
group: graphql
title: deleteNegotiableQuotes mutation
b2b_only: true
---

The `deleteNegotiableQuotes` mutation causes the specified negotiable quotes to be invisible from the Admin or from the storefront. The quotes are still present in the database.

You can run the `deleteNegotiableQuotes` mutation when negotiable quotes are have the following statuses:

*  Open
*  Submitted
*  Expired
*  Declined
*  Closed

This mutation requires a valid [customer authentication token]({{page.baseurl}}/graphql/mutations/generate-customer-token.html).

## Syntax

```graphql
deleteNegotiableQuotes(
    input: DeleteNegotiableQuotesInput!
): DeleteNegotiableQuotesOutput
```

## Example usage

The following example closes the specified negotiable quote. The response includes a list of all the company negotiable quotes.

**Request:**

```graphql

```

**Response:**

```json

```

## Input attributes

The `DeleteNegotiableQuotesInput` object contains the following attribute.

Attribute | Data Type | Description
--- | --- | ---
`quote_item_uids` | [ID!]! | An array of IDs indicating which items to remove from the negotiable quote

## Output attributes

The `DeleteNegotiableQuotesOutput` output object contains the following attribute.

Attribute | Data Type | Description
--- | --- | ---
`negotiable_quotes (filter NegotiableQuoteFilterInput, pageSize = 20 Int, currentPage = 1 Int)` | NegotiableQuotesOutput | A list of negotiable quotes that the customer can view

This attribute takes the following arguments.

{% include graphql/negotiable-quotes-input.md %}

### NegotiableQuote attributes {#NegotiableQuote}

{% include graphql/negotiable-quote.md %}
