---
group: graphql
title: mergeCarts mutation
---

The `mergeCarts` mutation 

## Syntax

`mergeCarts(source_cart_id: String, destination_cart_id: String): Cart!`

## Example usage

**Request**

```graphql

```

**Response**

```json

```

## Input attributes

Attribute |  Data Type | Description
--- | --- | ---
source_cart_id

## Output attributes

The `` object contains the `Cart` object.

Attribute |  Data Type | Description
--- | --- | ---
`cart` |[Cart!](#CartObject) | Describes the contents of the specified shopping cart

### Cart object {#CartObject}

{% include graphql/cart-object.md %}

[Cart query output]({{page.baseurl}}/graphql/queries/cart.html#cart-output) provides more information about the `Cart` object.