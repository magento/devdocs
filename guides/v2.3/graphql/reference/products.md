---
layout: default
group: graphql
title: Products endpoint
version: 2.3
github_link: graphql/products.md
---

The `products` endpoint allows you to search for catalog items.

## Query structure

``` json
products(
search: String
filter: ProductFilterInput
pageSize: Int
currentPage: Int
sort: ProductSortInput
): Products
```

where:

Attribute |  Description
--- | ---
`search` | Performs a full-text search using the specified key words. This attribute is optional. See [Searches and pagination in GraphQL]({{page.baseurl}}graphql/search-pagination.html) for more information.
`filter` | Identifies which attributes to search for and return. This attribute is required. See [ProductFilterInput](#ProductFilterInput) for more information.
`pageSize` | Specifies the maximum number of results to return at once. The default value is 20. See [Searches and pagination in GraphQL]({{page.baseurl}}graphql/search-pagination.html) for more information.
`currentPage` | Specifies which page of results to return. The default value is 1. See [Searches and pagination in GraphQL]({{page.baseurl}}graphql/search-pagination.html) for more information.
`sort` | Specifies which attribute to sort on, and whether to return the results in ascending or descending order. See [Searches and pagination in GraphQL]({{page.baseurl}}graphql/search-pagination.html) for more information.
`Products` | An output object that contains the results of the query.

## ProductFilterInput object {#ProductFilterInput}

The `ProductFilterInput` object defines the filters to be used in the search. A filter contains at least one attribute, a comparison operator, and the value that is being searched for. The following example filter searches for products that has a `sku` that contains the string `24-MB` with a `price` that's less than `50`.

{% highlight json %}
filter: {
       sku: {like: "24-MB%"}
       price: {lt: "50"}
       }
{% endhighlight %}


See [Searches and pagination in GraphQL]({{page.baseurl}}graphql/search-pagination.html) for more information about the operators.

Magento processes the attribute values specified in  a `ProductFilterInput` as  simple data types (strings, integers, booleans). However, returned attributes can be a different, complex, data type. For example, in a response, `price` is an object that contains a monetary value and a currency code.

The following attributes can be used to create filters. See the [Response](#Response) section for information about each attribute.

```
category_ids
color
country_of_manufacture
created_at
custom_design
custom_design_from
custom_design_to
custom_layout
custom_layout_update
description
gift_message_available
has_options
image
image_label
manufacturer
meta_description
meta_keyword
meta_title
name
news_from_date
news_to_date
options_container
or
page_layout
price
required_options
short_description
sku
small_image
small_image_label
special_from_date
special_price
special_to_date
thumbnail
thumbnail_label
tier_price
updated_at
weight
```

<div class="bs-callout bs-callout-info" id="info" markdown="1">
The following attributes are not used in responses:
* `or` - The keyword required to perform a logical OR comparison.
* `news_from_date` - This attribute is transformed to `news_from_date` in a response.
* `news_to_date` - This attribute is transformed to `news_to_date` in a response.
</div>



## Response {#Response}

The system returns a `Products` object containing the following information:

{% highlight json %}
items: [ProductInterface]
page_info: SearchResultPageInfo
total_count: Int
{% endhighlight %}

where:

Attribute |  Description
--- | ---
`items` | An array of products that match the specified search criteria
`page_info` | An object that includes the `page_info` and `currentPage` values specified in the query
`total_count` | The number of products returned

### Items Array

The `Items` array can contain all the attributes that can be specified in an `ProductFilterInput` object, plus the attributes and objects listed in the following table. The array can also contain any custom and extension attributes defined in any attribute set.

Attribute | Data type | Description
--- | --- | ---
`attribute_set_id` | Int | The attribute set assigned to the product
`category_ids` | [Int] | An array of category IDs the product belongs to
`category_links` | [ProductCategoryLinks] | An array of [ProductCategoryLinks](#ProductCategoryLinks) objects
`color` | Int | A number assigned to represent the color
`configurable_product_options` | [ProductConfigurableProductOptions] | An array of [ProductConfigurableProductOptions](#ProductConfigurableProductOptions) objects
`country_of_manufacture` | String | The product's country of origin
`created_at` | String | Timestamp indicating when the product was created
`custom_design` | String | A theme that can be applied to the product page
`custom_design_from` | String | The beginning date when a theme is applied to the product page
`custom_design_to` | String| The date at which a theme is no longer applied to the product page
`custom_layout` | String | The name of a custom layout
`custom_layout_update` | String | XML code that is applied as a layout update to the product page
`description` | String | Detailed information about the product. The value can include simple HTML tags
`gift_message_available` | String | Indicates whether a gift message is available
`has_options` | String | Indicates whether additional attributes have been created for the product
`id` | Int | The ID number assigned to the product
`image` | String | The relative path for the main image on the product page
`image_label` | String | The label assigned to a product image
`is_returnable` | String | Indicates whether the product can be returned. This attribute is defined in the Rma module.
`manufacturer` | Int | A number representing the product's manufacturer
`media_gallery_entries` | [MediaGalleryEntry] | An array of [MediaGalleryEntry](#MediaGalleryEntry) objects
`meta_description` | String | A brief overview of the product for search results listings, maximum 255 characters
`meta_keyword` | String | A comma-separated list of keywords that are visible only to search engines
`meta_title` | String | A string that is displayed in the title bar and tab of the browser and in search results lists
`name` | String | The product name. Customers use this name to identify the product.
`new_from_date` | String | The beginning date for new product listings, and determines if the product is featured as a new product
`new_to_date` | String | The end date for new product listings
`options` | [ProductOptions] | An array of [ProductOptions](#ProductOptions) objects
`options_container` | String | If the product has multiple options, determines where they appear on the product page
`page_layout` | String | The page layout of the product page. Values are `1column-center`, `2columns-left`, `2columns-right`, and `3columns`
`price` | Float | The price of an item. A `ProductPrice` object is returned. See [Price]({{page.baseurl}}graphql/price.html) for more information.
`product_links` | [ProductLinks] | An array of [ProductLinks](#ProductLinks) objects
`required_options` | Not applicable | Input only--indicates whether the product has required options
`short_description` | String | A short description of the product. Its use depends on the store's theme.
`sku` | String | A number or code assigned to a product to identify the product, options, price, and manufacturer
`small_image` | String | The relative path to the small image, which is used on catalog pages
`small_image_label` | String | The label assigned to a product's small image
`special_from_date` | String | The beginning date that a product has a special price
`special_price` | Float |  The discounted price of the product
`special_to_date` | String | The end date that a product has a special price
`swatch_image` | String | The file name of a swatch image. This attribute is defined in the Swatches module.
`tax_class_id` | Int | An ID assigned to a tax class. This attribute is defined in the Tax module.
`thumbnail` | String | The relative path to the product's thumbnail image
`thumbnail_label` | String | The label assigned to a product's thumbnail image
`tier_price` | Float | The price when tier pricing is in effect and the items purchased threshold has been reached
`tier_prices` | [ProductTierPrices] | An array of [ProductTierPrices](#ProductTierPrices) objects
`type_id` | String | One of `simple`, `virtual`, `bundle`, `downloadable`,`grouped`, `configurable`
`updated_at` | String | The timestamp indicating when the product was last updated
`url_key` | String |  The part of the URL that identifies the product
`url_path` |  String | The part of the URL that precedes the `url_key`
`website_ids` | [Int] | An array of website IDs in which the product is available
`weight` | Float | The weight of the item, in units defined by the store

Several product types have their own implementation of the `ProductInterface`. These implementations may contain additional attributes.

[BundleProduct]({{page.baseurl}}graphql/reference/bundle-product.html)
[ConfigurableProduct]({{page.baseurl}}graphql/reference/configurable-product.html)
[DownloadableProduct]({{page.baseurl}}graphql/reference/downloadable-product.html)
[GroupedProduct]({{page.baseurl}}graphql/reference/grouped-product.html)
SimpleProduct
VirtualProduct

#### Price object

Field | Type | Description
--- | --- | ---
`amount` | `Money` | The price of a product plus a three-letter currency code
`adjustments` | `PriceAdjustment` | An array that provides information about tax, weee, or weee_tax adjustments

##### Money object

Field | Type | Description
--- | --- | ---
`value` | Float | A number expressing a monetary value
`currency` | `CurrencyEnum` | A three-letter currency code, such as `USD` or `EUR`

##### PriceAdjustment object

Field | Type | Description
--- | --- | ---
`amount` | `Money` | The amount of the price adjustment and its currency code.
`code` | `PriceAdjustmentCodesEnum` | Indicates whether the adjustment involves `tax`, `weee`, or `weee_tax`
`description` | `PriceAdjustmentDescriptionEnum` | Indicates whether the entity described by the code attribute is included or excluded from the adjustment

#### ProductPrices

Field | Type | Description
--- | --- | ---
`minimalPrice` | Price | Used for composite (bundle, configurable, grouped) products. This is the lowest possible final price for all the options defined within a composite product. If you're specifying a price range, this would be the 'from' value.
`maximalPrice` | Price | Used for composite (bundle, configurable, grouped) products. This is the highest possible final price for all the options defined within a composite product. If you're specifying a price range, this would be the 'to' value.
`regularPrice` | Price | The base price of a product.

#### ProductCategoryLinks object {#ProductCategoryLinks}

Field | Type | Description
--- | --- | ---
`position` | Int | The position of the category in the category tree
`category_id` | String | The unique identifier for the category

#### ProductConfigurableProductOptions

Field | Type | Description
--- | --- | ---
`id` | Int | The configurable option ID number assigned by the system
`attribute_id` | String | The ID assigned to the attribute
`label` | String | A string that describes the configurable product option. It is displayed on the UI
`position` | Int | A number that indicates the order in which the attribute is displayed.
`is_use_default` | Boolean | Indicates whether the option is the default
`values` | [ProductOptionsValues] | An array that defines the value_index codes assigned to the configurable product.
`product_id` | Int | This is the same as a product's 'id' field.

#### ProductOptions object {#ProductOptions}

Field | Type | Description
--- | --- | ---
`product_sku` | String | The `sku` of the base product
`option_id` | Int | The ID assigned to the custom option
`title` | String | The display name of the custom option
`type` | String | Defines how the option is displayed. Values include `area`, `checkbox`, `date`, `date_time`, `drop_down`, `field`, `file`, `multiple`, `radio`, and `time`.
`sort_order` | Int | The order in which the option is displayed
`is_require` | Boolean | Indicates whether the option is required
`price` | Float | The price of the customized option
`price_type` | String | `fixed` or `percent`
`sku` | String | The `sku` of the customized option
`file_extension` | String | The file extension to accept when the `type` is `file`
`max_characters` | Int | The maximum number of characters to accept when the value of `type` is `area` or `field`
`image_size_x` | Int | The maximum width of an image
`image_size_y` | Int | The maximum height of an image
`values` | [ProductOptionsValues] | Any array of [ProductOptionsValues](#ProductOptionsValues) objects

##### ProductOptionsValues object {#ProductOptionsValues}

Field | Type | Description
--- | --- | ---
`title` |  String | The display name of the value assigned to a custom option.
`sort_order` | Int | The order in which the custom value is displayed.
`price` | Float |  The price of the custom value.
`price_type` | String | `fixed` or `percent`
`sku` | String | The Stock Keeping Unit of the custom value.
`option_type_id` | Int | The ID assigned to the custom value.

#### ProductLinks object {#ProductLinks}

Field | Type | Description
--- | --- | ---
`sku` | String | The identifier of the linked product
`link_type` | String | One of `related`, `associated`, `upsell`, or `crosssell`.
`linked_product_sku` | String | The SKU of the linked product
`linked_product_type` | String | The type of linked product (`simple`, `virtual`, `bundle`, `downloadable`,`grouped`, `configurable`)
`position` | Int | The position within the list of product links
`qty` | Float |  The quantity of the linked product

#### MediaGalleryEntry object {#MediaGalleryEntry}

Field | Type | Description
--- | --- | ---
`id` | Int | The identifier assigned to the object
`media_type` | String | `image` or `video`
`label` | String | The "alt" text displayed on the UI when the user points to the image
`position` | Int | The media item's position after it has been sorted
`disabled` | Boolean | Whether the image is hidden from view
`types` | [String] | Array of image types. It can have the following values: `image`, `small_image`, `thumbnail`
`file` | String | The path of the image on the server
`content` | ProductMediaGalleryEntriesContent | Contains a [ProductMediaGalleryEntriesContent](#ProductMediaGalleryEntriesContent) object
`video_content` | ProductMediaGalleryEntriesVideoContent | Contains a [ProductMediaGalleryEntriesVideoContent](#ProductMediaGalleryEntriesVideoContent) object

##### ProductMediaGalleryEntriesContent object {#ProductMediaGalleryEntriesContent}

Field | Type | Description
--- | --- | ---
`base64_encoded_data` | String | The image in base64 format
`type` | String | The MIME type of the file, such as `image/png`
`name` | String | The file name of the image

##### ProductMediaGalleryEntriesVideoContent object {#ProductMediaGalleryEntriesVideoContent}

Field | Type | Description
--- | --- | ---
`media_type` | String | Must be `external-video`
`video_provider` | String | Optionally describes the video source
`video_url` | String | Required. The URL to the video
`video_title` | String | Required. The title of the video
`video_description` | String | A description of the video
`video_metadata` | String | Optional data about the video

### ProductTierPrices object

Field | Type | Description
--- | --- | ---
`customer_group_id` | Int | The ID of the customer group
`qty` | Float | The number of items that must be purchased to qualify for tier pricing
`value` | Float | The price of the fixed price item
`percentage_value` | Float | The percentage discount of the item
`website_id` | Int | The ID assigned to the website


### CustomizableAreaOption object

Field | Type | Description
--- | --- | ---
`value` | `CustomizableAreaValue` | An object that defines a text area
`product_sku` | String | The Stock Keeping Unit of the base product

#### CustomizableAreaValue object

Field | Type | Description
--- | --- | ---
`price` | Float | The price assigned to this option
`price_type` | PriceTypeEnum | FIXED, PERCENT, or DYNAMIC
`sku` | String | The Stock Keeping Unit for this option
`max_characters` | Int | The maximum number of characters that can be entered for this customizable option

### CustomizableDateOption object

Field | Type | Description
--- | --- | ---
`value` | `CustomizableDateValue` | An object that defines a date field in a customizable option.
`product_sku` | String | The Stock Keeping Unit of the base product

#### CustomizableDateValue object

Field | Type | Description
--- | --- | ---
`price` | Float | The price assigned to this option
`price_type` | PriceTypeEnum | FIXED, PERCENT, or DYNAMIC
`sku` | String | The Stock Keeping Unit for this option

### CustomizableDropDownOption object

Field | Type | Description
--- | --- | ---
`value` | `CustomizableDropDownValue` | An array that defines the set of options for a drop down menu

#### CustomizableDropDownValue object

Field | Type | Description
--- | --- | ---
`option_type_id` | Int | The ID assigned to the value
`price` | Float | The price assigned to this option
`price_type` | PriceTypeEnum | FIXED, PERCENT, or DYNAMIC
`sku` | String | The Stock Keeping Unit for this option
`title` | String | The display name for this option
`sort_order` | Int | The order in which the option is displayed

### CustomizableFieldOption object

Field | Type | Description
--- | --- | ---
`value` | `CustomizableFieldValue` | An object that defines a text field
`product_sku` | String | The Stock Keeping Unit of the base product

#### CustomizableFieldValue object

Field | Type | Description
--- | --- | ---
`price` | Float | The price of the custom value
`price_type` | PriceTypeEnum | FIXED, PERCENT, or DYNAMIC
`sku` | String | The Stock Keeping Unit for this option
`max_characters` | Int | The maximum number of characters that can be entered for this customizable option

### CustomizableFileOption object

Field | Type | Description
--- | --- | ---
`value` | `CustomizableFileValue` | An object that defines a file value
`product_sku` | String | The Stock Keeping Unit of the base product

#### CustomizableFileValue object

Field | Type | Description
--- | --- | ---
`price` | Float | The price assigned to this option
`price_type` | PriceTypeEnum | FIXED, PERCENT, or DYNAMIC
`sku` | String | The Stock Keeping Unit for this option
`file_extension` | String | The file extension to accept
`image_size_x` | Int | The maximum width of an image
`image_size_y` | Int | The maximum height of an image

### CustomizableRadioOption object

Field | Type | Description
--- | --- | ---
`value` | `CustomizableRadioValue` | An array that defines a set of radio buttons

#### CustomizableRadioValue object

Field | Type | Description
--- | --- | ---
`option_type_id` | Int | The ID assigned to the value
`price` | Float | The price assigned to this option
`price_type` | PriceTypeEnum | FIXED, PERCENT, or DYNAMIC
`sku` | String | The Stock Keeping Unit for this option
`title` | String | The display name for this option
`sort_order` | Int | The order in which the option is displayed
