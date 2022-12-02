---
group: graphql
title: sendNegotiableQuoteForReview mutation
b2b_only: true
redirect_to: https://developer.adobe.com/commerce/webapi/graphql/schema/b2b/negotiable-quote/mutations/send-for-review/
layout: migrated
---

The `sendNegotiableQuoteForReview` mutation sends the negotiable quote to the seller for review. If the mutation is successful, the buyer cannot modify the quote until the merchant accepts the request.

This mutation requires a valid [customer authentication token]({{page.baseurl}}/graphql/mutations/generate-customer-token.html).

## Syntax

```graphql
sendNegotiableQuoteForReview(
    input: SendNegotiableQuoteForReviewInput!
) : SendNegotiableQuoteForReviewOutput
```

## Example usage

The following example adds a comment to the specified negotiable quote.

**Request:**

```graphql
mutation{
  sendNegotiableQuoteForReview(input: {
    quote_uid: "xCA4wSZEHsb5QbFiKfoq5k1Dk8vIPBgb"
    comment: { comment: "Thanks!"}
  }){
    quote {
      uid
      buyer {
        firstname
        lastname
      }
      name
      updated_at
      status
      comments {
        uid
        created_at
        creator_type
        author {
          firstname
          lastname
        }
        text
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "sendNegotiableQuoteForReview": {
      "quote": {
        "uid": "xCA4wSZEHsb5QbFiKfoq5k1Dk8vIPBgb",
        "buyer": {
          "firstname": "Taina",
          "lastname": "Garofalo"
        },
        "name": "April 22 request",
        "updated_at": "2021-04-23 18:21:44",
        "status": "SUBMITTED",
        "comments": [
          {
            "uid": "OA==",
            "created_at": "2021-04-22 17:04:47",
            "creator_type": "BUYER",
            "author": {
              "firstname": "Taina",
              "lastname": "Garofalo"
            },
            "text": "Requesting a 10% discount and a reduction in shipping costs."
          },
          {
            "uid": "OQ==",
            "created_at": "2021-04-28 02:47:41",
            "creator_type": "BUYER",
            "author": {
              "firstname": "Taina",
              "lastname": "Garofalo"
            },
            "text": "Thanks!"
          }
        ]
      }
    }
  }
}
```

## Input attributes

The `SendNegotiableQuoteForReviewInput` object contains the following attribute.

Attribute | Data Type | Description
--- | --- | ---
`comment` | NegotiableQuoteCommentInput | A comment for the seller to review
`quote_uid` | ID! | The unique ID of a `NegotiableQuote` object

## Output attributes

The `SendNegotiableQuoteForReviewOutput` output object contains the following attribute.

Attribute | Data Type | Description
--- | --- | ---
`quote` | [NegotiableQuote](#NegotiableQuote) | The negotiable quote after sending for seller review

### NegotiableQuote attributes {#NegotiableQuote}

{% include graphql/negotiable-quote.md %}
