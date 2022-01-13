---
group: php-developer-guide
title: Create a cache type
---

A *cache type* enables you to specify what is cached and enables merchants to clear that [cache type](https://glossary.magento.com/cache-type) using the [Cache](https://glossary.magento.com/cache) Management page in the [Admin](https://glossary.magento.com/magento-admin).

The tag *scope* provides a mechanism for a cache type.

## Cache type configuration {#m2devgde-cache-type-configuration}

Declare a new cache type in the `<module_dir>/etc/cache.xml` file with the following attributes:

| Attribute | Required? | Description |
| --- | --- | --- |
| `name` | Yes | A unique cache type ID |
| `translate` | No | Parameters that will be translated on the "Cache Management" page |
| `instance` | Yes | The cache type model class |

Also, cache type configuration have the following required parameters:

| Parameter | Description |
| --- | --- |
| `label` | The "Cache Type" field to be displayed on the `System` > `Tools` > `Cache Management` page. |
| `description` | The "Description" field to be displayed on the `System` > `Tools` > `Cache Management` page. |

For example:

```xml
<?xml version="1.0"?>
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Cache/etc/cache.xsd">
    <type name="%cache_type_id%" translate="label,description" instance="VendorName\ModuleName\Model\Cache\Type\CacheType">
        <label>Cache Type Label</label>
        <description>Cache Type Description</description>
    </type>
</config>
```

You may declare multiple cache types.

## Cache type model {#m2devgde-cache-type-model}

```php
<?php
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

namespace VendorName\ModuleName\Model\Cache\Type;

use Magento\Framework\App\Cache\Type\FrontendPool;
use Magento\Framework\Cache\Frontend\Decorator\TagScope;

/**
 * System / Cache Management / Cache type "Your Cache Type Label"
 */
class CacheType extends TagScope
{
    /**
     * Cache type code unique among all cache types
     */
    const TYPE_IDENTIFIER = '%cache_type_id%';

    /**
     * The tag name that limits the cache cleaning scope within a particular tag
     */
    const CACHE_TAG = '%CACHE_TYPE_TAG%';

    /**
     * @param FrontendPool $cacheFrontendPool
     */
    public function __construct(FrontendPool $cacheFrontendPool)
    {
        parent::__construct(
            $cacheFrontendPool->get(self::TYPE_IDENTIFIER),
            self::CACHE_TAG
        );
    }
}
```

You must specify the following parameters:

*  `VendorName\ModuleName` defines the name of a [module](https://glossary.magento.com/module) that uses a cache type. A module can use several cache types and a cache type can be used in several modules.
*  `%cache_type_id%` defines the unique identifier of a cache type.
*  `%CACHE_TYPE_TAG%` defines the unique tag to be used in the cache type scoping.

## Store data in a custom cache type {#m2devgde-store-data-cache-type}

To store serialized data in a custom cache, follow these steps:

1. Pass the argument to the constructor `Magento\Framework\App\CacheInterface` `$cache` of a required class (Repository, Model, Block, etc).

```php
/**
 * @param CacheInterface $cache
 * @param SerializerInterface $serializer
 */
public function __construct(CacheInterface $cache, SerializerInterface $serializer)
{
    $this->cache = $cache;
    $this->serializer = $serializer;
}
```

2. Store data in the cache.

```php
$cacheKey  = \VendorName\ModuleName\Model\Cache\Type\CacheType::TYPE_IDENTIFIER;
$cacheTag  = \VendorName\ModuleName\Model\Cache\Type\CacheType::CACHE_TAG;

$storeData = $this->cache->save(
    $this->serializer->serialize($cacheData),
    $cacheKey,
    [$cacheTag],
    86400
);
```

## Retrieve data from custom cache type {#m2devgde-retrieve-data-cache-type}

Retrieve data from the cache with:

```php
$cacheKey  = \VendorName\ModuleName\Model\Cache\Type\CacheType::TYPE_IDENTIFIER;

$data = $this->serializer->unserialize($this->cache->load($cacheKey));
```

## Invalidate custom cache type {#m2devgde-invalidate-cache-type}

To invalidate a custom cache type, follow these steps:

1. Pass the argument to the constructor `Magento\Framework\App\Cache\TypeListInterface` `$typeList` of a required class (Repository, Model, Block, etc).

```php
/**
 * @param TypeListInterface $typeList
 */
public function __construct(TypeListInterface $typeList)
{
    $this->typeList = $typeList;
}
```

2. Invalidate the cache

```php
$cacheKey  = \VendorName\ModuleName\Model\Cache\Type\CacheType::TYPE_IDENTIFIER;

$this->typeList->invalidate($cacheKey);
```

## Flush custom cache type {#m2devgde-flush-cache-type}

The custom cache type can be flushed in the following ways:

*  Go to System -> Cache Management and flush the custom cache type
*  Programmatically, using the TypeList.

```php
$cacheKey  = \VendorName\ModuleName\Model\Cache\Type\CacheType::TYPE_IDENTIFIER;

$this->typeList->cleanType($cacheKey);
```

[tagscope]: {{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Cache/Frontend/Decorator/TagScope.php
[type]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Customer/Model/Cache/Type/Notification.php

## Examples {#m2devgde-cache-type-model}

A cache type `translate` is declared in the Magento_Translation module using the `cache.xml` configuration file.

```xml
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Cache/etc/cache.xsd">
    <type name="translate" translate="label,description" instance="Magento\Framework\App\Cache\Type\Translate">
        <label>Translations</label>
        <description>Translation files</description>
    </type>
</config>
```

Translate cache type model class is defined in `Magento\Framework\App\Cache\Type\Translate.php` class. It must extend the `Magento\Framework\Cache\Frontend\Decorator\TagScope` class.

```php
<?php
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

namespace Magento\Framework\App\Cache\Type;

use Magento\Framework\Cache\Frontend\Decorator\TagScope;

/**
 * System / Cache Management / Cache type "Translations"
 */
class Translate extends TagScope
{
    /**
     * Cache type code unique among all cache types
     */
    const TYPE_IDENTIFIER = 'translate';

    /**
     * Cache tag used to distinguish the cache type from all other caches
     */
    const CACHE_TAG = 'TRANSLATE';

    /**
     * @param FrontendPool $cacheFrontendPool
     */
    public function __construct(FrontendPool $cacheFrontendPool)
    {
        parent::__construct($cacheFrontendPool->get(self::TYPE_IDENTIFIER), self::CACHE_TAG);
    }
}
```
