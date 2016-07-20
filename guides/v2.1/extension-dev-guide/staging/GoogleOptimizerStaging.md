---
layout: default
group: extension-dev-guide
subgroup: 7_Staging
title: Staging in Magento 2 EE
menu_title: GoogleOptimizerStaging
menu_order: 2
version: 2.1
level3_menu_node: level3child
level3_subgroup: staging_modules
github_link: extension-dev-guide/staging/GoogleOptimizerStaging.md
---

![Magento EE logo]({{site.baseurl}}common/images/ee-only_large.png)

<h2>Contents</h2>

* TOC
{:toc}

## Magento_GoogleOptimizerStaging module

## Overview

The Magento_GoogleOptimizerStaging module is a part of the staging functionality in Magento EE. It enables you to stage values of the product metadata.

## Implementation details

The Magento_GoogleOptimizerStaging module enables you to stage parameters added by the Magento_GoogleOptimizer module in the Search Engine Optimization field set:

- Meta Title
- Meta Keywords
- Meta Description

## Dependencies

You can find the list of modules that have dependencies on the Magento_GoogleOptimizerStaging module in the `require` section of the `composer.json` file. The file is located in the root directory of the module.

## Extension points

[The Magento dependency injection mechanism](http://devdocs.magento.com/guides/v2.1/extension-dev-guide/depend-inj.html) enables you to override the functionality of the Magento_GoogleOptimizerStaging module.

## Additional information

You can track [backward incompatible changes made in a Magento EE mainline after the Magento 2.0 release](http://devdocs.magento.com/guides/v2.0/release-notes/changes/ee_changes.html).
