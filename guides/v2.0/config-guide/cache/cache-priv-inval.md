---
layout: default
group: config-guide
subgroup: 08_Caching
title: Cache invalidation and private content versioning
menu_title: Cache invalidation and private content versioning
menu_order: 25
menu_node: 
level3_menu_node: level3child
level3_subgroup: cache-priv
version: 2.0
github_link: config-guide/cache/cache-priv-inval.md
---

## Cache invalidation {#config-cache-inval}
The Magento application enables you to clear cached content immediately after a entity changes. We use an `IdentityInterface` to link entities in the application with cached content and to know what cache to clear when an entity changes.

This section discusses how you inform the Magento application what cache to clear when you change an entity.

First, your entity module must implement [`Magento/Framework/DataObject/IdentityInterface`]({{ site.mage2000url }}lib/internal/Magento/Framework/DataObject/IdentityInterface.php){:target="_blank"} as follows:

{% highlight php startinline=true %}
use Magento\Framework\DataObject\IdentityInterface;
 
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
         return [self::CACHE_TAG . '_' . $this->getId()];
    }
}
{% endhighlight %}

Second, the block object must also implement `Magento/Framework/DataObject/IdentityInterface` as follows:

{% highlight php startinline=true %}
class View extends AbstractProduct implements \Magento\Framework\DataObject\IdentityInterface
{
    /**
     * Return identifiers for produced content
     *
     * @return array
     */
    public function getIdentities()
    {
        return $this->getProduct()->getIdentities();
    }
}
{% endhighlight %}


Blocks collect identities from the entities they render. After blocks are rendered on the page, identities from the blocks that implement `IdentityInterface` are collected by [`\Magento\PageCache\Model\Layout\LayoutPlugin`]({{ site.mage2000url }}app/code/Magento/PageCache/Model/Layout/LayoutPlugin.php){:target="_blank"} and added to the response header `X-Magento-Tags`. 
When you save and entity, Magento gets its identities and use them to clear the cache.

## Private content versioning {#config-priv-vers}
Private content, which is stored in the browser local storage, uses the `private_content_version` cookie to store the version.

Versioning works as follows:

1.  The user performs some action, such as adding to a cart, that results in an POST or PUT request to the Magento application.
2.  The server generates the `private_content_version` cookie for this user and returns the response to the browser.
3.  JavaScript interprets the presence of the `private_content_version` cookie to mean that private content is present on the page, so it sends an AJAX request to the Magento server to get the current private content.
4.  The server's reply is cached in the browser's local storage. 

    Subsequent requests with the same data version are retrieved from local storage.
5.  Any future HTTP POST or PUT request changes the value of `private_content_version` and results in the updated content being cached by the browser.
