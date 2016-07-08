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
*	[Private and public caching overview](#config-cache-over)
*	[Guidelines for public content](#config-cache-guide-cache)
*	[Guidelines for private content](#config-cache-guide-uncache)
*	[Cacheable and uncacheable pages]({{ page.baseurl }}config-guide/cache/cache-priv-cacheable.html)
*	[Public and private content]({{ page.baseurl }}config-guide/cache/cache-priv-priv.html)
*	[HTTP context]({{ page.baseurl }}config-guide/cache/cache-priv-context.html)
*	[Cache invalidation and private content versioning]({{ page.baseurl }}config-guide/cache/cache-priv-inval.html)

## Page caching overview {#config-cache-over}
Caching one of the most effective way of improving performance of web applications of all kinds. Generally speaking, there are two types of caching: client-side (browser) and server-side. In addition, there are two types of content: public (available to multiple customers) and private (limited to one customer).

### Client-side caching {#config-cache-over-client}
A HTTP GET request to fetch a page has headers that say how long a returned asset can be trusted as being up-to-date. This allows a web browser to save a copy of the asset so if the user comes back later, the asset does not have to be downloaded again. 

In this context, an *asset* can be any of the following:

*	Entire page or part of a page
*	Image
*	JavaScript
*	CSS

Each of the preceding (including each individual image) can result in a separate HTTP request so browser caching can save a large number of requests.

### Server-side caching {#config-cache-over-server}
Server-side caching is particularly beneficial when the same request comes from different users. You can serve more requests per second for dynamic content (for example, content from a database). There are various methods of updating the server cache; we'll get into that in more detail later.

### Cacheable and uncacheable pages {#config-cache-over-cacheable}
*Cacheable* and *uncacheable* are terms used to specify whether or not a page should be cached at all. (By default, all pages are cacheable.) If any block in a layout is designated as uncacheable (using `cacheable="false"`), the entire page is uncacheable.

### Public and private content {#config-cache-over-pubpriv}
*Private* content on a page is intended for one user only; for example, a customer name or personalized recommendations for a logged-in customer. Rendering private content on a public page is sometimes referred to as *hole punching* and we'll discuss it in more detail in [Public and private content]({{ page.baseurl }}config-guide/cache/cache-priv-priv.html).

It's important to understand that Magento 2 does *not* use [Edge Side Includes (ESI)](https://en.wikipedia.org/wiki/Edge_Side_Includes) to render private content. ESI means the web server returns an HTML page that can be cached, but where parts of the page are replaced with an "include" reference (URL) that returns only the private content.

Instead, we fetch public content (typically around 95% of the total content of the page), then rely on JavaScript and AJAX to inject the remaining private content. This is discussed in more detail in [Public and private content]({{ page.baseurl }}config-guide/cache/cache-priv-priv.html).

## Guidelines for public content {#config-cache-guide-cache}
For content to be cacheable, it must meet the following criteria:

*	Must use only the [HTTP GET request method]({{ page.baseurl }}config-guide/cache/cache-priv-cacheable.html##config-page-cache)
*	Must render only [cacheable blocks]({{ page.baseurl }}config-guide/cache/cache-priv-cacheable.html##config-page-notcache)
*	Contains no sensitive or private data (in other words, session and customer [Data Transfer Objects (DTO)](https://en.wikipedia.org/wiki/Data_transfer_object){:target="_blank"} objects are empty)
*	Current session (customer) and page should be written using JavaScript. For example, a related product listing should exclude items that are already in the shopping cart.
*	All private content blocks must be marked as private using the [`_isScopePrivate` attribute]({{ page.baseurl }}config-guide/cache/cache-priv-priv.html)
*	A cacheable block should render unpersonalized content by default
*	Models and blocks should identify themselves for [invalidation support]({{ page.baseurl }}config-guide/cache/cache-priv-inval.html)
*	You should declare a custom [HTTP context variable]({{ page.baseurl }}config-guide/cache/cache-priv-context.html) if you plan to show different public content on the same URL

## Guidelines for private content {#config-cache-guide-uncache}
For uncacheable content, keep the following in mind:

*	Must use the [HTTP POST request method]({{ page.baseurl}}config-guide/cache/cache-priv-priv.html#config-cache-priv-how) to change state (for example, add items to a shopping cart)
*	Specify an [uncacheable block]({{ page.baseurl config-guide/cache/cache-priv-priv.html#config-cache-priv-how) in the layout
*	JavaScript in private content should not rely on [Document Object Model (DOM)](https://en.wikipedia.org/wiki/DOM_events){:target="_blank"} load events because this kind of content can be loaded after main page load event using a separate request

#### Next
[Cacheable and uncacheable pages]({{ page.baseurl }}config-guide/cache/cache-priv-cacheable.html)