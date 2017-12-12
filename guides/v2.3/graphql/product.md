---
layout: default
group: graphql
title: product
github_link: graphql/product.md
---

`product(sku: String!) AbstractProduct`

## Product types

### Simple products

Simple products are tangible items that are generally sold as single units or in fixed quantities.

All fields listed in [AbstractProduct object](#AbstractProduct) can be used to query simple products.

### Configurable products

 A configurable product has multiple options that the customer must select before making a purchase. Each variation is explicitly defined and assigned its own SKU. For example, if a t-shirt is available in 3 sizes and 2 colors, 6 configurable products must be defined.

 #### ConfigurableProductOptions object {#ConfigurableProductOptions}

Field | Type | Description
--- | --- | ---
id | Int |
attribute_id | String |
label | String |
position | Int |
is_use_default | Boolean |
values | [ConfigurableProductOptionsValues]  | See [ConfigurableProductOptionsValues object](#ConfigurableProductOptionsValues)
product_id | Int  |


#### ConfigurableProductOptionsValues object {#ConfigurableProductOptionsValues}

Field | Type | Description
--- | --- | ---
value_index | Int |

### Bundle products

TBD

### Downloadable products

TBD

### Grouped products

TBD

### Virtual products

TBD


## AbstractProduct object {#AbstractProduct}

The following fields are available to all product types.

Field | Type | Description
--- | --- | ---
attribute_set_id | Int | The attribute set assigned to the product
country_of_manufacture | String | The country where the product was manufactured
created_at | String | Timestamp indicating when product was created
custom_design | String | A theme that can be applied to the product page
custom_design_from | String | The beginning date when a theme is applied to the product page
custom_design_to | String | The date at which a theme is no longer applied to the product page
custom_layout | String |
custom_layout_update | String | XML code that is applied as a layout update to the product page
description | String | A detailed information about the product. The value can include simple HTML tags.
gift_message_available | String | Determines if a gift message can be included with the product purchase. // Future Boolean?
has_options | String | Indicates whether additional attributes have been created for the product. // Future Boolean?
id | Int |
image | String | The relative path for the main image on the product page.
image_label | String | The label associated with an image.
links_purchased_separately | String | TBD whether used
media_gallery_entries | [AbstractProductMediaGalleryEntries] | See [AbstractProductMediaGalleryEntries](#AbstractProductMediaGalleryEntries)
meta_description | String | A brief overview of the product for search results listings. Maximum 255 characters.
meta_keyword | String | A comma-separated list of keywords that are visible only to search engines.
meta_title | String | Appears in the title bar and tab of the browser and search results lists.
name | String | The product name. Customers use this name to identify the product.
news_from_date | String | The “from” date for new product listings, and determines if the product is featured as a new product.
news_to_date | String | The “to” date for new product listings.
options_container | String | If the product has multiple options, determines where they appear on the product page.
options | [AbstractProductOptions] | See [AbstractProductOptions](#AbstractProductOptions)
page_layout | String | The page layout of the product page. Values are `1column-center`, `2columns-left`, `2columns-right`, and `3columns`.
product_links | [AbstractProductProductLinks] | See [AbstractProductProductLinks](#AbstractProductProductLinks)
short_description | String | A short description of the product. Its use depends on the theme
sku | String | Required. A unique, alphanumeric identifier that is used to track inventory.
small_image | String | The file name of a small image, which is used on catalog pages
small_image_label | String | The label associated with the small image.
special_price | String | 	The discounted price of the product
status | Int | 0 - out of stock; 1 - in stock
thumbnail | String | The file name of a thumbnail image
thumbnail_label | String | The label associated with any thumbnail images.
tier_price | String |
type_id | String |
updated_at | String | The date when the product was last updated.
url_key | String | 	The part of the URL that identifies the product
url_path | String | The part of the URL that precedes the `url_key`
weight_type | String |
~~category_ids~~ | String |
~~category_links~~ | [AbstractProductCategoryLinks] |
~~cost~~ | String |
~~gallery~~ | String |
~~links_exist~~ | String |
~~links_title~~ | String |
~~media_gallery~~ | String |
~~minimal_price~~ | String |
~~msrp_display_actual_price_type~~ | String |
~~msrp~~ | String |
~~old_id~~ | String |
~~price_type~~ | String |
~~price_view~~ | String |
~~price~~ | Float |
~~required_options~~ | String |
~~samples_title~~ | String |
~~shipment_type~~ | String |
~~special_from_date~~ | String |
~~special_to_date~~ | String |
~~swatch_image~~ | String |
~~tax_class_id~~ | String |
~~tier_prices~~ | [AbstractProductTierPrices] | [See AbstractProductTierPrices object](AbstractProductTierPrices)
~~visibility~~ | Int |
~~website_ids~~ | [Int] |
~~weight~~ | Float |


### AbstractProductCategoryLinks object {#AbstractProductCategoryLinks}

Marked for omission

Field | Type | Description
--- | --- | --
position | Int | The position of the category in the category tree
category_id | String | Identifies the category

### AbstractProductProductLinks object {#AbstractProductProductLinks}

Field | Type | Description
--- | --- | ---
sku | String | The identifier of the linked product
link_type | String | One of `related`, `associated`, `upsell`, or `crosssell`.
linked_product_sku | String | The SKU of the linked product
linked_product_type | String | The type of linked product (`simple`, `virtual`, `bundle`, `downloadable`,`grouped`, `configurable`)
position | Int | The position within the list of product links
qty | Float |  The quantity of the linked product

### AbstractProductOptions object {#AbstractProductOptions}

Field | Type | Description
--- | --- | ---
product_sku | String | The `sku` of the base product
option_id | Int | The id assigned to the custom option
title | String | The display name of the custom option
type | String | Defines how the option is displayed. Values include `area`, `checkbox`, `date`, `date_time`, `drop_down`, `field`, `file`, `multiple, ``radio`, and `time`.
sort_order | Int | The order in which the option is displayed
is_require | Boolean | Indicates whether the option is required
price | Float | The price of the customized option
price_type | String | `fixed` or `percent`
sku | String | The `sku` of the customized option
file_extension | String | The file extension to accept when the `type` is `file`,
max_characters | Int | The maximum number of characters to accept when the `type` is `area` or field
image_size_x | Int | The maximum width of an image
image_size_y | Int | The maximum height of an image
values | [AbstractProductOptionsValues] | See [AbstractProductOptionsValues](#AbstractProductOptionsValues)

#### AbstractProductOptionsValues object {#AbstractProductOptionsValues}

Field | Type | Description
--- | --- | ---
title | String | The display name of the custom value
sort_order | Int | The order in which the custom value is displayed
price | Float | The price of the customized value
price_type | String | `fixed` or `percent`
sku | String | The `sku` of the customized value
option_type_id | Int | An ID assigned to the option type.

### AbstractProductMediaGalleryEntries object {#AbstractProductMediaGalleryEntries}

Field | Type | Description
--- | --- | ---
id | Int | The identifier assigned to the object
media_type | String | `image` or `video`
label | String | The label that will be displayed on theUI when pointing to the image
position | Int | The sort order
disabled | Boolean | Whether the image is hidden from view
types | [String] | Array of image types. Can have the following values: `image`, `small_image`, `thumbnail`
file | String | The path the the image on the server
content | AbstractProductMediaGalleryEntriesContent | [See AbstractProductMediaGalleryEntriesContent](#AbstractProductMediaGalleryEntriesContent)
video_content | AbstractProductMediaGalleryEntriesVideoContent | [See AbstractProductMediaGalleryEntriesVideoContent](#AbstractProductMediaGalleryEntriesVideoContent)

#### AbstractProductMediaGalleryEntriesContent object {#AbstractProductMediaGalleryEntriesContent}

Field | Type | Description
--- | --- | ---
base64_encoded_data | String | The image in base64 format
type | String | The MIME type of the file, such as `image/png`
name | String | The name the file will be saved as on the server

#### AbstractProductMediaGalleryEntriesVideoContent object {#AbstractProductMediaGalleryEntriesVideoContent}

Field | Type | Description
--- | --- | ---
media_type | String | `external-video`
video_provider | String | Optionally describes the video source
video_url | String | Required. The URL to the video
video_title | String | Required. The title of the video
video_description | String | A description of the video
video_metadata | String | Optional data about the video

### AbstractProductTierPrices object

Marked for omission

Field | Type | Description
--- | --- | ---
customer_group_id | Int | The ID of the customer group
qty | Float | The number of items that must be purchased to qualify for tier pricing
value | Float | The price of the fixed price item
percentage_value | Float | The percentage discount of the item
website_id | Int | The ID assigned to the website.
