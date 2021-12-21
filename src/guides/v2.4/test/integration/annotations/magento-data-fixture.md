---
group: testing
title: Data fixture annotation
---

A data fixture is a PHP script that sets data you want to reuse in your test.
The script can be defined in a separate PHP file, class, or as a local test case method.

Use data fixtures to prepare a database for tests.
The Integration Testing Framework (ITF) reverts the database to its initial state automatically.
To set up a date fixture, use the `@magentoDataFixture` annotation.

## Format

`@magentoDataFixture` takes an argument that points to the data fixture as a filename, full class name, or local method.

```php?start_inline=1
/**
 * @magentoDataFixture <script_filename>|<method_name>|<fully_qualified_class_name> [as:alias | with:{}]
 */
```

-  `<script_filename>` is the filename of the PHP script.
-  `<method_name>` is the name of the method declared in the current class.
-  `<fully_qualified_class_name>` is the fully qualified name of a class that implements
   `Magento\TestFramework\Fixture\DataFixtureInterface` or `Magento\TestFramework\Fixture\RevertibleDataFixtureInterface`.

## Principles

1. Do not use a direct database connection in fixtures to avoid dependencies on the database structure and vendor.
1. Use an application API to implement your data fixtures.
1. A method that implements a data fixture must be declared as `public` and `static`.
1. Fixtures declared at a test level have a higher priority than fixtures declared at a test case level.
1. Test case fixtures are applied to each test in the test case, unless a test has its own fixtures declared.
1. Annotation declaration at a test case level does not affect tests that have their own annotation declarations.
1. Fixture alias SHOULD be camelcase.
1. Fixture data provider MUST be a valid JSON string.

## Usage

As mentioned above, there are three ways to declare fixtures:

-  as a PHP script file that is used by other tests and test cases.
-  as a local method that is used by other tests in the test cases.
-  as a [Class][parameterizedDataFixture] that implements `Magento\TestFramework\Fixture\DataFixtureInterface` or `Magento\TestFramework\Fixture\RevertibleDataFixtureInterface`.

### Fixture as a separate file

Define the fixture in a separate file when you want to reuse it in different test cases.
To declare the fixture, use one of the following conventions:

-  Fixture declaration as a path relative to the test suite directory
   -  Relative to `dev/tests/integration/<test suite directory>`
   -  With forward slashes `/`
   -  No leading slash

  Example:

  ```php
  /**
   * @magentoDataFixture Magento/Cms/_files/pages.php
   */
  ```

-  Fixture declaration as a path relative to a module
   -  Relative to the directory of a module available in the project
   -  With forward slashes `/`
   -  No leading slash in the path part of the declaration

  Example:

  ```php
  /**
   * @magentoDataFixture VendorName_ModuleName::Test/Integration/_files/fixture_name.php
   */
  ```

The ITF includes the declared PHP script to your test and executes it during the test run.

The following example demonstrates a simple implementation of a Cms module page test from the Magento codebase.

Data fixture to test a Cms module page: [`dev/tests/integration/testsuite/Magento/Cms/_files/pages.php`][].

Test case that uses the above data fixture: [`dev/tests/integration/testsuite/Magento/Cms/Block/PageTest.php`][].

### Fixture as a method

[`dev/tests/integration/testsuite/Magento/Cms/Controller/PageTest.php`][] demonstrates an example of the `testCreatePageWithSameModuleName()` test method that uses data from the `cmsPageWithSystemRouteFixture()` data fixture.

### Data Fixture Data Provider

{:.bs-callout-info}
Data Fixture Data Provider is only applicable to Parameterized Data Fixture and is currently only available for Magento Open Source contributors. It will be released for general use with Magento Open Source 2.4.5.

There are two types of data providers:

-  Inline JSON as data provider
-  [`@magentoDataFixtureDataProvider`][magentoDataFixtureDataProvider] annotation

#### Inline JSON as data provider

Data can be passed to the [Parameterized Data Fixture][parameterizedDataFixture] using `with` directive as follows:

Example:

```php?start_inline=1
class ProductsList extends \PHPUnit\Framework\TestCase
{
    /**
     * @magentoDataFixture Magento\Catalog\Test\Fixture\Product with:{"price": 5.0}
     * @magentoDataFixture Magento\Catalog\Test\Fixture\Product with:{"price": 10.0}
     * @magentoDataFixture Magento\Catalog\Test\Fixture\Product with:{"price": 15.0}
     */
    public function testGetProductsCount(): void
    {
    }
}
```

### Fixture Alias

{:.bs-callout-info}
Fixture Alias is only applicable to Parameterized Data Fixture and is currently only available for Magento Open Source contributors, and will be released for public with Magento Open Source 2.4.5.

