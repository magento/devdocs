---
layout: default
group: graphql
title: Products endpoint
version: 2.3
github_link: graphql/reference/products.md
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
Each query attribute is defined below:

Attribute |  Description
--- | ---
`search` | Performs a full-text search using the specified key words. This attribute is optional. See [Searches and pagination in GraphQL]({{page.baseurl}}/graphql/search-pagination.html) for more information.
`filter` | Identifies which attributes to search for and return. This attribute is required. See [ProductFilterInput](#ProductFilterInput) for more information.
`pageSize` | Specifies the maximum number of results to return at once. The default value is 20. See [Searches and pagination in GraphQL]({{page.baseurl}}/graphql/search-pagination.html) for more information.
`currentPage` | Specifies which page of results to return. The default value is 1. See [Searches and pagination in GraphQL]({{page.baseurl}}/graphql/search-pagination.html) for more information.
`sort` | Specifies which attribute to sort on, and whether to return the results in ascending or descending order. See [Searches and pagination in GraphQL]({{page.baseurl}}/graphql/search-pagination.html) for more information.
`Products` | An output object that contains the results of the query. See [Response](#Response) for details.

## ProductFilterInput object {#ProductFilterInput}

The `ProductFilterInput` object defines the filters to be used in the search. A filter contains at least one attribute, a comparison operator, and the value that is being searched for. The following example filter searches for products that has a `sku` that contains the string `24-MB` with a `price` that's less than `50`.

{% highlight json %}
filter: {
       sku: {like: "24-MB%"}
       price: {lt: "50"}
       }
{% endhighlight %}

See [Searches and pagination in GraphQL]({{page.baseurl}}/graphql/search-pagination.html) for more information about the operators.

Magento processes the attribute values specified in  a `ProductFilterInput` as  simple data types (strings, integers, booleans). However, returned attributes can be a different, complex, data type. For example, in a response, `price` is an object that contains a monetary value and a currency code.

The following attributes can be used to create filters. See the [Response](#Response) section for information about each attribute.

```
category_ids
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
max_price
meta_description
meta_keyword
meta_title
min_price
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
*
</div>

## Response {#Response}

The system returns a `Products` object containing the following information:

{% highlight json %}
items: [ProductInterface]
page_info: SearchResultPageInfo
total_count: Int
filters: [LayerFilter]
{% endhighlight %}

Each attribute is described below:

Attribute |  Description
--- | ---
`items` | An array of products that match the specified search criteria.
`page_info` | An object that includes the `page_info` and `currentPage` values specified in the query
`total_count` | The number of products returned
`filters` | An array of layered navigation filters. These filters can be used to implement layered navigation on your app.

## ProductInterface {#ProductInterface}

Any type that implements `ProductInterface` contains all the base attributes necessary for the frontend of the product model.
The `items` that are returned in a `ProductInterface` array can also contain attributes from resources external to the CatalogGraphQl module:

* Custom and extension attributes defined in any attribute set
* The attribute is defined in the [PhysicalProductInterface](#PhysicalProductInterface) or [CustomizableOptionInterface]({{page.baseurl}}/graphql/reference/customizable-option-interface.html)
* Product types that define their own implementation of `ProductInterface`, including
  * [BundleProduct]({{page.baseurl}}/graphql/reference/bundle-product.html)
  * [ConfigurableProduct]({{page.baseurl}}/graphql/reference/configurable-product.html)
  * [DownloadableProduct]({{page.baseurl}}/graphql/reference/downloadable-product.html)
  * [GroupedProduct]({{page.baseurl}}/graphql/reference/grouped-product.html)

The following table defines the `ProductInterface` attributes and objects.

Attribute | Data type | Description
--- | --- | ---
`attribute_set_id` | Int | The attribute set assigned to the product
`categories` | [CategoryInterface] | The categories assigned to the product. See [categories endpoint]({{page.baseurl}}/graphql/reference/categories.html) for more information
`category_ids` | [Int] | An array of category IDs the product belongs to
`country_of_manufacture` | String | The product's country of origin
`created_at` | String | Timestamp indicating when the product was created
`custom_design` | String | A theme that can be applied to the product page
`custom_design_from` | String | The beginning date when a theme is applied to the product page
`custom_design_to` | String| The date at which a theme is no longer applied to the product page
`custom_layout` | String | The name of a custom layout
`custom_layout_update` | String | XML code that is applied as a layout update to the product page
`description` | String | Detailed information about the product. The value can include simple HTML tags
`gift_message_available` | String | Indicates whether a gift message is available
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
`options_container` | String | If the product has multiple options, determines where they appear on the product page
`page_layout` | String | The page layout of the product page. Values are `1column-center`, `2columns-left`, `2columns-right`, and `3columns`
`price` | ProductPrices | The price of an item. A `ProductPrice` object is returned. See [ProductPrices]({#ProductPrices}) for more information.
`product_links` | [ProductLinks] | An array of [ProductLinks](#ProductLinks) objects
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
`tier_prices` | [ProductTierPrices] | An array of [ProductTierPrices](#ProductTier) objects
`type_id` | String | One of `simple`, `virtual`, `bundle`, `downloadable`,`grouped`, `configurable`
`updated_at` | String | The timestamp indicating when the product was last updated
`website_ids` | [Int] | An array of website IDs in which the product is available

### ProductPrices object {#ProductPrices}
The `ProductPrices` object contains the regular price of an item, as well as its minimum and maximum prices. Only composite products, which include bundle, configurable, and grouped products, can contain a minimum and maximum price.

Attribute |  Data Type | Description
--- | --- | ---
`maximalPrice` | Price | Used for composite (bundle, configurable, grouped) products. This is the highest possible final price for all the options defined within a composite product. If you're specifying a price range, this would be the "to" value.
`minimalPrice` | Price | Used for composite (bundle, configurable, grouped) products. This is the lowest possible final price for all the options defined within a composite product. If you're specifying a price range, this would be the "from" value.
`regularPrice` | Price | The base price of a product.

#### Price object {#Price}

The `Price` object defines the price of a product as well as any tax-related adjustments.

Attribute |  Data Type | Description
--- | --- | ---
`amount` | Money | The price of the the product and its currency code. See [Money object](#Money).
`adjustments` | [PriceAdjustment] | An array of [PriceAdjustment](#PriceAdjustment) objects.

##### Money object {#Money}

A `Money` object defines a monetary value, including a numeric value and a currency code.

Attribute |  Data Type | Description
--- | --- | ---
`value` | Float | The price of the product
`currency` | CurrencyEnum | A three-letter currency code, such as `USD` or `EUR`.

##### PriceAdjustment array {#PriceAdjustment}

The `PricedAdjustment` object defines the amount of money to apply as an adjustment, the type of adjustment to apply, and whether the item is included or excluded from the adjustment.

Attribute |  Data Type | Description
--- | --- | ---
`amount` | Money | The amount of the price adjustment and its currency code. See [Money object](#Money).
`code` | PriceAdjustmentCodesEnum | One of `tax`, `weee`, or `weee_tax`.
`description` | PriceAdjustmentDescriptionEnum | Indicates whether the entity described by the code attribute is included or excluded from the adjustment.

#### ProductLinks object {#ProductLinks}

`ProductLinks` contains information about linked products, including the link type and product type of each item.

Attribute | Type | Description
--- | --- | ---
`sku` | String | The identifier of the linked product
`link_type` | String | One of `related`, `associated`, `upsell`, or `crosssell`.
`linked_product_sku` | String | The SKU of the linked product
`linked_product_type` | String | The type of linked product (`simple`, `virtual`, `bundle`, `downloadable`,`grouped`, `configurable`)
`position` | Int | The position within the list of product links

### MediaGalleryEntry object {#MediaGalleryEntry}

`MediaGalleryEntry` defines characteristics about images and videos associated with a specific product.

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

#### ProductMediaGalleryEntriesContent object {#ProductMediaGalleryEntriesContent}

`ProductMediaGalleryEntriesContent` contains an image in base64 format and basic information about the image.

Field | Type | Description
--- | --- | ---
`base64_encoded_data` | String | The image in base64 format
`type` | String | The MIME type of the file, such as `image/png`
`name` | String | The file name of the image

#### ProductMediaGalleryEntriesVideoContent object {#ProductMediaGalleryEntriesVideoContent}

`ProductMediaGalleryEntriesVideoContent` contains a link to a video file and basic information about the video.

Field | Type | Description
--- | --- | ---
`media_type` | String | Must be `external-video`
`video_provider` | String | Optionally describes the video source
`video_url` | String | Required. The URL to the video
`video_title` | String | Required. The title of the video
`video_description` | String | A description of the video
`video_metadata` | String | Optional data about the video

### ProductTierPrices object {#ProductTier}

The `ProductTierPrices` object defines a tier price, which is a quantity discount offered to a specific customer group.

Field | Type | Description
--- | --- | ---
`customer_group_id` | Int | The ID of the customer group
`qty` | Float | The number of items that must be purchased to qualify for tier pricing
`value` | Float | The price of the fixed price item
`percentage_value` | Float | The percentage discount of the item
`website_id` | Int | The ID assigned to the website

## PhysicalProductInterface {#PhysicalProductInterface}

`PhysicalProductInterface`defines the weight of all tangible products.

Field | Type | Description
--- | --- | ---
`weight` | Float | The weight of the item, in units defined by the store

## LayerFilter object

The `LayerFilter` object can be returned in a response to help create layered navigation on your app.

Field | Type | Description
--- | --- | ---
`name` | String | The layered navigation filter name
`request_var` | String | The request variable name for the filter query
`filter_items_count` | Int | The number of filter items in filter group
`filter_items` |  [LayerFilterItemInterface] | An array of filter items

### LayerFilterItemInterface

`LayerFilterItemInterface ` contains an array of items that match the terms defined in the filter.

Field | Type | Description
--- | --- | ---
`label` | String | The label applied to a filter
`value_string` | String | The value for filter request variable to be used in a query
`items_count` | Int | The number of items the filter returned

## Sample query

You can review several general interest `products` queries at [Searches and pagination in GraphQL]({{page.baseurl}}/graphql/search-pagination.html).

The following query returns layered navigation for products that have a `sku` containing the string `24-WB`.

{% highlight json %}
{
    products (
        filter: {
            sku: {
                like:"24-WB%"
            }
        }
        pageSize: 20
        currentPage: 1
        sort: {
            name: DESC
        }
    )
    {
        items {
            sku
        }
        filters {
            name
            filter_items_count
            request_var
            filter_items {
                label
                value_string
                items_count
            }
        }
    }
}
{% endhighlight %}
