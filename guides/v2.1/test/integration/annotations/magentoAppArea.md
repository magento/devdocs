---
group: integration-testing
version: 2.1
title: Application Area Annotation
github_link: test/integration/annotations/magentoAppArea.md
---

Integration testing framework enables you to configure the application area to run tests using the `@magentoAppArea` annotation.

## Format

> Configuring the test environment in context of specified application area

```php?start_inline=1
/**
 * @magentoAppArea <areaCode>
 */
```

## Usage

The fallback scheme is:

1. Test annotation
2. Test case annotation
3. Default application area, which is `global`

### In a test case

The annotation in a test case enables the specified application area for all tests in the test case.
If the annotation is specified over a test in the test case, it will overwrite the test case annotation.

> Test case annotation example
```php?start_inline=1
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

In the above example, `testOne` and `testTwo` will be executed in context of the `adminhtml` application area.

The default value for `@magentoAppArea` is `global`.
{:.bs-callout .bs-call-info}

### In a test

The annotation in a test is used to configure the environment in context of the specified application area for the test.
Each time you specify a different area, Magento will be reinitialized in the specified context.

> Method annotation example
```php?start_inline=1
class Some_Class_ToTest extends PHPUnit_Framework_TestCase
{
    //executes in context of the global area
    public function testOne()
    {
        //...
    }
 
    // reinitializes the application and executes the test in context of the frontend area
    /**
     * @magentoAppArea frontend
     */
    public function testTwo()
    {
        //...
    }
 
    // reinitializes the application and executes the test in context of the adminhtml area
    /**
     * @magentoAppArea adminhtml
     */
    public function testThree()
    {
        //...
    }
 
    // reinitializes the application and executes the test in context of the global area
    public function testFour()
    {
        //...
    }
 
    // executes in context of the global area
    public function testFive()
    {
        //...
    }
}
```