#### ItemSelectedBundleOption attributes {#ItemSelectedBundleOption}

The ItemSelectedBundleOption object contains a list of bundle options that are assigned to the bundle product.

Attribute | Data type | Description
--- | --- | ---
`id` | ID! | The unique identifier of the option
`label` | String! | The label of the option
`values` | [[ItemSelectedBundleOptionValue](#ItemSelectedBundleOptionValue)] | A list of products that represent the values of the parent option

#### ItemSelectedBundleOptionValue attributes {#ItemSelectedBundleOptionValue}

Attribute | Data type | Description
--- | --- | ---
`id` | ID! | The unique identifier of the option
`price` | Money! | The price of the child bundle product
`product_name` | String! | The name of the child bundle product
`product_sku` | String! | The SKU of the child bundle product
`quantity` | Float! | Indicates how many of this bundle product were ordered
