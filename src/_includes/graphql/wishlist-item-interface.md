The `WishlistItemInterface` contains the following attributes.

Attribute | Data type | Description
--- | --- | ---
`added_at` | String!  | The date and time the item was added to the wish list
`customizable_options`| [SelectedCustomizableOption] | Custom options selected for the wish list item
`description`| String  | The description of the item
`id`| ID!  | The ID of the wish list item
`product` | [ProductInterface]({{page.baseurl}}/graphql/interfaces/product-interface.html) | Product details of the wish list item
`quantity`| Float!  | The quantity of this wish list item
