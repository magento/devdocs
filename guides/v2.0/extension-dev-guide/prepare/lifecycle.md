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

---

### Schema and Data Initialization

When your module is installed, re-installed, or upgraded, it goes through an initialization process for both schema and data.

For schema initialization, your module goes through the following phases:

1. [Schema installation](#schema-installation-phase)
2. [Schema upgrade](#schema-upgrade-phase)
3. [Schema recurring](#schema-recurring-phase)

After the schema initialization completes, your module goes through the data initialization phases:

1. [Data installation](#data-installation-phase)
2. [Data upgrade](#data-upgrade-phase)
3. [Data recurring](#data-recurring-phase)

---

### Lifecycle Class Rules

In order for Magento to detect the classes you are using to hook into the different lifecycle phases, you must follow these standards:

* The class should be in the `Setup` folder in your module's root directory.
* The class must use the specific name for the phase it will be executed in; e.g. `InstallSchema`, `InstallData`, etc.
* The class must implement the specific class interface for the phase it will be executed in.

See each provided example below to get the correct name and class interface to use for your lifecycle classes.

### Installation Phases

The installation phase of your module lifecycle occurs when it is initially installed or reinstalled. This happens after your extension has been automatically installed from the [Magento Marketplace](https://www.magentocommerce.com/magento-connect){:target="_blank"} or manually installed with the command: `bin/magento setup:upgrade`.

If the `schema_version` of the module is present in the database, then the following two phases are skipped because it is assumed that the module schema and data has already been initialized in a previous installation. When a phase is skipped, your module will move on to the [Upgrade phase](#upgrade-phase).

#### Schema Installation Phase
The schema installation phase is the first phase your module goes through when it is initially installed. During this phase, the `install` function will be executed in the `InstallSchema` class implementing the `\Magento\Framework\Setup\InstallSchemaInterface`:

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

When the schema installation phase completes, your module will continue to the [Schema Upgrade phase](#schema-upgrade-phase).

#### Data Installation Phase

The data installation phase occurs only after your module has completed the Schema Installation, Schema Upgrade, and Schema Recurring phases. The purpose of this phase is to add initial data to the database for your module.

During this phase, the `install` function will be executed in the `InstallData` class implementing the `Magento\Framework\Setup\InstallDataInterface`:

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

When the data installation phase completes, your module will continue to the [Data Upgrade phase](#data-upgrade-phase).

---

### Upgrade Phases

The Upgrade phases always occurs after the [Installation phases](#installation-phases) successfully runs. If the Schema or Data Installation phase was skipped because it detected a previous installation, Magento will check the current module's version to see if it should run the Upgrade phase or skip to the [Recurring Phases](#recurring-phases).

#### Schema Upgrade Phase

The Schema Upgrade phase runs after the [Schema Installation phase](#schema-installation-phase)(whether the installation phase occurred or not) and when current version is out of date. The purpose of the Schema Upgrade phase is usually to update the database structure.

During this phase, the `upgrade` function will be executed in the `UpgradeSchema` class implementing the  `Magento\Framework\Setup\UpgradeSchemaInterface`:

~~~
// Location: <module_root_directory>/Setup/UpgradeSchema.php

class \<Vendor>\<Module>\Setup\UpgradeSchema implements \Magento\Framework\Setup\UpgradeSchemaInterface
{
    /**
     * {@inheritdoc}
     */
    public function upgrade(SchemaSetupInterface $setup, ModuleContextInterface $context)
    {
        ...
    }
}
~~~

When the schema upgrade phase completes, your module will continue to the [Schema Recurring Phase](#schema-recurring-phase).

#### Data Upgrade Phase

The data upgrade phase runs after the [data installation phase](#data-installation-phase) and when version is more current than the installed version. The purpose of the data upgrade phase is usually to fix data that has been corrupted or populate a new data field from a schema change.

During this phase, the `upgrade` function will be executed in the `UpgradeData` class implementing the  `Magento\Framework\Setup\UpgradeDataInterface`:

~~~
//<module_root_directory>/Setup/UpgradeData.php

class \<Vendor>\<Module>\Setup\UpgradeData implements \Magento\Framework\Setup\UpgradeDataInterface
{
    /**
     * {@inheritdoc}
     */
    public function upgrade(ModuleDataSetupInterface $setup, ModuleContextInterface $context);
    {
        ...
    }
}
~~~

When the data upgrade phase completes, your module will continue to the [data recurring phase](#data-recurring-phase).

---

### Recurring Phase

During the install, re-install, and upgrade process, the recurring phases are always the last phases your module will go through for schema and data. This phase is run regardless of whether any of the previous phases have executed.

#### Schema Recurring Phase

Your module goes through the schema recurring phase following the schema [installation](#schema-installation-phase) and [upgrade](#schema-upgrade-phase) phases. The purpose of this phase is usually to do final modifications to the database schema after the schema has been installed or updated.

During this phase, the `install` function will be executed in the Recurring class implementing the `Magento\Framework\Setup\InstallSchemaInterface`:

~~~
// Location: <module_root_directory>/Setup/Recurring.php

class \<Vendor>\<Module>\Setup\Recurring implements \Magento\Framework\Setup\InstallSchemaInterface
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

When the schema recurring phase has completed, your module's schema is fully initialized and updated. The next phase it goes through is the [data intallation phase](#data-installation-phase) which begins the data initialization process.

#### Data Recurring Phase

Your module goes through the data recurring phase after the data [installation](#data-installation-phase) and [upgrade](#data-upgrade-phase) phases. The purpose of this phase is usually to do final modifications to the database store after data has been installed or updated.

During this phase, the `install` function will be executed in the `RecurringData` class implementing the `Magento\Framework\Setup\InstallDataInterface`:

~~~
// Location: <module_root_directory>/Setup/RecurringData.php

class \<Vendor>\<Module>\Setup\RecurringData implements \Magento\Framework\Setup\InstallDataInterface
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

When the data recurring phase has completed, your module's data store is fully initialized and updated. The next phase for your module is the [working phase](#working-phase).

---

### Working Phase

The working phase occurs after your module has been [installed](#installation-phases) or [upgraded](#upgrade-phases). In this phase, your module's core code is executed by the Magento application to perform its business function. For most of its lifetime, your module will be in this phase until it is disabled or  [uninstalled](#uninstall-phases).

---

### Uninstall Phase

The uninstall phase begins when you uninstall your module using the [Component Manager](#{{site.gdeurl}}comp-mgr/compman-uninst.html) or by running the command `bin/magento module:uninstall --remove-data <module_name>`.

In this phase, your module should remove all traces of its existence in the database; e.g. dropping tables, deleting data, or restoring data.

During this phase, the `uninstall` function will be executed in the `Uninstall` class implementing the `Magento\Framework\Setup\UninstallInterface`:

~~~
// Location: <module_root_directory>/Setup/Uninstall.php

class \<Vendor>\<Module>\Setup\Uninstall implements \Magento\Framework\Setup\UninstallInterface
{
    /**
     * {@inheritdoc}
     */
    public function uninstall(SchemaSetupInterface $setup, ModuleContextInterface $context)
    {
        ...
    }
}
~~~

<div class="bs-callout bs-callout-warning" id="uninstall-disabled">
  <b>Uninstalling disabled modules</b>
  <p>A disabled module's uninstall routine can still be invoked when it is uninstalled. This means that module specific configurations such as dependency injection configurations and event/observer configurations will not be available and can cause problems. To avoid this, uninstall classes should not have dependencies on them.</p>
</div>

---

**Related Topics**
