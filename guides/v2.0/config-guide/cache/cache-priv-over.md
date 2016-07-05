---
layout: default
group: config-guide
subgroup: 08_Caching
title: Private and pubic caching overview
menu_title: Private and public caching overview
menu_order: 16
menu_node: 
level3_menu_node: level3child
level3_subgroup: cache-priv
version: 2.0
github_link: config-guide/cache/cache-priv-over.md
---

#### Contents
*	[]()
*	[]()
*	[]()

## Private and public caching overview {#config-cache-over}
Caching one of the most effective way of improving performance of web applications of all kinds. Generally speaking, there are two types of caching: client-side (browser) and server-side. In addition, there are two types of content: public (cacheable) and private (uncacheable).

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

### Public and private content {#config-cache-over-priv}
*Public* and *private* are terms used to specify whether or not content should be cached at all. Private content is intended for one user only; for example, a customer name or personalized recommendations for a logged-in customer. Rendering private (uncacheable) content on a public (cacheable) page is sometimes referred to as *hole punching* and we'll discuss it in more detail in TBD.

It's important to understand that Magento 2 does *not* use [Edge Side Includes (ESI)](https://en.wikipedia.org/wiki/Edge_Side_Includes) to render private content. ESI means the web server returns an HTML page that can be cached, but where parts of the page are replaced with an "include" reference (URL) that returns only the private content.

Instead, we fetch public content (typically around 95% of the total content of the page), then rely on JavaScript and AJAX to inject the remaining private content. This is discussed in more detail in TBD.