The `AttributeMetadataInterface` object contains the following attributes:

Attribute | Type | Description
--- | --- | ---
`attribute_labels` | [`StoreLabels`] | An array of attribute labels defined for the current store
`code` | String | The unique identifier for an attribute code. This value should be lowercase, without spaces
`data_type` | ObjectDataTypeEnum | The data type of the attribute
`entity_type` | AttributeEntityTypeEnum | The type of entity that defines the attribute
`is_system` | Boolean | Indicates whether the attribute is a system attribute
`label` | String | The label assigned to the attribute
`sort_order` | Int | The relative position of the attribute
`uid` | ID | The unique ID of an attribute
`ui_input` | UiInputTypeInterface | Frontend UI properties of the attribute
