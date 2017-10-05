---
layout: default
group: integration-testing
title: Using DocBlock Annotations
github_link: test/integration/annotations.md
---

DocBlock annotations can help to declare context in your code. In addition to built-in [PHPUnit annotations] you can use custom annotations described in this topic.

### Quick overview

The following annotations are available in integration tests:

Name|Annotation|Format|Description
---|---|---|---
Application Isolation|[`@magentoAppIsolation`]|`@magentoAppIsolation enabled|disabled`|Enables or disables application isolation when you run tests. When enabled, an application state after a test run will be the same as before the test run. For example, you should enable it, when you want to create sessions in a test, but you don't want them to affect other tests.
Configuration Fixture|[`@magentoConfigFixture`]|`@magentoConfigFixture [<store_code>_store] <config_path> <config_value>`|Sets up configuration settings for a particular test. The list of settings is stored in the `core_config_data` database table. After the test execution, the settings are reverted to their original state.
Database Isolation|[`@magentoDbIsolation`]|`@magentoDbIsolation enabled|disabled`|Enables or disables database isolation. Enabled by default. All data, required for a test, live during transaction only. Any test results won't be written in a database.
Data Fixture|[`@magentoDataFixture`]|`@magentoDataFixture <script_filename>|<method_name>`|Файлы в котороых мы создаем тестовые сущности на которых будет ранится тест. Фикстуры хранятся помодульно в интеграционных тестах. Makes available to prepare database data as a precondition for a specific test or test case and then revert it automatically.
Application Area|[`@magentoAppArea`]|`@magentoAppArea adminhtml|frontend|global`|Configures test environment in the context of specified application area.
Enable/Disable Cache|[`@magentoCache`]|`@magentoCache <type>|all enabled|disabled`|Если не нужен кэш, это может влиять на другие тесты. Some integration tests introduce fixtures that may leave residue in cache. The cache may carry over into other tests, thus corrupting them. Using this directive, it is possible to disable certain cache segment (or all of them), thus preventing isolation problems.
Register Components|[`@magentoComponentsDir`]|`@magentoComponentsDir <dir_path>`|Registers fixture components from specified directory (recursively). Unregisters the components after the test is finished.

### Applying annotations

The Magento-specific annotations for integration tests are applied in the following order:

1. `@magentoAppIsolation`
1. `@magentoDbIsolation`
1. `@magentoDataFixture`
1. `@magentoComponentsDir`
1. `@magentoAppArea`
1. `@magentoCache`
1. `@magentoConfigFixture`

This order is necessary to meet the requirement of setting up the store-scoped configuration values for fixture stores (stores that are created by data fixtures), for example:

``` php?start_inline=1
class Mage_Newsletter_Model_TemplateTest extends PHPUnit_Framework_TestCase
{
    /**
     * Note: isolation should be raised to flush the stores memory cache
     * @magentoAppIsolation enabled
     * @magentoAppArea frontend
     * @magentoDataFixture Mage/Core/_files/store.php
     * @magentoConfigFixture fixturestore_store design/theme/full_name default/default/blue
     */
    public function testGetProcessedTemplate()
    {
        $template = new Mage_Newsletter_Model_Template;
        $text = '{{view url="Mage_Page::favicon.ico"}}';
        $template->setTemplateTextPreprocessed($text)->setTemplateText($text);
 
        $this->assertStringEndsWith(
            'skin/frontend/default/default/default/en_US/Mage_Page/favicon.ico', $template->getProcessedTemplate()
        );
 
        $storeId = Mage::app()->getStore('fixturestore')->getId();
        $template->setDesignConfig(array('area' => 'frontend', 'store' => $storeId));
        $this->assertStringEndsWith(
            'skin/frontend/default/default/blue/en_US/Mage_Page/favicon.ico', $template->getProcessedTemplate()
        );
    }
}
```

Добавить описание примера{: style="color: red"}

### Reverting Annotation

The Magento annotations for integration tests are reverted in exactly the reverse of the order in which they are applied:

1. `@magentoConfigFixture`
1. `@magentoCache`
1. `@magentoComponentsDir`
1. `@magentoAppArea`
1. `@magentoDataFixture`
1. `@magentoDbIsolation`
1. `@magentoAppIsolation`


## `@magentoAppArea`

Integration testing framework enables you to configure an application area required to run tests. An annotation `@magentoAppArea` is used for this purpose.

``` php?start_inline=1
Configures test environment in context of specified application area
/**
 * @magentoAppArea <areaCode>
 */
```

