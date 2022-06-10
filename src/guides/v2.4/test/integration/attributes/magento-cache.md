---
group: testing
title: Cache attribute
---

Enable or disable a [cache type][] using the `Cache` attribute.

## Format

```php?start_inline=1
#[
   Cache((string)<'all'/'enabled'/'disabled>')
] 
```

Here,

-  `<type>` is a placeholder for a cache type
-  `all` is a value for any cache type
-  `enabled` or `disabled` to enable or disable the cache respectively

## Principles

1. You can use more than one attribute for a test case or a test method.
1. Multiple attributes are applied in the given order.
1. attributes from different scopes are not merged.
1. A test method attribute completely overrides a test case attribute.
1. All cache types are disabled by default.

## Test case

`Cache` attribute at the test case level is applied to all tests.

## Test method

`Cache` attribute at a test method level configures the test only.
It completely overrides the attribute specified for the test case.

## Example

Cache attributes example:

```php
<?php

namespace Magento\Foo;

#[
   Cache('all', true)
] 
class BarTest extends \PHPUnit\Framework\TestCase
{
    public function testOne()
    {
        ...
    }

    #[
       Cache('config', false)
    ] 
    public function testTwo()
    {
        ...
    }

    #[
       Cache('all', true, 'config', false)
    ] 
    public function testThree()
    {
        ...
    }

    #[
       Cache('config', false, 'all', true)
    ] 
    public function testFour()
    {
        ...
    }
}
```

-  Each test method without the `Cache` attribute is run with all cache types enabled.
-  `testOne()` is run with all cache types enabled.
-  `testTwo()` is run with all cache types disabled.

   The `Cache('config', false)` completely overrides the test case attribute. The test case attribute wasn't applied in this case. By default, all cache types are disabled. Thus disabling any attributes does not make much sense here.
-  `testThree()` is run with all but `config` cache type enabled.
-  `testFour()` is run with all the cache types enabled.

   All cache types are disabled initially, so `Cache('config', false)` doesn't make sense here.

<!-- Link definitions -->

[cache type]: {{page.baseurl}}/config-guide/cli/config-cli-subcommands-cache.html#config-cli-subcommands-cache-clean-over
