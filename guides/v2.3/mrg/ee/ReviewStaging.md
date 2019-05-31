---
title: Magento_ReviewStaging module
ee_only: true
---

{% include mrg/note.md %}

## Magento_ReviewStaging module

## Overview

The Magento_ReviewStaging module is a part of the staging functionality in Magento EE. It displays the Product Reviews grid on the Schedule Update form.

## Implementation details

The Magento_ReviewStaging module extends the following Magento_Review module functionality to be used in staging mode:

- Adds Product Reviews grid on the Schedule Update form. 

NOTE You cannot create an update for a product review.

## Dependencies

You can find the list of modules that have dependencies on the Magento_ReviewStaging module in the `require` section of the `composer.json` file. The file is located in the root directory of the module.

## Extension points

Extension points enable extension developers to interact with the Magento_ReviewStaging module. For more information about the Magento extension mechanism, see [Magento plug-ins](http://devdocs.magento.com/guides/v2.1/extension-dev-guide/plugins.html).

[The Magento dependency injection mechanism](http://devdocs.magento.com/guides/v2.1/extension-dev-guide/depend-inj.html) enables you to override the functionality of the Magento_ReviewStaging module.

### Layouts

You can extend and override layouts in the `Magento\ReviewStaging\view\adminhtml\layout` directory.
For more information about layouts, see the [Layout documentation](http://devdocs.magento.com/guides/v2.1/frontend-dev-guide/layouts/layout-overview.html).

## Additional information

You can track [backward incompatible changes]({{ page.baseurl }}/release-notes/backward-incompatible-changes/).
