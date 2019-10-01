---
group: graphql
title: ConfigurableProduct endpoint
---

The `ConfigurableProduct` endpoint extends the `ProductInterface` so that attributes that are specific to configurable products can be queried in a `products` search.

{:.bs-callout .bs-callout-tip}
The mutation defined in this topic is available in the 2.3-develop branch of the [graphql-ce repository](https://github.com/magento/graphql-ce).

## Query
The `products` query returns configurable product-specific information when you perform a `products` search.

### Syntax
Add the following inline fragment to the output section of your `products` query to return information specific to configurable products:

```text
... on ConfigurableProduct {
  configurable_options {
   <attributes>
  }
}
```

### Configurable product
The `ConfigurableProduct` object contains the following attributes:

Attribute | Type | Description
--- | --- | ---
`configurable_options` | [[ConfigurableProductOptions]](#configProdOptions) | An array of linked simple product items
`variants` | ConfigurableVariant | An array of variants of products

## ConfigurableVariant

Field | Type | Description
--- | --- | ---
`attributes` | ConfigurableAttributeOption | ConfigurableAttributeOption contains the value_index (and other related information) assigned to a configurable product option
`product` | SimpleProduct | An array of linked simple products

## ConfigurableAttributeOption

Field | Type | Description
--- | --- | ---
`code` | String | The ID assigned to the attribute
`label` | String | A string that describes the configurable attribute option
`value_index` | Int | A unique index number assigned to the configurable product option

### Configurable product options {#configProdOptions}
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

### Configurable product options values {#configProdOptionsValues}
The `ConfigurableProductOptionsValues` object contains the following attribute:

Attribute | Type | Description
--- | --- | ---
`default_label` | String | The label of the product on the default store
`label` | String | The label of the product
`store_label` | String | The label of the product on the current store
`use_default_value` | Boolean | Indicates whether to use the default_label
`value_index` | Int | A unique index number assigned to the configurable product option

### Example usage

The following `products` query returns `ConfigurableProduct` information about the `WH01` configurable product, which is defined in the sample data.

**Request**

```text
{
  products(filter: { sku: { eq: "WH01" } }) {
    items {
      id
      attribute_set_id
      name
      sku
      type_id
      price {
        regularPrice {
          amount {
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
            price {
              regularPrice {
                amount {
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

{% collapsible Response %}

``` text
{
  "data": {
    "products": {
      "items": [
        {
          "id": 1050,
          "attribute_set_id": 9,
          "name": "Mona Pullover Hoodlie",
          "sku": "WH01",
          "type_id": "configurable",
          "price": {
            "regularPrice": {
              "amount": {
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
                "price": {
                  "regularPrice": {
                    "amount": {
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
                "price": {
                  "regularPrice": {
                    "amount": {
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
                "price": {
                  "regularPrice": {
                    "amount": {
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
                "price": {
                  "regularPrice": {
                    "amount": {
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
                "price": {
                  "regularPrice": {
                    "amount": {
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
                "price": {
                  "regularPrice": {
                    "amount": {
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
                "price": {
                  "regularPrice": {
                    "amount": {
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
                "price": {
                  "regularPrice": {
                    "amount": {
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
                "price": {
                  "regularPrice": {
                    "amount": {
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
                "price": {
                  "regularPrice": {
                    "amount": {
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
                "price": {
                  "regularPrice": {
                    "amount": {
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
                "price": {
                  "regularPrice": {
                    "amount": {
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
                "price": {
                  "regularPrice": {
                    "amount": {
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
                "price": {
                  "regularPrice": {
                    "amount": {
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
                "price": {
                  "regularPrice": {
                    "amount": {
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

## Mutation
Use the `addConfigurableProductsToCart` mutation to add configurable products to a specific cart.

### Syntax

`mutation: {addConfigurableProductsToCart(input: AddConfigurableProductsToCartInput) {AddConfigurableProductsToCartOutput}}`

### Add configurable products to cart input
The `AddConfigurableProductsToCartInput` object contains the following attributes:

Attribute | Type | Description
--- | --- | ---
`cart_items` | [[ConfigurableProductCartItemInput]](#configProdCartItemInput) | An array of configurable items to add to the cart
`cart_id` | String | The unique ID that identifies the customer's cart

### Configurable product cart item input {#configProdCartItemInput}
The `ConfigurableProductCartItemInput` object contains the following attributes:

Attribute | Type | Description
--- | --- | ---
`customizable_options` | [CustomizableOptionInput](#customOptionInput) | An object that contains the ID and value of the product
`data` | [CartItemInput](#cartItemInput) | An object that contains the quantity and SKU of the configurable product
`variant_sku` | String | The SKU of the simple product

### Customizable option input {#customOptionInput}
The `CustomizableOptionInput` object contains the following attributes:

Attribute | Type | Description
--- | --- | ---
`id` | Int | The ID of the customizable option
`value` | String | The value of the customizable option. For example, if color was the customizable option, a possible value could be `black`

### Cart item input {#cartItemInput}
The `CartItemInput` object contains the following attributes:

Attribute | Type | Description
--- | --- | ---
`quantity` | Float | The number of configurable items to add to the cart
`sku` | String | The SKU of the configurable product

### Example usage
The following example adds two black Teton Pullover Hoodies size extra-small to the specified shopping cart. The `cart_id` used in this example was [generated]({{ page.baseurl }}/graphql/reference/quote-create-cart.html) by creating an empty cart.

**Request**

``` text
mutation {
  addConfigurableProductsToCart(
    input: {
      cart_id: "4JQaNVJokOpFxrykGVvYrjhiNv9qt31C"
      cart_items: [
        {
          variant_sku: "MH02"
          data: {
            quantity: 2
            sku: "MH02-XS-Black"
          }
        }
      ]
    }
  ) {
    cart {
      items {
        id
        quantity
        product {
          name
          sku
        }
        ... on ConfigurableCartItem {
          configurable_options {
            option_label
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
    "addConfigurableProductsToCart": {
      "cart": {
        "items": [
          {
            "id": "26",
            "quantity": 2,
            "product": {
              "name": "Teton Pullover Hoodie-XS-Black",
              "sku": "MH02-XS-Black"
            }
          }
        ]
      }
    }
  }
}
```
