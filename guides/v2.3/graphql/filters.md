---
group: graphql
title: Filtering search results
---

As of Magento 2.3.4, the `filter` attribute of the [`products`]({{page.baseurl}}/graphql/queries/products.html) query accepts the `ProductAttributeFilterInput` object. (In previous versions, the `filter` attribute required a `ProductFilterInput` object. This object contained a hard-coded list of filterable attributes, and you could not filter on a custom attribute or any other attribute was not on the list.) The `ProductAttributeFilterInput` object has been constructed to contain a set of generic filtering input objects:


