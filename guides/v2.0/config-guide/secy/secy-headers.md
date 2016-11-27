---
layout: default
group: config-guide
subgroup: 02_Security
title: Prevent cache poisoning
menu_title: Prevent cache poisoning
menu_order: 10
menu_node: 
version: 2.0
github_link: config-guide/secy/secy-headers.md
---

This topic discusses how to prevent cache poisoning if you use the Microsoft Internet Information Server (IIS) web server. *Cache poisoning* is a method of changing cache contents to include different pages from the same site. For example, it is possible to inject an HTTP 404 (Not Found) error page in place of some benign page (for example, the storefront home page), which can lead to a potential denial-of-service (DoS). The malicious page URLs are cached by Varnish or Redis, hence the name *page cache poisoning*.

These types of attacks can be difficult to detect because they do not result in errors in web server logs.

This solution applies to the following Magento versions:

*	2.0.10 and later
*	2.1.2 and later

<div class="bs-callout bs-callout-info" id="info">
  <p>This topic is intended for experienced IIS administrators. </p>
</div>

### Description
The issue results if URL rewrites are enabled on the IIS server, and any of the following HTTP headers are altered before the request reaches the Varnish or Redis caching service:

*	`X-Rewrite-Url`
*	`X-Original-Url`
*	`IIS-wasurlrewritten`
*	`Unencoded-URL`
*	`Orig-path-info`

If these headers are changed, the resulting URL and content are cached, resulting in potential vulnerabilities.

### Solution
We provide the option to remove the values of all of the preceding headers based on the IIS server setting for `Enable_IIS_Rewrites`.

*	If `Enable_IIS_Rewrites` is set to `0`,  the values of the headers are removed.
*	If `Enable_IIS_Rewrites` is set to `1`, the values of the headers are left intact.

	<div class="bs-callout bs-callout-warning">
    	<p>If you set <code>Enable_IIS_Rewrites</code> to <code>1</code>, you must not allow the values of the preceding headers to be altered before the request reaches the IIS web server.</p>
       
	</div>


<!--
	http://www.iis.net/learn/extensions/url-rewrite-module/url-rewrite-module-configuration-reference

	http://www.iis.net/learn/extensions/url-rewrite-module/url-rewrite-module-configuration-reference#UsingServerVars

	http://www.iis.net/learn/extensions/url-rewrite-module

	http://www.iis.net/learn/extensions/url-rewrite-module/setting-http-request-headers-and-iis-server-variables -->