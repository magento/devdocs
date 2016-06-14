---
layout: default
group: extension-dev-guide
subgroup: 7_Staging
title: Staging in Magento 2 EE
menu_title: RmaStaging
menu_order: 2
level3_menu_node: level3child
level3_subgroup: staging_modules
github_link: extension-dev-guide/staging/RmaStaging.md
---

![Magento EE logo]({{site.baseurl}}common/images/ee-only_large.png)

<h2>Contents</h2>

* TOC
{:toc}

## Magento_RmaStaging module

## Overview

The Magento_RmaStaging module is a part of the staging functionality in Magento EE. It enables you to create updates for the parameters of the Autosettings field set of a product.

RMA stands for a return merchandise authorization.

## Implementation Details

The Magento_RmaStaging module extends the following Magento_Rma module functionality to be used in staging mode:

- Adds the Autosettings field set to the Schedule update form of a product.

## Dependencies

You can find the list of modules that have dependencies on the Magento_RmaStaging module in the `require` section of the `composer.json` file. The file is located in the root directory of the module.

## Extension Points

Extension points enable extension developers to interact with the Magento_RmaStaging module. [The Magento dependency injection mechanism](http://devdocs.magento.com/guides/v2.1/extension-dev-guide/depend-inj.html) enables you to override the functionality of the Magento_RmaStaging module.

## Additional information

For more Magento 2 developer documentation, see [Magento 2 Developer Documentation](http://devdocs.magento.com). Also, there you can track [backward incompatible changes made in a Magento EE mainline after the Magento 2.0 release](http://devdocs.magento.com/guides/v2.1/release-notes/changes/ee_changes.html).