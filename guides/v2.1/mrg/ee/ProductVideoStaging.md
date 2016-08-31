---
layout: default
group: mrg
subgroup: Enterprise Edition
title: Module Reference Guide
menu_title: ProductVideoStaging
menu_order: 2
version: 2.1
level3_menu_node: level3child
level3_subgroup: ee_modules
github_link: mrg/ee/ProductVideoStaging.md
---

![Magento EE logo]({{site.baseurl}}common/images/ee-only_large.png)

<h2>Contents</h2>

* TOC
{:toc}

## Magento_ProductVideoStaging module

## Overview

The Magento_ProductVideoStaging module is a part of the staging functionality in Magento EE. It enables you to add or remove a video to a product update.

## Implementation details

The Magento_ProductVideoStaging module extends the Magento_ProductVideo functionality to be used in staging. It adds an "Add Video" button to the Schedule Update form and supports a New Video form in staging mode.

## Dependencies

You can find the list of modules that have dependencies on the Magento_ProductVideoStaging module in the `require` section of the `composer.json` file. The file is located in the root directory of the module.

## Extension points

Extension points enable extension developers to interact with the Magento_ProductVideoStaging module. [The Magento dependency injection mechanism](http://devdocs.magento.com/guides/v2.1/mrg/depend-inj.html) enables you to override the functionality of the Magento_ProductVideoStaging module.

### Layouts

You can extend and override layouts in the `app/code/Magento/ProductVideoStaging/view/adminhtml/layout` directory.
For more information about layouts, see the [Layout documentation](http://devdocs.magento.com/guides/v2.1/frontend-dev-guide/layouts/layout-overview.html).

## Additional information

You can track [backward incompatible changes made in a Magento EE mainline after the Magento 2.0 release](http://devdocs.magento.com/guides/v2.0/release-notes/changes/ee_changes.html).
