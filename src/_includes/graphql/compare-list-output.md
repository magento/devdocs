Attribute |  Data Type | Description
--- | --- | ---
`attributes` | [[ComparableAttribute]](#comparableAttributeObjectOutput) | An array of attributes that can be used for comparing products
`item_count` | Int! | The number of items in the compare lists
`items` | [[ComparableItem]](#comparableItemObjectOutput) | An array of products to compare
`uid` | ID! | The unique ID of a `CompareList` object

### ComparableAttribute object {#comparableAttributeObjectOutput}

The `ComparableAttribute` object outputs attributes which available to comparison:

Attribute |  Data Type | Description
--- | --- | ---
`code` | String! | An attribute code that is enabled for product comparisons
`label` | String! | The label of the attribute code.

### ComparableItem object {#comparableItemObjectOutput}

The `ComparableItem` object outputs items that have been added to compare list:

Attribute |  Data Type | Description
--- | --- | ---
`attributes` | [[ProductAttribute]!](#productAttributeObjectOutput) | An array of product attributes that can be used to compare products
`product` | [ProductInterface!]({{ page.baseurl }}/graphql/interfaces/product-interface.html) | Contains details about a product in a compare list
`uid` | ID! | The unique ID of a `ComparableItem` object

### ProductAttribute object {#productAttributeObjectOutput}

The `ProductAttribute` object outputs item data from the corresponding attribute:

Attribute |  Data Type | Description
--- | --- | ---
`code` | String! | The unique identifier for a product attribute code
`label` | String! | The display value of the attribute
