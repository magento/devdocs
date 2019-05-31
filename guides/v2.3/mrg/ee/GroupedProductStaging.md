---
title: Magento_GroupedProductStaging module
ee_only: true
---

{% include mrg/note.md %}

## Magento_GroupedProductStaging module

## Overview

The Magento_GroupedProductStaging module is a part of the staging functionality in Magento EE. It enables you to stage products assigned to grouped product.

## Implementation details

The Magento_GroupedProductStaging module extends functionality of the Magento_GroupedProduct to be used in staging. It adds Grouped Products field set to the Schedule Update form of a product.

## Dependencies

You can find the list of modules that have dependencies on the Magento_GroupedProductStaging module in the `require` section of the `composer.json` file. The file is located in the root directory of the module.

## Extension points

[The Magento dependency injection mechanism](http://devdocs.magento.com/guides/v2.1/extension-dev-guide/depend-inj.html) enables you to override the functionality of the Magento_GroupedProductStaging module.

## Additional information

You can track [backward incompatible changes]({{ page.baseurl }}/release-notes/backward-incompatible-changes/).
