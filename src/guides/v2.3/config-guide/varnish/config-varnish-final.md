---
group: configuration-guide
title: Final verification
functional_areas:
  - Configuration
  - System
  - Setup
---

Now that you're using the `default.vcl` generated for you by Magento, you can perform some final verifications to make sure Varnish is working.

### Verify HTTP response headers {#config-varnish-final-verify-headers}

Use `curl` or another utility to view HTTP response headers when you visit any Magento page in a web browser.

First, make sure you are using Magento's [developer mode]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-mode.html#change-to-developer-mode); otherwise, you won't see the headers.

For example,

```bash
curl -I -v --location-trusted 'http://192.0.2.55/magento2'
```

Important headers:

```terminal
X-Magento-Cache-Control: max-age=86400, public, s-maxage=86400
Age: 0
X-Magento-Cache-Debug: MISS
```

{:.bs-callout-info}
This value is also acceptable: `X-Magento-Cache-Debug: HIT`.

### Check page load times {#config-varnish-final-response}

If Varnish is working, any Magento page with cacheable blocks should load in less than 150ms. Examples of such pages are the front door and [storefront](https://glossary.magento.com/storefront) [category](https://glossary.magento.com/category) pages.

Use a browser inspector to measure page load times.

For example, to use the Chrome inspector:

1. Access any cacheable Magento page in Chrome.
1. Right-click anywhere on the page.
1. From the pop-up menu, click **Inspect Element**
1. In the inspector pane, click the **Network** tab.
1. Refresh the page.
1. Scroll to the top of the inspector pane so you can see the [URL](https://glossary.magento.com/url) of the page you are viewing.

   The following figure shows an example of loading the `magento2` index page.<br><br>
   ![Click the page you're viewing]({{ site.baseurl }}/common/images/config_varnish_inspector.png)

   The page load time displays next to the page URL. In this case, the load time is 5 ms. This helps confirm that Varnish cached the page.

1. To view HTTP response headers, click the page URL (in the Name column).

   You can view HTTP headers which are discussed in more detail in [Verify HTTP response headers](#config-varnish-final-verify-headers).

### Verify the Magento cache {#config-varnish-final-verify-cache}

Make sure the `<magento_root>/var/page_cache` directory is empty:

1. Log in to your Magento server, or switch to, the [Magento file system owner](https://glossary.magento.com/magento-file-system-owner).
1. Enter the following command:

   ```bash
   rm -rf <magento_root>/var/page_cache/*
   ```

1. Access one or more cacheable Magento pages.
1. Check the `var/page_cache/` directory.

   If the directory is empty, congratulations! You successfully configured Varnish and Magento to work together!

1. If you cleared the `var/page_cache/` directory, restart Varnish.

 {:.bs-callout-info}
If you encounter 503 (Backend Fetch Failed) errors, see [Troubleshooting 503 (Service Unavailable) errors](https://support.magento.com/hc/en-us/articles/360034631211).

{:.ref-header}
Related topics

*  [How Magento cache clearing works with Varnish]({{ page.baseurl }}/config-guide/varnish/use-varnish-cache.html)
*  [How Varnish caching works]({{ page.baseurl }}/config-guide/varnish/use-varnish-cache-how.html)
