---
group: graphql
title: Products endpoint
---

The `products` endpoint allows you to search for catalog items.

## Query structure

``` text
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
`search` | Performs a full-text search using the specified key words. This attribute is optional. See [Queries]({{ page.baseurl }}/graphql/queries.html) for more information.
`filter` | Identifies which attributes to search for and return. This attribute is required. See [ProductFilterInput](#ProductFilterInput) for more information.
`pageSize` | Specifies the maximum number of results to return at once. The default value is 20. See [Queries]({{ page.baseurl }}/graphql/queries.html) for more information.
`currentPage` | Specifies which page of results to return. The default value is 1. See [Queries]({{ page.baseurl }}/graphql/queries.html) for more information.
`sort` | Specifies which attribute to sort on, and whether to return the results in ascending or descending order. See [Queries]({{ page.baseurl }}/graphql/queries.html) for more information.
`Products` | An output object that contains the results of the query. See [Response](#Response) for details.

## ProductFilterInput object {#ProductFilterInput}

The `ProductFilterInput` object defines the filters to be used in the search. A filter contains at least one attribute, a comparison operator, and the value that is being searched for. The following example filter searches for products that has a `sku` that contains the string `24-MB` with a `price` that's less than `50`.

``` text
filter: {
  sku: {
    like: "24-MB%"
  }
  price: {
    lt: "50"
  }
}
```

See [Queries]({{ page.baseurl }}/graphql/queries.html) for more information about the operators.

Magento processes the attribute values specified in  a `ProductFilterInput` as  simple data types (strings, integers, booleans). However, returned attributes can be a different, complex, data type. For example, in a response, `price` is an object that contains a monetary value and a currency code.

The following attributes can be used to create filters. See the [Response](#Response) section for information about each attribute.

```text
category_id
country_of_manufacture
created_at
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

The following attributes are not used in responses:

* `or` - The keyword required to perform a logical OR comparison.
* `news_from_date` - This attribute is transformed to `news_from_date` in a response.
* `news_to_date` - This attribute is transformed to `news_to_date` in a response.

{%
include note.html
type="info"
content="GraphQL automatically filters out a product attribute if ALL of the following fields are set to **No** on the attribute's Storefront Properties page in Admin:

* Comparable on Storefront
* Use in Layered Navigation
* Use in Search Results Layered Navigation
* Visible on Catalog Pages on Storefront
* Used in Product Listing
* Used for Sorting in Product Listing"

%}

## Response {#Response}

The system returns a `Products` object containing the following information:

```text
items: [ProductInterface]
page_info: SearchResultPageInfo
total_count: Int
filters: [LayerFilter]
sort_fields: SortFields
```

Each attribute is described below:

Attribute |  Description
--- | ---
`filters` | An array of layered navigation filters. These filters can be used to implement layered navigation on your app.
`items` | An array of products that match the specified search criteria.
`page_info` | An object that includes the `page_info` and `currentPage` values specified in the query
`sort_fields` | An object that includes the default sort field and all available sort fields
`total_count` | The number of products returned

When a product requires a filter attribute that is not a field on its output schema, inject the attribute name into the class in a module's `di.xml` file.

```xml
<type name="Magento\CatalogGraphQl\Model\Resolver\Products\FilterArgument\ProductEntityAttributesForAst" >
  <arguments>
    <argument name="additionalAttributes" xsi:type="array">
      <item name="field_to_sort" xsi:type="string">field</item>
      <item name="other_field_to_sort" xsi:type="string">other_field</item>
    </argument>
  </arguments>
</type>
```

This example adds `field_to_sort` and `other_field_to_sort` attributes to the `additionalAttributes` array defined in the `ProductEntityAttributesForAst` class. The array already contains the `min_price`, `max_price`, and `category_ids` attributes.

## ProductInterface {#ProductInterface}

Any type that implements `ProductInterface` contains all the base attributes necessary for the frontend of the product model.
The `items` that are returned in a `ProductInterface` array can also contain attributes from resources external to the `CatalogGraphQl` module:

