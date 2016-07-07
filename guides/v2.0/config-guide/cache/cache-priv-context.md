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
Caching servers and proxies cache resources by URL; however, Magento URLs are not unique *enough* to allow caching by URL only. We use cookies and sessions to preserve state, which can lead to issue like:

*	Cache collisions (same URL in different sessions)
*	Information leaks (for example, content from a French website partially visible on a US website, prices for customer group visible to the public, and so on).

To make each cached URL totally unique, we use *HTTP context variables*, which include store, currency, and customer group.

Context variables are used by the Magento application to render different content for different users on the same URL.

Context variables must not be specific to exactly one user, because variables are used in cache keys for public content. In other words, a context variable per user results in a separate copy of content for each user cached on the server.

<div class="bs-callout bs-callout-info" id="info">
  <p>Magento uses the <code>X-Magento-Vary</code> header for HTTP context variables.</p>
</div>

### HTTP context example
The following example uses variable `CONTEXT_AGE` (customer's age) to display content for `\Guide\Drinks\Helper\Data` (types of drinks). You could use this, for example, to selectively display advertisements and recommendations for adult beverages only to customers who are of legal age to drink them.

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
 
class Context
{
    /**
     * Register context variable
     *
     * @param string $name - context variable name
     * @param mixed $value - context variable value
     * @param mixed $default - default value of context variable(newcomer context value)
     */
    public function setValue($name) {}
 
    }
{% endhighlight %}

<div class="bs-callout bs-callout-info" id="info">
  <p><code>@param mixed $default</code> sets a default value that you can use to display content to an unregistered or not-logged-in customer. You need it for parity to generate cache keys and for users who already have a <code>X-Magento-Vary</code> value set for them.</p>
</div>

#### Next
TBD