---
title: Magento_SalesRuleStaging module
ee_only: true
---

{% include mrg/note.md %}

<h2>Magento_SalesRuleStaging module</h2>

## Overview

The Magento_SalesRuleStaging module is a part of the staging functionality in Magento EE. It enables you to create new sales rule updates or add new changes to the existing store updates. In other words, you can modify the sales rules in updates. These updates are shown on the content dashboard.

## Implementation Details

The Magento_SalesRuleStaging module changes the Cart Price Rules page and the sales rule related database tables to make them compatible with the Magento Staging Framework.
The Magento_SalesRuleStaging module enables you to stage the following sales rule attributes:

- Rule Name
- Description
- Websites
- Customer Groups
- Priority
- Condition
- Action

This module depends on the Magento_SalesRule module and extends its functionality. It changes database structure of the Magento_SalesRule module and the way in which sales rules are managed.

### Installation Details

Do not uninstall the Magento_SalesRuleStaging module, because it makes irreversible changes in the database during installation. Also, the Magento_SalesRule module cannot be disabled.

## Dependencies

You can find the list of modules that have dependencies with the Magento_SalesRuleStaging module in the `require` object of the `composer.json` file located in the same directory as this `README` file.

## Extension Points

Extension points enable extension developers to interact with the Magento_SalesRuleStaging. However, the Magento_SalesRuleStaging module does not provide any specific extension points.

For more information about Magento extension mechanism, see [Magento plug-ins]({{ page.baseurl }}/extension-dev-guide/plugins.html).

[Magento dependency injection mechanism]({{ page.baseurl }}/extension-dev-guide/depend-inj.html) enables you to override the functionality of the Magento_SalesRuleStaging module.

## Additional information

For more Magento 2 developer documentation, see [Magento 2 Developer Documentation](http://devdocs.magento.com). Also, you can track there [backward incompatible changes made in a Magento EE mainline after the Magento 2.0 release](http://devdocs.magento.com/guides/v2.0/release-notes/changes/ee_changes.html).

