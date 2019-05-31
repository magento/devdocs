---
title: Magento_LayeredNavigationStaging module
ee_only: true
---

{% include mrg/note.md %}

## Magento_LayeredNavigationStaging module

## Overview

The Magento_LayeredNavigationStaging module is a part of the staging functionality in Magento EE.
It restricts functionality of the Magento_LayeredNavigationStaging module in the staging preview mode.

## Implementation details

The Magento_LayeredNavigationStaging module disables the Magento_LayeredNavigation module functionality in the staging preview mode.

## Dependencies

You can find the list of modules that have dependencies on the Magento_LayeredNavigationStaging module in the `require` section of the `composer.json` file. The file is located in the root directory of the module.

## Extension points

Extension points enable extension developers to interact with the Magento_LayeredNavigationStaging module. [The Magento dependency injection mechanism](http://devdocs.magento.com/guides/v2.1/extension-dev-guide/depend-inj.html) enables you to override the functionality of the Magento_LayeredNavigationStaging module.

### Layouts

You can extend and override layouts in the `Magento/LayeredNavigationStaging/view/frontend/layout/` directory.
For more information about layouts, see the [Layout documentation](http://devdocs.magento.com/guides/v2.1/frontend-dev-guide/layouts/layout-overview.html).

## Additional information

You can track [backward incompatible changes]({{ page.baseurl }}/release-notes/backward-incompatible-changes/).

