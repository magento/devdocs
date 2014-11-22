---
layout: default
title: Magento test framework (MTF)
---

<h1 id="m2devgde-objmgrhelper">{{ page.title }}</h1>
<p><a href="{{ site.githuburl }}extension-dev-guide/test/test-framework.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>
<h2 id="m2devgde-objmgr-intro">Overview</h2>
<p>The Magento test framework (MTF) enables you to run thorough and accurate tests of your Magento installation. Use these instructions to install and configure MTF, set up the components of a test, and configure testing.</p>
<p>The main tools are:</p>

* **Fixtures**: Use these to create context or preconditions for your tests.
* **Handlers**: Use these to transfer the preconditions from the fixtures.
* **Constraints**: Use this tool to make sure your tests attained the intended results.
* **Isolation management and strategies**: Ensure that your testing is accurate by isolating a test, case, or suite.
* **Page and block objects**: Use these to create pages and blocks for the user interface (UI) testing.

A *group* is a collection of entities such as tests, fixtures, pages, blocks, constraints, or handlers that belong to the same logical Magento module. MTF groups should have the same names as the corresponding modules in Magento code. An entity can use the entities from other modules.

<h2 id="mtf-install">Install and configure MTF</h2>

### Prerequisites

Before you install MTF, meet these prerequisites:

* Install and configure WAMP/LAMP or another appropriate environment.
* Download web drivers for your browser, unless you use Firefox bowser, which does not require additional drivers.
* Install a Magento instance.
* Set the **Add Secret Key to URLs** to **No** in the admin panel. To do so, go to **System > Configuration > Advanced > Admin > Security**.

### Install MTF

Before you can create tests, you must install MTF:

