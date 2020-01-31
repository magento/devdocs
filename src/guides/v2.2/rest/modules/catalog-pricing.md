---
group: rest-api
title: Manage prices for multiple products
functional_areas:
  - Integration
---

Magento provides REST endpoints that allow you to update multiple special prices, tier prices, base prices, or cost values with a single call.

The calls that update special and tier prices mimic the options available on a product's **Advanced Pricing** screen in Admin.

## Manage special prices

The  `SpecialPriceStorageInterface` service provides the means to efficiently schedule special prices for one or more products in a store's catalog. When you use these calls, you do not provide detailed information about the product.

The `POST /V1/products/special-price` call sets special prices for the following product types:

*  Simple
*  Bundle
*  Virtual
*  Downloadable

**Service Name:**

`SpecialPriceStorageInterface`

**REST Endpoints:**

```http
POST /V1/products/special-price
POST /V1/products/special-price-information
POST /V1/products/special-price-delete
```

**SpecialPriceStorageInterface Parameters:**

Name | Description | Format | Requirements
--- | --- | --- | ---
`price` | The special price of the product | float | Required for setting or deleting a special price
`store_id` | The store ID  to apply the special price | integer | Required for setting or deleting a special price
`sku` | The SKU of the product | string | Required for setting or deleting a special price
`skus` | An array of SKU values that is specified when retrieving a list of special prices | array | Required for retrievals
`price_from` | The date and time the special price goes into effect. The date/time format is `YYYY-MM-DD hh:mm:ss`. The specified time must be later than the current time.  | string | Required in {{site.data.var.ee}}. Optional in {{site.data.var.ce}}.
`price_to` | The date and time the special price ends. The date/time format is `YYYY-MM-DD hh:mm:ss` If no value is specified, the special price does not expire. | string | Optional

### Set special prices

All calls to set special prices must include the `store_id`, `sku`, and `price` parameters. If the call is sent to an {{site.data.var.ee}} installation, the call must also include the `price_from` parameter. If the call is sent to a {{site.data.var.ce}} installation, then the `price_from` parameter is optional.

For bundled products, the value of the `price` parameter must be expressed as a discount percentage.

You can set multiple special prices in a single call, as shown in the example below. The call sets special prices for a simple product, downloadable product, and bundle product for two days.

**Sample Usage:**

`POST <host>/rest/<store_code>/V1/products/special-price`

**Payload:**

```json
{
  "prices": [
    {
      "price": 29.95,
      "store_id": 0,
      "price_from": "2017-07-15 00:00:00",
      "price_to": "2017-07-16 23:59:59",
      "sku": "24-WB06"
    },
    {
      "price": 19.95,
      "store_id": 0,
      "price_from": "2017-07-15 00:00:00",
      "price_to": "2017-07-16 23:59:59",
      "sku": "240-LV06"
    },
    {
      "price": 5,
      "store_id": 0,
      "price_from": "2017-07-15 00:00:00",
      "price_to": "2017-07-16 23:59:59",
      "sku": "24-WG080"
    }
  ]
}

```

**Response:**

`[]` (an empty array)

### Get special prices

The following call returns the special price information for three SKU values.

**Sample Usage:**

`POST <host>/rest/<store_code>/V1/products/special-price-information`

**Payload:**

```json
{
  "skus": [
    "24-WB06",
    "240-LV06",
    "24-WG080"
  ]
}
```

**Response:**

```json
[
    {
        "price": 29.949999999999999,
        "store_id": 0,
        "sku": "24-WB06",
        "price_from": "2017-07-15 00:00:00",
        "price_to": "2017-07-16 23:59:59"
    },
    {
        "price": 19.949999999999999,
        "store_id": 0,
        "sku": "240-LV06",
        "price_from": "2017-07-15 00:00:00",
        "price_to": "2017-07-16 23:59:59"
    },
    {
        "price": 5,
        "store_id": 0,
        "sku": "24-WG080",
        "price_from": "2017-07-15 00:00:00",
        "price_to": "2017-07-16 23:59:59"
    }
]
```

### Delete a special price

If any item to be deleted has an invalid `price`, `store_id`, `sku` or date, Magento marks the item as failed and excludes it from the delete list. Valid items are deleted as requested.

**Sample Usage:**

`POST <host>/rest/<store_code>/V1/products/special-price-delete`

**Payload:**

