---
layout: default
group: extension-dev-guide
title: Migrate a module to use a declarative schema
version: 2.3
github_link: extension-dev-guide/declarative-schema/migration-commands.md
---


## Migrating from old scripts to new db_schema.xml

The **Schema Listener Tool** converts pre-Magento 2.3 migration scripts into declarative schema. The main principle that underpin `Schema Listener Tool` is ordinar Magento Installation / Upgrade, during of which, all schema changes are logged under modules, and after Installation / Upgrade are persisted in `db_schema.xml` files by modules. As this tool will always listen schema changes and tries to change Magento code, it can be undesirable to run such tool, for example, on production, so this tool is disabled by default.

In order to enable it, please add next argument to your `setup:install` or `setup:upgrade` CLI command:

```
--convert_old_scripts=1
```

Please note, that tool can be enabled only through CLI.

#### Tool troubleshooting

1. Tool supports only DDL operations represented in `\Magento\Framework\DB\Adapter\Pdo\Mysql`. So all custom DDL operations will be ignored
2. If you have any raw SQL in your `InstallSchema` or `UpgradeSchema` it will ignored too
3. If you have any DDL statements in `Reccurring` file they will not be transfered to new schema, as this file supposed to be running during each installation / upgrade

## Backward compatability and DB whitelists

As many extensions and client code have old scripts, we will support installation from such scripts. Simultaneously execution of installation from old scripts and declarative schema is called `Mixed Mode` Changes in setup approach are greater, than just replacing old PHP scripts with new XML schema.

Right now db schema is described not only a desired state, but also change approach to sequence in what all changes should be applied.
If with old scripts sequence of changes could be setuped with help of module sequences, for new approach sequence declaration is more difficult.

All changes are split by tables, on which they will be applied. All changes per table are accumulated in one statement: `ALTER`, `CREATE`, `DROP`.
Tables are sorted by references on them. Table without references inside will goes first. All old scripts will be executed only after
declarative schema installation / upgrade.

As declarative schema makes database schema as in XML files, it will tries to undo all changes done by old scripts. In order to prevent such illegal behavior
we provide `db_schema_whitelist.json` - whitelist of tables, that can be modified and dropped with declarative schema tool.
Such file is auto generated and cummulative. In order to generate such file for your module, please run command, specified below:

```bash
$ magento declaration:generate:whitelist --module-name[=MODULE-NAME]
```

Till we will support backward compatability for this tool, we will not be able to clean 'garbage', like db schema, that is left after removed or disabled module (of course if this module do not supports new schema)

## Edge cases and frequently asked questions

1. **How to drop column/table/constraint/index?**. If you want to drop a change from your module - you just need to delete it XML declaration
from `db_schema.xml` file. If you want to drop element, declared in another module, you should redeclare it with `disabled` attribute set to 'true'.
2. **How to rename column/table?**.
     - Table renaming is unsupported. You can remove old declaration of table and add new one. Data will not be lost (It will be persisted in CSV dump), but will not be added to new table automatically. You can add it manually with help
     of data / recurring patches.
     - Column rename is supported. You should do the same manipulations as for table renaming, but in new column you can specify `onCreate` attribute, which will say from what column, data should be migrated.
     Data can be migrated from the same table, for this you can use next construction:

```xml
onCreate="migrateDataFrom(entity_id)"
```

Also data can be migrated from another table:

```xml
onCreate="migrateDataFromAnotherTable(catalog_category_entity,entity_id)"
```

3. **How to do optimization or non-trivial things with db schema?**. Declarative schema is developed to work with simple operations: add, change, drop structural elements.
So for all other complex operations, you will need to add PHP handlers into Recurring scripts. Note that Recurring scripts will not be deprecated and will
exists in system in future too.

## Incompatible changes

Incompatable changes - operations that are no longer supported in old manner.

**Rename column**
Column is dropped and recreated. A data source for copying data may be provided, used to migrate data in same module revision (on enabling module or upgrading CE to EE, etc.)
**Rename table**
Table is dropped and recreated once table name in schema is cnanged.
**Disabling a module**
Once module is disabled from console, it's DB schema configuration is no longer read on upgrade or install, so if module was previously installed, then disabled and upgrade is executed schema will be rebuilt excluding DB schema configuration of the disabled module.
**Truncate table**

## HOWTO

In this section with `git diff` shortly will be described how to do old manilpulations, like creating table in new manner:

**Create table**

![Create Table]({{page.baseurl}}extension-dev-guide/declarative-schema/images/declaration-create-table.png)

**Drop table**

![Drop Table]({{page.baseurl}}extension-dev-guide/declarative-schema/images/drop-declarative-table.png)

**Create foreign key**

![Create Foreign Key]({{page.baseurl}}extension-dev-guide/declarative-schema/images/create-fk.png)

**Drop foreign key**

![Drop Foreign Key]({{page.baseurl}}extension-dev-guide/declarative-schema/images/drop-fk.png)

**Add column to table**

![Add column to table]({{page.baseurl}}extension-dev-guide/declarative-schema/images/add-column.png)

**Drop column from table**

![Drop column from table]({{page.baseurl}}extension-dev-guide/declarative-schema/images/remove-column.png)

**Change column type**

![Change column type]({{page.baseurl}}extension-dev-guide/declarative-schema/images/change-column-type.png)

**Add index**

![Add index]({{page.baseurl}}extension-dev-guide/declarative-schema/images/add-index.png)
