---
layout: default
group: integration-testing
subgroup: 30_Custom_DocBlock_Annotations
title: magentoDataFixture
menu_title: magentoDataFixture
version: 2.0
github_link: test/integration/annotations/magento-data-fixture.md
---

> One of the most time-consuming parts of writing tests is writing the code to set the world up in a known state and then return it to its original state when the test is complete. This known state is called the fixture of the test.  - [https://phpunit.de/manual/current/en/phpunit-book.html#fixtures]

Using data fixtures for integration tests is an elegant solution (at least versus writing a bunch of "undo" code in a test) to prepare database data as a precondition for a specific test or test case and then revert it automatically. Annotation @magentoDataFixture is used for that purpose.

**Data Fixture Annotation Synopsis**

```
/**
 * @magentoDataFixture <script_filename>|<method_name>
 */
```

Where:
- `<script_filename>` is a PHP script file name
- `<method_name>` is name of a method declared in the current class

## Requirements

Direct usage of a database connection is prohibited in fixtures because this introduces dependency on the database structure and potentially on the database vendor. Only the application (model) API should be used to implement data fixture scripts or methods.

## Usage

Fixtures can be declared in two different ways:

- as a PHP script file, which can be reused by multiple tests
- as a method of a test case class

### Fixture Script File

The integration testing framework supports data fixtures as dedicated PHP scripts that can be reused by multiple tests.

A fixture script declaration specifies filename:

- relatively to the dev/tests/integration/testsuite directory
- containing only forward slashes ("/") with no preceding slash

The designated file is included as a PHP-script and executed.

**Fixture Script File Content**

{% highlight php %}
<?php
$model = new Magento_Core_Model_Layout_Update();
$model->setData(array(
    'handle'     => 'custom',
    'xml'        => '<layout/>',
    'sort_order' => 456,
));
$model->save();
{% endhighlight %}

To include this file, specify it for a test or test case as follows:

**Fixture Script File Usage**

{% highlight php startinline=1%}

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
{% endhighlight %}

### Fixture Method

A method of the current test case class must be declared as public and static.

{% highlight php startinline=1%}
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
{% endhighlight %}

### Fixture per Test vs. per Test Case

The @magentoDataFixture can be specified for a particular test or for an entire test case. The basic rules for fixture annotation on these different levels are:

* Fixtures declared at the test level have priority over fixtures declared at the test case level.
* Tests inherit test case fixtures, unless a test has its own specifically declared fixtures.
* Declarations on the test case level don't affect tests with their own fixture annotation.

The algorithm responsible uses the following logic:

1. If @magentoDataFixture appears in a doc comment for a particular test, the framework reverts all applied fixtures (if any) and applies the prescribed method-level ones. Upon a test completion, test-level fixtures are reverted.
1. If @magentoDataFixture appears in a doc comment for an entire test case, the framework applies the prescribed fixtures before every test of the test case, which declares no method-level fixtures, if class-level fixtures have not been applied yet (or have been already reverted). After the final test of the test case, all class-level fixtures are reverted.

The integration testing framework uses DB transactions to revert applied fixtures.

### Fixture Rollbacks

Fixtures that perform solely database operations can be automatically reverted. If a fixture performs anything besides database operations (creates files, for instance) the custom rollback logic should be provided along with a fixture.
Rollbacks execute after all database transactions have been reverted.
Like fixtures, fixture rollbacks can be implemented as PHP files or methods. To function properly, a fixture rollback must be the same type (script or method) as the corresponding fixture, and the name should be based on the fixture name.
Rollback script files are named with the suffix _rollback and stored in the same folder as the corresponding fixture. Rollback methods are of the same class as the corresponding fixture, and are named with the suffix Rollback. For example:

Fixture/Rollback type|Fixture name|Rollback name
---|---|---
Script| `Magento/Catalog/_files/categories.php`|`Magento/Catalog/_files/categories_rollback.php`
Method|`Magento_Catalog_Model_ProductTest::prepareProduct`|`Magento_Catalog_Model_ProductTest::prepareProductRollback`

### Restrictions

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

### Session Fixtures

Session fixtures must not use Mage::getSingleton() to instantiate a necessary session model.

This restriction is necessitated by the way PHPUnit backs up global variables, including the superglobal variable [$_SESSION]. A conflict arises because Magento's abstract session model refers to session data by reference ($this->_data = &$_SESSION[$namespace]), which is no longer accurate after something is assigned to the $_SESSION variable. Therefore, when using Mage::getSingleton(), a session model with a snapshot of the session data (rather than a reference to the current data) will be placed into the registry, polluting the following test with old session data.

[$_SESSION]: http://us3.php.net/manual/en/reserved.variables.session.php