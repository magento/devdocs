---
group: graphql
title: CartItemInterface attributes and implementations
---

The `CartItemInterface` has the following implementations:

*  [BundleCartItem](#BundleCartItem)
*  [ConfigurableCartItem](#ConfigurableCartItem)
*  [DownloadableCartItem](#DownloadableCartItem)
*  [GiftCardCartItem](#GiftCardCartItem)
*  [SimpleCartItem](#SimpleCartItem)
*  [VirtualCartItem](#VirtualCartItem)

## CartItemInterface attributes

The `CartItemInterface` and all of its implementations can contain the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`id` | String | Deprecated. Use `uid` instead. The ID of the item
`prices` | [CartItemPrices](#CartItemPrices) | Includes the price of an item, any applied discounts, and calculated totals
`product` | [ProductInterface]({{ page.baseurl }}/graphql/interfaces/product-interface.html) | Contains attributes that are common to all types of products
`quantity` | Float | The number of items in the cart
`uid` | ID! | The unique ID for the `CartItemInterface` object

### CartItemPrices object {#CartItemPrices}

The `CartItemPrices` object can contain the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`discounts`| [Discount] | An array of discounts to be applied to the cart item
`fixed_product_taxes` | [[FixedProductTax]]({{page.baseurl}}/graphql/interfaces/product-interface.html#FixedProductTax) | The fixed product taxes to be applied to the cart item
`price` | Money! | The price of the item before any discounts were applied. The price that might include tax, depending on the configured display settings for cart
`row_total` | Money! | The value of the `price` multiplied by the quantity of the item
`row_total_including_tax` | Money! | The value of `row_total` plus the tax applied to the item
`total_item_discount` | Money | The total of all discounts applied to the item

### SelectedCustomizableOption attributes {#SelectedCustomizableOption}

Several product types support customization. Use the following attributes to identify a customized product that have been placed in a cart.

Attribute |  Data Type | Description
--- | --- | ---
`customizable_option_uid` | ID! | The unique ID for a specific `CustomizableOptionInterface` object, such as a `CustomizableFieldOption`, `CustomizableFileOption`,  or `CustomizableAreaOption` object
`id` | Int! | Deprecated. Use `customizable_option_uid` instead
`is_required` | Boolean! | Indicates whether the customizable option is required
`label` | String! | The display name of the selected customizable option
`sort_order` | Int! | A value indicating the order to display this option
`type` | String! | The type of `CustomizableOptionInterface` object
`values` | [[SelectedCustomizableOptionValue!]!](#SelectedCustomizableOptionValue) | An array of selectable values

### SelectedCustomizableOptionValue attributes {#SelectedCustomizableOptionValue}

All customized products placed in a cart items require a value to identify the customization.

Attribute |  Data Type | Description
--- | --- | ---
`customizable_option_value_uid` | ID! | The unique ID for a value object that corresponds to the object represented by the `customizable_option_uid` attribute
`id` | Int! | Deprecated. Use `customizable_option_value_uid` instead
`label` | String! | The display name of the selected value
`price` | CartItemSelectedOptionValuePrice! | The price of the selected customizable value
`value` | String! | The text identifying the selected value

## BundleCartItem implementation {#BundleCartItem}

The `BundleCartItem` object adds the following attributes to the `CartItemInterface`.

Attribute |  Data Type | Description
--- | --- | ---
`bundle_options` | [[SelectedBundleOption!]!](#SelectedBundleOption) | An array of options selected for a bundle product
`customizable_options` | [[SelectedCustomizableOption]!](#SelectedCustomizableOption) | An array of customizable options the shopper  chose for the bundle product

### SelectedBundleOption attributes {#SelectedBundleOption}

The `SelectedBundleOption` object contains the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`id` | Int! | Deprecated. Use `uid` instead
`label` | String! | The display name of the selected bundle product option
`type` | String! | The type of selected bundle product option
`uid` | ID! | The unique identifier for a `SelectedBundleOption` object
`values` | [[SelectedBundleOptionValue!]!](#SelectedBundleOptionValue) | An array of selected bundle option values

### SelectedBundleOptionValue attributes {#SelectedBundleOptionValue}

The `SelectedBundleOptionValue` object contains the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`id` | Int! | Deprecated. Use `uid` instead
`label` | String! | The display name of the selected bundle product option
`price` | Float! | The price of the selected bundle product option
`quantity` | Float! | The quantity of the selected bundle product option
`uid` | ID! | The unique identifier for a `SelectedBundleOption` object

## ConfigurableCartItem implementation {#ConfigurableCartItem}

The `ConfigurableCartItem` object adds the following attributes to the `CartItemInterface`.

Attribute | Data type | Description
--- | --- | ---
`configurable_options` | [[SelectedConfigurableOption!]!](#SelectedConfigurableOption) | An array of configurable options
`configured_variant` | [ProductInterface]({{page.baseurl}}/graphql/interfaces/product-interface.html) | Returns details about a child configurable product that are different than the parent product. This attribute always returns child information, including the child product image, even if the `storeConfig.configurable_thumbnail_source` attribute is set to `parent`
`customizable_options` | [[SelectedCustomizableOption]](#SelectedCustomizableOption) | An array of customizable options the shopper chose for the configurable product

### SelectedConfigurableOption attributes {#SelectedConfigurableOption}

The `SelectedConfigurableOption` object contains the following attributes.

Attribute | Data type | Description
--- | --- | ---
`configurable_product_option_uid` | ID! | The unique ID for a `ConfigurableProductOptions` object
`configurable_product_option_value_uid` | ID! | The unique ID for a `ConfigurableProductOptionsValues` object
`id` | Int! | Deprecated. Use `configurable_product_option_uid` instead
`option_label` | String! | The display name of the selected configurable option
`value_id` | Int | Deprecated. Use `value_uid` instead
`value_label` | String! | The display name of the value for the selected configurable option
`value_uid` | ID! | The unique ID of the value for the selected configurable option

## DownloadableCartItem implementation {#DownloadableCartItem}

The `DownloadableCartItem` object adds the following attributes to the `CartItemInterface`.

Attribute | Data type | Description
--- | --- | ---
`customizable_options` | [[SelectedCustomizableOption]](#SelectedCustomizableOption) | An array of customizable options the shopper chose for the downloadable product
`links` | [[DownloadableProductLinks]]({{page.baseurl}}/graphql/interfaces/downloadable-product.html#DownloadableProductLinks) | An array containing information about the links associated with the selected downloadable product
`samples` | [[DownloadableProductSamples]]({{page.baseurl}}/graphql/interfaces/downloadable-product.html#DownloadableProductSamples) | An array containing information about samples of the selected downloadable product

## GiftCardCartItem implementation {#GiftCardCartItem}

The `GiftCardCartItem` object adds the following attributes to the `CartItemInterface`.

`amount` | Money! | The amount and currency of the gift card
`customizable_options` | [[SelectedCustomizableOption]!](#SelectedCustomizableOption) | An array of customizations made to the gift card
`message` | String | A message to the recipient
`recipient_email` | String | The email of the person receiving the gift card
`recipient_name` | String! | The name of the person receiving the gift card
`sender_email` | String | The email of the sender
`sender_name` | String! | The name of the sender

## SimpleCartItem implementation {#SimpleCartItem}

The `SimpleCartItem` object adds the following attributes to the `CartItemInterface`.

Attribute | Data type | Description
--- | --- | ---
`customizable_options` | [[SelectedCustomizableOption]!](#SelectedCustomizableOption) | An array of customizable options the shopper chose for the simple product

## VirtualCartItem implementation {#VirtualCartItem}

The `VirtualCartItem` object adds the following attributes to the `CartItemInterface`.

Attribute | Data type | Description
--- | --- | ---
`customizable_options` | [[SelectedCustomizableOption]!](#SelectedCustomizableOption) | An array of customizable options the shopper chose for the virtual product

## Example usage

The following mutation adds a configurable product and a bundle product to the cart. The response contains details about these items.

**Request:**

```graphql
mutation {
  addProductsToCart(
    cartId: "h7HmZwfU7zIGR94jsuzOVBUAYtyPefkr"
    cartItems: [
      {
        quantity: 1
        sku: "WSH12"
        selected_options: ["Y29uZmlndXJhYmxlLzkzLzUz","Y29uZmlndXJhYmxlLzE2MS8xNzQ="]
      }
      {
        quantity: 1
        sku: "24-WG080"
        selected_options: [
          "YnVuZGxlLzEvMS8x"
          "YnVuZGxlLzIvNC8x"
          "YnVuZGxlLzMvNS8x"
          "YnVuZGxlLzQvOC8x"
        ]
      }
    ]
  ) {
    cart {
      items {
        uid
        product {
          name
          sku
        }
        quantity
        ... on ConfigurableCartItem {
          configurable_options {
            configurable_product_option_uid
            configurable_product_option_value_uid
            option_label
            value_label
          }
        }
        ... on BundleCartItem {
          bundle_options {
            uid
            label
            type
            values {
              id
              label
              price
              quantity
            }
          }
        }
      }
    }
  }
}
```
**Response:**

```json
{
  "data": {
    "addProductsToCart": {
      "cart": {
        "items": [
          {
            "uid": "MjU=",
            "product": {
              "name": "Erika Running Short",
              "sku": "WSH12"
            },
            "quantity": 1,
            "configurable_options": [
              {
                "configurable_product_option_uid": "Y29uZmlndXJhYmxlLzIwNDgvOTM=",
                "configurable_product_option_value_uid": "Y29uZmlndXJhYmxlLzkzLzUz",
                "option_label": "Color",
                "value_label": "Green"
              },
              {
                "configurable_product_option_uid": "Y29uZmlndXJhYmxlLzIwNDgvMTYx",
                "configurable_product_option_value_uid": "Y29uZmlndXJhYmxlLzE2MS8xNzQ=",
                "option_label": "Size",
                "value_label": "28"
              }
            ]
          },
          {
            "uid": "Mjc=",
            "product": {
              "name": "Sprite Yoga Companion Kit",
              "sku": "24-WG080"
            },
            "quantity": 1,
            "bundle_options": [
              {
                "uid": "YnVuZGxlLzE=",
                "label": "Sprite Stasis Ball",
                "type": "radio",
                "values": [
                  {
                    "id": 1,
                    "label": "Sprite Stasis Ball 55 cm",
                    "price": 23,
                    "quantity": 1
                  }
                ]
              },
              {
                "uid": "YnVuZGxlLzI=",
                "label": "Sprite Foam Yoga Brick",
                "type": "radio",
                "values": [
                  {
                    "id": 4,
                    "label": "Sprite Foam Yoga Brick",
                    "price": 5,
                    "quantity": 1
                  }
                ]
              },
              {
                "uid": "YnVuZGxlLzM=",
                "label": "Sprite Yoga Strap",
                "type": "radio",
                "values": [
                  {
                    "id": 5,
                    "label": "Sprite Yoga Strap 6 foot",
                    "price": 14,
                    "quantity": 1
                  }
                ]
              },
              {
                "uid": "YnVuZGxlLzQ=",
                "label": "Sprite Foam Roller",
                "type": "radio",
                "values": [
                  {
                    "id": 8,
                    "label": "Sprite Foam Roller",
                    "price": 19,
                    "quantity": 1
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  }
}
```
