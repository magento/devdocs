---
group: graphql
title: Grouped product data types
redirect_from:
  - /guides/v2.3/graphql/reference/grouped-product.html
  - /guides/v2.3/graphql/product/grouped-product.html
---

The `GroupedProduct` data type implements `ProductInterface` and `PhysicalProductInterface`. As a result, attributes that are specific to grouped products can be used when performing a [`products`]({{page.baseurl}}/graphql/queries/products.html) query.

## GroupedProduct

The `GroupedProduct` object contains the `[items]` array:

Attribute | Type | Description
--- | --- | ---
`items` | [GroupedProductItem] | An array containing grouped product items

## GroupedProductItem {#GroupedProductItem}

The `GroupedProductItem` object contains the following attributes:

Attribute | Type | Description
--- | --- | ---
`position` | Int | The relative position of this item compared to the other group items
`product` | [ProductInterface]({{ page.baseurl }}/graphql/interfaces/product-interface.html) | The ProductInterface contains attributes that are common to all types of products. Note that descriptions may not be available for custom and EAV attributes
`qty` | Float | The quantity of this grouped product item

## Sample Query

The following query returns information about downloadable product `24-WG085_Group`, which is defined in the sample data.

{% include graphql/grouped-product-sample.md %}
