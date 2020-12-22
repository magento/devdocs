---
group: php-developer-guide
title: Extension Lifecycle
menu_title: Extension lifecycle
---

This topic describes a module's lifecycle and how to create classes that execute code when your module is initialized, upgraded, or uninstalled.
These executable classes can perform tasks that set up the database, update data, and clean up data.

*Note:* Theme and language package extensions do not need initialization or uninstallation tasks because they do not install database schemas or update data.

## Lifecycle guidelines

Follow these guidelines when developing your executable classes to have them run during specific lifecycle stages:

*  Put your executable class in the `Setup` directory inside your module's root directory.
*  Use the specific file and class name for your class's target lifecycle stage.
*  Implement the specific class interface and function for your class's target stage.
*  Follow Magento's [versioning policy] when changing your module's version.

## Schema initialization stages

The schema initialization stages are the first set of processes Magento runs when your module is installed, re-installed, or upgraded.

### Schema installation

Magento executes the schema installation class during your module's initial install.
If the `schema_version` for your module is found in the `setup_module` table, Magento skips this stage and proceeds to the [schema upgrade] stage.

| **Class name:** | `InstallSchema`            |
| **Interface:**  | [`InstallSchemaInterface`] |
| **Method:**     | `install()`                |

**Example:** InstallSchema.php

```php
class VendorName\ModuleName\Setup\InstallSchema implements \Magento\Framework\Setup\InstallSchemaInterface
{
    /**
     * {@inheritdoc}
     */
    public function install(SchemaSetupInterface $setup, ModuleContextInterface $context)
    {
        //Install schema logic
    }
}
```

### Schema upgrade

Magento executes your module's schema upgrade class when it detects an earlier installation.
The purpose of this class is to update the database structure or apply patches.

| **Class name** | `UpgradeSchema`            |
| **Interface**  | [`UpgradeSchemaInterface`] |
| **Method**     | `upgrade()`                |

**Example:** UpgradeSchema.php

```php
class \VendorName\ModuleName\Setup\UpgradeSchema implements \Magento\Framework\Setup\UpgradeSchemaInterface
{
    /**
     * {@inheritdoc}
     */
    public function upgrade(SchemaSetupInterface $setup, ModuleContextInterface $context)
    {
        //Upgrade schema logic
    }
}
```

### Recurring schema event

Magento executes your module's recurring schema event class after every schema installation or upgrade stage.
This class makes final modifications to the database schema after it has been installed or updated.

| **Class name** | `Recurring`                |
| **Interface**  | [`InstallSchemaInterface`] |
| **Method**     | `install()`                |

**Example:** Recurring.php

```php
class \VendorName\ModuleName\Setup\Recurring implements \Magento\Framework\Setup\InstallSchemaInterface
{
    /**
     * {@inheritdoc}
     */
    public function install(SchemaSetupInterface $setup, ModuleContextInterface $context)
    {
        //Recurring schema event logic
    }
}
```

## Data initialization

Magento goes through your module's data initialization stages after the schema initialization processes complete.

### Data installation

Magento executes the data installation class during your module's initial install unless an existing version entry is found in the database.
The purpose of this class is to populate the database with initial data.

| **Class name** | `InstallData`            |
| **Interface**  | [`InstallDataInterface`] |
| **Method**     | `install()`              |

**Example:** InstallData.php

```php
class \VendorName\ModuleName\Setup\InstallData implements \Magento\Framework\Setup\InstallDataInterface
{
    /**
     * {@inheritdoc}
     */
    public function install(ModuleDataSetupInterface $setup, ModuleContextInterface $context)
    {
        // Data install logic
    }
}
```

### Data upgrade

Magento executes the data upgrade class when it detects an earlier version in the `data_version` field for the module in the `setup_module` table.
The purpose of this class is to fix corrupted data or populate a new data field after a schema change.

| **Class name** | `UpgradeData`            |
| **Interface**  | [`UpgradeDataInterface`] |
| **Method**     | `upgrade()`              |

**Example:** UpgradeData.php

```php
class \VendorName\ModuleName\Setup\UpgradeData implements \Magento\Framework\Setup\UpgradeDataInterface
{
    /**
     * {@inheritdoc}
     */
    public function upgrade(ModuleDataSetupInterface $setup, ModuleContextInterface $context)
    {
        // Data upgrade logic
    }
}
```

### Recurring data event

Magento executes your module's recurring data event class after every data installation or upgrade stage.
This class makes final modifications to the database store after data has been installed or updated.

| **Class name** | `RecurringData`          |
| **Interface**  | [`InstallDataInterface`] |
| **Method**     | `install()`              |

**Example:** RecurringData.php

```php
class \VendorName\ModuleName\Setup\RecurringData implements \Magento\Framework\Setup\InstallDataInterface
{
    /**
     * {@inheritdoc}
     */
    public function install(ModuleDataSetupInterface $setup, ModuleContextInterface $context)
    {
        // Recurring data event logic
    }
}
```

## Database interface

Use the [`ModuleDataSetupInterface`] when you need to do database manipulations.
If your installation or upgrade logic spans multiple classes, pass this resource on to other classes that need to modify the database.

