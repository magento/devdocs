---
group: integration-testing
version: 2.1
title: Component registrar annotation
github_link: test/integration/annotations/magentoComponentsDir.md
---

When your test design require to register the fixture components and unregister them after the test execution, use the `@magentoComponentsDir` annotation.
It enables you to register recursively all the components at a specified directory.

## Format

> Registration of the fixture components at the `<dir_path>` directory

```php?start_inline=1
/**
* @magentoComponentsDir <dir_path>
*/
```

Here, `<dir_path>` is the path to the directory with the fixture components.
Each component to be registered must contain the `registration.php` file.

## Scope

The annotation is available on different levels: for a test case and for a test method.

### Test case

The `@magentoComponentsDir` annotation for the entire test case is applicable for all test methods in the test case.

### Test method

The `@magentoComponentsDir` annotation for a test method configures the test to run with the registered components located in the specified directories.
The test method annotation automatically contains the `@magentoComponentsDir` annotations specified for the parent test case.

## Example

The following example demonstrates the usage of the `@magentoComponentsDir` annotation in different scopes.
 
> Example of `Magento/Foo/_files/modules/moduleOne/registration.php`

```php?start_inline=1
\Magento\Framework\Component\ComponentRegistrar::register(
    \Magento\Framework\Component\ComponentRegistrar::MODULE,
    'Magento_FooOne',
    __DIR__
);
```

> Fixture components registration using the annotation

```php?start_inline=1
namespace Magento\Foo;
 
/**
 * @magentoComponentsDir Magento/Foo/_files/modules
 */
class BarTest extends \PHPUnit\Framework\TestCase
{
    /**
     * @magentoComponentsDir Magento/Foo/_files/themes
     */
    public function testOne()
    {
       ...   // Here you can use the registered components from 'Magento/Foo/_files/modules' and 'Magento/Foo/_files/themes'
    }
 
    /**
     * @magentoComponentsDir Magento/Foo/_files/libs
     * @magentoComponentsDir Magento/Baz/_files/languages
     */
    public function testTwo()
    {
       ...   // Here you can use the registered components from 'Magento/Foo/_files/modules', 'Magento/Foo/_files/libs', and 'Magento/Baz/_files/languages'
    }
}
```

## Theme registration

In most cases, a theme must be registered in the database.
The `@magentoComponentsDir` annotation is NOT responsible for this.

Each time you register the theme, you have to reset the entire application.
Use the [`@magentoDbIsolation`] annotation to keep the DB integrity in safe.

> Example

```php?start_inline=1
namespace Magento\Foo;
 
use Magento\TestFramework\Helper\Bootstrap;
use Magento\Backend\App\Area\FrontNameResolver as BackendFrontNameResolver;
use Magento\Theme\Model\Theme\Registration;
 
class BarTest extends \PHPUnit\Framework\TestCase
{
    /**
     * Add fixture themes to the list of available themes in the application
     *
     * @magentoComponentsDir Magento/Foo/_files/themes
     * @magentoDbIsolation enabled
     */
    public function testSimple()
    {
        $objectManager = \Magento\TestFramework\Helper\Bootstrap::getObjectManager();
        /** @var \Magento\Theme\Model\Theme\Registration $registration */
        $registration = $objectManager->get(Registration::class);
        $registration->register();
    }
 
    /**
     * Set a default theme for the store
     *
     * @magentoComponentsDir Magento/Foo/_files/themes
     * @magentoDbIsolation enabled
     */
    public function testWithDefaultFixtureTheme()
    {
        $objectManager = \Magento\TestFramework\Helper\Bootstrap::getObjectManager();
 
        $themes = [BackendFrontNameResolver::AREA_CODE => 'Magento/test_theme'];
        $design = $objectManager->create('Magento\Theme\Model\View\Design', ['themes' => $themes]);
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

<!-- Link definitions -->

[`@magentoDbIsolation`]: ./magentoDbIsolation.html