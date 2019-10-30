---
group: graphql
title: customerCart query
---

The `customerCart` query returns the active cart for the logged-in customer. It creates a cart for the customer if one doesn't exist. The customer's authorization token must be specified in the header of the call.

The `customerCart` query differs from the `cart` query in the following ways:

-  It must be run on behalf of a logged-in customer.
-  It returns the `cart_id` attribute. You can use the value of the `cart_id` attribute as the `destination_cart_id` in the `mergeCarts` mutation, which provides the ability to merge a guest cart with the logged-in customer's cart. Merging carts allows products added to a cart before a customer logged in to be retained after logging in. 

The `cart_id` also allows the customer to start an order on one device and complete it on another.

## Syntax

`customerCart: Cart!`

## Example usage

The following query lists the products in the logged-in customer's cart:

**Request**

```graphql
{
  customerCart {
    cart_id
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
    "customerCart": {
      "cart_id": "CYmiiQRjPVc2gJUc5r7IsBmwegVIFO43",
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
        }
      ]
    }
  }
}
```

## Output attributes

The `customerCart` query returns the `Cart` object.

### Cart object {#CartObject}

{% include graphql/cart-object.md %}

[Cart query output]({{page.baseurl}}/graphql/queries/cart.html#cart-output) provides more information about the `Cart` object.
