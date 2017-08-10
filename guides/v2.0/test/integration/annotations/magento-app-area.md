---
layout: default
group: integration-testing
subgroup: 30_Custom_DocBlock_Annotations
title: Application Area Annotation
menu_title: magentoAppArea
version: 2.0
github_link: test/integration/annotations/magento-app-area.md
---

Integration testing framework allows to configure application area required to run tests. Annotation `@magentoAppArea` is used for this purpose.

{% highlight php startinline=1 %}
Configure test environment in context of specified application area
/**
 * @magentoAppArea <areaCode>
 */
{% endhighlight %}

## In a test case

Test case annotation is used for configuring environment in context of specified application area for all tests of test case. A default value is `global`. It means that if some tests don't have own `@magentoAppArea` annotation, annotation specified for test case will be used and applied for all tests of test case.

{% highlight php startinline=1 %}
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
{% endhighlight %}

In this case `testOne` and `testTwo` will be executed in context of `adminhtml` application area.

## In a method

Test method annotation is used for configuring environment in context of specified application area for specified test. Fallback scheme is the following:

    1. Method annotation
    2. Test case annotation
    3. Default application area (global)
    
If previous test was executed in context of another area, Magento application will be reinitialized

{% highlight php startinline=1 %}
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
{% endhighlight %}