---
group: graphql
title: Identity class
---

If you create a cacheable query (similar to those for product, category, and CMS data), then you must create an `Identity` class for the module. The class must return unique identifiers for cache tags that can be invalidated when an entity changes. Place this class in your module’s `Model/Resolver` directory.

An Identity class implements `Magento\Framework\GraphQl\Query\Resolver\IdentityInterface`. Your Identity class must contain the following elements:

*  Choose a cache tag prefix for the entity.

*  Your implementation of the `getIdentities(array $resolvedData)` method. The method maps the array of entities data to an array of cache tags, one for each entity. Generally, this method takes an array of query results and creates a cache tag for each entity based on the original string and the unique identifier for each item to be cached. For example, the `getIdentities` method for the `CatalogGraphQl` component appends the product ID to the `cat_p` cache tag prefix, such as `cat_p_1`, `cat_p_2`, and so on. Usually the method also adds the cache tag without an appended ID to the result array, so all cache records can be removed at once, and not only cache records for specific entities.

Use following example as the basis for your custom `Identity` class:

```php
<?php
declare(strict_types=1);

namespace PathToModule\Model\Resolver\MyModule;

use Magento\Framework\GraphQl\Query\Resolver\IdentityInterface;

/**
 * Get identities from resolved data
 */
class MyIdentity implements IdentityInterface
{
    private $cacheTag = \PathToModule\Model\MyEntity::CACHE_TAG;

    /**
     * Get identity tags from resolved data
     *
     * @param array $resolvedData
     * @return string[]
     */
    public function getIdentities(array $resolvedData): array
    {
        $ids = [];
        $items = $resolvedData['items'] ?? [];
        foreach ($items as $item) {
            $ids[] = sprintf('%s_%s', $this->cacheTag, $item['entity_id']);
        }
        if (!empty($ids)) {
            $ids[] = $this->cacheTag;
        }
        return $ids;
    }
}
```

Use the `@cache` directive in your module’s [`graphqls` file]({{page.baseurl}}/graphql/develop/create-graphqls-file.html) to specify the location to your `Identity` class. Your module’s `graphqls` file must point to your `Identity` class, as shown below:

```text
      categoryList(
    filters: CategoryFilterInput @doc(description: "Identifies which Category filter inputs to search for and return.")
    ): [CategoryTree] @doc(description: "Returns an array of categories based on the specified filters.") @resolver(class: "Magento\\CatalogGraphQl\\Model\\Resolver\\CategoryList") @cache(cacheIdentity: "Magento\\CatalogGraphQl\\Model\\Resolver\\Category\\CategoriesIdentity")
}
```
