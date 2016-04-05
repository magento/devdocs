---
layout: default
group: howdoi
subgroup: product-create-page
title: Product Creation Page Customization
menu_title: Product Creation Page Customization
menu_node: parent
menu_order: 1
github_link: howdoi/product-create-page/overview.md
---

With release of Magento 2.1 Product Creation Page was totally re-implemented using the [UI Components]({{site.gdeurl21}}howdoi/ui-components/ui-component.html).
You can customize product creation form using 4 ways:

1. [Customization using UI form declaration in own module]({{site.gdeurl21}}howdoi/product-create-page/extension_xml.html).
2. [Customization via Modifiers classes for data and metadata]({{site.gdeurl21}}howdoi/product-create-page/extension_class.html).
3. Combination of 2 ways described above.
4. [Reference UI component (as referenceBlock or referenceContainer) in custom layout handle]({{site.gdeurl21}}howdoi/product-create-page/extension_reference.html).

Also, worth mentioning that you still can create custom attributes, attribute sets for product in Stores -> Attributes section and from product create/edit page directly.
Product form is still built according to Attribute Set structure.

References of old blocks/containers that composed product creation in past form were removed from catalog_product_new.xml layout handle.

In this section we'll describe how customization of product form can be done on example of Magento_CatalogInventory module.
It uses both methods: declarative xml and modifiers classes for data and metadata.
<div class="bs-callout bs-callout-info" id="info">
  <p>In your extension you may use only one of them.</p>
</div>
