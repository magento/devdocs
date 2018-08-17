---
group: extension-dev-guide
title: Migrate install/upgrade scripts to declarative schema
version: 2.3
---

Magento provides several commands to help convert your installation and upgrade scripts to declarative schema. These commands also help you test your changes, roll back your changes if anything goes wrong, and help your module maintain backward compatibility.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
Once you start with data patches, you cannot continue to use upgrade scripts.
</div>

## Convert install/upgrade schema scripts to  db_schema.xml files

The **Schema Listener Tool** converts pre-Magento 2.3 migration scripts into declarative schema. To use this tool, you specify an argument when you run the `setup:install` or `setup:upgrade` CLI command. As Magento is installed or upgraded, the system logs all schema changes per module, then persists the changes in a series of `db_schema.xml` files (one per affected module).

<div class="bs-callout bs-callout-info" id="info" markdown="1">
The Schema Listener tool listens for schema changes and attempts to change Magento code, so it should not be run in production mode. It is disabled by default.
</div>

To convert your install or upgrade script, run one of the following commands:

```bash
magento setup:install --convert_old_scripts=1
magento setup:upgrade --convert_old_scripts=1
```

### Troubleshooting

The Schema Listener Tool cannot convert everything that can appear in a pre-Magento 2.3 migration script.

* The tool supports only DDL operations represented in `\Magento\Framework\DB\Adapter\Pdo\Mysql`. As a result, the tool ignores all custom DDL operations.
* The tool ignores all raw SQL in your `InstallSchema` or `UpgradeSchema` scripts.
* Any DDL statements in a `Recurring` file will not be transferred to the new schema, because this file should be designed to run during each installation or upgrade.
* See [Configure declarative schema]({{ page.baseurl }}/extension-dev-guide/declarative-schema/db-schema.html) if you need to make manual modifications to your schema.

## Convert install/upgrade data scripts to the data patch format

Old data scripts cannot be converted automatically. The following steps help make the conversion go as smoothly as possible.

1. Generate a patch stub.

    ```bash
    dev:generate:patch [options] <module-name> <patch-name>
    ```
    where `[options]` can be any of the following:

    `--revertable[=true | false]` - Determines whether the patch is revertable. The default value is `false`.

    `--type[=<type>]` - Specifies what type of patch to generate. The default is `data`.

2. All released modules that previously used upgrade scripts must support backward compatibility by implementing
`\Magento\Setup\Model\Patch\PatchVersionInterface` and the `getVersion` method. This method allows you to skip changes that were applied in previous versions and were done by old scripts. The returned value of the `getVersion` method in this case should be equal to the value of a version in `version_compare` function in old scripts. When the `InstallData.php` script does not have any versions to compare, you can specify the first version of your module. See [Develop declarative data and schema patches]({{ page.baseurl }}/extension-dev-guide/declarative-schema/data-patches.html) for more information.

## Dry run mode

It is important that declarative installation/upgrade does not break anything. A useful way to ensure this is use dry run mode to examine all the DDL SQL statements that are generated during the declarative installation process. In dry run mode, the database state does not change. The schemas and data will be the same before and after installation.

To enable dry run mode, run one of the following commands:

```bash
setup:install --dry-run=1
setup:upgrade --dry-run=1
```

As a result of specifying the `--dry-run=1` flag, Magento writes a log file at `<Magento_Root>/var/log/dry-run-installation.log`. This file contains all the DDL SQL statements that are generated during installation. You can use these SQL statements for debugging and optimizing performance processes.

## Safe installation and rollback

The advantage and the main problem of declarative schema is that it can blindly modify the database schema. For example, a developer can make a mistake and potentially remove a structural element from the database, causing data loss.

To help prevent data loss, you can specify command line options that dump all the data that could be lost as a result of an installation. The dumped data can then be restored manually or automatically. These arguments are optional--you do not have to create a manual dump during a system upgrade. _(But please note, that this works only with schema)_

Magento provides options to the `setup:install` and `setup:upgrade` commands that enable safe installations and rollbacks:

`--safe-mode` - Creates a data dump during the installation or upgrade process.

`--data-restore` - (Used with the `setup:upgrade` command only.) Performs a rollback. Before you rollback, you must first check out code to the previous version of Magento. Then run `setup:upgrade  --data-restore`.

Several types of operations have an effect on data dumps and rollbacks.

* *Destructive operations (DO)* - SQL DDL operations that cause data deletion or data corruption. The following operations are destructive:

  - Deleting a table
  - Deleting a column
  - Reducing column length
  - Changing column precision
  - Changing the column type

* *Opposite to destructive operations (ODO)* - In the case of a failed Magento installation, SQL DDL operations that are the opposite of  destructive operations can be used for rollback. For example, changing the column type from CHAR to INT is a destructive operation. The rollback operation changes the type from INT to CHAR.

When safe mode is enabled, Magento creates a CSV file each time a destructive operation for a table or column occurs. You can find these files at the following locations:

* `Magento_root/var/declarative_dumps_csv/{column_name_column_type_other_dimensions}.csv`
* `Magento_root/var/declarative_dumps_csv/{table_name}.csv`

Each CSV file contains a row that defines the column (or other database entity) names as well as rows of values, as shown in the following image:

![Dump Example]({{ page.baseurl }}/extension-dev-guide/declarative-schema/images/dump_example.png)

## Maintain backward compatibility

Backward compatibility must be maintained. Therefore, declarative schema does not automatically delete database tables, columns or keys that are not defined in a `db_schema.xml` file. Declarative schema can't delete these elements because these items can be declared somewhere else, such as in an `Setup/UpgradeSchema.php` file.

The `<module_vendor>/<module_name/etc/db_schema_whitelist.json` file provides a history of all tables, columns, keys added with declarative schema. It can be generated manually or created automatically with the following command:

```bash
magento declaration:generate:whitelist [options]
```
where:

`--module-name[=MODULE-NAME]` specifies which module to generate a whitelist for. If no module name is specified, then the default behavior is to generate a whitelist for all modules. You can also explicitly set `--module-name=all`.

As a best practice, you should generate a new whitelist file for each release. You must generate the whitelist  in any release that contains changes in the `db_schema.xml` file.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
This file is a temporary solution. It will be removed in the future, when upgrade scripts are no longer supported.
</div>
