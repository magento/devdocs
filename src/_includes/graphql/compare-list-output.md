Attribute |  Data Type | Description
--- | --- | ---
`attributes` | [[ComparableAttribute]](#ComparableAttribute) | An array of attributes that can be used for comparing products
`item_count` | Int! | The number of items in the comparison lists
`items` | [[ComparableItem]](#ComparableItem) | An array of products to compare
`uid` | ID! | The unique ID of a `CompareList` object

### ComparableAttribute attributes {#ComparableAttribute}

The `ComparableAttribute` object lists the attributes that are available for comparisons:

Attribute |  Data Type | Description
--- | --- | ---
`code` | String! | An attribute code that is enabled for product comparisons
`label` | String! | The label of the attribute code

### ComparableItem attributes {#ComparableItem}

The `ComparableItem` object lists items that have been added to the comparison list:

Attribute |  Data Type | Description
--- | --- | ---
`attributes` | [[ProductAttribute]!](#ProductAttribute) | An array of product attributes that can be used to compare products
`product` | [ProductInterface!]({{ page.baseurl }}/graphql/interfaces/product-interface.html) | Contains details about a product in a comparison list
`uid` | ID! | The unique ID of a `ComparableItem` object

### ProductAttribute object {#ProductAttribute}

The `ProductAttribute` object outputs item data from the corresponding attribute:

Attribute |  Data Type | Description
--- | --- | ---
`code` | String! | The unique identifier for a product attribute code
`label` | String! | The display value of the attribute
