---
group: software-update-guide
title: Run the tool
ee_only: True
functional_areas:
  - Upgrade
---

The Magento Safe Upgrade Tool ALPHA (SUT) is a command line (CLI) tool that checks a Magento instance against a specific version by analyzing all the non-Magento modules installed on it.

The SUT identifies potential problems that must be fixed in your custom code before attempting to upgrade to a newer version of Magento.

The tool returns a list of errors and warnings that you must address before upgrading to a new version of Magento.

{:.bs-callout-warning}
At the moment this is an ALPHA version with limited scope, only validating PHP Magento APIs and GraphQL schema.

## Use SUT

Execute the tool by running the following command:

```bash
bin/sut upgrade:check INSTALLATION_DIR
```

{:.bs-callout-info}
We recommend running `php -d memory_limit=-1 /bin/sut` to avoid memory limitations. As well, it is recommended to use the `-m` command to run the tool against a specific module.

The `INSTALLATION_DIR` value is the directory where your Magento instance is located.

To see SUT command options and help:

```bash
bin/sut --help
```

### GraphQL schema compatibility verification

The SUT also provides the option to introspect two GraphQL endpoints and compare their schemas looking for breaking and dangerous changes between them:

```bash
bin/sut graphql:compare https://domain1.com/graphql https://domain2.com/graphql
```

You must have running "instance before" and "instance after" the upgrade.

### Arguments and options

#### Version

You can compare your current Magento installation with Magento versions `>=2.3`.

You must provide the version as a parameter when running the command:

```bash
bin/sut upgrade:check INSTALLATION_DIR -c 2.4.1
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

#### Example of a bin/sut command

```bash
bin/sut upgrade:check --schema1=https://domain1.com/graphql --schema2=https://domain2.com/graphql -c 2.4.1 INSTALLATION_DIR
```

### Output

The SUT provides a report identifying the affected non-Magento modules and the severity and description of the problem for every issue encountered:

#### Example with a list of errors/warnings

```php
File: /app/code/Custom/CatalogExtension/Controller/Index/Index.php
------------------------------------------------------------------

 *   [ERROR] Line 84: Used nonexistent or non Magento API interface 'Magento\Catalog\Model\ProductRepositoryInterface'
 *   [WARNING] Line 6: Importing Magento @deprecated class 'Magento\Catalog\Model\ProductRepository'
```

The report also includes a detailed summary:

*  *Installed Version*: the version currently installed
*  *Magento Version*: the version you want to upgrade to
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

```php
 ------------------------ --------
  Installed version        2.3.5
  Magento version          2.4.1
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

```php
 *   [ERROR] FIELD_CHANGED_KIND: ConfigurableProduct.gender changed type from Int to String.
 *   [WARNING] OPTIONAL_INPUT_FIELD_ADDED: An optional field sku on input type ProductAttributeSortInput was added.
```

See [Developer information]({{site.baseurl}}/safe-upgrade-tool/developer.html) for more information.
