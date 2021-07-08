---
group: software-update-guide
title: Run the tool
ee_only: True
redirect_from:
  - /safe-upgrade-tool/run.html
functional_areas:
  - Upgrade
---

The Upgrade Compatibility Tool is a command-line tool that checks an Adobe Commerce customized instance against a specific version by analyzing all modules installed in it. Returns a list of errors and warnings that must be addressed before upgrading to the latest version of Adobe Commerce.

The Upgrade Compatibility Tool identifies potential problems that must be fixed in your code before attempting to upgrade to a newer version of Adobe Commerce.

## Use the Upgrade Compatibility Tool

Execute the tool by running the following command:

```bash
bin/uct upgrade:check <dir>
```

{:.bs-callout-info}
The `<dir>` value is the directory where your Adobe Commerce instance is located.

The `upgrade:check` command runs the Upgrade Compatibility Tool and checks an Adobe Commerce customized instance against a specific version by analyzing all modules installed in it. Returns a list of errors and warnings that must be addressed before upgrading to the latest version of Adobe Commerce.

{:.bs-callout-warning}
Execute only when the project root (or main) directory is provided.

This command allows to check for core code changes for that specific Adobe Commerce instance as well as all modules installed in it.

It is possible to only run the `core:code:changes` command to analyze only core code changes for that specific Adobe Commerce instance. See [Core code changes]({{site.baseurl}}/upgrade-compatibility-tool/run.html#core-code) section for more information.

The command `graphql:compare` allows to compare two GraphQL schemas to check for any changes between them. See [GraphQL schema compatibility verification]({{site.baseurl}}/upgrade-compatibility-tool/run.html#graphql-schema-compatibility-verification) section for more information.

We recommend running the following command to avoid memory limitations:

```bash
php -d memory_limit=-1 /bin/uct
```

We also recommend using the `-m` command when you want to run the tool against a specific module.

To see the Upgrade Compatibility Tool command options and help, run:

```bash
bin/uct --help
```

### GraphQL schema compatibility verification

The Upgrade Compatibility Tool also provides the option to introspect two GraphQL endpoints and compare their schemas looking for breaking and dangerous changes between them:

```bash
bin/uct graphql:compare https://domain1.com/graphql https://domain2.com/graphql
```

You must have running `instance before` and `instance after` the upgrade.

### Arguments and options

#### Core code changes

You can compare your current Adobe Commerce installation with a clean vanilla installation to see if the core code has any modifications made to implement a new feature or customization. This validation will help estimate the effort that the upgrade will require based on those changes.

```bash
bin/uct core:code:changes <dir> <vanilla dir>
```
Where:

*  <dir> - Adobe Commerce installation directory.
*  <vanilla dir> - Adobe Commerce vanilla installation directory.

There are some limitations when running this command:

*  Execute only when the project root (or main) directory is provided.
*  Shows a list of core modifications only.

#### Vanilla installation

This is a clean installation of a specified version tag or branch for a specific release version.

When running the `bin/uct core:code:changes` command, it will check if there is a vanilla instance in your system. In case this is the first time using a vanilla installation, an interactive command-line question is prompted if the vanilla project should be downloaded from the [Adobe Commerce repository](https://repo.magento.com/).

See the [Deploy vanilla instance]({{site.baseurl}}/contributor-guide/contributing.html#vanilla-pr) topic for more information.

#### Version

You can compare your current Adobe Commerce installation with Adobe Commerce versions `>=2.3`.

You must provide the version as a parameter when running the command:

```bash
bin/uct upgrade:check <dir> -c 2.4.3
```

There are some limitations when running the previous command:

*  This parameter refers to any tag that identifies a specific version of Adobe Commerce.
*  It is a requirement to provide this one explicitly; providing only the value of it will not work.
*  Provide the tag version without any quotation marks (neither single nor double): ~~'2.4.1-develop'~~.
*  You should NOT provide older versions than the one you have currently installed, nor older than 2.3, which is the oldest one supported at the moment.

#### Full report

You can also get a full report containing both _PHP-related_ errors and GraphQL. In this case, you must provide at least the following options:

*  `--schema1=SCHEMA1`
*  `--schema2=SCHEMA2`
*  `INSTALLATION_DIR`

#### Example of a bin/uct command

```bash
bin/uct upgrade:check --schema1=https://domain1.com/graphql --schema2=https://domain2.com/graphql -c 2.4.1 INSTALLATION_DIR
```

### Output

The Upgrade Compatibility Tool provides a report identifying the affected code or modules, and the severity and description of the problem for every issue encountered.

{:.bs-callout-info}
Reports are exported as json files.

#### Example with a list of errors/warnings

```terminal
File: /app/code/Custom/CatalogExtension/Controller/Index/Index.php
------------------------------------------------------------------

 *   [ERROR] Line 84: Used nonexistent or non Magento API interface 'Magento\Catalog\Model\ProductRepositoryInterface'
 *   [WARNING] Line 6: Importing Magento @deprecated class 'Magento\Catalog\Model\ProductRepository'
```

The report also includes a detailed summary:

*  *Installed Version*: the version currently installed
*  *Adobe Commerce Version*: the version you want to upgrade to
*  *Running time*: amount of time the analysis took to build the report (mm:ss)
*  *Adobe Commerce checked modules*: amount of checked modules
*  *Adobe Commerce core checked modules*: amount of core checked modules
*  *Adobe Commerce core modified files*: amount of core modified file
*  *Adobe Commerce % core modified files*: percentage of core modified files
*  *PHP errors found*: amount of PHP errors
*  *PHP warnings found*: amount of PHP warnings
*  *GraphQL errors found*: amount of GraphQL errors
*  *GraphQL warnings found*: amount of GraphQL warnings
*  *Total errors found*: total amount of errors found
*  *Total warnings found*: total amount of warnings found
*  *Complexity score*: a figure that indicates how difficult is to upgrade from the current version to the new one

The lower this number is, the easier is to perform the upgrade.

#### Example of a general summary report

```terminal
 ------------------------ --------
  Installed version        2.4.2
  Adobe Commerce version   2.4.3
  Running time             0m:48s
  Checked modules          14
  Core checked modules     0
  Core modified files      0
  % core modified files    0.00
  PHP errors found         109
  PHP warnings found       0
  GraphQL errors found     0
  GraphQL warnings found   0
  Total errors found       109
  Total warnings found     0
  Complexity score         218
 ------------------------ --------
```

Regarding the GraphQL schema compatibility comparison, the output would be very similar:

#### Example with a list of errors/warnings for GraphQL

```terminal
 *   [ERROR] FIELD_CHANGED_KIND: ConfigurableProduct.gender changed type from Int to String.
 *   [WARNING] OPTIONAL_INPUT_FIELD_ADDED: An optional field sku on input type ProductAttributeSortInput was added.
```

See [Developer information]({{site.baseurl}}/upgrade-compatibility-tool/developer.html) for more information.

## Troubleshooting

### Empty output

{:.bs-callout-info}
The `M2_VERSION` is the target Adobe Commerce 2 version you want to compare to your Adobe Commerce instance.

If after running this command:

```bash
bin/uct upgrade:check INSTALLATION_DIR -c M2_VERSION
```

the only output is `Upgrade compatibility tool`:

```terminal
bin/uct upgrade:check /var/www/project/magento/ -c 2.4.1
Upgrade compatibility tool
```
{:.no-copy}

the likely cause is a PHP memory limitation.
Override the memory limitation by setting `memory_limit` to `-1`:

```bash
php -d memory_limit=-1 /bin/uct upgrade:check INSTALLATION_DIR -c M2_VERSION
```
