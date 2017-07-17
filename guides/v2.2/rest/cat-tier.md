---
layout: default
group: rest
subgroup: Notes
title: Manage tier prices
menu_title: Manage tier prices
menu_order: 4
version: 2.2
github_link: rest/cat-tier.md

---

Tier pricing offers a quantity discount to members of a specific customer group and website.  The  `TierPriceStorageInterface` service provides an efficient means to set tier prices for one or more products without requiring detailed information about each product.

The following product types support tier pricing:

Product type | Tier price types
--- | ---
Simple | fixed, discount
Bundle | discount
Virtual | fixed, discount
Downloadable | fixed, discount

**Service Name**

`TierPriceStorageInterface`

**REST Endpoints**

```
POST /V1/products/tier-prices-information
POST /V1/products/tier-prices
PUT /V1/products/tier-prices
POST /V1/products/tier-prices-delete
```

**TierPriceStorageInterface Parameters**

Name | Description | Format | Requirements
--- | --- | --- | ---
`price` | The discounted product price for the quantity purchased. | float | Required to set, update, or delete a tier price
`price_type` | Must be `fixed` (the set price) or `discount` (percent discount) | string | Required to set, update, or delete a tier price
`website_id` | The website ID  to apply the tier price | integer | Required to set, update, or delete a tier price
`sku` | The SKU of the product | string | Required
`customer_group` |  A specific customer group that qualifies to receive the tier price discount. | string | Required to set, update, or delete a tier price
`quantity` | The quantity that must be purchased to receive the tier price.  | integer | Required to set, update, or delete a tier price

## Set tier prices

The `POST /V1/products/tier-prices` call adds new tier prices or updates existing prices. You can specify tier prices for multiple products in the same call.

**Sample Usage**

`POST /V1/products/tier-prices`

**Payload**

{% highlight json %}

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
{% endhighlight %}

**Response**

`[]` (an empty array)

## Replace existing tier prices

The replace request removes all existing tier prices for a specified product and adds new rows for this same product instead.

The following example removes the $10 tier price for `sku` 24-UG04 and changes the customer group for the `sku`'s other tier prices.

**Sample Usage**

`PUT /V1/products/tier-prices`

**Payload**

{% highlight json %}
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
{% endhighlight %}

**Response**

`[]` (an empty array)

## Get tier prices

Magento returns all active tier prices for the specified list of `skus`.

**Sample Usage**

`V1/products/tier-prices-information`

**Payload**

{% highlight json %}
{
  "skus": [
    "24-UG04",
    "24-UG01"
  ]
}
{% endhighlight %}

**Response**

{% highlight json %}
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
{% endhighlight %}

## Delete a tier price

Each tier price must be deleted individually.

**Sample Usage**

`POST /V1/products/tier-prices-delete`

**Payload**

{% highlight json %}
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
{% endhighlight %}

**Response**

`[]` (an empty array)
