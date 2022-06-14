---
group: testing
title: Application Area attribute
---

Configure a test environment in scope of the particular [application area][] with the `AppArea` annotation.

## Format

```php?start_inline=1
#[
    AppArea(string $area)
]
```

### Parameters

-  **area**
   -  Can take any value from the list below
      -  `\Magento\Framework\App\Area::AREA_GLOBAL`
      -  `\Magento\Framework\App\Area::AREA_ADMINHTML`
      -  `\Magento\Framework\App\Area::AREA_FRONTEND`
      -  `\Magento\Framework\App\Area::AREA_WEBAPI_REST`
      -  `\Magento\Framework\App\Area::AREA_WEBAPI_SOAP`
      -  `\Magento\Framework\App\Area::AREA_CRONTAB`
      -  `\Magento\Framework\App\Area::AREA_GRAPHQL`

## Fallback sequence

1. Test method
1. Test class
1. Default application area, which is `global`

## Test class attribute

A test class attribute enables the specified application area for all tests in the test class.

{:.bs-callout-info}
Test class attribute override test method attribute.

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

## Test method attribute

A test method attribute is used to configure the environment in scope of the specified application area for the test method.
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
