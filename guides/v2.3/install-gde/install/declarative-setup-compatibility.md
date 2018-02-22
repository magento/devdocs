---
layout: default
group: install_pre
title: Declarative Setup Compatibility
version: 2.3
github_link: install-gde/install/declarative-setup-compatibility.md
---

## Declarative Setup Main Changes

`US` - upgrade scripts, old approach
`DS` - declarative schema, new approach

Declarative setup change installation approach and introduce state base installation in replacement of scripts sequence execution way.
However in order to support 3-rd parties we make both approaches works together. It is very important to understand
how old and new way of installation interacts with each other, so lets dig into installation flow.

### Installation sequence

`US` are sensitive to the module sequence, so in order to change sequence of upgrade scripts you need to add dependency to other module, for instance.
`DS` do XML merge for all `db_schema.xml` files, and only then run installation table by table. 
Tables are sorted by dependencies between them (usually such dependencies are declared as foreign keys), so a table that is independent will goes first.
Therefore `DS` is not sensitive to module sequence. Also we need to mentioned data and schema patches, this patches
still are applying in the same sequence as `US`.
If modules with different ways of installations are depends to each other, than installation approach in one of them should be changed like in other one.

### How to remove tables with declarative setup (Declaration Whitelist)

As `DS` compares current database with state from XML file, then it should flush everything that is out of `db_schema.xml` scope, however
backward compatible mode add some limitations. We couldnt delete tables, that are not declared with XML, because this tables can be declared somewhere else, for example,
in `Install/UpgradeSchema.php`. So we need additional file with history of all tables, columns, keys added with declarative schema. Such file should be placed
in each module:

```
    --Module_Vendor
        --Module_Name
            --etc
                --db_schema_whitelist.json
```

File should have JSON format and can be created manually or automatically. 
In order to create this file automatically suggested to use next command:

```
    Usage:
        magento declaration:generate:whitelist [options]
    
    Options:
          --module-name[=MODULE-NAME]  Name of the module where whitelist will be generated [default: "all"] If all option is specified
          than it will generate whitelists for all the modules
```

Please generate database schema whitelist each time, when you have release of your extension, of course if there were any changes in `db_schema.xml` in that release.
This file is temporary solution and will be removed in future, when we will stop `US` support.

### How to convert Install/UpgradeSchema scripts to db_schema.xml

For convertion purposes were proposed to use `SchemaListener`. This is logger tool, that can be turned on during installation or upgrade process
and can listen to all changes, happening with database: table creation, column modification, etc.
After installation will be finished all aggregated by `SchemaListener` changes are converted into `db_schema.xml` files and persisted by modules.

Please note: you need to enable `SchemaListener` only on your dev environment (where you have ability to do rollback to previos database backup) and filesystem with write access.

In order to enable `SchemaListener` please use next flag in `setup:upgrade` and `setup:install` commands:

```
    --convert_old_scripts=1
```

### How to convert Install/UpgradeData scripts to new data patches format

There is no way to convert old data scripts automatically. But below we will list you few advices how to do such convertion smoothly.

1. You can use CLI command to generate patch stub:

```
    Usage:
      dev:generate:patch [options] [--] <module> <patch>
    
    Arguments:
      module                         Module name
      patch                          Patch name
    
    Options:
          --revertable[=REVERTABLE]  Check whether patch is revertable or not. [default: false]
          --type[=TYPE]              Find out what type of patch should be generated. [default: "data"]
```

2. If your module previously has `US` and was released you need to support backward compatibility, by implementing
`\Magento\Setup\Model\Patch\PatchVersionInterface` and `getVersion` method. This method allows to skip changes that were applied in previous 
versions and were done by old scripts. Returned value of `getVersion` method in this case should be equal to value of a version in 
`version_compare` function in old scripts. In case of `InstallData.php` script, that do not has any versions comparing inside, you can specify the first version of your module.

3. If you start with data patches, you can not continue with `US` and create new 'old scripts'.