```json
{
  "prices": [
    {
      "price": 29.95,
      "store_id": 0,
      "price_from": "2017-07-15 00:00:00",
      "price_to": "2017-07-16 23:59:59",
      "sku": "24-WB06"
    },
    {
      "price": 19.95,
      "store_id": 0,
      "price_from": "2017-07-15 00:00:00",
      "price_to": "2017-07-16 23:59:59",
      "sku": "240-LV06"
    },
    {
      "price": 5,
      "store_id": 0,
      "price_from": "2017-07-15 00:00:00",
      "price_to": "2017-07-16 23:59:59",
      "sku": "24-WG080"
    }
  ]
}
```

**Response:**

`[]` (an empty array)

## Manage tier prices

Tier pricing offers a quantity discount to members of a specific customer group and website.  The  `TierPriceStorageInterface` service provides an efficient means to set tier prices for one or more products without requiring detailed information about each product.

You can use REST endpoints to set tier prices for the following product types:

Product type | Tier price types
--- | ---
Simple | fixed, discount
Bundle | discount
Virtual | fixed, discount
Downloadable | fixed, discount

**Service Name:**

`TierPriceStorageInterface`

**REST Endpoints:**

```http
POST /V1/products/tier-prices
PUT /V1/products/tier-prices
POST /V1/products/tier-prices-information
POST /V1/products/tier-prices-delete
```

**TierPriceStorageInterface Parameters:**

Name | Description | Format | Requirements
--- | --- | --- | ---
`price` | The discounted product price for the quantity purchased | float | Required to set, update, or delete a tier price
`price_type` | Must be `fixed` (the set price) or `discount` (percent discount) | string | Required to set, update, or delete a tier price
`website_id` | The website ID  to apply the tier price | integer | Required to set, update, or delete a tier price
`sku` | The SKU of the product | string | Required to set, update, or delete a tier price
`skus` | An array of SKU values that is specified when retrieving a list of tier prices | array | Required for retrievals
`customer_group` |  A specific customer group that qualifies to receive the tier price discount | string | Required to set, update, or delete a tier price
`quantity` | The quantity that must be purchased to receive the tier price | float | Required to set, update, or delete a tier price

### Set tier prices

The `POST /V1/products/tier-prices` call adds new tier prices or updates existing prices. You can specify tier prices for multiple products in the same call.

**Sample Usage:**

`POST <host>/rest/<store_code>/V1/products/tier-prices`

**Payload:**

```json

{
  "prices": [
    {
      "price": 10,
      "price_type": "fixed",
      "website_id": 0,
      "sku": "24-UG04",
      "customer_group": "General",
      "quantity": 3
    },
    {
      "price": 8,
      "price_type": "fixed",
      "website_id": 0,
      "sku": "24-UG04",
      "customer_group": "General",
      "quantity": 5
    },
    {
      "price": 6,
      "price_type": "fixed",
      "website_id": 0,
      "sku": "24-UG04",
      "customer_group": "General",
      "quantity": 10
    }
  ]
}
```

**Response:**

`[]` (an empty array)

### Replace existing tier prices

The replace request removes all existing tier prices for a specified product and adds new rows for this same product instead.

The following example removes the $10 tier price for `sku` 24-UG04 and changes the customer group for the `sku`'s other tier prices.

**Sample Usage:**

`PUT <host>/rest/<store_code>/V1/products/tier-prices`

**Payload:**

```json
{
  "prices": [
    {
      "price": 8,
      "price_type": "fixed",
      "website_id": 0,
      "sku": "24-UG04",
      "customer_group": "NOT LOGGED IN",
      "quantity": 5
    },
    {
      "price": 5,
      "price_type": "fixed",
      "website_id": 0,
      "sku": "24-UG04",
      "customer_group": "NOT LOGGED IN",
      "quantity": 310
    }
  ]
}
```

**Response:**

`[]` (an empty array)

### Get tier prices

Magento returns all active tier prices for the specified list of `skus`.

**Sample Usage:**

`POST <host>/rest/<store_code>/V1/products/tier-prices-information`

**Payload:**

```json
{
  "skus": [
    "24-UG04",
    "24-UG01"
  ]
}
```

**Response:**

```json
[
    {
        "price": 8,
        "price_type": "fixed",
        "website_id": 0,
        "sku": "24-UG04",
        "customer_group": "General",
        "quantity": 5
    },
    {
        "price": 6,
        "price_type": "fixed",
        "website_id": 0,
        "sku": "24-UG04",
        "customer_group": "General",
        "quantity": 10
    },
    {
        "price": 10,
        "price_type": "fixed",
        "website_id": 0,
        "sku": "24-UG04",
        "customer_group": "General",
        "quantity": 3
    },
    {
        "price": 5,
        "price_type": "discount",
        "website_id": 0,
        "sku": "24-UG01",
        "customer_group": "General",
        "quantity": 3
    }
]
```

