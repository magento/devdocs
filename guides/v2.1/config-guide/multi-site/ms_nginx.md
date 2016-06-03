---
layout: default
group: config-guide
subgroup: 06_sites
title: Set up multiple websites with nginx
menu_title: Set up multiple websites with nginx
menu_order: 2
menu_node: 
github_link21: config-guide/multi-site/ms_nginx.md
---

#### Contents
*	[Set up multiple websites with nginx](#ms-nginx-over)
*	[Multiple stores using paths](#ms-nginx-path)
*	[Multiple websites using hosts](#ms-nginx-host)

## Set up multiple websites with nginx {#ms-nginx-over}
To support multiple Magento websites or stores with nginx, you can either:

*	Locate the websites at [different URL paths](#ms-nginx-path) (like `store.com/website1` and `store.com/website2`)
*	Use different hosts (like `store1.store.com` and `store2.store.com`)

The examples in this topic assume you have set up your nginx configuration as recommended in the `<Magento root>/nginx.conf.sample` provided with the Magento software. 

That is, you should have a small, main configuration file that includes your Magento-specific config in the server block. This file is referred to as `main.conf`; the configuration file based on the Magento-provided sample is referred to here as `nginx.magento.conf`.

## Multiple stores using paths {#ms-nginx-path}
This example shows how to configure your nginx server to support a new website with the code `example_site` using the path `/example_site`. 

You can use the same method to run multiple stores using the value `store` instead of `website` for the `$MAGE_RUN_TYPE` variable.

Step 1: Create an entry point at `<Magento root dir>/pub/example_site/index.php`

{% highlight php startinline=true %}
require __DIR__ . '/../../app/bootstrap.php';
$params = $_SERVER;
$params[\Magento\Store\Model\StoreManager::PARAM_RUN_CODE] = 'example_site';
$params[\Magento\Store\Model\StoreManager::PARAM_RUN_TYPE] = 'website';
$bootstrap = \Magento\Framework\App\Bootstrap::create(BP, $params);
/** @var \Magento\Framework\App\Http $app */
$app = $bootstrap->createApplication('Magento\Framework\App\Http');
$bootstrap->run($app);
{% endhighlight %}

Step 2: Include the following block in your `nginx.conf` file:

{% highlight make %}
location /example_site {
    location ~ ^/example_site/index.php {
        try_files $uri =404;
        fastcgi_pass   fastcgi_backend;
        fastcgi_buffers 1024 4k;

        fastcgi_param  PHP_FLAG  "session.auto_start=off \n suhosin.session.cryptua=off";
        fastcgi_param  PHP_VALUE "memory_limit=768M \n max_execution_time=600";
        fastcgi_read_timeout 600s;
        fastcgi_connect_timeout 600s;
        fastcgi_param  MAGE_MODE $MAGE_MODE;

        fastcgi_index  index.php;
        fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
        include        fastcgi_params;
    }

    location /example_site/ {
        try_files $uri $uri/ /example_site/index.php?$args;
    }
}
{% endhighlight %}

Step 3: Reload your nginx configuration

	service nginx reload

## Multiple websites using hosts {#ms-nginx-host}
This section discusses how to have two websites at `site1.store.com` and `site2.store.com` that use the codes `site1` and `site2`. Multiple hosts require only one entry point. 

You can use the same method to run multiple stores using the value `store` instead of `website` for the `$MAGE_RUN_TYPE` variable.

Step 1. Write a map directive to set the `$MAGE_RUN_CODE` variable.

{% highlight php startinline=true %}
map $http_host $MAGE_RUN_CODE {
    site1.store.com site1;
    site2.store.com site2;
}
{% endhighlight %}

Step 2. Send `MAGE_RUN_CODE` and `MAGE_RUN_TYPE` variables to the php-fpm server.
Inside this block:

	location ~ (index|get|static|report|404|503)\.php$ { ... }

Add the following two lines:

	...
	fastcgi_param  MAGE_RUN_TYPE website;
	fastcgi_param  MAGE_RUN_CODE $MAGE_RUN_MODE;
	...

Step 3: Reload your nginx configuration

	service nginx reload