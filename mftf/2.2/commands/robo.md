---
mftf-release: 2.2.0
redirect_from: /guides/v2.2/magento-functional-testing-framework/2.2/robo.html
---

# Robo commands

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

#### List all available Robo commands

```bash
vendor/bin/robo
```

#### Duplicate the example configuration files used to customize the project

```bash
vendor/bin/robo clone:files
```

#### Build the Codeception project

```bash
vendor/bin/robo build:project
```

#### Generate all tests in PHP

```bash
vendor/bin/robo generate:tests
```
#### Generate the specified tests in PHP

```bash
vendor/bin/robo generate:tests testName01 testName02 testName03
```

#### Run all tests marked with the @group tag `example`, using the Chrome environment

```bash
vendor/bin/robo example
```

#### Run all functional tests located under the directory path provided

```bash
vendor/bin/robo folder <path/to/folder/with/tests>
```

#### Run all generated tests

The command runs all the generated tests.
The generated test are stored in the _acceptance/tests/functional/Magento/FunctionalTest/\_generated_ directory.

```bash
vendor/bin/robo functional
```

#### Run tests with the specified group annotation

```bash
vendor/bin/robo group <group-value>
```

#### Run skipped tests

Typically, each test tagged by the `<group value="skip">` annotation is ignored during test run.
But in case you still need to run the skipped tests, run:

```bash
vendor/bin/robo group skip
```
  
### Allure Robo commands

To determine which version of the Allure command you need to use run `allure --version`.

#### Generate the HTML for the Allure report based on the test XML output

Allure v1.x.x:

```bash
vendor/bin/robo allure1:generate
```

Allure v2.x.x:

```bash
vendor/bin/robo allure2:generate
```

#### Open the HTML Allure report

Allure v1.x.x:

```bash
vendor/bin/robo allure1:open
```

Allure v2.x.x:

```bash
vendor/bin/robo allure2:open
```

#### Generate and open the HTML Allure report

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

`functional`      | Run all generated tests.
`example`         | Run all Tests marked with the `<group value="example"/>` annotation.
`folder`        | Run all acceptance tests located under the directory path provided.
`group`         | Run tests annotated by the `<group/>` tag.
`help`             | Displays help for a command.
`list`             | Lists available commands.
  
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

`generate:tests`   | Generate all tests and suites based on specific module load order of the Magento instance
`generate:tests <testName01> <testName02>`   | Generates only the specified tests. It does not work for tests that are part of suites.
`generate:tests --force`   | Generate all tests regardless of whether a Magento instance is available
`generate:tests --config singleRun`   | Generate all tests and a manifest file `_generated/testManifest.txt`. The file contains only a path to the directory with generated tests. 
`generate:tests --config parallel --lines <number of lines>`   | Generate all tests and a directory with manifest files under `_generated/groups/`. The number of manifests corresponds to the number of nodes required. Each manifest file contains a proportional list of tests sorted and grouped depending on the specified line limit `<number of lines>`.
`generate:tests --tests "<json configuration>"`   | Generates only the tests and suites in the specified JSON configuration. See examples of the JSON configurations and the entire command below.
`generate:suite <suiteName>`   | Generates tests for the specified suite only.

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

#### self

`self:update` or `update`| Updates the `robo.phar` to the latest version, which only works when running the `phar` version of Robo.

<!-- LINK DEFINITIONS -->

[Reference]: #reference

<!-- Abbreviations -->

*[MFTF]: Magento Functional Testing Framework
