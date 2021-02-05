Attribute |  Data Type | Description
--- | --- | ---
`attributes` | [[ComparableAttribute]](#comparableAttributeObjectOutput) | An array of attributes that can be used for comparing products
`item_count` | Int! | Count of the comparing products
`items` | [[ComparableItem]](#comparableItemObjectOutput) | An array of the comparing products
`uid` | ID! | The unique ID assigned to the compare list

### ComparableAttribute object {#comparableAttributeObjectOutput}

The `ComparableAttribute` object outputs attributes which available to comparison:

Attribute |  Data Type | Description
--- | --- | ---
`code` | String! | An attribute code that is enabled for product comparisons
`label` | String! | An attribute label that is enabled for product comparisons

### ComparableItem object {#comparableItemObjectOutput}

The `ComparableItem` object outputs items that have been added to compare list:

Attribute |  Data Type | Description
--- | --- | ---
`attributes` | [[ProductAttribute]!](#productAttributeObjectOutput) | An array of product attributes that can be used to compare products
`product` | [ProductInterface!]({{ page.baseurl }}/graphql/interfaces/product-interface.html) | Contains details about a product in a compare list
`uid` | ID! | The unique ID of the item in a compare list

### ProductAttribute object {#productAttributeObjectOutput}

The `ProductAttribute` object outputs item data from the corresponding attribute:

Attribute |  Data Type | Description
--- | --- | ---
`code` | String! | The unique identifier for a product attribute code
`label` | String! | The display value of the attribute
