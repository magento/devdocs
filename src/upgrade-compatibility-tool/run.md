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
bin/uct upgrade:check INSTALLATION_DIR
```

{:.bs-callout-info}
The `INSTALLATION_DIR` value is the directory where your Adobe Commerce instance is located.

The `upgrade:check` command runs the Upgrade Compatibility Tool and returns a list of errors and warnings that must be addressed before upgrading to the latest version of Adobe Commerce. This command analyzes all core code changes and modules for that specific Adobe Commerce instance.

{:.bs-callout-warning}
Execute only when project root (main) directory is provided

It is possible to run only the `core:code:changes` command to analyze only core code changes for that specific Adobe Commerce instance. See [Core code]({{site.baseurl}}/upgrade-compatibility-tool/run.html#core-code) section for more information.

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

#### Core code

```bash
bin/uct 'core:code:changes'
```

#### Version

You can compare your current Adobe Commerce installation with Adobe Commerce versions `>=2.3`.

You must provide the version as a parameter when running the command:

```bash
bin/uct upgrade:check INSTALLATION_DIR -c 2.4.1
```

There are some limitations when running the previous command:

*  This parameter refers to any tag that identifies a specific version of Magento.
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

The Upgrade Compatibility Tool provides a report identifying the affected code or modules, and the severity and description of the problem for every issue encountered:

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
*  *Checked modules*: amount of modules installed in the current magento version examined during the analysis
*  *PHP errors found*: amount of PHP errors
*  *PHP warnings found*: amount of PHP warnings
*  *GraphQL errors found*: amount of GraphQL errors
*  *GraphQL warnings found*: amount of GraphQL warnings
*  *Total errors found*: total amount of errors found
*  *Total warnings found*: total amount of warnings found
*  *Complexity score*: a figure that indicates how difficult is to upgrade from the current version to the new one

The lower this number is, the easier is to perform the upgrade.

#### Example of a summary report

```terminal
 ------------------------ --------
  Installed version        2.3.5
  Adobe Commerce version          2.4.1
  Running time             0m:48s
  Checked modules          60
  PHP errors found         162
  PHP warnings found       120
  GraphQL errors found     19
  GraphQL warnings found   0
  Total errors found       181
  Total warnings found     120
  Complexity score         482
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