1. Download and install the composer as described at [http://getcomposer.org/doc/00-intro.md#installation-nix](http://getcomposer.org/doc/00-intro.md#installation-nix) and [http://getcomposer.org/doc/00-intro.md#installation-windows](http://getcomposer.org/doc/00-intro.md#installation-windows). 
    We recommend installing composer globally. Alternatively, save the `composer.phar` to the same folder with `composer.json` file.
    
    **Important**: `composer.json` is an integral part of every Magento instance. This file contains information/settings for PHPUnit, Selenium server, libraries, and so on to start MTF. It also checks MTF out from separate repository.
2. MTF is checked out. **vendor** folder contains all elements specified in the `composer.json` file are created. The following sub-folders are available in **vendor** folder:
    * **magento/mtf** folder
    * **bin** folder
    * **netwing** folder
    * **composer** folder
    * **phpunit** folder
    * **symfony** folder

### Create tests

**Note**: In MTF your tests should be placed to the groups, which correspond to the logical modules existing in Magento code. For instance, product creation workflow belongs to the Catalog module in Magento code, so a test on product creation should be placed to the group with the same name in MTF.

Before you run your first test in MTF, you must make these changes:

1. In `phpunit.xml` file, specify the URLs of the frontend and backend of your store in **app_frontend_url** and **app_backend_url** parameters correspondingly.
    <blockquote><pre>
&lt;env name="app_frontend_url" value="http://localhost/index.php/"/>
&lt;env name="app_backend_url" value="http://localhost/index.php/backend/"/></pre></blockquote>
2. In `<magento_root>/dev/tests/functional/config/server.yml` file, specify the settings for Selenium server such as browser, host, port, time-out, and so on.

### Run tests

1. Run the Selenium server, which could be found at vendor/netwing/selenium-server-standalone folder.
    **Tip**: Specify the following parameter for Google Chrome browser: java -jar selenium-server.jar -Dwebdriver.chrome.driver=<path to driver>.
2. Run necessary tests through PHPUnit.

### Configure MTF

You can configure MTF by changing files at `<magento_root>/dev/tests/functional/config` and `<magento_root>/dev/tests/functional/utils/config` folders:
<blockquote>
<pre>
    &lt;magento_root>/dev/tests/functional/config/application.yml
    &lt;magento_root>/dev/tests/functional/config/server.yml
    &lt;magento_root>/dev/tests/functional/config/isolation.yml
    &lt;magento_root>/dev/tests/functional/config/handler.yml
</pre>
</blockquote>

`<magento_root>/dev/tests/functional/config/application.yml` file allows changing the following parameters:

* **reopen_browser_on** defines whether a browser should be reopened before every test or before every test case. Default behavior is for browser to open before every test case
* **backend_user_credentials** defines login and password to the backend

`<magento_root>/dev/tests/functional/config/server.yml` file allows changing Selenium server configurations.

`<magento_root>/dev/tests/functional/config/isolation.yml` file specifies the isolation strategies for tests/cases/suites. See Isolating the Test section for details.

As the rest of Magento, MTF uses the dependency injection (DI) and object manager, in particular, for generating the fixture classes and handlers.

**Tip**: virtualType argument should not be used in DI configurations for MTF.

## MTF standard

Here are some things you must know to test your installation:

* How to specify the test context by using fixtures
* How to apply the test context by using handlers
* How to set the constraints and their sequence for your tests
* How to isolate the tests
* How to run UI-specific tests using the page and block objects

MTF has several features that enable you to complete these tasks:

* Global configuration files (Module\Test\etc\global), which help to configure and generate various testing entities for a module, namely:
    * fixture.xml to create fixture structure, repositories, and handlers
    * constraint.xml to create constraints
    * page.xml to create page objects
* Generators (utils\generate), which generate fixtures, handlers, page objects, repositories, and constraints.
* Data sets (methodName.csv), which help to avoid using nested data sets in fixtures as well as link the test data and behavior to constraints.

## Fixtures

In MTF, you can create the preconditions for your tests separately from the tests themselves by using the fixtures. Fixtures serve to set context/environment for a test.

To create a fixture class, you will need to specify its structure and values. Basically, creating a fixture includes the following steps:

* Define the structure for a fixture in fixture configuration (.xml) file.
* Run the generator to generate a fixture class with defined structure.
* Define the values for a fixture.

### Define structure for a fixture

There are two ways to create structure for a fixture:

* individually via fixtureName.xml file
* globally via fixture.xml file

To create the structure for a fixture individually, use fixtureName.xml file. Simultaneously, you will need to specify a fixture's details in `Module\Test\etc\global\fixture.xml` file. A fixture, which will be created based on fixtureName.xml file, will inherit the latter's name.

Creating fixtureName.xml files for a module and entering the structure manually to them can be time consuming. To facilitate this task, MTF gets the structure for fixtures from the database automatically via `Module\Test\etc\global\fixture.xml` file. Just list all fixtures you need for a module in this file and specify the necessary parameters. For instance, fixture's structure for a simple product looks as follows:

<blockquote>
<pre>
&lt;catalogProductSimple module="Magento_Catalog">
        &lt;type>eav&lt;/type>
        &lt;entity_type>catalog_product&lt;/entity_type>
        &lt;product_type>simple&lt;/product_type>
        &lt;collection>Magento\Catalog\Model\Resource\Product\Collection&lt;/collection>
        &lt;identifier>sku&lt;/identifier>
        &lt;fields>
            &lt;id>
                &lt;attribute_code>id&lt;/attribute_code>
                &lt;backend_type>virtual&lt;/backend_type>
            &lt;/id>
            &lt;type_id>
                &lt;attribute_code>type_id&lt;/attribute_code>
                &lt;backend_type>virtual&lt;/backend_type>
            &lt;/type_id>
            &lt;attribute_set_id>
                &lt;attribute_code>attribute_set_id&lt;/attribute_code>
                &lt;backend_type>virtual&lt;/backend_type>
            &lt;/attribute_set_id>
            &lt;qty>
                &lt;attribute_code>qty&lt;/attribute_code>
                &lt;input>input&lt;/input>
            &lt;/qty>
        &lt;/fields>
        &lt;data_set>
            &lt;sku />
            &lt;name />
            &lt;short_description />
            &lt;description />
            &lt;tax_class_id />
        &lt;/data_set>
        &lt;data_config>
            &lt;create_url_params>
                &lt;type>simple&lt;/type>
                &lt;set>4&lt;/set>
            &lt;/create_url_params>
            &lt;input_prefix>product&lt;/input_prefix>
        &lt;/data_config>
    &lt;/catalogProductSimple>
</pre>
</blockquote>

Parameters that need to be specified for a fixture will depend on its purpose. However, the following parameters are mandatory:

*     name of a fixture, that is, catalogProductSimple in the example above
*     name of a module, for which a fixture is created (Magento_Catalog in the example above)
*     type parameter can have eav or flat value
*     entity_type defines the type of an entity in Magento code
*     collection defines from where the structure data is to be taken

Once you list all necessary fixtures, run the generator. Individual configuration files (fixtureName.xml) and fixture classes will be generated automatically.

### Use fixture generator

Generator (utils\generate\fixture) serves to create the fixture class from fixture configuration file. If you specified the configurations for fixtures globally (that is, in fixture.xml file), generator will create individual configuration file for each declared fixture along with corresponding fixture classes. To run the generator, use the command line.

Generator creates only one fixture class from each individual configuration file, that is, after a fixture is created the generator will ignore this fixture's configuration file. If you want to make changes in a fixture's structure, delete this fixture class, make the necessary changes in its configuration file, and run the generator.

**Tip:** If you generated fixture classes from global configurations (that is, from fixture.xml file) and need to adjust the structure of a newly created fixture, delete the fixture class, make changes in fixture's individual configuration file, and run the generator again.

### Settings Values for a Fixture

**Note:** Fixture generated from fixture.xml file can contain the default data set. Thus, depending on your testing needs, you may skip setting a value for a fixture.

You can set value for a fixture in two ways:

* Through repository class when you need several data sets for your fixture, but these data sets are not numerous and more general.
* Through data set (methodName.csv) file when you need specific data for a fixture. Data from the data set file will prevail over data from repository.

The repository class should share the name with a fixture and fixture configuration file. The data from the repository class will be passed via constructor by `InjectableFixture::getDataFromRepository()` method to a fixture class.

**Sample of the repository class:**

<blockquote>
<pre>
namespace Magento\Catalog\Test\Repository;
use Mtf\Repository\AbstractRepository;
/**
 * Class CatalogProductSimple
 *
 * @package Magento\Catalog\Test\Repository
 */
class CatalogProductSimple extends AbstractRepository
{
    public function __construct(array $defaultConfig = [], array $defaultData = [])
    {
        $this->_data['SimpleProduct_sku_516169631'] = [
            'sku' => 'SimpleProduct_sku_516169631',
            'name' => 'SimpleProduct 516169631',
            'type_id' => 'simple',
            'attribute_set_id' => '4',
            'price' => ['value' => 3, 'preset' => '-'],
            'id' => '1',
            'mtf_dataset_name' => 'SimpleProduct_sku_516169631'
        ];
        $this->_data['SimpleProduct_sku_1947585255'] = [
            'sku' => 'SimpleProduct_sku_1947585255',
            'name' => 'SimpleProduct 1947585255',
            'type_id' => 'simple',
            'attribute_set_id' => '4',
            'price' => ['value' => 4, 'preset' => '-'],
            'id' => '2',
            'mtf_dataset_name' => 'SimpleProduct_sku_1947585255'
        ];
        $this->_data['100_dollar_product'] = [
            'sku' => '100_dollar_product',
            'name' => '100_dollar_product',
            'type_id' => 'simple',
            'attribute_set_id' => '4',
            'price' => ['value' => 100, 'preset' => '-'],
            'id' => '2',
            'mtf_dataset_name' => '100_dollar_product'
        ];
        $this->_data['40_dollar_product'] = [
            'sku' => '40_dollar_product',
            'name' => '40_dollar_product',
            'type_id' => 'simple',
            'attribute_set_id' => '4',
            'price' => ['value' => 40, 'preset' => '-'],
            'id' => '2',
            'mtf_dataset_name' => '40_dollar_product'
        ];
        $this->_data['MAGETWO-23036'] = [
            'sku' => 'MAGETWO-23036',
            'name' => 'simple_with_category',
            'type_id' => 'simple',
            'attribute_set_id' => '4',
            'price' => ['value' => 100, 'preset' => 'MAGETWO-23036'],
            'id' => '3',
            'category_ids' => ['presets' => 'default'],
            'mtf_dataset_name' => 'simple_with_category',
        ];
    }
}
</pre>
</blockquote>

### Use repository generator

A repository can be generated automatically from Module`\Test\etc\global\fixture.xml` file.

To run the repository regenerator (utils\generate\repository), use the command line. Resulting repository class will contain the values available in the database.
Exploring InjectableFixture

InjectableFixture class ensures transferring data from application to MTF. All fixture classes in MTF extend from InjectableFixture.

InjectableFixture class has the following methods:

*     persist() - public method that serves to pass a fixture's data to the tested system.
*     getData() - public method that serves to retrieve the data from fixture to the array.
*     getDataFieldConfig() - public method that serves to retrieve the data field configurations.
*     getDataConfig() - public method that serves to retrieve the data configurations.
*     getDataFromRepository() - public method that serves to fetch the values from a repository class.
*     getDataByPath() - protected method that serves to get the data presented as chain of keys.
*     getDataByKey() - protected method that serves to get the data by its key.
*     _applyPlaceholders() - protected method that serves to apply a placeholder for each data element in a fixture.

### Transfer the test conditions by handlers

Once you specify the preconditions for a test, you will have to decide how these preconditions should be transferred for testing purposes. By using different types of handlers, you may specify the best way of transferring data from the fixtures.

In MTF, there are two default types of handlers:

*     The curl handler passes the preconditions via direct HTTP calls (omitting the browser) to the server according to headless principle.
*     The UI handler passes the preconditions to the user interface via the browser.

You can create other handlers if necessary. To make them available in MTF, declare them in the object manager (Mtf\ObjectManagerFactory):

<blockquote>
<pre>
/**
     * Configure Object Manager
     * This method is static to have the ability to configure multiple instances of Object manager when needed
     *
     * @param MagentoObjectManager $objectManager
     */
    public static function configure(MagentoObjectManager $objectManager)
    {
        $objectManager->configure(
            $objectManager->get('Mtf\ObjectManager\ConfigLoader\Primary')->load()
        );
        $objectManager->configure(
            $objectManager->get('Mtf\ObjectManager\ConfigLoader\Module')->load()
        );
        $objectManager->configure(
            $objectManager->get('Mtf\ObjectManager\ConfigLoader\Module')->load('ui')
        );
        $objectManager->configure(
            $objectManager->get('Mtf\ObjectManager\ConfigLoader\Module')->load('curl')
        );
    }
}
</pre>
</blockquote>

