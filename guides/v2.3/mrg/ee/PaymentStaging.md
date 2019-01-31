---
title: Magento_PaymentStaging module
ee_only: true
---

{% include mrg/note.md %}

## Magento Magento_PaymentStaging Module

## Overview

The Magento_PaymentStaging module is a part of the staging functionality in Magento EE. It extends the Magento_Payment module for the staging preview functionality.

## Implementation details

The Magento_PaymentStaging module restricts functionality of the Magento_Payment module in the staging preview mode. It shows only offline payment methods that are enabled.

## Dependencies

You can find the list of modules that have dependencies on the Magento_PaymentStaging module in the `require` section of the `composer.json` file. The file is located in the root directory of the module.

## Extension points

Extension points enable extension developers to interact with the Magento_PaymentStaging module. For more information about the Magento extension mechanism, see [Magento plug-ins]({{ site.baseurl }}/guides/v2.1/extension-dev-guide/plugins.html).

[The Magento dependency injection mechanism]({{ site.baseurl }}/guides/v2.1/extension-dev-guide/depend-inj.html) enables you to override the functionality of the Magento_PaymentStaging module.

## Additional information

You can track [backward incompatible changes made in a Magento EE mainline after the Magento 2.0 release]({{ site.baseurl }}/guides/v2.0/release-notes/changes/ee_changes.html).

