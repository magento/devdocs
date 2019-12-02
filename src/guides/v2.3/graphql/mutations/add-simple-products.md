---
group: graphql
title: addSimpleProductsToCart mutation
redirect from:
  - /guides/v2.3/graphql/reference/quote-add-simple-products.html
---

Simple products are physical products that do not have variations, such as color, size, or price. The `addSimpleProductsToCart` mutation allows you to add multiple simple products to the cart at the same time, but you cannot add other product types with this mutation. To add a simple product to a cart, you must provide the cart ID, the SKU, and the quantity. You can also optionally provide customizable options.

## Syntax

`mutation: {addSimpleProductsToCart(input: AddSimpleProductsToCartInput): {AddSimpleProductsToCartOutput}}`

## Example usage

These examples show the minimal payload and a payload that includes customizable options.

### Add a simple product to a cart

The following example adds a simple product to a cart. The response contains the entire contents of the customer's cart.

**Request:**

```text
mutation {
  addSimpleProductsToCart(
    input: {
      cart_id: "IeTUiU0oCXjm0uRqGCOuhQ2AuQatogjG"
      cart_items: [
        {
          data: {
            quantity: 1
            sku: "24-MB04"
          }
        }
      ]
    }
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
    "addSimpleProductsToCart": {
      "cart": {
        "items": [
          {
            "id": "13",
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

### Add a simple product with customizable options to a cart

If a product has a customizable option, you can specify the option's value in the `addSimpleProductsToCart` request.

**Request:**

``` text
mutation {
  addSimpleProductsToCart (input: {
    cart_id: "IeTUiU0oCXjm0uRqGCOuhQ2AuQatogjG",
    cart_items: {
      data: {
        sku: "simple"
        quantity: 1
      },
      customizable_options: [
        {
          id: 121
          value_string: "field value"
        }
      ]
    }
  }) {
    cart {
      items {
        product {
           name
        }
        quantity
        ... on SimpleCartItem {
          customizable_options {
            label
            values {
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

```text
{
  "data": {
    "addSimpleProductsToCart": {
      "cart": {
        "items": [
          {
            "product": {
              "name": "simple"
            },
            "quantity": 1,
            "customizable_options": [
              {
                "label": "Field Option",
                "values": [
                  {
                    "value": "field value"
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

## Input attributes

The top-level `AddSimpleProductsToCartInput` object is listed first. All child objects are listed in alphabetical order.

### AddSimpleProductsToCartInput object {#AddSimpleProductsToCartInput}

The `AddSimpleProductsToCartInput` object must contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`cart_id` | String! | The unique ID that identifies the customer's cart
`cart_items` | [SimpleProductCartItemInput!](#SimpleProductCartItemInput) | Contains the cart item IDs and quantity of each item

### CartItemInput object {#CartItemInputSimple}

The `CartItemInput` object must contain the following attributes:

{% include graphql/cart-item-input.md %}

### CustomizableOptionInput object {#CustomizableOptionInputSimple}

The `CustomizableOptionInput` object must contain the following attributes:

{% include graphql/customizable-option-input.md %}

### SimpleProductCartItemInput object {#SimpleProductCartItemInput}

The `SimpleProductCartItemInput` object must contain the following attributes:

`customizable_options` |[[CustomizableOptionInputSimple]](#CustomizableOptionInputSimple) | An array that defines customizable options for the product
`data` | [CartItemInput!](#CartItemInputSimple) | An object containing the `sku` and `quantity` of the product.

## Output attributes

The `AddSimpleProductsToCartOutput` object contains the `Cart` object.

Attribute |  Data Type | Description
--- | --- | ---
`cart` |[Cart!](#CartObject) | Describes the contents of the specified shopping cart

### Cart object {#CartObject}

{% include graphql/cart-object.md %}

[Cart query output]({{page.baseurl}}/graphql/queries/cart.html#cart-output) provides more information about the `Cart` object.

## Errors

Error | Description
--- | ---
`Could not find a cart with ID "XXX"` | The specified `cart_id` value does not exist in the `quote_id_mask` table.
`Could not find a product with SKU "YYY"` | A simple product with the SKU specified in the `data`.`sku` attribute does not exist.
`Required parameter "cart_id" is missing` | The `cart_id` attribute was omitted or contains an empty value.
`Required parameter "cart_items" is missing` | The `cart_items` attribute was omitted or contains an empty value.
`The current user cannot perform operations on cart XXX` | An unauthorized user (guest) tried to add the product into a customer's cart, or an authorized user (customer) tried to add the product into the cart of another customer.
`The product's required option(s) weren't entered. Make sure the options are entered and try again.` | A simple product has customizable options that were not specified in the mutation, but are required for adding the product into the cart.
