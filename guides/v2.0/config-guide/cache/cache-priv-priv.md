---
layout: default
group: config-guide
subgroup: 08_Caching
title: Public and private content
menu_title: Public and private content
menu_order: 19
menu_node: 
level3_menu_node: level3child
level3_subgroup: cache-priv
version: 2.0
github_link: config-guide/cache/cache-priv-priv.md
---

#### Contents
*	[Public and private content](#config-cache-priv-over)
*	[Specify private content](#config-cache-priv-how)
*	[Considerations for public content](#config-cache-public)  

## Public and private content {#config-cache-priv-over}
Many Magento pages contain personal or sensitive information that should be delivered to only one specific user. To enable you to deliver private content in a public page, we define two broad types of content:

*	*Public*, which can display to many customers. 

	Public content is stored in your cache storage (file system, database, or Varnish). Examples of public content includes header, footer, and category listing.
*	*Private*, which is not stored in the server cache; instead, it's stored on the client only. 

	Examples of private content include the wishlist, shopping cart, customer name, and addresses. Private content should be limited to about 5% of the total content on a page.

## Specify private content {#config-cache-priv-how}
To specify a block as private, use `$isScopePrivate` as follows:

{% highlight php startinline=true %}
namespace Magento\Wishlist\Block;
class Link
{
    /**
     * One way to specify isScopePrivate
     */
    protected $_isScopePrivate = true;
 
    public function __construct()
    {
        /** Another way to do the same thing */
        $this->_isScopePrivate = true;
    }
}
{% endhighlight %}

Magento uses JavaScript to work with private content as follows:

1.  Magento substitutes private content for variables in the HTTP response
2.  JavaScript collects these variables in the browser and requests private content from the server
3.  The response with private content is cached in the browser until one of the following happens:

	*  The browser sends an HTTP POST request to Magento (for example, to add more items to the cart)
	*  The user clears their browser's cache
4.  JavaScript replaces the variables in the HTML with content received from the preceding step

Using JavaScript has the following advantages over ESI, which uses an include URL for each piece of private content:

*   A single AJAX call can fetch all the private user content on a page instead of one request per part of a page to be replaced (as is done with ESI). 

    This reduces the number of HTTP requests.
*   The private content is cacheable by the web browser. 

    A customer’s name is not likely to change for example, so why not keep it in the web browser cache and avoid future AJAX calls?

Following is an example of JavaScript that displays the customer's full name or a default message if the customer's full name is not known:

{% highlight javascript %}
  
<!-- ko if: customer().fullname -->
<span data-bind="text: new String('Welcome, %1!').replace('%1', customer().firstname)">
</span>
<!-- /ko -->
<!-- ko ifnot: customer().fullname -->
<span data-bind="html:'Default welcome msg!'"></span>
<!-- /ko -->
{% endhighlight %}

<div class="bs-callout bs-callout-info" id="info">
  <ul><li>Use only HTTP <a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.5" target="_blank">POST</a> or <a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.6" target="_blank">PUT</a> methods to change state (for example, adding to a shopping cart, adding to a wishlist, and so on.) POST and PUT requests are <em>not</em> cached.</li>
  	<li>Only HTTP <a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.3" target="_blank">GET</a> and <a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.4" target="_blank">HEAD</a> requests are cacheable.</li>
  	<li>For more information about caching, see <a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html" target="_blank">RFC-2616 section 13</a>.</li>

  </ul>
</div>

## Considerations for public content {#config-cache-public}
By default, unless you specify otherwise, all content on a page is public. You should consider the following when setting up your site's caching strategy:

*   Generally speaking, you should cache images for a long time.

    If you want to change a product image, consider giving it a different URL.
*   Product details can generally be cached because they don't change very often.

    When product details do change, be sure to [clean the cache]({{ page.baseurl }}config-guide/cli/config-cli-subcommands-cache.html). 
*   Avoid updating a page unnecessarily. 

    For example, suppose a page has two blocks that take a long time to render (for example, a category page with a merchandising block that uses a complex algorithm). To avoid updating out-of-stock products, set up the category page to hide them. This avoids updating a part of the page that isn't changing anyway.

Magento 2 caching enables you to use different approaches to implement the preceding:

*   Public cacheable content can be returned with tags for use by the cache server (such as Varnish). 

    *Tags* hold identity information, such as the product number of the products shown on the page. If you update a product, the Magento application can then send Varnish a PURGE request based on the tag to instruct Varnish to "flush all pages containing pages with this tag from your cache". 

    This allows selective cache invalidation, instead of flushing the entire cache (which would trigger a large spike on the server).
*   Different content can be returned with a different Time To Live (TTL) values. This can be used in combination with ESI requests so that different parts of a page can be cached with different lifetimes.

    The Magento application uses ESI *only* to cache public content, not *private* content for a specific customer. ESI shouldn't be used to embed private (uncacheable) content on a cacheable page, but instead to allow different parts of a page to be cached for different lengths of time. 

    This is of benefit only if there are different parts of a page worth caching separately. Otherwise, it is simpler to cache the entire page and to regenerate the page when required.

#### Next
[HTTP context]({{ page.baseurl }}config-guide/cache/cache-priv-context.html)