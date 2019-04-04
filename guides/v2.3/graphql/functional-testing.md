---
group: graphql
title: GraphQL functional testing
---

Magento provides API functional tests that can verify extension points in GraphQL. These tests serve as an example for exposing new queries via GraphQL.

## Creating a new GraphQL functional test

All GraphQL functional tests should inherit from the generic test case `Magento\TestFramework\TestCase\GraphQlAbstract`. It defines the `graphQlQuery()` method, which should be used to perform Web API calls from tests.

The following test verifies that the schema returns the correct attribute type, given the `attribute_code` and corresponding `entity_type`.

{% highlight php inline=true %}
namespace Magento\GraphQl\Catalog;

use Magento\TestFramework\TestCase\GraphQlAbstract;

class ProductAttributeTypeTest extends GraphQlAbstract
{
    public function testAttributeTypeResolver()
    {
        $query
            = <<<QUERY
{
  customAttributeMetadata(attributes:
  [
    {
      attribute_code:"description",
      entity_type:"catalog_product"
    },
    {
      attribute_code:"status",
      entity_type:"catalog_product"
    },
    {
      attribute_code:"special_price",
      entity_type:"catalog_product"
    },
    {
      attribute_code:"disable_auto_group_change",
      entity_type:"customer"
    }
    {
      attribute_code:"special_price",
      entity_type:"Magento\\\\Catalog\\\\Api\\\\Data\\\\ProductInterface"
    }
  ]
  )
  {
    items
    {
      attribute_code
      attribute_type
      entity_type
    }
  }
 }
QUERY;
        $response = $this->graphQlQuery($query);
        $expectedAttributeCodes = [
            'description',
            'status',
            'special_price',
            'disable_auto_group_change',
            'special_price'
        ];
        $entityType = [
            'catalog_product',
            'catalog_product',
            'catalog_product',
            'customer',
            \Magento\Catalog\Api\Data\ProductInterface::class
        ];
        $attributeTypes = ['String', 'Int', 'Float','Boolean', 'Float'];
        $this->assertAttributeType($attributeTypes, $expectedAttributeCodes, $entityType, $response);
    }

{% endhighlight %}

## Using the default GraphQlQueryTest

The `\Magento\GraphQl\TestModule\GraphQlQueryTest.php` test case uses two test modules to determine whether the mechanisms for GraphQL extensibility work as expected. It illustrates best practices for extending an existing GraphQL endpoint.

* `TestModuleGraphQlQuery` - This bare-bones module defines a `testItem` endpoint with the queryable attributes `item_id` and `name`. It's located at `<installdir>/dev/tests/api-functional/_files/TestModuleGraphQlQuery`.
* `TestModuleGraphQlQueryExtension` - This module extends `TestModuleGraphQlQuery`, adding the `integer_list` extension attribute. It's located at `<installdir>/dev/tests/api-functional/_files/TestModuleGraphQlQueryExtension`.


## Using fixtures

Fixtures, which are part of the testing framework, prepare a precondition in the system for further testing. For example, when you test the ability to add a product to the shopping cart, the precondition is that a product must be available for testing. 

The following fixture creates a simple product with predefined attributes.

```php
<?php
use Magento\Catalog\Model\ProductFactory;
use Magento\TestFramework\Helper\Bootstrap;
use Magento\Catalog\Model\ResourceModel\Product as ProductResource;

$productFactory = Bootstrap::getObjectManager()->get(ProductFactory::class);
$product = $productFactory->create();
$product->setTypeId(\Magento\Catalog\Model\Product\Type::TYPE_VIRTUAL)
    ->setId(21)
    ->setAttributeSetId(4)
    ->setWebsiteIds([1])
    ->setName('Virtual Product')
    ->setSku('virtual-product')
    ->setPrice(10)
    ->setTaxClassId(0)
    ->setVisibility(\Magento\Catalog\Model\Product\Visibility::VISIBILITY_BOTH)
    ->setStatus(\Magento\Catalog\Model\Product\Attribute\Source\Status::STATUS_ENABLED)
    ->setStockData(
        [
            'qty' => 100,
            'is_in_stock' => 1,
            'manage_stock' => 1,
        ]
    );
/** @var ProductResource $productResource */
$productResource = Bootstrap::getObjectManager()->create(ProductResource::class);
$productResource->save($product);
```

To use this fixture in a test, add it to the test's annotation in the following manner:

```php
    /**
     * @magentoApiDataFixture Magento/Catalog/_files/product_virtual.php
     */
    public function testAddVirtualProductToShoppingCart()
    {
      // Test body
    }
```

The fixture now executes on every test run. 

Every fixture should have a rollback. The rollback is a set of operations that remove changes introduced by the fixture from the system once the test is completed. 

The following fixture rollback removes the newly-created product from the database.

```php
<?php
use Magento\Catalog\Api\ProductRepositoryInterface;
use Magento\Framework\Exception\NoSuchEntityException;
use Magento\Framework\Exception\StateException;
use Magento\TestFramework\Helper\Bootstrap;

$registry = Bootstrap::getObjectManager()->get(\Magento\Framework\Registry::class);

$registry->unregister('isSecureArea');
$registry->register('isSecureArea', true);

$productRepository = Bootstrap::getObjectManager()
    ->create(ProductRepositoryInterface::class);

try {
    $product = $productRepository->get('virtual-product', false, null, true);
    $productRepository->delete($product);
} catch (NoSuchEntityException $exception) {
    //Product already removed
} catch (StateException $exception) {
}

$registry->unregister('isSecureArea');
$registry->register('isSecureArea', false);

```

A fixture rollback filename should correspond to the original fixture filename postfixed by `_rollback` keyword. (For example, `virtual_product_rollback.php`.) 
Magento provides fixtures in the `dev/tests/integration/testsuite/Magento/<ModuleName>/_files` directory. Use these fixtures whenever possible. When you create your own fixture, also create a proper rollback.
