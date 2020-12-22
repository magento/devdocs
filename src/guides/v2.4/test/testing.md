---
group: testing
title: Magento Testing Guide
landing-page: Testing Guide
---

Magento actively leverages various testing strategies to ensure product and code quality.

Product quality matters to the end-users working with the Magento storefront, admin panel, web APIs and CLI.
Product quality tests verify that the user gets expected results while interacting with the Magento system.

Code quality is important to developers working with Magento codebase including:

-  System integrators
-  Extension developers
-  Magento core team
-  Community contributors

Code quality matters for:

-  Extensibility - It should be straightforward to extend or modify existing behavior.
  Good extensibility allows for:
   -  Customizations and extensions using modularity of the platform.
   -  Evolution of the platform with new releases.
-  Maintainability - It should be straightforward for developers to work within the Magento system.
  It can be improved with:
   -  Complexity management - Reduce the learning curve and risk of adding new bugs.
   -  Automatic bug detection - Reduces total cost of ownership.
   -  Coding standards - Ensures consistency and readability.

Automated tests are required by [Magento definition of done][] for any code changes.

## Product Quality Tests

-  [Magento Functional Testing Framework][] - Tests the storefront and admin panel UI.
-  [Web API Functional][] - Tests the REST, SOAP, and GraphQL areas.
-  [Integration][] - Ensures that all the parts work together seamlessly.
-  Performance - Tracks changes in CPU, Memory and other metrics. Executed nightly for develop branches. Custom builds can be configured using [performance toolkit][].
-  Client-side performance - Measures total page load times in the browser.
-  Load - Tracks the trends of system behavior under the load. Executed internally for each release using scenarios defined in the [performance toolkit][]
-  Upgrade - Ensures that a seamless upgrade is possible from previously released product versions to the new one. Executed internally for each release.
-  [JavaScript][] - Tests JS modules and other JS portions of the UI. These tests are similar to integration tests used for server-side testing.

## Code Quality Tests

-  Static
   -  [PhpCs][] - Warns developers about coding standard violations. It can be integrated into an IDE to analyze the code as soon as you write it.
   -  [PhpMd][] - Used for monitoring code complexity and potential bugs. Can be integrated with an IDE for instant feedback.
   -  Dependency - Prevents incorrect dependencies between modules.
   -  Legacy code - Prevents usage of the legacy functionality.
-  Unit - Used for testing of isolated algorithms or discreet pieces of code.
-  Extensibility - Ensures the system is extensible as designed. Extensibility tests can be written using [Integration][], [JavaScript][] and [Web API Functional][] testing frameworks.
-  Backward-compatibility - Enforces [Magento backward compatibility policy][] at all levels including source code, database, message queue,  and web API.

## Functional

Functional tests are mainly used for system tests at a very high level by remote controlling a browser. Magento is treated as a black box, and tests happen from a user perspective.

The [Magento Functional Testing Framework][] (MFTF) is the main way to do functional testing. It uses XML files to run browser testing.

The [Functional Testing Framework][] (FTF) was the original framework used for testing Magento. It used PHP scripts to run browser testing.
This framework is no longer supported and FTF tests were [ported over][] to MFTF.
Until the porting to MFTF is finished, the FTF can still be run to ensure complete functional testing coverage.

## API Functional

