---
group: integration-testing
version: 2.1
title: Application Area Annotation
github_link: test/integration/annotations/magentoAppArea.md
---

Integration testing framework allows to configure application area required to run tests.
Annotation `@magentoAppArea` is used for this purpose.

## Format

> Configure test environment in context of specified application area

```php?start_inline=1
/**
 * @magentoAppArea <areaCode>
 */
```

## Scope

### Test Cases Annotation

Test case annotation is used for configuring environment in context of specified application area for all tests of test case.
If some tests don't have own @magentoAppArea annotation, annotation specified for test case will be used and applied for all tests of test case.

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

In this case testOne and testTwo will be executed in context of the `adminhtml` application area.

If test case does not have annotation `@magentoAppArea`, it will be executed in context of the `global` area.
{:.bs-callout .bs-call-info}

### Method annotation

Test method annotation is used for configuring environment in context of specified application area for specified test. Fallback scheme is the following:

1. Method annotation
2. Test case annotation
3. Default application area (global)

If previous test was executed in context of another area, Magento application will be reinitialized

> Method annotation example
```php?start_inline=1
class Some_Class_ToTest extends PHPUnit_Framework_TestCase
{
    //will be executed in context of global area
    public function testOne()
    {
        //...
    }
 
    //application will be reinitialize and test will be executed in context of frontend area
    /**
     * @magentoAppArea frontend
     */
    public function testTwo()
    {
        //...
    }
 
    //application will be reinitialize and test will be executed in context of adminhtml area
    /**
     * @magentoAppArea adminhtml
     */
    public function testThree()
    {
        //...
    }
 
    //application will be reinitialize and test will be executed in context of global area
    public function testFour()
    {
        //...
    }
 
    //will be executed in context of global area
    public function testFive()
    {
        //...
    }
}
```