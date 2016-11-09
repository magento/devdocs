---
layout: default
group: config-guide
subgroup: 500_sites
title: Set up multiple websites with nginx (tutorial)
menu_title: Set up multiple websites with nginx (tutorial)
menu_order: 2
menu_node: 
version: 2.0
github_link: config-guide/multi-site/ms_nginx.md
---

## Set up multiple websites with nginx {#ms-nginx-over}
This tutorial shows you step-by-step how to set up multiple stores with Magento using nginx. We assume the following:

*	You use one virtual host per store; the virtual host configuration files are located in `/etc/nginx/sites-available`
*	You use `nginx.conf.sample` provided by Magento with only the modifications discussed in this tutorial
*	The Magento software is installed in `/var/www/html/magento2`
*	You have two websites other than the default:

	*	`french.example.com` with website code `french` and storeview code `fr`
	*	`german.example.com` with website code `german` and storeview code `de`

Setting up multiple stores consists of the following primary tasks:

1.	[Define websites, stores, and store views](#ms-nginx-website) in the Magento Admin.
2.	Create one [nginx virtual host](#ms-nginx-vhost) per Magento website or store view.
3.	Pass the values of the [Magento variables](#ms-nginx-vars) `$MAGE_RUN_TYPE` and `$MAGE_RUN_CODE` to nginx using the Magento-provided `nginx.conf.sample`.

	*	`$MAGE_RUN_TYPE` can be either `store` or `website`

		*	Use `website` to load your website in your storefront.
		*	Use `store` to load any store view in your storefront.

	*	`$MAGE_RUN_CODE` is the unique website or store view code that corresponds to `$MAGE_RUN_TYPE`

## Step 1: Configure websites, stores, and store views in the Magento Admin {#ms-nginx-website}

{% collapsible To create websites, stores, and store views:%}

1.	Log in to the Magento Admin as a user authorized to create websites, stores, and store views.
2.	Click **Stores** > **All Stores**.
3.	To create a website, click **Create Website**.
4.	To create a store, click **Create Store**.
5.	Associate the store with a category.
6.	To create a store view, click **Create Store View**.
6.	When you create your website and store view, make note of their unique identifiers because you'll use them later.

{% endcollapsible %}

## Step 2: Create virtual hosts {#ms-nginx-vhosts}
This section discusses how to load websites on the storefront. You can use either websites or store views; if you use store views, you must adjust parameter values accordingly. You must complete the tasks in this section as a user with `root` privileges.

{% collapsible To create virtual hosts: %}

Open a text editor and add the following contents to the file:

{% highlight xml %}
map $http_host $MAGE_RUN_CODE {
   	french.example.com french;
}

server {
   	listen 80;
   	server_name french.example.com;
   	set $MAGE_ROOT /var/www/html/magento2;
   	set $MAGE_MODE developer;
   	include /var/www/html/magento2/nginx.conf.sample;
}
{% endhighlight %}

Save the file as `/etc/nginx/sites-available/french.example.com`.

Create another file in the same location with the following contents:

{% highlight xml %}
map $http_host $MAGE_RUN_CODE {
   	german.example.com german;
}

server {
   	listen 80;
   	server_name german.example.com;
   	set $MAGE_ROOT /var/www/html/magento2;
   	set $MAGE_MODE developer;
   	include /var/www/html/magento2/nginx.conf.sample;
}
{% endhighlight %}

Save the file as `/etc/nginx/sites-available/german.example.com`.
Create symbolic links in the `/etc/nginx/sites-enabled` directory:

	cd /etc/nginx/sites-enabled
	ln -s /etc/nginx/sites-available/french.example.com french.example.com
	ln -s /etc/nginx/sites-available/german.example.com german.example.com

For more detail about the map directive, see [nginx documentation on the map directive](http://nginx.org/en/docs/http/ngx_http_map_module.html#map){:target="_blank"}.

{% endcollapsible %}

## Step 3. Pass the Magento variables to nginx {#ms-nginx-vars}

{% collapsible To pass Magento variables to nginx: %}

1.	Open `/var/www/html/magento2/nginx.conf` in a text editor.
2.	Locate the following block:

		location ~ (index|get|static|report|404|503)\.php$ { ... }
3.	In that block, add the following lines:

		fastcgi_param  MAGE_RUN_TYPE website;
		fastcgi_param  MAGE_RUN_CODE $MAGE_RUN_CODE;
		include fastcgi_params;
4.	Reload the nginx configuration:

		service nginx reload

{% endcollapsible %}

## Verify your site  {#ms-nginx-verify}
Unless you have DNS set up for your stores' URLs, you must add a static route to the host in your `hosts` file:

1.	Locate your operating system's [`hosts` file](https://en.wikipedia.org/wiki/Hosts_(file)#Location_in_the_file_system){:target="_blank"}.
2.	Add the static route in the format:

		<ip address> french.example.com
		<ip address> german.example.com
3.	Go to one of the preceding URLs in your browser.

You're done!
