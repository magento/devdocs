---
group: graphql
title: createProductReview mutation
---

The `createProductReview` mutation

## Syntax

`createProductReview(input: CreateProductReviewInput!): CreateProductReviewOutput!`

## Example usage

**Request:**

```graphql

```

**Response:**

```json

```

## Input attributes

Attribute |  Data Type | Description
--- | --- | ---
### CreateProductReviewInput attributes {#CreateProductReviewInput}

`nickname` | String! | The customer's nickname. Defaults to the customer name, if logged in
`ratings` | [ProductReviewRatingInput!]! | Ratings details by category. e.g price: 5, quality: 4 etc
`sku` | String! | The SKU of the reviewed product
`summary` | String! | The summary (title) of the review
`text` | String! | The review text.

### ProductReviewRatingInput attributes {#ProductReviewRatingInput}

The `ProductReviewRatingInput` object contains the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`id` | String! | An encoded rating ID
`value_id` | String! | An encoded rating value ID

## Output attributes

The `CreateProductReviewOutput` output object contains the following attribute:

Attribute |  Data Type | Description
--- | --- | ---
`review` | ProductReview! | Contains the completed product review

### ProductReview attributes {#ProductReview}

{% include graphql/product-review.md %}
