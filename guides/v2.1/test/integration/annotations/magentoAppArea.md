---
group: integration-testing
title: Application Area Annotation in the Integration Testing Framework
---

Integration testing framework enables you to configure the application area to run tests using the `@magentoAppArea` annotation.

## Format

Configuring the test environment in scope of the specified application area:

```php?start_inline=1
/**
 * @magentoAppArea <areaCode>
 */
```

## Usage

The annotation fallback sequence:

1. Test annotation
2. Test case annotation
3. Default application area, which is `global`

### In a test case

The annotation in a test case enables the specified application area for all tests in the test case.
If the annotation is specified over a test in the test case, it will overwrite the test case annotation.

The test case annotation example:

```php?start_inline=1
/**
 * @magentoAppArea adminhtml
 */
namespace Vendor\Module;
class ClassToTest extends PHPUnit\Framework\TestCase
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

In the above example, `testOne` and `testTwo` will be executed in scope of the `adminhtml` application area.

The default value for `@magentoAppArea` is `global`.
{:.bs-callout .bs-callout-info}

### In a test

The annotation in a test is used to configure the environment in scope of the specified application area for the test.
Each time you specify a different area, Magento will be reinitialized in the specified scope.

The test annotation example:

```php?start_inline=1
namespace \Vendor\Module;

class ClassToTest extends \PHPUnit\Framework\TestCase
{
    // execute the test in scope of the global area
    public function testOne()
    {
        //...
    }

    // reinitialize the application and executes the test in scope of the frontend area
    /**
     * @magentoAppArea frontend
     */
    public function testTwo()
    {
        //...
    }

    // reinitialize the application and executes the test in scope of the adminhtml area
    /**
     * @magentoAppArea adminhtml
     */
    public function testThree()
    {
        //...
    }

    // reinitialize the application and executes the test in scope of the global area
    public function testFour()
    {
        //...
    }

    // execute in scope of the global area
    public function testFive()
    {
        //...
    }
}
```