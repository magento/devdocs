---
group: graphql
title: Product interface implementations
redirect_from:
  - /guides/v2.3/graphql/reference/product-interface-implementations.html
  - /guides/v2.3/graphql/product/product-interface-implementations.html
---

Magento provides multiple product types, and most of these product types have specialized attributes that are not defined in the `ProductInterface`.

Product type | Implements | Has product-specific attributes?
--- | --- | ---
[BundleProduct]({{ page.baseurl }}/graphql/interfaces/bundle-product.html) | [ProductInterface]({{ page.baseurl }}/graphql/interfaces/product-interface.html), [PhysicalProductInterface]({{ page.baseurl }}/graphql/interfaces/product-interface.html#PhysicalProductInterface), [CustomizableProductInterface]({{ page.baseurl }}/graphql/interfaces/customizable-option-interface.html) | Yes
[ConfigurableProduct]({{ page.baseurl }}/graphql/interfaces/configurable-product.html) | [ProductInterface]({{ page.baseurl }}/graphql/interfaces/product-interface.html), [PhysicalProductInterface]({{ page.baseurl }}/graphql/interfaces/product-interface.html#PhysicalProductInterface), [CustomizableProductInterface]({{ page.baseurl }}/graphql/interfaces/customizable-option-interface.html) | Yes
[DownloadableProduct]({{ page.baseurl }}/graphql/interfaces/downloadable-product.html) | [ProductInterface]({{ page.baseurl }}/graphql/interfaces/product-interface.html),  [CustomizableProductInterface]({{ page.baseurl }}/graphql/interfaces/customizable-option-interface.html)  | Yes
[GroupedProduct]({{ page.baseurl }}/graphql/interfaces/grouped-product.html) | [ProductInterface]({{ page.baseurl }}/graphql/interfaces/product-interface.html), [PhysicalProductInterface]({{ page.baseurl }}/graphql/interfaces/product-interface.html#PhysicalProductInterface), [CustomizableProductInterface]({{ page.baseurl }}/graphql/interfaces/customizable-option-interface.html) | Yes
[SimpleProduct]({{ page.baseurl }}/graphql/interfaces/simple-product.html) | [ProductInterface]({{ page.baseurl }}/graphql/interfaces/product-interface.html), [PhysicalProductInterface]({{ page.baseurl }}/graphql/interfaces/product-interface.html#PhysicalProductInterface), [CustomizableProductInterface]({{ page.baseurl }}/graphql/interfaces/customizable-option-interface.html) | No
[VirtualProduct]({{ page.baseurl }}/graphql/interfaces/virtual-product.html) | [ProductInterface]({{ page.baseurl }}/graphql/interfaces/product-interface.html),  [CustomizableProductInterface]({{ page.baseurl }}/graphql/interfaces/customizable-option-interface.html) | No

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

{% include graphql/grouped-product-sample.md %}
