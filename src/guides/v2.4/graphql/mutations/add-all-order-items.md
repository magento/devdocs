---
group: graphql
title: addAllOrderItemsToCart mutation
---

Use the `addAllOrderItemsToCart` mutation to add all the products from a previous customer order into the logged-in customer's cart.

## Syntax

`mutation: {addAllOrderItemsToCart(input: AddBundleProductsToCartInput): {AddBundleProductsToCartOutput}}`

## Example usage


**Request:**

```graphql
addAllOrderItemsToCart(orderNumber: "3") {
    errors {
        sku
        message
    }
    cart {
        email
        total_quantity
        items {
            quantity
            product {
                sku
            }
        }
    }
}
```

**Response:**

```json

```

## Input attributes

The addAllOrderItemsToCart mutation requires a valid order number. The customer associated with the authorization token must match the customer who placed the specified order.

Attribute | Type | Description
--- | --- | ---
`orderNumber` | String! | The ID of the order to be used as the 
type Mutation {
    addAllOrderItemsToCart(orderNumber: String!): ReOrderOutput @doc(description:"Add all the products from Customer order to the Cart") @resolver(class: "Magento\\SalesGraphQl\\Model\\Resolver\\Reorder")
}

type ReOrderOutput @doc(description: "ReOrder output") {
    cart: Cart!
    errors:[ReOrderError]
}

type ReOrderError @doc(description: "Cart line item error") {
    sku: String!
    message: String!
}
## Output attributes

The `AddBundleProductsToCartOutput` object contains the `Cart` object.

Attribute |  Data Type | Description
--- | --- | ---
`cart` |[Cart!](#CartObject) | Describes the contents of the specified shopping cart

### Cart object {#CartObject}

{% include graphql/cart-object.md %}

[Cart query output]({{page.baseurl}}/graphql/queries/cart.html#cart-output) provides more information about the `Cart` object.

## Related topics

-  [Bundle product data types]({{page.baseurl}}/graphql/product/bundle-product.html)
