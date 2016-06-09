---
layout: default
group: extension-dev-guide
subgroup: 02_Prepare
title: Extension Lifecycle
menu_title: Extension lifecycle
menu_order: 100
version: 2.1
github_link21: extension-dev-guide/prepare/lifecycle.md
---

##{{page.title}}
{:.no_toc}

* TOC
{:toc}

### Overview

This article describes your module's lifecycle and how you can create executable classes that will run when it is initialized or uninstalled. During initialization or uninstallation, these classes can perform database setup tasks, upgrade tasks, clean up tasks, and so on.

<div class="bs-callout bs-callout-info" id="other-component-types">
  <p>Since theme components and language packages generally do not need to install a database schema or update data in the database, they do not need to worry about initialization or uninstallation tasks.</p>
</div>

### Lifecycle class rules

Magento will detect the classes you are using to hook into the different lifecycle stages when you follow these rules:

* The class should be in the `Setup` directory in your module's root directory with the appropriate file name. For the correct file name, please see the specific examples below.
* The class must use the specific name for the phase in which it will be executed in. To determine the correct class name to use, please see the specific examples below.
* The class must implement the specific class interface for the phase in which it will be executed in. To determine the correct interface to use, please see the specific examples below.
* The version you use in your module should follow our [versioning policy]({{site.gdeurl21}}architecture/versioning.html).

### Schema initialization

Schema initialization is the first process your module goes through when it is installed, re-installed, or upgraded.

#### Schema installation

When your module is initially installed, the first thing your modules does is perform a schema installation by executing its installation class.

If the `schema_version` of the module is found in the `setup_modules` table, then this stage will be skipped because it is assumed that the module schema has already been initialized in a previous installation.

For example, if you are installing version 2.0.0 of your module and there have been no previous installations of your module, then schema installation will proceed. Otherwise, schema installation will be skipped and your module will begin a [schema upgrade](#schema-upgrade).

During a schema installation, the `install` function will be executed in the `InstallSchema` class implementing the [`\Magento\Framework\Setup\InstallSchemaInterface`]({{site.mage2100url}}lib/internal/Magento/Framework/Setup/InstallSchemaInterface.php){:target="_blank"}:

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

#### Schema upgrade

If your module already has an earlier version installed in Magento, then it will perform a schema upgrade instead of an installation. The purpose of a schema upgrade is usually to update the database structure or apply patches.

For example, when a new 2.0.1 version of your module is installed over a previous 2.0.0 version, your module will perform a schema upgrade instead of a [schema installation](#schema-installation).

During a schema upgrade, the `upgrade` function will be executed in the `UpgradeSchema` class implementing the  [`Magento\Framework\Setup\UpgradeSchemaInterface`]({{site.mage2100url}}lib/internal/Magento/Framework/Setup/UpgradeSchemaInterface.php){:target="_blank"}:

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

#### Recurring schema event

You can create a class in your module that will be run every time after schema installation or upgrade. The purpose of running code in this final stage of schema initialization is usually to do final modifications to the database schema after it has been installed or updated.

During this event, the `install` function will be executed in the `Recurring` class implementing the [`\Magento\Framework\Setup\InstallSchemaInterface`]({{site.mage2100url}}lib/internal/Magento/Framework/Setup/InstallSchemaInterface.php){:target="_blank"}:

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

### Data initialization

After your module's schema has been initialized, your module will go through the same process for data initialization.

#### Data installation

Just like with [schema installation](#schema-installation), this stage will run only during the initial installation of your module. The purpose of data installation is usually to populate the database with initial data for your module.

During data installation, the `install` function will be executed in the `InstallData` class implementing the [`Magento\Framework\Setup\InstallDataInterface`]({{site.mage2100url}}lib/internal/Magento/Framework/Setup/InstallDataInterface.php){:target="_blank"}:

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

#### Data upgrade

Just like the [schema-upgrade](#schema-upgrade) stage, data upgrade only occurs when Magento detects a previous installation. The purpose of this stage is usually to fix data that has been corrupted or populate a new data field from a schema change.

During a data upgrade, the `upgrade` function will be executed in the `UpgradeData` class implementing the  [`Magento\Framework\Setup\UpgradeDataInterface`]({{site.mage2100url}}lib/internal/Magento/Framework/Setup/UpgradeDataInterface.php){:target="_blank"}:

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

#### Recurring data event

You can create a class that will run after every data installation or upgrade. The purpose of the class is usually to do final modifications to the database store after data has been installed or updated.

During this event, the `install` function will be executed in the `RecurringData` class implementing the [`Magento\Framework\Setup\InstallDataInterface`]({{site.mage2100url}}lib/internal/Magento/Framework/Setup/InstallDataInterface.php){:target="_blank"}:

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

### Setup resource models

Magento provides [`ModuleDataSetupInterface`]({{site.mage2100url}}lib/internal/Magento/Framework/Setup/ModuleDataSetupInterface.php){:target="_blank"} and [`ModuleContextInterface`]({{site.mage2100url}}lib/internal/Magento/Framework/Setup/ModuleContextInterface.php){:target="_blank"} to assist with database manipulations. However, if the installation/upgrade is too complex, more classes may be created to handle all the logic. In these cases, you can pass the `ModuleDataSetupInterface` resource to other classes that may require DB manipulations.

~~~
class InstallData implements InstallDataInterface
{
    /**
     * @var CustomerFactory
     */
    private $customerSetupFactory;

    /**
     * @param CustomerFactory $customerSetupFactory
     */
    public function __construct(CustomerFactory $customerSetupFactory)
    {
        $this->customerSetupFactory = $customerSetupFactory;
    }

    /**
     * {@inheritdoc}
     */
    public function install(ModuleDataSetupInterface $setup, ModuleContextInterface $context)
    {
        /** @var Customer $customerSetup */
        $customerSetup = $this->customerSetupFactory->create(['setup' => $setup]);

        $setup->startSetup();
        $customerSetup->installEntities();
        ...
    }
}
~~~

### Module context

To add more logic to your install/upgrade classes, you can use the  [`ModuleContextInterface`]({{site.mage2100url}}lib/internal/Magento/Framework/Setup/ModuleContextInterface.php){:target="_blank"} provided by Magento. The context provides module information, such as current module version, to help add logic to your class.

~~~
class \Magento\Cms\Setup\InstallData implements \Magento\Framework\Setup\UpgradeDataInterface
{
   public function upgrade(ModuleDataSetupInterface $setup, ModuleContextInterface $context)
   {
        if (version_compare($context->getVersion(), '1.0.0', '<')) {
            ...
        }
   }
}
~~~

### Uninstall event

The uninstall event begins when you uninstall your module using the [Component Manager]({{site.gdeurl21}}comp-mgr/compman-uninst.html) or by running the command `bin/magento module:uninstall --remove-data <module_name>`.

In this stage, your module should remove all traces of its existence in the database; e.g. dropping tables, deleting data, or restoring data.

During this stage, the `uninstall` function will be executed in the `Uninstall` class implementing the [`Magento\Framework\Setup\UninstallInterface`]({{site.mage2100url}}lib/internal/Magento/Framework/Setup/UninstallInterface.php){:target="_blank"}:

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
  <p>A disabled module's uninstall routine can still be invoked when it is uninstalled. This means that module specific configurations such as dependency injection configurations and event/observer configurations will not be available and can cause problems. To avoid this, uninstall classes should not have dependencies on them.</p>
</div>

**Related Topics**

* [Versioning policy]({{site.gdeurl21}}architecture/versioning.html)
