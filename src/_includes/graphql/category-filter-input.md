The `CategoryFilterInput` object defines the filters to be used in this query.

Attribute | Data type | Description
--- | --- | ---
`ids` | FilterEqualTypeInput | Filters by the specified category IDs
`name` | FilterMatchTypeInput | Filters by the display name of the category
`url_key` | FilterEqualTypeInput | Filters by the part of the URL that identifies the category
`url_path` | FilterEqualTypeInput | Filters by the URL path for the category

### FilterEqualTypeInput object

Use the `FilterEqualTypeInput` object to construct filters that search by category ID or URL key.

Attribute | Data type | Description
--- | --- | ---
`eq` | String | Use this attribute to exactly match the specified string. For example, to filter on a specific URL key, specify a value like `shorts-women`
`in` | [String] | Use this attribute to filter on an array of values. For example, to filter on category IDs 4, 5, and 6, specify a value of `["4", "5", "6"]`

### FilterMatchTypeInput object

Use the `FilterMatchTypeInput` object to construct a filter that matches the specified display name.

Attribute | Data type | Description
--- | --- | ---
`match` | String | Use this attribute to perform a fuzzy match on the specified string. For example, to filter on a specific category name, specify a value such as `Tops`
