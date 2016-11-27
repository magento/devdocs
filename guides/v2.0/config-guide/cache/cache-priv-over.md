---
layout: default
group: config-guide
subgroup: 08_Caching
title: Page caching overview
menu_title: Page caching overview
menu_order: 16
menu_node: 
level3_menu_node: level3child
level3_subgroup: cache-priv
version: 2.0
github_link: config-guide/cache/cache-priv-over.md
---

## Page caching overview {#config-cache-over}
Caching one of the most effective way of improving performance of web applications of all kinds. Generally speaking, there are two ways to cache: client-side (browser) and server-side. In addition, there are two types of content: public (available to multiple customers) and private (specific to one customer).

Magento page caching is synonymous with *full-page caching*; in other words, we cache the entire page. The Magento application gives you the following options:

*	The default caching mechanism which stores cache files in any of the following:

	*	On the file system. 

		You don't need to do anything to use file-based caching.
	*	[Database]({{ page.baseurl }}config-guide/cache/caching-database.html)
	*	[Redis]({{ page.baseurl }}config-guide/redis/redis-pg-cache.html)
*	[Varnish]({{ page.baseurl }}config-guide/varnish/config-varnish.html) (recommended)

### Cacheable and uncacheable pages {#config-cache-over-cacheable}
*Cacheable* and *uncacheable* are terms we use to indicate whether or not a page should be cached at all. (By default, all pages are cacheable.) If any block in a layout is designated as uncacheable, the entire page is uncacheable.

To create an uncacheable page, mark any block on that page as uncacheable in the layout using `cacheable="false"`. 

Examples of uncacheable pages include the compare products, cart, checkout pages, and so on. 

[Example]({{ site.mage2000url }}app/code/Magento/Paypal/view/frontend/layout/paypal_payflow_returnurl.xml){:target="_blank"}

<div class="bs-callout bs-callout-warning">
    <p>Do not configure content pages (that is, catalog, product and CMS pages) to be uncacheable. Doing so has an adverse affect on performance.</p>
       
</div>

<div class="bs-callout bs-callout-info" id="info">
  <p>Only HTTP <a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.3" target="_blank">GET</a> and <a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.4" target="_blank">HEAD</a> requests are cacheable. For more information about caching, see <a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html" target="_blank">RFC-2616 section 13</a>.</p>
</div>

### Public and private content {#config-cache-over-pubpriv}
*Private* content on a page is intended for one user only; for example, a customer name or personalized recommendations for a logged-in customer. Rendering private content in a cached page is sometimes referred to as *hole punching* and we'll discuss it in more detail in the next topic.

#### Next
[Public and private content]({{ page.baseurl }}config-guide/cache/cache-priv-priv.html)