<div markdown= "1">

Caching is one of the most effective ways to improve website performance. Generally speaking, there are two methods of caching content:

-  Client-side (browser)
-  Server-side

Retrieving stored ([cached](https://glossary.magento.com/cache)) content from a previous request for the same client instead of requesting files from your server every time someone visits your site is a more efficient use of network bandwidth.

The Magento page cache library contains a simple PHP reverse proxy that enables full page caching out of the box. A reverse proxy acts as an intermediary between visitors and your application and can reduce the load on your server.

We recommend using [Varnish]({{ page.baseurl }}/config-guide/varnish/config-varnish.html), but you can use Magento's default caching mechanism instead, which stores cache files in any of the following:

-  File system (You don't need to do anything to use file-based caching.)
-  [Database]({{ page.baseurl }}/extension-dev-guide/cache/partial-caching/database-caching.html)
-  [Redis]({{ page.baseurl }}/config-guide/redis/redis-pg-cache.html)

## Cacheable and uncacheable pages {#cache-over-cacheable}

*Cacheable* and *uncacheable* are terms we use to indicate whether or not a page should be cached at all. (By default, all pages are cacheable.) If any block in a [layout](https://glossary.magento.com/layout) is designated as uncacheable, the entire page is uncacheable.

To create an uncacheable page, mark any block on that page as uncacheable in the layout using `cacheable="false"`.

Examples of uncacheable pages include the compare products, cart, [checkout](https://glossary.magento.com/checkout) pages, and so on.

[Example]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Paypal/view/frontend/layout/paypal_payflow_returnurl.xml){:target="_blank"}

{:.bs-callout-warning}
Do not configure content pages (i.e., catalog, product, and CMS pages) to be uncacheable. Doing so has an adverse affect on performance.

## Public and private content

Reverse proxies serve "public" or shared content to more than one user. However, most Magento websites generate dynamic and personalized "private" content that should only be served to one user, which presents unique caching challenges. To address these challenges, Magento can distinguish between two types of content:

-  **[Public]({{ page.baseurl }}/extension-dev-guide/cache/page-caching/public-content.html)** - Public content is stored server side in your reverse proxy cache storage (e.g., file system, database, Redis, or Varnish) and is available to multiple customers. Examples of public content include header, footer, and category listing.

-  **[Private]({{ page.baseurl }}/extension-dev-guide/cache/page-caching/private-content.html)** - Private content is stored client side (e.g., browser) and is specific to an individual customer. Examples of private content include wishlist, shopping cart, customer name, and address. You should limit stored private content to a small portion of the page's total content.
