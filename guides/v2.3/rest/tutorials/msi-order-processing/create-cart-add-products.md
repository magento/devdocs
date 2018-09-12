---
layout: tutorial
group: rest-api
title: Step 8. Create a cart and add products to it
subtitle: Order processing with MSI
menu_title: Step 8. Create a cart and add products to it
menu_order: 80
level3_subgroup: msi-tutorial
return_to:
  title: REST Tutorials
  url: rest/tutorials/index.html
functional_areas:
  - Integration
---

Next, we'll create a cart and add the items that we created in [Step 5. Create products](create-products.html).

## Create a cart

The call to create a cart and add items must contain the customer’s authorization token in the authorization header.

**Endpoint**

`POST http://<host>/rest/us/V1/carts/mine`

**Scope**

`us` store view

**Headers**

`Content-Type`: `application/json`

`Authorization`: `Bearer <customer_token>`

**Payload**

None

**Response**

The response is the `quoteId`: 1

## Check for product availability

In [Step 6. Reassign products to another source](reassign-products-to-another-source.html), we defined the quantities of products `sp1` and `sp2` for the UK source as follows:

Product | Baltimore Warehouse | Austin Warehouse  | Reno Warehouse
--- | --- | --- | ---
`sp1` | 50 | 10 | 100
`sp2` | 25 | 0 | 50

Later in this step, we'll order 20 `sp1` items and 60 `sp2` items. We can see that we have enough salable items for both products, but let's check programmatically.

### Check for product `sp1`

The `get-product-salable-quantity` endpoint indicates how many items are available for sale for the specified product and source.

**Endpoint**

`GET http://<host>rest/us/V1/inventory/get-product-salable-quantity/sp1/2`

**Scope**

`us` store view

**Headers**

`Content-Type`: `application/json`

`Authorization`: `Bearer <admin_token>`

**Payload**

Not applicable

**Response**

`160`

### Check for product `sp2`

Use the same endpoint to check the quantity available for product `sp2`.

**Endpoint**

`GET http://<host>rest/us/V1/inventory/get-product-salable-quantity/sp2/2`

**Scope**

`us` store view

**Headers**

`Content-Type`: `application/json`

`Authorization`: `Bearer <admin_token>`

**Payload**

Not applicable

**Response**

`75`

## Add items to the cart

We have ensured that we have enough physical products in stock to fulfill the potential order.

### Add the first simple product

In this call, we'll add 20 `sp1` items. This portion of the order can be fulfilled from the Baltimore or Reno warehouse.

**Endpoint**

`POST http://<host>/rest/us/V1/carts/mine/items`

**Scope**

`us` store view

**Headers**

`Content-Type`: `application/json`

`Authorization`: `Bearer <customer_token>`

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
    "item_id": 2,
    "sku": "sp1",
    "qty": 20,
    "name": "Simple Product 1",
    "product_type": "simple",
    "quote_id": "1"
}
```

### Add the second simple product

Use the same endpoint to add 60 items of `sp2` to the cart. Multiple sources will be required to fulfill this potential order.

**Payload**

``` json
{
  "cartItem": {
    "sku": "sp2",
    "qty": 60,
    "quote_id": "1"
  }
}
```
**Response**

``` json
{
    "item_id": 3,
    "sku": "sp2",
    "qty": 60,
    "name": "Simple Product 2",
    "price": 10,
    "product_type": "simple",
    "quote_id": "1"
}
```

### Add a virtual product_type

Finally, we'll add a single instance of a virtual product to the cart.

**Payload**

``` json
{
  "cartItem": {
    "sku": "vp1",
    "qty": 1,
    "quote_id": "1"
  }
}
```

**Response**

``` json
{
    "item_id": 4,
    "sku": "vp1",
    "qty": 1,
    "name": "Gold Club Membership",
    "price": 20,
    "product_type": "virtual",
    "quote_id": "1"
}
```

## Verify this step {#verify-step}

Sign in as the customer at `http:<host>/us` and click on the shopping cart. All the items you added display in the cart.
