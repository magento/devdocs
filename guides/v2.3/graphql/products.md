---
layout: default
group: graphql
title: Products endpoint
version: 2.3
github_link: graphql/products.md
---

The `Products` endpoint allows you to search for catalog items.

## Query structure

``` json
products(
  search: String
  filter: ProductAttributeSearchCriteria
  pageSize: Int
  currentPage: Int
  sort: ProductSort
)
```

where:

Attribute |  Description
--- | ---
`search` | Performs a full-text search using the specified key words. See [Searches and pagination in GraphQL]({{page.baseurl}}graphql/search-pagination.html) for more information.
`filter` | Identifies which attributes to search for and return. See [ProductAttributeSearchCriteria](#ProductAttributeSearchCriteria) for more information.
`pageSize` | Specifies the maximum number of results to return at once. The default value is 20. See [Searches and pagination in GraphQL]({{page.baseurl}}graphql/search-pagination.html) for more information.
`currentPage` | Specifies which page of results to return. The default value is 1. See [Searches and pagination in GraphQL]({{page.baseurl}}graphql/search-pagination.html) for more information.
`sort` | Specifies which attribute to sort on, and whether to return the results in ascending or descending order. See [Searches and pagination in GraphQL]({{page.baseurl}}graphql/search-pagination.html) for more information.

## ProductAttributeSearchCriteria object {#ProductAttributeSearchCriteria}

The `ProductAttributeSearchCriteria` object defines the filters to be used in the search.

These attributes can be used to create filters:

Attribute | Data type | Description
--- | --- | ---
~~category_ids~~ | |
`color` | String | A value representing the color
~~cost~~ | String |
`country_of_manufacture` | String | The country where the product was manufactured
`created_at` | String | Timestamp indicating when product was created
`custom_design` | String | A theme that can be applied to the product page
`custom_design_from` | String | The beginning date when a theme is applied to the product page
`custom_design_to` | String| The date at which a theme is no longer applied to the product page
`custom_layout` | String |
`custom_layout_update` | String | XML code that is applied as a layout update to the product page
`description` | String | A detailed information about the product. The value can include simple HTML tags.
~~gallery~~ | String |
`gift_message_available` | String | Determines if a gift message can be included with the product purchase. // Future Boolean?
`has_options` | String | Indicates whether additional attributes have been created for the product. // Future Boolean?
`image` | String | The relative path for the main image on the product page.
`image_label` | String | The label associated with an image.
~~links_exist~~ | String |
`links_purchased_separately` | String | TBD whether used
~~links_title~~ | String |
~~media_gallery~~ | String |
`meta_description` | String | A brief overview of the product for search results listings. Maximum 255 characters.
`meta_keyword` | String | A comma-separated list of keywords that are visible only to search engines.
`meta_title` | String | Appears in the title bar and tab of the browser and search results lists.
~~minimal_price~~ | String |
~~msrp~~ | String |
~~msrp_display_actual_price_type~~ | String |
`name` | String | The product name. Customers use this name to identify the product.
`news_from_date` | String | The “from” date for new product listings, and determines if the product is featured as a new product.
`news_to_date` | String | The “to” date for new product listings.
~~old_id~~ | String |
`options_container` | String | If the product has multiple options, determines where they appear on the product page.
`page_layout` | String | The page layout of the product page. Values are `1column-center`, `2columns-left`, `2columns-right`, and `3columns`.
`price` | Float | The price of an item. A `ProductPrice` object is returned. See [Price]({{page.baseurl}}graphql/price.html) for more information.
~~price_type~~ | String |
~~price_view~~ |  |
`quantity_and_stock_status` |  |
~~required_options~~ | String |
~~samples_title~~ | String |
~~shipment_type~~ | String |
`short_description` | String | A short description of the product. Its use depends on the theme.
`sku` | String | A unique, alphanumeric identifier that is used to track inventory.
`sku_type` |  |
`small_image` | String | The file name of a small image, which is used on catalog pages
`small_image_label` | String | The label associated with the small image.
~~special_from_date~~ | String |
`special_price` | String |  The discounted price of the product
~~special_to_date~~ | String |
`status` | Int | 0 - out of stock; 1 - in stock
~~swatch_image~~ | String |
~~tax_class_id~~ | String |
`thumbnail` | String | The file name of a thumbnail image
`thumbnail_label` | String | The label associated with any thumbnail images.
`tier_price` | String |
`updated_at` | String | The date when the product was last updated.
`url_key` | String |  The part of the URL that identifies the product
`url_path` |  String | The part of the URL that precedes the `url_key`
`visibility` | Int | 1 - the product is not displayed or searchable; 2 - the product is displayed but is not searchable; 3 - the product is searchable but not displayed; 4 - the product is displayed and is searchable.
`weight` | Float | The weight of the item, in units defined by the store
`weight_type` | String |


## Response

The system returns a `Products` object containing the following information:

``` json
items: [Product]
page_info: SearchResultPageInfo
total_count: Int
```

where:

Attribute |  Description
--- | ---
`items` | An array of products that match the specified search criteria
`page_info` | An object that includes the `page_info` and `currentPage` values specified in the query
`total_count` | The number of products returned.

### Items Array

The `Items` array can contain all the attributes that can be specified in an `ProductAttributeSearchCriteria` object, plus the following attributes and objects:

`id` | Int | The ID number assigned to the product.
`attribute_set_id` | Int | The attribute set assigned to the product.
`type_id` | String | One of `simple`, `virtual`, `bundle`, `downloadable`,`grouped`, `configurable`
`website_ids` | [Int] | An array of website IDs
`category_links` | [ProductCategoryLinks] | An array of [ProductCategoryLinks](#ProductCategoryLinks) objects
`configurable_product_options` | [ProductConfigurableProductOptions] | An array of [ProductConfigurableProductOptions](#ProductConfigurableProductOptions) objects
`product_links` | [ProductProductLinks] | An array of [ProductProductLinks](#ProductProductLinks) objects
`options` | [ProductOptions] | An array of [ProductOptions](#ProductOptions) objects
`media_gallery_entries` | [ProductMediaGalleryEntries] | An array of [ProductMediaGalleryEntries](#ProductMediaGalleryEntries) objects
`tier_prices` | [ProductTierPrices] | An array of [ProductTierPrices](#ProductTierPrices) objects

#### ProductCategoryLinks object {#ProductCategoryLinks}

Marked for omission

Field | Type | Description
--- | --- | --
`position` | Int | The position of the category in the category tree
`category_id` | String | Identifies the category

#### ProductConfigurableProductOptions

Field | Type | Description
--- | --- | --
`id` | Int |
`attribute_id` | String |
`label` | String |
`position` | Int |
`is_use_default` | Boolean |
`values` | [ProductConfigurableProductOptionsValues] |
`product_id` | Int |

##### ProductConfigurableProductOptionsValues

Field | Type | Description
--- | --- | --
`value_index` | Int |

#### ProductProductLinks object {#ProductProductLinks}

Field | Type | Description
--- | --- | ---
`sku` | String | The identifier of the linked product
`link_type` | String | One of `related`, `associated`, `upsell`, or `crosssell`.
`linked_product_sku` | String | The SKU of the linked product
`linked_product_type` | String | The type of linked product (`simple`, `virtual`, `bundle`, `downloadable`,`grouped`, `configurable`)
`position` | Int | The position within the list of product links
`qty` | Float |  The quantity of the linked product

#### ProductOptions object {#ProductOptions}

Field | Type | Description
--- | --- | ---
`product_sku` | String | The `sku` of the base product
`option_id` | Int | The id assigned to the custom option
`title` | String | The display name of the custom option
`type` | String | Defines how the option is displayed. Values include `area`, `checkbox`, `date`, `date_time`, `drop_down`, `field`, `file`, `multiple, ``radio`, and `time`.
`sort_order` | Int | The order in which the option is displayed
`is_require` | Boolean | Indicates whether the option is required
`price` | Float | The price of the customized option
`price_type` | String | `fixed` or `percent`
`sku` | String | The `sku` of the customized option
`file_extension` | String | The file extension to accept when the `type` is `file`,
`max_characters` | Int | The maximum number of characters to accept when the `type` is `area` or field
`image_size_x` | Int | The maximum width of an image
`image_size_y` | Int | The maximum height of an image
`values` | [ProductOptionsValues] | Any array of [ProductOptionsValues](#ProductOptionsValues) objects

#### ProductMediaGalleryEntries object {#ProductMediaGalleryEntries}

Field | Type | Description
--- | --- | ---
`id` | Int | The identifier assigned to the object
`media_type` | String | `image` or `video`
`label` | String | The label that will be displayed on theUI when pointing to the image
`position` | Int | The sort order
`disabled` | Boolean | Whether the image is hidden from view
`types` | [String] | Array of image types. Can have the following values: `image`, `small_image`, `thumbnail`
`file` | String | The path the the image on the server
`content` | ProductMediaGalleryEntriesContent | An array of [ProductMediaGalleryEntriesContent](#ProductMediaGalleryEntriesContent) objects
`video_content` | ProductMediaGalleryEntriesVideoContent | Any array of [ProductMediaGalleryEntriesVideoContent](#ProductMediaGalleryEntriesVideoContent) objects

##### ProductMediaGalleryEntriesContent object {#ProductMediaGalleryEntriesContent}

Field | Type | Description
--- | --- | ---
`base64_encoded_data` | String | The image in base64 format
`type` | String | The MIME type of the file, such as `image/png`
`name` | String | The name the file will be saved as on the server

##### ProductMediaGalleryEntriesVideoContent object {#ProductMediaGalleryEntriesVideoContent}

Field | Type | Description
--- | --- | ---
`media_type` | String | `external-video`
`video_provider` | String | Optionally describes the video source
`video_url` | String | Required. The URL to the video
`video_title` | String | Required. The title of the video
`video_description` | String | A description of the video
`video_metadata` | String | Optional data about the video

### ProductTierPrices object

Marked for omission

Field | Type | Description
--- | --- | ---
`customer_group_id` | Int | The ID of the customer group
`qty` | Float | The number of items that must be purchased to qualify for tier pricing
`value` | Float | The price of the fixed price item
`percentage_value` | Float | The percentage discount of the item
`website_id` | Int | The ID assigned to the website.
