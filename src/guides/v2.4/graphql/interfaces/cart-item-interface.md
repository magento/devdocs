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

The `CartItemInterface` can contain the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`id` | String | Deprecated. Use `uid` instead. ID of the item
`prices` | [CartItemPrices](#CartItemPrices) | Includes the price of an item, any applied discounts, and calculated totals
`product` | [ProductInterface]({{ page.baseurl }}/graphql/interfaces/product-interface.html) | Contains attributes that are common to all types of products
`quantity` | Float | The number of items in the cart
`uid` | ID! | The unique ID for the CartItemInterface object

### CartItemPrices object {#CartItemPrices}

The `CartItemPrices` object can contain the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`discounts`| [Discount] | An array of discounts to be applied to the cart item
`price` | Money! | The price of the item before any discounts were applied
`row_total` | Money! | The value of the `price` multiplied by the quantity of the item
`row_total_including_tax` | Money! | The value of `row_total` plus the tax applied to the item
`total_item_discount` | Money | The total of all discounts applied to the item

## Implementations

### BundleCartItem attributes {#BundleCartItem}

Attribute |  Data Type | Description
--- | --- | ---
`bundle_options` | [SelectedBundleOption!]! |
`customizable_options` | [SelectedCustomizableOption]! |

### SelectedBundleOption attributes {#SelectedBundleOption}

Attribute |  Data Type | Description
--- | --- | ---
`id` | Int! | Deprecated. Use `uid` instead
`label` | String! |
`type` | String! |
`uid` | ID! | The unique identifier of the selected bundle option
`values` | [SelectedBundleOptionValue!]! |

### SelectedBundleOptionValue attributes {#SelectedBundleOptionValue}

Attribute |  Data Type | Description
--- | --- | ---
`id` | Int! | Deprecated. Use `uid` instead
`label` | String! |
`price` | Float! |
`quantity` | Float! |
`uid` | ID! | The unique identifier of the selected bundle option value

Attribute | Data type | Description
--- | --- | ---

### ConfigurableCartItem attributes {#}

Attribute | Data type | Description
--- | --- | ---
`configurable_options` | [SelectedConfigurableOption!]! | An array of selected configurable options
`customizable_options` | [SelectedCustomizableOption] |

### SelectedConfigurableOption attributes {#SelectedConfigurableOption}

Attribute | Data type | Description
--- | --- | ---
`id` | Int! |
`option_label` | String! |
`value_id` | Int! |
`value_label` | String! |

### DownloadableCartItem attributes {#DownloadableCartItem}

Attribute | Data type | Description
--- | --- | ---
`customizable_options` | [SelectedCustomizableOption] |
`links` | [DownloadableProductLinks] | An array containing information about the links for the added to cart downloadable product
`samples` | [DownloadableProductSamples] | Defines characteristics of a downloadable product

### SimpleCartItem attributes {#SimpleCartItem}

Attribute | Data type | Description
--- | --- | ---
`customizable_options` | [SelectedCustomizableOption] |

### VirtualCartItem attributes {#VirtualCartItem}

Attribute | Data type | Description
--- | --- | ---
`customizable_options` | [SelectedCustomizableOption] |

## Example usage

The following query

**Request:**

```graphql

```
**Response:**

```json

```
