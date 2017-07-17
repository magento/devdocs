---
layout: default
group: rest
subgroup: Notes
title: Manage special prices
menu_title: Manage special prices
menu_order: 3
version: 2.2
github_link: rest/cat-special.md

---

## Manage special prices

The  `SpecialPriceStorageInterface` service provides the means to efficiently schedule special prices for one or more products in a store's catalog. When you use these calls, you do not provide detailed information about the product.

The following product types support special pricing:

* Simple
* Bundle
* Virtual
* Downloadable

**Service Name**

`SpecialPriceStorageInterface`

**REST Endpoints**

```
POST /V1/products/special-price
POST /V1/products/special-price-information
POST /V1/products/special-price-delete
```

**SpecialPriceStorageInterface Parameters**

Name | Description | Format | Requirements
--- | --- | --- | ---
`price` | The special price of the product | float | Required for setting or deleting a special price
`store_id` | The store ID  to apply the special price | integer | Required for setting or deleting a special price
`sku` | The SKU of the product | string | Required for setting or deleting a special price
`price_from` | The date and time the special price goes into effect. The date/time format is `YYYY-MM-DD hh:mm:ss`. The specified time must be later than the current time.  | string | Required in Enterprise Edition. Optional in Community Edition.
`price_to` | The date and time the special price ends. The date/time format is `YYYY-MM-DD hh:mm:ss` If no value is specified, the special price does not expire. | string | Optional


## Set special prices

All calls to set special prices must include the `store_id`, `sku`, and `price` parameters. If the call is sent to an Enterprise Edition installation, the call must also include the `price_from` parameter. If the call is sent to a Community Edition installation, then the `price_from` parameter is optional.

For bundled products, the value of the `price` parameter must be expressed as a discount percentage.

You can set multiple special prices in a single call, as shown in the example below. The call sets special prices for a simple product, downloadable product, and bundle product for two days.


**Sample Usage**

`POST /V1/products/special-price`

**Payload**

{% highlight json %}
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

{% endhighlight %}

**Response**

`[]`

## Get special prices

The following call returns the special price information for three SKU values.

**Sample Usage**

`POST /V1/products/special-price-information`

**Payload**

{% highlight json %}
{
  "skus": [
    "24-WB06",
    "240-LV06",
    "24-WG080"
  ]
}
{% endhighlight %}

**Response**

{% highlight json %}
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
{% endhighlight %}

## Delete a special price

If any item has an invalid `price`, `store_id`, `sku` or dates, they will be marked as failed and excluded from delete list

**Sample Usage**

`POST /V1/products/special-price-delete`

**Payload**

{% highlight json %}
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
{% endhighlight %}

**Response**

`[]`
