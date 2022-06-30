The `CartUserInputError` object contains information about errors that are specific to carts.

| Attribute | Data Type               | Description                                                                                                                  |
|-----------|-------------------------|------------------------------------------------------------------------------------------------------------------------------|
| `code`    | CartUserInputErrorType! | A cart-specific error code. Possible values include `PRODUCT_NOT_FOUND`, `NOT_SALABLE`, `INSUFFICIENT_STOCK` and `UNDEFINED` |
| `message` | String!                 | A localized error message                                                                                                    |
