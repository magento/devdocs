---
title: Magento_RewardStaging module
ee_only: true
---

{% include mrg/note.md %}

## Magento_RewardStaging module

## Overview

The Magento_RewardStaging module is a part of the staging functionality in Magento EE. It enables you to create updates for the Add Reward Points attribute of Sales Rules.

## Implementation details

The Magento_RewardStaging module extends the following Magento_Reward module functionality to be used in staging mode:

- Adds the ability to be staged for Add Reward Points field of Sales Rules.

## Dependencies

You can find the list of modules that have dependencies on the Magento_RewardStaging module in the `require` section of the `composer.json` file. The file is located in the root directory of the module.

## Extension points

Extension points enable extension developers to interact with the Magento_RewardStaging module. [The Magento dependency injection mechanism](http://devdocs.magento.com/guides/v2.1/extension-dev-guide/depend-inj.html) enables you to override the functionality of the Magento_RewardStaging module.

## Additional information

You can track [backward incompatible changes]({{ page.baseurl }}/release-notes/backward-incompatible-changes/).
