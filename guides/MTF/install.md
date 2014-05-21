# Installing and Configuring the Magento Test Framework (MTF)

This page discusses how to install the MTF.

## Contents

*	[Introduction](#introduction)
*	[Prerequisites](#prerequisites)
*	[Installation Procedure](#installation-procedure)
*	[Google Chrome Prerequisite](#google-chrome-prerequisite)
*	[Quick Configuration for localhost](#quick-configuration-for-localhost)
*	[Configuration Details](#configuration-details)
*	[Configuration Reference](#configuration-reference)
*	[Next Steps](#next-steps)

## Introduction

The Magento Test Framework (MTF) enables you to run thorough and accurate tests of your Magento installation. This guide discusses how to install and configure MTF. [Using the Magento Test Framework (MTF)](using.md) discusses how to set up and run tests.

## Prerequisites

You can use the MTF on Windows, Mac OS, Ubuntu, or CentOS.

Other prerequisites:

*	PHP: You must enable the openssl extension to download files via https.

*	Magento 2 is installed and configured to not use the secret URL key. Click **Stores** > **Configuration** > **Advanced** > **Admin** > **Security**. Set **Add Secret Key to URLs** to **No**.

*	If you install Magento 2 using publication tool, use a command like the following: 

	```
	php -f dev/build/publication/../extruder.php -- -v -w "./" -l dev/build/publication/extruder/common.txt -l dev/build/publication/extruder/dev_build_ee.txt
	```
	
*	Git is installed,
	
	Windows only: Add Git to your system PATH variable or run composer from Git bash.

*	Web drivers are downloaded for your browser, unless you use Firefox browser, which does not require additional drivers.

## Installation Procedure

1.  Get the MTF code from <a href="https://github.com/magento/mtf" target="_blank">https://github.com/magento/mtf</a>.

1.	Download the composer as discussed in http://getcomposer.org/doc/00-intro.md#installation-nix and http://getcomposer.org/doc/00-intro.md#installation-windows. 

	If composer hasn't been install globally, `composer.phar` should be put into the directory where `composer.json` is located (typically `[your Magento install dir]/dev/tests/functional`). 
	
	**Note**: `composer.json` is an integral part of every Magento installation. This file contains information and settings for PHPUnit, Selenium server, libraries, and so on required to start MTF. It also checks MTF out from separate repository.

2. Run composer from magento2/dev/tests/functional directory using _either of_ the following commands:

	```
	composer install
	php composer.phar install
	```
	
	A new directory named `vendor` is created with the checked-out MTF. The `vendor` directory contains:

    <ul><li>An MTF framework directory (<tt>magento/mtf</tt>)</li>
   <li><tt>bin </tt></li>
   <li><tt>composer</tt></li>
   <li><tt>netwing</tt> </li>
   <li><tt>phpunit</tt></li>
   <li><tt>symfony</tt> </li>
   <li><tt>autoload.php</tt> (file)</li></ul>
	
3.	Run the generator from `[your Magento install dir]/dev/tests/functional/utils/generate/factory.php` or `[your Magento install dir]/dev/tests/functional/utils/generate.php`

	```
	php utils/generate/factory.php (for Magento 2)
	php utils/generate.php (for Magento 1)
	```
	
	**Note**: The generator tool is used to create factories for fixtures, handlers, repositories, page objects, and block objects. After the MTF is initialized, the factories are pre-generated to facilitate creating and running the tests.
	
	The generator creates generated directories containing factories for pages, blocks, handlers, fixtures and repositories.
	
## Google Chrome Prerequisite

If you run your tests in the Google Chrome web browser, the value of `browserName` to `chrome` in `[your Magento install dir]/dev/tests/functional/config/server.yml`.

## Quick Configuration for localhost

To run the MTF tests on localhost:

1. Specify your storefront and Magento Admin URLs in `phpunit.xml`:

	```
	<env name="app_frontend_url" value="http://localhost/magento2/index.php/"/>
	<env name="app_backend_url" value="http://localhost/magento2/index.php/backend/"/>
	```
	
2. Run the Selenium server from `vendor/netwing/selenium-server-standalone`:

	<ul>
	<li>Chrome browser: <tt>java -jar [path to your Selenium dir]/selenium-server.jar -Dwebdriver.chrome.driver=[path to your Chrome driver]/chromedriver.exe</tt></li>
	<li>All other browsers: <tt>java -jar [path to your Selenium dir]/selenium-server.jar</tt></li></ul>
	
3.  Run PHPUnit tests from `[your Magento install dir]/dev/tests/functional/vendor/bin`

## Configuration Details

This section discusses how to:

*	Specify the test context using fixtures
*	Apply the test context using handlers
*	Set the constraints and their sequence for your tests
*	Isolate the tests
*	Run UI-specific tests using page and block objects

MTF has several features to assist you with the preceding tasks:

*	Global configuration files (`Module\Test\etc\global`), which help to configure and generate various testing entities for a module, namely:
	*	`fixture.xml` to create fixture structure, repositories, and handlers
	*	`constraint.xml` to create constraints
	*	`page.xml` to create page objects
*	Generators (`utils\generate`), which generate fixtures, handlers, page objects, repositories, and constraints.
*	Data sets (`methodName.csv`), which help to avoid using nested data sets in fixtures as well as link the test data and behavior to constraints.

### Working With Fixtures

Fixtures enable you to create the preconditions for your tests separately from the tests themselves. Fixtures serve to set the context or environment for a test.

To create a fixture class, you must specify its structure and values. Basically, creating a fixture includes the following steps:

1.	Define the structure for a fixture in fixture configuration (`.xml`) file.
2.	Run the generator to generate a fixture class with the defined structure.
3.	Define the values for a fixture.

#### Defining the Structure for a Fixture

There are two ways to the create structure for a fixture:

*	Individually using `[fixtureName].xml` 
*	Globally using `fixture.xml` 

To use `[fixtureName].xml`, you must specify a fixture's details in `Module\Test\etc\global\fixture.xml`. A fixture based on `[fixtureName].xml` inherits the latter's name.

Creating `[fixtureName].xml` files for a module and entering the structure manually can be time-consuming. To facilitate this task, MTF gets the structure for fixtures from the database automatically using `Module\Test\etc\global\fixture.xml`. You need only list all the fixtures you need for a module in this file and specify the necessary parameters. 

<a href="https://gist.github.com/xcomSteveJohnson/fcd123106ec941c14852" target="_blank">Sample fixture.xml</a>

Following is a list of required parameters (depending on the fixture, additional parameters might be necessary):

*	Fixture name (`catalogProductSimple` in the preceding sample)
*	Module name for which a fixture is created (`Magento_Catalog` in the preceding sample)
*	`type` parameter, which can have a value of either `eav` or `flat` 
*	`entity_type`, which defines the type of an entity in the Magento code
*	`collection`, which specifies where the structure data is to be taken

After you list all necessary fixtures, run the generator as discussed in the next section. Individual configuration files (`[fixtureName].xml`) and fixture classes are generated automatically.

#### Using the Fixture Generator

The fixture generator (`utils\generate\fixture`) creates the fixture class from fixture configuration file. If you specified the configurations for fixtures globally (that is, in `fixture.xml`), the generator creates an individual configuration file for each declared fixture along with corresponding fixture classes. 

The generator creates only one fixture class from each individual configuration file; that is, after a fixture is created, the generator ignores this fixture's configuration file. To change a fixture's structure, delete this fixture class, make the necessary changes in its configuration file, and run the generator.

**Tip**: If you generated fixture classes from `fixture.xml` and need to adjust the structure of a newly created fixture, delete the fixture class, make changes in fixture's individual configuration file, and run the generator again.

#### Settings Values for a Fixture

This section discusses how to set values for a fixture. 

**Note**: You can skip this section if you're generating fixtures using `fixture.xml` because it uses the default data set.

You can set values for a fixture in any of the following ways:

*	Repository class when you need several data sets for your fixture, but these data sets are not numerous and more general.
*	Data set (`[methodname].csv`) when you need specific data for a fixture. Data from `[methodname].csv` takes precedence over the repository.

The repository class should share the name with a fixture its configuration file. The data from the repository class is passed by a constructor `InjectableFixture::getDataFromRepository()` to a fixture class. <a href="https://gist.github.com/xcomSteveJohnson/90fd36e7fa0f8042c12c" target="_blank">Sample</a>

##### Using the Repository Generator

A repository can be generated automatically from `Module\Test\etc\global\fixture.xml`.

Run the repository regenerator (`utils\generate\repository`) from the command line. The resulting repository class contains the values available in the database.

#### Using InjectableFixture

The `InjectableFixture` class ensures transferring data from application to MTF. All fixture classes in the MTF extend `InjectableFixture`.

The `InjectableFixture` class has the following methods:

*	`persist()`: Public method that passes a fixture's data to the tested system.
*	`getData()`: Public method that retrieves data from the fixture to an array.
*	`getDataFieldConfig()`: Public method that retrieves data field configurations.
*	`getDataConfig()`: Public method that retrieves data configurations.
*	`getDataFromRepository()`: Public method that retrieves the values from a repository class.
*	`getDataByPath()`: Protected method that retrieves data as chain of keys.
*	`getDataByKey()`: Protected method that retrieves data by its key.
*	`_applyPlaceholders()`: Protected method that applies a placeholder for each data element in a fixture.

### Transferring the Test Conditions by Handlers

After you specify the preconditions for a test, you must decide how these preconditions should be transferred for testing purposes. By using different types of handlers, you can specify the best way of transferring data from the fixtures.

In the MTF, there are two default types of handlers:

*	The curl handler passes the preconditions using direct HTTP calls to the server according to the headless principle.
*	The UI handler passes preconditions to the user interface using a web browser.

You can create other handlers if necessary. To make them available in the MTF, declare them in the object manager (`Mtf\ObjectManagerFactory`). <a href="https://gist.github.com/xcomSteveJohnson/ab70e51d80f5d40bab5b" target="_blank">Sample</a>

The latest handler in the list has the highest priority.

#### Generating and Adjusting Handlers

Handlers are generated automatically based on data in `fixture.xml`. Run the generator (`utils\generate\handler`) from the command line.

Samples of handlers defined in the object manager are located in in the `Handler` subdirectories of corresponding modules. By default, the UI and curl handler classes contain only one method: `persist()`. You must implement this method according to your testing needs. 

### Defining Constraints for Tests

Creating the test scenarios is not enough to test your application. You must also define the results of these scenarios and check whether actual results match the predefined ones. In the MTF, the assert class is responsible for checking the actual test results against the predefined results. A test case can have several constraints, depending on test conditions and data.

<a href="https://gist.github.com/xcomSteveJohnson/1cfb4b012ad7ef6f1fab" target="_blank">Assert class example</a>

#### Creating Constraints and Linking Them to Test Behavior and Data

Create constraints as follows:

1.	List all constraints for a module in `Module\Test\etc\global\constraints.xml`.
2.	Run the generator (`utils\generate\constraint`) from the command line.

After all constraints are ready, you must list them along with data and behavior that requires these constraints in the data set, `Module\TestCase\TestCaseClassName\[methodName].csv`. <a href="https://gist.github.com/xcomSteveJohnson/a25a556bd6d6cf2bea0b" target="_blank">Sample</a>

The sequence of the constraints should be logical. For example, if you test the scenario on creating a new product in the Magento Admin, first list the constraint for the `You saved the product` message and then for the product page. 

### Isolating the Test

When running your tests, you might need to return to a known state to verify the accuracy of the test results.

Isolation test management enables you to isolate a single test, test case, or test suite from other tests, so the tests, cases, and suites do not influence each other. Specially developed isolation scripts return the Magento instance to its initial state for a test, case, or suite.

An MTF isolation script is provided for Magento CE and EE. However, you can edit a script as necessary. <a href="https://gist.github.com/xcomSteveJohnson/f30d447d126f806f0a12" target="_blank">Sample</a>

#### Isolation Strategies

You can specify when to return to a known state using the isolation strategies. Your isolation strategy can apply to any scope; that is, to a test, case, or suite. MTF provides the following isolation strategies:

*	`none`: Default strategy; implies that the isolation script should not be run either before or after any test, case, or suite.
*	`before`: Run the isolation script before a test, case, or suite.
*	`after`: Run the isolation script after a test, case, or suite.
*	`both`: Run the isolation script both before and after a test, case, or suite.

Specify your default isolation strategy in `isolation.yml`. To change the isolation strategy globally (that is, for all your tests, cases, and suites), change the `none` value to any other strategy type for corresponding scope.

Sample isolation configuration file:

```
reset_url_path: dev/tests/mtf/path_to_script/script.php
testSuite: none
testCase: none
test: none
```

You can specify the isolation strategy on the individual level for every test, case, or suite if necessary. To set a strategy for a test, case, or suitee, specify `@isolation before`, `@isolation after`, or `@isolation bot`h annotation(s) in a PHPDoc.

**Note**: A strategy specified on a scope level overwrites a strategy that is set globally.

#### Specifying a Strategy for a Test Suite

Use the `@isolation` annotation at the test suite level to set the strategy for a suite. In the following example, the isolation script runs before and after a suite.

```
/**
 * @isolation both
 */
class IsolationSuite extends \PHPUnit_Framework_TestSuite
{
    public static function suite()
    {
        $suite = new self();
        $suite->addTestSuite('Mtf\TestCase\Functional\IsolationTest1');
        $suite->addTestSuite('Mtf\TestCase\Functional\IsolationTest2');
        $suite->addTestSuite('Mtf\TestCase\Functional\IsolationTest3');
        return $suite;
    }
}
```

#### Specifying Strategy for a Test Case

Use the `@isolation` annotation on the test case level to set strategy for a case. In the following example, the isolation script runs before a case.

```
/**
 * @isolation before
 */
class IsolationTest extends Isolation
{
    public static function setUpBeforeClass()
    {
        self::_login();
    }
 
    public function test1()
    {
        $this->_deleteProduct();
    }
 
    public function test2()
    {
        $this->_deleteProduct();
    }
 
    public function test3()
    {
        $this->_deleteProduct();
    }
}
```

#### Specifying Strategy for a Test

Use @isolation annotation on the test level to set strategy for a test. In the following example, the isolation script will be run after the test2.

class IsolationTest extends Isolation
{
    public static function setUpBeforeClass()
    {
        self::_login();
    }
 
    public function test1()
    {
        $this->_deleteProduct();
    }
 
    /**
     * @isolation after
     */
    public function test2()
    {
        $this->_deleteProduct();
    }
 
    public function test3()
    {
        $this->_deleteProduct();
    }
}





## Configuration Reference

This section provides a detailed reference for all MTF configuration options. All files discussed in this section are located in `[your Magento install dir]/dev/tests/functional/config` and `[your Magento install dir]/dev/tests/functional/utils/config`

For more information, see:

*	[application.yml](#applicationyml)
*	[handler.yml](#handleryml)
*	[isolation.yml](#isolationyml)
*	[server.yml](#serveryml)
*	[generator_config.yml](#generator_configyml)
*	[ee_modules.yml](#ee_modulesyml)

#### application.yml

<a href="https://gist.github.com/xcomSteveJohnson/0b21ada7c68230d5a872" target="_blank">Sample</a>


*	`reopen_browser_on` defines whether a browser should be reopened before every test or before every test case. Default behavior is for browser to open before every test case.
*	`backend_user_credentials` defines the Magento Admin administrator user name and password.
*	`backend_login_url` defines the Magento Admin login URL.

#### handler.yml

Responsible for specifying additional settings for different types of handlers. <a href="https://gist.github.com/xcomSteveJohnson/3808faba2cb24281d035" target="_blank">Sample</a>.

#### isolation.yml

Responsible for specifying the isolation strategies for tests, cases, and suites. <a href="https://gist.github.com/xcomSteveJohnson/6b7207ba3f55da33a01b" target="_blank">Sample</a>.

Your _isolation strategy_ determines when a system should return to its initial state. Isolation strategy can apply to any scope; that is, to a test, case, or suite. There are four isolation strategies available in the MTF:

*	`none`: Default strategy; implies that the isolation script should not be run either before or after any test, case, or suite.
*	`before`: Implies that the isolation script should be run before a test, case, or suite.
*	`after`: Implies that the isolation script should be run after a test, case, or suite.
*	`both`: Implies that the isolation script should be run both before and after a test, case, or suite.

#### server.yml

Allows changing Selenium server configurations. <a href="https://gist.github.com/xcomSteveJohnson/302b66ddf9b29cf85a8d" target="_blank">Sample</a>.

#### generator_config.yml

Allows changing Selenium server configurations. <a href="https://gist.github.com/xcomSteveJohnson/132a24ec3fffe44b7fcc" target="_blank">Sample</a>.

*	Set `generate_specified_modules` to `yes` or `no` to create the fabrics for the tests from the specified modules. Disabled (set to `no`) by default which means the fabrics will be created for all modules of tests. Setting to `yes` means that only modules specified by `specified_modules` will be analyzed and have the fabrics created for them. The rest of tests will most likely fail due to absence of fabrics for them.

*	Set `specified_modules` to define a file containing the list of test modules. Default value is `dev\tests\mtf\utils\config\ee_modules.yml`

*	Set `tests_fallback` to specify themes priorities; in other words, what theme displays on the storefront. Default value is `Plushe`

*	Set `handler_fallback` to define the priority of using the handlers.

#### ee_modules.yml

Specifies the groups of tests for which fabrics should be created. Create this file only if `generate_specified_modules` parameter is set to `yes` in `[your Magento install dir]/dev/tests/functional/utils/config/generator_config.yml`. By default, the file is empty. 

<a href="https://gist.github.com/xcomSteveJohnson/f7a527b7e454f01ab06f" target="_blank">Sample</a>.

## Next Steps

Start using the MTF as discussed in [Using the Magento Test Framework (MTF)](using.md).