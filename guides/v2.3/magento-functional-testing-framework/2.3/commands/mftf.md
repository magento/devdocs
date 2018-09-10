---
group: magento-functional-testing-framework-guide-2_3
title: |
    CLI commands: vendor/bin/mftf
functional_areas:
 - Testing
mftf-release: 2.3.0
redirect_from: /guides/v2.3/magento-functional-testing-framework/2.2/commands/mftf.html
---

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
vendor/bin/mftf command [options] [arguments]
```
  
## Useful commands

Use the following commands to run commonly-performed tasks.

### Build the project

```bash
vendor/bin/mftf build:project
```

### Upgrade the project

```bash
vendor/bin/mftf build:project --upgrade
```

### Generate all tests in PHP

```bash
vendor/bin/mftf generate:tests
```
### Generate one or more tests in PHP

```bash
vendor/bin/mftf generate:tests testName01 testName02 testName03
```

### Run and generate all tests that contain the `group="example"` annotation 

```bash
vendor/bin/mftf run:group example
```

### Run and generate all tests

```bash
vendor/bin/mftf run:test
```

## Reference
 
### `build:project`     

#### Description

Clone the example configuration files and build the Codeception project.

#### Usage

```bash
vendor/bin/mftf build:project [option]
```

#### Options

Option | Description
---|---
`-u`, `--upgrade` | Upgrades existing MFTF tests according to requirements of the last major release. Specifying this flag upgrades only those tests in the default location. Example: `build:project --upgrade`.

### `generate:tests`

#### Description

Generate PHP code from the tests defined in XML files.
The path is set in the `TESTS_MODULE_PATH` [configuration] parameter.

#### Usage

```bash
vendor/bin/mftf generate:tests [option] [test name] [test name]
```

#### Options

Option | Description|
---|---
`--config`   | Creates a single manifest file with a list of all tests. The default location is `tests/functional/Magento/FunctionalTest/_generated/testManifest.txt`.<br/> You can split it into multiple groups using `--config parallel`; the groups will be generated in `_generated/groups/` like `_generated/groups/group1.txt, group2.txt, ...`.</br> Available values: `default` (default), `singleRun`(same as `default`), and `parallel`.</br> Example: `generate:tests --config parallel`.
`--force`    | Forces test generation, regardless of the module merge order defined in the Magento instance. Example: `generate:tests --force`.
`--lines`    | Sets the number of lines that determines the group size when `--config parallel` is used. The __default value__ is `500`. Example: `generate:tests --config parallel --lines 400`
`--tests`    | Defines the test configuration as a JSON string.
`--debug`    | Returns additional debug information (such as the filename where an error occurred) when test generation fails because of an invalid XML schema. This parameter takes extra processing time. Use it after test generation has failed once.

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

`generate:suite <suites> <suites> ...`

`<suites>` represents a suite name.
To generate multiple suites, separate each name with a space.

#### Example

```bash
vendor/bin/mftf generate:suite suite1 suite2
```

### `generate:urn-catalog`

#### Description

Generates a URN catalog, enabling PhpStorm to recognize and highlight URNs.
It also enables auto-completion in PhpStorm.

#### Usage

`generate:urn-catalog [options] <path to the directory with misc.xml>/`

`misc.xml` is typically located in `<project root>/.idea/`.

#### Options

Option | Description
---|---
`-f, --force` | Creates the `misc.xml` file if it does not exist in the given `path`.

#### Example

```bash
vendor/bin/mftf generate:urn-catalog .idea/
```

### `reset`

#### Description

Cleans any configuration files and generated artifacts from the environment.
The `.env` file is not affected.

#### Usage

`reset [options]`

#### Options

Option|Description
---|---
`--hard` | Forces a reset of the configuration files.

#### Example

```bash
vendor/bin/mftf reset --hard
```

### `run:group`

Generates and executes the listed groups of tests using Codeception.

#### Usage

`run:group [options --] <group1> <group2> ...`

#### Options

Option | Description
---|---
`-k, --skip-generate` | Skips generating from the source XML. Instead, the command executes previously-generated groups of tests.

#### Examples

Generate from XML and execute the tests with the annotations `group="group1"` and `group="group2"`:

```bash
vendor/bin/mftf run:group group1 group2
```

Execute the generated PHP tests with the tags `@group group1` and `@group group2`:

```bash
vendor/bin/mftf run:group -k -- group1 group2
```
  
### `run:test`

Generates and executes tests by name using Codeception.

#### Usage

`run:test [options --] <name1> <name2> ...`

#### Options

Option | Description
---|---
`-k, --skip-generate` | Skips generating from the source XML. Instead, the command executes previously-generated groups of tests.

#### Examples

Generate from XML and execute the `LoginCustomerTest` and `StorefrontCreateCustomerTest` tests:

```bash
vendor/bin/mftf run:test LoginCustomerTest StorefrontCreateCustomerTest
```

Execute the `LoginCustomerTest.php` and `StorefrontCreateCustomerTest.php` tests:

```bash
vendor/bin/mftf run:group -k -- LoginCustomerTest StorefrontCreateCustomerTest
```

### `upgrade:tests`

Applies all the MFTF major version upgrade scripts to test components in the given path (`test.xml`, `data.xml`, etc).

#### Usage

`upgrade:tests <path>`

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

<!-- Abbreviations -->

*[MFTF]: Magento Functional Testing Framework