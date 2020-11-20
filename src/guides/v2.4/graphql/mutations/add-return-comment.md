---
group: graphql
title: addReturnComment mutation
---

The `addReturnComment` mutation adds a comment to an existing return request.

## Syntax

```graphql
mutation: {
    addReturnComment(input: AddReturnCommentInput!): AddReturnCommentOutput
}
```

## Example usage

The following example adds a comment in response to the merchant.

**Request:**

```graphql
mutation{
  addReturnComment(input: {
    return_uid: "Mw=="
    comment_text: "I'd like a refund"})
    {
    return {
      uid
      status
      comments {
        uid
        author_name
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
    "addReturnComment": {
      "return": {
        "uid": "Mw==",
        "status": "PENDING",
        "comments": [
          {
            "uid": "NQ==",
            "author_name": "Customer Service",
            "text": "We placed your Return request."
          },
          {
            "uid": "Ng==",
            "author_name": "Bob Loblaw",
            "text": "I want to return the shirt because I don't like the texture of the fabric"
          },
          {
            "uid": "Nw==",
            "author_name": "Customer Service",
            "text": "OK. Would you like a refund or store credit?"
          },
          {
            "uid": "OA==",
            "author_name": "Bob Loblaw",
            "text": "I'd like a refund"
          }
        ]
      }
    }
  }
}
```

## Input attributes

The `AddReturnCommentInput` object must contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`comment_text` | String! | The text added to the return request
`return_uid` | ID! | The encoded ID of the return request

## Output attributes

The `AddReturnCommentOutput` object contains the `Return` object.

Attribute |  Data Type | Description
--- | --- | ---
`return` | Return | Contains details about the modified return

### Return object {#Return}

{% include graphql/return.md %}

## Related topics

*  [`requestReturn` mutation]({{page.baseurl}}/graphql/mutations/request-return.html)
*  [`addReturnTracking` mutation]({{page.baseurl}}/graphql/mutations/add-return-tracking.html)
*  [`removeReturnTracking` mutation]({{page.baseurl}}/graphql/mutations/remove-return-tracking.html)
