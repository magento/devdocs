---
group: graphql
title: ConfigurableProduct endpoint
---

The `ConfigurableProduct` endpoint defines queries and mutations for configurable products.

## Query
The `products` query returns configurable product-specific information when you perform a `products` search.

### Syntax

`products(filter: {sku: {eq: "WH01"}})`
???ASK KEVIN???

### ConfigurableProduct

Attribute | Type | Description
--- | --- | ---
`configurable_product_links` | SimpleProduct | An array of linked simple products
`configurable_product_options` | ConfigurableProductOptions | An array of linked simple product items

### ConfigurableProductOptions

Attribute | Type | Description
--- | --- | ---
`attribute_code` | String | A string that identifies the attribute
`attribute_id` | String | The ID assigned to the attribute
`id` | Int | The configurable option ID number assigned by the system
`is_use_default` | Boolean | Indicates whether the option is the default
`label` | String | A string that describes the configurable product option. It is displayed on the UI.
`position` | Int | A number that indicates the order in which the attribute is displayed
`product_id` | Int | This is the same as a product's 'id' field
`values` | ConfigurableProductOptionsValues | An array that defines the value_index codes assigned to the configurable product

### ConfigurableProductOptionsValues

Field | Type | Description
--- | --- | ---
`value_index` | Int | A unique index number assigned to the configurable product option

### Example usage

The following `products` query returns `ConfigurableProduct` information about the `WH01` configurable product, which is defined in the sample data.

**Request**

```text
{
  products(filter: {sku: {eq: "WH01"}}) {
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
            store_label
            default_label
            use_default_value
          }
          product_id
        }
        variants {
          product {
            id
            categories {
              id
            }
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

**{% collapsible Response %}**

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
                  "label": "Green",
                  "store_label": "Green",
                  "default_label": "Green",
                  "use_default_value": true
                },
                {
                  "value_index": 56,
                  "label": "Orange",
                  "store_label": "Orange",
                  "default_label": "Orange",
                  "use_default_value": true
                },
                {
                  "value_index": 57,
                  "label": "Purple",
                  "store_label": "Purple",
                  "default_label": "Purple",
                  "use_default_value": true
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
                  "label": "XS",
                  "store_label": "XS",
                  "default_label": "XS",
                  "use_default_value": true
                },
                {
                  "value_index": 177,
                  "label": "S",
                  "store_label": "S",
                  "default_label": "S",
                  "use_default_value": true
                },
                {
                  "value_index": 178,
                  "label": "M",
                  "store_label": "M",
                  "default_label": "M",
                  "use_default_value": true
                },
                {
                  "value_index": 179,
                  "label": "L",
                  "store_label": "L",
                  "default_label": "L",
                  "use_default_value": true
                },
                {
                  "value_index": 180,
                  "label": "XL",
                  "store_label": "XL",
                  "default_label": "XL",
                  "use_default_value": true
                }
              ],
              "product_id": 1050
            }
          ],
          "variants": [
            {
              "product": {
                "id": 1035,
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
Use the `addConfigurableProductsToCart` muatation to add configurable products to a specific cart.


### Syntax

`mutation: {addConfigurableProductsToCart(input: AddConfigurableProductsToCartInput) {AddConfigurableProductsToCartOutput}}`

### Add configurable products to cart input
The `AddConfigurableProductsToCartInput` object contains the following attributes:

Attribute | Type | Description
--- | --- | ---
`cartItems` | [ConfigurableProductCartItemInput](#configProdCartItemInput) | An array of configurable items to add to the cart
`cart_id` | String | The unique ID that identifies the customer's cart

### Configurable product cart item input{#configProdCartItemInput}
The `ConfigurableProductCartItemInput` object contains the following attributes:

Attribute | Type | Description
--- | --- | ---
`customizable_options` | [CustomizableOptionInput](#customOptionInput) | An object that contains the ID and value of the product
`data` | [CartItemDetailsInput](#cartItemDetailsInput) | An object that contains the quantity and SKU of the configurable product
`variant_sku` | String | The SKU of the simple product

### Customizable option input{#customOptionInput}
The `CustomizableOptionInput` object contains the following attributes:

Attribute | Type | Description
--- | --- | ---
`id` | Int | The ID of the product
`value` | String | ???

### Cart item details input{#cartItemDetailsInput}
The `CartItemDetailsInput` object contains the following attributes:

Attribute | Type | Description
--- | --- | ---
`qty` | Float | The number of configurable items to add to the cart
`sku` | String | The SKU of the configurable product


#### Example usage
The following example adds two black Teton Pullover Hoodies size extra-small to the specified shopping cart. The `cart_id` used in this example was [generated]({{ page.baseurl }}/graphql/reference/product-interface-implementations.html#createEmptyCart) by creating an empty cart.

**Request**

``` text
mutation {
  addConfigurableProductsToCart(
    input: {
      cart_id: "4JQaNVJokOpFxrykGVvYrjhiNv9qt31C"
      cartItems: [
        {
          variant_sku: "MH02"
          data: {
            qty: 2
            sku: "MH02-XS-Black"
          }
        }
      ]
    }
  ) {
    cart {
      items {
        id
        qty
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
            "qty": 2,
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