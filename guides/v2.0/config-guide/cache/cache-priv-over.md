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

#### Contents
*	[Page caching overview](#config-cache-over)
*	[Cacheable and uncacheable pages]({{ page.baseurl }}config-guide/cache/cache-priv-cacheable.html)
*	[Public and private content]({{ page.baseurl }}config-guide/cache/cache-priv-priv.html)
*	[HTTP context]({{ page.baseurl }}config-guide/cache/cache-priv-context.html)
*	[Cache invalidation and private content versioning]({{ page.baseurl }}config-guide/cache/cache-priv-inval.html)

## Page caching overview {#config-cache-over}
Caching one of the most effective way of improving performance of web applications of all kinds. Generally speaking, there are two ways to cache: client-side (browser) and server-side. In addition, there are two types of content: public (available to multiple customers) and private (specific to one customer).

Magento page caching is synonymous with *full-page caching*. The Magento application gives you the following options:

*	Default caching mechanism which stores cache files in any of the following:

	*	On the file system. 

		You don't need to do anything to use file-based caching.
	*	[Database]({{ page.baseurl }}config-guide/cache/caching-database.html)
	*	[Redis]({{ page.baseurl }}config-guide/redis/redis-pg-cache.html)
*	[Varnish]({{ page.baseurl }}config-guide/varnish/config-varnish.html) (recommended)

### Cacheable and uncacheable pages {#config-cache-over-cacheable}
*Cacheable* and *uncacheable* are terms used to specify whether or not a page should be cached at all. (By default, all pages are cacheable.) If any block in a layout is designated as uncacheable, the entire page is uncacheable.

### Public and private content {#config-cache-over-pubpriv}
*Private* content on a page is intended for one user only; for example, a customer name or personalized recommendations for a logged-in customer. Rendering private content in a cached page is sometimes referred to as *hole punching* and we'll discuss it in more detail in [Public and private content]({{ page.baseurl }}config-guide/cache/cache-priv-priv.html).

It's important to understand that Magento 2 does *not* use [Edge Side Includes (ESI)](https://en.wikipedia.org/wiki/Edge_Side_Includes){:target="_blank"} to render private content. ESI means the web server returns an HTML page that can be cached, but parts of the page are replaced with an "include" reference URL that returns only the private content.

Instead, we fetch public content (typically the bulk of the total content of the page), then rely on JavaScript and AJAX to inject the private content, which is cached on the browser only. This is discussed in more detail in [Public and private content]({{ page.baseurl }}config-guide/cache/cache-priv-priv.html).

To be able to render different content for different users with the same URL, we use [*HTTP context variables*]({{ page.baseurl }}config-guide/cache/cache-priv-context.html).

#### Next
[Cacheable and uncacheable pages]({{ page.baseurl }}config-guide/cache/cache-priv-cacheable.html)