---
layout: default
group: mftf
title: Robo commands available in the Magento Functional Testing Framework
github_link: magento-functional-testing-framework/commands/robo.md
---

The following list contains commands and options available in __Robo 1.1.3__.

## Usage

```bash
$ command [options] [arguments]
```

## Options

`-h` or `--help`                          | Display this help message
`-q` or `--quiet`                         | Do not output any message
`-V` or `--version`                       | Display this application version
`--ansi`                          | Force ANSI output
`--no-ansi`                       | Disable ANSI output
`-n` or `--no-interaction`                | Do not ask any interactive question
`--simulate`                      | Run in simulated mode (show what would have happened).
`--progress-delay=PROGRESS-DELAY` | Number of seconds before progress bar is displayed in long-running task collections. Default: 2s. [default: 2]
`-D` or `--define=DEFINE`                 | Define a configuration item value. (multiple values allowed)
`-v|vv|vvv`, `--verbose`                | Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug

## Available commands

#### general

[`chrome`](#chrome)           | Run all Acceptance tests using the Chrome environment
[`example`](#example)          | Run all Tests marked with the `@group` tag `'example'`, using the Chrome environment
[`firefox`](#firefox)          | Run all Acceptance tests using the FireFox environment
[`folder`](#folder)           | Run all Acceptance tests located under the Directory Path provided using the Chrome environment
[`group`](#group)            | Run all Tests with the specified `@group` tag, excluding `@group 'skip'`, using the Chrome environment
[`help`](#help)             | Displays help for a command
[`list`](#list)             | Lists commands
[`phantomjs`](#phantomjs)        | Run all Acceptance tests using the PhantomJS environment
  
#### allure1

[`allure1:generate`](#allure1generate)  |Generate the HTML for the Allure report based on the Test XML output - Allure v1.4.X
[`allure1:open`](#allure1open)      |Open the HTML Allure report - Allure v1.4.xX
[`allure1:report`](#allure1report)    |Generate and open the HTML Allure report - Allure v1.4.X

#### allure2

[`allure2:generate`](#allure2generate)  |Generate the HTML for the Allure report based on the Test XML output - Allure v2.3.X
[`allure2:open`](#allure2open)      |Open the HTML Allure report - Allure v2.3.X
[`allure2:report`](#allure2report)    |Generate and open the HTML Allure report - Allure v2.3.X
  
#### build
 
[`build:project`](#build:project)     |Clone the Example configuration files Build the Codeception project

#### clone
  
[`clone:files`](#clonefiles)       |Duplicate the Example configuration files used to customize the Project for customization

#### generate

[`generate:tests`](#generatetests)    |Generate all Tests
  
#### self

[`self:update`](#self:update) or `update`       |Updates the `robo.phar` to the latest version. Only works when running the `phar` version of Robo.

***
***

### `chrome`

Run all Acceptance tests using the Chrome environment

#### Usage

* `chrome`

Run all Acceptance tests using the Chrome environment

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

##### `--simulate`

Run in simulated mode (show what would have happened).

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--progress-delay`

Number of seconds before progress bar is displayed in long-running task collections. Default: 2s.

* Accept value: yes
* Is value required: yes
* Is multiple: no
* Default: `2`

##### `--define|-D`

Define a configuration item value.

* Accept value: yes
* Is value required: yes
* Is multiple: yes
* Default: `array ()`

***
***

### `example`

Run all Tests marked with the @group tag 'example', using the Chrome environment

#### Usage

* `example`

Run all Tests marked with the @group tag 'example', using the Chrome environment

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

##### `--simulate`

Run in simulated mode (show what would have happened).

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--progress-delay`

Number of seconds before progress bar is displayed in long-running task collections. Default: 2s.

* Accept value: yes
* Is value required: yes
* Is multiple: no
* Default: `2`

##### `--define|-D`

Define a configuration item value.

* Accept value: yes
* Is value required: yes
* Is multiple: yes
* Default: `array ()`

***
***

### `firefox`

Run all Acceptance tests using the FireFox environment

#### Usage

* `firefox`

Run all Acceptance tests using the FireFox environment

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

##### `--simulate`

Run in simulated mode (show what would have happened).

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--progress-delay`

Number of seconds before progress bar is displayed in long-running task collections. Default: 2s.

* Accept value: yes
* Is value required: yes
* Is multiple: no
* Default: `2`

##### `--define|-D`

Define a configuration item value.

* Accept value: yes
* Is value required: yes
* Is multiple: yes
* Default: `array ()`

***
***

### `folder`

Run all Acceptance tests located under the Directory Path provided using the Chrome environment

#### Usage

* `folder [<args>]`

Run all Acceptance tests located under the Directory Path provided using the Chrome environment

#### Arguments

##### `args`

* Is required: no
* Is array: no
* Default: `''`

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

##### `--simulate`

Run in simulated mode (show what would have happened).

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--progress-delay`

Number of seconds before progress bar is displayed in long-running task collections. Default: 2s.

* Accept value: yes
* Is value required: yes
* Is multiple: no
* Default: `2`

##### `--define|-D`

Define a configuration item value.

* Accept value: yes
* Is value required: yes
* Is multiple: yes
* Default: `array ()`

***
***

### `group`

Run all Tests with the specified @group tag, excluding @group 'skip', using the Chrome environment

#### Usage

* `group [<args>]`

Run all Tests with the specified @group tag, excluding @group 'skip', using the Chrome environment

#### Arguments

##### `args`

* Is required: no
* Is array: no
* Default: `''`

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

##### `--simulate`

Run in simulated mode (show what would have happened).

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--progress-delay`

Number of seconds before progress bar is displayed in long-running task collections. Default: 2s.

* Accept value: yes
* Is value required: yes
* Is multiple: no
* Default: `2`

##### `--define|-D`

Define a configuration item value.

* Accept value: yes
* Is value required: yes
* Is multiple: yes
* Default: `array ()`

***
***

### `help`

Displays help for a command

#### Usage

* `help [--format FORMAT] [--raw] [--] [<command_name>]`

The help command displays help for a given command:

  php .../mftf/magento2ce/dev/tests/acceptance/vendor/consolidation/robo/robo help list

You can also output the help in other formats by using the --format option:

  php .../mftf/magento2ce/dev/tests/acceptance/vendor/consolidation/robo/robo help --format=xml list

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

##### `--simulate`

Run in simulated mode (show what would have happened).

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--progress-delay`

Number of seconds before progress bar is displayed in long-running task collections. Default: 2s.

* Accept value: yes
* Is value required: yes
* Is multiple: no
* Default: `2`

##### `--define|-D`

Define a configuration item value.

* Accept value: yes
* Is value required: yes
* Is multiple: yes
* Default: `array ()`

***
***

### `list`

Lists commands

#### Usage

* `list [--raw] [--format FORMAT] [-h|--help] [-q|--quiet] [-v|vv|vvv|--verbose] [-V|--version] [--ansi] [--no-ansi] [-n|--no-interaction] [--simulate] [--progress-delay PROGRESS-DELAY] [-D|--define DEFINE] [--] <command> [<namespace>]`

The list command lists all commands:

  php .../mftf/magento2ce/dev/tests/acceptance/vendor/consolidation/robo/robo list

You can also display the commands for a specific namespace:

  php .../repos/mftf/magento2ce/dev/tests/acceptance/vendor/consolidation/robo/robo list test

You can also output the information in other formats by using the --format option:

  php .../mftf/magento2ce/dev/tests/acceptance/vendor/consolidation/robo/robo list --format=xml

It's also possible to get raw list of commands (useful for embedding command runner):

  php .../mftf/magento2ce/dev/tests/acceptance/vendor/consolidation/robo/robo list --raw

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

### `phantomjs`

Run all Acceptance tests using the PhantomJS environment

#### Usage

* `phantomjs`

Run all Acceptance tests using the PhantomJS environment

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

##### `--simulate`

Run in simulated mode (show what would have happened).

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--progress-delay`

Number of seconds before progress bar is displayed in long-running task collections. Default: 2s.

* Accept value: yes
* Is value required: yes
* Is multiple: no
* Default: `2`

##### `--define|-D`

Define a configuration item value.

* Accept value: yes
* Is value required: yes
* Is multiple: yes
* Default: `array ()`

***
***

### `allure1:generate`

Generate the HTML for the Allure report based on the Test XML output - Allure v1.4.X

#### Usage

* `allure1:generate`

Generate the HTML for the Allure report based on the Test XML output - Allure v1.4.X

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

##### `--simulate`

Run in simulated mode (show what would have happened).

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--progress-delay`

Number of seconds before progress bar is displayed in long-running task collections. Default: 2s.

* Accept value: yes
* Is value required: yes
* Is multiple: no
* Default: `2`

##### `--define|-D`

Define a configuration item value.

* Accept value: yes
* Is value required: yes
* Is multiple: yes
* Default: `array ()`

***
***

### `allure1:open`

Open the HTML Allure report - Allure v1.4.xX

#### Usage

* `allure1:open`

Open the HTML Allure report - Allure v1.4.xX

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

##### `--simulate`

Run in simulated mode (show what would have happened).

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--progress-delay`

Number of seconds before progress bar is displayed in long-running task collections. Default: 2s.

* Accept value: yes
* Is value required: yes
* Is multiple: no
* Default: `2`

##### `--define|-D`

Define a configuration item value.

* Accept value: yes
* Is value required: yes
* Is multiple: yes
* Default: `array ()`

***
***

### `allure1:report`

Generate and open the HTML Allure report - Allure v1.4.X

#### Usage

* `allure1:report`

Generate and open the HTML Allure report - Allure v1.4.X

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

##### `--simulate`

Run in simulated mode (show what would have happened).

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--progress-delay`

Number of seconds before progress bar is displayed in long-running task collections. Default: 2s.

* Accept value: yes
* Is value required: yes
* Is multiple: no
* Default: `2`

##### `--define|-D`

Define a configuration item value.

* Accept value: yes
* Is value required: yes
* Is multiple: yes
* Default: `array ()`

***
***

### `allure2:generate`

Generate the HTML for the Allure report based on the Test XML output - Allure v2.3.X

#### Usage

* `allure2:generate`

Generate the HTML for the Allure report based on the Test XML output - Allure v2.3.X

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

##### `--simulate`

Run in simulated mode (show what would have happened).

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--progress-delay`

Number of seconds before progress bar is displayed in long-running task collections. Default: 2s.

* Accept value: yes
* Is value required: yes
* Is multiple: no
* Default: `2`

##### `--define|-D`

Define a configuration item value.

* Accept value: yes
* Is value required: yes
* Is multiple: yes
* Default: `array ()`

***
***

### `allure2:open`

Open the HTML Allure report - Allure v2.3.X

#### Usage

* `allure2:open`

Open the HTML Allure report - Allure v2.3.X

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

##### `--simulate`

Run in simulated mode (show what would have happened).

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--progress-delay`

Number of seconds before progress bar is displayed in long-running task collections. Default: 2s.

* Accept value: yes
* Is value required: yes
* Is multiple: no
* Default: `2`

##### `--define|-D`

Define a configuration item value.

* Accept value: yes
* Is value required: yes
* Is multiple: yes
* Default: `array ()`

***
***

### `allure2:report`

Generate and open the HTML Allure report - Allure v2.3.X

#### Usage

* `allure2:report`

Generate and open the HTML Allure report - Allure v2.3.X

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

##### `--simulate`

Run in simulated mode (show what would have happened).

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--progress-delay`

Number of seconds before progress bar is displayed in long-running task collections. Default: 2s.

* Accept value: yes
* Is value required: yes
* Is multiple: no
* Default: `2`

##### `--define|-D`

Define a configuration item value.

* Accept value: yes
* Is value required: yes
* Is multiple: yes
* Default: `array ()`

***
***

### `build:project`

Clone the Example configuration files Build the Codeception project

#### Usage

* `build:project`

Clone the Example configuration files Build the Codeception project

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

##### `--simulate`

Run in simulated mode (show what would have happened).

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--progress-delay`

Number of seconds before progress bar is displayed in long-running task collections. Default: 2s.

* Accept value: yes
* Is value required: yes
* Is multiple: no
* Default: `2`

##### `--define|-D`

Define a configuration item value.

* Accept value: yes
* Is value required: yes
* Is multiple: yes
* Default: `array ()`

***
***

### `clone:files`

Duplicate the Example configuration files used to customize the Project for customization

#### Usage

* `clone:files`

Duplicate the Example configuration files used to customize the Project for customization

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

##### `--simulate`

Run in simulated mode (show what would have happened).

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--progress-delay`

Number of seconds before progress bar is displayed in long-running task collections. Default: 2s.

* Accept value: yes
* Is value required: yes
* Is multiple: no
* Default: `2`

##### `--define|-D`

Define a configuration item value.

* Accept value: yes
* Is value required: yes
* Is multiple: yes
* Default: `array ()`


***
***

### `generate:tests`

Generate all Tests

#### Usage

* `generate:tests`

Generate all Tests

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

##### `--simulate`

Run in simulated mode (show what would have happened).

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--progress-delay`

Number of seconds before progress bar is displayed in long-running task collections. Default: 2s.

* Accept value: yes
* Is value required: yes
* Is multiple: no
* Default: `2`

##### `--define|-D`

Define a configuration item value.

* Accept value: yes
* Is value required: yes
* Is multiple: yes
* Default: `array ()`


***
***

### `self:update`

Updates the robo.phar to the latest version.

#### Usage

* `self:update`
* `update`

The self-update command checks github for newer
versions of robo and if found, installs the latest.

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

##### `--simulate`

Run in simulated mode (show what would have happened).

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

##### `--progress-delay`

Number of seconds before progress bar is displayed in long-running task collections. Default: 2s.

* Accept value: yes
* Is value required: yes
* Is multiple: no
* Default: `2`

##### `--define|-D`

Define a configuration item value.

* Accept value: yes
* Is value required: yes
* Is multiple: yes
* Default: `array ()`
