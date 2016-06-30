---
layout: default
group: extension-dev-guide
subgroup: 7_Staging
title: Staging in Magento 2 EE
menu_title: WeeeStaging
menu_order: 2
version: 2.1
level3_menu_node: level3child
level3_subgroup: staging_modules
github_link: extension-dev-guide/staging/WeeeStaging.md
---

![Magento EE logo]({{site.baseurl}}common/images/ee-only_large.png)

<h2>Contents</h2>

* TOC
{:toc}

## Magento_WeeeStaging module

## Overview

The Magento_WeeeStaging module is a part of the staging functionality in Magento EE. It enables you to stage a value of Fixed Product Tax.

## Implementation details

The Magento_WeeeStaging module extends the following Magento_Weee module functionality to be used in staging:

- adds an opportunity to schedule a Fixed Product Tax type attribute using the Schedule Update form of a product

## Dependencies

You can find the list of modules that have dependencies on the Magento_WeeeStaging module in the `require` section of the `composer.json` file. The file is located in the root directory of the module.

## Extension points

Extension points enable extension developers to interact with the Magento_WeeeStaging module. [The Magento dependency injection mechanism](http://devdocs.magento.com/guides/v2.1/extension-dev-guide/depend-inj.html) enables you to override the functionality of the module.

[The Magento dependency injection mechanism](http://devdocs.magento.com/guides/v2.1/extension-dev-guide/depend-inj.html) enables you to override the functionality of the Magento_WeeeStaging module

## Additional information

You can track [backward incompatible changes made in a Magento EE mainline after the Magento 2.0 release](http://devdocs.magento.com/guides/v2.0/release-notes/changes/ee_changes.html).