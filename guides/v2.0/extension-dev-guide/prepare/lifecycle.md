---
layout: default
group: extension-dev-guide
subgroup: 02_Prepare
title: Extension Lifecycle
menu_title: Extension lifecycle
menu_order: 100
github_link: extension-dev-guide/prepare/lifecycle.md
---

##{{page.title}}
{:.no_toc}

* TOC
{:toc}

### Overview

Your extension's lifecycle is the series of phases it goes through while it is associated with the Magento application. The module extension type is the only type that need to worry about lifecycle phases. During each of these phases, your extension's modules can perform database initialization tasks, upgrade tasks, clean up tasks, etc.

<div class="bs-callout bs-callout-info" id="other-extension-types">
  <b>Other Extension Types</b>
  <p>Since theme extensions and language packages generally do not need to install a database schema or update data in the database, they do not need to worry about their lifecycle phases.</p>
</div>

### Installation Phase

The installation phase of your module lifecycle occurs when it is initially installed or reinstalled. This happens after your extension has been automatically installed from the [Magento Marketplace](https://www.magentocommerce.com/magento-connect){:target="_blank"} or manually installed with the command: `bin/magento setup:upgrade`.

However, if the `schema_version` of the module is present in the database, then this phase is skipped because it is assumed that the module has been initialized in a previous installation.

During the installation phase, the `install` function will be executed for any class that implement `\Magento\Framework\Setup\InstallSchemaInterface`:

~~~
// File Location: <module_root_directory>/Setup/InstallSchema.php

class \<Vendor>\<Module>\Setup\InstallSchema implements \Magento\Framework\Setup\InstallSchemaInterface
{
    /**
     * {@inheritdoc}
     */
    public function install(SchemaSetupInterface $setup, ModuleContextInterface $context)
    {
        ...
    }
}
~~~

#### Post-installation

Data initialization is done.

### Working Phase

Working phase content.

### Upgrade Phase

Upgrade phase content.

#### Recurring Tasks

These are run in every install.

#### Post-upgrade

Data upgrades are run.

### Uninstall Phase

Unintstall phase content.

#### Uninstall vs Disable

### Lifecycle Class Requirements

* Follow namespace standards
* Place in appropriate folder locations

---

**Related Topics**
