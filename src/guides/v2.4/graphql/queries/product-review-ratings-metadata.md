---
group: graphql
title: productReviewRatingsMetadata query
---

The `productReviewRatingsMetadata` query returns the active ratings attributes and the values each rating can have. In Luma, these values are one star through five stars.

Use the [`createProductReview` mutation]({{page.baseurl}}/graphql/mutations/create-product-review.html) to add a product review.

## Syntax

`productReviewRatingsMetadata: ProductReviewRatingsMetadata!`

## Example usage

The following query returns the metadata for all active ratings attributes. In this example, the default `Rating` attribute has been renamed to `Overall`, and the `Quality` and `Value` attributes have been enabled.

**Request:**

```graphql
query {
  productReviewRatingsMetadata {
    items {
      id
      name
      values {
        value_id
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
    "productReviewRatingsMetadata": {
      "items": [
        {
          "id": "NA==",
          "name": "Overall",
          "values": [
            {
              "value_id": "MTY=",
              "value": "1"
            },
            {
              "value_id": "MTc=",
              "value": "2"
            },
            {
              "value_id": "MTg=",
              "value": "3"
            },
            {
              "value_id": "MTk=",
              "value": "4"
            },
            {
              "value_id": "MjA=",
              "value": "5"
            }
          ]
        },
        {
          "id": "MQ==",
          "name": "Quality",
          "values": [
            {
              "value_id": "MQ==",
              "value": "1"
            },
            {
              "value_id": "Mg==",
              "value": "2"
            },
            {
              "value_id": "Mw==",
              "value": "3"
            },
            {
              "value_id": "NA==",
              "value": "4"
            },
            {
              "value_id": "NQ==",
              "value": "5"
            }
          ]
        },
        {
          "id": "Mg==",
          "name": "Value",
          "values": [
            {
              "value_id": "Ng==",
              "value": "1"
            },
            {
              "value_id": "Nw==",
              "value": "2"
            },
            {
              "value_id": "OA==",
              "value": "3"
            },
            {
              "value_id": "OQ==",
              "value": "4"
            },
            {
              "value_id": "MTA=",
              "value": "5"
            }
          ]
        }
      ]
    }
  }
}
```

## Input attributes

Not applicable

## Output attributes {#Categories}

The `ProductReviewRatingsMetadata` output object contains the `items` object.

Attribute | Data type | Description
--- | --- | ---
`items` | [ProductReviewRatingMetadata!]! | A list of product reviews, sorted by position

### ProductReviewRatingMetadata attributes {#ProductReviewRatingMetadata}

The `ProductReviewRatingMetadata` object contains the following attributes.

Attribute | Data type | Description
--- | --- | ---
`id` | String! | | An encoded rating ID
`name` | String! | The label assigned to an aspect of a product that is being rated, such as quality or price
`values` | [ProductReviewRatingValueMetadata!]! | A list of product review ratings, sorted by position

### ProductReviewRatingValueMetadata attributes {#ProductReviewRatingValueMetadata}

The `ProductReviewRatingValueMetadata` object contains the following attributes.

Attribute | Data type | Description
--- | --- | ---
value | String! | A ratings scale, such as the number of stars awarded
value_id | String! | An encoded rating value ID
