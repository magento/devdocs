---
group: integration-testing
version: 2.1
title: Data fixture annotation
github_link: /test/integration/annotations/magentoDataFixture.md
---

Use data fixtures in integration tests to prepare the database for testing.
The Integration Testing Framework reverts the database to its initial state automatically.
A data fixture is a PHP script that sets data you want to reuse in your test.
The script can be defined in a separate file or as a local method in the test case.
To set up the date fixture, use the `@magentoDataFixture` annotation.

## Format

`@magentoDataFixture` takes an argument that points to the data fixture as a filename a local method.

> Data fixture annotation

```php?start_inline=1
/**
 * @magentoDataFixture <script_filename>|<method_name>
 */
 ```
 
Here,
 * `<script_filename>` is a filename of the PHP script
 * `<method_name>` is a name of the method declared in the current class
 
## Principles
 
1. Do not use direct connection to a database in fixtures.
It introduces a dependency on the database structure and potentially on the database vendor.

2. Use the application (model) API to implement your data fixtures.
 
## Usage
 
Fixtures can be declared in two ways:

- as a PHP script file that is used by other tests and test cases.
- as a local method that is used by other tests in the test cases.
 
### Fixture as a separate file
 
Define the fixture in a separate file when you want to reuse it in different test cases.
 
To declare the fixture, use the following convention:
* a path that is relative to the `dev/tests/integration/<testsuite directory>`
* containing only forward slashes `/` with no preceding slash. Example: `Magento/Core/Model/Layout/_files/layout_custom_handle.php`

The ITF includes the declared PHP script to your test and executes it during test run.

#### Example

__Use case__: Verify the `getSortOrder()` method that gets the value of `sort_order`.

Create a data fixture as a separate file called `layout_custom_handle.php` that sets `sort_order` to `456`.

> The `layout_custom_handle.php` file content:

```php?start_inline=1
<?php
$model = new \Magento\Widget\Model\Layout\Update();
$model->setData(array(
    'handle'     => 'custom',
    'xml'        => '<layout/>',
    'sort_order' => 456,
));
$model->save();
```

Declare the fixture in your test case using the `@magentoDataFixture` annotation.

> The test case that uses the data fixture:

```php?start_inline=1
/**
 * @magentoDataFixture Magento/Core/Model/Layout/_files/layout_custom_handle.php
 */
class Magento_Core_Model_Layout_UpdateTest extends PHPUnit\Framework\TestCase
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

### Fixture as a method

A method of the current test case class must be declared as `public` and `static`.

> Fixture Method Usage

```php?start_inline=1
namespace Magento\Widget\Model\Layout;

class UpdateTest extends PHPUnit\Framework\TestCase
{
    private $modelId;
    public function layoutDataFixture()
    {
        $model = new Update::class();
        $model->setData([
            'handle'     => 'default',
             'xml'        => '<layout/>',
             'sort_order' => 123
        ]);
        $model->save();
        $this->modelId = $model->getId();
    }
    
    /**
     * @magentoDataFixture layoutDataFixture
     */
    public function testLoad()
    {
        /* Load by id */
        $model = new Update::class();
        $model->load($this->modelId);
        $this->assertEquals(123, $model->getSortOrder());
    }
}
```

### Fixture per Test vs. per Test Case

The `@magentoDataFixture` can be specified for a particular test or for an entire test case.
The basic rules for fixture annotation on these different levels are:

- Fixtures declared at the test level have priority over fixtures declared at the test case level.
- Tests inherit test case fixtures, unless a test has its own specifically declared fixtures.
- Declarations on the test case level don't affect tests with their own fixture annotation.

The responsible algorithm uses the following logic:

- If `@magentoDataFixture` appears in a doc comment for a particular test, the framework reverts all applied fixtures (if any) and applies the prescribed method-level ones. Upon a test completion, test-level fixtures are reverted.
- If `@magentoDataFixture` appears in a doc comment for an entire test case, the framework applies the prescribed fixtures before every test of the test case, which declares no method-level fixtures, if class-level fixtures have not been applied yet (or have been already reverted). After the final test of the test case, all class-level fixtures are reverted.
The integration testing framework uses DB transactions to revert applied fixtures.

### Fixture Rollbacks

Fixtures that perform solely database operations can be automatically reverted.
If a fixture performs anything besides database operations (creates files, for instance) the custom rollback logic should be provided along with a fixture.

Rollbacks execute after all database transactions have been reverted.

Like fixtures, fixture rollbacks can be implemented as PHP files or methods.
To function properly, a fixture rollback must be the same type (script or method) as the corresponding fixture, and the name should be based on the fixture name.

Rollback script files are named with the suffix _rollback and stored in the same folder as the corresponding fixture.
Rollback methods are of the same class as the corresponding fixture, and are named with the suffix Rollback.
For example:

Fixture/Rollback type|Fixture name|Rollback name
---|---|---
Script|`Magento/Catalog/_files/categories.php`|`Magento/Catalog/_files/categories_rollback.php`
Method|`Magento_Catalog_Model_ProductTest::prepareProduct`|`Magento_Catalog_Model_ProductTest::prepareProductRollback`

### Restrictions

Relying on and modifying application state from within a fixture is prohibited.

The limitation is dictated by the compatibility requirements with the [application isolation annotation][magentoAppIsolation], which may reset application state at any time.

For example, the following fixture results passing to corresponding test is prohibited:

> Prohibited data passing through the global registry

```php?start_inline=1
$user = Mage::getModel('\Magento\User\Model\User');
$user->setFirstname('Dummy')
    ->setLastname('Dummy')
    ->setEmail('dummy@dummy.com')
    ->setUsername('dummy_username')
    ->setPassword('dummy_password1')
    ->save();
Mage::register('_fixture/user_id', $user->getId()); // incompatible with eventual app isolation
```

#### Session fixtures

Session fixtures must not use `::getSingleton` to instantiate a necessary session model.

This restriction is necessitated by the way PHPUnit backs up global variables, including the superglobal variable [`$_SESSION`].
A conflict arises because Magento's abstract session model refers to session data by reference (`$this->_data = &$_SESSION[$namespace]`), which is no longer accurate after something is assigned to the `$_SESSION` variable.
Therefore, when using `::getSingleton`, a session model with a snapshot of the session data (rather than a reference to the current data) will be placed into the registry, polluting the following test with old session data.

<!-- Link definitions -->

[magentoAppIsolation]: magentoAppIsolation.html
[`$_SESSION`]: http://us3.php.net/manual/en/reserved.variables.session.php
