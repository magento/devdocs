---
group: mftf
title: Mftf commands
version: 2.3
github_link: magento-functional-testing-framework/release-2/commands/robo.md
functional_areas:
 - Testing
mftf-release: 2.3.0
---

_This topic was updated due to the {{page.mftf-release}} MFTF release._
{: style="text-align: right"}

## Usage

### Format

Assuming that you're working in the project root directory in your terminal where you have installed mftf as a composer dependency, run Robo commands using the following format:

```bash
vendor/bin/mftf command [options] [arguments]
```
  
## Useful commands

The following are the most popular commands used to interact with the MFTF. For more commands, see [Reference] or run in your terminal:


#### Build the Project

```bash
mftf build:project
```

#### Generate all tests in PHP

```bash
mftf generate:tests
```
#### Generate the specified test(s) in PHP

```bash
mftf generate:tests testName01 testName02 testName03
```

#### Run and generate all tests marked with the @group tag `example`

```bash
mftf run:group example
```

#### Run and generate all tests

The command runs all the generated tests.

```bash
mftf run:tests
```

## Reference

### general

#### `reset`

##### Description:
Clean any configuration files from the environment (not including .env), as well as any generated artifacts.  

##### Usage:
`reset [options]`

##### Options:
opt                | description|
---|---|
`--hard` | parameter to force reset of configuration files.

  
### build
 
#### `build:project`     

##### Description:
Clone the example configuration files and build the Codeception project.

### generate

#### `generate:tests`

##### Description:
Generate PHP code from the tests defined in XML files. (Path is determined by constant `TESTS_MODULE_PATH`)

##### Usage:
`generate:tests [options] [--] [<name>]...`

##### Arguments:
*arg*                | description|
|---|---|
`name` | name(s) of specific tests to generate

##### Options:
opt                | description|
|---|---|
`--config=CONFIG`   | default, singleRun, or parallel [default: "default"]  
`--force`           | force generation of tests regardless of Magento Instance Configuration  
`--lines=LINES`     | Used in combination with a parallel configuration, determines desired group size [default: 500]  
`--tests=TESTS`     | A parameter accepting a JSON string used to determine the test configuration  
`--debug`           | Generates tests with extra schema validation to narrow down issues

##### Examples of the JSON configuration

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
vendor/bin/robo generate:tests --tests "{\r\n\"tests\":[\r\n\"general_test1\",\r\n\"general_test2\",\r\n\"general_test3\"\r\n],\r\n\"suites\":{\r\n\"sample\":[\r\n\"suite_test1\"\r\n],\r\n\"sample2\":null\r\n}\r\n}"
```

{% include note.html
type="info"
content="The strings must be escaped and surrounded in quotes."
%}

#### `generate:suite`

##### Description:
Generates a single suite based on declaration in xml

##### Usage:
`generate:suite <suites> (<suites>)...`

##### Arguments:
arg                | description|
|---|---|
  suites | suite names for generation (separated by space)

### run
#### `run:group`

##### Usage:
  `run:group [options] [--] <groups> (<groups>)...`

##### Arguments:
arg                | description|
|---|---|
  `groups` | group names to be executed via codeception

##### Options:
opt                | description|
|---|---|
  `-k, --skip-generate` | only execute a group of tests without generating from source xml
  
#### `run:test`

##### Usage:
  `run:test [options] [--] <name> (<name>)...`

##### Arguments:
arg                | description|
|---|---|
  `name`  | name of tests to generate and execute

##### Options:
opt                | description|
|---|---|
  `-k, --skip-generate` | skip generation and execute existing test(s)


<!-- LINK DEFINITIONS -->

[Reference]: #reference

<!-- Abbreviations -->

*[MFTF]: Magento Functional Testing Framework
---
group: mftf
title: Mftf commands
version: 2.3
github_link: magento-functional-testing-framework/release-2/commands/robo.md
functional_areas:
 - Testing
mftf-release: 2.3.0
---

_This topic was updated due to the {{page.mftf-release}} MFTF release._
{: style="text-align: right"}

## Usage

### Format

Assuming that you're working in the project root directory in your terminal where you have installed mftf as a composer dependency, run Robo commands using the following format:

```bash
vendor/bin/mftf command [options] [arguments]
```
  
## Useful commands

The following are the most popular commands used to interact with the MFTF. For more commands, see [Reference] or run in your terminal:


#### Build the Project

```bash
mftf build:project
```

#### Generate all tests in PHP

```bash
mftf generate:tests
```
#### Generate the specified test(s) in PHP

```bash
mftf generate:tests testName01 testName02 testName03
```

#### Run and generate all tests marked with the @group tag `example`

```bash
mftf run:group example
```

#### Run and generate all tests

The command runs all the generated tests.

```bash
mftf run:tests
```

#### Run tests with the specified group annotation

```bash
mftf group <group-value>
```

## Reference

### general

#### `reset`

##### Description:
Clean any configuration files from the environment (not including .env), as well as any generated artifacts.  

##### Usage:
`reset [options]`

##### Options:
opt                | description|
---|---|
`--hard` | parameter to force reset of configuration files.

  
### build
 
#### `build:project`     

##### Description:
Clone the example configuration files and build the Codeception project.

### generate

#### `generate:tests`

##### Description:
Generate PHP code from the tests defined in XML files.
Path to a directory with generated tests:  `dev/tests/acceptance/tests/functional/Magento/FunctionalTest/_generated/`.
(Path is determined by constant `TESTS_MODULE_PATH`)

##### Usage:
`generate:tests [options] [--] [<name>]...`

##### Arguments:
*arg*                | description|
|---|---|
`name` | name(s) of specific tests to generate

##### Options:
opt                | description|
|---|---|
`--config=CONFIG`   | default, singleRun, or parallel [default: "default"]  
`--force`           | force generation of tests regardless of Magento Instance Configuration  
`--lines=LINES`     | Used in combination with a parallel configuration, determines desired group size [default: 500]  
`--tests=TESTS`     | A parameter accepting a JSON string used to determine the test configuration  

##### Examples of the JSON configuration

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
vendor/bin/robo generate:tests --tests "{\r\n\"tests\":[\r\n\"general_test1\",\r\n\"general_test2\",\r\n\"general_test3\"\r\n],\r\n\"suites\":{\r\n\"sample\":[\r\n\"suite_test1\"\r\n],\r\n\"sample2\":null\r\n}\r\n}"
```

{% include note.html
type="info"
content="The strings must be escaped and surrounded in quotes."
%}

#### `generate:suite`

##### Description:
Generates a single suite based on declaration in xml

##### Usage:
`generate:suite <suites> (<suites>)...`

##### Arguments:
arg                | description|
|---|---|
`suites` | suite names for generation (separated by space)

### run
#### `run:group`

##### Usage:
  `run:group [options] [--] <groups> (<groups>)...`

##### Arguments:
arg                | description|
|---|---|
  `groups` | group names to be executed via codeception

##### Options:
opt                | description|
|---|---|
  `-k, --skip-generate` | only execute a group of tests without generating from source xml
  
#### `run:test`

##### Usage:
  `run:test [options] [--] <name> (<name>)...`

##### Arguments:
arg                | description|
|---|---|
  `name`  | name of tests to generate and execute

##### Options:
opt                | description|
|---|---|
  `-k, --skip-generate` | skip generation and execute existing test(s)


<!-- LINK DEFINITIONS -->

[Reference]: #reference

<!-- Abbreviations -->

*[MFTF]: Magento Functional Testing Framework
