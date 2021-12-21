---
group: testing
title: Data fixture data provider annotation
---

{:.bs-callout-info}
Data Fixture Data Provider is only applicable to Parameterized Data Fixture and is currently only available for Magento Open Source contributors. It will be released for general use with Magento Open Source 2.4.5.

Data Fixture Data Provider is any valid PHP callable or valid JSON string that returns an associative array with fixture aliases as key and their respective parameters.

Use Data Fixture Data Provider if the parameters exceeds the maximum characters limit on the line with the directive `with`.

The following example shows the case when the parameters list exceeds the maximum characters limit on the line with the directive `with`.

```php?start_inline=1
class ProductTest extends \PHPUnit\Framework\TestCase
{
    /**
     * @magentoDataFixture Magento\Catalog\Test\Fixture\Product with:{"price":"12","special_price":10,"tier_prices":[{"customer_group_id":1,"qty":1,"price":9}]}
     */
    public function testSpecialPrice(): void
    {
    }
}
```

## Format

`@magentoDataFixtureDataProvider` takes an argument that points to a callable or contains inline JSON string.

```php?start_inline=1
/**
 * @magentoDataFixtureDataProvider <callable>|{}
 */
```

## Principles

1. Callable Data Fixture Data Provider MUST be publicly accessible.
1. Data Fixture Data Provider MUST return an associative array with fixture aliases as key.
1. Data Fixture Data Providers declared at a test method level have a higher priority than Data Fixture Data Providers declared at a test class level.

## Usage

### Inline JSON as Data Provider

Inline JSON data provider is a JSON string with fixture aliases as keys.

The following example shows how to use inline JSON as data provider:

```php?start_inline=1
class ProductsList extends \PHPUnit\Framework\TestCase
{
    /**
     * @magentoDataFixture Magento\Catalog\Test\Fixture\Product as:product1
     * @magentoDataFixture Magento\Catalog\Test\Fixture\Product as:product2
     * @magentoDataFixture Magento\Catalog\Test\Fixture\Product as:product3
     * @magentoDataFixtureDataProvider {"product1":{"sku":"simple1"}}
     * @magentoDataFixtureDataProvider {"product2":{"sku":"simple2"}}
     * @magentoDataFixtureDataProvider {"product2":{"sku":"simple3","status":2}}
     */
    public function testGetProductsCount(): void
    {
    }
}
```

### A callable as data provider

A callable data provider is any valid PHP callable that is publicly accessible. The following formats are supported:

-  `methodName` a public method declared in the current test class
-  `Namespace\Class::method` an external static method

The following example shows how to use test class method as data provider:

```php?start_inline=1
class ProductsList extends \PHPUnit\Framework\TestCase
{
    /**
     * @magentoDataFixture Magento\Catalog\Test\Fixture\Product as:product1
     * @magentoDataFixture Magento\Catalog\Test\Fixture\Product as:product2
     * @magentoDataFixture Magento\Catalog\Test\Fixture\Product as:product3
     * @magentoDataFixtureDataProvider getProductsCountFixtureDataProvider
     */
    public function testGetProductsCount(): void
    {
    }

    public function getProductsCountFixtureDataProvider(): array
    {
        return [
            [
                'product1' => [
                    'sku' => 'simple1'
                ],
                'product2' => [
                    'sku' => 'simple2'
                ],
                'product3' => [
                    'sku' => 'simple3',
                    'status' => Status::STATUS_DISABLED,
                ],
            ]
        ];
    }
}
```

### Test case and test method scopes

The `@magentoDataFixtureDataProvider` can be specified for a particular test or for an entire test case.
The basic rules for Data Fixture Data Provider annotation at different levels are:

-  `@magentoDataFixtureDataProvider` at a test case level, applies to all fixtures in the test case.
-  `@magentoDataFixtureDataProvider` for a particular test, only applies to the fixtures declared at a test method level.

### Restrictions

`@magentoDataFixtureDataProvider` does not recursively merge fixtures data, thus if the fixture alias is defined in multiple `@magentoDataFixtureDataProvider`, only the last value will be used. `@magentoDataFixtureDataProvider` will not apply to a fixture that has an inline data provider with `with` directive.

<!-- Link definitions -->

[parameterizedDataFixture]: ../parameterized_data_fixture.html