Priorities of the handlers in the object manager is reverse, that is, the latest handler in the list has the highest priority.

## Handlers

Handlers are generated automatically based on data in fixture.xml file. To run the generator (utils\generate\handler), use the command line.

Samples of handlers defined in the object manager will appear in Handler folders of corresponding modules. By default, UI and Curl handler classes contain only one method: persist(). You will need to implement this method according to your testing needs.
Defining Constraints for Tests

Creating the test scenarios is not enough to test your application. You also need to define the results of these scenarios and check whether actual results match the predefined ones. In MTF, the assert class is responsible for checking the actual test results against the predefined results. A test case can have several constraints depending on test conditions and data.

**Sample of the assert class:**

<blockquote>
<pre>
namespace Magento\Catalog\Test\Constraint;
use Mtf\Constraint\AbstractConstraint;
use Magento\Catalog\Test\Page\Product\CatalogProductView;
use Magento\Catalog\Test\Fixture\CatalogProductSimple;
/**
 * Class AssertProductOutOfStock
 *
 * @package Magento\Catalog\Test\Constraint
 */
class AssertProductOutOfStock extends AbstractConstraint
{
    /**
     * Constraint severeness
     *
     * @var string
     */
    protected $severeness = 'low';
    /**
     * Text value for checking Stock Availability
     */
    const STOCK_AVAILABILITY = 'Out of stock';
    /**
     * Assert  that Out of Stock status is displayed on product page
     *
     * @param CatalogProductView $catalogProductView
     * @param CatalogProductSimple $product
     * @return void
     */
    public function processAssert(CatalogProductView $catalogProductView, CatalogProductSimple $product)
    {
        $catalogProductView->init($product);
        $catalogProductView->open();
        \PHPUnit_Framework_Assert::assertEquals(
            self::STOCK_AVAILABILITY,
            $catalogProductView->getViewBlock()->stockAvailability(),
            'Control \'' . self::STOCK_AVAILABILITY . '\' is not visible.'
        );
    }
    /**
     * Text of Out of Stock assert
     *
     * @return string
     */
    public function toString()
    {
        return 'Out of stock control is visible.';
    }
}
</pre>
</blockquote>

