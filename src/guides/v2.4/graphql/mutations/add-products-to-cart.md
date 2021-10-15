---
group: graphql
title: addProductsToCart mutation
contributor_name: Atwix
contributor_link: https://www.atwix.com/
---

The `addProductsToCart` mutation adds any type of product to the shopping cart. It streamlines the process of adding products by allowing you to specify multiple product types in a single call. Magento recommends using this mutation to add products to the cart instead of the single-purpose mutations, such as `addSimpleProductsToCart` and `addConfigurableProductsToCart`.

You must specify the Cart ID along with the list of SKU and quantity pairs as parameters to add the products to the shopping cart.

The `CartItemInput` object now contains the `selected_options` and `enter_options` attributes. A selected option is predefined, and the shopper chooses from a set of possible values. Entered options generally contain text the shopper types, but other possibilities exist.

Selected options can be used in the following product types:

*  Customizable options such those presented in drop-down menu, radio buttons, and checkboxes

*  Bundle products

*  Configurable products

*  Downloadable products

*  Gift cards (amount)

*  Grouped products

Entered options can be used in the following product types:

*  Customizable options such as those presented in a text field, text area, or file

*  Gift cards (custom amounts, sender and recipient fields, messages)

Use the `uid` attribute to reference selected or entered options. For entered options, the `uid` represents an option value, while for entered options, the `uid` represents an option. Each `uid` is unique across different options in a set.

## Syntax

```graphql
mutation {
  addProductsToCart(
    cartId: String!
    cartItems: [CartItemInput!]!
  ) {
    AddProductsToCartOutput
  }
}
```

## Example usage

These examples show the minimal payload for adding products, including those with customizable options.

### Add a simple product to a cart

The following example adds a simple product to a cart.

**Request:**

```graphql
mutation {
  addProductsToCart(
    cartId: "8k0Q4MpH2IGahWrTRtqM61YV2MtLPApz"
    cartItems: [
      {
        quantity: 1
        sku: "24-MB04"
      }
    ]
  ) {
    cart {
      items {
        product {
          name
          sku
        }
        quantity
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "addProductsToCart": {
      "cart": {
        "items": [
          {
            "product": {
              "name": "Strive Shoulder Pack",
              "sku": "24-MB04"
            },
            "quantity": 1
          }
        ]
      }
    }
  }
}
```

### Add a configurable product to a cart

The following examples show two ways to add the same configurable product (`WSH12`, a pair of shorts) to the cart.

#### Specify a parent and a child SKU

In this example, the configurable product SKU is the `parent_sku` attribute, while the simple product variant is the `sku` attribute.

**Request:**

```graphql
mutation {
  addProductsToCart(
    cartId: "8k0Q4MpH2IGahWrTRtqM61YV2MtLPApz"
    cartItems: [
      {
        quantity: 1
        parent_sku: "WSH12"
        sku: "WSH12-28-Green"
      }
    ]
  ) {
    cart {
      items {
        id
        product {
          name
          sku
        }
        quantity
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "addProductsToCart": {
      "cart": {
        "items": [
          {
            "id": "24",
            "product": {
              "name": "Erika Running Short",
              "sku": "WSH12"
            },
            "quantity": 1
          },
          {
            "id": "26",
            "product": {
              "name": "Erika Running Short-28-Green",
              "sku": "WSH12-28-Green"
            },
            "quantity": 1
          }
        ]
      }
    }
  }
}
```

#### Specify the SKU with selected options

