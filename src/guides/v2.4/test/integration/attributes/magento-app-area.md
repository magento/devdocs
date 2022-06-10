---
group: testing
title: Application Area attribute in the Integration Testing Framework
---

Configure a test environment in scope of the particular [application area][] with the `@magentoAppArea` annotation.

## Format

```php?start_inline=1
#[
    AppArea((string) <Area code>)
]
```

## Fallback sequence

1. Test annotation
1. Test case annotation
1. Default application area, which is `global`

## Test case attribute

A test case attribute enables the specified application area for all tests in the test case.

{:.bs-callout-info}
Test attribute override test case attribute.

Example:

```php?start_inline=1
#[
    AppArea('adminhtml')
] 
namespace Vendor\Module;
class ClassToTest extends \PHPUnit\Framework\TestCase
{
    public function testOne()
    {
        //...
    }

    #[
        AppArea('frontend')
    ] 
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

`testOne()` and `testThree()` are set to run in scope of the `adminhtml` application area, whereas `testTwo()` is set to run in scope of the `frontend` area.

## Test attribute

A test attribute is used to configure the environment in scope of the specified application area for the test.
Magento is reinitialized in the corresponding scope each time you specify a different area.

Example:

```php?start_inline=1
namespace \Vendor\Module;

class ClassToTest extends \PHPUnit\Framework\TestCase
{
    // executes the test in scope of the global area
    public function testOne()
    {
        //...
    }

    // reinitializes the application and executes the test in scope of the frontend area
    #[
        AppArea('frontend')
    ] 
    public function testTwo()
    {
        //...
    }

    // reinitializes the application and executes the test in scope of the adminhtml area
    #[
        AppArea('adminhtml')
    ] 
    public function testThree()
    {
        //...
    }

    // reinitializes the application and executes the test in scope of the global area
    public function testFour()
    {
        //...
    }

    // executes in scope of the global area
    public function testFive()
    {
        //...
    }
}
```

<!-- Link definitions -->

[application area]: {{page.baseurl}}/architecture/archi_perspectives/components/modules/mod_and_areas.html