### In a test case

Test case annotation is used for configuring environment in context of specified application area for all tests of test case. A default value is `global`. It means that if some tests don't have own `@magentoAppArea` annotation, annotation specified for test case will be used and applied for all tests of test case.

``` php?start_inline=1
/**
 * @magentoAppArea adminhtml
 */
class Some_Class_ToTest extends PHPUnit_Framework_TestCase
{
    public function testOne()
    {
        //...
    }
 
    /**
     * @magentoAppArea frontend
     */
    public function testTwo()
    {
        //...
    }
 
    public function testThree()
    {
        //...
    }
}
```

In this case `testOne` and `testTwo` will be executed in context of `adminhtml` application area.

### In a test

Test method annotation is used for configuring environment in context of specified application area for specified test. Fallback scheme is the following:

1. Method annotation
2. Test case annotation
3. Default application area (global)
    
If previous test was executed in context of another area, Magento application will be reinitialized

``` php?start_inline=1
class Some_Class_ToTest extends PHPUnit_Framework_TestCase
{
    //will be executed in context of global area
    public function testOne()
    {
        //...
    }
 
    //application will be reinitialize and test will be executed in context of frontend area
    /**
     * @magentoAppArea frontend
     */
    public function testTwo()
    {
        //...
    }
 
    //application will be reinitialize and test will be executed in context of adminhtml area
    /**
     * @magentoAppArea adminhtml
     */
    public function testThree()
    {
        //...
    }
 
    //application will be reinitialize and test will be executed in context of global area
    public function testFour()
    {
        //...
    }
 
    //will be executed in context of global area
    public function testFive()
    {
        //...
    }
}
```

## `@magentoAppIsolation`

Many integration tests rely on application state, which can be altered during execution of some tests. Such changes to the environment may cause the failure of other tests. The integration testing framework uses default policies that keep tests relatively isolated and provide optimal performance simultaneously. Isolation can be controlled using the `@magentoAppIsolation` annotation.

``` php?start_inline=1
/**
 * @magentoAppIsolation enabled|disabled
 */
```
 
### Test Case Isolation

After completion of each test case the application and all related objects are reinitialized. Such reinitialization allows test cases to be developed based on the assumption that application objects will not have been polluted by previous test cases. Isolation between test cases is `mandatory and cannot be disabled`. That allows to narrow down the possibility of isolation issues to a test case level.

<div class="bs-callout bs-callout-warning" markdown="1">
Do not share, and don't rely on sharing, application object(s) between test cases.
</div>

### Test Isolation

By default, application isolation is disabled between tests. Automatic reinitialization (application isolation) can be enabled for a test using the @magentoAppIsolation annotation:

``` php?start_inline=1
/**
 * @magentoAppIsolation enabled
 */
public function testRegister()
{
    $object = new stdClass;
    Mage::register('test', $object);
    $this->assertSame($object, Mage::registry('test'));
}
```

Controller tests usually depend strongly on the application state and require reinitialization per test. Therefore all test cases that inherit Magento_TestFramework_TestCase_ControllerAbstract behave as if @magentoAppIsolation is enabled for each test.

### Default Isolation

Default values for `@magentoAppIsolation` annotation:

Test Class Ancestor|Test Case (Class)|Test(Method)
---|---|---
`PHPUnit_Framework_TestCase`|enabled|disabled
`Magento_TestFramework_TestCase_ControllerAbstract`|enabled|enabled

While `@magentoAppIsolation` cannot be changed at the test case level, developers can change it for individual tests.
It is acceptable to have tests non-isolated, as long as they don't modify or utilize the same application areas: the same attributes of an application object, the same paths in the current configuration, or the current scope (`"store"`). Forcing application isolation is recommended if any application object was intentionally modified within the test case.

<div class="bs-callout bs-callout-warning" markdown="1">
Don't consolidate non-isolated tests that rely upon dependencies and execution order provided by the PHPUnit framework; PHPUnit does not guarantee test execution order, and the order of execution can vary depending on the version of PHPUnit being used.
</div>

### Static properties cleanup

To reduce memory leaks caused by SimpleXml object, has been implemented a workaround to clear static properties of all defined classes (except blacklisted) at the end of `Magento_TestFramework_TestCase_ControllerAbstract` based test case execution.

## `@magentoCache`

Magento integration testing framework allows controlling whether certain cache types are enabled or disabled for a given test. This is a specification for the `@magentoCache` annotation for integration tests.

