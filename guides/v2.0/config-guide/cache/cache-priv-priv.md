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
*	[]()
*	[]()
*	[]()
*	[]()

## Public and private content {#config-cache-priv-over}
Almost every page in Magento contains personal or sensitive information that should be delivered to only one specific user. To enable you to deliver private content in a public page, we define two broad types of content:

*	Public, which can display to many customers. 

	Public content is stored in your cache storage (file, database, Varnish, and so on). Examples of public content includes header, footer, and category listing.
*	Private is not stored in the server cache; instead, it's stored on the client only. 

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

1.	Magento substitutes private content with special marks from HTTP response
2.	JavaScript collects these marks in browser and request server side for private content
3.	Response with private content is cached in the browser until one of the following happens:

	*	The browser sends an HTTP POST request to Magento
	*	The user clears their browser's data storage for your site
4.	JavaScript replaces marks in HTML with content received from the preceding step

<div class="bs-callout bs-callout-info" id="info">
  <ul><li>Use only HTTP POST or PUT methods to change state (for example, adding to a shopping cart, adding to a wishlist, and so on.) POST and PUT requests are <em>not</em> cached.</li>
  	<li>Only HTTP <a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.3" target="_blank">GET</a> and <a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.4" target="_blank">HEAD</a> requests are cacheable.</li>
  	<li>For more information about caching, see <a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html" target="_blank">RFC-2616 section 13</a>.</li>

  </ul>
</div>