### Create and link constraints

Creating constraints includes two steps:

*     List all constraints for a module in Module\Test\etc\global\constraints.xml file.
*     Run the generator (utils\generate\constraint) in the command line.

After all constraints are ready, you will need to list them along with data and behavior that entail these constraints in the data set - Module\TestCase\TestCaseClassName\methodName.csv file:

<blockquote>
<pre>
"product/data/name"; "product/data/sku"; "product/data/price/value"; "product/data/special_price"; "constraint"
"Simple Product %isolation%"; "simple_sku_%isolation%"; "100"; "-"; "assertProductSaveMessage, assertProductInGrid, assertProductInCategory, assertProductView, assertProductInCart";
"Simple Product %isolation%"; "simple_sku_%isolation%"; "100"; "-"; "assertProductSaveMessage, assertProductInGrid, assertProductInCategory, assertProductView, assertProductInCart";
"Simple Product %isolation%"; "simple_sku_%isolation%"; "100"; "90"; "assertProductSaveMessage, assertProductInGrid, assertProductInCategory, assertProductView, assertProductInCart";
"Simple Product %isolation%"; "simple_sku_%isolation%"; "100"; "90"; "assertProductSaveMessage, assertProductInGrid, assertProductInCategory, assertProductView, assertProductInCart";
"Simple Product %isolation%"; "simple_sku_%isolation%"; "100"; "-" "assertProductSaveMessage, assertProductInGrid, assertProductInCategory, assertProductView, assertProductInCart";
"Simple Product %isolation%"; "simple_sku_%isolation%"; "100"; "-"; "assertProductSaveMessage, assertProductInGrid, assertProductInCategory, assertProductView, assertProductInCart";
"Simple Product %isolation%"; "simple_sku_%isolation%"; "100"; "-"; "assertProductSaveMessage, assertProductInGrid, assertProductInCategory, assertProductView, assertProductInCart";
"Simple Product %isolation%"; "simple_sku_%isolation%"; "100"; "-"; "assertProductSaveMessage, assertProductInGrid, assertProductInCategory, assertProductView, assertProductInCart";
"Simple Product %isolation%"; "simple_sku_%isolation%"; "10"; "-"; "assertProductSaveMessage, assertProductInGrid, assertProductVisibleInCategory";
"Simple Product %isolation%"; "simple_sku_%isolation%"; "10"; "-"; "assertProductSaveMessage, assertProductInStock";
"Simple Product %isolation%"; "simple_sku_%isolation%"; "10"; "-"; "assertProductSaveMessage, assertProductOutOfStock";
"Simple Product %isolation%"; "simple_sku_%isolation%"; "10"; "-"; "assertProductSaveMessage, assertProductSearchableBySku";
</pre>
</blockquote>