``` php?start_inline=1
Enable or disable cache type
/** 
 * @magentoCache <type>|all enabled|disabled
 */ 
```

Where:
- `<type>` is one of cache types
- `all` literal is a wildcard for all cache types
- `enabled` or `disabled` are to enable or disable respectively

### In a tests case

Configures the whole test case to run with specified configuration of cache types. Will be overridden by @magentoCache directive in test methods, if any.

### In a test
Configures a single test to run with specified configuration of cache types.

### Example

```php
<?php
namespace Magento\Foo;
 
/**
 * @magentoCache all enabled
 */
class BarTest extends \PHPUnit_Framework_TestCase
{
    public function testOne()
    {
        ...
    }
 
    /**
     * @magentoCache config disabled
     */
    public function testTwo()
    {
        ...
    }
 
    /**
     * @magentoCache all enabled
     * @magentoCache config disabled
     */
    public function testThree()
    {
        ...
    }
 
    /**
     * @magentoCache config disabled
     * @magentoCache all enabled
     */
    public function testFour()
    {
        ...
    }
}
```

Note:

- The class annotation (`"@magentoCache all enabled"`) will cause every test method to run with all cache types enabled, unless a method defines own "@magentoCache"
- If a method defines own "@magentoCache", it will completely override the value that may have been set for class. `The values between class and method are not combined in any way.`
- There may be multiple "@magentoCache" directives specified and their order matters:
  - In `testThree()`, first all cache types will be enabled, but then "config" will be disabled
  - In `testFour()`, the first "@magentoCache config disabled" is pointless, because it will be overridden by the following wildcard
  
## `@magentoComponentsDir`

Sometimes, tests require fixture components to be registered in the application for the period of the test run, so fixture data could be asserted in the tests. Though Magento application allows registration of components, it does not allow un-registration of registered components. It means that using only Magento application features, fixture components would remain registered for whole test suite run and could impact other tests.
@magentoComponentsDir annotation allows to register fixture components with un-registration after the test is finished. This annotation allows to register all components in a specified directory recursively.

``` php?start_inline=1
/**
* @magentoComponentsDir <dir_path>
*/
```

Where:

`<dir_path>` is a path to directory with fixture components. Each component that should be registered must contain a file called registration.php file as described in Component Registrar

### In a test case

Configures each test in the class with the specified fixture(s). Will be extended by @magentoComponentsDir directives in test methods, if any.
method

### In a test

Configures a single test to run with specified fixture(s).

### Examples

``` php?start_inline=1
// Magento/Foo/_files/modules/moduleOne/registration.php
 
\Magento\Framework\Component\ComponentRegistrar::register(
    \Magento\Framework\Component\ComponentRegistrar::MODULE,
    'Magento_FooOne',
    __DIR__
);
```

``` php?start_inline=1
namespace Magento\Foo;
 
/**
 * @magentoComponentsDir Magento/Foo/_files/modules
 */
class BarTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @magentoComponentsDir Magento/Foo/_files/themes
     */
    public function testOne()
    {
        /**
         * Registered components from Magento/Foo/_files/modules and Magento/Foo/_files/themes
         */
    }
 
    /**
     * @magentoComponentsDir Magento/Foo/_files/libs
     * @magentoComponentsDir Magento/Baz/_files/languages
     */
    public function testTwo()
    {
        /**
        * Registered components from Magento/Foo/_files/modules, Magento/Foo/_files/libs and Magento/Baz/_files/languages
        */
    }
}
```

### Registration of Themes

Themes require additional registration (in database) in most of cases.
@magentoComponentsDir annotation is NOT responsible for this and this is up to the developer of the test to determine whether to register themes in the DB or not. The reason for such distinction of responsibilities is that themes registration may require special pre-conditions and it's impossible to re-register themes w/o resetting whole application. Additionally, it breaks DB integrity, so the developer must also use @magentoDbIsolation annotation in this case.

