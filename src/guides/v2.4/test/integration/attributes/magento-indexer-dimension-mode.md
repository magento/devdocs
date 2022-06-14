---
group: testing
title: Indexer dimension mode
---

## Overview

Sets the indexer dimension mode for the test run.

## Format

```php?start_inline=1
#[
    IndexerDimensionMode(string $indexer, string $dimension)
]
```

### Parameters

-  **indexer**
   -  The name of the indexer code.
-  **dimension**
   -  The name of the dimension mode.

## Principles

1. You can use more than one attribute for a test case or a test method.
2. Multiple attributes are applied in the given order.
3. Attributes from different scopes are not merged.
4. A test method attribute completely overrides a test class attribute.

## Test class attribute

`IndexerDimensionMode` attribute at the test case level is applied to all tests.

## Test method attribute

`IndexerDimensionMode` attribute at a test method level configures the test method only.
It completely overrides the attribute specified for the test class.

## Example

```php?start_inline=1
#[
   DbIsolation(false),
   IndexerDimensionMode('catalog_product_price', 'website_and_customer_group')
]
class FixedBundlePriceCalculatorWithDimensionTest extends \PHPUnit\Framework\TestCase
{
    public function testPriceForFixedBundle(array $strategyModifiers, array $expectedResults)
    {
    }
}
```