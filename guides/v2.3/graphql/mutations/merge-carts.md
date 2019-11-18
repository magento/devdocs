---
group: graphql
title: mergeCarts mutation
---

The `mergeCarts` mutation transfers the contents of a guest cart into the cart of a logged-in customer. This mutation must be run on behalf of a logged-in customer.

The mutation retains any items that were already in the logged-in customer's cart. If both the guest and customer carts contain the same item, `mergeCarts` adds the quantities. Upon success, the mutation deletes the original guest cart.

Use the [`customerCart` query]({{page.baseurl}}/graphql/queries/customer-cart.html) to determine the value of the `destination_cart_id` attribute.

## Syntax

`mergeCarts(source_cart_id: String!, destination_cart_id: String!): Cart!`

## Example usage

In the following example, the customer had one Overnight Duffle in the cart (`CYmiiQRjPVc2gJUc5r7IsBmwegVIFO43`) before a guest cart (`mPKE05OOtcxErbk1Toej6gw6tcuxvT9O`) containing a Radiant Tee and another Overnight Duffle was merged. The cart now includes three items, including two Overnight Duffles.

**Request:**

```graphql
mutation {
  mergeCarts(source_cart_id: "mPKE05OOtcxErbk1Toej6gw6tcuxvT9O", destination_cart_id: "CYmiiQRjPVc2gJUc5r7IsBmwegVIFO43") {
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
```

**Response:**

```json
{
  "data": {
    "mergeCarts": {
      "items": [
        {
          "id": "14",
          "product": {
            "name": "Overnight Duffle",
            "sku": "24-WB07"
          },
          "quantity": 2
        },
        {
          "id": "17",
          "product": {
            "name": "Radiant Tee",
            "sku": "WS12"
          },
          "quantity": 1
        }
      ]
    }
  }
}
```

## Input attributes

Attribute |  Data Type | Description
--- | --- | ---
`destination_cart_id` | String! | The ID of the logged-in customer's cart
`source_cart_id` | String! | The ID of the guest cart

## Output attributes

The `mergeCarts` mutation returns a `Cart` object.

Attribute |  Data Type | Description
--- | --- | ---
`cart` |[Cart!](#CartObject) | Describes the contents of the specified shopping cart

### Cart object {#CartObject}

{% include graphql/cart-object.md %}

[Cart query output]({{page.baseurl}}/graphql/queries/cart.html#cart-output) provides more information about the `Cart` object.