``` php?start_inline=1

namespace Magento\Foo;
 
use Magento\TestFramework\Helper\Bootstrap;
use Magento\Backend\App\Area\FrontNameResolver as BackendFrontNameResolver;
 
class BarTest extends \PHPUnit_Framework_TestCase
{
    /**
     * Just adding fixture themes to the list of available themes in the application
     *
     * @magentoComponentsDir Magento/Foo/_files/themes
     * @magentoDbIsolation enabled
     */
    public function testSimple()
    {
        $objectManager = \Magento\TestFramework\Helper\Bootstrap::getObjectManager();
        /** @var \Magento\Theme\Model\Theme\Registration $registration */
        $registration = $objectManager->get(
            'Magento\Theme\Model\Theme\Registration'
        );
        $registration->register();
    }
 
    /**
     * Additionally to registering fixture theme(s), set one of them to the default theme for the store
     *
     * @magentoComponentsDir Magento/Foo/_files/themes
     * @magentoDbIsolation enabled
     */
    public function testWithDefaultFixtureTheme()
    {
        $objectManager = \Magento\TestFramework\Helper\Bootstrap::getObjectManager();
 
        $themes = [BackendFrontNameResolver::AREA_CODE => 'Magento/test_theme'];
        $design = $objectManager->create('Magento\Theme\Model\View\Design', ['themes' => $themes]);
        // this can't be done once themes registration already happened, so should be done before
        $objectManager->addSharedInstance($design, 'Magento\Theme\Model\View\Design');
 
        /** @var \Magento\Theme\Model\Theme\Registration $registration */
        $registration = $objectManager->get(
            'Magento\Theme\Model\Theme\Registration'
        );
        $registration->register();
 
        Bootstrap::getInstance()->loadArea(BackendFrontNameResolver::AREA_CODE);
    }
}
```

## `@magentoConfigFixture`

Integration testing framework allows Magento configuration values to be set for individual tests, then reverted to their original state following test execution. Annotation @magentoConfigFixture is used for this purpose.

``` php?start_inline=1
Fixture for Configuration Option
/**
 * @magentoConfigFixture [<store_code>_store] <config_path> <config_value>
 */
```

Where:
- `<store_code>` – store code in which specified fixture value take effect. When omitted, configuration option is considered to have global scope. Reserved value current can be used to specify the current store.
- `<config_path>` – XPath of a configuration option
- `config_value>` – fixture value for a configuration option

### In a test case

Not supported.

### In a test

Emulates config values within a method context

### Example

The annotation can be used multiple times in one test to declare required precondition values for multiple configuration options. For example, setting up configuration values:

``` php?start_inline=1
class Magento_Test_Annotation_ConfigFixtureTest extends PHPUnit_Framework_TestCase
{
    /**
     * @var Mage_Core_Model_Config
     */
    protected $_config;
 
    /**
     * Core store config
     *
     * @var Magento_Core_Model_Store_Config
     */
    protected $_coreStoreConfig = null;
 
    /**
     * @magentoConfigFixture               web/unsecure/base_url  http://example.com/
     * @magentoConfigFixture               web/secure/base_url    https://example.com/
     * @magentoConfigFixture current_store dev/restrict/allow_ips 192.168.0.1
     * @magentoConfigFixture admin_store   dev/restrict/allow_ips 192.168.0.2
     */
    public function testConfigFixtures()
    {
        $this->assertEquals('http://example.com/', (string)$this->_config->getNode('web/unsecure/base_url'));
        $this->assertEquals('https://example.com/', (string)$this->_config->getNode('web/secure/base_url'));
        $this->assertEquals('192.168.0.1', $this->_coreStoreConfig->getConfig('dev/restrict/allow_ips'));
        $this->assertEquals('192.168.0.2', $this->_coreStoreConfig->getConfig('dev/restrict/allow_ips', 'admin'));
    }
}
```

## `@magentoDataFixture`

