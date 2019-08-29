---
title: Magento_GroupedRequisitionList module
ee_only: true
functional_areas:
  - B2B
---

{% include mrg/note.md %}

## Overview

The Magento_GroupedRequisitionList module enables grouped products to be displayed in a requisition list in an B2B environment. This module extends Magento_RequisitionList and Magento_Grouped modules.

The Magento_GroupedRequisitionList module provides the following features:

* Display grouped products in a requisition list.

* Add grouped products to cart from a requisition list.

* Disable ability to change quantity of grouped products in a requisition list.

## Installation details

The module has dependency on the Magento_RequisitionList module and Magento_Grouped modules, which must be installed and enabled first. This module does not create any backward incompatible changes. Can be uninstalled or deactivated at any time.

## Structure

[Learn about a typical file structure for a Magento 2 module](http://devdocs.magento.com/guides/v2.2/extension-dev-guide/build/module-file-structure.html).

## Extensibility

Extension developers can interact with the Magento_GroupedRequisitionList module. For more information about the Magento extension mechanism, see [Magento plug-ins](http://devdocs.magento.com/guides/v2.2/extension-dev-guide/plugins.html).

[The Magento dependency injection mechanism](http://devdocs.magento.com/guides/v2.2/extension-dev-guide/depend-inj.html) enables you to override the functionality of the Magento_GroupedRequisitionList module.

### Layouts

You can extend and override layouts in the `Magento\GroupedRequistionList\view\frontend\layout` directories.

For more information about layouts, see the [Layout documentation](http://devdocs.magento.com/guides/v2.2/frontend-dev-guide/layouts/layout-overview.html).

## Additional information

You can track [backward incompatible changes made in a Magento B2b mainline after the Magento 2.2 release](http://devdocs.magento.com/guides/v2.2/release-notes/changes/b2b_changes.html).
