---
layout: default
group: mtf-guide
title: Scenario test
version: 2.0
github_link: mtf/mtf_entities/mtf_scenariotest.md
---

Scenario test is a case of separate test steps where each step is a distinct class. Test steps can be grouped in any order that makes functional testing more agile comparatively with [injectable test].  

Scenario test has the following advantages:

- Each step in the scenario is a separate {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} class that is placed in the {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %} it belongs to.
- Scenario test reduces code duplication because each step can be used multiple times.
- Scenario tests are flexible and support Magento modularity.
- New test can be easily created using existing steps.

Scenario test is split into four logical components:

- [test case], which executes tests steps in the order defined in a tests scenario
- [data set], which contains variations of data and constraints for test steps 
- [test scenario], which defines order of test steps
- [test step], which contains a test flow

## Test case class   {#test-case}

Test cases are located in `<magento2 root dir>/dev/tests/functional/tests/app/Magento/<module>/Test/TestCase` along with corresponding data sets. Each test case is a PHP class that only runs corresponding scenario, it doesn't contain any other logic than that. In general, the difference between scenario test case and injectable test case is that all test logic is moved to distinct test steps, and their sequence is defined separately in {% glossarytooltip 8c0645c5-aa6b-4a52-8266-5659a8b9d079 %}XML{% endglossarytooltip %} file.
 
Implementation of a scenario test is always the same. You have to change the name of your test case only.

{% highlight php %}
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

{% endhighlight %}

Scenario test case is a PHP class that extends the `\Magento\Mtf\TestCase\Scenario\` class and implements the `test()` method that calls `executeScenario()`. However, the `Scenario` class is not an interface, so the method can have any other name than `test()`.

## Test scenario    {#test-scenario}
 
Test scenario is a sequence of test steps. Each scenario test case has its own scenario. All scenarios for a module are collected in an XML file located in `<magento2 root dir>dev/tests/functional/tests/app/Magento/<module>/Test/etc/testcase.xml`.

{% highlight xml %}
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
{% endhighlight %}

### `<scenario>` element    {#scenario-element}

Each `<scenario>` node defines a name of related test case in `name` and optionally a name of test step to be run first as `firstStep`.

Example:

{% highlight xml %}
<scenario name="OnePageCheckoutTest" firstStep="setupConfiguration">
...
</scenario>
{% endhighlight %}

The example declares a scenario for `TestCase/OnePageCheckoutTest.php` where `<step>` with `name="setupConfiguration"` is to be run first. 

### `<step>` element    {#step-element}

Each scenario contains test steps as `<step>` child elements. Each `<step>` requires `name` and `module` to define the name of a test step and the module to which it belongs to. All test steps are located in `<module>/Test/TestStep`.

Example:

{% highlight xml %}
<step name="setupConfiguration" module="Magento_Config"/>
<step name="createProducts" module="Magento_Catalog"/>
{% endhighlight %}

The example defines the following test steps:
  
* `Config/Test/TestStep/SetupConfigurationStep.php`
* `Catalog/Test/TestStep/CreateProductsStep.php`

#### `next` and `prev` attributes   {#next-prev-attributes}

Using `next` and `prev` attributes you can specify previous or next test step as part of the node.

The following examples show tangled structure to demonstrate logic of the attributes.

{% highlight xml %}
<scenario name="OnePageCheckoutTest" firstStep="setupConfiguration">
    <step name="createProducts" module="Magento_Catalog"/>
    <step name="setupConfiguration" module="Magento_Config" next="createProducts"/>
</scenario>
{% endhighlight %}

{% highlight xml %}
<scenario name="OnePageCheckoutTest" firstStep="setupConfiguration">
    <step name="createProducts" module="Magento_Catalog" prev="setupConfiguration"/>
    <step name="setupConfiguration" module="Magento_Config"/>
</scenario>
{% endhighlight %}

Both examples define the following test steps and their sequence:
  
* `Config/Test/TestStep/SetupConfigurationStep.php`.
* `Catalog/Test/TestStep/CreateProductsStep.php`.

#### `alias` attribute  {#alias-attribute}

Sometimes you want to use the same test step more then once in your scenario. In this case, you can use the `alias` attribute to define another name for a step that has been already listed as `<step>`.
 
<div class="bs-callout bs-callout-info" id="info" markdown="1">
Note that you can use `<step>` with the same name in a scenario only once.
</div>

Example:

{% highlight xml %}
<scenario name="OnePageCheckoutTest" firstStep="setupConfiguration">
    <step name="setupConfiguration" module="Magento_Config" next="createProducts"/>
    <step name="createProducts" module="Magento_Catalog" next="setupConfigurationAfter"/>
    <step name="setupConfigurationAfter" alias="setupConfiguration" module="Magento_Config"/>
</scenario>
{% endhighlight %}

The example defines the following test steps and their sequence:

* `Config/Test/TestStep/SetupConfigurationStep.php`
* `Catalog/Test/TestStep/CreateProductsStep.php`
* `Config/Test/TestStep/SetupConfigurationStep.php`

## Test step class  {#test-step}

All test steps are located in `<module>/Test/TestStep` as PHP classes in the following format:

{% highlight php %}

<?php

namespace Magento\YourModule\Test\TestStep;

use Magento\Mtf\TestStep\TestStepInterface;

class YourTestStep implements TestStepInterface
{
    public function __construct
    (
        // data that are required for this step along with other dependencies.
    ) {
        // all required classes (fixtures, pages, etc.) have to be assigned here.
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

{% endhighlight %}

A tests step must implement `Magento\Mtf\TestStep\TestStepInterface` and define:

 - constructor (optional)
 - public method `run()` (required)
 - public method `cleanup()` (optional)
 
Let's see a test step on the example with `Magento\Customer\Test\TestStep\LoginCustomerOnFrontendStep`.
 
 {% collapsible Show/hide example %}
 
 {% highlight php %}
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
 {% endhighlight %}
 {% endcollapsible %}
 
### `constructor()` method  {#constructor-method}

You can optionally use the `constructor()` method which injects data to be used by `run()`. The data may include classes like pages, variation data, data returned by previous executed steps, etc.

On the previous example the `constructor()`:

- injects the `CmsIndex` and `CustomerAccountLogin` pages
- injects the `LogoutCustomerOnFrontendStep` step
- injects the `Customer` fixture data
- assigns arguments to corresponding class properties

### `run()` method  {#run-method}

The `run()` method is required to perform a test step and contains logic of the step.

On the previous example the `run()` method:

- logs out if the customer was logged in
- clicks 'Sign In' on the `LinksBlock` of the `cmsIndex` page
- waits for requested page loading
- logs in the customer on the `customerAccountLogin` page
- waits for logging in the customer

### `cleanup()` method  {#cleanup-method}

The `cleanup()` method is optional. It serves to reset Magento to initial state or execute any other logic after each variation of a test step.

On the previous example the `clean()` method:

- logs out the customer

<!-- LINKS DEFINITIONS -->

[injectable test]: {{page.baseurl}}/mtf/mtf_entities/mtf_testcase.html
[test case]: #test-case
[data set]: {{page.baseurl}}/mtf/mtf_entities/mtf_dataset.html
[test scenario]: #test-scenario
[test step]: #test-step
