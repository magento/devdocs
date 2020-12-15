---
group: graphql
title: Extend an existing GraphQL schema
contributor_name: Adarsh Manickam
contributor_link: https://github.com/drpayyne
---

You can extend the default Magento GraphQL schema to add attributes and data types, modify existing resolver behavior, and add features using other extension points. GraphQL uses _stitching_ to assemble a single unified schema out of the many schemas defined in individual modules. All `schema.graphqls` files are stitched together to a single schema. In this process, all nodes with the same type (such as type, interface, and enum) and name are stitched together and recursively extended/overridden. This process is similar to how XML merging works.

## Extend the schema

The first step to retrieve a custom field in an existing query is to extend the appropriate schema object.

In the following example, we will change the description of an existing field (`attribute_set_id`) and add a new field (`attribute_set_name`) to the GraphQL schema for the `products` query. Common use cases require adding fields to the database. [Declarative Schema]({{ page.baseurl }}/extension-dev-guide/declarative-schema/) describes how to add a custom field to the database.

The simplified structure of the query schema to get products is:

```graphql
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

We need to extend the `ProductInterface`, since that is the schema object for a product. We can do this by creating a `schema.graphqls` file in our custom module's (`OrangeCo/CustomGQL`) `etc` directory.

`OrangeCo_CustomGQL/etc/schema.graphqls`

```graphql
interface ProductInterface {
    attribute_set_id: Int
        @doc(description: "ID of the attribute set assigned to the product")
    attribute_set_name: String
        @doc(description: "Name of attribute set assigned to the product")
        @resolver(class: "\\Orange\\CustomGQL\\Model\\Resolver\\ProductAttributeSetNameResolver")
}
```

The above schema file is merged with the schema present at `Magento_CatalogGraphQl/etc/schema.graphqls` which contains the original `ProductInterface` object. Our schema file contains the following fields:

-  The `attribute_set_id` field is already present in the original schema, so the field described in our new schema will override the field present in the `ProductInterface` object. This example only changes the `@doc` annotation content to demonstrate how the process works.

-  The `attribute_set_name` field is not present in the orignal schema, so the field is added to the `ProductInterface` object by extending it. For our new field, we set a description and a resolver class to resolve the data to be returned.

## Resolve the field value

In the resolver, we get the relevant data based on the `$value` and `$args` passed to the `resolve` method. This can be done using a repository interface or a resource model of the custom field.

In our example scenario, we use `Magento\Catalog\Api\AttributeSetRepositoryInterface` to get the attribute set name for a given attribute set ID obtained from the `$value` argument and return that as the resolution for the field.

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

## Extend configuration data

You can add your own configuration to the `storeConfig` query within your own module.

To do this, configure the constructor argument `extendedConfigData` in the `argument` node in your area-specific `etc/graphql/di.xml` file.

The following example adds an array-item to the `extendedConfigData` array within the construct of the `StoreConfigDataProvider`.

```xml
<?xml version="1.0" ?>
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:ObjectManager/etc/config.xsd">
  <type name="Magento\StoreGraphQl\Model\Resolver\Store\StoreConfigDataProvider">
    <arguments>
      <argument name="extendedConfigData" xsi:type="array">
        <item name="section_group_field" xsi:type="string">section/group/field</item>
      </argument>
    </arguments>
  </type>
</config>
```

You must also extend the type `storeConfig` within in the `etc/schema.graphqls` file, as shown below:

```graphql
type StoreConfig {
    section_group_field : String  @doc(description: "Extended Config Data - section/group/field")
}
```

## Related topics

-  [Define the GraphQL schema for a module]({{ page.baseurl }}/graphql/develop/create-graphqls-file.html)
-  [Resolvers]({{ page.baseurl }}/graphql/develop/resolvers.html)
-  [Declarative schema]({{ page.baseurl }}/extension-dev-guide/declarative-schema/)
