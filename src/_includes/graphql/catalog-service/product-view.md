The `ProductView` return object is an interface that can contain the following fields. It is implemented by the [`SimpleProductView`](#SimpleProductView-type) and [`ComplexProductView`](#ComplexProductView-type) types.

Field | Data Type | Description
--- | --- | ---
`attributes(roles: [String])` | [ProductViewAttribute] | A list of merchant-defined attributes designated for the storefront.
`description` | String | The detailed description of the product.
`id` | ID! | The product ID, generated as a composite key, unique per locale.
`images(roles: [String])` | [ProductViewImage] | A list of images defined for the product.
`metaDescription` | String | A brief overview of the product for search results listings.
`metaKeyword` | String | A comma-separated list of keywords that are visible only to search engines.
`metaTitle` | String | A string that is displayed in the title bar and tab of the browser and in search results lists.
`name` | String | Product name.
`shortDescription` | String | A summary of the product.
`sku` | String | Product SKU.
`url` | String | Canonical URL of the product.

### ComplexProductView type {#ComplexProductView-type}

The `ComplexProductView` type represents bundle, configurable, and group products. Complex product prices are returned as a price range, because price values can vary based on selected options. The type implements `ProductView`.

Field | Data Type | Description
--- | --- | ---
`attributes(roles: [String])` | [ProductViewAttribute] | A list of merchant-defined attributes designated for the storefront.
`description` | String | The detailed description of the product.
`id` | ID! | The product ID, generated as a composite key, unique per locale.
`images(roles: [String])` | [ProductViewImage] | A list of images defined for the product.
`metaDescription` | String | A brief overview of the product for search results listings.
`metaKeyword` | String | A comma-separated list of keywords that are visible only to search engines.
`metaTitle` | String | A string that is displayed in the title bar and tab of the browser and in search results lists.
`name` | String | Product name.
`options` | [ProductViewOption] | A list of selectable options.
`priceRange` | ProductViewPriceRange | A range of possible prices for a complex product.
`shortDescription` | String | A summary of the product.
`sku` | String | Product SKU.
`url` | String | Canonical URL of the product.

### Price type

The `Price type` defines the price of a simple product or a part of a price range for a complex product. It can include a list of price adjustments.

Field | Data Type | Description
--- | --- | ---
`adjustments` | [PriceAdjustment] | A list of price adjustments.
`amount` | ProductViewMoney | Contains the monetary value and currency code of a product.

### PriceAdjustment type

The `PriceAdjustment` type specifies the amount and type of a price adjustment. An example code value is `weee`.

Field | Data Type | Description
--- | --- | ---
`amount` | Float | The amount of the price adjustment.
`code` | String | Identifies the type of price adjustment.

### ProductViewAttribute type

The `ProductViewAttribute` type is a container for customer-defined attributes that are displayed the storefront.

Field | Data Type | Description
--- | --- | ---
`label` | String | Label of the attribute.
`name` | String! | Name of an attribute code.
`roles` | [String] | Roles designated for an attribute on the storefront, such as "Show on PLP", "Show in PDP", or "Show in Search".
`value` | JSON | Attribute value, arbitrary of type.

### ProductViewImage type

The `ProductViewImage` type contains details about a product image.

Field | Data Type | Description
--- | --- | ---
`label` | String | The display label of the product image.
`roles` | [String] | A list that describes how the image is used. Can be `image`, `small_image`, or `thumbnail`.
`url` | String! | The URL to the product image.

### ProductViewMoney type

The `ProductViewMoney` type defines a monetary value, including a numeric value and a currency code.

Field | Data Type | Description
--- | --- | ---
`currency` | ProductViewCurrency | A three-letter currency code, such as USD or EUR.
`value` | Float | A number expressing a monetary value.

### ProductViewOption type

Product options provide a way to configure products by making selections of particular option values. Selecting one or many options will point to a specific simple product.

Field | Data Type | Description
--- | --- | ---
`id` | ID | The ID of the option.
`multi` | Boolean | Indicates whether the option allows multiple choices.
`required` | Boolean | Indicates whether the option must be selected.
`title` | String | The display name of the option.
`values` | [ProductViewOptionValue!] | List of available option values.

### ProductViewOptionValue interface

The `ProductViewOptionValue` interface defines the product fields available to the `ProductViewOptionValueProduct` and `ProductViewOptionValueConfiguration` types.

Field | Data Type | Description
--- | --- | ---
`id` | ID | The ID of an option value.
`title` | String | The display name of the option value.

### ProductViewOptionValueConfiguration type

The `ProductViewOptionValueConfiguration` type is an implementation of `ProductViewOptionValue` for configuration values.

Field | Data Type | Description
--- | --- | ---
`id` | ID | The ID of an option value.
`title` | String | The display name of the option value.

### ProductViewOptionValueProduct type

The `ProductViewOptionValueProduct` type is an implementation of `ProductViewOptionValue` that adds details about a simple product.

Field | Data Type | Description
--- | --- | ---
`id` | ID | The ID of an option value.
`title` | String | The display name of the option value.
`product` | SimpleProductView | Details about a simple product.

### ProductViewPrice type

The `ProductViewPrice` type provides the base product price view, inherent for simple products.

Field | Data Type | Description
--- | --- | ---
`final` | Price | Price value after discounts, excluding personalized promotions.
`regular` | Price | Base product price specified by the merchant.
`roles` | [String] | Determines if the price should be visible or hidden.

### ProductViewPriceRange type

The `ProductViewPriceRange` type lists the minimum and maximum price of a complex product.

Field | Data Type | Description
--- | --- | ---
`maximum` | ProductViewPrice | Maximum price.
`minimum` | ProductViewPrice | Minimum price.

### SimpleProductView type {#SimpleProductView-type}

The `SimpleProductView` type represents all product types, except bundle, configurable, and group. Simple product prices do not contain price ranges. `SimpleProductView` implements `ProductView`.

Field | Data Type | Description
--- | --- | ---
`attributes(roles: [String])` | [ProductViewAttribute] | A list of merchant-defined attributes designated for the storefront.
`description` | String | The detailed description of the product.
`id` | ID! | The product ID, generated as a composite key, unique per locale.
`images(roles: [String])` | [ProductViewImage] | A list of images defined for the product.
`metaDescription` | String | A brief overview of the product for search results listings.
`metaKeyword` | String | A comma-separated list of keywords that are visible only to search engines.
`metaTitle` | String | A string that is displayed in the title bar and tab of the browser and in search results lists.
`name` | String | Product name.
`price` | ProductViewPrice | Base product price view.
`shortDescription` | String | A summary of the product.
`sku` | String | Product SKU.
`url` | String | Canonical URL of the product.
