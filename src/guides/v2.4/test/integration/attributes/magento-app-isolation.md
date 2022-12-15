---
group: testing
title: Application isolation attribute
redirect_to: https://developer.adobe.com/commerce/testing/guide/integration/attributes/app-isolation/
status: migrated
---

An application state can be changed during test execution.
Such changes can cause a false test failure.
The integration testing framework keeps the tests isolated and provides optimal performance by default.
Isolation is managed using the `AppIsolation` attribute.

{:.bs-callout-info}
Test execution order can vary depending on a PHPUnit version.

## Format

```php?start_inline=1
#[
    AppIsolation(bool $state = true)
]
```

### Parameters

-  **state**
   -  Accepts TRUE or FALSE to enable or disable app isolation respectively.

## Test class attribute

The application and related objects are reinitialized after each test class execution.
This behavior helps to isolate application objects in different test classes.
The test class isolation is mandatory and cannot be disabled.

{:.bs-callout-warning}
Do not share and do not rely on sharing the application objects between test methods.

## Test method

By default, the application isolation (that is automatic reinitialization) in tests method is disabled.
To enable the application isolation for a test method, use the `AppIsolation` attribute.

Example:

```php?start_inline=1
#[
    AppIsolation(true)
]
public function testGetAddressById()
{
    $addressId = 2;
    $address = $this->repository->getById($addressId);
    $this->assertEquals($this->_expectedAddresses[1], $address);
}
```

{:.bs-callout-info}
In most cases, controller tests depend on the application state and require reinitialization in each test method.
Thus, the test classes inherited from the `\Magento\TestFramework\TestCase\AbstractController` behave as if `AppIsolation` is enabled for each test method.

## Defaults

Default values for the `AppIsolation` attribute:

| Test class ancestors                                 | Test class | Test method |
|------------------------------------------------------|------------|-------------|
| `\PHPUnit\Framework\TestCase`                        | enabled    | disabled    |
| `\Magento\TestFramework\TestCase\AbstractController` | enabled    | enabled     |

`AppIsolation` cannot be disabled at the test class level.

You can use non-isolated tests unless they do not modify or utilize the same application areas, such as:

-  Same attributes of an application object.
-  Same paths in a current configuration or current scope (for example "store").

{:.bs-callout-tip}
Set up application isolation if any application objects were intentionally modified within the test class.