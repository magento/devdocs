---
group: graphql
title: ProductInterface attributes
---

Any type that implements `ProductInterface` contains all the base attributes necessary for the frontend of the product model.
The `items` that are returned in a `ProductInterface` array can also contain attributes from resources external to the `CatalogGraphQl` module:

-  Custom and extension attributes defined in any attribute set
-  The attribute is defined in the [PhysicalProductInterface](#PhysicalProductInterface) or [CustomizableOptionInterface]({{ page.baseurl }}/graphql/product/customizable-option-interface.html)
-  Product types that define their own implementation of `ProductInterface` including:
   -  [BundleProduct]({{ page.baseurl }}/graphql/product/bundle-product.html)
   -  [ConfigurableProduct]({{ page.baseurl }}/graphql/product/configurable-product.html)
   -  [DownloadableProduct]({{ page.baseurl }}/graphql/product/downloadable-product.html)
   -  [GroupedProduct]({{ page.baseurl }}/graphql/product/grouped-product.html)

## ProductInterface attributes

The following table defines the `ProductInterface` attributes and objects.

Attribute | Data type | Description
--- | --- | ---
`attribute_set_id` | Int | The attribute set assigned to the product
`canonical_url` | String  | The relative canonical URL. This value is returned only if the system setting **Use Canonical Link Meta Tag For Products** is enabled
`categories` | [[CategoryInterface]]({{ page.baseurl }}/graphql/product/category-interface.html) | The categories assigned to the product. See [CategoryInterface attributes]({{ page.baseurl }}/graphql/product/category-interface.html) for more information
`country_of_manufacture` | String | The product's country of origin
`created_at` | String | Timestamp indicating when the product was created
`crosssell_products` | [ProductInterface] | An array of cross-sell products
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
`related_products` | [ProductInterface] | An array of related products
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
`upsell_products` | [ProductInterface] | An array of up-sell products
`url_key` | String | The part of the URL that identifies the product. This attribute is defined in the `CatalogUrlRewriteGraphQl` module
`url_path` | String | Deprecated. Use `canonical_url` instead
`url_rewrites` | [[UrlRewrite]](#urlRewriteObject) | A list of URL rewrites
`websites` | [[Website]](#websiteObject) | An array of websites in which the product is available

### ProductPrices object {#ProductPrices}

The `ProductPrices` object contains the regular price of an item, as well as its minimum and maximum prices. Only composite products, which include bundle, configurable, and grouped products, can contain a minimum and maximum price.

Attribute |  Data Type | Description
--- | --- | ---
`maximalPrice` | Price | Used for composite (bundle, configurable, grouped) products. This is the highest possible final price for all the options defined within a composite product. If you're specifying a price range, this would be the "to" value.
`minimalPrice` | Price | Used for composite (bundle, configurable, grouped) products. This is the lowest possible final price for all the options defined within a composite product. If you're specifying a price range, this would be the "from" value.
`regularPrice` | Price | The base price of a product.

### Price object {#Price}

The `Price` object defines the price of a product as well as any tax-related adjustments.

Attribute |  Data Type | Description
--- | --- | ---
`amount` | Money | The price of the product and its currency code. See [Money object](#Money).
`adjustments` | [PriceAdjustment] | An array of [PriceAdjustment](#PriceAdjustment) objects.

#### Money object {#Money}

A `Money` object defines a monetary value, including a numeric value and a currency code.

Attribute |  Data Type | Description
--- | --- | ---
`currency` | CurrencyEnum | A three-letter currency code, such as `USD` or `EUR`.
`value` | Float | The price of the product

#### PriceAdjustment array {#PriceAdjustment}

The `PriceAdjustment` object defines the amount of money to apply as an adjustment, the type of adjustment to apply, and whether the item is included or excluded from the adjustment.

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

Attribute |  Data Type | Description
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
`name` | String | The website name. Websites use this name to identify it easier
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
