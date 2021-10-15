---
group: software-update-guide
title: Run the tool
ee_only: True
redirect_from:
  - /safe-upgrade-tool/run.html
functional_areas:
  - Upgrade
---

The {{site.data.var.uct}} is a command-line tool that checks an {{site.data.var.ee}} customized instance against a specific version by analyzing all modules installed in it. It returns a list of critical issues, errors, and warnings that must be addressed before upgrading to the latest version of {{site.data.var.ee}}.

The {{site.data.var.uct}} identifies potential problems that must be fixed in your code before attempting to upgrade to a newer version of {{site.data.var.ee}}.

## Use the `upgrade:check` command

The `upgrade:check` command is the main command to execute the tool:

```bash
bin/uct upgrade:check <dir>
```

{:.bs-callout-info}
The `<dir>` value is the directory where your {{site.data.var.ee}} instance is located.

The `upgrade:check` command runs the {{site.data.var.uct}} and checks an {{site.data.var.ee}} customized instance against a specific version by analyzing all modules installed in it. It returns a list of critical issues, errors, and warnings that must be addressed before upgrading to the latest version of your {{site.data.var.ee}}.

{:.bs-callout-warning}
Execute only when the project root (or main) directory is provided.

This command checks for core code changes for that specific {{site.data.var.ee}} instance, as well as all custom code changes installed in it.

