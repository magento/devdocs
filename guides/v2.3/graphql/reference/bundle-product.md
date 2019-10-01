---
group: graphql
title: BundleProduct endpoint
---

The `BundleProduct` endpoint defines which bundle product-specific attributes are returned when performing a `products` search.

## BundleProduct object

Attribute | Type | Description
--- | --- | ---
`dynamic_price` | Boolean | Indicates whether the bundle product has a dynamic price
`dynamic_sku` | Boolean | Indicates whether the bundle product has a dynamic SKU
`dynamic_weight` | Boolean | Indicates whether the bundle product has a dynamically calculated weight
`items` | BundleItem | An array containing information about individual bundle items
`price_view` | PriceViewEnum | One of PRICE_RANGE or AS_LOW_AS
`ship_bundle_items` | ShipBundleItemsEnum | Indicates whether to ship bundle items together or individually

## BundleItem object

Attribute | Type | Description
--- | --- | ---
`option_id` | Int | An ID assigned to each type of item in a bundle product
`options`  | BundleItemOption | An array of additional options for this bundle item
`position` | Int | The relative position of this item compared to the other bundle items
`required` | Boolean | Indicates whether the item must be included in the bundle
`sku` | String | The SKU of the bundle product
`title` | String | The display name of the item
`type` | String | The input type that the customer uses to select the item. Examples include radio button and checkbox.

## BundleItemOption object

Attribute | Type | Description
--- | --- | ---
`can_change_quantity` | Boolean | Indicates whether the customer can change the number of items for this option
`id` | Int | The ID assigned to the bundled item option
`is_default` | Boolean | Indicates whether this option is the default option
`label` | String | The text that identifies the bundled item option
`position` | Int | When a bundle item contains multiple options, the relative position of this option compared to the other options
`price_type` | PriceTypeEnum | One of FIXED, PERCENT, or DYNAMIC
`price` | Float | The price of the selected option
`product` | ProductInterface | The ProductInterface object, which contains details about this product option
`qty` | Float | Indicates the quantity of this specific bundle item

## Sample Query

The following query returns information about bundle product `24-WG080`, which is defined in the sample data.

```text
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
```