[Parameterized Data Fixture][parameterizedDataFixture] can be given an alias using directive `as`. The fixture alias is used as reference to retrieve the data returned by the fixture and also as reference in other fixtures parameters.

#### Retrieve fixture data in the test

A test can retrieve data that was returned by a [Parameterized Data Fixture][parameterizedDataFixture] using `Magento\TestFramework\Fixture\DataFixtureStorageManager` and the fixture alias.

The following example shows how to retrieve data that was returned by the fixtures:

```php?start_inline=1
class ProductsList extends \PHPUnit\Framework\TestCase
{
    /**
     * @magentoDataFixture Magento\Catalog\Test\Fixture\Product as:product1
     * @magentoDataFixture Magento\Catalog\Test\Fixture\Product as:product2
     * @magentoDataFixture Magento\Catalog\Test\Fixture\Product as:product3
     */
    public function testGetProductsCount(): void
    {
        $fixtures = DataFixtureStorageManager::getStorage();
        $product1 = $fixtures->get('product1');
        $product2 = $fixtures->get('product2');
        $product3 = $fixtures->get('product3');
    }
}
```

#### Supply data to parameterized data fixture as a variable

It is possible to supply data as a variable from one fixture to another using the fixture alias in one of the following formats:

-  `$fixtureAlias$` is a reference to the data that was returned by the fixture with alias `fixtureAlias`
-  `$fixtureAlias.snake_case_property_name$` is a reference to the property `snake_case_property_name` in the data that was returned by the fixture with alias `fixtureAlias`.

The following example shows how a fixture can use the data of another fixture:

```php?start_inline=1
class QuoteTest extends \PHPUnit\Framework\TestCase
{
    /**
     * @magentoApiDataFixture Magento\Quote\Test\Fixture\GuestCart as:cart
     * @magentoApiDataFixture Magento\Quote\Test\Fixture\SetBillingAddress with:{"cart_id":"$cart.id$"}
     */
    public function testGetBillingAddress(): void
    {
    }
}
```

### Test case and test method scopes

The `@magentoDataFixture` can be specified for a particular test or for an entire test case.
The basic rules for fixture annotation at different levels are:

-  `@magentoDataFixture` at a test case level, makes the framework to apply the declared fixtures to each test in the test case.
  When the final test is complete, all class-level fixtures are reverted.
-  `@magentoDataFixture` for a particular test, signals the framework to revert the fixtures declared on a test case level and applies the fixtures declared at a test method level instead.
  When the test is complete, the ITF reverts the applied fixtures.

 {:.bs-callout-info}
The integration testing framework interacts with a database to revert the applied fixtures.

### Fixture rollback

A fixture that contains database transactions only, are reverted automatically.
Otherwise, when a fixture creates files or performs any actions other than database transaction, provide the corresponding rollback logic.
Rollbacks are run after reverting all the fixtures related to database transactions.

A fixture rollback must be of the same format as the corresponding fixture, a script or a method:

-  A rollback script must be named according to the corresponding fixture suffixed with `_rollback` and stored in the same directory.
-  Rollback methods must be of the same class as the corresponding fixture and suffixed with `Rollback`.

Examples:

Fixture/Rollback | Fixture name                                         | Rollback name
-----------------|------------------------------------------------------|-------------------------------------------------------------
Script           | `Magento/Catalog/_files/categories.php`              | `Magento/Catalog/_files/categories_rollback.php`
Method           | `\Magento\Catalog\Model\ProductTest::prepareProduct` | `\Magento\Catalog\Model\ProductTest::prepareProductRollback`

### Restrictions

Do not rely on and do not modify an application state from within a fixture, because [application isolation annotation][magentoAppIsolation] can reset the application state at any time.

<!-- Link definitions -->

[magentoAppIsolation]: magento-app-isolation.html
[magentoDataFixtureDataProvider]: magento-data-fixture-data-provider.html
[parameterizedDataFixture]: ../parameterized_data_fixture.html
[`dev/tests/integration/testsuite/Magento/Cms/_files/pages.php`]: {{ site.mage2bloburl }}/{{ page.guide_version }}/dev/tests/integration/testsuite/Magento/Cms/_files/pages.php
[`dev/tests/integration/testsuite/Magento/Cms/Block/PageTest.php`]: {{ site.mage2bloburl }}/{{ page.guide_version }}/dev/tests/integration/testsuite/Magento/Cms/Block/PageTest.php
[`dev/tests/integration/testsuite/Magento/Cms/Controller/PageTest.php`]: {{ site.mage2bloburl }}/{{ page.guide_version }}/dev/tests/integration/testsuite/Magento/Cms/Controller/PageTest.php
