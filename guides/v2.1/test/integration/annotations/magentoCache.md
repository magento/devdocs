---
group: integration-testing
version: 2.1
title: Cache Annotation
github_link: /test/integration/annotations/magentoCache.md
---

Magento integration testing framework allows controlling whether certain cache types are enabled or disabled for a given test.
This article is a specification for @magentoCache annotation for integration tests.

## Format

> Enable or disable cache type

```php?start_inline=1
/** 
 * @magentoCache [<type>|all] [enabled|disabled]
 */ 
```

Here, 
* `<type>` is a cache type
* `all` literal is a wildcard for all cache types
* `enabled` or `disabled` are to enable or disable the cache respectively

## Scope

### Test case

Configures the whole test case to run with specified configuration of cache types. Will be overridden by `@magentoCache` directive in test methods, if any.

### Test method

Configures a single test to run with specified configuration of cache types.

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

Note:

* The class annotation ("@magentoCache all enabled") will cause every test method to run with all cache types enabled, unless a method defines own `"@magentoCache"`
* If a method defines own `"@magentoCache"`, it will completely override the value that may have been set for class. The values between class and method are not combined in any way.
* There may be multiple `"@magentoCache"` directives specified and their order matters:
* In `testThree()`, first all cache types will be enabled, but then `"config"` will be disabled
* In `testFour()`, the first `"@magentoCache` config disabled" is pointless, because it will be overridden by the following wildcard