---
group: software-update-guide
title: Safe upgrade tool
functional_areas:
  - Upgrade
---

Welcome to the Magento Safe Upgrade Tool (SUT).

SUT is a CLI tool that checks a magento instance against a specific version by analysing all the non-magento modules installed in it.

The goal of SUT is to identify which potential problems you will have to fix within your customized code when trying to upgrade to a newer Magento version. When running the tool you will get a list of errors and warnings that you will have to take into account to complete the upgrade to the desired version.

## SUT Workflow

The following diagram shows the expected workflow of running SUT:

> Example of the SUT workflow

![SUT Diagram](img/mvp-diagram.png)

## Prerequisites

See the [prerequisites checklist for SUT]({{page.baseurl}}/guides/v2.4/comp-mgr/sut/prereq-sut-checklist.html) for the minimum requisites required to run SUT.

{:.bs-callout .bs-callout-info}
SUT should run in any operating system. It is not required to run the tool where your magento instance is located.

## SUT installation 

### Magento access keys

As mentioned earlier, check that you have the **Magento access keys** in your system. If you do not have them, create an account at [marketplace.magento.com](https://marketplace.magento.com/).

Then, you will be able to create these **Magento access keys**.

See the [access keys guide](https://devdocs.magento.com/marketplace/sellers/profile-information.html#access-keys) topic for more information.

Once you create the access keys, add them to your `auth.json` file, which is located by default `~/.composer`.

{:.bs-callout .bs-callout-warning}
Check your **COMPOSER_HOME** environment variable to see where the `auth.json` file is located.

The **public key** corresponds to the _username_ whereas the **private key** is the _password_:

> Example of Magento access keys

```
    "http-basic": {
        "repo.magento.com": {
            "username": "YOUR_MAGENTO_PUBLIC_KEY",
            "password": "YOUR_MAGENTO_PRIVATE_KEY"
        }
    },
```

### Composer

Clone this repository and, from the **safe-upgrade-tool** folder run `composer install` to install its dependencies. 

{:.bs-callout .bs-callout-warning}
If the **Magento access keys** are not correctly configured, SUT will not be fully installed and you will get errors when running the `composer install` command.

### Node.js

To install _Node.js_ in your system, check the [_Node.js_](https://nodejs.dev/learn/how-to-install-nodejs) page for more information.

## SUT usage

### Memory limitations

When running SUT, the usage of memory depends entirely on the magento instance you are running. If you are running a system with large third-party modules and files, expect SUT to require a high RAM amount.

See the [SUT usage](https://github.com/magento-commerce/safe-upgrade-tool#sut-usage) topic for more information.

### Executing the tool

Execute the tool by running the following command:

> Run SUT

`bin/sut upgrade:check INSTALLATION_DIR`.

{:.bs-callout .bs-callout-info}
It is recommended to run `php -d memory_limit=-1 /bin/sut` to avoid memory limitations, as described earlier.

`INSTALLATION_DIR` is the directory where the Magento instance is located.

Run `bin/sut --help` to get all the different possibilities and options available when running SUT.

### GraphQL schema compatibility verification

SUT also provides the option to introspect two GraphQL endpoints and compare their schemas looking for breaking and dangerous changes between them:

> Run SUT GraphQL

`bin/sut graphql:compare https://domain1.com/graphql https://domain2.com/graphql`

### Arguments and options

#### Version

You can compare your current Magento 2 installation with Magento versions `>=2.3`.

You need to provide the version as a parameter when running the command:

> Providing the version

`bin/sut upgrade:check INSTALLATION_DIR -c 2.4.1`.

There are some limitations:

- This parameter refers to any tag that identifies a specific version of Magento.
- It is a requirement to provide this one explicitly; providing only the value of it will not work.
- Provide the tag version without any quotation marks (neither single nor double): ~~'2.4.1-develop'~~.
- You should NOT provide older versions than the one you have currently installed, nor older than 2.3, which is the oldest one supported at the moment.

#### Full report

You can also get a full report containing both _PHP-related_ errors and GraphQL. In this case, you need to provide at least the following options:

- --schema1=SCHEMA1
- --schema2=SCHEMA2
- INSTALLATION_DIR

> Example of bin/sut command

`bin/sut upgrade:check --schema1=https://domain1.com/graphql --schema2=https://domain2.com/graphql -c 2.4.1 INSTALLATION_DIR`

### Output

It provides a report identifying the affected non-magento modules, the severity and the description of the problem for every issue 
encountered:

> Example with a list of errors/warnings

```
File: /app/code/Custom/CatalogExtension/Controller/Index/Index.php
------------------------------------------------------------------

 *   [ERROR] Line 84: Used nonexistent or non Magento API interface 'Magento\Catalog\Model\ProductRepositoryInterface'
 * [WARNING] Line 6: Importing Magento @deprecated class 'Magento\Catalog\Model\ProductRepository'
```

Apart from that, the report also includes a detailed _summary_:

-  *Installed Version*: the version currently installed.
-  *Magento Version*: the version you want to upgrade to.
-  *Running time*: amount of time the analysis took to build the report (mm:ss).
-  *Checked modules*: amount of modules installed in the current magento version examined during the analysis.
-  *PHP errors found*: amount of PHP errors.
-  *PHP warnings found*: amount of PHP warnings.
-  *GraphQL errors found*: amount of GraphQL errors.
-  *GraphQL warnings found*: amount of GraphQL warnings.
-  *Total errors found*: total amount of errors found.
-  *Total warnings found*: total amount of warnings found.
-  *Complexity score*: a figure that indicates how difficult is to upgrade from the current version to the new one.

The lower this number is, the easier is to perform the upgrade.

> Example of a summary

```
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

Regarding the GraphQL schema compatibility comparison, the output would be very similar to the previous one:

> Example with a list of errors/warnings for GraphQL

```
 *   [ERROR] FIELD_CHANGED_KIND: ConfigurableProduct.gender changed type from Int to String.
 *   [WARNING] OPTIONAL_INPUT_FIELD_ADDED: An optional field sku on input type ProductAttributeSortInput was added.
```
