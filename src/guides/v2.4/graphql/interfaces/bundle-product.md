---
group: graphql
title: Bundle product data types
redirect_from:
  - /guides/v2.4/graphql/product/bundle-product.html
redirect_to: https://developer.adobe.com/commerce/webapi/graphql/schema/products/interfaces/types/bundle/
layout: migrated
---

The `BundleProduct` data type implements the following interfaces:

-  [ProductInterface]({{page.baseurl}}/graphql/interfaces/product-interface.html)
-  [PhysicalProductInterface]({{page.baseurl}}/graphql/interfaces/product-interface.html#PhysicalProductInterface)
-  [CustomizableProductInterface]({{page.baseurl}}/graphql/interfaces/customizable-option-interface.html)
-  [RoutableInterface]({{page.baseurl}}/graphql/interfaces/routable-interface.html)

Attributes that are specific to bundle products can be used when performing a [`products`]({{page.baseurl}}/graphql/queries/products.html) query.

## BundleProduct object

The `BundleProduct` object contains the following attributes:

Attribute | Type | Description
--- | --- | ---
`dynamic_price` | Boolean | Indicates whether the bundle product has a dynamic price
`dynamic_sku` | Boolean | Indicates whether the bundle product has a dynamic SKU
`dynamic_weight` | Boolean | Indicates whether the bundle product has a dynamically calculated weight
`items` | [BundleItem] | An array containing information about individual bundle items
`price_view` | PriceViewEnum | One of PRICE_RANGE or AS_LOW_AS
`ship_bundle_items` | ShipBundleItemsEnum | Indicates whether to ship bundle items TOGETHER or SEPARATELY

## BundleItem object

The `BundleItem` object contains the following attributes:

Attribute | Type | Description
--- | --- | ---
`option_id` | Int | Deprecated. Use `uid` instead. An ID assigned to each type of item in a bundle product
`options`  | [BundleItemOption] | An array of additional options for this bundle item
`position` | Int | The relative position of this item compared to the other bundle items
`required` | Boolean | Indicates whether the item must be included in the bundle
`sku` | String | The SKU of the bundle product
`title` | String | The display name of the item
`type` | String | The input type that the customer uses to select the item. Examples include radio button and checkbox
`uid` | ID | The unique ID for a `BundleItem` object

## BundleItemOption object

The `BundleItemOption` object contains the following attributes:

Attribute | Type | Description
--- | --- | ---
`can_change_quantity` | Boolean | Indicates whether the customer can change the number of items for this option
`id` | Int | Deprecated. Use `uid` instead. The ID assigned to the bundled item option
`is_default` | Boolean | Indicates whether this option is the default option
`label` | String | The text that identifies the bundled item option
`position` | Int | When a bundle item contains multiple options, the relative position of this option compared to the other options
`price_type` | PriceTypeEnum | One of FIXED, PERCENT, or DYNAMIC
`price` | Float | The price of the selected option
`product` | [ProductInterface]({{page.baseurl}}/graphql/interfaces/product-interface.html) | Contains details about this product option
`qty` | Float | Deprecated. Use `quantity` instead
`quantity` | Float | Indicates the quantity of this specific bundle item
`uid` | ID! | The unique ID for a `BundleItemOption` object

## Sample Query

The following query returns information about bundle product `24-WG080`, which is defined in the sample data.

```graphql
{
  products(filter: {sku:
    {eq: "24-WG080"}
  })
   {
      items{
         sku
         __typename
         uid
         name
          ... on BundleProduct {
          dynamic_sku
          dynamic_price
          dynamic_weight
          price_view
          ship_bundle_items
          items {
            uid
            title
            required
            type
            position
            sku
            options {
              uid
              quantity
              position
              is_default
              price
              price_type
              can_change_quantity
              label
              product {
                uid
                name
                sku
                __typename
              }
            }
          }
        }
      }
   }
}
```

{% collapsible Response %}

```json
{
  "data": {
    "products": {
      "items": [
        {
          "sku": "24-WG080",
          "__typename": "BundleProduct",
          "uid": "NDY=",
          "name": "Sprite Yoga Companion Kit",
          "dynamic_sku": true,
          "dynamic_price": true,
          "dynamic_weight": true,
          "price_view": "PRICE_RANGE",
          "ship_bundle_items": "TOGETHER",
          "items": [
            {
              "uid": "YnVuZGxlLzE=",
              "title": "Sprite Stasis Ball",
              "required": true,
              "type": "radio",
              "position": 1,
              "sku": "24-WG080",
              "options": [
                {
                  "uid": "YnVuZGxlLzEvMS8x",
                  "quantity": 1,
                  "position": 1,
                  "is_default": true,
                  "price": 0,
                  "price_type": "FIXED",
                  "can_change_quantity": true,
                  "label": "Sprite Stasis Ball 55 cm",
                  "product": {
                    "uid": "MjY=",
                    "name": "Sprite Stasis Ball 55 cm",
                    "sku": "24-WG081-blue",
                    "__typename": "SimpleProduct"
                  }
                },
                {
                  "uid": "YnVuZGxlLzEvMi8x",
                  "quantity": 1,
                  "position": 2,
                  "is_default": false,
                  "price": 0,
                  "price_type": "FIXED",
                  "can_change_quantity": true,
                  "label": "Sprite Stasis Ball 65 cm",
                  "product": {
                    "uid": "Mjk=",
                    "name": "Sprite Stasis Ball 65 cm",
                    "sku": "24-WG082-blue",
                    "__typename": "SimpleProduct"
                  }
                },
                {
                  "uid": "YnVuZGxlLzEvMy8x",
                  "quantity": 1,
                  "position": 3,
                  "is_default": false,
                  "price": 0,
                  "price_type": "FIXED",
                  "can_change_quantity": true,
                  "label": "Sprite Stasis Ball 75 cm",
                  "product": {
                    "uid": "MzI=",
                    "name": "Sprite Stasis Ball 75 cm",
                    "sku": "24-WG083-blue",
                    "__typename": "SimpleProduct"
                  }
                }
              ]
            },
            {
              "uid": "YnVuZGxlLzI=",
              "title": "Sprite Foam Yoga Brick",
              "required": true,
              "type": "radio",
              "position": 2,
              "sku": "24-WG080",
              "options": [
                {
                  "uid": "YnVuZGxlLzIvNC8x",
                  "quantity": 1,
                  "position": 1,
                  "is_default": true,
                  "price": 0,
                  "price_type": "FIXED",
                  "can_change_quantity": true,
                  "label": "Sprite Foam Yoga Brick",
                  "product": {
                    "uid": "MjE=",
                    "name": "Sprite Foam Yoga Brick",
                    "sku": "24-WG084",
                    "__typename": "SimpleProduct"
                  }
                }
              ]
            },
            {
              "uid": "YnVuZGxlLzM=",
              "title": "Sprite Yoga Strap",
              "required": true,
              "type": "radio",
              "position": 3,
              "sku": "24-WG080",
              "options": [
                {
                  "uid": "YnVuZGxlLzMvNS8x",
                  "quantity": 1,
                  "position": 1,
                  "is_default": true,
                  "price": 0,
                  "price_type": "FIXED",
                  "can_change_quantity": true,
                  "label": "Sprite Yoga Strap 6 foot",
                  "product": {
                    "uid": "MzM=",
                    "name": "Sprite Yoga Strap 6 foot",
                    "sku": "24-WG085",
                    "__typename": "SimpleProduct"
                  }
                },
                {
                  "uid": "YnVuZGxlLzMvNi8x",
                  "quantity": 1,
                  "position": 2,
                  "is_default": false,
                  "price": 0,
                  "price_type": "FIXED",
                  "can_change_quantity": true,
                  "label": "Sprite Yoga Strap 8 foot",
                  "product": {
                    "uid": "MzQ=",
                    "name": "Sprite Yoga Strap 8 foot",
                    "sku": "24-WG086",
                    "__typename": "SimpleProduct"
                  }
                },
                {
                  "uid": "YnVuZGxlLzMvNy8x",
                  "quantity": 1,
                  "position": 3,
                  "is_default": false,
                  "price": 0,
                  "price_type": "FIXED",
                  "can_change_quantity": true,
                  "label": "Sprite Yoga Strap 10 foot",
                  "product": {
                    "uid": "MzU=",
                    "name": "Sprite Yoga Strap 10 foot",
                    "sku": "24-WG087",
                    "__typename": "SimpleProduct"
                  }
                }
              ]
            },
            {
              "uid": "YnVuZGxlLzQ=",
              "title": "Sprite Foam Roller",
              "required": true,
              "type": "radio",
              "position": 4,
              "sku": "24-WG080",
              "options": [
                {
                  "uid": "YnVuZGxlLzQvOC8x",
                  "quantity": 1,
                  "position": 1,
                  "is_default": true,
                  "price": 0,
                  "price_type": "FIXED",
                  "can_change_quantity": true,
                  "label": "Sprite Foam Roller",
                  "product": {
                    "uid": "MjI=",
                    "name": "Sprite Foam Roller",
                    "sku": "24-WG088",
                    "__typename": "SimpleProduct"
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
```

{% endcollapsible %}

## Related topics

-  [addBundleProductsToCart mutation]({{page.baseurl}}/graphql/mutations/add-bundle-products.html)
