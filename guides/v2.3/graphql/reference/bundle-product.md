---
group: graphql
title: BundleProduct endpoint
version: 2.3
github_link: graphql/reference/bundle-product.md
---

The `BundleProduct` endpoint defines which bundle product-specific attributes are returned when performing a `products` search.

## BundleProduct object

Field | Type | Description
--- | --- | ---
`price_view` | PriceViewEnum | One of PRICE_RANGE or AS_LOW_AS
`dynamic_price` | Boolean | Indicates whether the bundle product has a dynamic price
`dynamic_sku` | Boolean | Indicates whether the bundle product has a dynamic SKU
`ship_bundle_items` | ShipBundleItemsEnum | Indicates whether to ship bundle items together or individually
`dynamic_weight` | Boolean | Indicates whether the bundle product has a dynamically calculated weight
`items` | BundleItem | An array containing information about individual bundle items

## BundleItem object

Field | Type | Description
--- | --- | ---
`option_id` | Int | An ID assigned to each type of item in a bundle product
`title` | String | The display name of the item
`required` | Boolean | Indicates whether the item must be included in the bundle
`type` | String | The input type that the customer uses to select the item. Examples include radio button and checkbox.
`position` | Int | The relative position of this item compared to the other bundle items
`sku` | String | The SKU of the bundle product
`options`  | BundleItemOption | An array of additional options for this bundle item

##  BundleItemOption object

Field | Type | Description
--- | --- | ---
`id` | Int | The ID assigned to the bundled item option
`label` | String | The text that identifies the bundled item option
`qty` | Float | Indicates the quantity of this specific bundle item
`position` | Int | When a bundle item contains multiple options, the relative position of this option compared to the other options
`is_default` | Boolean | Indicates whether this option is the default option
`price` | Float | The price of the selected option
`price_type` | PriceTypeEnum | One of FIXED, PERCENT, or DYNAMIC
`can_change_quantity` | Boolean | Indicates whether the customer can change the number of items for this option
`product` | ProductInterface | The ProductInterface object, which contains details about this product option

## Sample Query

The following query returns information about bundle product `24-WG080`, which is defined in the sample data.

{% highlight json %}
{
   products(filter: {sku:
    {eq: "24-WG080"}
  	})
   {
       items{
           sku
           type_id
           id
           name
           ... on BundleProduct {
           dynamic_sku
            dynamic_price
            dynamic_weight
            price_view
            ship_bundle_items
            items {
              option_id
              title
              required
              type
              position
              sku
              options {
                id
                qty
                position
                is_default
                price
                price_type
                can_change_quantity
                label
                product {
                  id
                  name
                  sku
                  type_id
                   }
                }
            }
           }
       }
   }
}

{% endhighlight %}
