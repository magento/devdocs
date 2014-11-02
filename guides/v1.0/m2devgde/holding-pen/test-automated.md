---
layout: howtom2devgde_chapters
title: Magento automated tests
---

<h1 id="m2devgde-test-jsunit">{{ page.title }}</h1>
<p><a href="{{ site.githuburl }}extension-dev-guide/test/test_js-unit.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>
<h2 id="m2devgde-js-unit-tests-intro">Overview</h2>

Automated tests are built into the Magento framework, enable developers to easily assess product reliability and performance, help developers avoid errors when they develop new or modify exist functionality, and provide measurable results. The Magento core team have adopted the requirements described here.

All third-party developers are encouraged to conform to these standard to provide Magento-related products with similar quality.

Magento also provides the [batch test tool](#batch-tests-tool), which uses a script that contains the `sle` command to run a standardized collection of tests.

Magento automated tests include integration, static, and unit tests, which use the PHPUnit test framework.

The performance test is not-based on PHPUnit.

This guide extends the [PHPUnit guide](https://phpunit.de/documentation.html) with specific recommendations and requirements for Magento PHPUnit-based automated tests.

<h2 id="tests-file-structure">Tests file structure</h2>

The root folder for Magento automated tests is `<magento_root>/dev/tests`.

Test suites and related infrastructure for each type of test are located in folders that correspond to the test types:

* `integration` – Integration tests.
* `performance` – Performance tests (not described in this section).
* `js` – JavaScript unit tests.
* `static` – Static tests.
* `unit` – Unit tests.

The basic structure of each test folder is:

<blockquote>
<pre>
__dev/tests
 |__/&lt;test_type>
   |__/framework
   |__/testsuite
</pre>
</blockquote>

Where:

* The **tests** directory is a sub-directory in the directory to which it supplies tests.
* `<test_type>` is the directory that groups tests of the same type.
* **framework** includes the framework to support that type of tests.
* **testsuite** is the directory that contains actual tests.

Each test type might require additional files and folders; these are described in the documentation for those test types.

**Tests file structure**

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

Utility classes contain methods that institute logic that is repeated across multiple tests.

By using utility methods, developers can avoid implementing similar logic in multiple locations.

Utility methods are grouped into classes based on their primary purpose.

Utility classes reside in the `Utility` sub-directory of the directory with the utility methods tests.

Place a utility for the entire test suite in the `Utility` sub-directory of the `testsuite` directory:

**Utility for unit test suite**

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

Place a utility that is used for testing a specific module in the `Utility` sub-directory of the `<module>` directory:

**Utility for module integration testing**

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

Because utility classes are designed to be reused, each class must follow the application autoload rules to be automatically included on demand.

Use utility methods as instance methods rather than making them static; this enables utility methods to be more easily tested.

A layout utility for integration tests for the `Magento_Core` module is:

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

The following example shows the layout utility in an integration test:

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
        $pageTypesFixture = __DIR__ . '/../../../Core/Model/layouts/_files/_page_types.xml';
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

After you install the [PHPUnit framework](https://phpunit.de/manual/current/en/installation.html) v3.6 or later, use the `phpunit` command to run Magento automated tests.

<h3 id="run-tests">Run all tests</h3>

1. Change into the Magento **tests** root folder: `cd <magento_root_dir>/dev/tests/<test_type>`
2. To run all tests with the default configuration, run the `phpunit` command from the **tests** directory: `phpunit`
3. When no configuration file is specified, configuration information is automatically read from `phpunit.xml` or `phpunit.xml.dist`, in that order.
   To use a specific configuration file, use the configuration switch (`-c`): `phpunit -c phpunit.xml.dist`

<h3 id="test-cases">Run or more tests</h3>

To run a specific test case, specify the path to its file relative to the current **tests** framework root directory. For example:

<blockquote>
<pre>
$ cd dev/tests/integration/testsuite
$ phpunit -c ../phpunit.xml Magento_Catalog_Model_ProductTest
</pre>
</blockquote>

To run a specific test case:

<blockquote>
<pre>
phpunit testsuite/Magento/Catalog/Model/ProductTest.php
</pre>
</blockquote>

If you specify a folder, PHPUnit runs all test cases from that folder:

<blockquote>
<pre>
phpunit testsuite/Magento/Core
</pre>
</blockquote>

<h3 id="batch-tests-tool">Batch test tool</h3>

The batch test tool is a script that automatically runs a collection of test suites.

**Default usage of batch tool**

<blockquote>
<pre>
php -f dev/tools/tests.php
</pre>
</blockquote>

By default, the batch test tool runs all available tests, except those that take take long time by default, such as static **Legacy**, integration **integrity** suite and functional tests, and so on.

To run all tests, use the `--type=all` argument:

<blockquote>
<pre>
php -f dev/tools/tests.php -- --type=all
</pre>
</blockquote>

You can specify other test types, which include: `unit`, `integration`, `static`, `integrity`, and `legacy`.

Due to long execution times, some test types might not run the entire test suite.

Add `-all` suffix to run all tests of this type. For example, `--type=static-all`.

Whenever you specify a non-supported test type, the tool terminates and lists available test types.

The batch test tool produces a detailed report of the tests run and their results:

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

To run PHPUnit and unit tests from PhpStorm:

1. Modify your PHP and PHPUnit settings:

	* Open **Settings**.
	* In **Project Settings**, select PHP.
	* Set the PHP language level and Interpreter. For Magento 2, the minimum PHP version is PHP 5.4.
	* In **PHP**, select **PHPUnit**.
	* Select the **Use configuration file** check box and enter the absolute path to the `dev/tests/unit/phpunit.xml.dist` file.
	* Select the **Use bootstrap file** check box and enter the absolute path to the `dev/tests/unit/framework/bootstrap.php` file.

2. Use the **Run > Edit Configurations** menu to create a PHPUnit Run Configuration. Specify the `dev/tests/unit/testsuite` as directory for Test Runner.
3. To run the unit tests by using PHPUnit, select your **Run Configuration** and click the **Run** green right arrow icon next to the **Run Configuration** dropdown menu located at the top of the IDE.
A panel at the bottom of the IDE shows the test results.

<h3 id="code-coverage-plugin">Code coverage plugin</h3>

An optional PHPUnit code coverage plugin is available from the Plugins repository.

To set up PHPUnit code coverage in your IDE:

1. Install the code coverage plugin:

	* Open **Settings** and select **Plugins**.
	* Click **Browse Repositories**.
	* Right-click PHPUnit code coverage and select **Download and Install**.
	* Restart PhpStorm.

2. Configure the code coverage plugin:

	* Open **Settings** and select **PHPUnit Coverage**.
	* Specify the absolute path to your `clover.xml` file in the Clover xml location field.
	* Optionally select different colors for Covered and Uncovered code.
	* Select **Line for Highlight**.

3. To run the unit tests using PHPUnit with code coverage, select your **Run Configuration** and click the **Run with Coverage** green right arrow icon next to the Debug icon located at the top of the IDE.

   A panel at the bottom of the IDE shows the test results.

When you open PHP files for which code has been run by PHPUnit, the covered and uncovered code appears in the colors that you configured for the plugin.

<h2 id="customize-bootstrap">Customize test bootstrap settings</h2>

Magento automated tests are supplied with the `phpunit.xml.dist` file, which provides default bootstrap settings for running tests. Users can copy it as `phpunit.xml` and edit it as detailed in [Configuration files]({{ site.githuburl }}config-guide/config/config-files.html").

If you name the file something other than `phpunit.xml`, you must specify the file with the `-c` switch:

<blockquote>
<pre>
phpunit -c phpunit-my-custom.xml
</pre>
</blockquote>

<h3 id="customize-filters">Customize code coverage filters</h3>

The PHPUnit framework uses the <filter> xml section:

<blockquote>
<pre>
&lt;filter>
  &lt;whitelist>
    &lt;directory suffix=".php">../../../app/code/Magento&lt;/directory>
&lt;!-- ... -->
</pre>
</blockquote>

To customize the list of folders to be scanned, modify or add to the existing <directory> nodes.

For example, to scan the **Magento/Checkout** folder:

<blockquote>
<pre>
&lt;directory suffix=".php">../../../app/code/Magento/Checkout&lt;/directory>
</pre>
</blockquote>

<h3 id="coverage-report">Generate coverage report</h3>

You can configure code coverage report generation for Magento automated tests.

By default, this report generation is disabled because of the potential impact on environment and performance requirements.

The report generation feature requires that you install the xDebug PHP extension.

To enable code coverage report generation, uncomment the `<logging>` section in the XML configuration file.

The report output locations are specified in this section as <log> nodes:

<blockquote>
<pre>
&lt;logging>
  &lt;log type="coverage-html" target="../../build/report/integration/coverage" .../>
&lt;logging>
</pre>
</blockquote>

Generating the code coverage report is a memory-intensive operation.

It can cause `PHP Fatal error: Allowed memory size of ... bytes exhausted...` errors.

To avoid fatal errors caused by memory issues, complete one of the following steps:

* Increase the **memory_limit** php.ini directive up to a maximum of 1024M.
* Limit the scope of the code coverage filters in the **filter/whitelist/directory**: `<directory suffix=".php">../../../app/code/Magento/Core/Controller</directory>`

<h2 id="implement-tests">Test implementation requirements</h2>

These internal requirements provide external developers with a general coding style and testing quality.

Tests in Magento are intended to be read and updated. There are certain formal requirements for writing PHPUnit-based tests that make tests easier to maintain.

1. **Name test case classes**. Assign a name to each test case class that corresponds to the original class by adding "Test" to the end.
   This facilitates navigation and explicitly designates that this class is a test case:
   <blockquote><pre>Magento_Core_Model_Email_Template // original class
   Magento_Core_Model_Email_TemplateTest // test case</pre></blockquote>
2. **Place setUp() and tearDown() methods**. If the test case includes setUpBeforeClass(), tearDownAfterClass(), setUp(), tearDown(), or any combination of these methods, place them before other methods in the class. This helps identify preconditions and post-conditions for all tests in this test case.
   <blockquote>
   <pre>class ...Test extends PHPUnit_Framework_TestCase
{
    public static function setUpBeforeClass() {/*...*/}

    public static function tearDownAfterClass() {/*...*/}

    protected function setUp() {/*...*/}

    protected function tearDown() {/*...*/}

    public function testGetCurrentUrl() {/*...*/}

    // ...</pre></blockquote>
3. **Name data providers**. Data provider method names must end with the phrase DataProvider. Name data provider methods using the pattern <name>DataProvider, where <name> can be:
   * the original method name
   * a unique method name (if one data provider is used in different test methods, for example)
   <blockquote><pre>// original method name
   public function getCurrentUrl()

   // test method name
   public function testGetCurrentUrl()

   // data provider method name
   public function getCurrentUrlDataProvider()</pre></blockquote>
4. **Note skipped or incomplete tests**. Always note the reason a test is incomplete or skipped in the argument of the respective method. Mark a test incomplete in case, when it cannot be performed because of some bug or not yet implemented code.
   <blockquote><pre>$this->markTestIncomplete('Poor isolation and exit in the code.');
   $this->markTestIncomplete('Cannot be tested because the rewrite() method halts execution of the program.');
   $this->markTestIncomplete('Impossible to test event dispatching');
   $this->markTestIncomplete('Bug MAGETWO-294');</pre></blockquote>
   Mark test skipped in case, when it can't be performed at all (for example, test related to MSSQL can't be performed, if tests are run on MySQL).
   <blockquote><pre>$this->markTestSkipped('Cant\'t test dispatch process without sending headers');
   $this->markTestSkipped('This test is for MySQL platform only.');</pre></blockquote>
5. **Call fake abstract classes in Magento**. PHPUnit provides a built-in mechanism for testing PHP abstract classes:
   * The getMockForAbstractClass() method returns a mock object for an abstract class. All abstract methods of the given abstract class are mocked. This allows for testing the concrete methods of an <a href="http://php.net/manual/en/language.oop5.abstract.php">abstract class</a>: <a href="http://www.phpunit.de/manual/current/en/test-doubles.html">http://www.phpunit.de/manual/current/en/test-doubles.html</a>.
   * In Magento there are classes that are declared as abstract, but in fact do not contain any abstract methods. A test for such a class would look like the following example:
     <blockquote><pre>class Magento_Core_Model_Session_AbstractTest extends PHPUnit_Framework_TestCase
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
    }</pre></blockquote>

<h2 id="implementation-recommendations">Test implementation recommendations</h2>

<h3 id="test-case-class-skeletons">Create test case class skeletons</h3>

To generate a test case class that conforms to all mentioned requirements, use the standard phpunit command **skeleton-test** option.

Specify the class name for which the test case is to be generated.

The include path, specified in the phpunit.xml or similar configuration file is automatically determined:

<blockquote>
<pre>
phpunit --skeleton-test Magento_Core_Model_Config_Base
</pre>
</blockquote>

The command returns the location of a new file containing the test case class.

<h3 id="test-methods-org">Organize test methods</h3>

Arrange test methods in the same order as the public methods in the original class.

This allows the test case and the original class to be read simultaneously when reviewing test implementation.

**Original Methods**

<blockquote>
<pre>
public function getTranslatorScript() {/*...*/}

public function validateRequestPath($path) {/*...*/}
</pre>
</blockquote>

**Test Case Methods**

<blockquote>
<pre>
public function testGetTranslatorScript() {/*...*/}

public function testValidateRequestPath() {/*...*/}
</pre>
</blockquote>

<h3 id="test-methods-names">Name test methods</h3>

A typical name for a test method would be the name of the original method with the "test" prefix added. The "test" prefix is also required by the PHPUnit framework to distinguish tests from other methods.

If multiple tests are required to fully test a particular method, name each related test as described above, then add a word to the end that clearly describes the the distinguishing characteristic of the specific test case:

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

If the original method name is not obvious from the test method name, mention it in DocBlock comment (as described in @covers annotation). Reasons a method being tested might be ambiguous are:

The test method combines testing of several original methods:

**Identify Original Methods for Combined Tests**

<blockquote>
<pre>
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
        </pre>
        </blockquote>

The test method tests an abstract class's method(s) through its descendant:

**Identify Test Method for Method of Abstract Class**

<blockquote>
<pre>
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
    </pre>
    </blockquote>

<h3 id="cover-methods">Cover all methods</h3>

Cover, or at least mention, in the test case all public methods of the original class.
This clearly identifies any incomplete methods of the original class.

**Original Methods**

<blockquote>
<pre>
public function __construct($vendorName) {/*...*/}

public function getVendorInstance() {/*...*/}

public function preInstall() {/*...*/}

public function cleanup() {/*...*/}

public function createBackup($name) {/*...*/}

public function restoreBackup($name) {/*...*/}
</pre>
</blockquote>

**Test Case Methods**

<blockquote>
<pre>
/**
 * @covers &lt;classname>::__construct
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
</pre>
</blockquote>

Mentioning a method in @covers notation implies that it is fully covered by the test.

Use this carefully to avoid spoiling code coverage statistics.

<h3 id="declare-data-providers">Declare data providers</h3>

Declare each data provider method immediately after the respective test method (as seen in data providers in PHPUnit documentation).

This provides context for the data provider when reading the class from top to bottom.

<h3 id="DocBlock">Compact DocBlock comments</h3>

Integration tests are intended to be read and modified frequently, and their API is not intended to be published in any documentation.

Therefore, keep DocBlock comments minimal and include only required information, such as:

* any DocBlock required by the PHPUnit framework
* type hinting for class attributes
* which methods of which class are covered by this test (if not evident from the method name)

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
     * Create &lt;N> sample blocks
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

Simple and well-defined assertions do not require additional comments.

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

In Magento 2, many block and model classes declare excessive dependencies in constructors (Magento 2 uses constructor dependency injection).

To cover such classes with unit tests, a developer must create mocks for all constructor parameters manually, which might be time-consuming.

To facilitate this routine, you can use **\Magento\TestFramework\Helper\ObjectManager**, which provides methods that automatically create mocks for all required dependencies, and instantiate testing object by passing these mocks to a class constructor.

You can still provide your custom mocks if needed.

<p>For information about ObjectManager helper class usage, see <a href="{{ site.gdeurl }}extension-dev-guide/test/test_object-mgr.html">Object Manager helper</a>.</p>

<h2 id="compatibility-tips">PHPUnit compatibility tips (v3.6)</h2>

Some of the changes in PHPUnit 3.6 cause tests that ran effectively on earlier versions to fail unexpectedly. To ensure the compatibility of tests with PHPUnit 3.6, consider the following recommendations.

<h3 id="test-exceptions">Test exceptions</h3>

In PHPUnit 3.6 exception testing has been changed.

You should be as specific as possible when testing exceptions. Testing for classes that are too generic might lead to undesirable side-effects. Accordingly, testing for the Exception class with @expectedException or setExpectedException() is no longer permitted.

The following examples demonstrate how tests (and the code being tested) must be modified to be compatible:

**PHPUnit 3.5 and lower, PHPUnit 3.7**

**PHPUnit 3.6**

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

<blockquote>
<pre>
Parameter 1 to {closure}() expected to be a reference, value given
</pre>
</blockquote>

To avoid this error, re-factor the code so it doesn't pass arguments by reference. For example:

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

