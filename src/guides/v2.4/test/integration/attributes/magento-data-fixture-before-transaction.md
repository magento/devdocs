---
group: testing
title: Data fixture before transaction attribute
---

## Overview

Points to a class or a method which creates testing entities (fixtures) for test execution before the transaction has begun. You will need to implement a rollback method changes made here.

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

{:.bs-callout-info}
Data fixture before transaction attribute is identical to Data fixture attribute. For more details, please see the [Data Fixture attribute][] page.

<!-- LINK DEFINITIONS -->

[Data Fixture attribute]: {{ page.baseurl }}/test/integration/attributes/magento-data-fixture.html
