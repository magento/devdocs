---
group: software-update-guide
title: Run the tool
ee_only: True
redirect_from:
  - /safe-upgrade-tool/run.html
functional_areas:
  - Upgrade
---

The Upgrade Compatibility Tool is a command-line tool that checks an {{site.data.var.ee}} customized instance against a specific version by analyzing all modules installed in it. It returns a list of errors and warnings that must be addressed before upgrading to the latest version of {{site.data.var.ee}}.

The Upgrade Compatibility Tool identifies potential problems that must be fixed in your code before attempting to upgrade to a newer version of {{site.data.var.ee}}.

## Use the `upgrade:check` command

Execute the tool by running the following command:

```bash
bin/uct upgrade:check <dir>
```

{:.bs-callout-info}
The `<dir>` value is the directory where your {{site.data.var.ee}} instance is located.

The `upgrade:check` command runs the Upgrade Compatibility Tool and checks an {{site.data.var.ee}} customized instance against a specific version by analyzing all modules installed in it. It returns a list of errors and warnings that must be addressed before upgrading to the latest version of {{site.data.var.ee}}.

{:.bs-callout-warning}
Execute only when the project root (or main) directory is provided.

This command checks for core code changes, if desired, for that specific {{site.data.var.ee}} instance, as well as all custom code changes installed in it.

