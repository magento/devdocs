---
title: Magento_MsrpStaging module
ee_only: true
---

{% include mrg/note.md %}

## Magento_MsrpStaging module

## Overview

The Magento_MsrpStaging module is a part of the staging functionality in Magento EE. It enables you to stage the manufacturer's suggested retail price.

## Implementation details

The Magento_MsrpStaging module extends the Magento_Msrp module to be used in staging. It adds the following fields in the Advice Pricing form:

- Manufacturer's Suggested Retail Price
- Display Actual Price

## Dependencies

You can find the list of modules that have dependencies on the Magento_MsrpStaging module in the `require` section of the `composer.json` file. The file is located in the root directory of the module.

## Extension points

[The Magento dependency injection mechanism]({{site.baseurl}}/guides/v2.1/extension-dev-guide/depend-inj.html) enables you to override the functionality of the Magento_MsrpStaging module.

## Additional information

You can track [backward incompatible changes made in a Magento EE mainline after the Magento 2.0 release]({{site.baseurl}}/guides/v2.0/release-notes/changes/ee_changes.html).