The sequence of the constraints should be logical. For example, if you test the scenario on creating a new product in the admin panel, first list constraint for "You saved the product" message and then for the Product page.

## Isolation

When running the test, you might need the system to return to its initial state to ensure the accuracy of the test results.

Isolation test management allows you to isolate a single test, test case, or test suite from other tests, so the tests/cases/suites do not influence each other. Specially developed isolation script ensures returning of the Magento instance to its initial state for a test/case/suite.

Within MTF, an isolation script is provided for every edition of Magento (EE, CE). However, you can edit a script as necessary.

**Sample of the isolation script:**

<blockquote>
<pre>
&lt;?php
exec('mysql -umagento -pmagento -e"DROP DATABASE magento; CREATE DATABASE magento CHARACTER SET utf8;"');
exec('mysql -umagento -pmagento magento < /var/www/magento/magento.dump.sql');
</pre>
</blockquote>

### Isolation strategies

You can specify when a system should return to its initial state by using the isolation strategies. Isolation strategy can apply to any scope, that is, to a test, case, or suite. There are four isolation strategies available in MTF:

*     none - default strategy; implies that the isolation script should not be run either before or after any test/case/suite.
*     before - implies that the isolation script should be run before a test/case/suite.
*     after - implies that the isolation script should be run after a test/case/suite.
*     both - implies that the isolation script should be run both before and after a test/case/suite.

