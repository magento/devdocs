---
group: graphql
title: Configurable product data types
redirect_from:
  - /guides/v2.4/graphql/product/configurable-product.html
---

The `ConfigurableProduct` data type implements the following interfaces:

-  [ProductInterface]({{page.baseurl}}/graphql/interfaces/product-interface.html)
-  [PhysicalProductInterface]({{page.baseurl}}/graphql/interfaces/product-interface.html#PhysicalProductInterface)
-  [CustomizableProductInterface]({{page.baseurl}}/graphql/interfaces/customizable-option-interface.html)

Attributes that are specific to configurable products can be used when performing a [`products`]({{page.baseurl}}/graphql/queries/products.html) query.

## ConfigurableProduct object

The `ConfigurableProduct` object contains the following attributes:

Attribute | Type | Description
--- | --- | ---
`configurable_options` | [[ConfigurableProductOptions]](#configProdOptions) | An array of linked simple product items
`configurable_product_options_selection(configurableOptionValueUids: [ID!])` | [ConfigurableProductOptionsSelection](#ConfigurableProductOptionsSelection) | Contains media gallery items and other details about selected configurable product options as well as details about remaining selectable options. We recommend filtering by one or more `uid` values to prevent loading a large amount of media gallery data
`variants` | ConfigurableVariant | An array of variants of products

### ConfigurableAttributeOption object

The `ConfigurableAttributeOption` object contains the following attributes:

Field | Type | Description
--- | --- | ---
`code` | String | The ID assigned to the attribute
`label` | String | A string that describes the configurable attribute option
`uid` | ID! | A string that encodes option details
`value_index` | Int | A unique index number assigned to the configurable product option

### ConfigurableOptionAvailableForSelection attributes {#ConfigurableOptionAvailableForSelection}

The `ConfigurableOptionAvailableForSelection` object describes configurable options that have been and can be selected.

Attribute | Type | Description
--- | --- | ---
`attribute_code` | String! | An attribute code that uniquely identifies a configurable option
`option_value_uids` | [ID!]! | Any array of IDs that can be selected

### ConfigurableProductOptions {#configProdOptions}

The `ConfigurableProductOptions` object contains the following attributes:

Attribute | Type | Description
--- | --- | ---
`attribute_code` | String | A string that identifies the attribute
`attribute_id` | String | Deprecated. Use `attribute_id_v2` instead
`attribute_id_v2` | Int | The ID assigned to the attribute
`id` | Int | The configurable option ID number assigned by the system
`label` | String | A string that describes the configurable product option. It is displayed on the UI.
`position` | Int | A number that indicates the order in which the attribute is displayed
`product_id` | Int | This is the same as a product's 'id' field
`use_default` | Boolean | Indicates whether the option is the default
`values` | [[ConfigurableProductOptionsValues]](#configProdOptionsValues) | An array that defines the `value_index` codes assigned to the configurable product

### ConfigurableProductOptionsSelection attributes {#ConfigurableProductOptionsSelection}

The `ConfigurableProductOptionsSelection` object contains metadata corresponding to the selectable configurable options for a product. It is meant to be used in a `products` query to restrict which media gallery items are displayed as the shopper selects configurable product options. [Limit the number of retrieved media gallery items](#media-gallery-example) demonstrates its use.

Attribute | Type | Description
--- | --- | ---
`media_gallery` | [MediaGalleryInterface!] | Product images and videos corresponding to the specified configurable options selection
`options_available_for_selection` | [[ConfigurableOptionAvailableForSelection!]](#ConfigurableOptionAvailableForSelection) | Lists the options that have been selected and the options that are available as a result of the previous selections
`variant` | SimpleProduct | The simple product represented by the selected configurable options. This object will be null until the shopper selects an option for each attribute

### ConfigurableProductOptionsValues {#configProdOptionsValues}

The `ConfigurableProductOptionsValues` object contains the following attribute:

Attribute | Type | Description
--- | --- | ---
`default_label` | String | The label of the product on the default store
`label` | String | The label of the product
`store_label` | String | The label of the product on the current store
`swatch_data` | [SwatchDataInterface](#swatchDataInterface) | Details about swatches that can be displayed for configurable product options
`use_default_value` | Boolean | Indicates whether to use the default_label
`value_index` | Int | A unique index number assigned to the configurable product option

### ConfigurableVariant object

The `ConfigurableVariant` object contains the following attributes:

Field | Type | Description
--- | --- | ---
`attributes` | ConfigurableAttributeOption | ConfigurableAttributeOption contains the value_index (and other related information) assigned to a configurable product option
`product` | SimpleProduct | An array of linked simple products

### SwatchDataInterface {#swatchDataInterface}

Swatches allow the shopper to view the color, texture, or other visual aspect of a configurable product. Magento displays these options as color, graphic, or text swatches.

The following data types implement `SwatchDataInterface`:

-  `ColorSwatchData`
-  `ImageSwatchData`
-  `TextSwatchData`

Attribute | Type | Description
--- | --- | ---
`value` | String | The value of swatch item. The value is a hexadecimal color code, such as `#000000` (black), for color swatches, the image link for image swatches, or the display text for text swatches
`thumbnail` | String | Applicable to image swatches only. The URL to thumbnail swatch image

## Sample queries

Add the following inline fragment to the output section of your `products` query to return information specific to configurable products:

```text
... on ConfigurableProduct {
  configurable_options {
   <attributes>
  }
}
```

### Extended example

The following `products` query returns `ConfigurableProduct` information about the `WH01` configurable product, which is defined in the sample data.

**Request:**

```graphql
{
  products(filter: { sku: { eq: "WH01" } }) {
    items {
      id
      attribute_set_id
      name
      sku
      __typename
      price_range{
        minimum_price{
          regular_price{
            value
            currency
          }
        }
      }
      categories {
        id
      }
      ... on ConfigurableProduct {
        configurable_options {
          id
          attribute_id_v2
          label
          position
          use_default
          attribute_code
          values {
            value_index
            label
          }
          product_id
        }
        variants {
          product {
            id
            name
            sku
            attribute_set_id
            ... on PhysicalProductInterface {
              weight
            }
            price_range{
              minimum_price{
                regular_price{
                  value
                  currency
                }
              }
            }
          }
          attributes {
            uid
            label
            code
            value_index
          }
        }
      }
    }
  }
}
```

**Response:**

{% collapsible View response %}

``` json
{
  "data": {
    "products": {
      "items": [
        {
          "id": 1050,
          "attribute_set_id": 9,
          "name": "Mona Pullover Hoodlie",
          "sku": "WH01",
          "__typename": "ConfigurableProduct",
          "price_range": {
            "minimum_price": {
              "regular_price": {
                "value": 57,
                "currency": "USD"
              }
            }
          },
          "categories": [
            {
              "id": 8
            },
            {
              "id": 21
            },
            {
              "id": 24
            },
            {
              "id": 34
            }
          ],
          "configurable_options": [
            {
              "id": 147,
              "attribute_id_v2": 93,
              "label": "Color",
              "position": 1,
              "use_default": false,
              "attribute_code": "color",
              "values": [
                {
                  "value_index": 53,
                  "label": "Green"
                },
                {
                  "value_index": 56,
                  "label": "Orange"
                },
                {
                  "value_index": 57,
                  "label": "Purple"
                }
              ],
              "product_id": 1050
            },
            {
              "id": 146,
              "attribute_id_v2": 144,
              "label": "Size",
              "position": 0,
              "use_default": false,
              "attribute_code": "size",
              "values": [
                {
                  "value_index": 166,
                  "label": "XS"
                },
                {
                  "value_index": 167,
                  "label": "S"
                },
                {
                  "value_index": 168,
                  "label": "M"
                },
                {
                  "value_index": 169,
                  "label": "L"
                },
                {
                  "value_index": 170,
                  "label": "XL"
                }
              ],
              "product_id": 1050
            }
          ],
          "variants": [
            {
              "product": {
                "id": 1035,
                "name": "Mona Pullover Hoodlie-XS-Green",
                "sku": "WH01-XS-Green",
                "attribute_set_id": 9,
                "weight": 1,
                "price_range": {
                  "minimum_price": {
                    "regular_price": {
                      "value": 57,
                      "currency": "USD"
                    }
                  }
                }
              },
              "attributes": [
                {
                  "uid": "Y29uZmlndXJhYmxlLzkzLzUz",
                  "label": "Green",
                  "code": "color",
                  "value_index": 53
                },
                {
                  "uid": "Y29uZmlndXJhYmxlLzE0NC8xNjY=",
                  "label": "XS",
                  "code": "size",
                  "value_index": 166
                }
              ]
            },
            {
              "product": {
                "id": 1036,
                "name": "Mona Pullover Hoodlie-XS-Orange",
                "sku": "WH01-XS-Orange",
                "attribute_set_id": 9,
                "weight": 1,
                "price_range": {
                  "minimum_price": {
                    "regular_price": {
                      "value": 57,
                      "currency": "USD"
                    }
                  }
                }
              },
              "attributes": [
                {
                  "uid": "Y29uZmlndXJhYmxlLzkzLzU2",
                  "label": "Orange",
                  "code": "color",
                  "value_index": 56
                },
                {
                  "uid": "Y29uZmlndXJhYmxlLzE0NC8xNjY=",
                  "label": "XS",
                  "code": "size",
                  "value_index": 166
                }
              ]
            },
            {
              "product": {
                "id": 1037,
                "name": "Mona Pullover Hoodlie-XS-Purple",
                "sku": "WH01-XS-Purple",
                "attribute_set_id": 9,
                "weight": 1,
                "price_range": {
                  "minimum_price": {
                    "regular_price": {
                      "value": 57,
                      "currency": "USD"
                    }
                  }
                }
              },
              "attributes": [
                {
                  "uid": "Y29uZmlndXJhYmxlLzkzLzU3",
                  "label": "Purple",
                  "code": "color",
                  "value_index": 57
                },
                {
                  "uid": "Y29uZmlndXJhYmxlLzE0NC8xNjY=",
                  "label": "XS",
                  "code": "size",
                  "value_index": 166
                }
              ]
            },
            {
              "product": {
                "id": 1038,
                "name": "Mona Pullover Hoodlie-S-Green",
                "sku": "WH01-S-Green",
                "attribute_set_id": 9,
                "weight": 1,
                "price_range": {
                  "minimum_price": {
                    "regular_price": {
                      "value": 57,
                      "currency": "USD"
                    }
                  }
                }
              },
              "attributes": [
                {
                  "uid": "Y29uZmlndXJhYmxlLzkzLzUz",
                  "label": "Green",
                  "code": "color",
                  "value_index": 53
                },
                {
                  "uid": "Y29uZmlndXJhYmxlLzE0NC8xNjc=",
                  "label": "S",
                  "code": "size",
                  "value_index": 167
                }
              ]
            },
            {
              "product": {
                "id": 1039,
                "name": "Mona Pullover Hoodlie-S-Orange",
                "sku": "WH01-S-Orange",
                "attribute_set_id": 9,
                "weight": 1,
                "price_range": {
                  "minimum_price": {
                    "regular_price": {
                      "value": 57,
                      "currency": "USD"
                    }
                  }
                }
              },
              "attributes": [
                {
                  "uid": "Y29uZmlndXJhYmxlLzkzLzU2",
                  "label": "Orange",
                  "code": "color",
                  "value_index": 56
                },
                {
                  "uid": "Y29uZmlndXJhYmxlLzE0NC8xNjc=",
                  "label": "S",
                  "code": "size",
                  "value_index": 167
                }
              ]
            },
            {
              "product": {
                "id": 1040,
                "name": "Mona Pullover Hoodlie-S-Purple",
                "sku": "WH01-S-Purple",
                "attribute_set_id": 9,
                "weight": 1,
                "price_range": {
                  "minimum_price": {
                    "regular_price": {
                      "value": 57,
                      "currency": "USD"
                    }
                  }
                }
              },
              "attributes": [
                {
                  "uid": "Y29uZmlndXJhYmxlLzkzLzU3",
                  "label": "Purple",
                  "code": "color",
                  "value_index": 57
                },
                {
                  "uid": "Y29uZmlndXJhYmxlLzE0NC8xNjc=",
                  "label": "S",
                  "code": "size",
                  "value_index": 167
                }
              ]
            },
            {
              "product": {
                "id": 1041,
                "name": "Mona Pullover Hoodlie-M-Green",
                "sku": "WH01-M-Green",
                "attribute_set_id": 9,
                "weight": 1,
                "price_range": {
                  "minimum_price": {
                    "regular_price": {
                      "value": 57,
                      "currency": "USD"
                    }
                  }
                }
              },
              "attributes": [
                {
                  "uid": "Y29uZmlndXJhYmxlLzkzLzUz",
                  "label": "Green",
                  "code": "color",
                  "value_index": 53
                },
                {
                  "uid": "Y29uZmlndXJhYmxlLzE0NC8xNjg=",
                  "label": "M",
                  "code": "size",
                  "value_index": 168
                }
              ]
            },
            {
              "product": {
                "id": 1042,
                "name": "Mona Pullover Hoodlie-M-Orange",
                "sku": "WH01-M-Orange",
                "attribute_set_id": 9,
                "weight": 1,
                "price_range": {
                  "minimum_price": {
                    "regular_price": {
                      "value": 57,
                      "currency": "USD"
                    }
                  }
                }
              },
              "attributes": [
                {
                  "uid": "Y29uZmlndXJhYmxlLzkzLzU2",
                  "label": "Orange",
                  "code": "color",
                  "value_index": 56
                },
                {
                  "uid": "Y29uZmlndXJhYmxlLzE0NC8xNjg=",
                  "label": "M",
                  "code": "size",
                  "value_index": 168
                }
              ]
            },
            {
              "product": {
                "id": 1043,
                "name": "Mona Pullover Hoodlie-M-Purple",
                "sku": "WH01-M-Purple",
                "attribute_set_id": 9,
                "weight": 1,
                "price_range": {
                  "minimum_price": {
                    "regular_price": {
                      "value": 57,
                      "currency": "USD"
                    }
                  }
                }
              },
              "attributes": [
                {
                  "uid": "Y29uZmlndXJhYmxlLzkzLzU3",
                  "label": "Purple",
                  "code": "color",
                  "value_index": 57
                },
                {
                  "uid": "Y29uZmlndXJhYmxlLzE0NC8xNjg=",
                  "label": "M",
                  "code": "size",
                  "value_index": 168
                }
              ]
            },
            {
              "product": {
                "id": 1044,
                "name": "Mona Pullover Hoodlie-L-Green",
                "sku": "WH01-L-Green",
                "attribute_set_id": 9,
                "weight": 1,
                "price_range": {
                  "minimum_price": {
                    "regular_price": {
                      "value": 57,
                      "currency": "USD"
                    }
                  }
                }
              },
              "attributes": [
                {
                  "uid": "Y29uZmlndXJhYmxlLzkzLzUz",
                  "label": "Green",
                  "code": "color",
                  "value_index": 53
                },
                {
                  "uid": "Y29uZmlndXJhYmxlLzE0NC8xNjk=",
                  "label": "L",
                  "code": "size",
                  "value_index": 169
                }
              ]
            },
            {
              "product": {
                "id": 1045,
                "name": "Mona Pullover Hoodlie-L-Orange",
                "sku": "WH01-L-Orange",
                "attribute_set_id": 9,
                "weight": 1,
                "price_range": {
                  "minimum_price": {
                    "regular_price": {
                      "value": 57,
                      "currency": "USD"
                    }
                  }
                }
              },
              "attributes": [
                {
                  "uid": "Y29uZmlndXJhYmxlLzkzLzU2",
                  "label": "Orange",
                  "code": "color",
                  "value_index": 56
                },
                {
                  "uid": "Y29uZmlndXJhYmxlLzE0NC8xNjk=",
                  "label": "L",
                  "code": "size",
                  "value_index": 169
                }
              ]
            },
            {
              "product": {
                "id": 1046,
                "name": "Mona Pullover Hoodlie-L-Purple",
                "sku": "WH01-L-Purple",
                "attribute_set_id": 9,
                "weight": 1,
                "price_range": {
                  "minimum_price": {
                    "regular_price": {
                      "value": 57,
                      "currency": "USD"
                    }
                  }
                }
              },
              "attributes": [
                {
                  "uid": "Y29uZmlndXJhYmxlLzkzLzU3",
                  "label": "Purple",
                  "code": "color",
                  "value_index": 57
                },
                {
                  "uid": "Y29uZmlndXJhYmxlLzE0NC8xNjk=",
                  "label": "L",
                  "code": "size",
                  "value_index": 169
                }
              ]
            },
            {
              "product": {
                "id": 1047,
                "name": "Mona Pullover Hoodlie-XL-Green",
                "sku": "WH01-XL-Green",
                "attribute_set_id": 9,
                "weight": 1,
                "price_range": {
                  "minimum_price": {
                    "regular_price": {
                      "value": 57,
                      "currency": "USD"
                    }
                  }
                }
              },
              "attributes": [
                {
                  "uid": "Y29uZmlndXJhYmxlLzkzLzUz",
                  "label": "Green",
                  "code": "color",
                  "value_index": 53
                },
                {
                  "uid": "Y29uZmlndXJhYmxlLzE0NC8xNzA=",
                  "label": "XL",
                  "code": "size",
                  "value_index": 170
                }
              ]
            },
            {
              "product": {
                "id": 1048,
                "name": "Mona Pullover Hoodlie-XL-Orange",
                "sku": "WH01-XL-Orange",
                "attribute_set_id": 9,
                "weight": 1,
                "price_range": {
                  "minimum_price": {
                    "regular_price": {
                      "value": 57,
                      "currency": "USD"
                    }
                  }
                }
              },
              "attributes": [
                {
                  "uid": "Y29uZmlndXJhYmxlLzkzLzU2",
                  "label": "Orange",
                  "code": "color",
                  "value_index": 56
                },
                {
                  "uid": "Y29uZmlndXJhYmxlLzE0NC8xNzA=",
                  "label": "XL",
                  "code": "size",
                  "value_index": 170
                }
              ]
            },
            {
              "product": {
                "id": 1049,
                "name": "Mona Pullover Hoodlie-XL-Purple",
                "sku": "WH01-XL-Purple",
                "attribute_set_id": 9,
                "weight": 1,
                "price_range": {
                  "minimum_price": {
                    "regular_price": {
                      "value": 57,
                      "currency": "USD"
                    }
                  }
                }
              },
              "attributes": [
                {
                  "uid": "Y29uZmlndXJhYmxlLzkzLzU3",
                  "label": "Purple",
                  "code": "color",
                  "value_index": 57
                },
                {
                  "uid": "Y29uZmlndXJhYmxlLzE0NC8xNzA=",
                  "label": "XL",
                  "code": "size",
                  "value_index": 170
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

{% endcollapsible %}

### Limit the number of retrieved media gallery items {#media-gallery-example}

This example shows how the the media gallery items change as a shopper selects configurable options for the product with the SKU `MS10`. The configurable product attributes in the Luma sample data are limited to size and color, and these attributes have a small number of options (five and three, respectively). However, some storefronts will have products with dozens of selectable options. Returning detailed information about all media gallery items in such a storefront would create performance issues.

#### Step 1. Get the images on the parent page

The following query returns media gallery information on the parent configurable and the `uid` values of each configurable option.

Note that file names of the images are `ms10-blue_main_1.jpg`, `ms10-blue_alt1_1.jpg`, and `ms10-blue_back_1.jpg`.

**Request:**

```graphql
query {
  products(search: "MS10" ) {
    items {
      ... on ConfigurableProduct {
        media_gallery {
          url
          label
          position
        }
        configurable_options {
          attribute_code
          values {
            label
            uid
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
    "products": {
      "items": [
        {
          "media_gallery": [
            {
              "url": "http://<host>/media/catalog/product/cache/816455256c48217ab8c5c822a6039d1a/m/s/ms10-blue_main_1.jpg",
              "label": "",
              "position": 1
            },
            {
              "url": "http://<host>/media/catalog/product/cache/816455256c48217ab8c5c822a6039d1a/m/s/ms10-blue_alt1_1.jpg",
              "label": "",
              "position": 2
            },
            {
              "url": "http://<host>/media/catalog/product/cache/816455256c48217ab8c5c822a6039d1a/m/s/ms10-blue_back_1.jpg",
              "label": "",
              "position": 3
            }
          ],
          "configurable_options": [
            {
              "attribute_code": "color",
              "values": [
                {
                  "label": "Black",
                  "uid": "Y29uZmlndXJhYmxlLzkzLzQ5"
                },
                {
                  "label": "Blue",
                  "uid": "Y29uZmlndXJhYmxlLzkzLzUw"
                },
                {
                  "label": "Red",
                  "uid": "Y29uZmlndXJhYmxlLzkzLzU4"
                }
              ]
            },
            {
              "attribute_code": "size",
              "values": [
                {
                  "label": "XS",
                  "uid": "Y29uZmlndXJhYmxlLzE2MC8xNjY="
                },
                {
                  "label": "S",
                  "uid": "Y29uZmlndXJhYmxlLzE2MC8xNjc="
                },
                {
                  "label": "M",
                  "uid": "Y29uZmlndXJhYmxlLzE2MC8xNjg="
                },
                {
                  "label": "L",
                  "uid": "Y29uZmlndXJhYmxlLzE2MC8xNjk="
                },
                {
                  "label": "XL",
                  "uid": "Y29uZmlndXJhYmxlLzE2MC8xNzA="
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

#### Step 2. Select the color

In this example, the shopper has selected the red variant. The query has been expanded to include the `configurable_product_options_selection` object, which filters on the `uid` of the red variant. Within that object, notice:

-  The `options_available_for_selection` shows that all of the `size` attributes can still be selected, and that the red variant has been selected.
-  The `media_gallery` object contains the `ms10-red_main_1.jpg` image, which can then be displayed with the parent images.
-  The `variant` object is null, because the shopper has not selected a size. The variant is not fully defined until a value for all of the selectable attributes.

**Request:**

```graphql
query {
  products(search: "MS10" ) {
    items {
      ... on ConfigurableProduct {
        media_gallery {
          url
          label
          position
        }
        configurable_options {
          uid
          attribute_code
          values {
            label
            uid
          }
        }
        configurable_product_options_selection(configurableOptionValueUids: ["Y29uZmlndXJhYmxlLzkzLzU4"]) {
          options_available_for_selection {
            attribute_code
            option_value_uids
          }
          media_gallery {
            url
            label
            position
          }
          variant {
            uid
            sku
            name
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
    "products": {
      "items": [
        {
          "media_gallery": [
            {
              "url": "http://<host>/media/catalog/product/cache/816455256c48217ab8c5c822a6039d1a/m/s/ms10-blue_main_1.jpg",
              "label": "",
              "position": 1
            },
            {
              "url": "http://<host>/media/catalog/product/cache/816455256c48217ab8c5c822a6039d1a/m/s/ms10-blue_alt1_1.jpg",
              "label": "",
              "position": 2
            },
            {
              "url": "http://<host>/media/catalog/product/cache/816455256c48217ab8c5c822a6039d1a/m/s/ms10-blue_back_1.jpg",
              "label": "",
              "position": 3
            }
          ],
          "configurable_options": [
            {
              "uid": "Y29uZmlndXJhYmxlLzYwMi85Mw==",
              "attribute_code": "color",
              "values": [
                {
                  "label": "Black",
                  "uid": "Y29uZmlndXJhYmxlLzkzLzQ5"
                },
                {
                  "label": "Blue",
                  "uid": "Y29uZmlndXJhYmxlLzkzLzUw"
                },
                {
                  "label": "Red",
                  "uid": "Y29uZmlndXJhYmxlLzkzLzU4"
                }
              ]
            },
            {
              "uid": "Y29uZmlndXJhYmxlLzYwMi8xNjA=",
              "attribute_code": "size",
              "values": [
                {
                  "label": "XS",
                  "uid": "Y29uZmlndXJhYmxlLzE2MC8xNjY="
                },
                {
                  "label": "S",
                  "uid": "Y29uZmlndXJhYmxlLzE2MC8xNjc="
                },
                {
                  "label": "M",
                  "uid": "Y29uZmlndXJhYmxlLzE2MC8xNjg="
                },
                {
                  "label": "L",
                  "uid": "Y29uZmlndXJhYmxlLzE2MC8xNjk="
                },
                {
                  "label": "XL",
                  "uid": "Y29uZmlndXJhYmxlLzE2MC8xNzA="
                }
              ]
            }
          ],
          "configurable_product_options_selection": {
            "options_available_for_selection": [
              {
                "attribute_code": "size",
                "option_value_uids": [
                  "Y29uZmlndXJhYmxlLzE2MC8xNjY=",
                  "Y29uZmlndXJhYmxlLzE2MC8xNjc=",
                  "Y29uZmlndXJhYmxlLzE2MC8xNjg=",
                  "Y29uZmlndXJhYmxlLzE2MC8xNjk=",
                  "Y29uZmlndXJhYmxlLzE2MC8xNzA="
                ]
              },
              {
                "attribute_code": "color",
                "option_value_uids": [
                  "Y29uZmlndXJhYmxlLzkzLzU4"
                ]
              }
            ],
            "media_gallery": [
              {
                "url": "http://<host>/media/catalog/product/cache/816455256c48217ab8c5c822a6039d1a/m/s/ms10-red_main_1.jpg",
                "label": "",
                "position": 1
              }
            ],
            "variant": null
          }
        }
      ]
    }
  }
}
```

#### Step 3. Select the size

In this example, the shopper has selected the Medium option for the size attribute. The query adds the corresponding `uid` to the `configurable_product_options_selection` filter.

-  The `options_available_for_selection` shows that a `size` and a `color` option has been selected.
-  The Luma sample data doesn't include any images that are specific to a size, so the content of the `media_gallery` object is unchanged.
-  The `variant` object contains a few details about the selected variant.

**Request:**

```graphql
query {
  products(search: "MS10" ) {
    items {
      ... on ConfigurableProduct {
        media_gallery {
          url
          label
          position
        }
        configurable_options {
          uid
          attribute_code
          values {
            label
            uid
          }
        }
        configurable_product_options_selection(configurableOptionValueUids: ["Y29uZmlndXJhYmxlLzkzLzU4", "Y29uZmlndXJhYmxlLzE2MC8xNjg="]) {
          options_available_for_selection {
            attribute_code
            option_value_uids
          }
          media_gallery {
            url
            label
            position
          }
          variant {
            uid
            sku
            name
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
    "products": {
      "items": [
        {
          "media_gallery": [
            {
              "url": "http://<host>/media/catalog/product/cache/816455256c48217ab8c5c822a6039d1a/m/s/ms10-blue_main_1.jpg",
              "label": "",
              "position": 1
            },
            {
              "url": "http://<host>/media/catalog/product/cache/816455256c48217ab8c5c822a6039d1a/m/s/ms10-blue_alt1_1.jpg",
              "label": "",
              "position": 2
            },
            {
              "url": "http://<host>/media/catalog/product/cache/816455256c48217ab8c5c822a6039d1a/m/s/ms10-blue_back_1.jpg",
              "label": "",
              "position": 3
            }
          ],
          "configurable_options": [
            {
              "uid": "Y29uZmlndXJhYmxlLzYwMi85Mw==",
              "attribute_code": "color",
              "values": [
                {
                  "label": "Black",
                  "uid": "Y29uZmlndXJhYmxlLzkzLzQ5"
                },
                {
                  "label": "Blue",
                  "uid": "Y29uZmlndXJhYmxlLzkzLzUw"
                },
                {
                  "label": "Red",
                  "uid": "Y29uZmlndXJhYmxlLzkzLzU4"
                }
              ]
            },
            {
              "uid": "Y29uZmlndXJhYmxlLzYwMi8xNjA=",
              "attribute_code": "size",
              "values": [
                {
                  "label": "XS",
                  "uid": "Y29uZmlndXJhYmxlLzE2MC8xNjY="
                },
                {
                  "label": "S",
                  "uid": "Y29uZmlndXJhYmxlLzE2MC8xNjc="
                },
                {
                  "label": "M",
                  "uid": "Y29uZmlndXJhYmxlLzE2MC8xNjg="
                },
                {
                  "label": "L",
                  "uid": "Y29uZmlndXJhYmxlLzE2MC8xNjk="
                },
                {
                  "label": "XL",
                  "uid": "Y29uZmlndXJhYmxlLzE2MC8xNzA="
                }
              ]
            }
          ],
          "configurable_product_options_selection": {
            "options_available_for_selection": [
              {
                "attribute_code": "size",
                "option_value_uids": [
                  "Y29uZmlndXJhYmxlLzE2MC8xNjg="
                ]
              },
              {
                "attribute_code": "color",
                "option_value_uids": [
                  "Y29uZmlndXJhYmxlLzkzLzU4"
                ]
              }
            ],
            "media_gallery": [
              {
                "url": "http://<host>/media/catalog/product/cache/816455256c48217ab8c5c822a6039d1a/m/s/ms10-red_main_1.jpg",
                "label": "",
                "position": 1
              }
            ],
            "variant": {
              "uid": "NTg5",
              "sku": "MS10-M-Red",
              "name": "Logan  HeatTec&reg; Tee-M-Red"
            }
          }
        }
      ]
    }
  }
}
```

### Return swatch information

The following query returns the color and text swatches assigned to configurable product `MJ06`.

**Request:**

```graphql
{
  products(filter: {sku: {eq: "MJ06"}}) {
    items {
        ... on ConfigurableProduct{
      configurable_options{
          values {
            label
            swatch_data{
              value
            }
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
    "products": {
      "items": [
        {
          "configurable_options": [
            {
              "values": [
                {
                  "label": "Blue",
                  "swatch_data": {
                    "value": "#1857f7"
                  }
                },
                {
                  "label": "Green",
                  "swatch_data": {
                    "value": "#53a828"
                  }
                },
                {
                  "label": "Purple",
                  "swatch_data": {
                    "value": "#ef3dff"
                  }
                }
              ]
            },
            {
              "values": [
                {
                  "label": "XS",
                  "swatch_data": {
                    "value": "XS"
                  }
                },
                {
                  "label": "S",
                  "swatch_data": {
                    "value": "S"
                  }
                },
                {
                  "label": "M",
                  "swatch_data": {
                    "value": "M"
                  }
                },
                {
                  "label": "L",
                  "swatch_data": {
                    "value": "L"
                  }
                },
                {
                  "label": "XL",
                  "swatch_data": {
                    "value": "XL"
                  }
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

## Related topics

-  [addConfigurableProductsToCart mutation]({{page.baseurl}}/graphql/mutations/add-configurable-products.html)
