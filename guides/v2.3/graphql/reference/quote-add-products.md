---
group: graphql
title: Add products to a cart
---

This topic describes how to add the following types of products to a cart:

* Simple
* Virtual

{:.bs-callout .bs-callout-info}
The mutation for [adding configurable products]({{page.baseurl}}/graphql/reference/configurable-product.html) is defined in the `ConfigurableProductGraphQl` module.

## Add simple products

To add a simple product to a cart, you must provide the cart ID, the SKU, and the quantity. You can also optionally provide customizable options.

### Syntax

`mutation; {addSimpleProductsToCart(input: AddSimpleProductsToCartInput): AddSimpleProductsToCartOutput}`

### Example usage

These examples show the minimal payload and a payload that includes customizable options.

#### Add a simple product to a cart

The following example adds a simple product to a cart. The response contains the entire contents of the customer's cart.

**Request**

```text
mutation {
  addSimpleProductsToCart(
    input: {
      cart_id: "IeTUiU0oCXjm0uRqGCOuhQ2AuQatogjG", 
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

**Response**

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

#### Add a simple product with customizable options to a cart

If a product has a customizable option, the option's value can be specified in the add to cart request.

**Request**

``` text
mutation {
  addSimpleProductsToCart (input: {
    cart_id: "nu31JXR9DaqbdVqFDGnqjrMJmUnT3mzB"
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

**Response**

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
            "qty": 2,
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

### Input attributes

The top-level `AddSimpleProductsToCartInput` object is listed first. All child objects are listed in alphabetical order.

#### AddSimpleProductsToCartInput object {#AddSimpleProductsToCartInput}

The `AddSimpleProductsToCartInput` object must contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`cart_id` | String! | The unique ID that identifies the customer's cart
`cart_items` | SimpleProductCartItemInput! | Contains the cart item IDs and quantity of each item

#### CartItemInput object

The `CartItemInput` object must contain the following attributes:

{% include graphql/customizable-option-input.md %}

#### CustomizableOptionInput object

The `CustomizableOptionInput` object must contain the following attributes:

{% include graphql/customizable-option-input.md %}

#### SimpleProductCartItemInput object

The `SimpleProductCartItemInput` object must contain the following attributes:

`customizable_options` |[CustomizableOptionInput] | An array that defines customizable options for the product
`data` | CartItemInput! | An object containing the `sku` and `quantity` of the product.

### Output attributes

The `AddSimpleProductsToCartOutput` object contains the `Cart` object.

Attribute |  Data Type | Description
--- | --- | ---
`cart` | Cart! | Describes the contents of the specified shopping cart.

#### Cart object

{% include graphql/cart-object.md %}

## Add virtual products

A virtual product represents a saleable item that is not physical, such as a membership, service, warranty, or subscription.

### Syntax

`mutation; {addVirtualProductsToCart(input: AddVirtualProductsToCartInput): AddVirtualProductsToCartOutput}`

### Example usage

The Luma sample data does not include any virtual products. The following example requires that you create a virtual product with the `sku` value Membership-Gold with a price of $49.99.

**Request**

```text

mutation {
  addVirtualProductsToCart(
    input: {
      cart_id: "IeTUiU0oCXjm0uRqGCOuhQ2AuQatogjG", 
      cart_items: [
        {
          data: {
            quantity: 1
            sku: "Membership-Gold"
          }
        }
       ]
    }
  ) {
    cart {
      items {
        product {
          name
        }
        quantity
      }
      prices {
        grand_total {
          value
          currency
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
    "addVirtualProductsToCart": {
      "cart": {
        "items": [
          {
            "product": {
              "name": "Gold Membership"
            },
            "quantity": 1
          }
        ],
        "prices": {
          "grand_total": {
            "value": 49.99,
            "currency": "USD"
          }
        }
      }
    }
  }
}
```

### Input attributes

The top-level `AddVirtualProductsToCartInput` object is listed first. All child objects are listed in alphabetical order.

#### AddVirtualProductsToCartInput object {#AddVirtualProductsToCartInput}

The `AddVirtualProductsToCartInput` object must contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`cart_id` | String! | The unique ID that identifies the customer's cart
`cart_items` | VirtualProductCartItemInput! | Contains the cart item IDs and quantity of each item

#### CartItemInput object

The `CartItemInput` object must contain the following attributes:

{% include graphql/cart-item-input.md %}

#### CustomizableOptionInput object

The `CustomizableOptionInput` object must contain the following attributes:

{% include graphql/customizable-option-input.md %}

#### VirtualProductCartItemInput object

The `VirtualProductCartItemInput` object must contain the following attributes:

`customizable_options` |[CustomizableOptionInput] | An array that defines customizable options for the product
`data` | CartItemInput! | An object containing the `sku` and `quantity` of the product.

### Output attributes

The `AddVirtualProductsToCartOutput` object contains the `Cart` object.

Attribute |  Data Type | Description
--- | --- | ---
`cart` | Cart! | Describes the contents of the specified shopping cart.

#### Cart object

{% include graphql/cart-object.md %}