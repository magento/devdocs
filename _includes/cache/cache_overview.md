<div markdown= "1">

Caching is one of the most effective way of improving performance of web applications of all kinds. Generally speaking, there are two ways to cache: client-side (browser) and server-side. In addition, there are two types of content: public (available to multiple customers) and private (specific to one customer).

Magento page caching is synonymous with *full-page caching*; in other words, we {% glossarytooltip 0bc9c8bc-de1a-4a06-9c99-a89a29c30645 %}cache{% endglossarytooltip %} the entire page. The Magento application gives you the following options:

*	The default caching mechanism which stores cache files in any of the following:

	*	On the file system. 

		You don't need to do anything to use file-based caching.
	*	[Database]({{ page.baseurl }}config-guide/cache/caching-database.html)
	*	[Redis]({{ page.baseurl }}config-guide/redis/redis-pg-cache.html)
*	[Varnish]({{ page.baseurl }}config-guide/varnish/config-varnish.html) (recommended)

### Cacheable and uncacheable pages {#config-cache-over-cacheable}
*Cacheable* and *uncacheable* are terms we use to indicate whether or not a page should be cached at all. (By default, all pages are cacheable.) If any block in a {% glossarytooltip 73ab5daa-5857-4039-97df-11269b626134 %}layout{% endglossarytooltip %} is designated as uncacheable, the entire page is uncacheable.

To create an uncacheable page, mark any block on that page as uncacheable in the layout using `cacheable="false"`. 

Examples of uncacheable pages include the compare products, cart, {% glossarytooltip 278c3ce0-cd4c-4ffc-a098-695d94d73bde %}checkout{% endglossarytooltip %} pages, and so on. 

[Example]({{ site.mage2000url }}app/code/Magento/Paypal/view/frontend/layout/paypal_payflow_returnurl.xml){:target="_blank"}

<div class="bs-callout bs-callout-warning">
    <p>Do not configure content pages (that is, catalog, product and CMS pages) to be uncacheable. Doing so has an adverse affect on performance.</p>
</div>
