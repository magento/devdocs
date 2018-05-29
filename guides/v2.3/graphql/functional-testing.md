---
group: graphql
title: GraphQL functional testing
version: 2.3
github_link: graphql/functional-testing.md
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
