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

### Add a product to a cart

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
            "id": "346",
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

In this example, the mutation specifies the size and color as selected options. The first option specifies the color, while the second option specifies the size.

**Request:**

```graphql
mutation {
  addProductsToCart(
    cartId: "HbpLADRmSo5h2dCdF85O5wCaVnrworKL"
    cartItems: [
      {
        quantity: 1
        sku: "WSH12"
        selected_options: ["Y29uZmlndXJhYmxlLzkzLzUz","Y29uZmlndXJhYmxlLzE0NC8xNzE="]
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
        ... on ConfigurableCartItem {
          configurable_options {
            id
            option_label
            value_id
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
            "id": "24",
            "product": {
              "name": "Erika Running Short",
              "sku": "WSH12"
            },
            "configurable_options": [
              {
                "id": 93,
                "option_label": "Color",
                "value_id": 53,
                "value_label": "Green"
              },
              {
                "id": 144,
                "option_label": "Size",
                "value_id": 171,
                "value_label": "28"
              }
            ],
            "quantity": 2
          }
        ]
      }
    }
  }
}
```

### Add a product with entered options

The following example adds a simple product with a customizable option to the cart. The customizable option allows the shopper to specify a message for engraving.

**Request:**

```graphql
mutation {
  addProductsToCart(
    cartId: "8k0Q4MpH2IGahWrTRtqM61YV2MtLPApz"
    cartItems: [
      {
        quantity: 1
        sku: "24-WG03"
        entered_options: [{
          uid: "Y3VzdG9tLW9wdGlvbi81Mg=="
          value: "Congrats, Julie!"
        }]
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
        ... on SimpleCartItem {
          customizable_options {
            id
            label
            values {
              id
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
            "id": "350",
            "product": {
              "name": "Clamber Watch",
              "sku": "24-WG03"
            },
            "customizable_options": [
              {
                "id": 52,
                "label": "Congrats, Julie!",
                "values": [
                  {
                    "id": 1184,
                    "value": ""
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

## Input attributes

The `addProductsToCart` mutation must contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`cartId` | String! | The unique ID that identifies the customer's cart
`cartItems` | [[CartItemInput!]!](#CartItemInput) | Contains the cart item IDs and quantity of each item

### CartItemInput object {#CartItemInput}

The `CartItemInput` object must contain the following attributes:

{% include graphql/cart-item-input.md %}

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
`PRODUCT_NOT_FOUND` | `Could not find a product with SKU "XXX"` | A product with the SKU specified in the argument `data`.`sku` does not exist.
`NOT_SALABLE` | `Product that you are trying to add is not available.` | A requested product is not available
`INSUFFICIENT_STOCK` | `This product is out of stock` | A requested product is out of stock
`UNDEFINED` | `UNDEFINED` | An error message is not matched with any code
