---
group: integration-testing
version: 2.1
title: Application isolation annotation
github_link: test/integration/annotations/magentoAppIsolation.md
---

Many integration tests rely on application state, which can be altered during execution of some tests.
Such changes to the environment may cause the failure of other tests.
The integration testing framework uses default policies that keep tests relatively isolated and provide optimal performance simultaneously.
Isolation can be controlled using the `@magentoAppIsolation` annotation.

## Format

> Application isolation annotation

```php?start_inline=1
/**
 * @magentoAppIsolation enabled|disabled
 */
```

## Scope

### Test cases isolation

After completion of each test case the application and all related objects are reinitialized.
Such reinitialization allows test cases to be developed based on the assumption that application objects will not have been polluted by previous test cases.
Isolation between test cases is mandatory and cannot be disabled.
That allows to narrow down the possibility of isolation issues to a test case level.

Do not share, and don't rely on sharing, application object(s) between test cases.
{:.bs-callout .bs-call-warning}

### Tests isolation

By default, application isolation is disabled between tests.
Automatic reinitialization (application isolation) can be enabled for a test using the `@magentoAppIsolation` annotation

> Test that Pollutes Application Objects

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

Controller tests usually depend strongly on the application state and require reinitialization per test.
Therefore all test cases that inherit `Magento_TestFramework_TestCase_ControllerAbstract` behave as if `@magentoAppIsolation` is enabled for each test.

## Default isolation

Default values for @magentoAppIsolation annotation:

Test class ancestors|Test case (class)|Test (method)
---|---|---
`PHPUnit_Framework_TestCase`|enabled|disabled
`Magento_TestFramework_TestCase_ControllerAbstract`|enabled|enabled

While `@magentoAppIsolation` cannot be changed at the test case level, developers can change it for individual tests.

It is acceptable to have tests non-isolated, as long as they don't modify or utilize the same application areas: the same attributes of an application object, the same paths in the current configuration, or the current scope ("store").
Forcing app isolation is recommended if any application object is intentionally modified within the test case.

Do not consolidate non-isolated tests that rely upon dependencies and execution order provided by the PHPUnit framework.
PHPUnit does not guarantee test execution order, and the order of execution can vary depending on the version of PHPUnit being used.
{:.bs-callout .bs-call-info}

## Static properties cleanup

To reduce memory leaks caused by the `SimpleXml` object, was implemented a workaround to clear static properties of all defined classes (except blacklisted) at the end of `Magento_TestFramework_TestCase_ControllerAbstract` based test case execution.