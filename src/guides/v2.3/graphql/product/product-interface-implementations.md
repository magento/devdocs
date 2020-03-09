---
group: graphql
title: Product interface implementations
redirect_from:
  - /guides/v2.3/graphql/reference/product-interface-implementations.html
---

Magento provides multiple product types, and most of these product types have specialized attributes that are not defined in the `ProductInterface`.

Product type | Implements | Has product-specific attributes?
--- | --- | ---
[BundleProduct]({{ page.baseurl }}/graphql/product/bundle-product.html) | [ProductInterface]({{ page.baseurl }}/graphql/product/product-interface.html), [PhysicalProductInterface]({{ page.baseurl }}/graphql/product/product-interface.html#PhysicalProductInterface), [CustomizableProductInterface]({{ page.baseurl }}/graphql/product/customizable-option-interface.html) | Yes
[ConfigurableProduct]({{ page.baseurl }}/graphql/product/configurable-product.html) | [ProductInterface]({{ page.baseurl }}/graphql/product/product-interface.html), [PhysicalProductInterface]({{ page.baseurl }}/graphql/product/product-interface.html#PhysicalProductInterface), [CustomizableProductInterface]({{ page.baseurl }}/graphql/product/customizable-option-interface.html) | Yes
[DownloadableProduct]({{ page.baseurl }}/graphql/product/downloadable-product.html) | [ProductInterface]({{ page.baseurl }}/graphql/product/product-interface.html),  [CustomizableProductInterface]({{ page.baseurl }}/graphql/product/customizable-option-interface.html)  | Yes
[GroupedProduct]({{ page.baseurl }}/graphql/product/grouped-product.html) | [ProductInterface]({{ page.baseurl }}/graphql/product/product-interface.html), [PhysicalProductInterface]({{ page.baseurl }}/graphql/product/product-interface.html#PhysicalProductInterface), [CustomizableProductInterface]({{ page.baseurl }}/graphql/product/customizable-option-interface.html) | Yes
SimpleProduct | [ProductInterface]({{ page.baseurl }}/graphql/product/product-interface.html), [PhysicalProductInterface]({{ page.baseurl }}/graphql/product/product-interface.html#PhysicalProductInterface), [CustomizableProductInterface]({{ page.baseurl }}/graphql/product/customizable-option-interface.html) | No
VirtualProduct | [ProductInterface]({{ page.baseurl }}/graphql/product/product-interface.html),  [CustomizableProductInterface]({{ page.baseurl }}/graphql/product/customizable-option-interface.html) | No

## Query for product-specific attributes

To return attributes that are specific to a product type, append a structure similar to the following to the end of the `Products` output object:

```text
... on <ProductType> {
  items{
    <ProductType-attribute1>
    <ProductType-attribute2>
    ...
    }
  }
```

For example, to return `GroupedProduct` attributes, construct your query like this:

```graphql
{
  products(filter:
    {sku: {eq: "G-1"}}
  )
  {
    items {
      id
      name
      sku
      __typename
      ... on GroupedProduct {
        items{
          qty
          position
          product{
            sku
            name
            __typename
            url_key
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
          "id": 4,
          "name": "Group-1",
          "sku": "G-1",
          "__typename": "GroupedProduct",
          "items": [
            {
              "qty": 0,
              "position": 1,
              "product": {
                "sku": "xyz",
                "name": "T-shirt",
                "__typename": "SimpleProduct",
                "url_key": "product1"
              }
            },
            {
              "qty": 0,
              "position": 2,
              "product": {
                "sku": "240-LV04",
                "name": "Beginner's Yoga",
                "__typename": "DownloadableProduct",
                "url_key": "beginner-s-yoga"
              }
            }
          ]
        }
      ]
    }
  }
}
```

{% endcollapsible %}
