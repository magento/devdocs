---
group: mftf
title: |
    CLI commands: mftf
version: 2.2
github_link: magento-functional-testing-framework/release-2/commands/mtft.md
functional_areas:
 - Testing
mftf-release: 2.3.0
---

_This topic was updated due to the {{page.mftf-release}} MFTF release._
{: style="text-align: right"}

The Magento Functional Testing Framework (MFTF) introduces the command line interface (CLI) tool `vendor/bin/mftf` to facilitate your interaction with the framework.

{%
include note.html
type='info'
content='`mftf` commands substitute the `robo` commands that were used in previous releases.'
%}

## Command format

Assuming that you are working in the project root directory in your terminal where you have installed the framework as a composer dependency, run commands using the following format:

```bash
vendor/bin/mftf command [options] [arguments]
```
  
## Useful commands

The following is a list of the most used commands.

#### Build the project

```bash
mftf build:project
```

#### Generate all tests in PHP

```bash
mftf generate:tests
```
#### Generate one or more tests in PHP

```bash
mftf generate:tests testName01 testName02 testName03
```

#### Run and generate all tests that contain the `group="example"` annotation 

```bash
mftf run:group example
```

#### Run and generate all tests

```bash
mftf run:tests
```

## Reference
 
### `build:project`     

#### Description

Clone the example configuration files and build the Codeception project.

### `generate:tests`

#### Description

Generate PHP code from the tests defined in XML files.
The path is set in the `TESTS_MODULE_PATH` [configuration] parameter.

#### Usage

`generate:tests --[option] [<test name>] [<test name>]`

#### Options

Option | Description|
---|---
`--config`   | Creates a single manifest file with a list of all tests by default: `tests/functional/Magento/FunctionalTest/_generated/testManifest.txt`. You can split it into multiple groups using `--config parallel`; the groups will be generated in `_generated/groups/` like `_generated/groups/group1.txt, group2.txt, ...`. Available values: `default` (default), `singleRun`(same as `default`), and `parallel`. Example: `generate:tests --config parallel`.
`--force`    | Force tests generation regardless of the Magento instance configuration.
`--lines`    | Number of lines that determines the group size when `--config parallel` is used. The __default value__ is `500`. Example: `generate:tests --config parallel --lines 400`
`--tests`    | A parameter accepting a JSON string used to determine the test configuration. Example: `--tests "{\r\n\"tests\":[\r\n\"general_test1\",\r\n\"general_test2\",\r\n\"general_test3\"\r\n],\r\n\"suites\":{\r\n\"sample\":[\r\n\"suite_test1\"\r\n],\r\n\"sample2\":null\r\n}\r\n}"`.

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

The configuration to generate a single test contained in the suite:
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

Complex configuration to generate few non-suite tests, a single test in a suite, and an entire suite:
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

The command that encodes the above configuration:

```bash
vendor/bin/mftf generate:tests --tests "{\r\n\"tests\":[\r\n\"general_test1\",\r\n\"general_test2\",\r\n\"general_test3\"\r\n],\r\n\"suites\":{\r\n\"sample\":[\r\n\"suite_test1\"\r\n],\r\n\"sample2\":null\r\n}\r\n}"
```

{% include note.html
type='info'
content='The strings must be escaped and surrounded in quotes.'
%}

### `generate:suite`

#### Description

Generates a single suite based on declaration in xml.

#### Usage

`generate:suite <suites> (<suites>)...`

#### Arguments

Arguments| Description
---|---
`suites`|suite names for generation (separated by space)

#### `reset`

#### Description

Clean any configuration files from the environment (not including `.env`), as well as any generated artifacts.  

#### Usage

`reset [options]`

#### Options

Option|Description
---|---
`--hard` | Flag to force reset the configuration files.

### `run:group`

#### Usage

`run:group [options] <groups> (<groups>)...`

#### Arguments

Arguments| Description
---|---
`groups` | group names to be executed via codeception

#### Options

Option | Description
---|---
`-k, --skip-generate` | only execute a group of tests without generating from source xml
  
### `run:test`

#### Usage

`run:test [options] <name> (<name>)...`

#### Arguments

Arguments| Description
---|---
`name`  | name of tests to generate and execute

#### Options

Option | Description
---|---
`-k, --skip-generate` | skip generation and execute existing test(s)


<!-- LINK DEFINITIONS -->

[configuration]: ../configuration.html
[Reference]: #reference

<!-- Abbreviations -->

*[MFTF]: Magento Functional Testing Framework