However, you can run the `core:code:changes` command to analyze only core code changes for that specific {{site.data.var.ee}} instance. See [Core code changes]({{site.baseurl}}/upgrade-compatibility-tool/run.html#core-code) section for more information.

While you can use the `graphql:compare` command to compare two GraphQL schemas to check for any changes between them. See [GraphQL schema compatibility verification]({{site.baseurl}}/upgrade-compatibility-tool/run.html#graphql-schema-compatibility-verification) section for more information.

### Recommendations to use the `upgrade:check` command

*  The {{site.data.var.uct}} requires at least 2GB RAM to run. This setting is recommended to avoid issues due to a low memory limitation. The {{site.data.var.uct}} displays a question if you run the `upgrade:check` command with a low `memory_limit` setting.
*  Specify the `-m` option to run the tool against a specific module:

   ```bash
   bin/uct upgrade:check <dir> -m[=MODULE-PATH]
   ```

Where arguments are as follows:

*  `<dir>`: {{site.data.var.ee}} installation directory.
*  `[=MODULE-PATH]`: Specific module path directory.

### Use the `--help` option

To see the {{site.data.var.uct}} command general options and help, run:

```bash
bin/uct --help
```

However, it is possible to run `--help` as an option when running a specific command, like `bin/uct upgrade:check`. This will return specific `--help` options for that command:

```bash
bin/uct upgrade:check --help
```

Available `--help` options for the `upgrade:check` command:

*  --raw: Outputs raw information.
*  --format=FORMAT: Output format (txt, xml, json, md).
*  --short: Skip arguments description.
*  -o, --output[=OUTPUT]: Path directory to export the `.json` output file.
*  -m, --module-path[=MODULE-PATH]: Modules path directory .
*  --schema1[=SCHEMA1]: Endpoint URL for the existing installation.
*  --schema2[=SCHEMA2]: Endpoint URL for the vanilla installation.
*  --vanilla-dir: {{site.data.var.ee}} vanilla installation directory.
*  --min-issue-level: Minimum issue level to show in report. Default is [WARNING].
*  --ignore-current-version-compatibility-issues: Use this option when you do not want to include known critical issues, errors and warnings in your {{site.data.var.uct}} report.
*  -h, —-help: Display help for that specific command. If no command is provided, `list` command is the default result.
*  -q, —-quiet: Do not outputs any message while executing the command.
*  -v, —-version: Display app version.
*  —-ansi, —-no-ansi: Enable ANSI output.
*  -n, —-no-interaction: Do not ask any interactive question while executing the command.
*  -v, --vv, --vvv, —-verbose: Increase verbosity of output communications. 1 for normal output, 2 for verbose output, and 3 for DEBUG output.

### Output

The {{site.data.var.uct}} exports a `json` file report identifying the affected code or modules, and the severity and description of the problem for every issue encountered.

To export this report into a different output folder, run:

```bash
bin/uct upgrade:check <dir> --output[=OUTPUT]
```

Where arguments are as follows:

*  `<dir>`: {{site.data.var.ee}} installation directory.
*  `[=OUTPUT]`: Path directory to export the `.json` output file.

{:.bs-callout-info}
The default path for the output folder is `var/output/[TIME]-results.json`.

### Use the `--ignore-current-version-compatibility-issues` option

The {{site.data.var.uct}} allows you to run the `upgrade:check` command with an `--ignore-current-version-compatibility-issues` option, so it only shows new or unknown critical issues, errors and warnings. Use this option when you do not want to include known critical issues, errors and warnings in your {{site.data.var.uct}} report.

```bash
bin/uct upgrade:check --ignore-current-version-compatibility-issues <dir>
```

{:.bs-callout-info}
This applies only to PHP API validations. Core code validations are compared only with the same version.

### Vanilla installation

A _vanilla_ installation is a clean installation of a specified version tag or branch for a specific release version.

The `bin/uct core:code:changes` command checks if there is a vanilla instance in your system. If this is the first time using a vanilla installation, an interactive command-line question prompts you to download the vanilla project from the [{{site.data.var.ee}} repository](https://repo.magento.com/).

You can run a {{site.data.var.uct}} command with the `--vanilla-dir` option to specify the {{site.data.var.ee}} vanilla installation directory.

See the [Deploy vanilla instance]({{site.baseurl}}/contributor-guide/contributing.html#vanilla-pr) topic for more information.

## Use the `list` command

To return a list of the {{site.data.var.uct}} available commands, run:

```bash
bin/uct list
```
This `list` commands returns the following:

*  -h, —-help: Display help for that specific command. If no command is provided, `list` command is the default result.
*  -q, —-quiet: Do not outputs any message while executing the command.
*  -v, —-version: Display app version.
*  —-ansi, —-no-ansi: Enable ANSI output.
*  -n, —-no-interaction: Do not ask any interactive question while executing the command.
*  -v, --vv, --vvv, —-verbose: Increase verbosity of output communications. 1 for normal output, 2 for verbose output, and 3 for DEBUG output.

## Use the `core:code:changes` command

You can compare your current {{site.data.var.ee}} installation with a clean vanilla installation to see if the core code has any modifications made to implement a new feature or customization. This validation will help estimate the effort that the upgrade will require based on those changes.

```bash
bin/uct core:code:changes <dir> <vanilla dir>
```

Where arguments are as follows:

*  `<dir>`: {{site.data.var.ee}} installation directory.
*  `<vanilla dir>`: {{site.data.var.ee}} vanilla installation directory.

There are some limitations when running this command:

*  Execute only when the project root (or main) directory is provided.
*  Shows a list of core modifications only.

### Use the `core:code:changes` command  with the `--help` option

Available `--help` options for the `core:code:changes` command:

*  -h, —-help: Display help for that specific command. If no command is provided, `list` command is the default result.
*  -q, —-quiet: Do not outputs any message while executing the command.
*  -v, —-version: Display app version.
*  —-ansi, —-no-ansi: Enable ANSI output.
*  -n, —-no-interaction: Do not ask any interactive question while executing the command.
*  -v, --vv, --vvv, —-verbose: Increase verbosity of output communications. 1 for normal output, 2 for verbose output, and 3 for DEBUG output.

## Version

You can compare your current {{site.data.var.ee}} installation with {{site.data.var.ee}} versions `>=2.3`.

You must provide the version as a parameter when running the command:

```bash
bin/uct upgrade:check <dir> -c 2.4.3
```

Where:

*  -c, --coming-version[=COMING-VERSION]: The {{site.data.var.ee}} targeted version.

There are some limitations when running the previous command:

*  This parameter refers to any tag that identifies a specific version of {{site.data.var.ee}}.
*  It is a requirement to provide this one explicitly; providing only the value of it will not work.
*  Provide the tag version without any quotation marks (neither single nor double): ~~'2.4.1-develop'~~.
*  You should NOT provide older versions than the one you have currently installed, nor older than 2.3, which is the oldest one supported at the moment.

## GraphQL schema compatibility verification

The {{site.data.var.uct}} also provides the option to introspect two GraphQL endpoints and compare their schemas looking for breaking and dangerous changes between them:

```bash
bin/uct graphql:compare <schema1> <schema2>
```

Where arguments are as follows:

*  `<schema1>`: Endpoint URL for the existing installation.
*  `<schema2>`: Endpoint URL for the vanilla installation.

You must have running `instance before` and `instance after` the upgrade.

### GraphQL compare command `--help` options

Available `--help` options for the `graphql:compare` command:

*  -h, —-help: Display help for that specific command. If no command is provided, `list` command is the default result.
*  -q, —-quiet: Do not outputs any message while executing the command.
*  -v, —-version: Display app version.
*  —-ansi, —-no-ansi: Enable ANSI output.
*  -n, —-no-interaction: Do not ask any interactive question while executing the command.
*  -v, --vv, --vvv, —-verbose: Increase verbosity of output communications. 1 for normal output, 2 for verbose output, and 3 for DEBUG output.

### Example with a list of critical issues, errors, and warnings for GraphQL

```terminal
 *   [WARNING] FIELD_CHANGED_KIND: ConfigurableProduct.gender changed type from Int to String.
 *   [WARNING] OPTIONAL_INPUT_FIELD_ADDED: An optional field sku on input type ProductAttributeSortInput was added.
```

See [Developer information]({{site.baseurl}}/upgrade-compatibility-tool/developer.html) for more information.

### Full report

You can also get a full report containing both _PHP-related_ errors and GraphQL. In this case, you must provide at least the following options:

*  `--schema1=SCHEMA1`: Endpoint URL for the existing installation.
*  `--schema2=SCHEMA2`: Endpoint URL for the vanilla installation.
*  `<dir>`: {{site.data.var.ee}} installation directory.

> Example:

```bash
bin/uct upgrade:check --schema1=https://domain1.com/graphql --schema2=https://domain2.com/graphql -c 2.4.3 <dir>
```

## Example with a list of critical issues, errors, and warnings

```terminal
File: /app/code/Custom/CatalogExtension/Controller/Index/Index.php
------------------------------------------------------------------

 *   [ERROR] Line 84: Used nonexistent or non Magento API interface 'Magento\Catalog\Model\ProductRepositoryInterface'
 *   [WARNING] Line 6: Importing Magento @deprecated class 'Magento\Catalog\Model\ProductRepository'
```

The report also includes a detailed summary:

*  *Installed Version*: the version currently installed.
*  *{{site.data.var.ee}} Version*: the version you want to upgrade to.
*  *Running time*: amount of time the analysis took to build the report (mm:ss).
*  *{{site.data.var.ee}} checked modules*: amount of checked modules.
*  *{{site.data.var.ee}} core checked modules*: amount of core checked modules.
*  *{{site.data.var.ee}} core modified files*: amount of core modified file.
*  *{{site.data.var.ee}} % core modified files*: percentage of core modified files.
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
  {{site.data.var.ee}} version   2.4.3
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

## Run {{site.data.var.uct}} via PHPstorm plugin

You can run the {{site.data.var.uct}} with a run configuration via the PHPstorm plugin. See the [Upgrade Compatibility Tool Run Configuration]({{site.baseurl}}/guides/v2.3/ext-best-practices/phpstorm/uct-run-configuration.html) topic for more information.

## Troubleshooting

### Empty output

{:.bs-callout-info}
The `M2_VERSION` is the target {{site.data.var.ee}} version you want to compare to your {{site.data.var.ee}} instance.

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
