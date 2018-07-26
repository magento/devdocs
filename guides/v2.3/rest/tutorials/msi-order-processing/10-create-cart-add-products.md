---
layout: tutorial
group: rest
title: Step 10. Create a cart and add products to it
menu_title: Step 10. Create a cart and add products to it
menu_order: 100
level3_subgroup: msi-tutorial
return_to:
  title: REST Tutorials
  url: rest/tutorials/index.html
version: 2.3
github_link: rest/tutorials/msi-order-processing/10-create-cart-add-products.md
functional_areas:
  - Integration
---

Next, we'll create a cart and add the items that we created in [Step 7. Create products](7-create-products.html).

## Create a cart

The call to create a cart and add items must contain the customer’s authorization token in the authorization header.

**Endpoint**

`POST http://<host>/rest/uk/V1/carts/mine`

**Scope**

`uk` store view

**Headers**

Content-Type application/json
Authorization: Bearer <customer_token>

**Payload**

None

**Response**

The response is the `quoteId`: 1

## Add items to the cart

The Test store contains only two products. We'll add one of each to the cart.

### Add a simple product

The SKU of the simple product is `Simple Running Backpack`.

**Endpoint**

`POST http://<host>/rest/uk/V1/carts/mine/items`

**Scope**

`uk` store view

**Headers**

Content-Type application/json
Authorization: Bearer <customer_token>

**Payload**

``` json
{
  "cartItem": {
    "sku": "sp1",
    "qty": 20,
    "quote_id": "1"
  }
}
```

**Response**

``` json
{
    "item_id": 1,
    "sku": "Simple Running Backpack",
    "qty": 1,
    "name": "Simple Running Backpack",
    "price": 70,
    "product_type": "simple",
    "quote_id": "1"
}
```

### Add a virtual product

The SKU of the virtual product is `20% Discount`.


**Endpoint**

`POST http://<host>/rest/test/V1/carts/mine/items`

**Scope**

`test` store view

**Headers**

Content-Type application/json
Authorization: Bearer <customer_token>

**Payload**

``` json
{
  "cartItem": {
    "sku": "20% Discount",
    "qty": 1,
    "quote_id": "1"
  }
}
```
**Response**

``` json
{
    "item_id": 2,
    "sku": "20% Discount",
    "qty": 1,
    "name": "20% Discount",
    "price": 100,
    "product_type": "virtual",
    "quote_id": "1"
}
```

## Verify this step {#verify-step}

Sign in as the customer and click on the shopping cart . All the items you added are displayed.
