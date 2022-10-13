---
group: testing
title: Application Area Annotation in the Integration Testing Framework
---

Configure a test environment in scope of the particular [application area][] with the `@magentoAppArea` annotation.

## Format

```php?start_inline=1
/**
 * @magentoAppArea <area code>
 */
```

## Fallback sequence

1. Test annotation
1. Test case annotation
1. Default application area, which is `global`

## Test case annotation

A test case annotation enables the specified application area for all tests in the test case.

{:.bs-callout-info}
Test annotations override test case annotations.

Example:

```php?start_inline=1
/**
 * @magentoAppArea adminhtml
 */
namespace Vendor\Module;
class ClassToTest extends \PHPUnit\Framework\TestCase
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

`testOne()` and `testThree()` are set to run in scope of the `adminhtml` application area, whereas `testTwo()` is set to run in scope of the `frontend` area.

## Test annotation

A test annotation is used to configure the environment in scope of the specified application area for the test.
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
    /**
     * @magentoAppArea frontend
     */
    public function testTwo()
    {
        //...
    }

    // reinitializes the application and executes the test in scope of the adminhtml area
    /**
     * @magentoAppArea adminhtml
     */
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
