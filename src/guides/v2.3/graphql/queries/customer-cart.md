---
group: graphql
title: customerCart query
---

The `customerCart` query returns the active cart for the logged-in customer. If the cart does not exist, the query creates one. The customer's authorization token must be specified in the headers.

The `customerCart` query differs from the `cart` query in the following ways:

-  The `customerCart` query must be run on behalf of a logged-in customer. If you run this query on behalf of a guest, an exception will be thrown.
-  The `cart` query requires a `cart_id` value as input. The `customerCart` query does not take any input parameters.

You can define the query to return the `id` attribute. You can use the value of this attribute as the `destination_cart_id` input parameter in the [`mergeCarts` mutation]({{page.baseurl}}/graphql/mutations/merge-carts.html). (The `mergeCarts` mutation provides the ability to merge a guest cart with the logged-in customer's cart.)

{: .bs-callout-tip }
If you know the value of the logged-in customer's cart ID, you can allow the customer to start an order on one device and complete it on another.

## Syntax

`customerCart: Cart!`

## Example usage

The following query lists the products in the logged-in customer's cart:

**Request:**

```graphql
{
  customerCart {
    id
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
    "customerCart": {
      "id": "CYmiiQRjPVc2gJUc5r7IsBmwegVIFO43",
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