It is possible to only run the `core:code:changes` command to analyze only core code changes for that specific {{site.data.var.ee}} instance. See [Core code changes]({{site.baseurl}}/upgrade-compatibility-tool/run.html#core-code) section for more information.

The command `graphql:compare` allows to compare two GraphQL schemas to check for any changes between them. See [GraphQL schema compatibility verification]({{site.baseurl}}/upgrade-compatibility-tool/run.html#graphql-schema-compatibility-verification) section for more information.

### Recommendations to use the `upgrade:check` command

We recommend running the following command to avoid memory limitations:

```bash
php -d memory_limit=-1 /bin/uct
```

We also recommend using the `-m` command when you want to run the tool against a specific module.

If you want to know all commands available for the Upgrade Compatibility Tool, run:

```bash
bin/uct list
```

### Use the `--help` command

To see the Upgrade Compatibility Tool command general options and help, run:

```bash
bin/uct --help
```

However, it is possible to run `--help` as an option when running a specific command, like `bin/uct upgrade:check`. This will return specific `--help` options for that command:

```bash
bin/uct upgrade:check --help
```
Available `--help` options for the `upgrade:check` command:

*  --raw: Outputs raw information.
*  --format=FORMAT: The output format (txt, xml, json, md).
*  --short: Skip arguments descriptions.
*  -h, —help: Display help for that specific command. If no command is provided, `list` command is the default result.
*  -q, —quiet: Do not outputs any message while executing the command.
*  -v, —version: Display app version.
*  —ansi | —no-ansi: Enable ANSI output.
*  -n, —no-interaction: Do not ask any interactive question while executing the command.
*  -v, --vv, —verbose: Increase verbosity of output communications. 1 for normal output, 2 for verbose output, and 3 for DEBUG output.

## Core code changes

You can compare your current {{site.data.var.ee}} installation with a clean vanilla installation to see if the core code has any modifications made to implement a new feature or customization. This validation will help estimate the effort that the upgrade will require based on those changes.

```bash
bin/uct core:code:changes <dir> <vanilla dir>
```

Where arguments are as follows:

*  <dir> - Adobe Commerce installation directory.
*  <vanilla dir> - Adobe Commerce vanilla installation directory.

There are some limitations when running this command:

*  Execute only when the project root (or main) directory is provided.
*  Shows a list of core modifications only.

### Core code changes command `--help` options

If you add `--help` to the `core:code:changes` command, it returns several options:

*  Execute only when the project root (or main) directory is provided.
*  Shows a list of core modifications only.

Available `--help` options for the `core:code:changes` command:

*  -h, —help: Display help for that specific command. If no command is provided, `list` command is the default result.
*  -q, —quiet: Do not outputs any message while executing the command.
*  -v, —version: Display app version.
*  —ansi | —no-ansi: Enable ANSI output.
*  -n, —no-interaction: Do not ask any interactive question while executing the command.
*  -v, --vv, —verbose: Increase verbosity of output communications. 1 for normal output, 2 for verbose output, and 3 for DEBUG output.

### Vanilla installation

This is a clean installation of a specified version tag or branch for a specific release version.

When running the `bin/uct core:code:changes` command, it will check if there is a vanilla instance in your system. In case this is the first time using a vanilla installation, an interactive command-line question is prompted if the vanilla project should be downloaded from the [Adobe Commerce repository](https://repo.magento.com/).

See the [Deploy vanilla instance]({{site.baseurl}}/contributor-guide/contributing.html#vanilla-pr) topic for more information.

## Version

You can compare your current {{site.data.var.ee}} installation with {{site.data.var.ee}} versions `>=2.3`.

You must provide the version as a parameter when running the command:

```bash
bin/uct upgrade:check <dir> -c 2.4.3
```

There are some limitations when running the previous command:

*  This parameter refers to any tag that identifies a specific version of {{site.data.var.ee}}.
*  It is a requirement to provide this one explicitly; providing only the value of it will not work.
*  Provide the tag version without any quotation marks (neither single nor double): ~~'2.4.1-develop'~~.
*  You should NOT provide older versions than the one you have currently installed, nor older than 2.3, which is the oldest one supported at the moment.

## GraphQL schema compatibility verification

The Upgrade Compatibility Tool also provides the option to introspect two GraphQL endpoints and compare their schemas looking for breaking and dangerous changes between them:

```bash
bin/uct graphql:compare <schema1> <schema2>
```

Where arguments are as follows:

*  <schema1> - Endpoint URL for the first GraphQL schema.
*  <schema2> - Endpoint URL for the second GraphQL schema.

You must have running `instance before` and `instance after` the upgrade.

### GraphQL compare command `--help` options

Available `--help` options for the `graphql:compare` command:

*  -h, —help: Display help for that specific command. If no command is provided, `list` command is the default result.
*  -q, —quiet: Do not outputs any message while executing the command.
*  -v, —version: Display app version.
*  —ansi | —no-ansi: Enable ANSI output.
*  -n, —no-interaction: Do not ask any interactive question while executing the command.
*  -v, --vv, —verbose: Increase verbosity of output communications. 1 for normal output, 2 for verbose output, and 3 for DEBUG output.

### Example with a list of errors/warnings for GraphQL

```terminal
 *   [WARNING] FIELD_CHANGED_KIND: ConfigurableProduct.gender changed type from Int to String.
 *   [WARNING] OPTIONAL_INPUT_FIELD_ADDED: An optional field sku on input type ProductAttributeSortInput was added.
```

See [Developer information]({{site.baseurl}}/upgrade-compatibility-tool/developer.html) for more information.

### Output

The Upgrade Compatibility Tool exports a json file report identifying the affected code or modules, and the severity and description of the problem for every issue encountered.

{:.bs-callout-info}
To export this report into a different output folder, run `--output <dir>` commmand. Default path for the output folder is `var/output/[TIME]-results.json`.

### Full report

You can also get a full report containing both _PHP-related_ errors and GraphQL. In this case, you must provide at least the following options:

*  `--schema1=SCHEMA1`
*  `--schema2=SCHEMA2`
*  `<dir>`

> Example of a bin/uct command

```bash
bin/uct upgrade:check --schema1=https://domain1.com/graphql --schema2=https://domain2.com/graphql -c 2.4.3 <dir>
```

## Example with a list of errors/warnings

```terminal
File: /app/code/Custom/CatalogExtension/Controller/Index/Index.php
------------------------------------------------------------------

 *   [ERROR] Line 84: Used nonexistent or non Magento API interface 'Magento\Catalog\Model\ProductRepositoryInterface'
 *   [WARNING] Line 6: Importing Magento @deprecated class 'Magento\Catalog\Model\ProductRepository'
```

The report also includes a detailed summary:

*  *Installed Version*: the version currently installed.
*  *Adobe Commerce Version*: the version you want to upgrade to.
*  *Running time*: amount of time the analysis took to build the report (mm:ss).
*  *Adobe Commerce checked modules*: amount of checked modules.
*  *Adobe Commerce core checked modules*: amount of core checked modules.
*  *Adobe Commerce core modified files*: amount of core modified file.
*  *Adobe Commerce % core modified files*: percentage of core modified files.
*  *PHP errors found*: amount of PHP errors.
*  *PHP warnings found*: amount of PHP warnings.
*  *GraphQL errors found*: amount of GraphQL errors.
*  *GraphQL warnings found*: amount of GraphQL warnings.
*  *Total errors found*: total amount of errors found.
*  *Total warnings found*: total amount of warnings found.
*  *Complexity score*: a figure that indicates how difficult is to upgrade from the current version to the new one.

The lower this number is, the easier is to perform the upgrade.

See the [Error message reference]({{site.baseurl}}/upgrade-compatibility-tool/errors.html) topic for more information.

## Example of a general summary report

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

## Troubleshooting

### Empty output

{:.bs-callout-info}
The `M2_VERSION` is the target Adobe Commerce 2 version you want to compare to your Adobe Commerce instance.

If after running this command:

```bash
bin/uct upgrade:check INSTALLATION_DIR -c M2_VERSION
```

The only output is `Upgrade compatibility tool`:

```terminal
bin/uct upgrade:check /var/www/project/magento/ -c 2.4.1
Upgrade compatibility tool
```
{:.no-copy}

The likely cause is a PHP memory limitation.
Override the memory limitation by setting `memory_limit` to `-1`:

```bash
php -d memory_limit=-1 /bin/uct upgrade:check INSTALLATION_DIR -c M2_VERSION
```