* Custom and extension attributes defined in any attribute set
* The attribute is defined in the [PhysicalProductInterface](#PhysicalProductInterface) or [CustomizableOptionInterface]({{ page.baseurl }}/graphql/reference/customizable-option-interface.html)
* Product types that define their own implementation of `ProductInterface` including:
  * [BundleProduct]({{ page.baseurl }}/graphql/reference/bundle-product.html)
  * [ConfigurableProduct]({{ page.baseurl }}/graphql/reference/configurable-product.html)
  * [DownloadableProduct]({{ page.baseurl }}/graphql/reference/downloadable-product.html)
  * [GroupedProduct]({{ page.baseurl }}/graphql/reference/grouped-product.html)

The following table defines the `ProductInterface` attributes and objects.

Attribute | Data type | Description
--- | --- | ---
`attribute_set_id` | Int | The attribute set assigned to the product
`canonical_url` | String  | The canonical URL for the product
`categories` | [CategoryInterface] | The categories assigned to the product. See [categories endpoint]({{ page.baseurl }}/graphql/reference/categories.html) for more information
`country_of_manufacture` | String | The product's country of origin
`created_at` | String | Timestamp indicating when the product was created
`description` | ComplexTextValue | An object that contains detailed information about the product. The object can include simple HTML tags
`gift_message_available` | String | Indicates whether a gift message is available
`id` | Int | The ID number assigned to the product
`image` | [ProductImage](#ProductImage) | An object that contains the URL and label for the main image on the product page
`is_returnable` | String | Indicates whether the product can be returned. This attribute is defined in the `RmaGraphQl` module.
`manufacturer` | Int | A number representing the product's manufacturer
`media_gallery_entries` | [MediaGalleryEntry] | An array of [MediaGalleryEntry](#MediaGalleryEntry) objects
`meta_description` | String | A brief overview of the product for search results listings, maximum 255 characters
`meta_keyword` | String | A comma-separated list of keywords that are visible only to search engines
`meta_title` | String | A string that is displayed in the title bar and tab of the browser and in search results lists
`name` | String | The product name. Customers use this name to identify the product.
`new_from_date` | String | The beginning date for new product listings, and determines if the product is featured as a new product
`new_to_date` | String | The end date for new product listings
`only_x_left_in_stock` | Float | The "Only X left Threshold" assigned to the product. This attribute is defined in the `InventoryGraphQl` module.
`options_container` | String | If the product has multiple options, determines where they appear on the product page
`price` | ProductPrices | The price of an item. A `ProductPrice` object is returned. See [ProductPrices](#ProductPrices) for more information.
`product_links` | [ProductLinksInterface] | An array of [ProductLinks](#ProductLinks) objects
`short_description` | ComplexTextValue | An object that contains a short description of the product. Its use depends on the store's theme. The object can include simple HTML tags
`sku` | String | A number or code assigned to a product to identify the product, options, price, and manufacturer
`small_image` | [ProductImage](#ProductImage) | An object that contains the URL and label for the small image used on catalog pages
`special_from_date` | String | The beginning date that a product has a special price
`special_price` | Float |  The discounted price of the product
`special_to_date` | String | The end date that a product has a special price
`stock_status` | ProductStockStatus | The status of the stock. `ProductStockStatus` is an enumeration that can have the value of `IN_STOCK` or `OUT_OF_STOCK`. This attribute is defined in the `InventoryGraphQl` module.
`swatch_image` | String | The file name of a swatch image. This attribute is defined in the `SwatchesGraphQl` module.
`tax_class_id` | Int | An ID assigned to a tax class. This attribute is defined in the `TaxGraphQl` module.
`thumbnail` | [ProductImage](#ProductImage) | An object that contains the URL and label for the product's thumbnail image
`tier_price` | Float | The price when tier pricing is in effect and the items purchased threshold has been reached
`tier_prices` | [ProductTierPrices] | An array of [ProductTierPrices](#ProductTier) objects
`type_id` | String | One of `simple`, `virtual`, `bundle`, `downloadable`,`grouped`, `configurable`
`updated_at` | String | The timestamp indicating when the product was last updated
`url_key` | String | The part of the URL that identifies the product. This attribute is defined in the `CatalogUrlRewriteGraphQl` module
`url_path` | String | The part of the URL that precedes the `url_key`. This attribute is defined in the `CatalogUrlRewriteGraphQl` module
`url_rewrites` | [UrlRewrite] | A list of URL rewrites. See [UrlRewrite endpoint]({{ page.baseurl }}/graphql/reference/url-resolver.html#UrlRewrite) for more information and an example query
`websites` | [Website] | An array of websites in which the product is available. See [Store endpoint]({{ page.baseurl }}/graphql/reference/store-config.html#supported-website-attributes) for more information.

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
`amount` | Money | The price of the product and its currency code. See [Money object](#Money).
`adjustments` | [PriceAdjustment] | An array of [PriceAdjustment](#PriceAdjustment) objects.

##### Money object {#Money}

A `Money` object defines a monetary value, including a numeric value and a currency code.

Attribute |  Data Type | Description
--- | --- | ---
`currency` | CurrencyEnum | A three-letter currency code, such as `USD` or `EUR`.
`value` | Float | The price of the product

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
`link_type` | String | One of `related`, `associated`, `upsell`, or `crosssell`.
`linked_product_sku` | String | The SKU of the linked product
`linked_product_type` | String | The type of linked product (`simple`, `virtual`, `bundle`, `downloadable`,`grouped`, `configurable`)
`position` | Int | The position within the list of product links
`sku` | String | The identifier of the linked product

### ProductImage object {#ProductImage}

`ProductImage` contains information about image URL and label.

Attribute | Type | Description
--- | --- | ---
`url` | String | The URL for the product image
`label` | String | The label for the product image

### MediaGalleryEntry object {#MediaGalleryEntry}

`MediaGalleryEntry` defines characteristics about images and videos associated with a specific product.

Attribute | Type | Description
--- | --- | ---
`content` | ProductMediaGalleryEntriesContent | Contains a [ProductMediaGalleryEntriesContent](#ProductMediaGalleryEntriesContent) object
`disabled` | Boolean | Whether the image is hidden from view
`file` | String | The path of the image on the server
`id` | Int | The identifier assigned to the object
`label` | String | The "alt" text displayed on the UI when the user points to the image
`media_type` | String | `image` or `video`
`position` | Int | The media item's position after it has been sorted
`types` | [String] | Array of image types. It can have the following values: `image`, `small_image`, `thumbnail`
`video_content` | ProductMediaGalleryEntriesVideoContent | Contains a [ProductMediaGalleryEntriesVideoContent](#ProductMediaGalleryEntriesVideoContent) object

#### ProductMediaGalleryEntriesContent object {#ProductMediaGalleryEntriesContent}

`ProductMediaGalleryEntriesContent` contains an image in base64 format and basic information about the image.

Attribute | Type | Description
--- | --- | ---
`base64_encoded_data` | String | The image in base64 format
`name` | String | The file name of the image
`type` | String | The MIME type of the file, such as `image/png`

#### ProductMediaGalleryEntriesVideoContent object {#ProductMediaGalleryEntriesVideoContent}

`ProductMediaGalleryEntriesVideoContent` contains a link to a video file and basic information about the video.

Attribute | Type | Description
--- | --- | ---
`media_type` | String | Must be `external-video`
`video_provider` | String | Optionally describes the video source
`video_url` | String | Required. The URL to the video
`video_title` | String | Required. The title of the video
`video_description` | String | A description of the video
`video_metadata` | String | Optional data about the video

### ProductTierPrices object {#ProductTier}

The `ProductTierPrices` object defines a tier price, which is a quantity discount offered to a specific customer group.

Attribute | Type | Description
--- | --- | ---
`customer_group_id` | Int | The ID of the customer group
`percentage_value` | Float | The percentage discount of the item
`qty` | Float | The number of items that must be purchased to qualify for tier pricing
`value` | Float | The price of the fixed price item
`website_id` | Int | The ID assigned to the website

## PhysicalProductInterface {#PhysicalProductInterface}

`PhysicalProductInterface`defines the weight of all tangible products.

Attribute | Type | Description
--- | --- | ---
`weight` | Float | The weight of the item, in units defined by the store

## LayerFilter object

The `LayerFilter` object can be returned in a response to help create layered navigation on your app.

Attribute | Type | Description
--- | --- | ---
`filter_items` |  [LayerFilterItemInterface] | An array of filter items
`filter_items_count` | Int | The number of filter items in filter group
`name` | String | The layered navigation filter name
`request_var` | String | The request variable name for the filter query

### LayerFilterItemInterface

`LayerFilterItemInterface` contains an array of items that match the terms defined in the filter.

Attribute | Type | Description
--- | --- | ---
`items_count` | Int | The number of items the filter returned
`label` | String | The label applied to a filter
`value_string` | String | The value for filter request variable to be used in a query

## SortFields object

The `SortFields` object contains the default value for sort fields as well as all possible sort fields.

Attribute | Type | Description
--- | --- | ---
`default` | String | The default sort field
`options` | `SortField` | An array that contains all the fields you can use for sorting

### SortField object

Attribute | Type | Description
--- | --- | ---
`label` | String | The attribute's label
`value` | String | The attribute name or code to use as the sort field

## Sample query

You can review several general interest `products` queries at [Queries]({{ page.baseurl }}/graphql/queries.html).

The following query returns layered navigation for products that have a `sku` containing the string `24-WB`.

```text
{
  products(
    filter: { sku: { like: "24-WB%" } }
    pageSize: 20
    currentPage: 1
    sort: { name: DESC }
  ) {
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
```
