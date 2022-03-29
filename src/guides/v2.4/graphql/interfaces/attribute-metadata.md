---
group: graphql
title: AttributeMetadataInterface
pwa_only: True
---

The `AttributeMetadataInterface` data type defines properties of custom attribute metadata.

## AttributeMetadataInterface object

The `AttributeMetadataInterface` object contains the following attributes:

Attribute | Type | Description
--- | --- | ---
`uid` | ID | The unique ID of an attribute
`code` | String | The unique identifier for an attribute code. This value should be lowercase, without spaces
`label` | String | The label assigned to the attribute
`attribute_labels` | [`StoreLabels`] | An array of attribute labels defined for the current store
`data_type` | ObjectDataTypeEnum | The data type of the attribute
`sort_order` | Int | The relative position of the attribute
`is_system` | Boolean | Indicates whether the attribute is a system attribute
`entity_type` | AttributeEntityTypeEnum | The type of entity that defines the attribute
`ui_input` | UiInputTypeInterface | Frontend UI properties of the attribute
