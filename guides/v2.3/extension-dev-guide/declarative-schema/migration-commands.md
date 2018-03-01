---
layout: default
group: extension-dev-guide
title: Migrate a module to use declarative schema
version: 2.3
github_link: extension-dev-guide/declarative-schema/migration-commands.md
---

Magento provides several commands to help convert your installation and upgrade scripts to declarative schema. These commands also test your changes, roll back your changes if anything goes wrong, and help your module maintain backward compatibility.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
Once you start with data patches, you can not continue to use upgrade scripts.
</div>

## Convert install/upgrade schema scripts to  db_schema.xml files

The **Schema Listener Tool** converts pre-Magento 2.3 migration scripts into declarative schema. To use this tool, you specify an argment when you run the `setup:install` or `setup:upgrade` CLI command. As Magento is installed or upgraded, the system logs all schema changes per module, then persists the changes in a series of `db_schema.xml` files (one per affected module).

<div class="bs-callout bs-callout-info" id="info" markdown="1">
The Schema Listener Tool listens for schema changes and attempts to change Magento code. As a result, it should not be run in production mode. It can be undesirable to run such tool, for example, on production, so this tool is disabled by default.
</div>

To convert your install or upgrade script, run one of the following commands:

```bash
magento setup:install --convert_old_scripts=1
magento setup:upgrade --convert_old_scripts=1
```

### Troubleshooting

The Schema Listener Tool does not support all possible contents of pre-Magento 2.3 migration scripts.

* The tool supports only DDL operations represented in `\Magento\Framework\DB\Adapter\Pdo\Mysql`. As a result, the tool ignores all custom DDL operations.
* The tool ignores all raw SQL in your `InstallSchema` or `UpgradeSchema` scripts.
* Any DDL statements in a `Recurring` file will not be transfered to new schema, because this file should be designed to runduring each installation or upgrade.
* See [Configure declarative schema]({{page.baseurl}}extension-dev-guide/declarative-schema/db-schema.html) if you need to make manual modifications to your schema.

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
`\Magento\Setup\Model\Patch\PatchVersionInterface` and the `getVersion` method. This method allows to skip changes that were applied in previous versions and were done by old scripts. The returned value of the `getVersion` method in this case should be equal to value of a version in `version_compare` function in old scripts. In case of a `InstallData.php` script that does not have any versions to compare, you can specify the first version of your module. See [Develop declarative data and schema patches]({{page.baseurl}}extension-dev-guide/declarative-schema/data-patches.html) for more information.

## Dry Run mode

It is important that declarative installation/upgrade odoes not break anything. A useful way to ensure this is use dry run mode to examine all the DDL SQL statements that are generated during the declarative installation process. In dry run mode, the database state does not change. The schemas and data will be the same before and after installation.

To enable dry run mode, run one of the following commands:

```bash
setup:install --dry-run=1
setup:upgrade --dry-run=1
```

As a result of specifying the `--dry-run=1` flag, Magento writes a logfile at `<Magento_Root>/var/log/dry-run-installation.log`. This file contains all the DDL SQL statements that are generated during installation. You can use these SQL statements for debugging and optimizing performance processes.

## Safe installation and rollback

The advantage and the main problem of declarative schema is that it can blindly modify the database schema. For example, a developer can make a mistake and potentially remove a structural element from the database, causing data loss.

To help prevent data loss, the you can specify command line options that dump all the data that can be lost as a result of an installation. The dumped data can then be restored manually or automatically. These arguments are optional--you do not have to create a manual dump during a system upgrade. _(But please note, that this works only with schema)_

Magento provides options to the `setup:install` and `setup:upgrade` commands that enable safe installations and rollbacks:

`--safe-mode` - Creates a data dump during the installation or upgrade process. 
`--data-restore` - (Used with the `setup:upgrade` command only.) Performs a rollback. Before you rollback, you must first check out code to the previous version of Magento. Then run `setup:upgrade  --data-restore`.

Several types of operations have an effect on data dumps and rollbacks.

*Destructive operations (DO)* - SQL DDL operations that cause data deletion or data corruption. The following operations are destructive:

- Deleting a table
- Deleting a column
- Reducing column length
- Changing column precision
- Changing the column type

*Opposite to destructive operations (ODO)* - In the case of a failed Magento installation, SQL DDL operations that are the opposite of  destructive operations can be used for rollback. For example, changing the column type from CHAR to INT is an destructive
operation. The rollback operation changes the type from INT to CHAR.

When safe mode is enabled, Magento creates a CSV file each time a destructive operation for a table or column occurs. You can find these files in the following paths:

* `Magento_root/var/declarative_dumps_csv/{column_name_column_type_other_dimensions}.csv`
* `Magento_root/var/declarative_dumps_csv/{table_name}.csv`

Each CSV file contains a row that defines the column (or other database entity) names as well as rows of values, as shown in the following image:

![Dump Example]({{page.baseurl}}extension-dev-guide/declarative-schema/images/dump_example.png)

## Maintain backward compatibility

Ideally, as declarative schema compares the current database with the contents of `db_schema.xml` files, it would flush everything that is not defined in a configuration file. However, backward compatibility must be maintained. Declarative schema can't automatically delete tables, columns or keys, because these items can be declared somewhere else, such as in a
in an `Install/UpgradeSchema.php` file.

The `<module_vendor>/<module_name/etc/db_schema_whitelist.json` file provides a history of all tables, columns, keys added with declarative schema. It can be generated manually or created automatically with the following command:

``` bash
magento declaration:generate:whitelist [options]
```
where:

`--module-name[=MODULE-NAME]` specifies which module to generate a whitelist for. If no module name is specified, then the default behavior is to generate a whitelist for all modules. You can also explicitly set `--module-name=all`

As a best practice, you should generate a new whitelist file for each release. You must generate the whitelist  in any release that contains changes in the `db_schema.xml` file.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
This file is a temporary solution. It will be removed in the future, when upgrade scripts are no supported.
</div>
