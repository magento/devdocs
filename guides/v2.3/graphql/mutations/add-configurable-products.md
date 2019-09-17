---
group: graphql
title: addConfigurableProductsToCart mutation
---

Use the `addConfigurableProductsToCart` mutation to add configurable products to a specific cart.

## Syntax

`mutation: {addConfigurableProductsToCart(input: AddConfigurableProductsToCartInput) {AddConfigurableProductsToCartOutput}}`

## Example usage

The following example adds two black Teton Pullover Hoodies size extra-small to the specified shopping cart. The `cart_id` used in this example was [generated]({{ page.baseurl }}/graphql/mutations/create-empty-cart.html) by creating an empty cart.

**Request**

```graphql
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

## Input attributes

### AddConfigurableProductsToCartInput object

The `AddConfigurableProductsToCartInput` object contains the following attributes:

Attribute | Type | Description
--- | --- | ---
`cart_items` | [[ConfigurableProductCartItemInput]](#configProdCartItemInput) | An array of configurable items to add to the cart
`cart_id` | String | The unique ID that identifies the customer's cart

### ConfigurableProductCartItemInput object {#configProdCartItemInput}

The `ConfigurableProductCartItemInput` object contains the following attributes:

Attribute | Type | Description
--- | --- | ---
`customizable_options` | [CustomizableOptionInput](#customOptionInput) | An object that contains the ID and value of the product
`data` | [CartItemInput](#cartItemInput) | An object that contains the quantity and SKU of the configurable product
`variant_sku` | String | The SKU of the simple product

### CustomizableOptionInput object {#customOptionInput}

The `CustomizableOptionInput` object contains the following attributes:

Attribute | Type | Description
--- | --- | ---
`id` | Int | The ID of the customizable option
`value` | String | The value of the customizable option. For example, if color was the customizable option, a possible value could be `black`

### CartItemInput object {#cartItemInput}

The `CartItemInput` object contains the following attributes:

Attribute | Type | Description
--- | --- | ---
`quantity` | Float | The number of configurable items to add to the cart
`sku` | String | The SKU of the configurable product

## Output attributes

The `AddConfigurableProductsToCartOutput` object contains the `Cart` object.

Attribute |  Data Type | Description
--- | --- | ---
`cart` |[Cart!](#CartObject) | Describes the contents of the specified shopping cart

### Cart object {#CartObject}

{% include graphql/cart-object.md %}

[Cart query output]({{page.baseurl}}/graphql/queries/cart.html#cart-output) provides more information about the `Cart` object.

## Related topics

-  [Configurable product data types]({{page.baseurl}}/graphql/product/configurable-product.html)
