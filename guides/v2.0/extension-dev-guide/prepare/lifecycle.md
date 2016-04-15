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

### Installation Phases

The installation phase of your module lifecycle occurs when it is initially installed or reinstalled. This happens after your extension has been automatically installed from the [Magento Marketplace](https://www.magentocommerce.com/magento-connect){:target="_blank"} or manually installed with the command: `bin/magento setup:upgrade`.

If the `schema_version` of the module is present in the database, then the following two phases are skipped because it is assumed that the module schema and data has already been initialized in a previous installation. When a phase is skipped, your module will move on to the Schema or Data Upgrade phase.

#### Schema Installation Phase
The schema installation phase is the first phase your module goes through when it is initially installed. During this phase, the `install` function will be executed for any class that implement `\Magento\Framework\Setup\InstallSchemaInterface`:

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

When the schema installation phase completes, your module will continue to the Schema Upgrade phase.

---

#### Data Installation Phase

The data installation phase occurs only after your module has completed the Schema Installation, Schema Upgrade, and Schema Recurring phases. The purpose of this phase is to add initial data to the database for your module.

Duing this phase, the `install` function will be executed for any class that implement `Magento\Framework\Setup\InstallDataInterface`:

~~~
// Location: <module_root_directory>/Setup/InstallData.php

class \<Vendor>\<Module>\Setup\InstallData implements \Magento\Framework\Setup\InstallDataInterface
{
    /**
     * {@inheritdoc}
     */
    public function install(ModuleDataSetupInterface $setup, ModuleContextInterface $context)
    {
        ...
    }
}

~~~

When the data installation phase completes, your module will continue to the Data Upgrade phase.

### Upgrade Phase

Upgrade phase content.

#### Schema Upgrade Phase

#### Data Upgrade Phase

### Recurring Phase

These are run in every install.

#### Schema Recurring Phase

#### Data Recurring Phase

### Working Phase

Working phase content.

### Uninstall Phase

Unintstall phase content.

#### Uninstall vs Disable

### Lifecycle Class Requirements

* Follow namespace standards
* Place in appropriate folder locations

---

**Related Topics**
