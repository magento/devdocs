---
group: graphql
title: Configurable product data types
redirect_from:
  - /guides/v2.3/graphql/reference/configurable-product.html
  - /guides/v2.3/graphql/product/configurable-product.html
---

The `ConfigurableProduct` data type implements the following interfaces:

-  `ProductInterface`
-  `PhysicalProductInterface`
-  `CustomizableProductInterface`

Attributes that are specific to configurable products can be used when performing a [`products`]({{page.baseurl}}/graphql/queries/products.html) query.

## ConfigurableProduct object

The `ConfigurableProduct` object contains the following attributes:

Attribute | Type | Description
--- | --- | ---
`configurable_options` | [[ConfigurableProductOptions]](#configProdOptions) | An array of linked simple product items
`variants` | ConfigurableVariant | An array of variants of products

### ConfigurableVariant object

The `ConfigurableVariant` object contains the following attributes:

Field | Type | Description
--- | --- | ---
`attributes` | ConfigurableAttributeOption | ConfigurableAttributeOption contains the value_index (and other related information) assigned to a configurable product option
`product` | SimpleProduct | An array of linked simple products

### ConfigurableAttributeOption object

The `ConfigurableAttributeOption` object contains the following attributes:

Field | Type | Description
--- | --- | ---
`code` | String | The ID assigned to the attribute
`label` | String | A string that describes the configurable attribute option
`value_index` | Int | A unique index number assigned to the configurable product option

### ConfigurableProductOptions {#configProdOptions}

The `ConfigurableProductOptions` object contains the following attributes:

Attribute | Type | Description
--- | --- | ---
`attribute_code` | String | A string that identifies the attribute
`attribute_id` | String | The ID assigned to the attribute
`id` | Int | The configurable option ID number assigned by the system
`label` | String | A string that describes the configurable product option. It is displayed on the UI.
`position` | Int | A number that indicates the order in which the attribute is displayed
`product_id` | Int | This is the same as a product's 'id' field
`use_default` | Boolean | Indicates whether the option is the default
`values` | [[ConfigurableProductOptionsValues]](#configProdOptionsValues) | An array that defines the `value_index` codes assigned to the configurable product

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
          attribute_id
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
          "__typename": "configurable",
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
              "id": 2
            },
            {
              "id": 8
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
              "attribute_id": "93",
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
              "attribute_id": "160",
              "label": "Size",
              "position": 0,
              "use_default": false,
              "attribute_code": "size",
              "values": [
                {
                  "value_index": 176,
                  "label": "XS"
                },
                {
                  "value_index": 177,
                  "label": "S"
                },
                {
                  "value_index": 178,
                  "label": "M"
                },
                {
                  "value_index": 179,
                  "label": "L"
                },
                {
                  "value_index": 180,
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
                  "label": "Green",
                  "code": "color",
                  "value_index": 53
                },
                {
                  "label": "XS",
                  "code": "size",
                  "value_index": 176
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
                  "label": "Orange",
                  "code": "color",
                  "value_index": 56
                },
                {
                  "label": "XS",
                  "code": "size",
                  "value_index": 176
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
                  "label": "Purple",
                  "code": "color",
                  "value_index": 57
                },
                {
                  "label": "XS",
                  "code": "size",
                  "value_index": 176
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
                  "label": "Green",
                  "code": "color",
                  "value_index": 53
                },
                {
                  "label": "S",
                  "code": "size",
                  "value_index": 177
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
                  "label": "Orange",
                  "code": "color",
                  "value_index": 56
                },
                {
                  "label": "S",
                  "code": "size",
                  "value_index": 177
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
                  "label": "Purple",
                  "code": "color",
                  "value_index": 57
                },
                {
                  "label": "S",
                  "code": "size",
                  "value_index": 177
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
                  "label": "Green",
                  "code": "color",
                  "value_index": 53
                },
                {
                  "label": "M",
                  "code": "size",
                  "value_index": 178
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
                  "label": "Orange",
                  "code": "color",
                  "value_index": 56
                },
                {
                  "label": "M",
                  "code": "size",
                  "value_index": 178
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
                  "label": "Purple",
                  "code": "color",
                  "value_index": 57
                },
                {
                  "label": "M",
                  "code": "size",
                  "value_index": 178
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
                  "label": "Green",
                  "code": "color",
                  "value_index": 53
                },
                {
                  "label": "L",
                  "code": "size",
                  "value_index": 179
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
                  "label": "Orange",
                  "code": "color",
                  "value_index": 56
                },
                {
                  "label": "L",
                  "code": "size",
                  "value_index": 179
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
                  "label": "Purple",
                  "code": "color",
                  "value_index": 57
                },
                {
                  "label": "L",
                  "code": "size",
                  "value_index": 179
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
                  "label": "Green",
                  "code": "color",
                  "value_index": 53
                },
                {
                  "label": "XL",
                  "code": "size",
                  "value_index": 180
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
                  "label": "Orange",
                  "code": "color",
                  "value_index": 56
                },
                {
                  "label": "XL",
                  "code": "size",
                  "value_index": 180
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
                  "label": "Purple",
                  "code": "color",
                  "value_index": 57
                },
                {
                  "label": "XL",
                  "code": "size",
                  "value_index": 180
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
