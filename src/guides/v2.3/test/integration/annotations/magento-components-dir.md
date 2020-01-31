---
group: testing
title: Component registration annotation
---

When your test design requires to register fixture components and unregister them after the test execution, use the `@magentoComponentsDir` annotation.
It enables you to register all the components at a specified directory recursively.

## Format

```php?start_inline=1
/**
* @magentoComponentsDir <dir_path>
*/
```

Here, `<dir_path>` is a path to the directory with fixture components.
Each component must be registered using `registration.php` file.

## Test case

`@magentoComponentsDir` annotation for a test case is applied to all test methods in the test case.

## Test method

`@magentoComponentsDir` annotation for a test method configures the test to run with registered components located in a specified directory.
If the parent test case also declares a `@magentoComponentsDir`, both annotation are merged.

## Example

The following example demonstrates `@magentoComponentsDir` annotation in different scopes.

```php?start_inline=1
namespace Magento\Foo;

/**
 * @magentoComponentsDir Magento/Foo/_files/code/Magento
 */
class BarTest extends \PHPUnit\Framework\TestCase
{
    /**
     * @magentoComponentsDir Magento/Foo/_files/themes
     */
    public function testOne()
    {
       ...   // Here you can use registered components from 'Magento/Foo/_files/code/Magento' and 'Magento/Foo/_files/themes'
    }

    /**
     * @magentoComponentsDir Magento/Foo/_files/libs
     * @magentoComponentsDir Magento/Baz/_files/languages
     */
    public function testTwo()
    {
       ...   // Here you can use the registered components from 'Magento/Foo/_files/code/Magento', 'Magento/Foo/_files/libs', and 'Magento/Baz/_files/languages'
    }
}
```

Each path declared in annotation must contain a registration file in the specified directory or its subdirectories.
For example, the `MagentoFooTest_MyModule` component at `@magentoComponentsDir Magento/Foo/_files/code/Magento` can be registered in `Magento/Foo/_files/code/Magento/MyModule/registration.php`:

```php?start_inline=1

use Magento\Framework\Component\ComponentRegistrar;

\Magento\Framework\Component\ComponentRegistrar::register(
    \Magento\Framework\Component\ComponentRegistrar::MODULE,
    'MagentoFooTest_MyModule',
    __DIR__
);
```

 {:.bs-callout-info}
A theme must be registered in the database.
Each time you register a theme, reset the entire application.
Use the [`@magentoDbIsolation`][] annotation to keep the database integrity safe.

<!-- Link definitions -->

[`@magentoDbIsolation`]: ./magento-db-isolation.html