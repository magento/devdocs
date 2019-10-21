---
group: testing
title: Cache Annotation
---

Enable or disable a [cache type][] using the `@magentoCache` annotation.

## Format

```php?start_inline=1
/**
 * @magentoCache [<type>|all] [enabled|disabled]
 * @magentoCache [<type>|all] [enabled|disabled]
 */
```

Here,

-  `<type>` is a placeholder for a cache type
-  `all` is a value for any cache type
-  `enabled` or `disabled` to enable or disable the cache respectively

## Principles

1. You can use more than one annotation for a test case or a test method.
1. Multiple annotations are applied in the given order.
1. Annotations from different scopes are not merged.
1. A test method annotation completely overrides a test case annotation.
1. All cache types are disabled by default.

## Test case

`@magentoCache` annotation at the test case level is applied to all tests.

## Test method

`@magentoCache` annotation at a test method level configures the test only.
It completely overrides the annotation specified for the test case.

## Example

Cache annotations example:

```php
<?php

namespace Magento\Foo;

/**
 * @magentoCache all enabled
 */
class BarTest extends \PHPUnit\Framework\TestCase
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

-  Each test method without the `@magentoCache` annotation is run with all cache types enabled.
-  `testOne()` is run with all cache types enabled.
-  `testTwo()` is run with all cache types disabled.

   The `@magentoCache config disabled` completely overrides the test case annotation. The test case annotation wasn't applied in this case. By default, all cache types are disabled. Thus any disabling annotations does not make much sense here.
-  `testThree()` is run with all but `config` cache type enabled.
-  `testFour()` is run with all the cache types enabled.

   All cache types are disabled initially, so `@magentoCache config disabled` doesn't make sense here.

<!-- Link definitions -->

[cache type]: {{page.baseurl}}/config-guide/cli/config-cli-subcommands-cache.html#config-cli-subcommands-cache-clean-over
