---
layout: default
group: mftf
title: Codeception commands available in the Magento Functional Testing Framework
github_link: magento-functional-testing-framework/commands/codeception.md
---

The following list contains commands and options available in __Codeception 2.3.0__

## Usage

Assuming that you're working in the `magento2ce/dev/tests/acceptance` directory in your terminal, run Robo commands using the following format:

```bash
$ vendor/bin/codecept command [options] [arguments]
```

Or, if you added path of the Robo executable file to the system *PATH*, then run Robo commands using the following format:

```bash
$ codecept command [options] [arguments]
```

## Options

`-h`, `--help`             |Display this help message
`-q`, `--quiet`            |Do not output any message
`-V`, `--version`          |Display this application version
`--ansi`             |Force ANSI output
`--no-ansi`          |Disable ANSI output
`-n`, `--no-interaction`   |Do not ask any interactive question
`-c`, `--config``[=CONFIG]`  |Use custom path for config
`-v|vv|vvv`, `--verbose`   |Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug

## Available commands

#### general

[`_completion`](#_completion) |BASH completion hook.
[`bootstrap`](#bootstrap)|Creates default test suites and generates all required files
[`build`](#build)|Generates base classes for all suites
[`clean`](#clean)|Cleans or creates _output directory
[`console`](#console)|Launches interactive test console
[`dry-run`](#dry-run)|Prints step-by-step scenario-driven test or a feature
[`help`](#help)|Displays help for a command
[`init`](#init)|Creates test suites by a template
[`list`](#list)|Lists commands
[`run`](#run)|Runs the test suites

#### config

[`config:validate`](#configvalidate)|Validates and prints config to screen

#### generate

[`generate:cept`](#generatecept)|Generates empty Cept file in suite
[`generate:cest`](#generatecest)|Generates empty Cest file in suite
[`generate:environment`](#generateenvironment)|Generates empty environment config
[`generate:feature`](#generatefeature)|Generates empty feature file in suite
[`generate:groupobject`](#generategroupobject)|Generates Group subscriber
[`generate:helper`](#generatehelper)|Generates new helper
[`generate:pageobject`](#generatepageobject)|Generates empty PageObject class
[`generate:scenarios`](#generatescenarios)|Generates text representation for all scenarios
[`generate:stepobject`](#generatestepobject)|Generates empty StepObject class
[`generate:suite`](#generatesuite)|Generates new test suite
[`generate:test`](#generatetest)|Generates empty unit test file in suite

#### gherkin

[`gherkin:snippets`](#gherkinsnippets)|Fetches empty steps from feature files of suite and prints code snippets for them
[`gherkin:steps`](#gherkinsteps)|Prints all defined feature steps

***
***

### `_completion`

BASH completion hook.

#### Usage

* `_completion [-g|--generate-hook] [-p|--program PROGRAM] [-m|--multiple] [--shell-type [SHELL-TYPE]] [--use-vendor-bin]`

To enable BASH completion, run:

    eval `[program] _completion -g`.

Or for an alias:

    eval `[program] _completion -g -p [alias]`.


#### Options

##### `--generate-hook|-g`

Generate BASH code that sets up completion for this application.

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--program|-p`

Program name that should trigger completion
(defaults to the absolute application path).

* Accept value: yes
* Is value required: yes
* Is multiple: no
* Default: `NULL`

##### `--multiple|-m`

Generated hook can be used for multiple applications.

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--shell-type`

Set the shell type (zsh or bash). Otherwise this is determined automatically.

* Accept value: yes
* Is value required: no
* Is multiple: no
* Default: `NULL`

##### `--use-vendor-bin`

Use the vendor bin for autocompletion.

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`


***
***

### `bootstrap`


Creates default test suites and generates all required files

#### Usage

* `bootstrap [-ns|--namespace [NAMESPACE]] [-a|--actor [ACTOR]] [-e|--empty] [--] [<path>]`

Creates default test suites and generates all required files

#### Arguments

##### `path`

custom installation dir

* Is required: no
* Is array: no
* Default: `NULL`

#### Options

##### `--namespace|-ns`

Namespace to add for actor classes and helpers

* Accept value: yes
* Is value required: no
* Is multiple: no
* Default: `NULL`

##### `--actor|-a`

Custom actor instead of Tester

* Accept value: yes
* Is value required: no
* Is multiple: no
* Default: `NULL`

##### `--empty|-e`

Don't create standard suites

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--help|-h`

Display this help message

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--quiet|-q`

Do not output any message

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--verbose|-v|-vv|-vvv`

Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--version|-V`

Display this application version

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--ansi`

Force ANSI output

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--no-ansi`

Disable ANSI output

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--no-interaction|-n`

Do not ask any interactive question

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--config|-c`

Use custom path for config

* Accept value: yes
* Is value required: no
* Is multiple: no
* Default: `NULL`


***
***

### `build`


Generates base classes for all suites

#### Usage

* `build`

Generates base classes for all suites

#### Options

##### `--help|-h`

Display this help message

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--quiet|-q`

Do not output any message

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--verbose|-v|-vv|-vvv`

Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--version|-V`

Display this application version

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--ansi`

Force ANSI output

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--no-ansi`

Disable ANSI output

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--no-interaction|-n`

Do not ask any interactive question

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--config|-c`

Use custom path for config

* Accept value: yes
* Is value required: no
* Is multiple: no
* Default: `NULL`

### `clean`


Cleans or creates _output directory

#### Usage

* `clean`

Cleans or creates _output directory

#### Options

##### `--help|-h`

Display this help message

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--quiet|-q`

Do not output any message

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--verbose|-v|-vv|-vvv`

Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--version|-V`

Display this application version

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--ansi`

Force ANSI output

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--no-ansi`

Disable ANSI output

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--no-interaction|-n`

Do not ask any interactive question

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--config|-c`

Use custom path for config

* Accept value: yes
* Is value required: no
* Is multiple: no
* Default: `NULL`


***
***

### `console`


Launches interactive test console

#### Usage

* `console [--colors] [--] <suite>`

Launches interactive test console

#### Arguments

##### `suite`

suite to be executed

* Is required: yes
* Is array: no
* Default: `NULL`

#### Options

##### `--colors`

Use colors in output

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--help|-h`

Display this help message

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--quiet|-q`

Do not output any message

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--verbose|-v|-vv|-vvv`

Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--version|-V`

Display this application version

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--ansi`

Force ANSI output

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--no-ansi`

Disable ANSI output

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--no-interaction|-n`

Do not ask any interactive question

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--config|-c`

Use custom path for config

* Accept value: yes
* Is value required: no
* Is multiple: no
* Default: `NULL`


***
***

### `dry-run`


Prints step-by-step scenario-driven test or a feature

#### Usage

* `dry-run <suite> [<test>]`

Prints step-by-step scenario-driven test or a feature

#### Arguments

##### `suite`

suite to scan for feature files

* Is required: yes
* Is array: no
* Default: `NULL`

##### `test`

tests to be loaded

* Is required: no
* Is array: no
* Default: `NULL`

#### Options

##### `--help|-h`

Display this help message

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--quiet|-q`

Do not output any message

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--verbose|-v|-vv|-vvv`

Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--version|-V`

Display this application version

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--ansi`

Force ANSI output

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--no-ansi`

Disable ANSI output

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--no-interaction|-n`

Do not ask any interactive question

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--config|-c`

Use custom path for config

* Accept value: yes
* Is value required: no
* Is multiple: no
* Default: `NULL`


***
***

### `help`


Displays help for a command

#### Usage

* `help [--format FORMAT] [--raw] [--] [<command_name>]`

The help command displays help for a given command:

```bash
$ php .../mftf/magento2ce/dev/tests/acceptance/vendor/codeception/codeception/codecept help list
```

You can also output the help in other formats by using the --format option:

```bash
$ php .../mftf/magento2ce/dev/tests/acceptance/vendor/codeception/codeception/codecept help --format=xml list
```

To display the list of available commands, please use the list command.

#### Arguments

##### `command_name`

The command name

* Is required: no
* Is array: no
* Default: `'help'`

#### Options

##### `--format`

The output format (txt, xml, json, or md)

* Accept value: yes
* Is value required: yes
* Is multiple: no
* Default: `'txt'`

##### `--raw`

To output raw command help

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--help|-h`

Display this help message

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--quiet|-q`

Do not output any message

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--verbose|-v|-vv|-vvv`

Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--version|-V`

Display this application version

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--ansi`

Force ANSI output

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--no-ansi`

Disable ANSI output

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--no-interaction|-n`

Do not ask any interactive question

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--config|-c`

Use custom path for config

* Accept value: yes
* Is value required: no
* Is multiple: no
* Default: `NULL`


***
***

### `init`


Creates test suites by a template

#### Usage

* `init [--path PATH] [--namespace [NAMESPACE]] [--] <template>`

Creates test suites by a template

#### Arguments

##### `template`

Init template for the setup

* Is required: yes
* Is array: no
* Default: `NULL`

#### Options

##### `--path`

Change current directory

* Accept value: yes
* Is value required: yes
* Is multiple: no
* Default: `NULL`

##### `--namespace`

Namespace to add for actor classes and helpers'

* Accept value: yes
* Is value required: no
* Is multiple: no
* Default: `NULL`

##### `--help|-h`

Display this help message

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--quiet|-q`

Do not output any message

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--verbose|-v|-vv|-vvv`

Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--version|-V`

Display this application version

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--ansi`

Force ANSI output

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--no-ansi`

Disable ANSI output

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--no-interaction|-n`

Do not ask any interactive question

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--config|-c`

Use custom path for config

* Accept value: yes
* Is value required: no
* Is multiple: no
* Default: `NULL`


***
***

### `list`


Lists commands

#### Usage

* `list [--raw] [--format FORMAT] [--] [<namespace>]`

The list command lists all commands:


```bash
$ php .../mftf/magento2ce/dev/tests/acceptance/vendor/codeception/codeception/codecept list
```

You can also display the commands for a specific namespace:


```bash
$ php .../mftf/magento2ce/dev/tests/acceptance/vendor/codeception/codeception/codecept list test
```

You can also output the information in other formats by using the --format option:


```bash
$ php .../mftf/magento2ce/dev/tests/acceptance/vendor/codeception/codeception/codecept list --format=xml
```

It's also possible to get raw list of commands (useful for embedding command runner):


```bash
$ php .../mftf/magento2ce/dev/tests/acceptance/vendor/codeception/codeception/codecept list --raw
```

#### Arguments

##### `namespace`

The namespace name

* Is required: no
* Is array: no
* Default: `NULL`

#### Options

##### `--raw`

To output raw command list

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--format`

The output format (txt, xml, json, or md)

* Accept value: yes
* Is value required: yes
* Is multiple: no
* Default: `'txt'`


***
***

### `run`


Runs the test suites

#### Usage

* `run [-o|--override OVERRIDE] [-e|--ext EXT] [--report] [--html [HTML]] [--xml [XML]] [--tap [TAP]] [--json [JSON]] [--colors] [--no-colors] [--silent] [--steps] [-d|--debug] [--coverage [COVERAGE]] [--coverage-html [COVERAGE-HTML]] [--coverage-xml [COVERAGE-XML]] [--coverage-text [COVERAGE-TEXT]] [--coverage-crap4j [COVERAGE-CRAP4J]] [--no-exit] [-g|--group GROUP] [-s|--skip SKIP] [-x|--skip-group SKIP-GROUP] [--env ENV] [-f|--fail-fast] [--no-rebuild] [--] [<suite>] [<test>]`

Runs the test suites

#### Arguments

##### `suite`

suite to be tested

* Is required: no
* Is array: no
* Default: `NULL`

##### `test`

test to be run

* Is required: no
* Is array: no
* Default: `NULL`

#### Options

##### `--override|-o`

Override config values

* Accept value: yes
* Is value required: yes
* Is multiple: yes
* Default: `array ()`

##### `--ext|-e`

Run with extension enabled

* Accept value: yes
* Is value required: yes
* Is multiple: yes
* Default: `array ()`

##### `--report`

Show output in compact style

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--html`

Generate html with results

* Accept value: yes
* Is value required: no
* Is multiple: no
* Default: `'report.html'`

##### `--xml`

Generate JUnit XML Log

* Accept value: yes
* Is value required: no
* Is multiple: no
* Default: `'report.xml'`

##### `--tap`

Generate Tap Log

* Accept value: yes
* Is value required: no
* Is multiple: no
* Default: `'report.tap.log'`

##### `--json`

Generate Json Log

* Accept value: yes
* Is value required: no
* Is multiple: no
* Default: `'report.json'`

##### `--colors`

Use colors in output

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--no-colors`

Force no colors in output (useful to override config file)

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--silent`

Only outputs suite names and final results

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--steps`

Show steps in output

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--debug|-d`

Show debug and scenario output

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--coverage`

Run with code coverage

* Accept value: yes
* Is value required: no
* Is multiple: no
* Default: `'coverage.serialized'`

##### `--coverage-html`

Generate CodeCoverage HTML report in path

* Accept value: yes
* Is value required: no
* Is multiple: no
* Default: `'coverage'`

##### `--coverage-xml`

Generate CodeCoverage XML report in file

* Accept value: yes
* Is value required: no
* Is multiple: no
* Default: `'coverage.xml'`

##### `--coverage-text`

Generate CodeCoverage text report in file

* Accept value: yes
* Is value required: no
* Is multiple: no
* Default: `'coverage.txt'`

##### `--coverage-crap4j`

Generate CodeCoverage report in Crap4J XML format

* Accept value: yes
* Is value required: no
* Is multiple: no
* Default: `'crap4j.xml'`

##### `--no-exit`

Don't finish with exit code

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--group|-g`

Groups of tests to be executed

* Accept value: yes
* Is value required: yes
* Is multiple: yes
* Default: `array ()`

##### `--skip|-s`

Skip selected suites

* Accept value: yes
* Is value required: yes
* Is multiple: yes
* Default: `array ()`

##### `--skip-group|-x`

Skip selected groups

* Accept value: yes
* Is value required: yes
* Is multiple: yes
* Default: `array ()`

##### `--env`

Run tests in selected environments.

* Accept value: yes
* Is value required: yes
* Is multiple: yes
* Default: `array ()`

##### `--fail-fast|-f`

Stop after first failure

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--no-rebuild`

Do not rebuild actor classes on start

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--help|-h`

Display this help message

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--quiet|-q`

Do not output any message

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--verbose|-v|-vv|-vvv`

Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--version|-V`

Display this application version

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--ansi`

Force ANSI output

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--no-ansi`

Disable ANSI output

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--no-interaction|-n`

Do not ask any interactive question

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--config|-c`

Use custom path for config

* Accept value: yes
* Is value required: no
* Is multiple: no
* Default: `NULL`


***
***

### `config:validate`


Validates and prints config to screen

#### Usage

* `config:validate [-c|--config [CONFIG]] [-o|--override OVERRIDE] [--] [<suite>]`

Validates and prints config to screen

#### Arguments

##### `suite`

to show suite configuration

* Is required: no
* Is array: no
* Default: `NULL`

#### Options

##### `--config|-c`

Use custom path for config

* Accept value: yes
* Is value required: no
* Is multiple: no
* Default: `NULL`

##### `--override|-o`

Override config values

* Accept value: yes
* Is value required: yes
* Is multiple: yes
* Default: `array ()`

##### `--help|-h`

Display this help message

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--quiet|-q`

Do not output any message

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--verbose|-v|-vv|-vvv`

Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--version|-V`

Display this application version

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--ansi`

Force ANSI output

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--no-ansi`

Disable ANSI output

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--no-interaction|-n`

Do not ask any interactive question

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`


***
***

### `generate:cept`


Generates empty Cept file in suite

#### Usage

* `generate:cept <suite> <test>`

Generates empty Cept file in suite

#### Arguments

##### `suite`

suite to be tested

* Is required: yes
* Is array: no
* Default: `NULL`

##### `test`

test to be run

* Is required: yes
* Is array: no
* Default: `NULL`

#### Options

##### `--help|-h`

Display this help message

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--quiet|-q`

Do not output any message

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--verbose|-v|-vv|-vvv`

Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--version|-V`

Display this application version

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--ansi`

Force ANSI output

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--no-ansi`

Disable ANSI output

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--no-interaction|-n`

Do not ask any interactive question

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--config|-c`

Use custom path for config

* Accept value: yes
* Is value required: no
* Is multiple: no
* Default: `NULL`


***
***

### `generate:cest`


Generates empty Cest file in suite

#### Usage

* `generate:cest <suite> <class>`

Generates empty Cest file in suite

#### Arguments

##### `suite`

suite where tests will be put

* Is required: yes
* Is array: no
* Default: `NULL`

##### `class`

test name

* Is required: yes
* Is array: no
* Default: `NULL`

#### Options

##### `--help|-h`

Display this help message

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--quiet|-q`

Do not output any message

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--verbose|-v|-vv|-vvv`

Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--version|-V`

Display this application version

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--ansi`

Force ANSI output

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--no-ansi`

Disable ANSI output

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--no-interaction|-n`

Do not ask any interactive question

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--config|-c`

Use custom path for config

* Accept value: yes
* Is value required: no
* Is multiple: no
* Default: `NULL`


***
***

### `generate:environment`


Generates empty environment config

#### Usage

* `generate:environment <env>`

Generates empty environment config

#### Arguments

##### `env`

Environment name

* Is required: yes
* Is array: no
* Default: `NULL`

#### Options

##### `--help|-h`

Display this help message

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--quiet|-q`

Do not output any message

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--verbose|-v|-vv|-vvv`

Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--version|-V`

Display this application version

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--ansi`

Force ANSI output

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--no-ansi`

Disable ANSI output

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--no-interaction|-n`

Do not ask any interactive question

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--config|-c`

Use custom path for config

* Accept value: yes
* Is value required: no
* Is multiple: no
* Default: `NULL`


***
***

### `generate:feature`


Generates empty feature file in suite

#### Usage

* `generate:feature [-c|--config [CONFIG]] [--] <suite> <feature>`

Generates empty feature file in suite

#### Arguments

##### `suite`

suite to be tested

* Is required: yes
* Is array: no
* Default: `NULL`

##### `feature`

feature to be generated

* Is required: yes
* Is array: no
* Default: `NULL`

#### Options

##### `--config|-c`

Use custom path for config

* Accept value: yes
* Is value required: no
* Is multiple: no
* Default: `NULL`

##### `--help|-h`

Display this help message

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--quiet|-q`

Do not output any message

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--verbose|-v|-vv|-vvv`

Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--version|-V`

Display this application version

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--ansi`

Force ANSI output

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--no-ansi`

Disable ANSI output

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--no-interaction|-n`

Do not ask any interactive question

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`


***
***

### `generate:groupobject`


Generates Group subscriber

#### Usage

* `generate:groupobject <group>`

Generates Group subscriber

#### Arguments

##### `group`

Group class name

* Is required: yes
* Is array: no
* Default: `NULL`

#### Options

##### `--help|-h`

Display this help message

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--quiet|-q`

Do not output any message

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--verbose|-v|-vv|-vvv`

Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--version|-V`

Display this application version

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--ansi`

Force ANSI output

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--no-ansi`

Disable ANSI output

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--no-interaction|-n`

Do not ask any interactive question

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--config|-c`

Use custom path for config

* Accept value: yes
* Is value required: no
* Is multiple: no
* Default: `NULL`


***
***

### `generate:helper`


Generates new helper

#### Usage

* `generate:helper <name>`

Generates new helper

#### Arguments

##### `name`

helper name

* Is required: yes
* Is array: no
* Default: `NULL`

#### Options

##### `--help|-h`

Display this help message

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--quiet|-q`

Do not output any message

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--verbose|-v|-vv|-vvv`

Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--version|-V`

Display this application version

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--ansi`

Force ANSI output

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--no-ansi`

Disable ANSI output

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--no-interaction|-n`

Do not ask any interactive question

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--config|-c`

Use custom path for config

* Accept value: yes
* Is value required: no
* Is multiple: no
* Default: `NULL`


***
***

### `generate:pageobject`


Generates empty PageObject class

#### Usage

* `generate:pageobject <suite> [<page>]`

Generates empty PageObject class

#### Arguments

##### `suite`

Either suite name or page object name)

* Is required: yes
* Is array: no
* Default: `NULL`

##### `page`

Page name of pageobject to represent

* Is required: no
* Is array: no
* Default: `NULL`

#### Options

##### `--help|-h`

Display this help message

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--quiet|-q`

Do not output any message

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--verbose|-v|-vv|-vvv`

Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--version|-V`

Display this application version

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--ansi`

Force ANSI output

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--no-ansi`

Disable ANSI output

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--no-interaction|-n`

Do not ask any interactive question

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--config|-c`

Use custom path for config

* Accept value: yes
* Is value required: no
* Is multiple: no
* Default: `NULL`


***
***

### `generate:scenarios`


Generates text representation for all scenarios

#### Usage

* `generate:scenarios [-p|--path PATH] [--single-file] [-f|--format FORMAT] [--] <suite>`

Generates text representation for all scenarios

#### Arguments

##### `suite`

suite from which texts should be generated

* Is required: yes
* Is array: no
* Default: `NULL`

#### Options

##### `--path|-p`

Use specified path as destination instead of default

* Accept value: yes
* Is value required: yes
* Is multiple: no
* Default: `NULL`

##### `--single-file`

Render all scenarios to only one file

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--format|-f`

Specify output format: html or text (default)

* Accept value: yes
* Is value required: yes
* Is multiple: no
* Default: `'text'`

##### `--help|-h`

Display this help message

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--quiet|-q`

Do not output any message

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--verbose|-v|-vv|-vvv`

Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--version|-V`

Display this application version

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--ansi`

Force ANSI output

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--no-ansi`

Disable ANSI output

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--no-interaction|-n`

Do not ask any interactive question

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--config|-c`

Use custom path for config

* Accept value: yes
* Is value required: no
* Is multiple: no
* Default: `NULL`


***
***

### `generate:stepobject`


Generates empty StepObject class

#### Usage

* `generate:stepobject [--silent] [--] <suite> <step>`

Generates empty StepObject class

#### Arguments

##### `suite`

Suite for StepObject

* Is required: yes
* Is array: no
* Default: `NULL`

##### `step`

StepObject name

* Is required: yes
* Is array: no
* Default: `NULL`

#### Options

##### `--silent`

skip verification question

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--help|-h`

Display this help message

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--quiet|-q`

Do not output any message

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--verbose|-v|-vv|-vvv`

Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--version|-V`

Display this application version

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--ansi`

Force ANSI output

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--no-ansi`

Disable ANSI output

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--no-interaction|-n`

Do not ask any interactive question

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--config|-c`

Use custom path for config

* Accept value: yes
* Is value required: no
* Is multiple: no
* Default: `NULL`


***
***

### `generate:suite`


Generates new test suite

#### Usage

* `generate:suite <suite> [<actor>]`

Generates new test suite

#### Arguments

##### `suite`

suite to be generated

* Is required: yes
* Is array: no
* Default: `NULL`

##### `actor`

name of new actor class

* Is required: no
* Is array: no
* Default: `NULL`

#### Options

##### `--help|-h`

Display this help message

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--quiet|-q`

Do not output any message

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--verbose|-v|-vv|-vvv`

Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--version|-V`

Display this application version

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--ansi`

Force ANSI output

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--no-ansi`

Disable ANSI output

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--no-interaction|-n`

Do not ask any interactive question

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--config|-c`

Use custom path for config

* Accept value: yes
* Is value required: no
* Is multiple: no
* Default: `NULL`


***
***

### `generate:test`


Generates empty unit test file in suite

#### Usage

* `generate:test <suite> <class>`

Generates empty unit test file in suite

#### Arguments

##### `suite`

suite where tests will be put

* Is required: yes
* Is array: no
* Default: `NULL`

##### `class`

class name

* Is required: yes
* Is array: no
* Default: `NULL`

#### Options

##### `--help|-h`

Display this help message

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--quiet|-q`

Do not output any message

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--verbose|-v|-vv|-vvv`

Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--version|-V`

Display this application version

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--ansi`

Force ANSI output

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--no-ansi`

Disable ANSI output

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--no-interaction|-n`

Do not ask any interactive question

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--config|-c`

Use custom path for config

* Accept value: yes
* Is value required: no
* Is multiple: no
* Default: `NULL`


***
***

### `gherkin:snippets`


Fetches empty steps from feature files of suite and prints code snippets for them

#### Usage

* `gherkin:snippets [-c|--config [CONFIG]] [--] <suite> [<test>]`

Fetches empty steps from feature files of suite and prints code snippets for them

#### Arguments

##### `suite`

suite to scan for feature files

* Is required: yes
* Is array: no
* Default: `NULL`

##### `test`

test to be scanned

* Is required: no
* Is array: no
* Default: `NULL`

#### Options

##### `--config|-c`

Use custom path for config

* Accept value: yes
* Is value required: no
* Is multiple: no
* Default: `NULL`

##### `--help|-h`

Display this help message

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--quiet|-q`

Do not output any message

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--verbose|-v|-vv|-vvv`

Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--version|-V`

Display this application version

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--ansi`

Force ANSI output

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--no-ansi`

Disable ANSI output

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--no-interaction|-n`

Do not ask any interactive question

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`


***
***

### `gherkin:steps`


Prints all defined feature steps

#### Usage

* `gherkin:steps [-c|--config [CONFIG]] [--] <suite>`

Prints all defined feature steps

#### Arguments

##### `suite`

suite to scan for feature files

* Is required: yes
* Is array: no
* Default: `NULL`

#### Options

##### `--config|-c`

Use custom path for config

* Accept value: yes
* Is value required: no
* Is multiple: no
* Default: `NULL`

##### `--help|-h`

Display this help message

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--quiet|-q`

Do not output any message

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--verbose|-v|-vv|-vvv`

Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--version|-V`

Display this application version

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--ansi`

Force ANSI output

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--no-ansi`

Disable ANSI output

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--no-interaction|-n`

Do not ask any interactive question

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`