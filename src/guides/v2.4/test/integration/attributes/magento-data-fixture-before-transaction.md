---
group: testing
title: Data fixture before transaction attribute
---

## Overview

## Format

```php?start_inline=1
#[
    DataFixtureBeforeTransaction(string $type, array $data = [], ?string $as = null)
]
```

### Parameters

 - **type**
   - The fully qualified name of a class that implements `Magento\TestFramework\Fixture\DataFixtureInterface` or `Magento\TestFramework\Fixture\RevertibleDataFixtureInterface`.
 - **data**
   - The optional array of data passed on to the fixture.
 - **as**
   - The fixture alias that will be used as a reference to retrieve the data returned by the fixture and also as a reference in other fixtures parameters.