The Web [API](https://glossary.magento.com/api) testing framework enables you to test the Magento [Web API](https://glossary.magento.com/web-api) from the client application point of view.

For more information, see the [Web API functional testing][].

## Integration

Integration tests run Magento [PHP](https://glossary.magento.com/php) code in varying degrees of isolation. They tend to be a lot more low-level then functional tests. Because they do not utilize a browser to execute the tests, they can be a lot more granular in what they test. They also tend to run a lot quicker then functional tests.

For more information, see [Running Integration Tests][].

## JavaScript

Much of the functionality in Magento 2 is provided with the help of sophisticated [JavaScript](https://glossary.magento.com/javascript). JavaScript tests ensure the [frontend](https://glossary.magento.com/frontend) portion of Magento functions as expected.

For more information, please see the [Extension Developer Guide on JavaScript Tests][].

## Static

Static code analysis checks that PHP code follows the Magento 2 coding standards and best practices.
They are executed during continuous integration using the `bin/magento` tool.

See the [`magento dev:tests:run`][] documentation for more information, using the test type `static`.

### PHPStan

[PHPStan][] is a static analysis tool for PHP. Magento integrates PHPStan by default.
It is available for developers to use in their own work, located at `Magento\Test\Php\LiveCodeTest::testPhpStan()`.

It is run on changed `*.php` files using rule strictness [level 1][] and detects issues such as:

-  Method should return something but return statement is missing.
-  Access to constant on an unknown class
-  Access to undefined constant
-  Access to an undefined property
-  Anonymous function has an unused use
-  Array has N duplicate keys
-  Call to an undefined method
-  Possibly undefined variables
-  Unknown magic methods and properties on classes with `__call` and `__get` (supports DataObject's magic methods: get/set/has/uns)

#### Suppressing errors

To ignore errors in a particular piece of code, use the `phpstan:ignore` annotation.

```php
// phpstan:ignore "Error message"
```

The error message text is optional.
It is possible to use the `*` wildcard within messages.

```php
/**
 * Class ClassWithIgnoreAnnotation
 */
class ClassWithIgnoreAnnotation
{
    /**
     * Test method.
     * phpstan:ignore "Method level error"
     */
    public function getProductList()
    {
        // phpstan:ignore "Method Magento\PhpStan\Formatters\Fixtures\ClassWithIgnoreAnnotation::testMethod() invoked with 2 parameters, 1 required."
        $this->testMethod('test1', 'test2');
        // phpstan:ignore "Method * invoked with 2 parameters, 1 required."
        $this->testMethod('test1', 'test2');
        // phpstan:ignore
        $this->testMethod('test1', 'test2');
        $this->testMethod('test1', 'test2'); // phpstan:ignore
    }
    /**
     * @param string $arg1
     * @return string
     */
    private function testMethod(string $arg1)
    {
        return $arg1;
    }
}
```

#### Adding files and directories to PHPStan blacklist

If some files are broken on purpose, add them to the blacklist to ignore them.

The blacklist is located at `dev/tests/static/testsuite/Magento/Test/Php/_files/phpstan/blacklist/`.

```config
lib/internal/Magento/Framework/Interception/Test/Unit/Config/ConfigTest.php
lib/internal/Magento/Framework/Cache/Backend/Eaccelerator.php
```

#### Exclude error messages from the analysis results

If some error messages are not relevant for the current testing scenario, use regular expressions to filter them.

The PHPStan configuration file is `dev/tests/static/testsuite/Magento/Test/Php/_files/phpstan/phpstan.neon`.

Example:

```config
ignoreErrors:
    # Ignore PHPStan\Rules\Classes\UnusedConstructorParametersRule
   - '#Constructor of class [a-zA-Z0-9\\_]+ has an unused parameter#'
```

#### Exclude files and directories from analysis

As needed in some cases, you can exclude specific directories and files using the `excludes_analyse` section in the PHPStan configuration file:
`dev/tests/static/testsuite/Magento/Test/Php/_files/phpstan/phpstan.neon`.

Example:

```config
excludes_analyse:
   - %rootDir%/../../../*/_files/*
   - %rootDir%/../../../dev/tests/*/Fixtures/*
   - %rootDir%/../../../dev/tests/*/tmp/*
   - %rootDir%/../../../pub/*
```

## Unit

Unit tests are used to check a single unit of PHP code in isolation. They are usually written during development using [test-driven development][] (TDD).

Because they do not require the full Magento application stack to be initialized, they run an order of magnitude faster then integration tests.

For more information, see [Running Unit Tests][].

Please refer to the article [Writing testable code][] for more information on what to keep in mind when starting with TDD.

The `bin/magento` tool provides a common entry point to execute any of the tests, which can be useful for continuous integration.
Please see the [System Administrators Guide on Running Tests][] for more information.

## Where to find the tests in the file system

Each test type described above corresponds to a subdirectory in `<magento2 root dir>/dev/tests`, as shown here:

```tree
<repo_root>
    <dev/tests/>
        acceptance      (since v2.2.4)
        api-functional
        functional
        integration
        js/jasmine
        setup-integration
        static
        unit
```

Each of these test types must satisfy different requirements before the MFTF can execute them.

MFTF tests are kept within its respective Module folder:

```tree
<extension_repo_root>
├── <Module1>
│   ├── ...
│   ├── Test
│   │   ├── Unit
│   │   ├── Integration
│   │   └── Mftf
│   │       ├── TestSuite
│   │       └── composer.json
│   └── ...
├── <Module2>
├── <Module1SampleData>
└── <Module2SampleData>
```

<!-- Link Definitions -->
[Magento definition of done]: {{ site.baseurl }}/contributor-guide/contributing_dod.html
[Functional]: {{ site.baseurl }}/mftf/docs/introduction.html
[Web API Functional]: {{ page.baseurl }}/get-started/web-api-functional-testing.html
[Integration]: {{ page.baseurl }}/test/integration/integration_test_execution.html
[performance toolkit]: {{ page.baseurl }}/config-guide/cli/config-cli-subcommands-perf-data.html
[JavaScript]: {{ page.baseurl }}/test/js/jasmine.html
[PhpCs]: {{ page.baseurl }}/coding-standards/code-standard-php.html
[PhpMd]: https://phpmd.org/
[Magento backward compatibility policy]: {{ site.baseurl }}/contributor-guide/backward-compatible-development/
[Functional Testing Framework]: https://github.com/magento/mtf
[Magento Functional Testing Framework]: {{ site.baseurl }}/mftf/docs/introduction.html
[Web API functional testing]: {{ page.baseurl }}/get-started/web-api-functional-testing.html
[Running Integration Tests]: {{ page.baseurl }}/test/integration/integration_test_execution.html
[Extension Developer Guide on JavaScript Tests]: {{ page.baseurl }}/test/js/jasmine.html
[`magento dev:tests:run`]: {{ page.baseurl }}/config-guide/cli/config-cli-subcommands-test.html
[test-driven development]: https://en.wikipedia.org/wiki/Test-driven_development
[Running Unit Tests]: {{ page.baseurl }}/test/unit/unit_test_execution.html
[Writing testable code]: {{ page.baseurl }}/test/unit/writing_testable_code.html
[System Administrators Guide on Running Tests]: {{ page.baseurl }}/config-guide/cli/config-cli-subcommands-test.html
[ported over]: https://github.com/magento/magento-functional-tests-migration
[PHPStan]: https://github.com/phpstan/phpstan
[level 1]: https://phpstan.org/user-guide/rule-levels
