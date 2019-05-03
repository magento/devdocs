---
group: graphql
title: Identity class
---

If your module caches custom data beyond the default full page cache (which includes product, category, and CMS data), then you must create an `Identity` class for the module. Place this class in your module’s `Model/Resolver` directory.

An Identity class implements `Magento\Framework\GraphQl\Query\Resolver\IdentityInterface`. Your Identity class must contain the following elements:

* A private string that specifies the path to the class that defines the module’s cache tag.

* Your implementation of the `getIdentities(array $resolvedData)` method. Generally, this method takes an array of query results and creates a new cache tag for each entity based on the original string and the unique identifier for each item to be cached. For example, the getIdentities method for the `CatalogGraphQl` component appends the product ID to the `cat_p` cache tag, such as `cat_p_1`, `cat_p_2`, and so on.

Use the following example as the basis for your custom `Identity` class:

```php
<?php
declare(strict_types=1);

namespace PathToModule\Model\Resolver\MyModule;

use Magento\Framework\GraphQl\Query\IdentityResolverInterface;

/**
 * Get identities from resolved data
 */
class MyIdentity implements IdentityInterface
{
    private $cacheTag = \Path\To\Model\Class::CACHE_TAG;

    /**
     * Get identity tags from resolved data
     *
     * @param array $resolvedData
     * @return int[]|string[]
     */
    public function getIdentities(array $resolvedData): array
    {
       // Your code
    }
}
```

Use the `@cache` directive in your module’s [`graphqls` file]({{page.baseurl}}/graphql/develop/create-graphqls-file.html) to specify the location to your `Identity` class. Your module’s `graphqls` file must point to your `Identity` class, as shown below:

```text
    category (
        id: Int @doc(description: "Id of the category")
    ): CategoryTree
    @resolver(class: "Magento\\CatalogGraphQl\\Model\\Resolver\\CategoryTree") @doc(description: "The category query searches for categories that match the criteria specified in the search and filter attributes") @cache(cacheIdentity: "Magento\\CatalogGraphQl\\Model\\Resolver\\Category\\CategoryTreeIdentity")
}
```
