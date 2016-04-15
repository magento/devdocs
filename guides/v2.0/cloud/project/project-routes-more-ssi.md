---
layout: default
group: cloud
subgroup: 07_project
title: Server side includes
menu_title: Server side includes
menu_order: 20
menu_node: 
level3_menu_node: level3child
level3_subgroup: routes
github_link: cloud/project/project-routes-more-ssi.md
---

## Server side includes
[Server side includes](http://httpd.apache.org/docs/current/howto/ssi.html){:target="_site"} (SSI) are directives in HTML pages that get evaluated on the server while the pages are being rendered. Use of server side includes enables you to add dynamically generated content to an existing HTML page without having to serve the entire page. 

More information about [nginx SSI](http://nginx.org/en/docs/http/ngx_http_ssi_module.html){:target="_blank"}.

You can activate or deactivate SSI on a per-route basis in your 
`.magento/routes.yaml`; for example:

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

SSI enables you to include in your HTML response directives that cause the
server fill in parts of the HTML, respecting the your [caching configuration]({{ site.gdeurl }}cloud/project/project-routes-more-cache.html).

The following example shows how to insert a dynamic date control at the top of a page and another date control at the bottom that updates every 600 seconds:

Add the following to any page, such as `/index.php`:

{% highlight php startinline=true %}
echo date(DATE_RFC2822);
<!--#include virtual="time.php" -->
{% endhighlight %}

Add the following to `time.php`:

{% highlight php startinline=true %}
header("Cache-Control: max-age=600");
echo date(DATE_RFC2822);
{% endhighlight %}

Browse to the page on which you added the control. Refresh the page several times and notice that the time at the top of the page changes but the time on the bottom changes only every 600 seconds.
