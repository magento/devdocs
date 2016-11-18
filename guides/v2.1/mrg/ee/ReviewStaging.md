---
layout: default
group: mrg
subgroup: Enterprise Edition
title: Module Reference Guide
menu_title: ReviewStaging
menu_order: 2
version: 2.1


github_link: mrg/ee/ReviewStaging.md
---

![Magento EE logo]({{site.baseurl}}common/images/ee-only_large.png)

<h2>Contents</h2>


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

You can track [backward incompatible changes made in a Magento EE mainline after the Magento 2.0 release](http://devdocs.magento.com/guides/v2.0/release-notes/changes/ee_changes.html).
