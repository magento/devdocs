---
layout: default
group: compman
subgroup: ZZ_Troubleshooting
title: Maintenace mode options for upgrade
menu_title: Maintenace mode options for upgrade
menu_node: 
menu_order: 200
github_link: comp-mgr/trouble/cman/maint-mode.md
---

## Maintenace mode options for upgrade
This topic discusses how you can create a custom maintenance page to display to users while your Magento application is being upgraded. Creating a custom page is optional but recommended because your site is accessible during part of the upgrade.

Creating a custom page to which to redirect users prevents any access to the site and also informs your users that the site is undergoing maintenance.

<div class="bs-callout bs-callout-info" id="info">
  <p>You must perform the tasks in this section as a user with <code>root</code> privileges.</p>
</div>

See one of the following sections for more information:

*	[Custom maintenance page for Apache](#compman-trouble-maint-apache)
*	[Custom maintenance page for nginx](#compman-trouble-maint-nginx)


## Custom maintenance page for Apache {#compman-trouble-maint-apache}
This section discusses how to create a custom maintenance page and how to redirect traffic to it.

The example in this section shows how to modify the following files, which is one way to set up your maintenance page:

*	Apache 2.4: `/etc/apache2/sites-available/000-default.conf`
*	Apache 2.2: `/etc/apache2/sites-available/default` (Ubuntu), `/etc/httpd/conf/httpd.conf` (CentOS)

To create a maintenance page and redirect to it:

1.	Create a maintenance page named `maintenance.html` in your web server's docroot with the following contents.

	A sample follows:

	{% highlight html %}
	<!DOCTYPE html>
	<html>
	<head>
	<title>Temporarily Offline</title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<style>
	h1
	{ font-size: 50px; }

	body
	{ text-align:center; font: 20px Helvetica, sans-serif; color: #333; }

	</style>
	</head>
	<body>
	<h1>Temporarily offline</h1>
	<p>We're down for a short time to perform maintenance on our site to give you the best possible experience. Check back soon!</p>
	</body>
	</html>
	{% endhighlight %}

2.	Update your Apache configuration to do the following:

	*	Redirect all traffic to the maintenance page
	*	Whitelist certain IPs so an administrator can run the System Upgrade utility to upgrade the Magento software.

		The following example whitelists 192.0.2.110.

	Add the following at the end of your Apache configuration file:

		RewriteEngine On
		RewriteCond %{REMOTE_ADDR} !^127\.0\.0\.1
		RewriteCond %{DOCUMENT_ROOT}/maintenance.html -f
		RewriteCond %{DOCUMENT_ROOT}/maintenance.enable -f
		RewriteCond %{SCRIPT_FILENAME} !maintenance.html
		RewriteRule ^.*$ /maintenance.html [R=503,L]
		ErrorDocument 503 /maintenance.html
		Header Set Cache-Control "max-age=0, no-store"

3.	Restart Apache:

	*	CentOS: `service httpd restart`
	*	Ubuntu: `service apache2 restart`

4. Enter the following command:

		touch <web server docroot>/maintenance.enable
5.	[Upgrade your system]({{ site.gdeurl21 }}comp-mgr/upgrader/upgrade-start.html).
7.	Test your site to make sure it functions correctly.
6.	After the upgrade is done, delete `maintenance.enable`.

## Custom maintenance page for nginx {#compman-trouble-maint-nginx}
This section discusses how to create a custom maintenance page and how to redirect traffic to it.

The example in this section shows how to modify the following files, which is one way to set up your maintenance page:

To create a maintenance page and redirect to it:

1.	Create a maintenance page named `maintenance.html` in your web server's docroot with the following contents.

	A sample follows:

	{% highlight html %}
	<!DOCTYPE html>
	<html>
	<head>
	<title>Temporarily Offline</title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<style>
	h1
	{ font-size: 50px; }

	body
	{ text-align:center; font: 20px Helvetica, sans-serif; color: #333; }

	</style>
	</head>
	<body>
	<h1>Temporarily offline</h1>
	<p>We're down for a short time to perform maintenance on our site to give you the best possible experience. Check back soon!</p>
	</body>
	</html>
	{% endhighlight %}

2.	Include the following at the beginning of your `<your Magento install dir>/nginx.conf`.

	The following whitelists IP address 192.0.2.110 on a system where the nginx docroot is `/var/www/html`.

	{% highlight xml %}
	location / {

	    allow 192.0.2.110; deny all;

	if (-f $document_root/maintenance.html)
	{ return 503; }

	}

 	   Error pages.
 	   error_page 503 /maintenance.html;
	    location = /maintenance.html { root /var/www/html; }
	{% endhighlight %}

    The line below will let you access the web server. Comment this line and reload the
    the config once you are ready to lift the maintenance mode.

3. Enter the following command to reload the nginx configuration:

		service nginx reload

5.	[Upgrade your system]({{ site.gdeurl21 }}comp-mgr/upgrader/upgrade-start.html).
7.	Test your site to make sure it functions correctly.
6.	Remove the lines you added to `<your Magento install dir>/nginx.conf`.
5.	Reload the nginx configuration:

		service nginx reload
