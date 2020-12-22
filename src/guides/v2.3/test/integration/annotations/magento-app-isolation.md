---
group: testing
title: Application isolation annotation
---

An application state can be changed during test execution.
Such changes can cause a false test failure.
The integration testing framework keeps the tests isolated and provides optimal performance by default.
Isolation is managed using the `@magentoAppIsolation` annotation.

{:.bs-callout-info}
Test execution order can vary depending on a PHPUnit version.

## Format

Application isolation annotation:

```php?start_inline=1
/**
 * @magentoAppIsolation enabled|disabled
 */
```

## Test case annotation

The application and related objects are reinitialized after each test case execution.
This behavior helps to isolate application objects in different test cases.
The test case isolation is mandatory and cannot be disabled.

{:.bs-callout-warning}
Do not share and do not rely on sharing the application objects between test cases.

## Test annotation

By default, the application isolation (that is automatic reinitialization) in tests is disabled.
To enable the application isolation for a test, use the `@magentoAppIsolation` annotation.

Example:

```php?start_inline=1
/**
 * @magentoAppIsolation enabled
 */
public function testGetAddressById()
{
    $addressId = 2;
    $address = $this->repository->getById($addressId);
    $this->assertEquals($this->_expectedAddresses[1], $address);
}
```

{:.bs-callout-info}
In most cases, controller tests depend on the application state and require reinitialization in each test.
Thus, the test cases inherited from the `\Magento\TestFramework\TestCase\AbstractController` behave as if `@magentoAppIsolation` is enabled for each test.

## Defaults

Default values for the `@magentoAppIsolation` annotation:

Test class ancestors                                 | Test case (class) | Test (method)
-----------------------------------------------------|-------------------|--------------
`\PHPUnit\Framework\TestCase`                        | enabled           | disabled
`\Magento\TestFramework\TestCase\AbstractController` | enabled           | enabled

`@magentoAppIsolation` cannot be disabled at the test case level.

You can use non-isolated tests unless they do not modify or utilize the same application areas such as:

-  same attributes of an application object.
-  same paths in a current configuration or current scope (for example "store").

{:.bs-callout-tip}
Set up application isolation if any application objects were intentionally modified within the test case.