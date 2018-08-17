---
group: config-guide
subgroup: 09_Varnish
title: Final verification
menu_title: Final verification
menu_order: 100
menu_node:
version: 2.0
functional_areas:
  - Configuration
  - System
  - Setup
---

Now that you're using the `default.vcl` generated for you by Magento, you can perform some final verifications to make sure Varnish is working.

### Verify HTTP response headers   {#config-varnish-final-verify-headers}

Use `curl` or another utility to view HTTP response headers when you visit any Magento page in a web browser.

First, make sure you are using Magento's [developer mode]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-mode.html#config-mode-change); otherwise, you won't see the headers.

For example,

	curl -I -v --location-trusted 'http://192.0.2.55/magento2'

Important headers:

	X-Magento-Cache-Control: max-age=86400, public, s-maxage=86400
	Age: 0
	X-Magento-Cache-Debug: MISS

<div class="bs-callout bs-callout-info" id="info">
	<p>This value is also acceptable: <code>X-Magento-Cache-Debug: HIT</code></p>
</div>

### Check page load times   {#config-varnish-final-response}

If Varnish is working, any Magento page with cacheable blocks should load in less than 150ms. Examples of such pages are the front door and {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %} {% glossarytooltip 50e49338-1e6c-4473-8527-9e401d67ea2b %}category{% endglossarytooltip %} pages.

Use a browser inspector to measure page load times.

For example, to use the Chrome inspector:

1.	Access any cacheable Magento page in Chrome.
2.	Right-click anywhere on the page.
3.	From the pop-up menu, click **Inspect Element**
4.	In the inspector pane, click the **Network** tab.
5.	Refresh the page.
6.	Scroll to the top of the inspector pane so you can see the {% glossarytooltip a05c59d3-77b9-47d0-92a1-2cbffe3f8622 %}URL{% endglossarytooltip %} of the page you are viewing.

	The following figure shows an example of loading the `magento2` index page.<br><br>
	<img src="{{ site.baseurl }}/common/images/config_varnish_inspector.png" alt="Click the page you're viewing">

	The page load time displays next to the page URL. In this case, the load time is 5 ms. This helps confirm that Varnish cached the page.

7.	To view HTTP response headers, click the page URL (in the Name column).

	You can view HTTP headers which are discussed in more detail in <a href="#config-varnish-final-verify-headers">Verify HTTP response headers</a>.

### Verify the Magento cache   {#config-varnish-final-verify-cache}

Make sure the `<your Magento install dir>/var/page_cache` directory is empty:

1.	Log in to your Magento server, or switch to, the {% glossarytooltip 5e7de323-626b-4d1b-a7e5-c8d13a92c5d3 %}Magento file system owner{% endglossarytooltip %}.
2.	Enter the following command:

		rm -rf <your Magento install dir>/var/page_cache/*

3.	Access one or more cacheable Magento pages.
4.	Check the `var/page_cache/` directory.

	If the directory is empty, congratulations! You successfully configured Varnish and Magento to work together!
5.	If you cleared the `var/page_cache/` directory, restart Varnish.

<div class="bs-callout bs-callout-info" id="info">
	<p>If you encounter 503 (Backend Fetch Failed) errors, see <a href="{{ page.baseurl }}/config-guide/varnish/tshoot-varnish-503.html">Troubleshooting 503 (Service Unavailable) errors</a>.</p>
</div>

#### Next steps

*	<a href="{{ page.baseurl }}/config-guide/varnish/use-varnish-cache.html">How Magento cache clearing works with Varnish</a>
*	<a href="{{ page.baseurl }}/config-guide/varnish/use-varnish-cache-how.html">How Varnish caching works</a>
