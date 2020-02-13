---
group: graphql
title: Extend an existing GraphQL schema
contributor_name: Adarsh Manickam
contributor_link: https://github.com/drpayyne
---

The Magento GraphQL system is built in a way so that you can extend existing GraphQL schemas to add more fields, and modify existing resolver behavior, among other extension points. This works similar to the XML merging mechanism present. All `schema.graphqls` files are merged together to a single schema file. In this process, all nodes with the same type (type, interface, enum, etc.) and name are merged together and recursively extended/overriden, just like how XML merging works.

## Extend schema

The first step to retrieve a custom field along with an existing query is to extend the appropriate schema object.

For example, we are going to change the description of an existing field (`attribute_set_id`), and add a new field (`attribute_set_name`) when the products are queried. 

The simplified structure of the query schema to get products is:

```
schema {
    query: Query
    ...
}

type Query {
    products (...): Products
    ...
}

type Products {
    items: [ProductInterface]
    ...
}

interface ProductInterface {
    id: Int
    name: String
    sku: String
    ...
}
```

So we'll need to extend the `ProductInterface` since that is the schema object for a product. We can do this by creating a new file `schema.graphqls` in our custom module's (`OrangeCo/CustomGQL`) `etc` directory.

`OrangeCo_CustomGQL/etc/schema.graphqls`
```
interface ProductInterface {
    attribute_set_id: Int
        @doc(description: "ID of the attribute set assigned to the product")
    attribute_set_name: String 
        @doc(description: "Name of attribute set assigned to the product")
        @resolver(class: "\\Orange\\CustomGQL\\Model\\Resolver\\ProductAttributeSetNameResolver")
}
```

The above schema file is merged with the schema present at `Magento_CatalogGraphQl/etc/schema.graphqls` which contains the original `ProductInterface` object. Let's take the case of the two fields described above: 
-  The `attribute_set_id` field is already present in the original schema, so the field described in our new schema will override field present in the `ProductInterface` object. We are changing only the `@doc` annotation content here to demonstrate the working.
-  The `attribute_set_name` field is not present in the orignal schema, so the field is added to the `ProductInterface` object by extending it. For our new field, we set a description and a resolver class to resolve the data to be returned under this field.

## Resolve field value

In the resolver, we get the relevant data based on the `$value` and `$args` passed to the `resolve` method. This can be done using a repository interface or a resource model of the custom attribute.

In our example scenario mentioned above, we use `Magento\Catalog\Api\AttributeSetRepositoryInterface` to get the attribute set name for a given attribute set ID obtained from the `$value` argument and return that as the resolution for the field.

`Orange_CustomGQL/Model/Resolver/ProductAttributeSetNameResolver.php`
```php
<?php

namespace Orange\CustomGQL\Model\Resolver;

use Magento\Catalog\Api\AttributeSetRepositoryInterface;
use Magento\Framework\GraphQl\Config\Element\Field;
use Magento\Framework\GraphQl\Query\ResolverInterface;
use Magento\Framework\GraphQl\Schema\Type\ResolveInfo;

/**
 * Class to resolve custom attribute_set_name field in product GraphQL query
 */
class ProductAttributeSetNameResolver implements ResolverInterface
{
    /**
     * @var AttributeSetRepositoryInterface
     */
    private $setRepository;

    public function __construct(AttributeSetRepositoryInterface $setRepository)
    {
        $this->setRepository = $setRepository;
    }

    public function resolve(Field $field, $context, ResolveInfo $info, array $value = null, array $args = null)
    {
        return $this->setRepository->get($value['attribute_set_id'])->getAttributeSetName();
    }
}
```

## Related Topics

*  [Define the GraphQL schema for a module]({{ page.baseurl }}/graphql/develop/create-graphqls-file.html)
*  [Resolvers]({{ page.baseurl }}/graphql/develop/resolvers.html)

