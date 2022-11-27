---
group: graphql
title: Grouped product data types
redirect_from:
  - /guides/v2.4/graphql/product/grouped-product.html
migrated_to: https://developer.adobe.com/commerce/webapi/graphql/schema/products/interfaces/types/grouped/
layout: migrated
---

The `GroupedProduct` data type implements [ProductInterface]({{page.baseurl}}/graphql/interfaces/product-interface.html) and [PhysicalProductInterface]({{page.baseurl}}/graphql/interfaces/product-interface.html#PhysicalProductInterface). As a result, attributes that are specific to grouped products can be used when performing a [products]({{page.baseurl}}/graphql/queries/products.html) query. It also implements [RoutableInterface]({{page.baseurl}}/graphql/interfaces/routable-interface.html).

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

{% include graphql/grouped-product-sample-24.md %}
