---
group: graphql
title: addBundleProductsToCart mutation
contributor_name: Atwix
contributor_link: https://www.atwix.com/
---

{:.bs-callout-warning}
Magento recommends using the [addProductsToCart mutation]({{page.baseurl}}/graphql/mutations/add-products-to-cart.html) to add any type of product to the cart.

Use the `addBundleProductsToCart` mutation to add bundle products to a specific cart.

## Syntax

`mutation: {addBundleProductsToCart(input: AddBundleProductsToCartInput): {AddBundleProductsToCartOutput}}`

## Example usage

The following example uses a bundle product "Sprite Yoga Companion Kit" from Magento sample data.
The SKU of this product is: **24-WG080**

This example adds one bundle product with following children to the specified shopping cart:

-  Sprite Stasis Ball 65 cm (x1)
-  Sprite Foam Yoga Brick (x2)
-  Sprite Yoga Strap 10 foot (x1)
-  Sprite Foam Roller (x1)

The `cart_id` used in this example was [generated]({{ page.baseurl }}/graphql/mutations/create-empty-cart.html) by creating an empty cart.

**Request:**

```graphql
mutation {
  addBundleProductsToCart(
    input: {
      cart_id: "wARFaDnHva0tgzuforUYR4rvXincj5eu"
      cart_items: [
      {
        data: {
          sku: "24-WG080"
          quantity: 1
        }
        bundle_options: [
          {
            id: 1
            quantity: 1
            value: [
              "2"
            ]
          },
          {
            id: 2
            quantity: 2
            value: [
              "4"
            ]
          },
          {
            id: 3
            quantity: 1
            value: [
              "7"
            ]
          },
          {
            id: 4
            quantity: 1
            value: [
              "8"
            ]
          }
        ]
      },
    ]
  }) {
    cart {
      items {
        id
        quantity
        product {
          sku
        }
        ... on BundleCartItem {
          bundle_options {
            id
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
    "addBundleProductsToCart": {
      "cart": {
        "items": [
          {
            "id": "7",
            "quantity": 1,
            "product": {
              "sku": "24-WG080"
            },
            "bundle_options": [
              {
                "id": 1,
                "label": "Sprite Stasis Ball",
                "type": "radio",
                "values": [
                  {
                    "id": 2,
                    "label": "Sprite Stasis Ball 65 cm",
                    "price": 27,
                    "quantity": 1
                  }
                ]
              },
              {
                "id": 2,
                "label": "Sprite Foam Yoga Brick",
                "type": "radio",
                "values": [
                  {
                    "id": 4,
                    "label": "Sprite Foam Yoga Brick",
                    "price": 5,
                    "quantity": 2
                  }
                ]
              },
              {
                "id": 3,
                "label": "Sprite Yoga Strap",
                "type": "radio",
                "values": [
                  {
                    "id": 7,
                    "label": "Sprite Yoga Strap 10 foot",
                    "price": 21,
                    "quantity": 1
                  }
                ]
              },
              {
                "id": 4,
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

## Input attributes

The top-level `AddBundleProductsToCartInput` object is listed first. All interfaces and child objects are listed in alphabetical order.

### AddBundleProductsToCartInput object

The `AddBundleProductsToCartInput` object contains the following attributes:

Attribute | Type | Description
--- | --- | ---
`cart_id` | String! | The unique ID that identifies the customer's cart
`cart_items` | [[BundleProductCartItemInput!]!](#bundleProductCartItemInput) | An array of bundle items to add to the cart

### BundleProductCartItemInput object {#bundleProductCartItemInput}

The `BundleProductCartItemInput` object contains the following attributes:

Attribute | Type | Description
--- | --- | ---
`bundle_options` | [[BundleOptionInput!]!](#bundleOptionInput) | An object that contains an array of options of the bundle product with the chosen value and quantity of each option
`customizable_options` | [[CustomizableOptionInput!]](#customOptionInput) | An object that contains the ID and value of the product
`data` | [CartItemInput!](#cartItemInput) | An object that contains the quantity and SKU of the bundle product

### BundleOptionInput object {#bundleOptionInput}

The `BundleOptionInput` object contains the following attributes:

Attribute | Type | Description
--- | --- | ---
`id` | Int! | ID of the option
`quantity` | Float! | The number of a specific child item to add to the cart
`value` | [String!]! | An array with the chosen value of the option

### CartItemInput object {#cartItemInput}

The `CartItemInput` object contains the following attributes:

Attribute | Type | Description
--- | --- | ---
`quantity` | Float! | The number of items to add to the cart
`sku` | String! | The SKU of the product

### CustomizableOptionInput object {#customOptionInput}

The `CustomizableOptionInput` object must contain the following attributes:

{% include graphql/customizable-option-input.md %}

## Output attributes

The `AddBundleProductsToCartOutput` object contains the `Cart` object.

Attribute |  Data Type | Description
--- | --- | ---
`cart` |[Cart!](#CartObject) | Describes the contents of the specified shopping cart

### Cart object {#CartObject}

{% include graphql/cart-object-24.md %}

[Cart query output]({{page.baseurl}}/graphql/queries/cart.html#cart-output) provides more information about the `Cart` object.

## Errors

Error | Description
--- | ---
`Could not find a product with SKU "XXX"` | A simple product with the SKU specified in the `data.sku` argument does not exist.
`Could not find a cart with ID "XXX"` | The specified `cart_id` value does not exist in the `quote_id_mask` database table.
`Required parameter "cart_id" is missing` | The `cart_id` argument is omitted or contains an empty value.

## Related topics

-  [Bundle product data types]({{page.baseurl}}/graphql/interfaces/bundle-product.html)
