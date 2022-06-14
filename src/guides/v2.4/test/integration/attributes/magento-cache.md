---
group: testing
title: Cache attribute
---

Enable or disable a [cache type][] using the `Cache` attribute.

## Format

```php?start_inline=1
#[
   Cache(string $type, bool $status)
]
```

### Parameters

- **type**
  - The cache type. Or "all" to change the status of all cache types.
- **status**
  - Accepts TRUE or FALSE to enable or disable cache respectively.

## Principles

1. You can use more than one attribute for a test case or a test method.
1. Multiple attributes are applied in the given order.
1. Attributes from different scopes are not merged.
1. A test method attribute completely overrides a test class attribute.
1. All cache types are disabled by default.

## Test class attribute

`Cache` attribute at the test case level is applied to all tests.

## Test method attribute

`Cache` attribute at a test method level configures the test method only.
It completely overrides the attribute specified for the test class.

## Example

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
       Cache('all', true),
       Cache('config', false)
    ]
    public function testThree()
    {
        ...
    }

    #[
       Cache('config', false),
       Cache('all', true)
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

   The `Cache('config', false)` completely overrides the test method attribute. The test method attribute wasn't applied in this case. By default, all cache types are disabled. Thus disabling any attributes does not make much sense here.
-  `testThree()` is run with all but `config` cache type enabled.
-  `testFour()` is run with all the cache types enabled.

   All cache types are disabled initially, so `Cache('config', false)` doesn't make sense here.

<!-- Link definitions -->

[cache type]: {{page.baseurl}}/config-guide/cli/config-cli-subcommands-cache.html#config-cli-subcommands-cache-clean-over
