---
layout: default
group: config-guide
subgroup: 08_Caching
title: HTTP context
menu_title: HTTP context
menu_order: 20
menu_node: 
level3_menu_node: level3child
level3_subgroup: cache-priv
version: 2.0
github_link: config-guide/cache/cache-priv-context.md
---

## HTTP context
Caching servers and proxies usually use a URL as the unique identifier for caching; however, Magento URLs are not unique *enough* to allow caching by URL only. To make each cached URL totally unique, we use *HTTP context variables*, which include store, currency, and customer group. This enables the Magento application to serve different content on the same URL based on customer group, selected language, whether customer logged in or not, and so on.

Context variables are used by the Magento application to render different content for different users on the same URL.

Context variables must not be specific to exactly one user, because variables are used in cache keys for public content. In other words, a context variable per user results in a separate copy of content for each user cached on the server.

Magento combines context variables in a string, generates the cache from that string, and sets it as the value of the `X-Magento-Vary` cookie. HTTP proxies can be configured to calculate a unique identifier for cache based on the cookie and URL. For example, [our sample Varnish 4 configuration]({{ site.mage2000url }}app/code/Magento/PageCache/etc/varnish4.vcl#L63-L68){:target="_blank"} uses the following: 

{% highlight xml %}
sub vcl_hash {
if (req.http.cookie ~ "X-Magento-Vary=") {
hash_data(regsub(req.http.cookie, "^.?X-Magento-Vary=([^;]+);.*$", "\1"));
}
... more ...
}
{% endhighlight %}

### HTTP context example
The following example uses the variable `CONTEXT_AGE` (customer's age) to display content for `\Guide\Drinks\Helper\Data` (types of drinks). You could use this, for example, to display a list of related adult beverages to customers who are of legal age to consume them.

{% highlight php startinline=true %}
class CustomerAgeContextPlugin
{
    public function __construct(
        \Magento\Customer\Model\Session $customerSession,
        \Magento\Framework\App\Http\Context $httpContext
    ) {
        $this->customerSession = $customerSession;
        $this->httpContext = $httpContext;
    }
 
    //Context variable should be registered for any HTTP request
    function aroundDispatch(\Magento\Framework\App\Action\Action $subject,
        \Closure $proceed,
        \Magento\Framework\App\RequestInterface $request
    ) {
        $this->httpContext->setValue(
            \Guide\Drinks\Helper\Data::CONTEXT_AGE,
            $this->customerSession->getCustomerData()->getCustomAttribute('age'),
            null
        );
 
        return $proceed($request);
    }
}
{% endhighlight %}

In the preceding example, the third argument of `\Magento\Framework\App\Http\Context::setValue` specifies the context variable value if there is no existing session value. Typically, this happens when a customer accesses a page for the first time.

For an example of a context class, see [Magento/Framework/App/Http/Context]({{ site.mage2000url }}lib/internal/Magento/Framework/App/Http/Context.php){:target="_blank"}.

#### Next
[Cache invalidation and private content versioning]({{ page.baseurl }}config-guide/cache/cache-priv-inval.html)