### Delete tier prices

You must specify each tier price that is to be deleted. You can delete multiple tier prices in a single call.

**Sample Usage:**

`POST <host>/rest/<store_code>/V1/products/tier-prices-delete`

**Payload:**

```json
{
  "prices": [
    {
      "price": 10,
      "price_type": "fixed",
      "website_id": 0,
      "sku": "24-UG04",
      "customer_group": "General",
      "quantity": 3
    }
  ]
}
```

**Response:**

`[]` (an empty array)

## Manage base prices

A base price is the price of a product, before any discounts or extra costs (such as shipping or taxes) are applied.  The  `BasePriceStorageInterface` service provides an efficient means to set base prices for one or more products without requiring detailed information about each product.

{:.bs-callout-info}
You cannot delete a base price. It can only be changed to another value (0 or greater).

**REST Endpoints:**

```http
POST /V1/products/base-prices
POST /V1/products/base-prices-information
```

**BasePriceStorageInterface Parameters:**

Name | Description | Format | Requirements
--- | --- | --- | ---
`price` | The base price of the item | float | Required to set a base price
`store_id` | The store ID  to apply the base price | integer | Required to set a base price
`sku` | The SKU of the product | string | Required to set a base price
`skus` | An array of SKU values that is specified when retrieving a list of base prices | array | Required for retrievals

### Set base prices

The `POST /V1/products/base-price` call can set base prices for the following types of products:

*  Simple
*  Virtual
*  Downloadable
*  Bundle (fixed price type only)

The following example sets the base price for a simple and a downloadable product.

**Sample Usage:**

`POST <host>/rest/<store_code>/V1/products/base-prices`

**Payload:**

```json
{
  "prices": [
  {
    "price": 12,
    "store_id": 0,
    "sku": "24-UG04"
  },
  {
    "price": 22,
    "store_id": 0,
    "sku": "240-LV06"
  }
  ]
}
```

**Response:**

`[]` (an empty array)

### Get base prices

The following example returns the base prices for a simple and a downloadable product.

**Sample Usage:**

`POST <host>/rest/<store_code>/V1/products/base-prices-information`

**Payload:**
```json
{
  "skus": [
    "24-UG04",
    "240-LV06"
  ]
}
```

**Response:**

```json
[
  {
    "price": 12,
    "store_id": 0,
    "sku": "24-UG04"
  },
  {
    "price": 22,
    "store_id": 0,
    "sku": "240-LV06"
  }
]
```

## Manage cost values

The cost is the actual cost of a product. Tracking costs is optional, but having this information available can be helpful when you are setting discounts.

**REST Endpoints:**

```http
POST /V1/products/cost
POST /V1/products/cost-information
POST /V1/products/cost-delete
```

**CostStorageInterface Parameters:**

Name | Description | Format | Requirements
--- | --- | --- | ---
`cost` | The amount the item costs | float | Required to set or delete a cost value
`store_id` | The store ID  to apply the cost value | integer | Required to set or delete a cost value
`sku` | The SKU of the product | string | Required to set or delete a cost value
`skus` | An array of SKU values that is specified when retrieving a list of cost values | array | Required for retrievals

### Set cost values

The `POST /V1/products/cost` call can set the cost values for the following types of products:

*  Simple
*  Virtual
*  Downloadable

The following example sets the cost value for a simple and a downloadable product.

**Sample Usage:**

`POST <host>/rest/<store_code>/V1/products/cost`

**Payload:**

```json
{
  "prices": [
    {
      "cost": 18,
      "store_id": 0,
      "sku": "24-WB03"
    },
    {
      "cost": 2,
      "store_id": 0,
      "sku": "240-LV09"
    }
  ]
}
```

**Response:**

`[]` (an empty array)

### Get cost values

The following example returns the cost values for a simple and a downloadable product.

**Sample Usage:**

`POST <host>/rest/<store_code>/V1/products/cost-information`

**Payload:**
```json
{
  "skus": [
    "24-WB03",
    "240-LV09"
  ]
}
```

**Response:**

```json
[
  {
    "cost": 18,
    "store_id": 0,
    "sku": "24-WB03"
  },
  {
    "cost": 2,
    "store_id": 0,
    "sku": "240-LV09"
  }
]
```

### Delete cost values

The following example deletes the previously-defined cost values for a simple and a downloadable product.

**Sample Usage:**

`POST <host>/rest/<store_code>/V1/products/cost-delete`

**Payload:**
```json
{
  "skus": [
    "24-WB03",
    "240-LV09"
  ]
}
```

**Response:**

`true`, indicating the cost values were deleted
