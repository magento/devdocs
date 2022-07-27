---
group: catalog-service
title: products query
ee_only: True
---

The Catalog Service for Adobe Commerce `products` query returns details about the SKUs specified as input. Although this query has the same name as  the [`products` query]({{site.baseurl}}/guides/v2.4/graphql/queries/products.html) that is provided with core Adobe Commerce and Magento Open Source, there are some differences.

The Catalog Service query requires one or more SKU values as input. The query is primarily designed to retrieve information to render the following types of content:

*  Product detail pages - You can provide full details about the product identified by the specified SKU.

*  Product compare pages - You can retrieve selected information about multiple products, such as the name, price and image.

{:.bs-callout-tip}
Use the Live Search [`productSearch` query]({{site.baseurl}}/live-search/product-search.html) to return product listing page content.

The `ProductView` output object is significantly different than the core `products` query `Products` output object. Key differences include:

*  Products are either simple or complex. Simple and virtual products map to `SimpleProductView`. All other product types map to `ComplexProductView`. Simple products have defined prices. Complex products have price ranges. Since complex products are comprised of multiple simple products, they have access to simple product prices.

*  Merchant-defined attributes are exposed in a top-level container and indicate their storefront roles. Roles include Show on PDP, Show on PLP, and Show on Search Results.

*  Images are also accessible as a top-level container and can be filtered by roles.

<!--- Cross-reference provides full details about Catalog Service capabilities. -->

## Syntax

```graphql
products (skus [String]) [ProductView]
```

## Required headers

You must specify the following HTTP headers to run this query.

<!--- Note to reviewer: I made up the description for `Magento-Customer-Group`. No one answered the question in Slack. -->

Header | Description
--- | ---
`Magento-Customer-Group` | A hard-coded value.
`Magento-Environment-Id` | This value is displayed at **Stores** > **Configuration** > **Services** > **Magento Services** > **SaaS Environment** or can be obtained by running the `bin/magento config:show services_connector/services_id/environment_id` command.
`Magento-Store-Code`| The code assigned to the store associated with the active store view. For example, `main_website_store`.
`Magento-Store-View-Code`| The code assigned to the active store view. For example, `default`.
`Magento-Website-Code`| The code assigned to the website associated with the active store view. For example, `base`.
`X-Api-Key` | This value must be set to `storefront-catalog`.

## Example usage

### Return details about a simple product

The following query returns details about a simple product.

<!--- Note to reviewer: Nothing is returned from `SimpleProductView`. I will replace the code sample when it does. -->

**Request:**

```graphql
query {
  products(skus: ["24-MB02"]) {
    id
    sku
    name
    url
    description
    shortDescription
    attributes(roles: ["visible in Search"]) {
      name
      label
      value
      roles
    }
    ... on SimpleProductView {
      price {
        regular {
          amount {
            value
            currency
          }
        }
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "products": [
      {
        "id": "TWpRdFRVSXdNZwBaR1ZtWVhWc2RBAE16UmxNamMwTUdFdE56UTNNeTAwWXpnNUxUZzNNekF0TlRjME1ETm1ZMlV5TjJGbABiV0ZwYmw5M1pXSnphWFJsWDNOMGIzSmwAWW1GelpRAFRVRkhVMVJITURBMU5UYzVNRE00",
        "sku": "24-MB02",
        "name": "Fusion Backpack 567890",
        "url": "http://master-7rqtwti-ima6q5tyxltfe.eu-4.magentosite.cloud/fusion-backpack.html",
        "description": "<p>With the Fusion Backpack strapped on, every trek is an adventure - even a bus ride to work. That's partly because two large zippered compartments store everything you need, while a front zippered pocket and side mesh pouches are perfect for stashing those little extras, in case you change your mind and take the day off.</p>\r\n<ul>\r\n<li>Durable nylon construction.</li>\r\n<li>2 main zippered compartments.</li>\r\n<li>1 exterior zippered pocket.</li>\r\n<li>Mesh side pouches.</li>\r\n<li>Padded, adjustable straps.</li>\r\n<li>Top carry handle.</li>\r\n<li>Dimensions: 18\" x 10\" x 6\".</li>\r\n</ul>",
        "shortDescription": "",
        "attributes": [
          {
            "name": "activity",
            "label": "Activity",
            "value": [
              "Hiking",
              "School",
              "Yoga"
            ],
            "roles": [
              "visible in PDP",
              "visible in compare list",
              "visible in Search"
            ]
          },
          {
            "name": "features_bags",
            "label": "Features",
            "value": [
              "Hydration Pocket",
              "Audio Pocket",
              "Waterproof",
              "Lightweight"
            ],
            "roles": [
              "visible in PDP",
              "visible in Search"
            ]
          },
          {
            "name": "material",
            "label": "Material",
            "value": [
              "Burlap",
              "Nylon",
              "Polyester"
            ],
            "roles": [
              "visible in PDP",
              "visible in Search"
            ]
          },
          {
            "name": "strap_bags",
            "label": "Strap/Handle",
            "value": [
              "Adjustable",
              "Double",
              "Padded"
            ],
            "roles": [
              "visible in PDP",
              "visible in Search"
            ]
          },
          {
            "name": "style_bags",
            "label": "Style Bags",
            "value": [
              "Backpack",
              "Laptop"
            ],
            "roles": [
              "visible in PDP",
              "visible in Search"
            ]
          }
        ]
      }
    ]
  }
}
```

