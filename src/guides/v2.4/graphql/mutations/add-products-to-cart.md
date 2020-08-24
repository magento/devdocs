---
group: graphql
title: addProductsToCart mutation
---

Magento 2.4.1 introduced the `addProductsToCart` mutation that streamlines the process of adding the products to the shopping cart. It allows you to add a number of products to the cart at one time regardless of product types.

You must specify the Cart ID along with the list of SKU and Quantity pairs as parameters to add the products to the shopping cart.

## Syntax

```graphql
mutation {
  addProductsToCart(
    cartId: String
    cartItems: [CartItemInput]
  ) {
    AddProductsToCartOutput
  }
}
```

## Example usage

These examples show the minimal payload and a payload that includes customizable options.

### Add a product to a cart

The following example adds a product to a cart. The response contains the minimal payload contents of the customer's cart.

**Request:**

```graphql
mutation {
  addProductsToCart(
    cartId: "HbpLADRmSo5h2dCdF85O5wCaVnrworKL"
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

### Options

Each product may have options. An option can be of 2 types.

`selected_options` - predefined and selected by customer option. E.g. it can be customizable option: color: green, size: 28 or bundle option: Memory: 24M, Warranty: 1y, etc.

Add a product with selected options to a cart.

**Request:**

```graphql
mutation {
  addProductsToCart(
    cartId: "HbpLADRmSo5h2dCdF85O5wCaVnrworKL"
    cartItems: [
      {
        quantity: 1
        sku: "WSH12"
        selected_options: ["Y29uZmlndXJhYmxlLzkzLzExNA==","Y29uZmlndXJhYmxlLzE5OS8yMzI="]
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
            "id": "348",
            "product": {
              "name": "Erika Running Short",
              "sku": "WSH12"
            },
            "configurable_options": [
              {
                "id": 93,
                "option_label": "Color",
                "value_id": 114,
                "value_label": "Green"
              },
              {
                "id": 199,
                "option_label": "Size",
                "value_id": 232,
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

`entered_options` - option entered by a customer like: text field, image, etc.

Add a product with entered options to a cart.

**Request:**

```graphql
mutation {
  addProductsToCart(
    cartId: "HbpLADRmSo5h2dCdF85O5wCaVnrworKL"
    cartItems: [
      {
        quantity: 1
        sku: "24-WG03"
        entered_options: [{
          uid: "Y3VzdG9tLW9wdGlvbi81Mg=="
          value: "Test Engraving"
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
                "label": "Engraving",
                "values": [
                  {
                    "id": 1184,
                    "value": "Test Engraving"
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

We can consider `selected_option` and `entered_option` as a unique identifier. They meet the criteria:

-  `selected_option` represents option value, while `entered_option` represents an option

-  Uid is unique across different options

-  Uid must be returned from the server

-  Used by the client as is (opaque)

Selected options can be used for:

-  Customizable options such a dropdown, radiobutton, checkbox, etc.

-  Configurable product

-  Bundle Product

-  Downloadable product

-  Grouped product

-  Gift Card (amount)

Entered options:

-  Customizable options such as text field, file, etc.

-  Gift Card (custom amount, sender fields, recipient fields, message)

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

The `EnteredOptionInput` object must contain the following attributes:

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
