---
group: php-developer-guide
title: Create a cache type
---

A *cache type* enables you to specify what is cached and enables merchants to clear that [cache type](https://glossary.magento.com/cache-type) using the [Cache](https://glossary.magento.com/cache) Management page in the [Magento Admin](https://glossary.magento.com/magento-admin).

The tag *scope* provides a mechanism for a cache type.

To create a new cache type:

```php
class VendorName\ModuleName\Model\Cache\Type extends \Magento\Framework\Cache\Frontend\Decorator\TagScope
{
  const TYPE_IDENTIFIER = '%cache_type_id%';
  const CACHE_TAG = '%CACHE_TYPE_TAG%';

  public function __construct(\Magento\Framework\App\Cache\Type\FrontendPool $cacheFrontendPool)
  {
    parent::__construct($cacheFrontendPool->get(self::TYPE_IDENTIFIER), self::CACHE_TAG);
  }
}
```

You must specify the following parameters:

*  `VendorName\ModuleName` defines the name of a [module](https://glossary.magento.com/module) that uses a cache type. A module can use several cache types and a cache type can be used in several modules.
*  `%cache_type_id%` defines unique identifier of a cache type.
*  `%CACHE_TYPE_TAG%` defines unique tag to be used in the cache type scoping.

## More information about caching

You can get more information about caching by looking at the code.
We suggest you locate classes that extend [Magento\Framework\Cache\Frontend\Decorator\TagScope][tagscope].

For example, look at [Magento\Eav\Model\Cache\Type][type] to understand more about the EAV cache type.

 {:.bs-callout-info}
Please help us improve this topic by suggesting details using the **Edit this page in GitHub** link at the top of the page.

[tagscope]: {{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Cache/Frontend/Decorator/TagScope.php
[type]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Eav/Model/Cache/Type.php
