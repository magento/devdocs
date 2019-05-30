---
group: functional-testing-framework-guide
title: Scenario test
---

A scenario test is a case of separate test steps where each step is a distinct class. Test steps can be grouped in any order that makes functional testing more agile comparable to [injectable test].  

A scenario test has the following advantages:

- Each step in the scenario is a separate [PHP](https://glossary.magento.com/php) class that is placed in the [module](https://glossary.magento.com/module) it belongs to.
- A scenario test reduces code duplication because each step can be used multiple times.
- Scenario tests are flexible and support Magento modularity.
- A new test can be easily created using existing steps.

A scenario test is split into four logical components:

- [test case], which executes tests steps in the order defined in a tests scenario.
- [data set], which contains variations of data and constraints for test steps.
- [test scenario], which defines order of test steps.
- [test step], which contains a test flow.

## Test case class   {#test-case}

Test cases are located in `<magento2 root dir>/dev/tests/functional/tests/app/Magento/<module>/Test/TestCase` along with the corresponding data sets. Each test case is a PHP class that runs the corresponding scenario. It does not contain any other logic. In general, the difference between a scenario test case and an injectable test case is that all test logic is moved to distinct test steps, and their sequence is defined separately in a [XML](https://glossary.magento.com/xml) file.
 
Implementation of a scenario test is always the same. You have to change the name of your test case only.

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

A scenario test case is a PHP class that extends the `\Magento\Mtf\TestCase\Scenario\` class and implements the `test()` method that calls `executeScenario()`. However, the `Scenario` class is not an interface, so the method can have any name other than `test()`.

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

Each `<scenario>` node defines a name of related test case in `name` and optionally a name of test step to be run first as `firstStep`.

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
  
* `Config/Test/TestStep/SetupConfigurationStep.php`
* `Catalog/Test/TestStep/CreateProductsStep.php`

#### `next` and `prev` attributes   {#next-prev-attributes}

Use `next` and `prev` attributes to specify previous or next test steps as part of the node.

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
  
* `Config/Test/TestStep/SetupConfigurationStep.php`.
* `Catalog/Test/TestStep/CreateProductsStep.php`.

#### `alias` attribute  {#alias-attribute}

Sometimes you want to use the same test step more then once in your scenario. In this case, you can use the `alias` attribute to define another name for a step that has been already listed as `<step>`.
 
{: .bs-callout .bs-callout-info }
You can only use a `<step>` with the same name within a scenario once.

Example:

```xml
<scenario name="OnePageCheckoutTest" firstStep="setupConfiguration">
    <step name="setupConfiguration" module="Magento_Config" next="createProducts"/>
    <step name="createProducts" module="Magento_Catalog" next="setupConfigurationAfter"/>
    <step name="setupConfigurationAfter" alias="setupConfiguration" module="Magento_Config"/>
</scenario>
```

The example defines the following test steps and their sequence:

* `Config/Test/TestStep/SetupConfigurationStep.php`
* `Catalog/Test/TestStep/CreateProductsStep.php`
* `Config/Test/TestStep/SetupConfigurationStep.php`

## Test step class  {#test-step}

The `<module>/Test/TestStep` directory contains each test step as a PHP class with the following format:

```php
<?php

namespace Magento\YourModule\Test\TestStep;

use Magento\Mtf\TestStep\TestStepInterface;

class YourTestStep implements TestStepInterface
{
    public function __construct
    (
        // data and other dependencies required for this step.
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

A test step must implement `Magento\Mtf\TestStep\TestStepInterface` and define:

 - constructor (optional)
 - public method `run()` (required)
 - public method `cleanup()` (optional)
 
An example with `Magento\Customer\Test\TestStep\LoginCustomerOnFrontendStep`:
 
{% collapsible Show/hide example %}

```php
<?php
/**
* Copyright © 2016 Magento. All rights reserved.
* See COPYING.txt for license details.
*/

namespace Magento\Customer\Test\TestStep;

use Magento\Cms\Test\Page\CmsIndex;
use Magento\Customer\Test\Fixture\Customer;
use Magento\Customer\Test\Page\CustomerAccountLogin;
use Magento\Mtf\TestStep\TestStepInterface;

/**
* Login customer on frontend.
*/
class LoginCustomerOnFrontendStep implements TestStepInterface
{
    /**
    * Customer fixture.
    *
    * @var Customer
    */
    protected $customer;

    /**
    * Cms index page.
    *
    * @var CmsIndex
    */
    protected $cmsIndex;

    /**
    * Customer login page.
    *
    * @var CustomerAccountLogin
    */
    protected $customerAccountLogin;

    /**
    * Logout customer on frontend step.
    *
    * @var LogoutCustomerOnFrontendStep
    */
    protected $logoutCustomerOnFrontend;

    /**
    * @constructor
    * @param CmsIndex $cmsIndex
    * @param CustomerAccountLogin $customerAccountLogin
    * @param LogoutCustomerOnFrontendStep $logoutCustomerOnFrontend
    * @param Customer $customer
    */
    public function __construct(
        CmsIndex $cmsIndex,
        CustomerAccountLogin $customerAccountLogin,
        LogoutCustomerOnFrontendStep $logoutCustomerOnFrontend,
        Customer $customer
    ) {
        $this->cmsIndex = $cmsIndex;
        $this->customerAccountLogin = $customerAccountLogin;
        $this->customer = $customer;
        $this->logoutCustomerOnFrontend = $logoutCustomerOnFrontend;
    }

    /**
    * Login customer.
    *
    * @return void
    */
    public function run()
    {
        $this->logoutCustomerOnFrontend->run();
        $this->cmsIndex->getLinksBlock()->openLink('Sign In');
        $this->cmsIndex->getCmsPageBlock()->waitPageInit();
        $this->customerAccountLogin->getLoginBlock()->login($this->customer);
        $this->cmsIndex->getCmsPageBlock()->waitPageInit();
    }

    /**
    * Logout customer on fronted.
    *
    * @return void
    */
    public function cleanup()
    {
        $this->logoutCustomerOnFrontend->run();
    }
}
```
{% endcollapsible %}
 
### `constructor()` method  {#constructor-method}

Optionally, you may use the `constructor()` method, which injects data to be used by `run()`. The data may include classes like pages, variation data, data returned by previous executed steps, etc.

On the previous example the `constructor()`:

- injects the `CmsIndex` and `CustomerAccountLogin` pages.
- injects the `LogoutCustomerOnFrontendStep` step.
- injects the `Customer` fixture data.
- assigns arguments to corresponding class properties.

### `run()` method  {#run-method}

The `run()` method is required to perform a test step and contains logic of the step.

On the previous example the `run()` method:

- logs out if the customer was logged in.
- clicks 'Sign In' on the `LinksBlock` of the `cmsIndex` page.
- waits for requested page loading.
- logs in the customer on the `customerAccountLogin` page.
- waits for logging in the customer.

### `cleanup()` method  {#cleanup-method}

The `cleanup()` method is optional. It serves to reset Magento to an initial state or executes any other logic after each variation of a test step.

On the previous example, the `clean()` method:

- logs out the customer

<!-- LINKS DEFINITIONS -->

[injectable test]: {{ page.baseurl }}/mtf/mtf_entities/mtf_testcase.html
[test case]: #test-case
[data set]: {{ page.baseurl }}/mtf/mtf_entities/mtf_dataset.html
[test scenario]: #test-scenario
[test step]: #test-step
