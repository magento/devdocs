---
group: testing
title: Data fixture before transaction attribute
migrated_to: https://developer.adobe.com/commerce/testing/guide/integration/attributes/data-fixture-before-transaction/
layout: migrated
---

## Overview

The data fixture before transaction attribute is an extension of [Data Fixture attribute][] that applies fixtures before the transaction and reverts applied fixtures after the transaction. With disabled DB isolation, this attribute is identical to the [Data Fixture attribute][]

## Format

```php?start_inline=1
#[
    DataFixtureBeforeTransaction(string $type, array $data = [], ?string $as = null)
]
```

### Parameters

-  **type**
   -  The fully qualified name of a class that implements `Magento\TestFramework\Fixture\DataFixtureInterface` or `Magento\TestFramework\Fixture\RevertibleDataFixtureInterface`.
-  **data**
   -  The optional array of data passed on to the fixture.
-  **as**
   -  The fixture alias that will be used as a reference to retrieve the data returned by the fixture and also as a reference in other fixtures parameters.

### Example

In the following example, the fixtures supplied to the `DataFixtureBeforeTransaction` attribute are applied before the transaction, whereas fixtures supplied to the `DataFixture` attribute are applied within the transaction.

```php?start_inline=1
class CategoryTest extends TestCase
{
    #[
        DataFixtureBeforeTransaction(ScheduleMode::class, ['indexer' => 'catalog_category_product']),
        DataFixtureBeforeTransaction(ScheduleMode::class, ['indexer' => 'catalog_product_category']),
        DataFixture(Category::class, as: 'category'),
        DataFixture(Product::class, ['category_ids' => ['$category.id$']], 'product1'),
        DataFixture(Product::class, ['category_ids' => ['$category.id$']], 'product2'),
    ]
    public function testUpdateProductsPositionsWithIndexerOnSchedule(): void
    {

    }
}
```

<!-- LINK DEFINITIONS -->

[Data Fixture attribute]: {{ page.baseurl }}/test/integration/attributes/magento-data-fixture.html
