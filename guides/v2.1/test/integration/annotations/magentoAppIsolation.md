---
group: integration-testing
version: 2.1
title: Application isolation annotation
github_link: test/integration/annotations/magentoAppIsolation.md
---

Many integration tests use the application state which, in turn, can be altered during execution of some tests.
The changes may cause the tests failures.
The integration testing framework keeps the tests isolated and provides optimal performance by default.
The isolation is managed using the `@magentoAppIsolation` annotation.

## Format

> Application isolation annotation:

```php?start_inline=1
/**
 * @magentoAppIsolation enabled|disabled
 */
```

## Usage

### In a test cases

After a test case execution, the application and the related objects are reinitialized.
It isolates the application objects from the influence of the executed test cases.
The test case isolation is mandatory; it cannot be disabled.

{:.bs-callout .bs-callout-warning}
Do not share and do not rely on sharing the application objects between test cases.


### In a test

By default, the application isolation between tests is disabled.
You can enable the automatic reinitialization (application isolation) for a test using the `@magentoAppIsolation` annotation.

> Example of a test that alters the application objects

```php?start_inline=1
/**
 * @magentoAppIsolation enabled
 */
public function testRegister()
{
    $object = new stdClass;
    Mage::register('test', $object);
    $this->assertSame($object, Mage::registry('test'));
}
```

In most cases, the controller tests depend on the application state and require reinitialization in each test.
Therefore, the test cases inherited from the `Magento_TestFramework_TestCase_ControllerAbstract` behave as if `@magentoAppIsolation` is enabled for each test.

## Default isolation

Default values for the `@magentoAppIsolation` annotation:

Test class ancestors|Test case (class)|Test (method)
---|---|---
`PHPUnit\Framework\TestCase`|enabled|disabled
`Magento_TestFramework_TestCase_ControllerAbstract`|enabled|enabled

Although `@magentoAppIsolation` cannot be changed at the test case level, developers can change it for individual tests.

You can use non-isolated tests unless they do not modify or utilize the same application areas: the same attributes of the application object, the same paths in the current configuration, or the current scope ("store").

{:.bs-callout .bs-callout-tip}
We recommended to force the application isolation if any application objects were intentionally modified within the test case.

{:.bs-callout .bs-callout-info}
The order of test execution can vary depending on the version of PHPUnit being used.