---
group: functional-testing-framework-guide
title: Scenario test
---

A scenario test is a case of separate test steps where each step is a distinct class. Test steps can be grouped in any order that makes functional testing more agile compared with [injectable test].

A scenario test has the following advantages:

-  Each step in the scenario is a separate [PHP](https://glossary.magento.com/php) class that is placed in the [module](https://glossary.magento.com/module) to which it belongs.
-  A scenario test reduces code duplication because each step can be used multiple times.
-  Scenario tests are flexible and support Magento modularity.
-  New tests can be easily created using existing steps.

A scenario test is split into four logical components:

-  [test case], which executes tests steps in the order defined in a tests scenario.
-  [data set], which contains variations of data and constraints for test steps.
-  [test scenario], which defines order of test steps.
-  [test step], which contains a test flow.

## Test case class   {#test-case}

Test cases are located in `<magento2 root dir>/dev/tests/functional/tests/app/Magento/<module>/Test/TestCase` along with their corresponding data sets. Each test case is a PHP class that runs the scenario. It does not contain any other logic. In general, the difference between a scenario test case and an injectable test case is that all test logic is moved to distinct test steps, and their sequence is defined separately in [XML](https://glossary.magento.com/xml) file.

The implementation of a scenario test is always the same. You only have to change the name of your test case.

```php
<?php

namespace Magento\YourModule\Test\TestCase;

use Magento\Mtf\TestCase\Scenario;

/**
 * Preconditions:
 * 1. ....
 * 2. ....
  *
 * Steps:
 * 1. ....
 * 2. ....
 * 3. ....
 */
class FunctionalityYouWantToTest extends Scenario
{
    /**
     * Runs the scenario test case for functionality you want to test.
     *
     * @return void
     */
    public function test()
    {
        $this->executeScenario();
    }
}

```

A scenario test case is a PHP class that extends the `\Magento\Mtf\TestCase\Scenario\` class and implements the `test()` method that calls `executeScenario()`. However, the `Scenario` class is not an interface, so the method may have any other name than `test()`.

## Test scenario    {#test-scenario}

A test scenario is a sequence of test steps. Each scenario test case has its own scenario. All scenarios for a module are collected in an XML file located in `<magento2 root dir>dev/tests/functional/tests/app/Magento/<module>/Test/etc/testcase.xml`.

```xml
<?xml version="1.0"?>

<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../../../../../vendor/magento/mtf/Magento/Mtf/TestCase/etc/testcase.xsd">
    <scenario name="{name of test case}" firstStep="{name of step to be run first}">
        <step name="{name of test step}" module="{name of the module where the test step is located}" next="{name of test step to be run next}">
        <step name="{name of test step}" module="{name of the module where the test step is located}" next="{name of test step to be run next}">
        <step name="{name of test step}" module="{name of the module where the test step is located}" next="{name of test step to be run next}">
    </scenario>
    <scenario name="{name of test case}" firstStep="{name of step to be run first}">
        <step name="{name of test step}" module="{name of the module where the test step is located}" next="{name of test step to be run next}">
        <step name="{name of test step}" module="{name of the module where the test step is located}" next="{name of test step to be run next}">
        <step name="{name of test step}" module="{name of the module where the test step is located}">
    </scenario>
</config>
```

### `<scenario>` element    {#scenario-element}

Each `<scenario>` node defines a name of related test case in `name` and optionally a name of the test step to be run first as `firstStep`.

Example:

```xml
<scenario name="OnePageCheckoutTest" firstStep="setupConfiguration">
...
</scenario>
```

The example declares a scenario for `TestCase/OnePageCheckoutTest.php` where `<step>` with `name="setupConfiguration"` is to be run first.

### `<step>` element    {#step-element}

Each scenario contains test steps as `<step>` child elements. Each `<step>` requires `name` and `module` to define the name of a test step and the module to which it belongs. All test steps are located in `<module>/Test/TestStep`.

Example:

```xml
<step name="setupConfiguration" module="Magento_Config"/>
<step name="createProducts" module="Magento_Catalog"/>
```

The example defines the following test steps:

-  `Config/Test/TestStep/SetupConfigurationStep.php`
-  `Catalog/Test/TestStep/CreateProductsStep.php`

#### `next` and `prev` attributes   {#next-prev-attributes}

Using `next` and `prev` attributes, you can specify a previous or next test step as part of the node.

```xml
<scenario name="OnePageCheckoutTest" firstStep="setupConfiguration">
    <step name="createProducts" module="Magento_Catalog"/>
    <step name="setupConfiguration" module="Magento_Config" next="createProducts"/>
</scenario>
```

```xml
<scenario name="OnePageCheckoutTest" firstStep="setupConfiguration">
    <step name="createProducts" module="Magento_Catalog" prev="setupConfiguration"/>
    <step name="setupConfiguration" module="Magento_Config"/>
</scenario>
```

Both examples define the following test steps and their sequence:

-  `Config/Test/TestStep/SetupConfigurationStep.php`.
-  `Catalog/Test/TestStep/CreateProductsStep.php`.

#### `alias` attribute  {#alias-attribute}

Sometimes you will want to use the same test step more then once in your scenario. In this case, you can use the `alias` attribute to define a distinct name for a step that has been already listed as `<step>`.

 {:.bs-callout-info}
A `<step>` name should only be used once within a scenario.

Example:

```xml
<scenario name="OnePageCheckoutTest" firstStep="setupConfiguration">
    <step name="setupConfiguration" module="Magento_Config" next="createProducts"/>
    <step name="createProducts" module="Magento_Catalog" next="setupConfigurationAfter"/>
    <step name="setupConfigurationAfter" alias="setupConfiguration" module="Magento_Config"/>
</scenario>
```

This example defines the following test steps and their sequence:

-  `Config/Test/TestStep/SetupConfigurationStep.php`
-  `Catalog/Test/TestStep/CreateProductsStep.php`
-  `Config/Test/TestStep/SetupConfigurationStep.php`

## Test step class  {#test-step}

All test steps are located in `<module>/Test/TestStep` as PHP classes in the following format:

```php
<?php

namespace Magento\YourModule\Test\TestStep;

use Magento\Mtf\TestStep\TestStepInterface;

class YourTestStep implements TestStepInterface
{
    public function __construct
    (
        // data that are required for this step along with other dependencies.
    ) {
        // all required classes (fixtures, pages, etc.) are assigned here.
    };

    public function run()
    {
        // logic of the functional test step.
    }

    public function cleanup()
    {
        // additional logic to be executed after the test step.
    }
}

```

A tests step must implement `Magento\Mtf\TestStep\TestStepInterface` and define:

-  constructor (optional)
-  public method `run()` (required)
-  public method `cleanup()` (optional)

See [`Magento\Customer\Test\TestStep\LoginCustomerOnFrontendStep`][].

### `constructor()` method  {#constructor-method}

Optionally, you may use the `constructor()` method, which injects data to be used by `run()`. The data may include classes such as pages, variation data, data returned by previous executed steps, etc.

In the previous example the `constructor()`:

-  injects the `CmsIndex` and `CustomerAccountLogin` pages.
-  injects the `LogoutCustomerOnFrontendStep` step.
-  injects the `Customer` fixture data.
-  assigns arguments to corresponding class properties.

### `run()` method  {#run-method}

The `run()` method is required to perform a test step and contains logic of the step.

In the previous example the `run()` method:

-  logs out if the customer was logged in.
-  clicks 'Sign In' on the `LinksBlock` of the `cmsIndex` page.
-  waits for requested page loading.
-  logs in the customer on the `customerAccountLogin` page.
-  waits for logging in the customer.

### `cleanup()` method  {#cleanup-method}

The `cleanup()` method is optional. It resets Magento to an initial state or executes any other logic after each variation of a test step.

In the previous example the `clean()` method:

-  logs out the customer.

<!-- LINKS DEFINITIONS -->

[injectable test]: {{ page.baseurl }}/mtf/mtf_entities/mtf_testcase.html
[test case]: #test-case
[data set]: {{ page.baseurl }}/mtf/mtf_entities/mtf_dataset.html
[test scenario]: #test-scenario
[test step]: #test-step
[`Magento\Customer\Test\TestStep\LoginCustomerOnFrontendStep`]: {{ site.mage2bloburl }}/2.2/dev/tests/functional/tests/app/Magento/Customer/Test/TestStep/LoginCustomerOnFrontendStep.php