In this example, the mutation specifies the size and color as selected options. The first option specifies the color, while the second option specifies the size. The [`products` query]({{page.baseurl}}/graphql/queries/products.html#variant-uid) shows how to obtain the values specified in the `selected_options` array.

**Request:**

```graphql
mutation {
  addProductsToCart(
    cartId: "2m3Wpue1L3bNARhErAKbZ8Lb7czvgq6R"
    cartItems: [
      {
        quantity: 1
        sku: "WSH12"
        selected_options: ["Y29uZmlndXJhYmxlLzkzLzUz","Y29uZmlndXJhYmxlLzE2MS8xNzQ="]
      }
    ]
  ) {
    cart {
      items {
        product {
          name
          sku
        }
        ... on ConfigurableCartItem {
          configurable_options {
            configurable_product_option_uid
            option_label
            configurable_product_option_value_uid
            value_label
          }
        }
        quantity
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "addProductsToCart": {
      "cart": {
        "items": [
          {
            "product": {
              "name": "Erika Running Short",
              "sku": "WSH12"
            },
            "configurable_options": [
              {
                "configurable_product_option_uid": "Y29uZmlndXJhYmxlLzIwNDgvOTM=",
                "option_label": "Color",
                "configurable_product_option_value_uid": "Y29uZmlndXJhYmxlLzkzLzUz",
                "value_label": "Green"
              },
              {
                "configurable_product_option_uid": "Y29uZmlndXJhYmxlLzIwNDgvMTYx",
                "option_label": "Size",
                "configurable_product_option_value_uid": "Y29uZmlndXJhYmxlLzE2MS8xNzQ=",
                "value_label": "28"
              }
            ],
            "quantity": 1
          }
        ]
      }
    }
  }
}
```

### Add a simple product with entered options

The following example adds a simple product with a customizable option to the cart. The customizable option allows the shopper to specify a message for engraving.

{:.bs-callout-info}
The customizable option is not part of the Luma sample data.

**Request:**

```graphql
mutation {
  addProductsToCart(
    cartId: "2m3Wpue1L3bNARhErAKbZ8Lb7czvgq6R"
    cartItems: [
      {
        quantity: 1
        sku: "24-WG03"
        entered_options: [{
          uid: "Y3VzdG9tLW9wdGlvbi8x"
          value: "Congrats, Julie!"
        }]
      }
    ]
  ) {
    cart {
      items {
        product {
          name
          sku
        }
        ... on SimpleCartItem {
          customizable_options {
            customizable_option_uid
            label
            values {
              customizable_option_value_uid
              value
            }
          }
        }
        quantity
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "addProductsToCart": {
      "cart": {
        "items": [
          {
            "id": "19",
            "product": {
              "name": "Clamber Watch",
              "sku": "24-WG03"
            },
            "customizable_options": [
              {
                "customizable_option_uid": "Y3VzdG9tLW9wdGlvbi8x",
                "label": "Engraving",
                "values": [
                  {
                    "customizable_option_value_uid": "Y3VzdG9tLW9wdGlvbi8x",
                    "value": "Congrats, Julie!"
                  }
                ]
              }
            ],
            "quantity": 1
          }
        ]
      }
    }
  }
}
```

## Add a bundle product with selected options to a cart

The following example adds the Sprite Yoga Companion Kit bundle product to the cart. The bundle product is comprised of four simple products, and the selected simple products are specified with a value in the `selected_options` array. Use the `products` query to determine these UID values. Note that each UID value is an encoded value representing the following string:

`bundle/<bundle_option_id>/<bundle_option_selection_id>/<quantity>`

Because the encoded value includes the quantity, the schema does not contain a `quantity` attribute for individual simple products.

In this example, the UID values are encoded versions of these strings:

```text
bundle/1/1/1
bundle/2/4/1
bundle/3/5/1
bundle/4/8/1
```

**Request:**

```graphql
mutation {
  addProductsToCart(
    cartId: "ELwvX8VJinGJ9Q2vOXSiCTS4gvCDKP8U"
    cartItems: [
      {
        quantity: 1
        sku: "24-WG080"
        selected_options: [
          "YnVuZGxlLzEvMS8x"
          "YnVuZGxlLzIvNC8x"
          "YnVuZGxlLzMvNS8x"
          "YnVuZGxlLzQvOC8x"
        ]
      }
    ]
  ) {
    cart {
      items {
        uid
        product {
          name
          sku
        }
        quantity
        ... on BundleCartItem {
          bundle_options {
            uid
            label
            type
            values {
              id
              label
              price
              quantity
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
    "addProductsToCart": {
      "cart": {
        "items": [
          {
            "uid": "MTQ=",
            "product": {
              "name": "Sprite Yoga Companion Kit",
              "sku": "24-WG080"
            },
            "quantity": 1,
            "bundle_options": [
              {
                "uid": "YnVuZGxlLzE=",
                "label": "Sprite Stasis Ball",
                "type": "radio",
                "values": [
                  {
                    "id": 1,
                    "label": "Sprite Stasis Ball 55 cm",
                    "price": 23,
                    "quantity": 1
                  }
                ]
              },
              {
                "uid": "YnVuZGxlLzI=",
                "label": "Sprite Foam Yoga Brick",
                "type": "radio",
                "values": [
                  {
                    "id": 4,
                    "label": "Sprite Foam Yoga Brick",
                    "price": 5,
                    "quantity": 1
                  }
                ]
              },
              {
                "uid": "YnVuZGxlLzM=",
                "label": "Sprite Yoga Strap",
                "type": "radio",
                "values": [
                  {
                    "id": 5,
                    "label": "Sprite Yoga Strap 6 foot",
                    "price": 14,
                    "quantity": 1
                  }
                ]
              },
              {
                "uid": "YnVuZGxlLzQ=",
                "label": "Sprite Foam Roller",
                "type": "radio",
                "values": [
                  {
                    "id": 8,
                    "label": "Sprite Foam Roller",
                    "price": 19,
                    "quantity": 1
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  }
}
```

### Add a bundle product with entered options to the cart

For `entered_options`, the `uid` attribute contains the encoded entered value. The `value` attribute defines the quantity. If the `BundleProduct.items.options.can_change_quantity` attribute is `false`, then the bundle product definition sets the quantity for the simple product. Otherwise, the shopper decides the quantity.

The Luma sample data does not provide any bundle products with entered options. The following snippet shows how to construct the mutation.

```graphql
mutation {
  addProductsToCart(
    cartId: "ELwvX8VJinGJ9Q2vOXSiCTS4gvCDKP8U"
    cartItems: [
      {
        quantity: 1
        sku: "bundle1"
        entered_options: [
          {
            uid: "EncodedEnteredValue1"
            value: 1
          }
        ]
        selected_options: [
          "EncodedSelectedValue1"
          "EncodedSelectedValue2"
        ]
      }
    ]
  ) {
    cart {
      items {
        uid
        product {
          name
          sku
        }
        quantity
        ... on BundleCartItem {
          bundle_options {
            uid
            label
            type
            values {
              id
              label
              price
              quantity
            }
          }
        }
      }
    }
  }
}
```

## Input attributes

The `addProductsToCart` mutation must contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`cartId` | String! | The unique ID that identifies the customer's cart
`cartItems` | [[CartItemInput!]!](#CartItemInput) | Contains the cart item IDs and quantity of each item

### CartItemInput object {#CartItemInput}

The `CartItemInput` object must contain the following attributes:

{% include graphql/cart-item-input-24.md %}

### EnteredOptionInput object {#EnteredOptionInput}

{% include graphql/entered-option-input.md %}

## Output attributes

The `AddProductsToCartOutput` object contains the `Cart` object.

Attribute |  Data Type | Description
--- | --- | ---
`cart` |[Cart!](#CartObject) | Describes the contents of the specified shopping cart

### Cart object {#CartObject}

{% include graphql/cart-object.md %}

[Cart query output]({{page.baseurl}}/graphql/queries/cart.html#cart-output) provides more information about the `Cart` object.

## Errors

Code | Error | Description
--- | --- | ---
`CART_ID_INVALID` | `Could not find a cart with ID` | The specified cart ID is invalid.
`PRODUCT_NOT_FOUND` | `Could not find a product with SKU "XXX"` | A product with the SKU specified in the argument `data`.`sku` does not exist.
`NOT_SALABLE` | `Product that you are trying to add is not available.` | A requested product is not available
`INSUFFICIENT_STOCK` | `This product is out of stock` | The requested product is out of stock
`UNDEFINED` | `UNDEFINED` | The error message does not match any error code
