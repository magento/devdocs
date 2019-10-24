---
group: module-reference-guide
subgroup: 20_Enterprise Edition
ee_only: true
title: Magento_SalesRuleStaging module
menu_title: SalesRuleStaging
menu_order: 2
ee_only: true
---

The Magento_SalesRuleStaging [module](https://glossary.magento.com/module) is a part of the staging functionality in {{site.data.var.ee}}. It enables you to add sales rule updates to existing store campaigns. In other words, you can add and/or remove [sales rules](https://glossary.magento.com/sales-rules) for some period of time. These updates are shown on the campaign dashboard.

## Implementation details

The Magento_SalesRuleStaging module changes the Cart Price Rules page and the sales rule related database tables to make them compatible with the Magento Staging Framework.
The Magento_SalesRuleStaging module enables you to stage the following sales rule attributes:

-  Rule Name
-  Description
-  Websites
-  Customer Groups
-  Priority
-  Condition
-  Action

This module depends on the Magento_SalesRule module and extends its functionality. It changes the database structure of the Magento_SalesRule module and the way in which sales rules are managed.

### Installation details

Do not uninstall the Magento_SalesRuleStaging module, because it makes irreversible changes in the database during installation. Also, the Magento_SalesRule module cannot be disabled.

## Dependencies

You can find the list of modules that have dependencies on the Magento_SalesRuleStaging module in the `require` section of the `composer.json` file. The file is located in the root directory of the module.

## Extension points

[Extension](https://glossary.magento.com/extension) points enable extension developers to interact with the Magento_SalesRuleStaging. However, the Magento_SalesRuleStaging module does not provide any specific extension points.

For more information about the Magento extension mechanism, see [Magento plug-ins]({{ site.baseurl }}/guides/v2.2/extension-dev-guide/plugins.html).

[The Magento dependency injection mechanism]({{ site.baseurl }}/guides/v2.2/extension-dev-guide/depend-inj.html) enables you to override the functionality of the Magento_SalesRuleStaging module.

## Additional information

For more Magento 2 developer documentation, see [Magento 2 Developer Documentation]({{ site.baseurl }}/). Also, you can track there [backward incompatible changes made in a {{site.data.var.ee}} mainline after the Magento 2.0 release]({{ page.baseurl }}/release-notes/backward-incompatible-changes/commerce.html).
