---
layout: default
group: config-guide
subgroup: 09_Varnish
title: Final verification
menu_title: Final verification
menu_order: 100
menu_node: 
version: 2.0
github_link: config-guide/varnish/config-varnish-final.md
---


<h2 id="config-varnish-final-verify">Final verification</h2>
Now that you're using the `default.vcl` generated for you by Magento, you can perform some final verifications to make sure Varnish is working.

<h3 id="config-varnish-final-verify-headers">Verify HTTP response headers</h3>
Use `curl` or another utility to view HTTP response headers when you visit any Magento page in a web browser. 

First, make sure you are using Magento's [developer mode]({{ site.gdeurl }}config-guide/cli/config-cli-subcommands-mode.html##config-mode-change); otherwise, you won't see the headers.

For example,

	curl -I -v --location-trusted 'http://192.0.2.55/magento2'

Important headers:

	X-Magento-Cache-Control: max-age=86400, public, s-maxage=86400
	Age: 0
	X-Magento-Cache-Debug: MISS

<div class="bs-callout bs-callout-info" id="info">
	<p>This value is also acceptable: <code>X-Magento-Cache-Debug: HIT</code></p>
</div>

<h3 id="config-varnish-final-response">Check page load times</h3>
If Varnish is working, any Magento page with cacheable blocks should load in less than 150ms. Examples of such pages are the front door and storefront category pages.

Use a browser inspector to measure page load times.

For example, to use the Chrome inspector:

1.	Access any cacheable Magento page in Chrome.
2.	Right-click anywhere on the page.
3.	From the pop-up menu, click **Inspect Element**
4.	In the inspector pane, click the **Network** tab.
5.	Refresh the page.
6.	Scroll to the top of the inspector pane so you can see the URL of the page you are viewing.

	The following figure shows an example of loading the `magento2` index page.<br><br>
	<img src="{{ site.baseurl }}common/images/config_varnish_inspector.png" alt="Click the page you're viewing">

	The page load time displays next to the page URL. In this case, the load time is 5 ms. This helps confirm that Varnish cached the page.

7.	To view HTTP response headers, click the page URL (in the Name column).

	You can view HTTP headers which are discussed in more detail in <a href="#config-varnish-final-verify-headers">Verify HTTP response headers</a>.

<h3 id="config-varnish-final-verify-cache">Verify the Magento cache</h3>
Make sure the `<your Magento install dir>/var/page_cache` directory is empty:

1.	Log in to your Magento server, or switch to, the Magento file system owner.
2.	Enter the following command:

		rm -rf <your Magento install dir>/var/page_cache/*

3.	Access one or more cacheable Magento pages.
4.	Check the `var/page_cache/` directory.

	If the directory is empty, congratulations! You successfully configured Varnish and Magento to work together!
5.	If you cleared the `var/page_cache/` directory, restart Varnish.

<div class="bs-callout bs-callout-info" id="info">
	<p>If you encounter 503 (Backend Fetch Failed) errors, see <a href="{{ site.gdeurl }}config-guide/varnish/tshoot-varnish-503.html">Troubleshooting 503 (Service Unavailable) errors</a>.</p>
</div>

#### Next steps
*	<a href="{{ site.gdeurl }}config-guide/varnish/use-varnish-cache.html">How Magento cache clearing works with Varnish</a>
*	<a href="{{ site.gdeurl }}config-guide/varnish/use-varnish-cache-how.html">How Varnish caching works</a>