### Return details about a complex product

The following query returns details about a configurable product.

**Request:**

```graphql
query {
  products(skus: ["MH02"]) {
    id
    sku
    name
    url
    description
    shortDescription
    attributes(roles: ["visible in Search"]) {
      name
      label
      value
      roles
    }
    ... on ComplexProductView {
      priceRange {
        maximum {
          regular {
            amount {
              value
              currency
            }
          }
        }
        minimum {
          regular {
            amount {
              value
              currency
            }
          }
        }
      }
      options {
        id
        required
        title
        values {
          id
          title
        }
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "products": [
      {
        "id": "VFVnd01nAFpHVm1ZWFZzZEEATXpSbE1qYzBNR0V0TnpRM015MDBZemc1TFRnM016QXROVGMwTURObVkyVXlOMkZsAGJXRnBibDkzWldKemFYUmxYM04wYjNKbABZbUZ6WlEAVFVGSFUxUkhNREExTlRjNU1ETTQ",
        "sku": "MH02",
        "name": "Teton Pullover Hoodie",
        "url": "http://master-7rqtwti-ima6q5tyxltfe.eu-4.magentosite.cloud/teton-pullover-hoodie.html",
        "description": "<p>This Teton Pullover Hoodie gives you more than laid-back style. It's equipped with moisture-wicking fabric to keep light and dry inside, especially in chilly-weather workouts. An elasticized hem lets you move about freely.</p>\n<p>&bull; Black pullover hoodie.<br />&bull; Soft, brushed interior. <br />&bull; Front hand pockets. <br />&bull; Machine wash/dry.</p>",
        "shortDescription": "",
        "attributes": [
          {
            "name": "climate",
            "label": "Climate",
            "value": [
              "All-Weather",
              "Cool",
              "Indoor",
              "Spring",
              "Windy"
            ],
            "roles": [
              "visible in PDP",
              "visible in Search"
            ]
          },
          {
            "name": "material",
            "label": "Material",
            "value": [
              "Wool",
              "Fleece",
              "Nylon"
            ],
            "roles": [
              "visible in PDP",
              "visible in Search"
            ]
          },
          {
            "name": "pattern",
            "label": "Pattern",
            "value": "Solid",
            "roles": [
              "visible in PDP",
              "visible in Search"
            ]
          }
        ],
        "priceRange": {
          "maximum": {
            "regular": {
              "amount": {
                "value": 70,
                "currency": "USD"
              }
            }
          },
          "minimum": {
            "regular": {
              "amount": {
                "value": 70,
                "currency": "USD"
              }
            }
          }
        },
        "options": [
          {
            "id": "color",
            "required": false,
            "title": "Color",
            "values": [
              {
                "id": "Y29uZmlndXJhYmxlLzkzLzU4",
                "title": "Black"
              },
              {
                "id": "Y29uZmlndXJhYmxlLzkzLzY2",
                "title": "Purple"
              },
              {
                "id": "Y29uZmlndXJhYmxlLzkzLzY3",
                "title": "Red"
              }
            ]
          },
          {
            "id": "size",
            "required": false,
            "title": "Size",
            "values": [
              {
                "id": "Y29uZmlndXJhYmxlLzE4Ni8xNzU=",
                "title": "XS"
              },
              {
                "id": "Y29uZmlndXJhYmxlLzE4Ni8xNzY=",
                "title": "S"
              },
              {
                "id": "Y29uZmlndXJhYmxlLzE4Ni8xNzc=",
                "title": "M"
              },
              {
                "id": "Y29uZmlndXJhYmxlLzE4Ni8xNzg=",
                "title": "L"
              },
              {
                "id": "Y29uZmlndXJhYmxlLzE4Ni8xNzk=",
                "title": "XL"
              }
            ]
          }
        ]
      }
    ]
  }
}
```

## Output fields

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

The `ComplexProductView`type represents bundle, configurable, and group products. Complex product prices are returned as a price range, because price values can vary based on selected options. The type implements `ProductView`.

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

The `PriceAdjustment` type specifies the amount and type of price adjustment.

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
`
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
`regular` | Price | Base product price specified by the merchant.v

### ProductViewPriceRange type

The `ProductViewPriceRange` type lists the minimum and maximum price of a complex product.

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
