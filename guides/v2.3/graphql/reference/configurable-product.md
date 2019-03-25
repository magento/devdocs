---
group: graphql
title: ConfigurableProduct endpoint
---

The `ConfigurableProduct` endpoint defines which configurable product-specific attributes are returned when performing a `products` search.

## ConfigurableProduct

Field | Type | Description
--- | --- | ---
`variants` | ConfigurableVariant | An array of linked simple products
`configurable_options` | ConfigurableProductOptions | An array of linked simple product items

## ConfigurableProductOptions

Field | Type | Description
--- | --- | ---
`id` | Int | The configurable option ID number assigned by the system
`attribute_id` | String | The ID assigned to the attribute
`attribute_code` | String | A string that identifies the attribute
`label` | String | A string that describes the configurable product option. It is displayed on the UI.
`position` | Int | A number that indicates the order in which the attribute is displayed
`use_default` | Boolean | Indicates whether the option is the default
`values` | ConfigurableProductOptionsValues | An array that defines the value_index codes assigned to the configurable product
`product_id` | Int | This is the same as a product's 'id' field

## ConfigurableProductOptionsValues

Field | Type | Description
--- | --- | ---
`value_index` | Int | A unique index number assigned to the configurable product option
`label` | String | The label of the product
`default_label` | String | The label of the product on the default store
`store_label` | String | The label of the product on the current store
`use_default_value` | Boolean | Indicates whether to use the default_label

## Sample Query

The following query returns information about configurable product `WH01`, which is defined in the sample data.

{% highlight json %}
{
  products(filter: {sku: {eq: "WH01"}}) {
    items {
      id
      attribute_set_id
      name
      sku
      type_id
      price {
        regularPrice {
          amount {
            value
            currency
          }
        }
      }
      categories {
        id
      }
      ... on ConfigurableProduct {
        configurable_options {
          id
          attribute_id
          label
          position
          use_default
          attribute_code
          values {
            value_index
            label
            store_label
            default_label
            use_default_value
          }
          product_id
        }
        variants {
          product {
            id
            categories {
        			id
      			}
            name
            sku
            attribute_set_id
            ... on PhysicalProductInterface {
              weight
            }
            price {
              regularPrice {
                amount {
                  value
                  currency
                }
              }
            }            
          }
          attributes {
            label
            code
            value_index
          }
        }
      }
    }
  }
}
{% endhighlight %}
