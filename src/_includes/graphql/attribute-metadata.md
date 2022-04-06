The `AttributeMetadataInterface` object contains the following attributes:

Attribute | Type | Description
--- | --- | ---
`ATTRIBUTE_LABELS` | [`StoreLabels`] | An array of attribute labels defined for the current store
`CODE` | String | The unique identifier for an attribute code. This value should be lowercase, without spaces
`DATA_TYPE` | ObjectDataTypeEnum | The data type of the attribute
`ENTITY_TYPE` | AttributeEntityTypeEnum | The type of entity that defines the attribute
`IS_SYSTEM` | Boolean | Indicates whether the attribute is a system attribute
`LABEL` | String | The label assigned to the attribute
`SORT_ORDER` | Int | The relative position of the attribute
`UID` | ID | The unique ID of an attribute
`UI_INPUT` | UiInputTypeInterface | Frontend UI properties of the attribute