**Example:** [Customer module's DefaultCustomerGroupsAndAttributes.php]

```php
class DefaultCustomerGroupsAndAttributes implements DataPatchInterface, PatchVersionInterface
{
    /**
     * @var CustomerSetupFactory
     */
    private $customerSetupFactory;
    /**
     * @var ModuleDataSetupInterface
     */
    private $moduleDataSetup;
    /**
     * DefaultCustomerGroupsAndAttributes constructor.
     * @param CustomerSetupFactory $customerSetupFactory
     * @param ModuleDataSetupInterface $moduleDataSetup
     */
    public function __construct(
        CustomerSetupFactory $customerSetupFactory,
        \Magento\Framework\Setup\ModuleDataSetupInterface $moduleDataSetup
    ) {
        $this->customerSetupFactory = $customerSetupFactory;
        $this->moduleDataSetup = $moduleDataSetup;
    }
    /**
     * {@inheritdoc}
     * @SuppressWarnings(PHPMD.ExcessiveMethodLength)
     */
    public function apply()
    {
        /** @var CustomerSetup $customerSetup */
        $customerSetup = $this->customerSetupFactory->create(['setup' => $this->moduleDataSetup]);
        ...
        $customerSetup->installEntities();
        $customerSetup->installCustomerForms();
        $disableAGCAttribute = $customerSetup->getEavConfig()->getAttribute('customer', 'disable_auto_group_change');
        ...
        $migrationSetup = $this->moduleDataSetup->createMigrationSetup();
        $migrationSetup->appendClassAliasReplace(
            'customer_eav_attribute',
            'data_model',
            Migration::ENTITY_TYPE_MODEL,
            Migration::FIELD_CONTENT_TYPE_PLAIN,
            ['attribute_id']
        );
        $migrationSetup->doUpdateClassAliases();
    }
    ...
}
```

## Module version

Use the [`ModuleContextInterface`] to get the current module version and execute logic based on the version.

**Example:** [User module's UpgradeData.php]

```php
namespace Magento\User\Setup;

use Magento\Framework\Encryption\Encryptor;
use Magento\Framework\Setup\ModuleContextInterface;
use Magento\Framework\Setup\ModuleDataSetupInterface;
use Magento\Framework\Setup\UpgradeDataInterface;

class UpgradeData implements UpgradeDataInterface
{
    /**
     * @inheritdoc
     */
    public function upgrade(ModuleDataSetupInterface $setup, ModuleContextInterface $context)
    {
        $setup->startSetup();
        if (version_compare($context->getVersion(), '2.0.1', '<')) {
            $this->upgradeHash($setup);
        }
        $setup->endSetup();
    }

    ...

}
```

## Uninstall event

Magento executes the uninstall event class when your module is uninstalled using the command line:

```bash
bin/magento module:uninstall --remove-data <module_name>
```

In this phase, your module should remove all traces of its existence in the database by dropping tables, deleting data, or restoring data.

| **Class name** | `Uninstall`            |
| **Interface**  | [`UninstallInterface`] |
| **Method**     | `uninstall()`          |

**Example:** Uninstall.php

```php
class \VendorName\ModuleName\Setup\Uninstall implements \Magento\Framework\Setup\UninstallInterface
{
    /**
     * {@inheritdoc}
     */
    public function uninstall(SchemaSetupInterface $setup, ModuleContextInterface $context)
    {
        //Uninstall logic
    }
}
```

### Disabled modules

A disabled module can still execute its uninstall event.
However, module-specific configurations such as its dependency injection and event/observer configurations will not be available and will cause problems.

Avoid this situation by not including dependencies in your uninstall event class

**Related Topics:**

*  Magento's [versioning policy]

[versioning policy]: {{ page.baseurl }}/extension-dev-guide/versioning/
[schema upgrade]: #schema-upgrade
[`InstallSchemaInterface`]: {{ site.mage2bloburl }}/{{page.guide_version}}/lib/internal/Magento/Framework/Setup/InstallSchemaInterface.php
[`UpgradeSchemaInterface`]: {{ site.mage2bloburl }}/{{page.guide_version}}/lib/internal/Magento/Framework/Setup/UpgradeSchemaInterface.php
[`InstallDataInterface`]: {{ site.mage2bloburl }}/{{page.guide_version}}/lib/internal/Magento/Framework/Setup/InstallDataInterface.php
[`UpgradeDataInterface`]: {{ site.mage2bloburl }}/{{page.guide_version}}/lib/internal/Magento/Framework/Setup/UpgradeDataInterface.php
[`ModuleDataSetupInterface`]: {{ site.mage2bloburl }}/{{page.guide_version}}/lib/internal/Magento/Framework/Setup/ModuleDataSetupInterface.php
[Customer module's DefaultCustomerGroupsAndAttributes.php]: {{ site.mage2bloburl }}/{{page.guide_version}}/app/code/Magento/Customer/Setup/Patch/Data/DefaultCustomerGroupsAndAttributes.php
[`ModuleContextInterface`]: {{ site.mage2bloburl }}/{{page.guide_version}}/lib/internal/Magento/Framework/Setup/ModuleContextInterface.php
[`UninstallInterface`]: {{ site.mage2bloburl }}/{{page.guide_version}}/lib/internal/Magento/Framework/Setup/UninstallInterface.php
