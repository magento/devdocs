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

<div class="bs-callout bs-callout-info" id="info">
  <p>Cache storage performance is directly related to the number of tags per cache record. You should minimize the count of tags and use them only for entities that are used in production mode. In other words, do <em>not</em> use cache invalidation for actions related to store setup.</p>
</div>

First, a class must use [`Magento/Framework/DataObject/IdentityInterface`]({{ site.mage2000url }}lib/internal/Magento/Framework/DataObject/IdentityInterface.php){:target="_blank"} as follows:

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

Second, the view object must also implement `Magento/Framework/DataObject/IdentityInterface` as follows:

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
        return $this->getProduct()->getIndetities();
    }
}
{% endhighlight %}

## Cache versioning
Private content, which is stored on the browser, uses the `private_content_version` cookie to store version information. Users who are not logged in or for whom no private content exists don't have a `private_content_version` cookie, so no private content is tracked.

When we need to version private content, we do it as follows:

1.  User performs some action, such as adding to a cart, that results in an HTTP POST request to the Magento server.
2.  The server generates the `private_content_version` cookie for this user and returns the response to the browser.
3.  JavaScript takes the `private_content_version` cookie and requests private content using a URL like `http://example.com/page_cache/block/render?handles=default,product_view&blocks=cart,wishlist...&version=%private_content_version value%`.
4.  The server's reply is cached in the browser. 

    All subsequent requests with the same data version will be retrieved from browser cache.
5.  Any subsequent HTTP POST request changes the value of `private_content_version`.

    As a result, a new AJAX request is made to the server (see the preceding step).