> One of the most time-consuming parts of writing tests is writing the code to set the world up in a known state and then return it to its original state when the test is complete. This known state is called the fixture of the test.  - [https://phpunit.de/manual/current/en/phpunit-book.html#fixtures]

Using data fixtures for integration tests is an elegant solution (at least versus writing a bunch of "undo" code in a test) to prepare database data as a precondition for a specific test or test case and then revert it automatically. Annotation @magentoDataFixture is used for that purpose.

**Data Fixture Annotation Synopsis**

``` php?start_inline=1
/**
 * @magentoDataFixture <script_filename>|<method_name>
 */
```

Where:
- `<script_filename>` is a PHP script file name
- `<method_name>` is name of a method declared in the current class

### Requirements

Direct usage of a database connection is prohibited in fixtures because this introduces dependency on the database structure and potentially on the database vendor. Only the application (model) API should be used to implement data fixture scripts or methods.

### Usage

Fixtures can be declared in two different ways:

- as a PHP script file, which can be reused by multiple tests
- as a method of a test case class

#### Fixture Script File

The integration testing framework supports data fixtures as dedicated PHP scripts that can be reused by multiple tests.

A fixture script declaration specifies filename:

- relatively to the dev/tests/integration/testsuite directory
- containing only forward slashes ("/") with no preceding slash

The designated file is included as a PHP-script and executed.

**Fixture Script File Content**

``` php?start_inline=1

$model = new Magento_Core_Model_Layout_Update();
$model->setData(array(
    'handle'     => 'custom',
    'xml'        => '<layout/>',
    'sort_order' => 456,
));
$model->save();
```

To include this file, specify it for a test or test case as follows:

**Fixture Script File Usage**

``` php?start_inline=1

/**
 * @magentoDataFixture Magento/Core/Model/Layout/_files/layout_custom_handle.php
 */
class Magento_Core_Model_Layout_UpdateTest extends PHPUnit_Framework_TestCase
{
    public function testLoad()
    {
        /* Load by handle field */
        $model = new Magento_Core_Model_Layout_Update();
        $model->load('custom', 'handle');
        $this->assertEquals(456, $model->getSortOrder());
    }
}
```

#### Fixture Method

A method of the current test case class must be declared as public and static.

``` php?start_inline=1
/**
 * @magentoDataFixture layoutDataFixture
 */
class Magento_Core_Model_Layout_UpdateTest extends PHPUnit_Framework_TestCase
{
    private static $_modelId;
 
    public static function layoutDataFixture()
    {
        $model = new Magento_Core_Model_Layout_Update();
        $model->setData(array(
            'handle'     => 'default',
            'xml'        => '<layout/>',
            'sort_order' => 123,
        ));
        $model->save();
        self::$_modelId = $model->getId();
    }
 
    public function testLoad()
    {
        /* Load by id */
        $model = new Magento_Core_Model_Layout_Update();
        $model->load(self::$_modelId);
        $this->assertEquals(123, $model->getSortOrder());
    }
}
```

#### Fixture per Test vs. per Test Case

The @magentoDataFixture can be specified for a particular test or for an entire test case. The basic rules for fixture annotation on these different levels are:

* Fixtures declared at the test level have priority over fixtures declared at the test case level.
* Tests inherit test case fixtures, unless a test has its own specifically declared fixtures.
* Declarations on the test case level don't affect tests with their own fixture annotation.

The algorithm responsible uses the following logic:

1. If @magentoDataFixture appears in a doc comment for a particular test, the framework reverts all applied fixtures (if any) and applies the prescribed method-level ones. Upon a test completion, test-level fixtures are reverted.
1. If @magentoDataFixture appears in a doc comment for an entire test case, the framework applies the prescribed fixtures before every test of the test case, which declares no method-level fixtures, if class-level fixtures have not been applied yet (or have been already reverted). After the final test of the test case, all class-level fixtures are reverted.

The integration testing framework uses DB transactions to revert applied fixtures.

#### Fixture Rollbacks

Fixtures that perform solely database operations can be automatically reverted. If a fixture performs anything besides database operations (creates files, for instance) the custom rollback logic should be provided along with a fixture.
Rollbacks execute after all database transactions have been reverted.
Like fixtures, fixture rollbacks can be implemented as PHP files or methods. To function properly, a fixture rollback must be the same type (script or method) as the corresponding fixture, and the name should be based on the fixture name.
Rollback script files are named with the suffix _rollback and stored in the same folder as the corresponding fixture. Rollback methods are of the same class as the corresponding fixture, and are named with the suffix Rollback. For example:

Fixture/Rollback type|Fixture name|Rollback name
---|---|---
Script| `Magento/Catalog/_files/categories.php`|`Magento/Catalog/_files/categories_rollback.php`
Method|`Magento_Catalog_Model_ProductTest::prepareProduct`|`Magento_Catalog_Model_ProductTest::prepareProductRollback`

#### Restrictions

Relying on and modifying application state from within a fixture is prohibited.
The limitation is dictated by the compatibility requirements with Application Isolation Annotation annotation, which may reset application state at any time.
For example, the following fixture results passing to curresponding test is prohibited:

{% highlight php startinline=1%}
$user = Mage::getModel('Magento_User_Model_User');
$user->setFirstname('Dummy')
    ->setLastname('Dummy')
    ->setEmail('dummy@dummy.com')
    ->setUsername('dummy_username')
    ->setPassword('dummy_password1')
    ->save();
Mage::register('_fixture/user_id', $user->getId()); // incompatible with eventual app isolation
{% endhighlight %}

#### Session Fixtures

Session fixtures must not use Mage::getSingleton() to instantiate a necessary session model.

This restriction is necessitated by the way PHPUnit backs up global variables, including the superglobal variable [$_SESSION]. A conflict arises because Magento's abstract session model refers to session data by reference ($this->_data = &$_SESSION[$namespace]), which is no longer accurate after something is assigned to the $_SESSION variable. Therefore, when using Mage::getSingleton(), a session model with a snapshot of the session data (rather than a reference to the current data) will be placed into the registry, polluting the following test with old session data.

[$_SESSION]: http://us3.php.net/manual/en/reserved.variables.session.php

## `@magentoDbIsolation`

Sometimes integration tests make changes in the database. To isolate these changes, database transaction mechanism is utilized: a transaction must be started before the test, transaction commit must be avoided during the test, and the transaction must be rolled back after the test. Annotation `@magentoDbIsolation` is used for that purpose.


**Database Isolation Annotation Synopsis**

``` php?start_inline=1
/**
 * @magentoDbIsolation enabled|disabled
 */
```

### Test Isolation

If a test among other tests in a test case performs changes to the database, its changes can be isolated from other tests by raising DB isolation on a test level. An example of a test that pollutes database is Magento_VersionsCms_Model_IncrementTest:

``` php?start_inline=1
/**
 * @magentoDbIsolation enabled
 */
public function testGetNewIncrementId()
{
    $this->assertEmpty($this->_model->getId());
    $this->assertEmpty($this->_model->getIncrementType());
    $this->assertEmpty($this->_model->getIncrementNode());
    $this->assertEmpty($this->_model->getIncrementLevel());
 
    // performs changes in the database
    $this->_model->getNewIncrementId(Magento_VersionsCms_Model_Increment::TYPE_PAGE, 1, 1);
 
    $this->assertEquals(Magento_VersionsCms_Model_Increment::TYPE_PAGE, $this->_model->getIncrementType());
    $this->assertEquals(1, $this->_model->getIncrementNode());
    $this->assertEquals(1, $this->_model->getIncrementLevel());
    $this->assertNotEmpty($this->_model->getId());
}
```

<div class="bs-callout bs-callout-warning" markdown="1">
Before implementation of this annotation, db isolation of a test used to be done using @magentoDataFixture annotation with an empty fixture.
Usage of empty fixture workaround is prohibited now in favor of @magentoDbIsolation annotation.
</div>

### Test Case Isolation

There can be cases when multiple tests perform changes to the database and rely on the changes made by each other. For example, entity CRUD tests are performed in predefined sequence: **create -> read -> update -> delete**. Every next test relies on a database state left from the previous one. If at any point of that sequence (after create) a test fails, the database will be polluted with saved data. To not obfuscate such tests with error-prone cleanup logic, entire sequence of test can be implemented as a separate test case with @magentoDbIsolation enabled on a class level. For example:

**Test Case Wrapped into Transaction**

``` php?start_inline=1

/**
 * @magentoDbIsolation enabled
 */
class Some_EntityTest extends PHPUnit_Framework_TestCase
{
    public function testCreate()
    {
        $this->object->setData($this->initialData)->save();
        $this->assertNotEmpty($this->object->getId());
        return $this->object->getId();
    }
 
    /**
     * @depends testCreate
     */
    public function testRead($objectId)
    {
        $this->object->load($objectId);
        $this->assertEquals($this->initialData, $this->object->getData());
        return $objectId;
    }
 
    /**
     * @depends testRead
     */
    public function testUpdate($objectId)
    {
        $this->object->setData($newData)->save();
        $object = new Some_Entity();
        $object->load($objectId);
        $this->assertEquals($newData, $object->getData());
        return $objectId;
    }
 
    /**
     * @depends testUpdate
     */
    public function testDelete($objectId)
    {
        $this->object->delete();
        $object = new Some_Entity();
        $object->load($objectId);
        $this->assertEmpty($object->getData());
    }
}

```

<!-- LINK DEFINITIONS -->

[`@magentoAppArea`]: #magentoapparea
[`@magentoAppIsolation`]: #magentoappisolation
[`@magentoDataFixture`]: #magentodatafixture
[`@magentoDbIsolation`]: #magentodbisolation
[`@magentoCache`]: #magentocache
[`@magentoComponentsDir`]: #magentocomponentsdir
[`@magentoConfigFixture`]: #magentoconfigfixture

[PHPUnit annotations]: https://wiki.corp.magento.com/display/MAGE2/Custom+DocBlock+Annotations#CustomDocBlockAnnotations-RevertingAnnotation
