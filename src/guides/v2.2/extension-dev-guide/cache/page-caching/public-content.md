---
group: php-developer-guide
title: Public content
---

By default, all pages in Magento are cacheable, but you can disable caching if necessary (e.g., payment method return page, debug page, or AJAX data source).

## Caching

If you need to refresh data every second consider using a cache.
Requesting content from the cache is faster than generating it for every request.

Only `GET` and `HEAD` methods are cacheable.

### Disable or enable caching

Add a `cacheable="false"` attribute to any block in your layout to disable caching:

```xml
<block class="Magento\Paypal\Block\Payflow\Link\Iframe" template="payflowlink/redirect.phtml" cacheable="false"/>
```

Magento disables page caching if at least one non-cacheable block is present in the layout.

{:.bs-callout-warning}
Using `cacheable="false"` inside the `default.xml` file disables caching for all pages on the site.

You can also disable caching with HTTP headers.
Use a controller to return an object that contains methods for manipulating the cache.

### Define caching behavior

You can use the Admin to define caching policies or you can define them programmatically in a controller:

> Example

```php
class DynamicController extends \Magento\Framework\App\Action\Action
{
    protected $pageFactory;

    public function __construct(
        \Magento\Framework\App\Action\Context $context,
        \Magento\Framework\View\Result\PageFactory $resultPageFactory
    ) {
        parent::__construct($context);
        $this->pageFactory = $resultPageFactory;
    }

    /**
     * This action render random number for each request
     */
    public function execute()
    {
        $page = $this->pageFactory->create();
        //We are using HTTP headers to control various page caches (varnish, fastly, built-in php cache)
        $page->setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0', true);

        return $page;
    }
}
```

## Configure page variations

Most caching servers and proxies use a [URL](https://glossary.magento.com/url) as a key for cache records. However, Magento URLs are not unique *enough* to allow caching by URL only. Cookie and session data in the URL can also lead to undesirable side effects,  including:

-  Collisions in cache storage
-  Unwanted information leaks (e.g., French language website partially visible on an English language website, prices for customer group visible in public, etc.)

To make each cached URL totally unique, we use *HTTP context variables*. Context variables enable the Magento application to serve different content on the same URL based on:

-  Customer group
-  Selected language
-  Selected store
-  Selected currency
-  Whether a customer is logged in or not

Context variables should not be specific to individual users because variables are used in cache keys for public content. In other words, a context variable per user results in a separate copy of content cached on the server for each user.

Magento generates a hash based on all context variables (`\Magento\Framework\App\Http\Context::getVaryString`). The hash and current URL are used as keys for cache storage.

For example, let's declare a context variable that shows a drinks catalog and advertisement to adult customers only. The following code snippet will create a copy of every page in Magento for users under the age of 18.

```php
/**
 * Plugin on \Magento\Framework\App\Http\Context
 */
class CustomerAgeContextPlugin
{
    public function __construct(
        \Magento\Customer\Model\Session $customerSession
    ) {
        $this->customerSession = $customerSession;
    }
    /**
     * \Magento\Framework\App\Http\Context::getVaryString is used by Magento to retrieve unique identifier for selected context,
     * so this is a best place to declare custom context variables
     */
    function beforeGetVaryString(\Magento\Framework\App\Http\Context $subject)
    {
        $age = $this->customerSession->getCustomerData()->getCustomAttribute('age');
        $defaultAgeContext = 0;
        $ageContext = $age >= 18 ? 1 : $defaultAgeContext;
        $subject->setValue('CONTEXT_AGE', $ageContext, $defaultAgeContext);
    }
}
```

The `subject->setValue` argument specifies the value for newcomer context and is used to guarantee parity during cache key generation for newcomers and users who already received the `X-Magento-Vary` cookie.

For another example of a context class, see [Magento/Framework/App/Http/Context]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/App/Http/Context.php){:target="_blank"}.

### `X-Magento-Vary` cookie

Use the `X-Magento-Vary` cookie to transfer context on the HTTP layer. HTTP proxies can be configured to calculate a unique identifier for cache based on the cookie and URL. For example, [our sample Varnish 4 configuration]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/PageCache/etc/varnish4.vcl#L63-L68){:target="_blank"} uses the following:

```conf
sub vcl_hash {
    if (req.http.cookie ~ "X-Magento-Vary=") {
        hash_data(regsub(req.http.cookie, "^.*?X-Magento-Vary=([^;]+);*.*$", "\1"));
    }
    ... more ...
}
```

## Invalidate public content

You can clear cached content immediately after a entity changes. Magento uses  `IdentityInterface` to link entities in the application with cached content and to know what cache to clear when an [entity](https://glossary.magento.com/entity) changes.

This section shows you how to tell Magento what cache to clear when you change an entity.

First, your entity [module](https://glossary.magento.com/module) must implement [`Magento/Framework/DataObject/IdentityInterface`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/DataObject/IdentityInterface.php){:target="_blank"} as follows:

```php
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
```

Second, the block object must also implement `Magento/Framework/DataObject/IdentityInterface` as follows:

```php
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
```

Magento uses cache tags for link creation. The performance of cache storage has a direct dependency on the number of tags per cache record, so try to minimize the number of tags and use them only for entities that are used in production mode. In other words, don't use invalidation for actions related to store setup.

{:.bs-callout-warning}
Use only HTTP POST or PUT methods to change state (e.g., adding to a shopping cart, adding to a wishlist, etc.) and don't expect to see caching on these methods. Using GET or HEAD methods might trigger caching and prevent updates to private content. For more information about caching, see [RFC-2616 section 13](https://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html){:target="_blank"}

{% include cache/page-cache-checklists.md%}
