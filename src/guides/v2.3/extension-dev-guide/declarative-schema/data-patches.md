---
group: php-developer-guide
title: Develop data and schema patches
---

A data patch is a class that contains data modification instructions. It is defined in a `<Vendor>/<Module_Name>/Setup/Patch/Data/<Patch_Name>.php` file and implements `\Magento\Framework\Setup\Patch\DataPatchInterface`.

A schema patch contains custom schema modification instructions. These modifications can be complex. It is defined in a `<Vendor>/<Module_Name>/Setup/Patch/Schema/<Patch_Name>.php` file and implements `\Magento\Framework\Setup\Patch\SchemaPatchInterface`.

Unlike the declarative schema approach, patches will only be applied once. A list of applied patches is stored in the `patch_list` database table. An unapplied patch will be applied when running the `setup:upgrade` from the Magento CLI.

Optionally, if you plan to enable rollback for your patch during module uninstallation, then you must implement `\Magento\Framework\Setup\Patch\PatchRevertableInterface`.

The declarative schema approach removes the version from the `setup_module` table (in a backward compatible way), leaving only the Composer version. Therefore, you can create all new patches and modules without specifying a `setup_module` version.

The sequence of installing patches is handled through a dependency-based approach. Patches can either be independent or dependent on other patches. Independent patches can be installed in any sequence. A dependent patch requires a minimal number of patches so that it can be installed successfully.

 {:.bs-callout-info}
Magento prioritizes the declarative schema approach and executes updates from the [db_schema.xml]({{ page.baseurl }}/extension-dev-guide/declarative-schema/db-schema.html) before the data and schema patches.

To define a dependency in a patch, add the method `public static function getDependencies()`
to the patch class and return the class names of the patches this patch depends on. The dependency can be in any module.

```php
public static function getDependencies()
{
    return [
        \SomeVendor\SomeModule\Setup\Patch\Data\SomePatch::class
    ];
}
```

The following code sample defines a data patch class that has a dependency.

```php
<?php
    /**
     * Copyright © Magento, Inc. All rights reserved.
     * See COPYING.txt for license details.
     */

    namespace Magento\DummyModule\Setup\Patch\Data;

    use Magento\Framework\Setup\Patch\DataPatchInterface;
    use Magento\Framework\Setup\Patch\PatchRevertableInterface;

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
             * but changing name should not affect installation process, that's why if we will change name of the patch
             * we will add alias here
             */
            return [];
        }
    }
```

## Reverting data patches {#revertingDataPatches}

Magento does not allow you to revert a particular module data patch. However, you can revert all `composer` installed or `non-composer` installed data patches using the `module:uninstall` command.

Run the following command to revert all `composer` installed data patches:

```bash
bin/magento module:uninstall Vendor_ModuleName
```

Run the following command to revert all `non-composer` installed data patches:

```bash
bin/magento module:uninstall --non-composer Vendor_ModuleName
```

## Will old scripts work in newer versions?

Old scripts will work with new versions of Magento. However, if you want to convert your old scripts to the new format,
implement `\Magento\Framework\Setup\Patch\PatchVersionInterface`. This interface allows you to specify the setup version of the module in your database. If the version of the module is higher than or equal to the version specified in your patch, then the patch is skipped. If the version in the database is lower, then the patch installs.
