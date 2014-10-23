---
layout: howtom2devgde_chapters
title: Magento automated tests
---

<h1 id="m2devgde-test-jsunit">{{ page.title }}</h1>
<p><a href="{{ site.githuburl }}m2devgde/code-test/test_js-unit.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>
<h2 id="m2devgde-js-unit-tests-intro">Overview</h2>

This article explains the structure of tests in Magento application and provides unified requirements for implement PHPUnit-based tests.

Automated tests are built into the Magento framework, allow developers to easily assess product reliability and performance and to express this assessment us definitive numeric values.

The purpose of automated tests in Magento is to help developers avoid errors when develop new or modify exist functionality. Requirements, posted in the guides below, have been adopted by the Magento core team. All third-party developers are encouraged to conform to these guidelines in order to provide Magento-related products with similar quality.

Magento also provides the Batch tests tool, which uses a script to execute a standardized collections of tests with an `sle` command.

There are different types of automated tests in Magento, some of which are built on top of the PHPUnit test framework. This includes integration, static and unit test (performance test in Magento is not-based on PHPUnit).

This guide extends the PHPUnit guide with recommendations and requirements specific to all types of automated tests in Magento built on PHPUnit.

<h2 id="tests-file-structure">Tests file structure</h2>

The root folder for all tests is `<magento_root>/dev/tests`. Test suites and related infrastructure for each type of test are located in folders that correspond to the test types:

* integration – Integration tests
* performance – Performance tests (not described in this section)
* js – Javascript unit tests
* static – Static tests
* unit – Unit tests.

The basic structure of each test folder is the following:

<blockquote>
<pre>
__dev/tests
 |__/&lt;test_type>
   |__/framework
   |__/testsuite
</pre>
</blockquote>

Where:

* tests is located in the directory to which it supplies tests; contains the `<test_type>` folders
* `<test_type>` is the directory that groups tests of the same type as well as the framework to support that type of tests; directory is named for the type of tests it contains
* `testsuite` is the directory that contains actual tests

In addition to these tests, each type of test might require additional files and folders; these are described in the documentation for those test types.

**Tests File Structure**

<blockquote>
<pre>
__dev/tests
 |__/js
 | |__/testsuite
 | |--jsTestDriver.php.dist
 | |--jsTestDriverOrder.php
 |
 |__/unit
 | |__/framework
 | |__/testsuite
 |
 |__/integration
   |__/framework
   | |__/tests
   |   |__/unit
   |     |__/framework
   |     |__/testsuite
   |
   |__/testsuite
</pre>
</blockquote>

<h2 id="utility-classes">Utility classes</h2>

Utility classes contain methods that institute logic that is repeated across multiple tests. By using utility methods, developers can avoid the difficulties created by implementing identical (or nearly identical) logic in multiple locations. Utility methods are grouped into classes based on their primary purpose.

Utility classes reside in the `Utility` sub-directory of the directory that contains the tests where the utility methods are utilized.

A utility that is useful for the entire test suite should be placed in the `Utility` sub-directory of the `testsuite` directory:

**Utility for UnitTest Suite**

<blockquote>
<pre>
__/dev
 |__/tests
   |__/unit
     |__/testsuite
       |__/Utility
         |--SampleUtility.php
</pre>
</blockquote>

A utility used for testing a specific module should be placed in the `Utility` sub-directory of the `<module>` directory:

**Utility for Module Integration Testing**

<blockquote>
<pre>
__/dev
 |__/tests
   |__/integration
     |__/testsuite
       |__/&lt;namespace>
         |__/&lt;module>
           |--SampleUtility.php
</pre>
</blockquote>

As utility classes are designed to be reused in different places, each class must follow the application autoload rules to be automatically included on demand.

It is preferable to use utility methods as instance methods rather than making them static; this allows utility methods to be more easily tested.

A layout utility for integration tests for the `Magento_Core` module is written as follows:

**dev/tests/integration/testsuite/Mage/Core/Utility/Layout.php**

