
---
layout: default
group: rest
subgroup: Notes
title: Catalog module
menu_title: Catalog module
menu_order: 3
version: 2.2
github_link: rest/cat-special.md

---


**Service Name**

`SpecialPriceStorageInterface`

**REST Endpoints**

```
POST /V1/products/special-price
POST /V1/products/special-price-information
POST /V1/products/special-price-delete
```

## Set a special price for a product

The following product types support special pricing:

* Simple
* Virtual
* Downloadable
* Bundle

You can set multiple special prices in a single call.


{% highlight json %}

{% endhighlight  %}


Name | Description | Format | Requirements
--- | --- | --- | ---
`price` | The special price of the product | float | Required for setting or deleting a special price
`store_id` | The store ID  to apply the special price | integer | Required for setting or deleting a special price
`sku` | The SKU of the product | string | Required for setting or deleting a special price
`price_from` | The date and time the special price goes into effect. The date/time format is `YYYY-MM-DD hh:mm:ss`. The specified time must be later than the current time.  | string | Required for setting or deleting a special price
`price_to` | The date and time the special price ends. The date/time format is `YYYY-MM-DD hh:mm:ss` If no value is specified, the special price does not expire. | string | Optional

**Sample Usage**

`POST /V1/products/special-price`

**Payload**

{% highlight json %}
{
  "prices": [
    {
      "price": 42.50,
      "store_id": 0,
      "price_from": "2017-07-11 16:00:00",
      "price_to": "2017-07-11 18:00:00",
      "sku": "24-MB05"
    }
  ]
}
{% endhighlight %}

**Response**

`[]`

## Get a product's special price.


**Sample Usage**

`POST /V1/products/special-price-information`

**Payload**

{% highlight json %}
{
  "skus": [
    "24-MB05"
  ]
}
{% endhighlight %}

**Response**

{% highlight json %}
[
    {
        "price": 42.5,
        "store_id": 0,
        "sku": "24-MB05",
        "price_from": "2017-07-11 16:00:02",
        "price_to": "2017-07-11 18:00:01"
    }
]
{% endhighlight %}

## Delete a special price

**Sample Usage**

`POST /V1/products/special-price-delete`

**Payload**

{% highlight json %}
{
  "prices": [
    {
      "price": 35.50,
      "store_id": 0,
      "sku": "24-MB03",
      "price_from": "2017-07-11 20:00:00",
      "price_to": "2017-07-11 22:00:00"
    }
  ]
}
{% endhighlight %}

**Response**

`[]`
