---
layout: default
group: extension-dev-guide
title: Migrate a module to use declarative schema
version: 2.3
github_link: extension-dev-guide/declarative-schema/migration-commands.md
---

The declarative schema upgrade compares the current state of the schema against the declared state in configuration. It then determines the differences, which are converted to a sequence of statements and applied to the DB.

![Db Schema Invocation]({{page.baseurl}}extension-dev-guide/declarative-schema/images/declarative-schema-invocation.png)

## Migrating from old scripts to  db_schema.xml files

The **Schema Listener Tool** converts pre-Magento 2.3 migration scripts into declarative schema. This use this tool, you specify an argment when you run the `setup:install` or `setup:upgrade` CLI command. As Magento is installed or upgraded, the system logs all schema changes per module, then persists the changes in a series of `db_schema.xml` files (one per affected module).

The Schema Listener Tool always listens for schema changes and attempts to change Magento code. As a result, it should not be run in production mode.  it can be undesirable to run such tool, for example, on production, so this tool is disabled by default.

To enable the Schema Listener Tool, run one of the following commands:

```bash
magento setup:install --convert_old_scripts=1 <other_command_options>
magento setup:upgrade --convert_old_scripts=1 <other_command_options>
```

<div class="bs-callout bs-callout-info" id="info" markdown="1">
This tool can be enabled only through the CLI.
</div>

### Troubleshooting

The Schema Listener Tool does not support all possible contents of pre-Magento 2.3 migration scripts.

* The tool supports only DDL operations represented in `\Magento\Framework\DB\Adapter\Pdo\Mysql`. As a result, the tool ignores all custom DDL operations.
* The tool ignores all raw SQL in your `InstallSchema` or `UpgradeSchema` scripts.
* Any DDL statements in a `Recurring` file will not be transfered to new schema, because this file should be designed to runduring each installation or upgrade.

## Backward compatability and DB whitelists

**Question to developer:** Is "Mixed Mode" important? It's not mentioned again.
Because many extensions and client code contain old scripts, Magento will continue to support installation from such scripts. Environments that are installed from both old scripts and declarative schema is called `Mixed Mode`.


The process of changing the approach of installations and upgrades from migration scripts to declarative schema consists of more than swapping PHP scripts with XML schema. Many extensions and client code contain old scripts that can't be changed. Another consideration is sequencing. In the old scripts, the order in which to apply changes could be established with module sequences. Sequence declaration is more difficult with declarative schema.

All changes are split by tables, on which they will be applied. All changes per table are accumulated in one statement: `ALTER`, `CREATE`, `DROP`. Tables are sorted by references on them. Table without references inside will goes first. All old scripts will be executed only after declarative schema installation/upgrade.

As declarative schema constructs the schema as in XML files, it tries to undo all changes performed by old scripts. Since this is usally not a desirable outcome, Magento provides the `<module-name>/etc/db_schema_whitelist.json` file, which defines a whitelist of table elements that should not be undone.  a whitelist of tIn order to prevent this type behavior, - whitelist of tables, that can be modified and dropped with declarative schema tool.

To generate this file for your module, run the following command:

```bash
$ magento declaration:generate:whitelist --module-name[=MODULE-NAME]
```

Until we support backward compatability for this tool, we will not be able to clean 'garbage', like db schema, that is left after removed or disabled module.

## Edge cases and frequently asked questions

**How do I drop a column/table/constraint/index?**

To drop one of these entities, just remove its definition from the `db_schema.xml` file. If you want to drop elementan declared in another module, redeclare it with `disabled` attribute set to `true`.

**How do I rename a column or table?**

Table renaming is not supported. However, you can remove an unneeded table declaration and add a new one. Data will be persisted in a CSV dump, but the data will not be added to the new table automatically. You can add the data manually by using data / recurring patches.

Column renaming is supported. To rename a column, delete the original column declaration and create a new one. In the new declaration use the `onCreate` attribute to specify which column to migrate data from. Use the following construction to migrate data from the same table.

```xml
onCreate="migrateDataFrom(entity_id)"
```

To migrate data from another table, specify

```xml
onCreate="migrateDataFromAnotherTable(catalog_category_entity,entity_id)"
```

**How do I perform optimization or other non-trivial tasks with db schema?**.

Declarative schema is designed to work with simple operations, such as adding, changing, and dropping structural elements. For more complex operations, you must add PHP handlers into Recurring scripts. Note that Recurring scripts will not be deprecated and will continue to exist in the future.

## Backward incompatible changes

Declarative schema introduces several operations that are not supported in the same manner as previous releases.

### Rename a column

In a column rename operation, the column is dropped and recreated. A data source for copying data might be provided, and it might be used to migrate data in a module revision (such as when a module is enabled, or when upgrading from Magento Open Source to Magento Commerce.

### Rename a table

When a table name in the schema is changed, the table is dropped and recreated.

### Disabling a module

When a module is disabled from the Admin console, its database schema configuration is no longer read on upgrade or install. As a result, subsequent system upgrades rebuild the database schema without the module's tables, columns, etc.

### Truncate a table

**Note to developer:** This section is empty
