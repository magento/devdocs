---
group: graphql
title: addConfigurableProductsToCart mutation
---

Use the `addConfigurableProductsToCart` mutation to add configurable products to a specific cart.

## Syntax

```graphql
mutation {
  addConfigurableProductsToCart(
    input: AddConfigurableProductsToCartInput
  ) {
    AddConfigurableProductsToCartOutput
  }
}
```

## Example usage

The following example adds two black Teton Pullover Hoodies size extra-small to the specified shopping cart. The `cart_id` used in this example was [generated]({{ page.baseurl }}/graphql/mutations/create-empty-cart.html) by creating an empty cart.

**Request:**

```graphql
mutation {
  addConfigurableProductsToCart(
    input: {
      cart_id: "4JQaNVJokOpFxrykGVvYrjhiNv9qt31C"
      cart_items: [
        {
          parent_sku: "MH02"
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

**Response:**

```json
{
  "data": {
    "addConfigurableProductsToCart": {
      "cart": {
        "items": [
          {
            "id": "5",
            "quantity": 2,
            "product": {
              "name": "Teton Pullover Hoodie",
              "sku": "MH02"
            },
            "configurable_options": [
              {
                "option_label": "Color"
              },
              {
                "option_label": "Size"
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

### AddConfigurableProductsToCartInput object

The `AddConfigurableProductsToCartInput` object contains the following attributes:

Attribute | Type | Description
--- | --- | ---
`cart_id` | String! | The unique ID that identifies the customer's cart
`cart_items` | [[ConfigurableProductCartItemInput]](#configProdCartItemInput) | An array of configurable items to add to the cart

### ConfigurableProductCartItemInput object {#configProdCartItemInput}

The `ConfigurableProductCartItemInput` object contains the following attributes:

Attribute | Type | Description
--- | --- | ---
`customizable_options` | [CustomizableOptionInput](#customOptionInput) | An object that contains the ID and value of the product
`data` | [CartItemInput!](#cartItemInput) | An object that contains the quantity and SKU of the configurable product
`parent_sku` | String | The SKU of the simple product's parent configurable product. If you do not specify this attribute, Magento treats the product being added to the cart as a simple product
`variant_sku` | String | Deprecated. Use `CartItemInput.sku` instead. The SKU of the simple product

### CustomizableOptionInput object {#customOptionInput}

The `CustomizableOptionInput` object contains the following attributes:

Attribute | Type | Description
--- | --- | ---
`id` | Int | The ID of the customizable option
`value` | String | The value of the customizable option. For example, if color was the customizable option, a possible value could be `black`

### CartItemInput object {#cartItemInput}

The `CartItemInput` object must contain the following attributes:

{% include graphql/cart-item-input.md %}

## Output attributes

The `AddConfigurableProductsToCartOutput` object contains the `Cart` object.

Attribute |  Data Type | Description
--- | --- | ---
`cart` |[Cart!](#CartObject) | Describes the contents of the specified shopping cart

### Cart object {#CartObject}

{% include graphql/cart-object.md %}

[Cart query output]({{page.baseurl}}/graphql/queries/cart.html#cart-output) provides more information about the `Cart` object.

## Errors

Error | Description
--- | ---
`Could not add the product with SKU configurable to the shopping cart: The product that was requested doesn't exist. Verify the product and try again.` | The simple product with the SKU specified in the `data`.`sku` attribute does not exist.
`Could not find a product with SKU "XXX"` | The configurable product with SKU specified in the `parent_sku` argument does not exist.
`Could not find specified product.` | The simple product specified in the `data`.`sku` argument is not assigned to the configurable product provided in the `parent_sku` attribute.
`Required parameter "cart_id" is missing` | The `cart_id` argument was omitted or contains an empty value.
`Required parameter "email" is missing` | The `email` argument was omitted or contains an empty value.
`The requested qty is not available` | The requested quantity specified `data`.`quantity` is not available.

## Related topics

-  [Configurable product data types]({{page.baseurl}}/graphql/interfaces/configurable-product.html)
