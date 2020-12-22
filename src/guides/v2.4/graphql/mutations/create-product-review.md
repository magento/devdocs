---
group: graphql
title: createProductReview mutation
---

The `createProductReview` mutation adds a review for the specified product. Use the [`productReviewRatingsMetadata` query]({{page.baseurl}}/graphql/queries/product-review-ratings-metadata.html) to return a list of rating categories and possible values.

## Syntax

`createProductReview(input: CreateProductReviewInput!): CreateProductReviewOutput!`

## Example usage

In the following example, Roni gives product `WH08` four stars overall, three stars for value, and four stars for quality.

**Request:**

```graphql
mutation {
  createProductReview(
    input: {
      sku: "WH08",
      nickname: "Roni",
      summary: "Great looking sweatshirt",
      text: "This sweatshirt looks and feels great. The zipper sometimes sticks a bit.",
      ratings: [
        {
          id: "NA==",
          value_id: "MTk="
        }, {
          id: "MQ==",
          value_id: "NA=="
        }, {
          id: "Mg==",
          value_id: "OA=="
        }
      ]
    }
) {
    review {
      nickname
      summary
      text
      average_rating
      ratings_breakdown {
        name
        value
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "createProductReview": {
      "review": {
        "nickname": "Roni",
        "summary": "Great looking sweatshirt",
        "text": "This sweatshirt looks and feels great. The zipper sometimes sticks a bit.",
        "average_rating": 73.33,
        "ratings_breakdown": [
          {
            "name": "Quality",
            "value": "4"
          },
          {
            "name": "Value",
            "value": "3"
          },
          {
            "name": "Overall",
            "value": "4"
          }
        ]
      }
    }
  }
}
```

## Input attributes

The `CreateProductReviewInput` input object defines the product review.

### CreateProductReviewInput attributes {#CreateProductReviewInput}

The `CreateProductReviewInput` object contains the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
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