<blockquote>
<pre>
class Magento_Core_Utility_Layout
{
    /**
     * Retrieve new layout model instance with layout updates from a fixture file
     *
     * @param string $layoutUpdatesFile
     * @return Magento_Core_Model_Layout|PHPUnit_Framework_MockObject_MockObject
     */
    public function getLayoutFromFixture($layoutUpdatesFile)
    {
        // ...
    }
}
</pre>
</blockquote>

Using this layout utility in an integration test looks like this:

**dev/tests/integration/testsuite/Mage/DesignEditor/Block/Toolbar/BreadcrumbsTest.php**

<blockquote>
<pre>
class Magento_DesignEditor_Block_Toolbar_BreadcrumbsTest extends PHPUnit_Framework_TestCase
{
    /**
     * @var Magento_DesignEditor_Block_Toolbar_Breadcrumbs
     */
    protected $_block;

    protected function setUp()
    {
        $layoutUtility = new Magento_Core_Utility_Layout($this);
        $pageTypesFixture = __DIR__ . '/../../../Core/Model/Layout/_files/_page_types.xml';
        $this->_block = new Magento_DesignEditor_Block_Toolbar_Breadcrumbs(
            array('template' => 'toolbar/breadcrumbs.phtml')
        );
        $this->_block->setLayout($layoutUtility->getLayoutFromFixture($pageTypesFixture));
    }

    // actual tests...
}
</pre>
</blockquote>

<h2 id="phpunit-tests">Run PHPUnit-based tests</h2>

After you install the PHPUnit framework v3.6 or later, use the `phpunit` command to run automated tests in Magento.

<h3 id="phpunit-install">Install PHPUnit</h3>

