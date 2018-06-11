---
group: mftf
title: Robo commands in the Magento Functional Testing Framework
version: 2.2
github_link: magento-functional-testing-framework/release-1/commands/robo.md
functional_areas:
 - Testing
redirect_from: /guides/v2.2/magento-functional-testing-framework/commands/robo.html
mftf-release: 1.0.0
---

_This topic was updated due to the {{page.mftf-release}} MFTF release._
{: style="text-align: right"}

Robo is a task runner for PHP that allows you to alias long complex CLI commands to simple commands.

## Usage

### Format

Assuming that you're working in the `magento2/dev/tests/acceptance` directory in your terminal, run Robo commands using the following format:

```bash
vendor/bin/robo command [options] [arguments]
```

Or, if you added path of the Robo executable file to the system *PATH*, then run Robo commands using the following format:

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

## Most useful commands

The following list contains most popular commands purposed to interact with the MFTF.

For more commands, see [Reference] or run in your terminal: `$ vendor/bin/robo`.

### Codeception Robo Commands

#### List all available Robo commands:

```bash
vendor/bin/robo
```

#### Duplicate the Example configuration files used to customize the Project:

```bash
vendor/bin/robo clone:files
```

#### Build the Codeception project:

```bash
vendor/bin/robo build:project
```

#### Generate all Tests in PHP:

```bash
vendor/bin/robo generate:tests
```

#### Run all Tests marked with the @group tag 'example', using the Chrome environment:

```bash
vendor/bin/robo example
```

#### Run all Functional tests located under the Directory Path provided:

```bash
vendor/bin/robo folder ______
```

#### Run all Functional tests, excluding @group skip:

```bash
vendor/bin/robo functional
```

#### Run all Tests with the specified @group tag, excluding @group 'skip':

```bash
vendor/bin/robo group ______
```

### Allure Robo Commands

To determine which version of the Allure command you need to use please run `allure --version`.

#### Generate the HTML for the Allure report based on the Test XML output:

Allure v1.x.x | Allure v2.x.x
---|---
`$ vendor/bin/robo allure1:generate` | `$ vendor/bin/robo allure2:generate`

#### Open the HTML Allure report:

Allure v1.x.x | Allure v2.x.x
---|---
`$ vendor/bin/robo allure1:open` | `$ vendor/bin/robo allure2:open`

#### Generate and open the HTML Allure report:

Allure v1.x.x | Allure v2.x.x
---|---
`$ vendor/bin/robo allure1:report` | `$ vendor/bin/robo allure2:report`

## Reference

#### general

`functional`      | Run all functional tests, excluding `@group 'skip'`
`example`          | Run all Tests marked with the `@group` tag `'example'`
`folder`        | Run all Acceptance tests located under the Directory Path provided
`group`         | Run all Tests with the specified `@group` tag, excluding `@group 'skip'`
`help`             | Displays help for a command
`list`             | Lists commands

#### allure1

`allure1:generate`  | Generate the HTML for the Allure report based on the Test XML output - Allure v1.4.X
`allure1:open`    | Open the HTML Allure report - Allure v1.4.xX
`allure1:report`   | Generate and open the HTML Allure report - Allure v1.4.X

#### allure2

`allure2:generate` | Generate the HTML for the Allure report based on the Test XML output - Allure v2.3.X
`allure2:open`      | Open the HTML Allure report - Allure v2.3.X
`allure2:report`   | Generate and open the HTML Allure report - Allure v2.3.X

#### build

`build:project`     | Clone the Example configuration files Build the Codeception project

#### clone

`clone:files`       | Duplicate the Example configuration files used to customize the Project for customization

#### generate

`generate:tests`   | Generate all Tests

#### self

`self:update` or `update`       | Updates the `robo.phar` to the latest version. Only works when running the `phar` version of Robo.

***
***

<!-- LINK DEFINITIONS -->

[Reference]: #reference

<!-- Abbreviations -->

*[MFTF]: Magento Functional Testing Framework
