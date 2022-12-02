---
group: graphql
title: closeNegotiableQuotes mutation
b2b_only: true
redirect_to: https://developer.adobe.com/commerce/webapi/graphql/schema/b2b/negotiable-quote/mutations/close/
layout: migrated
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

The following example contains an invalid `quote_uids` value, causing a FAILURE status.

**Request:**

```graphql
mutation {
  closeNegotiableQuotes(
    input: {
      quote_uids: ["xyz"]
    }
  ) {
    result_status,
    operation_results {
      ...on NegotiableQuoteUidOperationSuccess{
        __typename
        quote_uid
      }
      ...on CloseNegotiableQuoteOperationFailure{
        __typename
        quote_uid
        errors {
          __typename
          ...on ErrorInterface{
            message
          }
          ...on NoSuchEntityUidError{
            uid
          }
          ...on NegotiableQuoteInvalidStateError {
            message
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
    "closeNegotiableQuotes": {
      "result_status": "FAILURE",
      "operation_results": [
        {
          "__typename": "CloseNegotiableQuoteOperationFailure",
          "quote_uid": "xyz",
          "errors": [
            {
              "__typename": "NoSuchEntityUidError",
              "message": "Could not find a quote with the specified UID.",
              "uid": "xyz"
            }
          ]
        }
      ]
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

The `CloseNegotiableQuotesOutput` output object contains the following fields.

Attribute | Data Type | Description
--- | --- | ---
`closed_quotes` | [NegotiableQuote] | Deprecated. Use `operation_results` instead. An array containing the negotiable quotes that were just closed
`negotiable_quotes (filter NegotiableQuoteFilterInput, pageSize = 20 Int, currentPage = 1 Int)` | NegotiableQuotesOutput | A list of negotiable quotes that the customer can view
`operation_results` | [CloseNegotiableQuoteOperationResult!]! | An array of closed negotiable quote UIDs and details about any errors
`result_status` | BatchMutationStatus | The status of the request to close one or more negotiable quotes. The possible values are SUCCESS, FAILURE, and MIXED_RESULTS

The `negotiable_quotes` attribute takes the following arguments.

{% include graphql/negotiable-quotes-input.md %}

### CloseNegotiableQuoteOperationResult attributes {#CloseNegotiableQuoteOperationResult}

The [`CloseNegotiableQuoteOperationResult` union]({{page.baseurl}}/graphql/unions.html) provides details about the result of a request to close a negotiable quote. To return these details, specify fragments on the `CloseNegotiableQuoteOperationFailure` and `NegotiableQuoteUidOperationSuccess` objects. Specify the `__typename` attribute to distinguish the object types in the response.

### CloseNegotiableQuoteOperationFailure attributes {#CloseNegotiableQuoteOperationFailure}

The CloseNegotiableQuoteOperationFailure type contains details about a failed close operation on a negotiable quote. It contains the following fields.

Attribute | Data Type | Description
--- | --- | ---
`errors` | [CloseNegotiableQuoteError!]! | An array of errors encountered while attempting close the negotiable quote
`quote_uid` | ID! | The unique ID of a `NegotiableQuote` object

### CloseNegotiableQuoteError attributes {#CloseNegotiableQuoteError}

The `CloseNegotiableQuoteError` union type contains one or more of the following data types, all of which implement `ErrorInterface`.

*  `InternalError`
*  `NegotiableQuoteInvalidStateError`
*  `NoSuchEntityUidError`

#### InternalError attributes {#InternalError}

The `InternalError` object contains an error message if an internal error occurred.

Attribute | Data Type | Description
--- | --- | ---
`message` | String! | The returned error message

#### NegotiableQuoteInvalidStateError attributes {#NegotiableQuoteInvalidStateError}

The `NegotiableQuoteInvalidStateError` object contains an error message indicating that an operation was attempted on a negotiable quote in an invalid state.

Attribute | Data Type | Description
--- | --- | ---
`message` | String! | The returned error message

#### NoSuchEntityUidError attributes {#NoSuchEntityUidError}

The `NoSuchEntityUidError` object contains an error message when an invalid UID was specified.

Attribute | Data Type | Description
--- | --- | ---
`message` | String! | The returned error message
`uid` | ID! | The specified invalid unique ID of an object

### NegotiableQuoteUidOperationSuccess attributes {#NoSuchEntityUidError}

The `NegotiableQuoteUidOperationSuccess` object contains details about a successful operation on a negotiable quote. It implements the `NegotiableQuoteUidNonFatalResultInterface`, which defines the following field

Attribute | Data Type | Description
--- | --- | ---
quote_uid | ID! @doc(description: "The unique ID of a `NegotiableQuote` object

### NegotiableQuote attributes {#NegotiableQuote}

{% include graphql/negotiable-quote.md %}
