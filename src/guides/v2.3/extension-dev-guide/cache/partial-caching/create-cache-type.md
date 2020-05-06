---
group: php-developer-guide
title: Create a cache type
---

A *cache type* enables you to specify what is cached and enables merchants to clear that [cache type](https://glossary.magento.com/cache-type) using the [Cache](https://glossary.magento.com/cache) Management page in the [Magento Admin](https://glossary.magento.com/magento-admin).

The tag *scope* provides a mechanism for a cache type.

## Cache type configuration {#m2devgde-cache-type-configuration}

Declare a new cache type in the `etc/cache.xml` file with the following attributes:

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

[tagscope]: {{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Cache/Frontend/Decorator/TagScope.php
[type]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Customer/Model/Cache/Type/Notification.php