Default strategy is specified in the configuration file (isolation.yml). If you want to change the isolation strategy globally (that is, for all your tests/cases/suites), change the 'none' value to any other strategy type for corresponding scope.

**Isolation configuration file:**

<blockquote>
<pre>
reset_url_path: dev/tests/mtf/path_to_script/script.php
testSuite: none
testCase: none
test: none
</pre>
</blockquote>

You can specify the isolation strategy on the individual level for every test/case/suite if necessary. To set a strategy for a test/case/suite, specify @isolation before, @isolation after, or @isolation both annotation(s) in a PHPDoc.
Note: A strategy specified on the scope level overwrites a strategy that is set globally.

### Specify strategy for a test suite

Use @isolation annotation on the suite level to set strategy for a suite. In the following example, the isolation script will be run before and after a suite.

<blockquote>
<pre>
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
</pre>
</blockquote>

#### Specify strategy for a test case

Use @isolation annotation on the case level to set strategy for a case. In the following example, the isolation script will be run before a case.

<blockquote>
<pre>
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
</pre>
</blockquote>

#### Specify strategy for a test

Use @isolation annotation on the test level to set strategy for a test. In the following example, the isolation script will be run after the test2.

<blockquote>
<pre>
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
</pre>
</blockquote>

#### Specify strategy for every test in a test case

Use @isolation test annotation on the case level to set strategy for every test in a case. In the following example, the isolation script will be run before every test in a case.

<blockquote>
<pre>
/**
 * @isolation test before
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
</pre>
</blockquote>

#### Specify strategy for every test case in a suite

Use @isolation testCase annotation on the suite level to set strategy for every case in a suite. In the following example, the isolation script will be run before and after every case in a suite.

<blockquote>
<pre>
/**
 * @isolation testCase both
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
</pre>
</blockquote>

#### Specify strategy for every test in a suite

Use @isolation test annotation on the suite level to set strategy for every test in a suite. In the following example, the isolation script will be run before and after every test in a suite.

<blockquote>
<pre>
/**
 * @isolation test both
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
</pre>
</blockquote>

#### Specify different strategies for different scopes in a suite

Use @isolation test and @isolation testCase annotations on the suite level to set strategy correspondingly for every test and every case in a suite. In the following example, the isolation script will be run before and after every test in a suite and before every case in a suite.

<blockquote>
<pre>
/**
 * @isolation test both
 * @isolation testCase before
 */
</pre>
</blockquote>

When changing strategy(s) on the individual level, please, consider the following peculiarities:

*     Isolation script is not executed twice in a row. For example: if the before strategy is set for a test case and for the first test in this case, the isolation script will be run just once, before a test case.
*     If the after strategy is set for the last test in a suite, the isolation script will not be executed as redundant.

#### Use page and block objects for UI-specific test

In MTF, the page object and block object patterns are used to avoid unnecessary duplication of code and make tests easier to support. To create the pages for your tests, we recommend creating the block objects first. After that you can create the page objects and assign the necessary blocks to them. The block objects are to be created manually, while the page objects can be generated automatically.

#### Explore block object

The block object defines the business logic. The block object can contain other block objects upon condition that this inclusion reflects the logic of Magento system. For instance, the Widget block object can be included into the Left Panel block object or Right Panel block object.

The block object also contains the commands, such as 'submit' or 'verify.' The only command detached to a separate abstract block is 'fill/verify' command. The Form block object is to execute simple operation - fill in a field, in particular. If you need to execute more complicated operations, such as fill in the product details by switching between different tabs, use hierarchy of the Form block objects.

To define the correspondence between the fields in a block and data in a fixture, use the mapping tool. Mapping should be defined in blockName.xml file.

**Sample of block object:**

<blockquote>
<pre>
namespace Magento\Catalog\Test\Block\Adminhtml\Product\Edit\Tab\Super\Config;
use Mtf\Block\Form;
use Mtf\Client\Element;
use Mtf\Client\Element\Locator;
/**
 * Class Matrix
 * Product variations matrix block
 *
 * @package Magento\Catalog\Test\Block\Adminhtml\Product\Edit\Tab\Super\Config
 */
