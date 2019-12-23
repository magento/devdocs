---
group: testing
title: Data fixture annotation
---

A data fixture is a PHP script that sets data you want to reuse in your test.
The script can be defined in a separate file or as a local test case method.

Use data fixtures to prepare a database for tests.
The Integration Testing Framework (ITF) reverts the database to its initial state automatically.
To set up a date fixture, use the `@magentoDataFixture` annotation.

## Format

`@magentoDataFixture` takes an argument that points to the data fixture as a filename or local method.

```php?start_inline=1
/**
 * @magentoDataFixture <script_filename>|<method_name>
 */
```

-  `<script_filename>` is a filename of the PHP script.
-  `<method_name>` is a name of the method declared in the current class.

## Principles

1. Do not use a direct database connection in fixtures to avoid dependencies on the database structure and vendor.
1. Use an application API to implement your data fixtures.
1. A method that implements a data fixture must be declared as `public` and `static`.
1. Fixtures declared at a test level have a higher priority then fixtures declared at a test case level.
1. Test case fixtures are applied to each test in the test case, unless a test has its own fixtures declared.
1. Annotation declaration at a test case level doesn't affect tests that have their own annotation declarations.

## Usage

As mentioned above, there are two ways to declare fixtures:

-  as a PHP script file that is used by other tests and test cases.
-  as a local method that is used by other tests in the test cases.

### Fixture as a separate file

Define the fixture in a separate file when you want to reuse it in different test cases.
To declare the fixture, use the following conventions for a path

-  Relative to `dev/tests/integration/<test suite directory>`
-  With forward slashes `/`
-  No leading slash

   Example: `Magento/Cms/_files/pages.php`

The ITF includes the declared PHP script to your test and executes it during test run.

The following example demonstrates a simple implementation of a Cms module page test from the Magento codebase.

Data fixture to test a Cms module page: [`dev/tests/integration/testsuite/Magento/Cms/_files/pages.php`][].

Test case that uses the above data fixture: [`dev/tests/integration/testsuite/Magento/Cms/Block/PageTest.php`][].

### Fixture as a method

[`dev/tests/integration/testsuite/Magento/Cms/Controller/PageTest.php`][] demonstrates an example of the `testCreatePageWithSameModuleName()` test method that uses data from the `cmsPageWithSystemRouteFixture()` data fixture.

### Test case and test method scopes

The `@magentoDataFixture` can be specified for a particular test or for an entire test case.
The basic rules for fixture annotation at different levels are:

-  `@magentoDataFixture` at a test case level makes the framework to apply the declared fixtures to each test in the test case.
  When the final test is complete, all class-level fixtures are reverted.
-  `@magentoDataFixture` for a particular test signals the framework to revert the fixtures declared on a test case level and applies the fixtures declared at a test method level instead.
  When the test is complete, the ITF reverts the applied fixtures.

 {:.bs-callout-info}
The integration testing framework interacts with a database to revert the applied fixtures.

### Fixture rollback

A fixture that contains database transactions only are reverted automatically.
Otherwise, when a fixture creates files or performs any actions other than database transaction, provide the corresponding rollback logic.
Rollbacks are run after reverting all the fixtures related to database transactions.

A fixture rollback must be of the same format as the corresponding fixture: a script or a method:

-  A rollback script must be named according to the corresponding fixture suffixed with `_rollback` and stored in the same directory.
-  Rollback methods must be of the same class as the corresponding fixture and suffixed with `Rollback`.

Examples:

Fixture/Rollback | Fixture name                                         | Rollback name
-----------------|------------------------------------------------------|-------------------------------------------------------------
Script           | `Magento/Catalog/_files/categories.php`              | `Magento/Catalog/_files/categories_rollback.php`
Method           | `\Magento\Catalog\Model\ProductTest::prepareProduct` | `\Magento\Catalog\Model\ProductTest::prepareProductRollback`

### Restrictions

Do not rely on and do not modify an application state from within a fixture, because [application isolation annotation][magentoAppIsolation] can reset the application state at any moment.

<!-- Link definitions -->

[magentoAppIsolation]: magento-app-isolation.html
[`dev/tests/integration/testsuite/Magento/Cms/_files/pages.php`]: {{ site.mage2bloburl }}/2.3/dev/tests/integration/testsuite/Magento/Cms/_files/pages.php
[`dev/tests/integration/testsuite/Magento/Cms/Block/PageTest.php`]: {{ site.mage2bloburl }}/2.3/dev/tests/integration/testsuite/Magento/Cms/Block/PageTest.php
[`dev/tests/integration/testsuite/Magento/Cms/Controller/PageTest.php`]: {{ site.mage2bloburl }}/2.3/dev/tests/integration/testsuite/Magento/Cms/Controller/PageTest.php