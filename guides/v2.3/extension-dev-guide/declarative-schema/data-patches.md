---
layout: default
group: extension-dev-guide
title: Declarative Setup Data Patches
version: 2.3
github_link: extension-dev-guide/declarative-schema/data-patches.md
---

## Data Patches Glossary

*Data patch* - class that contains data modification istructions, may have dependencies to other data or schema patches

*Revertable Data Patch* - patch that can be reverted during module deinstallation or path deinstallation. Revertable operations are DQL and partially DML operations: INSERT, UPDATE.

*Migration* - kind of non revertable data patches, that can be only applied but not reverted. Any complex operation, like operations with application layer (Collections, Serializers, etc) is non-revertable. Even SQL delete operation is non-revertable because it can cause triggering

*Schema patch* - class that contains custom schema modification instructions. Schema patches is used along with Declarative Schema. But this patches allows to do complex operations:

1. Adding triggers, stored procedures, functions;
2. Do data migration with DDL operation inside
3. Do difficult rename of table, column, etc
4. Add partitions and table options to table

There are few goals of why we replace upgrade data scripts to data patches:

1. To get rid of module sequential versioning so patches could be delivered to live merchants of any version and won't have conflicting situations for further releases.
2. Make extensions uninstallable - we should have possibility to fully remove extensions from the instance: not only code but database too
3. Make UpgradeData changes portable to previous versions and to specific clients

## Creating your first Patch

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
Optionally if you plan to have rollback for your patch, during module uninstallation, you can also implement `\Magento\Setup\Model\Patch\PatchRevertableInterface`

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

In new approach we leave only composer version of module and remove `setup_module` version (of course we did this in Backward compatibility way).
However all new patches and all new modules should be created without `setup_module` version.
But how sequence of installed patches is handled?
For this we design new dependency based approach. This basic of this approach says, that there can be 2 kinds of patches, that depends to others and independents
Independet patches can be installed in any sequence. Dependent patches should depend only to minumum number of patches, with which we can succeed successfull Installation.
In order to define dependency in your patch you can simply do static reference to patch class. There is no matter in which module this class is.


``` php
    return [
        \SomeVendor\SomeModule\Setup\Patch\Data\SomePatch::class
    ];
```

## Will old scripts works in newer versions?

Old scripts will definitely works with new versions of Magento. But if you want to convert your old scripts to new format,
you should know basic rules:

1. Implement `\Magento\Setup\Model\Patch\PatchVersionInterface`. In this interface you can specify version. Under version means
setup version of module in your database: if version of module is higher, than in your patch then patch will be skipped, otherwise
if version in database is equal or lower then it will be installed
