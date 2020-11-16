---
group: graphql
title: addReturnComment mutation
---

The `addReturnComment` mutation adds a comment to the return request

## Syntax

```graphql
mutation: {
    addReturnComment(input: AddReturnCommentInput!): AddReturnCommentOutput
}
```

## Example usage

The following example

**Request:**

```graphql

```

**Response:**

```json

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
