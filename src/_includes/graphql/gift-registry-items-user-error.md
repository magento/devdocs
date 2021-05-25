The `GiftRegistryItemsUserError` object contains information about errors that are specific to gift registries.

Attribute |  Data Type | Description
--- | --- | ---
`code`  | GiftRegistryItemsUserErrorType! | A gift registry specific error code. Possible values include `OUT_OF_STOCK`, `NOT_FOUND`, and `UNDEFINED`
`message` | String! | A localized error message
`product_uid` | ID | The unique ID of the product containing an error
`gift_registry_item_uid` | ID | The unique ID of the gift registry item containing an error
`gift_registry_uid` | ID | The unique ID of the `GiftRegistry` object containing an error
