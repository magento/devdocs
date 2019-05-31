---
title: Magento_RmaStaging module
ee_only: true
---

{% include mrg/note.md %}

## Magento_RmaStaging module

## Overview

The Magento_RmaStaging module is a part of the staging functionality in Magento EE. It enables you to create updates for the parameters of the Autosettings field set of a product.

RMA stands for a return merchandise authorization.

## Implementation details

The Magento_RmaStaging module extends the following Magento_Rma module functionality to be used in staging mode:

- Adds the Autosettings field set to the Schedule update form of a product.

## Dependencies

You can find the list of modules that have dependencies on the Magento_RmaStaging module in the `require` section of the `composer.json` file. The file is located in the root directory of the module.

## Extension points

Extension points enable extension developers to interact with the Magento_RmaStaging module. [The Magento dependency injection mechanism](http://devdocs.magento.com/guides/v2.1/extension-dev-guide/depend-inj.html) enables you to override the functionality of the Magento_RmaStaging module.

## Additional information

You can track [backward incompatible changes]({{ page.baseurl }}/release-notes/backward-incompatible-changes/).
