---
title: Magento_ProductVideoStaging module
ee_only: true
---

{% include mrg/note.md %}

## Magento_ProductVideoStaging module

## Overview

The Magento_ProductVideoStaging module is a part of the staging functionality in Magento EE. It enables you to add or remove a video to a product update.

## Implementation details

The Magento_ProductVideoStaging module extends the Magento_ProductVideo functionality to be used in staging. It adds an "Add Video" button to the Schedule Update form and supports a New Video form in staging mode.

## Dependencies

You can find the list of modules that have dependencies on the Magento_ProductVideoStaging module in the `require` section of the `composer.json` file. The file is located in the root directory of the module.

## Extension points

Extension points enable extension developers to interact with the Magento_ProductVideoStaging module. [The Magento dependency injection mechanism](http://devdocs.magento.com/guides/v2.1/extension-dev-guide/depend-inj.html) enables you to override the functionality of the Magento_ProductVideoStaging module.

### Layouts

You can extend and override layouts in the `app/code/Magento/ProductVideoStaging/view/adminhtml/layout` directory.
For more information about layouts, see the [Layout documentation](http://devdocs.magento.com/guides/v2.1/frontend-dev-guide/layouts/layout-overview.html).

## Additional information

You can track [backward incompatible changes]({{ page.baseurl }}/release-notes/backward-incompatible-changes/).
