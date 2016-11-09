---
layout: default
group: config-guide
subgroup: 500_sites
title: Set up multiple websites with nginx
menu_title: Set up multiple websites with nginx
menu_order: 2
menu_node: 
version: 2.0
github_link: config-guide/multi-site/ms_nginx.md
---

## Set up multiple websites with nginx {#ms-nginx-over}
The example in this topic assumes you have set up your nginx configuration as recommended in the `<Magento root>/nginx.conf.sample` provided with the Magento software. 

That is, you should have a small, main configuration file that includes your Magento-specific configuration in the server block. This file is referred to in this topic as `main.conf`; the configuration file based on the Magento-provided sample is referred to in this topic as `nginx.magento.conf`.

`$MAGE_RUN_TYPE` can be either `store` or `website`

`$MAGE_RUN_CODE` is the unique code that corresponds to `$MAGE_RUN_TYPE`

This section discusses how to have two websites at `site1.store.com` and `site2.store.com` that use the codes `site1` and `site2`. Multiple hosts require only one entry point. 

Step 1. In your nginx virtual host configuration file, write a map directive to set the `$MAGE_RUN_CODE` variable in the `server` directive.

{% highlight xml %}
map $http_host $MAGE_RUN_CODE {
    site1.store.com site1;
    site2.store.com site2;
}
{% endhighlight %}

The preceding sets the `$MAGE_RUN_CODE` variable based on the host. For example, if the host to which the request is made is `site1.store.com`, `$MAGE_RUN_CODE` is set to `site1`. See [nginx documentation on the map directive](http://nginx.org/en/docs/http/ngx_http_map_module.html#map){:target="_blank"} for more details.

Step 2. Send `MAGE_RUN_CODE` and `MAGE_RUN_TYPE` variables to the php-fpm server in your nginx configuration file (for example, `/var/www/html/magento2/nginx.conf`).

Inside this block:

	location ~ (index|get|static|report|404|503)\.php$ { ... }

Add the following two lines:

	...
	fastcgi_param  MAGE_RUN_TYPE website;
	fastcgi_param  MAGE_RUN_CODE $MAGE_RUN_CODE;
	...

Step 3: Reload your nginx configuration as a user with `root` privileges:

	service nginx reload
