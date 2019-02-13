---
mftf-release: 2.3.11
redirect_from: /guides/v2.3/magento-functional-testing-framework/2.3/commands/mftf.html
---

# CLI commands: vendor/bin/mftf

_This topic was updated due to the {{page.mftf-release}} MFTF release._
{: style="text-align: right"}

The Magento Functional Testing Framework (MFTF) introduces the command line interface (CLI) tool `vendor/bin/mftf` to facilitate your interaction with the framework.

{%
include note.html
type='info'
content='`mftf` commands replace the `robo` commands that were used in previous releases.'
%}

## Command format

In the project root directory (where you have installed the framework as a composer dependency), run commands using the following format:

```bash
vendor/bin/mftf command [options] [<arguments>] [--remove|-r]
```

## Useful commands

Use the following commands to run commonly performed tasks.

### Apply the configuration parameters

```bash
vendor/bin/mftf build:project
```

### Upgrade the project

```bash
vendor/bin/mftf build:project --upgrade
```

Upgrades the existing MFTF tests after the MFTF major upgrade.

### Generate all tests

```bash
vendor/bin/mftf generate:tests
```

### Generate tests by test name

```bash
vendor/bin/mftf generate:tests LoginAsAdminTest LoginAsCustomerTest
```

### Generate and run the tests for a specified group

```bash
vendor/bin/mftf run:group product -r
```

This command cleans up the previously generated tests; generates and runs tests for the product group (where `group="product"`).

### Generate and run particular tests

```bash
vendor/bin/mftf run:test LoginAsAdminTest LoginAsCustomerTest -r
```

This command cleans up the previously generated tests; generates and runs the `LoginAsAdminTest` and `LoginAsCustomerTest` tests.

### Generate and run previously failed tests

```bash
vendor/bin/mftf run:failed
```

This command cleans up the previously generated tests; generates and runs the tests listed in `dev/tests/acceptance/tests/_output/failed`.
For more details about `failed`, refer to [Reporting][].

## Reference

### `build:project`

#### Description

Clone the example configuration files and build the Codeception project.

#### Usage

```bash
vendor/bin/mftf build:project [--upgrade] [config_param_options]
```

#### Options

| Option            | Description                                                                                                                                                                                   |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `-u`, `--upgrade` | Upgrades existing MFTF tests according to requirements of the last major release. Specifying this flag upgrades only those tests in the default location. Example: `build:project --upgrade`. |

You can include options to set configuration parameter values for your environment since the project build process also [sets up the environment][setup].

```bash
vendor/bin/mftf build:project --MAGENTO_BASE_URL=http://magento.local/ --MAGENTO_BACKEND_NAME=admin214365
```

### `generate:tests`

#### Description

Generate PHP code from the tests defined in XML files.
The path is set in the `TESTS_MODULE_PATH` [configuration] parameter.

#### Usage

```bash
vendor/bin/mftf generate:tests [option] [<test name>] [<test name>] [--remove]
```

#### Options

