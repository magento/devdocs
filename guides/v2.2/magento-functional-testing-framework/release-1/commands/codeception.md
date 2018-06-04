---
group: mftf
title: Codeception commands in the Magento Functional Testing Framework
version: 2.2
github_link: magento-functional-testing-framework/release-1/commands/codeception.md
functional_areas:
 - Testing
redirect_from: guides/v2.2/magento-functional-testing-framework/commands/codeception.html
mftf-release: 1.0.0
---

_This topic was updated due to the {{page.mftf-release}} MFTF release._
{: style="text-align: right"}

<div class="bs-callout bs-callout-warning" markdown="1">
We DO NOT recommend to use Codeception commands directly, they can break the MFTF basic workflow.
All the Codeception commands you need are wrapped using Robo.

[See the list of Robo commands][robo].
</div>

If you'd like to run the Codeception tests directly without using Robo, run:
 
```bash
vendor/bin/codecept run functional
```
 
to execute all Functional tests that DO NOT include `@env` tags.
If a Test includes an `@env` tag, you MUST include the [`--env ENV_NAME`][--env] option.
 
[Learn more about `@env` tag usage][env].

### Examples

Run ALL Functional Tests without an `@env` tag:

```bash
vendor/bin/codecept run functional
```

Run ALL Functional Tests without the `@group "skip"` tag:

```bash
vendor/bin/codecept run functional --skip-group skip
```

Run ALL Functional Tests with the `@group "example"` tag but with no `@group "skip"`  tests:

```bash
vendor/bin/codecept run functional --group example --skip-group skip
```

[See more examples][examples].

## `codecept run`

Runs the test suites

```bash
vendor/bin/codecept run
```

### Usage

* `run [-o|--override OVERRIDE] [-e|--ext EXT] [--report] [--html [HTML]] [--xml [XML]] [--tap [TAP]] [--json [JSON]] [--colors] [--no-colors] [--silent] [--steps] [-d|--debug] [--coverage [COVERAGE]] [--coverage-html [COVERAGE-HTML]] [--coverage-xml [COVERAGE-XML]] [--coverage-text [COVERAGE-TEXT]] [--coverage-crap4j [COVERAGE-CRAP4J]] [--no-exit] [-g|--group GROUP] [-s|--skip SKIP] [-x|--skip-group SKIP-GROUP] [--env ENV] [-f|--fail-fast] [--no-rebuild] [--] [<suite>] [<test>]`

### Arguments

#### `suite`

suite to be tested

* Is required: no
* Is array: no
* Default: `NULL`

#### `test`

test to be run

* Is required: no
* Is array: no
* Default: `NULL`

### Options

#### `--override|-o`

Override config values

* Accept value: yes
* Is value required: yes
* Is multiple: yes
* Default: `array ()`

#### `--ext|-e`

Run with extension enabled

* Accept value: yes
* Is value required: yes
* Is multiple: yes
* Default: `array ()`

#### `--report`

Show output in compact style

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

#### `--html`

Generate html with results

* Accept value: yes
* Is value required: no
* Is multiple: no
* Default: `'report.html'`

#### `--xml`

Generate JUnit XML Log

* Accept value: yes
* Is value required: no
* Is multiple: no
* Default: `'report.xml'`

#### `--tap`

Generate Tap Log

* Accept value: yes
* Is value required: no
* Is multiple: no
* Default: `'report.tap.log'`

#### `--json`

Generate Json Log

* Accept value: yes
* Is value required: no
* Is multiple: no
* Default: `'report.json'`

#### `--colors`

Use colors in output

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

#### `--no-colors`

Force no colors in output (useful to override config file)

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

#### `--silent`

Only outputs suite names and final results

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

#### `--steps`

Show steps in output

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

#### `--debug|-d`

Show debug and scenario output

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

#### `--coverage`

Run with code coverage

* Accept value: yes
* Is value required: no
* Is multiple: no
* Default: `'coverage.serialized'`

#### `--coverage-html`

Generate CodeCoverage HTML report in path

* Accept value: yes
* Is value required: no
* Is multiple: no
* Default: `'coverage'`

#### `--coverage-xml`

Generate CodeCoverage XML report in file

* Accept value: yes
* Is value required: no
* Is multiple: no
* Default: `'coverage.xml'`

#### `--coverage-text`

Generate CodeCoverage text report in file

* Accept value: yes
* Is value required: no
* Is multiple: no
* Default: `'coverage.txt'`

#### `--coverage-crap4j`

Generate CodeCoverage report in Crap4J XML format

* Accept value: yes
* Is value required: no
* Is multiple: no
* Default: `'crap4j.xml'`

#### `--no-exit`

Don't finish with exit code

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

#### `--group|-g`

Groups of tests to be executed

* Accept value: yes
* Is value required: yes
* Is multiple: yes
* Default: `array ()`

#### `--skip|-s`

Skip selected suites

* Accept value: yes
* Is value required: yes
* Is multiple: yes
* Default: `array ()`

#### `--skip-group|-x`

Skip selected groups

* Accept value: yes
* Is value required: yes
* Is multiple: yes
* Default: `array ()`

#### `--env`

Run tests in selected environments.

* Accept value: yes
* Is value required: yes
* Is multiple: yes
* Default: `array ()`

[Learn more about `--env`][env]

#### `--fail-fast|-f`

Stop after first failure

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

#### `--no-rebuild`

Do not rebuild actor classes on start

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

#### `--help|-h`

Display this help message

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

#### `--quiet|-q`

Do not output any message

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

#### `--verbose|-v|-vv|-vvv`

Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

#### `--version|-V`

Display this application version

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

#### `--ansi`

Force ANSI output

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

#### `--no-ansi`

Disable ANSI output

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

#### `--no-interaction|-n`

Do not ask any interactive question

* Accept value: no
* Is value required: no
* Is multiple: no
* Default: `false`

#### `--config|-c`

Use custom path for config

* Accept value: yes
* Is value required: no
* Is multiple: no
* Default: `NULL`

<!-- LINK DEFINITIONS -->

[env]: http://codeception.com/docs/07-AdvancedUsage#Environments
[examples]: http://codeception.com/docs/reference/Commands#Run

[--env]: #--env
[robo]: robo.html

<!-- Abbreviations -->

*[MFTF]: Magento Functional Testing Framework