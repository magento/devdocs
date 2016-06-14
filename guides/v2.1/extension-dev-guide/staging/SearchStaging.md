---
layout: default
group: extension-dev-guide
subgroup: 7_Staging
title: Staging in Magento 2 EE
menu_title: SearchStaging
menu_order: 2
level3_menu_node: level3child
level3_subgroup: staging_modules
github_link: extension-dev-guide/staging/SearchStaging.md
---

![Magento EE logo]({{site.baseurl}}common/images/ee-only_large.png)

<h2>Contents</h2>

* TOC
{:toc}

## Magento_SearchStaging module

## Overview

The Magento_SearchStaging module is a part of the staging functionality in Magento EE. It disables searching in the staging preview mode.

## Implementation Details

The Magento_SearchStaging module extends the Magento_Search module functionality. It adds Search to the staging preview but disables the searching functionality.

## Dependencies

You can find the list of modules that have dependencies on the Magento_SearchStaging module in the `require` section of the `composer.json` file. The file is located in the root directory of the module.

## Extension Points

Extension points enable extension developers to interact with the Magento_SearchStaging module. [The Magento dependency injection mechanism](http://devdocs.magento.com/guides/v2.1/extension-dev-guide/depend-inj.html) enables you to override the functionality of the Magento_SearchStaging module.

### Layouts

You can extend and override layouts in the `Magento/SearchStaging/view/frontend/layout/` directory.
For more information about layouts, see the [Layout documentation](http://devdocs.magento.com/guides/v2.1/frontend-dev-guide/layouts/layout-overview.html).

## Additional information

You can track [backward incompatible changes made in a Magento EE mainline after the Magento 2.0 release](http://devdocs.magento.com/guides/v2.0/release-notes/changes/ee_changes.html).