| Option                                        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--config=[<default>|<singleRun>|<parallel>]` | Creates a single manifest file with a list of all tests. The default location is `tests/functional/Magento/FunctionalTest/_generated/testManifest.txt`.<br/> You can split the list into multiple groups using `--config=parallel`; the groups will be generated in `_generated/groups/` like `_generated/groups/group1.txt, group2.txt, ...`.</br> Available values: `default` (default), `singleRun`(same as `default`), and `parallel`.</br> Example: `generate:tests --config=parallel`. |
| `--force`                                     | Forces test generation, regardless of the module merge order defined in the Magento instance. Example: `generate:tests --force`.                                                                                                                                                                                                                                                                                                                                                             |
| `-i,--time`                                     | Set time in minutes to determine the group size when `--config=parallel` is used. The __default value__ is `10`. Example: `generate:tests --config=parallel --time=15`                                                                                                                                                                                                                                                                                                            |
| `--tests`                                     | Defines the test configuration as a JSON string.                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `--debug`                                     | Returns additional debug information (such as the filename where an error occurred) when test generation fails because of an invalid XML schema. This parameter takes extra processing time. Use it after test generation has failed once.                                                                                                                                                                                                                                                   |
| `-r,--remove`                                 | Removes the existing generated suites and tests cleaning up the `_generated` directory before the actual run. For example, `generate:tests SampleTest --remove` cleans up the entire `_generated` directory and generates `SampleTest` only.                                                                                                                                                                                                                                                 |

#### Examples of the JSON configuration

The configuration to generate a single test with no suites:

```json
{  
   "tests":[
      "general_test1"     //Generate the "general_test1" test.
      ],
   "suites": null
}
```

The configuration to generate a single test in the suite:

```json
{  
   "tests": null,         // No tests outside the suite configuration will be generated.
   "suites":{  
      "sample":[          // The suite that contains the test.
         "suite_test1"    // The test to be generated.
      ]
   }
}
```

Complex configuration to generate a few non-suite tests, a single test in a suite, and an entire suite:

```json
{  
   "tests":[  
      "general_test1",
      "general_test2",
      "general_test3"
   ],
   "suites":{             //Go to suites.
      "sample":[          //Go to the "sample" suite.
         "suite_test1"    //Generate the "suite_test1" test.
      ],
      "sample2":[]        //Generate all tests in the "sample2" suite.
   }
}
```

The command that encodes this complex configuration:

```bash
vendor/bin/mftf generate:tests --tests "{\r\n\"tests\":[\r\n\"general_test1\",\r\n\"general_test2\",\r\n\"general_test3\"\r\n],\r\n\"suites\":{\r\n\"sample\":[\r\n\"suite_test1\"\r\n],\r\n\"sample2\":null\r\n}\r\n}"
```

{% include note.html
type='info'
content='The strings must be escaped and surrounded in quotes.'
%}

### `generate:suite`

#### Description

Generates one or more suites based on XML declarations.

#### Usage

```bash
vendor/bin/mftf generate:suite <suite name> [<suite name>] [--remove]
```

#### Options

| Option        | Description                                                                                                                                                                                                                                            |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `-r,--remove` | Removes the existing generated suites and tests cleaning up the `_generated` directory before the actual run. For example, `vendor/bin/mftf generate:suite WYSIWYG --remove` cleans up the entire `_generated` directory and generates `WYSIWYG` only. |

#### Example

```bash
vendor/bin/mftf generate:suite suite1 suite2
```

### `generate:urn-catalog`

#### Description

Generates a URN catalog, enabling PhpStorm to recognize and highlight URNs.
It also enables auto-completion in PhpStorm.

#### Usage

```bash
vendor/bin/mftf generate:urn-catalog [--force] [<path to the directory with misc.xml>]
```

`misc.xml` is typically located in `<project root>/.idea/`.

#### Options

| Option        | Description                                                           |
| ------------- | --------------------------------------------------------------------- |
| `-f, --force` | Creates the `misc.xml` file if it does not exist in the given `path`. |

#### Example

```bash
vendor/bin/mftf generate:urn-catalog .idea/
```

### `reset`

#### Description

Cleans any configuration files and generated artifacts from the environment.
The `.env` file is not affected.

#### Usage

```bash
vendor/bin/mftf reset [--hard]
```

#### Options

| Option   | Description                                |
| -------- | ------------------------------------------ |
| `--hard` | Forces a reset of the configuration files. |

#### Example

```bash
vendor/bin/mftf reset --hard
```

### `run:group`

Generates and executes the listed groups of tests using Codeception.

#### Usage

```bash
vendor/bin/mftf run:group [--skip-generate|--remove] [--] <group1> [<group2>]
```

#### Options

| Option                | Description                                                                                               |
| --------------------- | --------------------------------------------------------------------------------------------------------- |
| `-k, --skip-generate` | Skips generating from the source XML. Instead, the command executes previously-generated groups of tests. |
| `-r, --remove`        | Removes previously generated suites and tests before the actual generation and run.                       |

#### Examples

Clean up after the last test run; generate from XML and execute the tests with the annotations `group="group1"` and `group="group2"`:

```bash
vendor/bin/mftf -r -- run:group group1 group2
```

Execute previously generated tests with the annotations `group="group1"` and `group="group2"`, skipping the regeneration of the test:

```bash
vendor/bin/mftf run:group -k -- group1 group2
```

### `run:test`

Generates and executes tests by name using Codeception.

#### Usage

```bash
vendor/bin/mftf run:test [--skip-generate|--remove] [--] <name1> [<name2>]
```

#### Options

| Option                | Description                                                                                               |
|-----------------------|-----------------------------------------------------------------------------------------------------------|
| `-k, --skip-generate` | Skips generating from the source XML. Instead, the command executes previously-generated groups of tests. |
| `-r, --remove`        | Remove previously generated suites and tests.                                                             |

#### Examples

Generate the `LoginCustomerTest` and `StorefrontCreateCustomerTest` tests from XML and execute all the generated tests:

```bash
vendor/bin/mftf run:test LoginCustomerTest StorefrontCreateCustomerTest
```

### `run:failed`

Regenerates and reruns tests that previously failed.

This command cleans up previously generated tests. It generates and runs the tests listed in `dev/tests/acceptance/tests/_output/failed`.
For more details about `failed`, refer to [Reporting][].

#### Usage

```bash
vendor/bin/mftf run:failed
```

#### Examples

Run the tests that failed in the previous run:

```bash
vendor/bin/mftf run:failed
```

### `setup:env`

Updates the [configuration] parameter values in the [`.env`] file.
Creates the `.env` file if it does not exist.

#### Usage

```bash
vendor/bin/mftf setup:env [config_param_option1=<value>] [config_param_option2=<value>]
```

`config_param` is a configuration parameter from the `.env` file.
The command consumes the parameters in a format of options assigned with values, for example `--MAGENTO_BASE_URL=http://magento.local/`.
If you specify a parameter that the `.env` file does not contain, the command returns an error.

You can also update configuration parameter values when you use the [`build:project`][build] command.

#### Examples

To change values for the `MAGENTO_BASE_URL` and `BROWSER`:

```bash
vendor/bin/mftf setup:env --MAGENTO_BASE_URL=http://magento.local/ --BROWSER=firefox
```

To create a `.env` file with example parameters:

```bash
vendor/bin/mftf setup:env
```

The example parameters are taken from the `etc/config/.env.example` file.

### `upgrade:tests`

Applies all the MFTF major version upgrade scripts to test components in the given path (`test.xml`, `data.xml`, etc).

#### Usage

```bash
vendor/bin/mftf upgrade:tests <path>
```

`<path>` is the path that contains MFTF test components that need to be upgraded.
The command searches recursively for any `*.xml` files to upgrade.

#### Examples

To upgrade all test components inside modules in the `dev/tests/acceptance/tests/` directory:

```bash
vendor/bin/mftf upgrade:tests /Users/user/magento2/dev/tests/acceptance/tests/
```

To upgrade all test components inside the `Catalog` module:

```bash
vendor/bin/mftf upgrade:tests /Users/user/magento2/app/code/Magento/Catalog/Test/Mftf/
```

<!-- LINK DEFINITIONS -->

[configuration]: ../configuration.html
[Reference]: #reference
[build]: #buildproject
[setup]: #setupenv
[Reporting]: ../reporting.html

<!-- Abbreviations -->

*[MFTF]: Magento Functional Testing Framework
