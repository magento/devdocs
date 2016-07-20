---
layout: default
group: config-guide
subgroup: 08_Caching
title: Cacheable and uncacheable pages
menu_title: Cacheable and uncacheable pages
menu_order: 18
menu_node: 
level3_menu_node: level3child
level3_subgroup: cache-priv
version: 2.0
github_link: config-guide/cache/cache-priv-cacheable.md
---

Hi mom

## Cacheable pages {#config-page-cache}
Unless you specify otherwise, all pages are cacheable. To specify the length of time, in seconds, to cache the page, use `setPublicHeaders` from [Magento\Framework\App\Response\Http]({{ site.mage2000url }}lib/internal/Magento/Framework/App/Response/Http.php){:target="_blank"}.

Example:

{% highlight php startinline=true %}
class DynamicController
{
    protected $response;
 
    public function __construct(Magento\Framework\App\Response\Http $response)
    {
        $this->response = $response;
    }
 
    public function newsAction()
    {
        $this->response->setBody(/** Adding some news*/);
        $this->response->setPublicHeaders(10); // News will be refreshed every 10 seconds
    }
}
{% endhighlight %}

The preceding example keeps the page in cache for 10 seconds.

<div class="bs-callout bs-callout-warning">
    <p>Caching a page for even a few seconds is helpful because HTTP requests occur on the scale of milliseconds.</p>
</div> 

<div class="bs-callout bs-callout-info" id="info">
  <p>Only HTTP <a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.3" target="_blank">GET</a> and <a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.4" target="_blank">HEAD</a> requests are cacheable. For more information about caching, see <a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html" target="_blank">RFC-2616 section 13</a>.</p>
</div>

## Uncacheable pages {#config-page-notcache}
To create an uncacheable page, mark any block on that page as uncacheable in the layout (use `cacheable="false"`). Any page that has at least one uncacheable block is itself uncacheable (that is, the entire page).

Examples of uncacheable pages include the return page of payment method, AJAX data source, debug pages, and so on. 

To specify uncacheable pages, you can:

*	Add `cacheable="false"` to the block definition in the layout.

	[Example]({{ site.mage2000url }}app/code/Magento/Paypal/view/frontend/layout/paypal_payflow_returnurl.xml){:target="_blank"}

*	In your controller, implement a method like `setNoCacheHeaders` from [Magento\Framework\App\Response\Http]({{ site.mage2000url }}lib/internal/Magento/Framework/App/Response/Http.php){:target="_blank"}

	Example:

{% highlight php startinline=true %}
class DynamicController
{
   	protected $response;

   	public function __construct(Magento\Framework\App\Response\Http $response)
   	{
       	$this->response = $response;
   	}

   	public function randomAction()
   	{
       	$this->response->setBody(mt_rand(1,100));
       	$this->response->setNoCacheHeaders();
   	}
}
{% endhighlight %}

#### Next
[Public and private content]({{ page.baseurl }}config-guide/cache/cache-priv-priv.html)