---
group: testing
title: Component registration attribute
---

When your test design requires you to register fixture components and unregister them after the test execution, use the `ComponentsDir` attribute.
It enables you to register all the components at a specified directory recursively.

## Format

```php?start_inline=1
#[
   ComponentsDir(string $path)
]
```

### Parameters

-  **path**
   -  A path to the directory with fixture components. Each component must be registered using `registration.php` file.

## Test class attribute

`ComponentsDir` attribute for a test case is applied to all test methods in the test case.

## Test method attribute

`ComponentsDir` attribute for a test method configures the test to run with registered components located in a specified directory.
If the parent test case also declares a `ComponentsDir`, both attributes are merged.

## Example

The following example demonstrates the `ComponentsDir` attribute in different scopes.

```php?start_inline=1
namespace Magento\Foo;

#[
   ComponentsDir('Magento/Foo/_files/code/Magento')
]
class BarTest extends \PHPUnit\Framework\TestCase
{
    #[
        ComponentsDir('Magento/Foo/_files/themes')
    ]
    public function testOne()
    {
       ...   // Here you can use registered components from 'Magento/Foo/_files/code/Magento' and 'Magento/Foo/_files/themes'
    }

    #[
        ComponentsDir('Magento/Foo/_files/libs', 'Magento/Baz/_files/languages')
    ]
    public function testTwo()
    {
       ...   // Here you can use the registered components from 'Magento/Foo/_files/code/Magento', 'Magento/Foo/_files/libs', and 'Magento/Baz/_files/languages'
    }
}
```

Each path declared in an attribute must contain a registration file in the specified directory or its subdirectories.
For example, the `MagentoFooTest_MyModule` component at `ComponentsDir('Magento/Foo/_files/code/Magento')` can be registered in `Magento/Foo/_files/code/Magento/MyModule/registration.php`:

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
Use the [`DbIsolation`][] attribute to keep the database integrity safe.

<!-- Link definitions -->

[`DbIsolation`]: ./magento-db-isolation.html