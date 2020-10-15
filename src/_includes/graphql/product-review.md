The `ProductReview` object contains details about a product review. It contains the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`average_rating` | Float! | The average rating for product review
`created_at` | String! | Date indicating when the review was created
`nickname` | String! | The customer's nickname. Defaults to the customer name, if logged in
`product` | ProductInterface! | Contains details about the reviewed product
`ratings_breakdown` | [ProductReviewRating!]! | An array of ratings by rating category, such as quality, price, and value
`summary` | String! | The summary (title) of the review
`text` | String! | The review text

### ProductReviewRating attributes {#ProductReviewRating}

The `ProductReviewRating` object contains the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`name` | String! | The label assigned to an aspect of a product that is being rated, such as quality or price
`value` | String! | The rating value given by customer. By default, possible values range from 1 to 5
