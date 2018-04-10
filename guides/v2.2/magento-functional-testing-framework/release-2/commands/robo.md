---
layout: default
group: mftf
title: Robo commands
version: 2.2
github_link: magento-functional-testing-framework/release-2/commands/robo.md
functional_areas:
 - Testing
mftf-release: 2.1.2
---

_This topic was updated due to the {{page.mftf-release}} MFTF release._
{: style="text-align: right"}

Robo is a task runner for PHP that allows you to alias long, complex command line interface (CLI) commands to simple commands.

## Usage

### Format

Assuming that you're working in the `magento2/dev/tests/acceptance` directory in your terminal, run Robo commands using the following format:

```bash
vendor/bin/robo command [options] [arguments]
```

Or, if you added the path of the Robo executable file to the system *PATH*, then run Robo commands using the following format:

```bash
robo command [options] [arguments]
```

### Example

* Original:
  ```bash
  allure generate tests/_output/allure-results/ -o tests/_output/allure-report/
  ```
  
* Robo:
  ```bash
  vendor/bin/robo allure1:generate
  ```
  
## Useful commands

The following are the most popular commands used to interact with the MFTF. For more commands, see [Reference] or run in your terminal:

```bash
vendor/bin/robo
```

### Codeception Robo Commands

#### List all available Robo commands:

```bash
vendor/bin/robo
```

#### Duplicate the example configuration files used to customize the project:

```bash
vendor/bin/robo clone:files
```

#### Build the Codeception project:

```bash
vendor/bin/robo build:project
```

#### Generate all tests in PHP:

```bash
vendor/bin/robo generate:tests
```

#### Run all tests marked with the @group tag `example`, using the Chrome environment:

```bash
vendor/bin/robo example
```

#### Run all functional tests located under the directory path provided:

```bash
vendor/bin/robo folder ______
```

#### Run all functional tests, excluding @group skip:

```bash
vendor/bin/robo functional
```

#### Run all tests with the specified @group tag, excluding @group 'skip':

```bash
vendor/bin/robo group ______
```
  
### Allure Robo commands

To determine which version of the Allure command you need to use run `allure --version`.

#### Generate the HTML for the Allure report based on the test XML output:

Allure v1.x.x:

```bash
vendor/bin/robo allure1:generate
```

Allure v2.x.x:

```bash
vendor/bin/robo allure2:generate
```

#### Open the HTML Allure report:

Allure v1.x.x:

```bash
vendor/bin/robo allure1:open
```

Allure v2.x.x:

```bash
vendor/bin/robo allure2:open
```

#### Generate and open the HTML Allure report:

Allure v1.x.x:

```bash
vendor/bin/robo allure1:report
```

Allure v2.x.x:

```bash
vendor/bin/robo allure2:report
```

## Reference

#### general

`functional`      | Run all functional tests, excluding `@group 'skip'`.
`example`          | Run all Tests marked with the `@group` tag `'example'`.
`folder`        | Run all acceptance tests located under the directory path provided..
`group`         | Run all tests with the specified `@group` tag, excluding `@group 'skip'`
`help`             | Displays help for a command.
`list`             | Lists commands.
  
#### allure1

`allure1:generate`  | Generate the HTML for the Allure report based on the test XML output - Allure v1.4.X.
`allure1:open`    | Open the HTML Allure report - Allure v1.4.xX.
`allure1:report`   | Generate and open the HTML Allure report - Allure v1.4.X.

#### allure2

`allure2:generate` | Generate the HTML for the Allure report based on the test XML output - Allure .v2.3.X
`allure2:open`      | Open the HTML Allure report - Allure v2.3.X.
`allure2:report`   | Generate and open the HTML Allure report - Allure v2.3.X.
  
#### build
 
`build:project`     | Clone the example configuration files and build the Codeception project.

#### clone
  
`clone:files`       | Duplicate the example configuration files used to customize the project.

#### generate

Generate PHP code from the tests defined in XML files.
Path to a directory with generated tests:  `tests/functional/Magento/FunctionalTest/_generated/`.

`generate:tests`   | Generate all tests based on specific module load order of the Magento instance
`generate:tests --force`   | Generate all tests regardless of whether a Magento instance is available
`generate:tests --config singleRun`   | Generate all tests and a manifest file, which is `_generated/testManifest.txt`. The file contains only a path to the directory with generated tests. 
`generate:tests --config parallel --nodes <number of nodes>`   | Generate all tests and a directory with manifest files, which is `_generated/groups/`. The number of files corresponds to the number of nodes. Each file contains a proportional list of tests ordered across files from largest to smallest (based on number of actions).

#### self

`self:update` or `update`| Updates the `robo.phar` to the latest version, which only works when running the `phar` version of Robo.

<!-- LINK DEFINITIONS -->

[Reference]: #reference

<!-- Abbreviations -->

*[MFTF]: Magento Functional Testing Framework
