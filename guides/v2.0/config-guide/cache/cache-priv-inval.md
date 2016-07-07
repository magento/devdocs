---
layout: default
group: config-guide
subgroup: 08_Caching
title: Cache invalidation and versioning
menu_title: Cache invalidation and versioning
menu_order: 25
menu_node: 
level3_menu_node: level3child
level3_subgroup: cache-priv
version: 2.0
github_link: config-guide/cache/cache-priv-inval.md
---

## Cache invalidation
In addition to time-to-live, the Magento application enables you to expire cached content immediately after a change is made. We use an identity interface (that is, a *cache tag*) to link system entities with cached content.

First, a class must use [Magento/Framework/DataObject/IdentityInterface]({{ site.mage2000url }}lib/internal/Magento/Framework/DataObject/IdentityInterface.php) as follows:

{% highlight php startinline=true %}
use Magento\Framework\Object\IdentityInterface;
 
class Product implements IdentityInterface
{
 
     /**
      * Product cache tag
      */
     const CACHE_TAG = 'catalog_product';
 
    /**
     * Get identities
     *
     * @return array
     */
    public function getIdentities()
    {
         return array(self::CACHE_TAG . '_' . $this->getId());
    }
}
{% endhighlight %}

