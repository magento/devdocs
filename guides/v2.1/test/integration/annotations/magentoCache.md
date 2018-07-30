---
group: integration-testing
version: 2.1
title: Cache Annotation
github_link: test/integration/annotations/magentoCache.md
---

The Magento integration testing framework enables you to enable or disable a cache type using the `@magentoCache` annotation.

## Format

> Enable or disable cache type

```php?start_inline=1
/**
 * @magentoCache [<type>|all] [enabled|disabled]
 * @magentoCache [<type>|all] [enabled|disabled]
 */ 
```

Here, 
* `<type>` is a placeholder for a cache type
* `all` is a value for any cache type
* `enabled` or `disabled` are to enable or disable the cache respectively

## Principles

1. It is possible to use more than one annotation for a test case or a test method.
2. The annotations are applied in the given order.
3. The annotations from different scopes are not merged.
4. A test method annotation completely overrides the test case annotation.
5. Disabling the particular cache type works only if it was enabled beforehand.

## Scope

### Test case

The `@magentoCache` annotation for the entire test case runs all tests with the specified cache types.

### Test method

The `@magentoCache` annotation for a test method configures the test to run with the specified cache types.
It completely overrides the annotation specified for the test case.

## Example

> Cache annotations example

```php
<?php
namespace Magento\Foo;
 
/**
 * @magentoCache all enabled
 */
class BarTest extends \PHPUnit_Framework_TestCase
{
    public function testOne()
    {
        ...
    }
 
    /**
     * @magentoCache config disabled
     */
    public function testTwo()
    {
        ...
    }
 
    /**
     * @magentoCache all enabled
     * @magentoCache config disabled
     */
    public function testThree()
    {
        ...
    }
 
    /**
     * @magentoCache config disabled
     * @magentoCache all enabled
     */
    public function testFour()
    {
        ...
    }
}
```

Each test method without the `@magentoCache` annotation in `BarTest` is run with all cache types enabled.

The `testOne()` is run with all cache types enabled.

The `testTwo()` is run without any cache type enabled. It does not make sense to disable cache types that have not been enabled.

The `testThree()` is run with all the cache types enabled, excepting the `config` cache type.

The `testFour()` is run with all the cache types enabled.