class Matrix extends Form
{
    /**
     * Fill qty to current variations
     *
     * @param array $variations
     */
    public function fillVariation(array $variations)
    {
        foreach ($variations as $variation) {
            $variationRow = $this->getVariationRow($variation['configurable_attribute']);
            foreach ($variation['value'] as $key => $field) {
                if (!empty($this->mapping[$key])) {
                    $this->_rootElement->find(
                        $variationRow . $this->mapping[$key]['selector'],
                        Locator::SELECTOR_XPATH,
                        isset($this->mapping[$key]['input']) ? $this->mapping[$key]['input'] : null
                    )->setValue($field['value']);
                }
            }
        }
    }
    /**
     * Define row that clarifies which line in Current Variations grid will be used
     *
     * @param array $variationData
     * @return Element
     */
    private function getVariationRow(array $variationData)
    {
        $options = array();
        foreach ($variationData as $attributeData) {
            $options[] = 'td[text()="' . $attributeData['attribute_option'] . '"]';
        }
        return '//tr[' . implode(' and ', $options) . ']';
    }
}
</pre>
</blockquote>

#### Explore page object

The page object contains the following main elements:

*     URL of the target page, to execute the open() abstract method; URL is formed based on const MCA parameter
*     const MCA parameter, which identifies a page and is used by a generator of a page; the page object is to be named by its MCA
*     the blocks, with which the page object can work

Page object opens itself and returns its own blocks.

**Sample of the page object:**

<blockquote>
<pre>
namespace Magento\Customer\Test\Page\Adminhtml; 
use Mtf\Page\BackendPage; 
/**
 * Class CustomerIndex
 *
 * @package Magento\Customer\Test\Page\Adminhtml
 */
class CustomerIndex extends BackendPage
{
    const MCA = 'customer/index';
    protected $_blocks = [
        'messagesBlock' => [
            'name' => 'messagesBlock',
            'class' => 'Magento\Core\Test\Block\Messages',
            'locator' => '#messages .messages',
            'strategy' => 'css selector',
        ],
        'pageActionsBlock' => [
            'name' => 'pageActionsBlock',
            'class' => 'Magento\Backend\Test\Block\GridPageActions',
            'locator' => '.page-main-actions',
            'strategy' => 'css selector',
        ],
        'customerGridBlock' => [
            'name' => 'customerGridBlock',
            'class' => 'Magento\Customer\Test\Block\Adminhtml\CustomerGrid',
            'locator' => '#customerGrid',
            'strategy' => 'css selector',
        ],
    ];
    /**
     * @return \Magento\Core\Test\Block\Messages
     */
    public function getMessagesBlock()
    {
        return $this->getBlockInstance('messagesBlock');
    }
    /**
     * @return \Magento\Backend\Test\Block\GridPageActions
     */
    public function getPageActionsBlock()
    {
        return $this->getBlockInstance('pageActionsBlock');
    }
    /**
     * @return \Magento\Customer\Test\Block\Adminhtml\CustomerGrid
     */
    public function getCustomerGridBlock()
    {
        return $this->getBlockInstance('customerGridBlock');
    }
}
</pre>
</blockquote>

#### Create page object

Creating a page object involves the following steps:

1. List all pages you need in global page configuration file Module\Test\etc\global\page.xml. You will need to specify name, MCA, area, and corresponding class for each page.
2. Use the command line to run the generator (utils\generate\page). Page class and individual configuration file (pageName.xml) will be generated for each page.
    **Note: **Page classes created at this step will not contain the necessary blocks. Page individual configuration file (pageName.xml) will contain the test block to facilitate entering the block object information.
3. Specify the necessary blocks for each page in the individual configuration file (pageName.xml).
4. Delete the page classes created automatically at step 2 of this scenario.
5. Use the command line to run the generator (utils\generate\page). The page classes containing the blocks you specified will be created.

## Tips on creating tests

We recommend following this sequence of steps to create a test:

*     Create a group and corresponding folders, where a test will be placed.
*     Create a fixture and a handler for transferring a fixture.
*     Create necessary blocks and pages for a test.
*     Create the constraints and data sets based on these constraints.
*     Create the isolation script and specifying the isolation strategy. You can omit this step.
*     Write a test.
