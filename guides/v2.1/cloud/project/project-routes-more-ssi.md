---
group: cloud
subgroup: 090_configure
title: Server side includes
menu_title: Server side includes
menu_order: 45
menu_node:
level3_menu_node: level3child
level3_subgroup: routes
version: 2.1
functional_areas:
  - Cloud
  - Setup
---

[Server side includes](http://httpd.apache.org/docs/current/howto/ssi.html){:target="_site"} (SSI) are directives in {% glossarytooltip a2aff425-07dd-4bd6-9671-29b7edefa871 %}HTML{% endglossarytooltip %} pages that get evaluated on the server while the pages are being rendered. Use of {% glossarytooltip ebe2cd14-d6d4-4d75-b3d7-a4f2384e5af9 %}server side{% endglossarytooltip %} includes enables you to add dynamically generated content to an existing HTML page without having to serve the entire page.

More information about [nginx SSI](http://nginx.org/en/docs/http/ngx_http_ssi_module.html){:target="_blank"}.

You can activate or deactivate SSI on a per-route basis in your
`.magento/routes.yaml`; for example:

```yaml
    "http://{default}/":
	    type: upstream
	    upstream: "myapp:php"
	    cache:
	      enabled: false
	    ssi:
	        enabled: true
	"http://{default}/time.php":
	    type: upstream
	    upstream: "myapp:php"
	    cache:
	      enabled: true
```

SSI enables you to include in your HTML response directives that cause the
server fill in parts of the HTML, respecting the your [caching configuration]({{ page.baseurl }}/cloud/project/project-routes-more-cache.html).

The following example shows how to insert a dynamic date control at the top of a page and another date control at the bottom that updates every 600 seconds:

Add the following to any page, such as `/index.php`:

```php
echo date(DATE_RFC2822);
<!--#include virtual="time.php" -->
```

Add the following to `time.php`:

```php
header("Cache-Control: max-age=600");
echo date(DATE_RFC2822);
```

Browse to the page on which you added the control. Refresh the page several times and notice that the time at the top of the page changes but the time on the bottom changes only every 600 seconds.
