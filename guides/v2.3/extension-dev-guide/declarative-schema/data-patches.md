---
layout: default
group: extension-dev-guide
title: Declarative setup data patches
version: 2.3
github_link: extension-dev-guide/declarative-schema/data-patches.md
---


We had the following goals in mind when we replaced upgrade data scripts to data patches:

1. By removing module sequential versioning, patches can be delivered to live merchants running any version of Magento without causing  conflicting situations in later releases.

2. Uninstalling an extension removes both the code and data.

3. Make UpgradeData changes portable to previous versions and to specific clients


## Data Patches Glossary

*Data patch* - A class that contains data modification instructions. It can have dependencies to other data or schema patches.

*Revertable data patch* - A patch that can be reverted during module deinstallation or path deinstallation. Revertable operations are Data Query Language (DQL) and partially Data Markup Language (DML) operations: INSERT, UPDATE.

**Note to reviewer** _Make sure I spelled out the meaning of DQL and DML correctly._

*Migration* - A kind of non-revertable data patch that can be applied, but not reverted. Any complex operation, such one that contains an application layer (for example, Collections or Serializers) is non-revertable. SQL delete operations are non-revertable because they can cause triggering.

*Schema patch* - A class that contains custom schema modification instructions. Schema patches are used along with declarative schema, but these patches allow complex operations such as:

* Adding triggers, stored procedures, functions
* Performing data migration with inside DDL operations
* Renaming tables, columns, and other entities
* Adding partitions and options to a table

## Creating your first patch

You can create patch in one of two kind of folders:

Data Patch:

```
    --Module_Vendor
        --Module_Name
            --Setup
                --Patch
                    --Data
                        --{YourCustomName.php}
```

Schema Patch:

```
    --Module_Vendor
        --Module_Name
            --Setup
                --Patch
                    --Schema
                        --{YourCustomName.php}
```

Each php class (Patch), should implement: `\Magento\Setup\Model\Patch\DataPatchInterface` or `\Magento\Setup\Model\Patch\SchemaPatchInterface`.

Optionally, if you plan to have rollback for your patch during module uninstallation, you can also implement `\Magento\Setup\Model\Patch\PatchRevertableInterface`

{% highlight php startinline=true %}
    <?php
    /**
     * Copyright © Magento, Inc. All rights reserved.
     * See COPYING.txt for license details.
     */

    namespace Magento\DummyModule\Setup\Patch\Data;

    use Magento\Setup\Model\Patch\DataPatchInterface;
    use Magento\Setup\Model\Patch\PatchRevertableInterface;

    /**
     */
    class DummyPatch
        implements DataPatchInterface,
        PatchRevertableInterface
    {
        /**
         * @var \Magento\Framework\Setup\ModuleDataSetupInterface
         */
        private $moduleDataSetup;

        /**
         * @param \Magento\Framework\Setup\ModuleDataSetupInterface $moduleDataSetup
         */
        public function __construct(
            \Magento\Framework\Setup\ModuleDataSetupInterface $moduleDataSetup
        ) {
            /**
             * If before, we pass $setup as argument in install/upgrade function, from now we start
             * inject it with DI. If you want to use setup, you can inject it, with the same way as here
             */
            $this->moduleDataSetup = $moduleDataSetup;
        }

        /**
         * {@inheritdoc}
         */
        public function apply()
        {
            $this->moduleDataSetup->getConnection()->startSetup();
            //The code that you want apply in the patch
            //Please note, that one patch is responsible only for one setup version
            //So one UpgradeData can consist of few data patches
            $this->moduleDataSetup->getConnection()->endSetup();
        }

        /**
         * {@inheritdoc}
         */
        public static function getDependencies()
        {
            /**
             * This is dependency to another patch. Dependency should be applied first
             * One patch can have few dependencies
             * Patches do not have versions, so if in old approach with Install/Ugrade data scripts you used
             * versions, right now you need to point from patch with higher version to patch with lower version
             * But please, note, that some of your patches can be independent and can be installed in any sequence
             * So use dependencies only if this important for you
             */
            return [
                SomeDependency::class
            ];
        }

        public function revert()
        {
            $this->moduleDataSetup->getConnection()->startSetup();
            //Here should go code that will revert all operations from `apply` method
            //Please note, that some operations, like removing data from column, that is in role of foreign key reference
            //is dangerous, because it can trigger ON DELETE statement
            $this->moduleDataSetup->getConnection()->endSetup();
        }

        /**
         * {@inheritdoc}
         */
        public function getAliases()
        {
            /**
             * This internal Magento method, that means that some patches with time can change their names,
             * but changing name should not affect installation process, thats why if we will change name of the patch
             * we will add alias here
             */
            return [];
        }
    }
{% endhighlight %}

## What are patch dependencies?

In the new approach, we remove the version from the `setup_module` table (in a backward compatible way), leaving only the composer version. Create all new patches and modules without specifying a `setup_module` version.

The sequence of installed patches is handled through a new dependency-based approach. Patches can either be independent or dependent on other patches. Independent patches can be installed in any sequence. A dependent patch requires a minimal number of patches so that it can be installed successfully.

To define a dependency in a patch, make a static reference to the patch class. The class can be in any module.


``` php
    return [
        \SomeVendor\SomeModule\Setup\Patch\Data\SomePatch::class
    ];
```

## Will old scripts works in newer versions?

Old scripts definitely work with new versions of Magento. However, if you want to convert your old scripts to the new format,
you should know these basic rules:

**Note to reviewer:** _Only one rule is provided. Are there more?_

1. Implement `\Magento\Setup\Model\Patch\PatchVersionInterface`. This interface allows you to specify the setup version of the module in your database. If the version of the module is higher than the version specified in your patch, then the patch is skipped. If the version in the database is equal or lower, then the patch installs.
