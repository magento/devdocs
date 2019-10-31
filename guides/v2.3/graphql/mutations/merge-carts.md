---
group: graphql
title: mergeCarts mutation
---

The `mergeCarts` mutation transfers the contents of a guest cart into the cart of a logged-in customer. 

Once a customer logs in (uses it's token), an existing guest cart needs to be transferred/merged/imported to the customer cart. Also the registered customer should be able to work with the same shopping cart on multiple devices that we use that token once we 'login', for example, add products to cart using a laptop and complete checkout using a smartphone using the same customer. We used the term 'login' in quotes, because there's really no state/session in graphql.

## Syntax

`mergeCarts(source_cart_id: String, destination_cart_id: String): Cart!`

## Example usage

**Request**

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

**Response**

```json
{
  "data": {
    "mergeCarts": {
      "items": [
        {
          "id": "11",
          "product": {
            "name": "Strive Shoulder Pack",
            "sku": "24-MB04"
          },
          "quantity": 1
        },
        {
          "id": "12",
          "product": {
            "name": "Radiant Tee",
            "sku": "WS12"
          },
          "quantity": 1
        },
        {
          "id": "14",
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