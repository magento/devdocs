---
group: graphql
title: ConfigurableProduct endpoint
version: 2.3
github_link: graphql/reference/configurable-product.md
---

The `ConfigurableProduct` endpoint defines which configurable product-specific attributes are returned when performing a `products` search.

## ConfigurableProduct

Field | Type | Description
--- | --- | ---
`configurable_product_links` | SimpleProduct | An array of linked simple products
`configurable_product_options` | ConfigurableProductOptions | An array of linked simple product items

## ConfigurableProductOptions

Field | Type | Description
--- | --- | ---
`id` | Int | The configurable option ID number assigned by the system
`attribute_id` | String | The ID assigned to the attribute
`attribute_code` | String | A string that identifies the attribute
`label` | String | A string that describes the configurable product option. It is displayed on the UI.
`position` | Int | A number that indicates the order in which the attribute is displayed
`is_use_default` | Boolean | Indicates whether the option is the default
`values` | ConfigurableProductOptionsValues | An array that defines the value_index codes assigned to the configurable product
`product_id` | Int | This is the same as a product's 'id' field

## ConfigurableProductOptionsValues

Field | Type | Description
--- | --- | ---
`value_index` | Int | A unique index number assigned to the configurable product option

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
      category_ids
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
            category_ids
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
            category_links {
              position
              category_id
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
