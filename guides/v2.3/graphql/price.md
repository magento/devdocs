---
layout: default
group: graphql
title: Price field
version: 2.3
github_link: graphql/price.md
---

The Price field contains an amount and currency code. It may also contain price adjustment information.

## Example usage

The following call returns price information about a single product.

**Request**

{% highlight json %}
{
    products(
      filter: {
          sku: {eq: "WS01"}
        }
    )
    {
        total_count
        items {
          name
          sku
          price {
            regularPrice {
              amount {
                value
                currency
              }
              adjustments {
                amount {
                  value
                  currency
                }
                code
                description
              }
            }
          }
        }
        page_info {
          page_size
          current_page
        }
      }
}
{% endhighlight %}

**Response**

{% highlight json %}
{
  "data": {
    "products": {
      "total_count": 1,
      "items": [
        {
          "name": "Gwyn Endurance Tee",
          "sku": "WS01",
          "price": {
            "regularPrice": {
              "amount": {
                "value": 24,
                "currency": "USD"
              },
              "adjustments": []
            }
          }
        }
      ],
      "page_info": {
        "page_size": 20,
        "current_page": 1
      }
    }
  }
}
{% endhighlight %}

### ProductPrice object

Attribute |  Data Type | Description
--- | --- | ---
`maximalPrice` | Price | Used for composite (bundle, configurable, grouped) products. This is the highest possible final price for all the options defined within a composite product. If you're specifying a price range, this would be the "to" value.
`minimalPrice` | Price | Used for composite (bundle, configurable, grouped) products. This is the lowest possible final price for all the options defined within a composite product. If you're specifying a price range, this would be the "from" value.
`regularPrice` | Price | The base price of a product.

### Price object {#Price}

Attribute |  Data Type | Description
--- | --- | ---
`amount` | Money | The price of the the product and its currency code. See [Money object](#Money).
`adjustments` | [PriceAdjustment] | An array of [PriceAdjustment](#PriceAdjustment) objects.

#### Money object {#Money}

Attribute |  Data Type | Description
--- | --- | ---
`value` | Float | The price of the product
`currency` | CurrencyEnum | A three-letter currency code, such as `USD` or `EUR`.

#### PriceAdjustment array {#PriceAdjustment}

Attribute |  Data Type | Description
--- | --- | ---
`amount` | Money | The amount of the price adjustment and its currency code. See [Money object](#Money).
`code` | PriceAdjustmentCodesEnum | One of `tax`, `weee`, or `weee_tax`.
`description` | PriceAdjustmentDescriptionEnum | Indicates whether the entity described by the code attribute is included or excluded from the adjustment.
