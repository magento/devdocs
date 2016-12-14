---
layout: default
group: mrg
subgroup: Enterprise Edition
title: Module Reference Guide
menu_title: SearchStaging
menu_order: 2
version: 2.1


github_link: mrg/ee/SearchStaging.md
---

![Magento EE logo]({{site.baseurl}}common/images/ee-only_large.png)

## Overview

The Magento_SearchStaging module is a part of the staging functionality in Magento EE. It disables searching in the staging preview mode.

## Implementation details

The Magento_SearchStaging module extends the Magento_Search module functionality. It adds Search to the staging preview but disables the searching functionality.

## Dependencies

You can find the list of modules that have dependencies on the Magento_SearchStaging module in the `require` section of the `composer.json` file. The file is located in the root directory of the module.

## Extension points

Extension points enable extension developers to interact with the Magento_SearchStaging module. [The Magento dependency injection mechanism](http://devdocs.magento.com/guides/v2.1/extension-dev-guide/depend-inj.html) enables you to override the functionality of the Magento_SearchStaging module.

### Layouts

You can extend and override layouts in the `Magento/SearchStaging/view/frontend/layout/` directory.
For more information about layouts, see the [Layout documentation](http://devdocs.magento.com/guides/v2.1/frontend-dev-guide/layouts/layout-overview.html).

## Additional information

You can track [backward incompatible changes made in a Magento EE mainline after the Magento 2.0 release](http://devdocs.magento.com/guides/v2.0/release-notes/changes/ee_changes.html).
