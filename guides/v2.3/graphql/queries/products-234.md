---
group: graphql
title: products query (Magento 2.3.4 and later)
---

The `products` query allows you to search for catalog items.

## Syntax

```graphql
products(
  search: String
  filter: ProductAttributeFilterInput
  pageSize: Int
  currentPage: Int
  sort: ProductSortFilterInput
): Products
```
## Input attributes

Each query attribute is defined below:

Attribute |  Data type | Description
--- | --- | ---
`search` | String | Performs a full-text search using the specified key words. This attribute is optional. S
`filter` | ProductAttributeFilterInput | Identifies which attributes to search for and return. This attribute is required. See [ProductAttributeFilterInput](#ProductAttributeFilterInput) object for more information.
`pageSize` | Specifies the maximum number of results to return at once. The default value is 20. See [Queries]({{ page.baseurl }}/graphql/queries.html) for more information.
`currentPage` | Specifies which page of results to return. The default value is 1. See [Queries]({{ page.baseurl }}/graphql/queries.html) for more information.
`sort` | Specifies which attribute to sort on, and whether to return the results in ascending or descending order. See [Queries]({{ page.baseurl }}/graphql/queries.html) for more information.
`Products` | An output object that contains the results of the query. See [Response](#Response) for details.

### search attribute

The `search` element causes Magento to perform a full text search on the specified keywords. (This is the same type of search that is performed from the storefront. If multiple keywords are specified, each keyword is evaluated separately.)

The `search` element is optional, but it can be used with or without filters. Each query must contain a `search` or `filter` element.


### filter attribute {#filter}

The `ProductAttributeFilterInput` object defines the filters to be used in the search. A filter contains at least one attribute, a comparison operator, and the value that is being searched for. The following example filter searches for products that have a `name` that contains the string `Bag` with a `price` that's less than `40`.

```graphql
filter: {
  name: {
    like: "Bag"
  }
  price: {
    from: "0"
    to: "40"
  }
}
```

Magento processes the attribute values specified in  a `ProductAttributeFilterInput` as simple data types (strings, integers, booleans). However, returned attributes can be a different, complex, data type. For example, in a response, `price` is an object that contains a monetary value and a currency code.

By default, you can use the following attributes as filters. To define a custom filter, see "Create a custom filter".

Attribute | Data type | Description
--- | --- | ---
`category_id` | FilterEqualTypeInput | Filters by category ID
`description` | FilterLikeTypeInput | Filters on the Description attribute
`name` | FilterLikeTypeInput | Filters on the Product Name attribute
`price` | FilterRangeTypeInput | Filters on the Price attribute
`short_description` | FilterLikeTypeInput | Filters on the Short Description attribute
`sku` | FilterLikeTypeInput | Filters on the SKU attribute

#### FilterEqualTypeInput attributes

The `cateogry_id` filter requires a `FilterEqualTypeInput` object as input. You must specify a `FilterEqualTypeInput` object to filter on a custom product attribute of the following types:

-  Boolean
-  Select
-  Mutliple select

Attribute | Data type | Description
--- | --- | ---
`eq` | String | Use this attribute to exactly match the specified string. For example, to filter on a specific category ID, specify a value like "5"
`in` | [String] | Use this attribute to filter on an array of values. For example, to filter on category IDs 4, 5, and 6, specify a value of `["4", "5", "6"]

#### FilterMatchTypeInput attributes

Use the `FilterMTypeInput` object to construct a filter that returns products that exactly match a string or contain the specified pattern. 

Attribute | Data type | Description
--- | --- | --- 
`match` | String | Use this attribute to exactly match the specified string. For example, to filter on a specific SKU, specify a value such as "24-MB01".

You must specify a `FilterLikeTypeInput` object to filter on a custom product attribute of the following types:

-  Text field
-  Text area
-  Any other type not explicitly listed in `FilterEqualTypeInput`, `FilterMatchTypeInput`, or `FilterRangeTypeInput`

#### FilterRangeTypeInput

Use the `FilterRangeTypeInput` object to construct a filter that returns products that fall within a range of prices or dates.

Attribute | Data type | Description
--- | --- | ---
`from` | String | Use this attribute to specify the lowest possible value in the range. 
`to` | String | Use this attribute to specify the lowest possible value in the range.

### pageSize attribute

Magento's GraphQL implementation of pagination uses offsets so that it operates in the same manner as REST and SOAP API requests.

The `pageSize` attribute specifies the maximum number of items to return. If no value is specified, 20 items are returned.

### currentPage attribute

The `currentPage` attribute specifies which page of results to return. If no value is specified, the first page is returned. If you specify a value that is greater than the number of available pages, an error is returned.

### sort attribute

The `sort` object allows you to specify which field or fields to use for sorting the results. If you specify more than one field, Magento sorts by the first field listed. Then, if any items have the same value, those items will be sorted by the secondary field.  The value for each field can be set to either `ASC` or `DESC`.

Attribute | Data type | Description
--- | --- | ---
`name` | SortEnum | Sorts by Product Name
`position` | SortEnum | Sorts by the position of products
`price` | SortEnum | Sorts by Price
`relevance` | SortEnum | Sorts by the search relevance score. This is the defualt value

## Output attributes {#Response}

The system returns a `Products` object containing the following information:

```json
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
* The attribute is defined in the [PhysicalProductInterface](#PhysicalProductInterface) or [CustomizableOptionInterface]({{ page.baseurl }}/graphql/product/customizable-option-interface.html)
* Product types that define their own implementation of `ProductInterface` including:
  * [BundleProduct]({{ page.baseurl }}/graphql/product/bundle-product.html)
  * [ConfigurableProduct]({{ page.baseurl }}/graphql/product/configurable-product.html)
  * [DownloadableProduct]({{ page.baseurl }}/graphql/product/downloadable-product.html)
  * [GroupedProduct]({{ page.baseurl }}/graphql/product/grouped-product.html)

The following table defines the `ProductInterface` attributes and objects.

Attribute | Data type | Description
--- | --- | ---
`attribute_set_id` | Int | The attribute set assigned to the product
`canonical_url` | String  | The canonical URL for the product
`categories` | [CategoryInterface] | The categories assigned to the product. See [categories query]({{ page.baseurl }}/graphql/queries/category.html) for more information
`country_of_manufacture` | String | The product's country of origin
`created_at` | String | Timestamp indicating when the product was created
`crosssell_products` | [[ProductInterface](#ProductInterface)] | An array of cross-sell products
`description` | ComplexTextValue | An object that contains detailed information about the product. The object can include simple HTML tags
`gift_message_available` | String | Indicates whether a gift message is available
`id` | Int | The ID number assigned to the product
`image` | [ProductImage](#ProductImage) | An object that contains the URL and label for the main image on the product page
`is_returnable` | String | Indicates whether the product can be returned. This attribute is defined in the `RmaGraphQl` module.
`manufacturer` | Int | A number representing the product's manufacturer
`media_gallery` | [[MediaGalleryInterface]](#MediaGalleryInterface) | An array of media gallery objects
`media_gallery_entries` | [MediaGalleryEntry] | Deprecated. Use `media_gallery` instead
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
`related_products` | [[ProductInterface](#ProductInterface)] | An array of related products
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
`upsell_products` | [[ProductInterface](#ProductInterface)] | An array of up-sell products
`url_key` | String | The part of the URL that identifies the product. This attribute is defined in the `CatalogUrlRewriteGraphQl` module
`url_path` | String | Deprecated. Use `canonical_url` instead
`url_rewrites` | [[UrlRewrite]](#urlRewriteObject) | A list of URL rewrites. See [UrlRewrite object](#urlRewriteObject) for more information and an [example query](#urlRewriteExample)
`websites` | [Website] | An array of websites in which the product is available. See [Website object](#websiteObject) for more information and an [example query](#inclWebsiteInfoExample)

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

### MediaGalleryInterface {#MediaGalleryInterface}

The `MediaGalleryInterface` contains basic information about a product image or video.

Attribute | Type | Description
--- | --- | ---
`label` | String | The label for the product image or video
`url` | String | The URL for the product image or video

### ProductImage object {#ProductImage}

`ProductImage` implements [`MediaGalleryInterface`](#MediaGalleryInterface), which contains information about an image's URL and label.

### ProductVideo object {#ProductVideo}

`ProductVideo` implements [`MediaGalleryInterface`](#MediaGalleryInterface) and contains information about a product video.

Attribute | Type | Description
--- | --- | ---
`video_content` | ProductMediaGalleryEntriesVideoContent | Contains a [ProductMediaGalleryEntriesVideoContent](#ProductMediaGalleryEntriesVideoContent) object

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
`video_description` | String | A description of the video
`video_metadata` | String | Optional data about the video
`video_provider` | String | Optionally describes the video source
`video_title` | String | The title of the video
`video_url` | String | The URL to the video

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

### Website object {#websiteObject}

Use the `Website` attributes to retrieve information about the website's configuration, which includes the website name, website code, and default group ID.

Attribute |  Data Type | Description
--- | --- | ---
`code` | String | A code assigned to the website to identify it
`default_group_id` | String | The default group ID that the website has
`id` | Integer | The ID number assigned to the store
`name` | String | The website name. Websites use this name to identify it easier.
`sort_order` | Integer | The attribute to use for sorting websites

### UrlRewrite object {#urlRewriteObject}

The `products` query can request details about the `UrlRewrite` object.

Attribute | Type | Description
--- | --- | ---
`parameters` | [[`HttpQueryParameter`]](#HttpQueryParameter) | An array of target path parameters
`url` | String | The request URL

### HTTPQueryParameter object {#HttpQueryParameter}

The `HttpQueryParameter` object provides details about target path parameters.

Attribute | Type | Description
--- | --- | ---
`name` | String | The parameter name, such as `id`
`value` | String | The value assigned to the parameter

## Sample query

You can review several general interest `products` queries at [Queries]({{ page.baseurl }}/graphql/queries.html).

### Layered navigation

The following query returns layered navigation for products that have a `sku` containing the string `24-WB`.

```graphql
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

### Media gallery search

The following query returns media gallery information about the product with the `sku` of `24-MB01`.

**Request**

```graphql
query {
  productDetail: products(
    pageSize: 5
    filter: {
       sku: { eq: "24-MB01" }
    }
  ) {
    total_count
    items {
      sku
      id
      name
      image {
        url
        label
      }
      small_image{
          url
          label
      }
      media_gallery {
          url
          label
          ... on ProductVideo {
              video_content {
                  media_type
                  video_provider
                  video_url
                  video_title
                  video_description
                  video_metadata
              }
          }
      }
    }
  }
}
```

**Response**

```json
{
  "data": {
    "productDetail": {
      "total_count": 1,
      "items": [
        {
          "sku": "24-MB01",
          "id": 1,
          "name": "Joust Duffle Bag",
          "image": {
            "url": "http://magento2.vagrant130/pub/media/catalog/product/cache/fd3509f20f1e8c87464fb5042a4927e6/m/b/mb01-blue-0.jpg",
            "label": "Joust Duffle Bag"
          },
          "small_image": {
            "url": "http://magento2.vagrant130/pub/media/catalog/product/cache/fd3509f20f1e8c87464fb5042a4927e6/m/b/mb01-blue-0.jpg",
            "label": "Joust Duffle Bag"
          },
          "media_gallery": [
            {
              "url": "http://magento2.vagrant130/pub/media/catalog/product/cache/07660f0f9920886e0f9d3257a9c68f26/m/b/mb01-blue-0.jpg",
              "label": "Image"
            }
          ]
        }
      ]
    }
  }
}
```

### Include website information with `products` query results {#inclWebsiteInfoExample}

The [ProductInterface]({{ page.baseurl }}/graphql/queries/products.html#ProductInterface) can include information about the `Website` object.

**Request**

```graphql
{
    products(filter: {sku: {eq: "24-WB04"}})
    {
        items{
            websites {
              id
              name
              code
              sort_order
              default_group_id
              is_default
            }
        }
    }
}
```

**Response**

```json
{
  "data": {
    "products": {
      "items": [
        {
          "websites": [
            {
              "id": 1,
              "name": "Main Website",
              "code": "base",
              "sort_order": 0,
              "default_group_id": "1",
              "is_default": true
            }
          ]
        }
      ]
    }
  }
}
```

### Query a URL's rewrite information {#urlRewriteExample}

The following product query returns URL rewrite information about the Joust Duffle Bag.

**Request**

```graphql
{
  products(search: "Joust") {
    items {
      name
      sku
      url_rewrites {
        url
        parameters {
          name
          value
        }
      }
    }
  }
}
```

**Response**

```json
{
  "data": {
    "products": {
      "items": [
        {
          "name": "Joust Duffle Bag",
          "sku": "24-MB01",
          "url_rewrites": [
            {
              "url": "no-route",
              "parameters": [
                {
                  "name": "page_id",
                  "value": "1"
                }
              ]
            },
            {
              "url": "joust-duffle-bag.html",
              "parameters": [
                {
                  "name": "id",
                  "value": "1"
                }
              ]
            },
            {
              "url": "gear/joust-duffle-bag.html",
              "parameters": [
                {
                  "name": "id",
                  "value": "1"
                },
                {
                  "name": "category",
                  "value": "3"
                }
              ]
            },
            {
              "url": "gear/bags/joust-duffle-bag.html",
              "parameters": [
                {
                  "name": "id",
                  "value": "1"
                },
                {
                  "name": "category",
                  "value": "4"
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
```