See [Installing PHPUnit](https://phpunit.de/manual/current/en/installation.html).

After installation, you can run the `phpunit` command from the command line.

<h3 id="run-tests">Run tests</h3>

Before running tests, change the current directory to the Magento tests root folder:

**Change Directory to Magento Tests Root**

`cd <magento_root_dir>/dev/tests/<test_type>`

To run all tests with the default configuration, run the phpunit command from the tests directory:

**Run All Tests by Default**

`phpunit`

When no configuration file is specified, configuration information will automatically be read from phpunit.xml or phpunit.xml.dist (in that order).

To force the use of a specific configuration file, use the configuration switch (`-c`), as described in the PHPUnit framework TextUI switches:

**Run All Tests with Default Configuration File Specified**

`phpunit -c phpunit.xml.dist`

<h3 id="test-cases">Run or more test cases</h3>

To run a particular test case, specify the path to its file relative to the current directory (tests framework root), for example:

**Run a Single Test Case by Class Name**

<pre>
$ cd dev/tests/integration/testsuite
$ phpunit -c ../phpunit.xml Magento_Catalog_Model_ProductTest
</pre>

**Run a Particular Test Case**

`phpunit testsuite/Magento/Catalog/Model/ProductTest.php
`
If a folder is specified, PHPUnit will find and run all test cases from that folder:

**Run All Test Cases in a Folder**

`phpunit testsuite/Magento/Core`

<h3 id="batch">Batch tests tool</h3>

The Batch Tests Tool is a script that automatically runs a collection of test suites. Usage:

**Default Usage of Batch Tool**

`php -f dev/tools/tests.php`

By default, the Batch Tests Tool runs all available tests, except those which take take long time by default: static "Legacy", integration "integrity" suite and functional tests, and so on.

To run all tests, use the `--type=all` argument:

**Executing All Tests Using Batch Tool**

`php -f dev/tools/tests.php -- --type=all`

More granular control is available by specifying other types which include (but are not limited to): `unit`, `integration`, `static`, `integrity`, and `legacy`.

But some of the types may execute not entire test suite for the same reason as described above – long execution time. Add `-all` suffix to run all tests of this type, for example, `--type=static-all`.

Whenever you specify a type that is not supported, the program terminates and lists all available types.

Following execution, the Batch Tests Tool produces a detailed report of the tests run and their results.

**Run Batch Tests Tool**

<blockquote>
<pre>
c:\www\git\magento2\dev\tools\tests.php


----C:\wamp\www\git\magento2\dev\tests\unit> phpunit  ------------------

PHPUnit 3.5.12 by Sebastian Bergmann.

...............................................................  63 / 218 ( 28%)
............................................................... 126 / 218 ( 57%)
............................................................... 189 / 218 ( 86%)
.............................

Time: 0 seconds, Memory: 9.75Mb

OK (218 tests, 373 assertions)


----C:\wamp\www\git\magento2\dev\tests\static\framework\tests\unit> phpunit  ----

PHPUnit 3.5.12 by Sebastian Bergmann.

..............

Time: 0 seconds, Memory: 5.00Mb

OK (14 tests, 25 assertions)


----C:\wamp\www\git\magento2\dev\tests\static> phpunit  ------------------------

PHPUnit 3.5.12 by Sebastian Bergmann.

...

Time: 59 seconds, Memory: 4.25Mb

OK (3 tests, 3 assertions)


----C:\wamp\www\git\magento2\dev\tests\integration\framework\tests\unit> phpunit --

PHPUnit 3.5.12 by Sebastian Bergmann.

................................................................. 65 / 74 ( 87%)
.........

Time: 2 seconds, Memory: 11.50Mb

OK (74 tests, 160 assertions)


----C:\wamp\www\git\magento2\dev\tests\integration> phpunit  --------------------

PHPUnit 3.5.12 by Sebastian Bergmann.

.............................SSSSSS..........................   61 / 1060 (  5%)
.....S..................I....................................  122 / 1060 ( 11%)
.............................................................  183 / 1060 ( 17%)
.............................................................  244 / 1060 ( 23%)
.............................................................  305 / 1060 ( 28%)
..........................................................I..  366 / 1060 ( 34%)
.......I.....................................................  427 / 1060 ( 40%)
.............................................................  488 / 1060 ( 46%)
.....................................................I.I.....  549 / 1060 ( 51%)
.............................................................  610 / 1060 ( 57%)
...................................S...S..I..S...............  671 / 1060 ( 63%)
..........................................................S..  732 / 1060 ( 69%)
........................S..............................S.....  793 / 1060 ( 74%)
.............................................................  854 / 1060 ( 80%)
.............................................................  915 / 1060 ( 86%)
.........................................S...................  976 / 1060 ( 92%)
...........................I.II.............................. 1037 / 1060 ( 97%)
.......................

Time: 02:37, Memory: 115.75Mb

OK, but incomplete or skipped tests!
Tests: 1060, Assertions: 2804, Incomplete: 9, Skipped: 14.

----------------------------------------------------------------------

PASSED (5)
</pre>
</blockquote>

<h3 id="phpstorm-tests">Run tests in PhpStorm</h3>

PHPUnit can be run and unit tests can be executed from PhpStorm. Perform the following steps to set up PHPUnit in PhpStorm:

1. Modify your PHP and PHPUnit settings:

    Open **Settings** by pressing `Ctrl+Alt+S` or clicking on the main toolbar.
    Under **Project Settings**, select PHP.
    Make sure you set PHP language level and Interpreter. For Magento 2, minimum PHP version is PHP 5.4.
    Under PHP, select **PHPUnit**.
    Select the **Use configuration file** check box and enter the absolute path to the `dev/tests/unit/phpunit.xml.dist` file.
    Select the **Use bootstrap file** check box and enter the absolute path to the `dev/tests/unit/framework/bootstrap.php` file.

2. Create a PHPUnit Run Configuration by using the **Run > Edit Configurations** menu. Specify the `dev/tests/unit/testsuite` as directory for Test Runner.

To run the unit tests by using PHPUnit, select your **Run Configuration** and click the **Run** green right arrow icon next to the **Run Configuration** dropdown menu located at the top of the IDE. The test results appear in a panel located at the bottom of the IDE.

An optional PHPUnit code coverage plugin is available from the Plugins repository. Perform the following steps to setup PHPUnit code coverage in your IDE.

**To install the Code Coverage Plugin:**

1. Open **Settings** and select **Plugins**.
2. Click **Browse Repositories**.
3. Right-click PHPUnit code coverage and select **Download and Install**.
4. Restart PhpStorm.

**Configure the Code Coverage Plugin**

1. Open Settings and select PHPUnit Coverage.
2. Specify the absolute path to your clover.xml file in the Clover xml location field.
3. Optionally select different colors for Covered and Uncovered code.
4. Select Line for Highlight.

To run the unit tests using PHPUnit with code coverage, select your **Run Configuration** and click the **Run with Coverage** green right arrow icon next to the Debug icon located at the top of the IDE. The test results appear in a panel located at the bottom of the IDE.

When you open PHP files whose code has been executed by PHPUnit, the Covered and Uncovered code appears using the colors specified in the Plugin's configuration.

<h2 id="customize-bootstrap">Customize test bootstrap settings</h2>

Magento automated tests are supplied with the `phpunit.xml.dist` file, which out of the box provides default bootstrap settings for running tests. Users can copy it as phpunit.xml and edit it as detailed in The XML Configuration File.

If the file is copied with any name other than phpunit.xml, the file must be specified using the `-c` switch:

**Run All Tests With Custom Bootstrap Configuration**

`phpunit -c phpunit-my-custom.xml`

<h3 id="customize-filters">Customize code coverage filters</h3>

The PHPUnit framework uses the <filter> xml section

**Run All Tests for Default Base Folder**

<blockquote>
<pre>
&lt;filter>
  &lt;whitelist>
    &lt;directory suffix=".php">../../../app/code/Magento&lt;/directory>
&lt;!-- ... -->
</pre>
</blockquote>

Modify or add to the existing <directory> nodes to customize the list of folders to be scanned. For example, to scan the Magento/Checkout folder:

**Run All Tests for Mage/Checkout Folder Only**

<blockquote>
<pre>
&lt;directory suffix=".php">../../../app/code/Magento/Checkout&lt;/directory>
</pre>
</blockquote>

<h3 id="coverage-report">Generate coverage report</h3>

Code coverage report generation can be pre-configured for Magento automated tests. By default, this report generation is disabled because of the potential impact on environment and performance requirements.

The report generation feature requires the xDebug PHP extension to be installed.

To enable code coverage report generation, uncomment the <logging> section in the XML configuration file. The report output locations are specified in this section as <log> nodes:

**Specify Code Coverage Report Location**

<blockquote>
<pre>
&lt;logging>
  &lt;log type="coverage-html" target="../../build/report/integration/coverage" .../>
&lt;logging>
</pre>
</blockquote>

Generating the code coverage report is a memory-intensive operation. It can cause `PHP Fatal error: Allowed memory size of ... bytes exhausted...`.

There are two ways to avoid fatal errors caused by memory size being exhausted:

* Increase the "memory_limit" php.ini directive (up to a maximum of 1024M).
* Limit the scope of the code coverage filters in the filter/whitelist/directory: `<directory suffix=".php">../../../app/code/Magento/Core/Controller</directory>`

<h2 id="implement-tests">Test implementation requirements</h2>

These are internal requirements, published to provide external developers with a general coding style and testing quality.

Tests in Magento are intended to be read and updated. There are certain formal requirements for writing PHPUnit-based tests that help make all tests easier to maintain.

<h3 id="name-test-case-classes">1. Name test case classes</h3>

Assign a name to each test case class that corresponds to the original class by adding "Test" to the end. This helps facilitate navigation and explicitly designates that this class is a test case.

**Name a Test Case**

`Magento_Core_Model_Email_Template // original class
Magento_Core_Model_Email_TemplateTest // test case`

<h3 id="setup-teardown">2. Place setUp() and tearDown() methods</h3>

If the test case includes setUpBeforeClass(), tearDownAfterClass(), setUp(), tearDown(), or any combination of these methods, place them before other methods in the class. This helps identify preconditions and post-conditions for all tests in this test case.

**Place Test Setup Methods First**

<blockquote>
<pre>
class ...Test extends PHPUnit_Framework_TestCase
{
    public static function setUpBeforeClass() {/*...*/}

    public static function tearDownAfterClass() {/*...*/}

    protected function setUp() {/*...*/}

    protected function tearDown() {/*...*/}

    public function testGetCurrentUrl() {/*...*/}

// ...
</pre>
</blockquote>

<h3 id="data-providers">3. Name data providers</h3>

Data provider method names must end with the phrase DataProvider. Name data provider methods using the pattern <name>DataProvider, where <name> can be:

* the original method name
* a unique method name (if one data provider is used in different test methods, for example)

**Name Data Providers**

<blockquote>
<pre>
// original method name
public function getCurrentUrl()

// test method name
public function testGetCurrentUrl()

// data provider method name
public function getCurrentUrlDataProvider()
</pre>
</blockquote>

<h3 id="skipped-incomplete-tests">4. Note skipped or incomplete tests</h3>

Always note the reason a test is incomplete or skipped in the argument of the respective method.

Mark a test incomplete in case, when it cannot be performed because of some bug or not yet implemented code.

**Note Reason for an Incomplete Test**

<blockquote>
<pre>
$this->markTestIncomplete('Poor isolation and exit in the code.');
$this->markTestIncomplete('Cannot be tested because the rewrite() method halts execution of the program.');
$this->markTestIncomplete('Impossible to test event dispatching');
$this->markTestIncomplete('Bug MAGETWO-294');
</pre>
</blockquote>

Mark test skipped in case, when it can't be performed at all (for example, test related to MSSQL can't be performed, if tests are run on MySQL).

<blockquote>
<pre>
$this->markTestSkipped('Cant\'t test dispatch process without sending headers');
$this->markTestSkipped('This test is for MySQL platform only.');
</pre>
</blockquote>



<h3 id="fake-abstract-classes">5. Call fake abstract classes in Magento</h3>

PHPUnit provides a built-in mechanism for testing PHP abstract classes:

    The getMockForAbstractClass() method returns a mock object for an abstract class. All abstract methods of the given abstract class are mocked. This allows for testing the concrete methods of an abstract class.

    http://www.phpunit.de/manual/current/en/test-doubles.html

In Magento there are classes that are declared as abstract, but in fact do not contain any abstract methods. A test for such a class would look like the following example:

**Fake Abstract Class Test**

<blockquote>
<pre>
class Magento_Core_Model_Session_AbstractTest extends PHPUnit_Framework_TestCase
{
    /**
     * @var Magento_Core_Model_Session_Abstract
     */
    protected $_model;

    public function setUp()
    {
        $this->_model = $this->getMockForAbstractClass('Magento_Core_Model_Session_Abstract');
    }

    // ...
}
</pre>
</blockquote>

<h2 id="implementation-recommendations">Test implementation recommendations</h2>

<h3 id="test-case-class-skeletons">Create test case class skeletons</h3>

To generate a test case class that conforms to all mentioned requirements, use the standard phpunit command option "skeleton-test". Specify the class name for which the test case will be generated. The include path, specified in the configuration file (phpunit.xml or similar) will be determined automatically:

**Generate a Test Skeleton**

`phpunit --skeleton-test Magento_Core_Model_Config_Base`

The command returns the location of a new file containing the test case class.

<h3 id="test-methods-org">Organize test methods</h3>

Arrange test methods in the same order as the public methods in the original class. This allows the test case and the original class to be read simultaneously when reviewing test implementation.
Original Methods
public function getTranslatorScript() {/*...*/}

public function validateRequestPath($path) {/*...*/}
Test Case Methods
public function testGetTranslatorScript() {/*...*/}

public function testValidateRequestPath() {/*...*/}

<h3 id="test-methods-names">Name test methods</h3>

A typical name for a test method would be the name of the original method with the prefix "test" added. The "test" prefix is also required by the PHPUnit framework to distinguish tests from other methods.

If multiple tests are required to fully test a particular method, name each related test as described above, then add a word to the end that clearly describes the the distinguishing characteristic of the specific test case:

**Name Additional Specific Tests**

<blockquote>
<pre>
public function testProcessRequest()
    {
        // test an "optimistic" flow of processRequest() method
    }

    public function testProcessRequestFalse()
    {
        // a specific test, that asserts processRequest() method, that returns false
    }

    /**
     * @expectedException Exception
     */
    public function testProcessRequestException()
    {
        // another specific test, that intentionally causes processRequest() throwing an exception
    }
</pre>
</blockquote>

Sometimes one method can be tested in conjunction with another. In this case, the test would have a name that identifies both methods being tested. Typically such methods are pairs of a setter and getter:

**Name Combined Test for Setter and Getter**

<blockquote>
<pre>
public function testGetSetArea()
    {
        $this->assertEmpty($this->_model->getArea());
        $this->_model->setArea('frontend');
        $this->assertEquals('frontend', $this->_model->getArea());
    }
</pre>
</blockquote>

If the original method name is not obvious from the test method name, mention it in docblock comment (as described in @covers annotation). Reasons a method being tested might be ambiguous are:

    The test method combines testing of several original methods:
    Identify Original Methods for Combined Tests
    /**
         * @covers Magento_Core_Block_TemplateTest::assign
         * @covers Magento_Core_Block_TemplateTest::setScriptPath
         * @covers Magento_Core_Block_TemplateTest::fetchView
         */
        public function testAssign()
        {
            $this->_block->assign(array('varOne' => 'value1', 'varTwo' => 'value2'))
                ->setScriptPath(__DIR__ . DIRECTORY_SEPARATOR . '_files')
            ;
            $this->assertEquals('value1, value2', $this->_block->fetchView('template_test_assign.phtml'));
        }

    The test method tests an abstract class's method(s) through its descendant:
    Identify Test Method for Method of Abstract Class
    class Magento_Core_Block_TemplateTest extends PHPUnit_Framework_TestCase
    {
    // ...
        /**
         * @covers Magento_Core_Block_Abstract::getModuleName
         */
        public function testGetModuleName()
        {
            $this->assertEquals('Magento_Core', $this->_block->getModuleName());
            $this->assertEquals('Magento_Core', $this->_block->getData('module_name'));
        }
    // ...
    }

<h3 id="cover-methods">Cover all methods</h3>

Cover, or at least mention, in the test case all public methods of the original class. This clearly identifies any incomplete methods of the original class.
Original Methods
public function __construct($vendorName) {/*...*/}

public function getVendorInstance() {/*...*/}

public function preInstall() {/*...*/}

public function cleanup() {/*...*/}

public function createBackup($name) {/*...*/}

public function restoreBackup($name) {/*...*/}
Test Case Methods
/**
 * @covers <classname>::__construct
 */
public function testGetVendorInstance() {/*...*/}
// there is no dedicated test for __construct(), but it is tested in the testGetVendorInstance(). Therefore mention it using the @covers notation

public function testPreInstall() {/*...*/}

public function testCleanup()
{
    $this->markTestIncomplete('Not implemented yet.');
}

public function testCreateBackup($name) {/*...*/}

public function testRestoreBackup($name) {/*...*/}
Icon

Mentioning a method in @covers notation implies that it is fully covered by the test. Use this carefully to avoid spoiling code coverage statistics.


<h3 id="declare-data-providers">Declare data providers</h3>
Declare each data provider method immediately after the respective test method (as seen in data providers in PHPUnit documentation) . This provides context for the data provider when reading the class from top to bottom.

<h3 id="docblock">Compact DocBlock comments</h3>
Integration tests are intended to be read and modified frequently, and their API is not intended to be published in any documentation. Therefore, keep docblock comments minimal and include only required information, such as:

    any docblock required by the PHPUnit framework
    type hinting for class attributes
    which methods of which class are covered by this test (if not evident from the method name)

**Excessive DocBlock**

<blockquote>
<pre>
/**
 * Test case for Magento_Core_Block_Template
 * Also tests methods of Magento_Core_Block_Abstract
 */
class Magento_Core_Block_TemplateTest extends PHPUnit_Framework_TestCase
{
    /**
     * The block instance being tested
     *
     * @var Magento_Core_Block_Template
     */
    protected $_block;

    /**
     * Instantiate a core/template block before each test
     *
     * @return void
     */
    protected function setUp()
    {
        $this->_block = new Magento_Core_Block_Template;
    }

    /**
     * Test __construct()
     *
     * @return void
     * @throws PHPUnit_Framework_ExpectationFailedException if the value of the template is not passed from the constructor
     */
    public function testConstruct()
    {
        $block = new Magento_Core_Block_Template(array('template' => 'value'));
        $this->assertEquals('value', $block->getTemplate());
    }
// ...
}
</pre>
</blockquote>

**Compact DocBlock**

<blockquote>
<pre>
/**
 * Magento_Core_Block_Template
 * Magento_Core_Block_Abstract
 */
class Magento_Core_Block_TemplateTest extends PHPUnit_Framework_TestCase
{
    /**
     * @var Magento_Core_Block_Template
     */
    protected $_block;

    protected function setUp()
    {
        $this->_block = new Magento_Core_Block_Template;
    }

    public function testConstruct()
    {
        $block = new Magento_Core_Block_Template(array('template' => 'value'));
        $this->assertEquals('value', $block->getTemplate());
    }
// ...
}
</pre>
</blockquote>

Don't omit DocBlock for auxiliary methods (methods not implied by the PHPUnit framework):

**Document "Unusual" Things**

<blockquote>
<pre>
/**
     * Create <N> sample blocks
     *
     * @param int $qty
     * @param bool $withLayout
     * @param string $className
     * @return array
     */
    protected function _createSampleBlocks($qty, $withLayout = true, $className = 'Magento_Core_Block_Template')
    {
        $blocks = array(); $names = array();
        $layout = false;
        if ($withLayout) {
            $layout = new Magento_Core_Model_Layout;
            $this->_block->setLayout($layout);
        }
        for ($i = 0; $i < $qty; $i++) {
            $block = new $className;
            $name = uniqid('block.');
            $block->setNameInLayout($name);
            $blocks[] = $block;
            $names[] = $name;
            if ($layout) {
                $block->setLayout($layout);
                $layout->setBlock($name, $block);
            }
        }
        return array($blocks, $names);
    }
</pre>
</blockquote>

<h3 id="brief-assertion">Brief assertion comments</h3>

The PHPUnit framework provides numerous public methods for various kinds of assertions, which speak for themselves.

If there is a simple and a well-defined assertion, it requires no additional comment.

**This assertion doesn't need a comment:**

<pre>
    Example: Self-Sufficient Assertion
    $this->assertEquals($category->getId(), $lastVisitedCategoryId);
</pre>

**This comment is not useful, and just obstructs reading:**

<pre>
    Example: Excessive Comment for Assertion
    $this->assertNull($this->_registry->registry('current_category'), 'Current category in the registry is not null.');
</pre>

**Here it is not obvious which types of values are in the $group['block1'] and $blocks[0] variables; a comment may clarify this:**

<pre>
    Example: A Complicated Assertion with a Useful Comment
    $this->assertSame($group['block1'], $blocks[0], 'The same instance is expected.');
</pre>

<h3 id="mock-constructor">Unit tests: Use Object Manager helper to mock constructor parameters</h3>

In Magento 2, many block and model classes declare excessive dependencies in constructors (Magento 2 uses constructor dependency injection). In order to cover such classes with unit tests, a developer needs to create mocks for all constructor parameters manually, which might be time-consuming.

To facilitate this routine, you can use \Magento\TestFramework\Helper\ObjectManager, which provides methods that automatically create mocks for all required dependencies (you can still provide your custom mocks if needed), and then instantiate testing object by passing these mocks to a class constructor.

For information about ObjectManager helper class usage, please refer to the Object Manager Helper article.

<h2 id="compatibility-tips">PHPUnit compatibility tips (v3.6)</h2>

Some of the changes in PHPUnit 3.6 cause tests which ran effectively on earlier versions to fail unexpectedly. To ensure the compatibility of tests with PHPUnit 3.6, consider the following recommendations.

<h3 id="test-exceptions">Test exceptions</h3>

In PHPUnit 3.6 exception testing has been changed:

    Note
    You should be as specific as possible when testing exceptions. Testing for classes that are too generic might lead to undesirable side-effects. Accordingly, testing for the Exception class with @expectedException or setExpectedException() is no longer permitted.

    http://www.phpunit.de/manual/3.6/en/writing-tests-for-phpunit.html

The following examples demonstrate how tests (and the code being tested) must be modified to be compatible:

PHPUnit 3.5 and lower, PHPUnit 3.7

PHPUnit 3.6

<blockquote>
<pre>
class Magento_Some
{
    public function doSomeAction($argument)
    {
        if (!is_int($argument)) {
            throw new Exception('Argument must be integer.');
        }
        // do some action
    }
}

class Magento_SomeTest extends PHPUnit_Framework_TestCase
{
    /**
     * @expectedException Exception
     */
    public function testDoSomeAction()
    {
        $this->object->doSomeAction('invalid_argument');
    }

    public function testDoSomeActionAgain()
    {
        $this->setExpectedException('Exception');
        $this->object->doSomeAction('invalid_argument');
    }
}

class Magento_Some
{
    public function doSomeAction($argument)
    {
        if (!is_int($argument)) {
            throw new InvalidArgumentException('Argument must be integer.');
        }
        // do some action
    }
}

class Magento_SomeTest extends PHPUnit_Framework_TestCase
{
    /**
     * @expectedException InvalidArgumentException
     */
    public function testDoSomeAction()
    {
        $this->object->doSomeAction('invalid_argument');
    }

    public function testDoSomeActionAgain()
    {
        $this->setExpectedException('InvalidArgumentException');
        $this->object->doSomeAction('invalid_argument');
    }
}
</pre>
</blockquote>

<h3 id="method-callback">Mocked method callback</h3>

PHPUnit provides the ability to mock a method with a callback. However, as soon as a mocked method accepts arguments by reference PHPUnit 3.6 (3.6.10 in particular) produces the following error:

Parameter 1 to {closure}() expected to be a reference, value given

The only way to avoid this error is to re-factor the code so it doesn't pass arguments by reference. For example:

<blockquote>
<pre>
class Magento_ValueStorage
{
    protected function _isAllowed(&$result = null)
    {
        $result = false;
    }

    public function getValue()
    {
        $this->_isAllowed($result);
        return ($result ? 'some_value' : null);
    }
}

class Magento_ValueStorageTest
{
    public function testGetValue()
    {
        $isAllowedCallback = function (&$result = null) {
            $result = true;
        }
        $this->object
            ->expects($this->any())
            ->method('_isAllowed')
            ->will($this->returnCallback($isAllowedCallback))
        ;
        $this->assertNotEmpty($this->object->getValue());
    }
}

class Magento_ValueStorage
{
    protected function _isAllowed()
    {
        return false;
    }

    public function getValue()
    {
        $result = $this->_isAllowed();
        return ($result ? 'some_value' : null);
    }
}

class Magento_ValueStorageTest
{
    public function testGetValue()
    {
        $this->object
            ->expects($this->any())
            ->method('_isAllowed')
            ->will($this->returnValue(true))
        ;
        $this->assertNotEmpty($this->object->getValue());
    }
}
</pre>
</blockquote>

