The `GiftRegistryDynamicAttributeMetadata` data type implements the `GiftRegistryDynamicAttributeMetadataInterface`.

This interface contains the following attributes:

Attribute | Data type | Description
--- | --- | ---
`attribute_group` | String! | Indicates which group of the dynamic attribute a member of
`code` | ID! | The internal ID of the dynamic attribute
`input_type` | String! | The input type of the dynamic attribute
`is_required` | Boolean! | Indicates whether the dynamic attribute is required
`label` | String! | The display name of the dynamic attribute
`sort_order` | Int | The order in which to display the dynamic attribute
