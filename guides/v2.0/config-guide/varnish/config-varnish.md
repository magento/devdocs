---
layout: default
group: config-guide
subgroup: Varnish
title: Configure Varnish
menu_title: Configure Varnish
menu_order: 1
menu_node: parent
github_link: config-guide/config/redis/config-varnish.md
---


#### Contents
*	<a href="#config-varnish-over">Overview of the Varnish solution</a>
*	<a href="#config-varnish-install">Install Varnish</a>
*	<a href="#config-varnish-config">Configure Magento to use Varnish</a>

<h2 id="config-varnish-over">Overview of the Varnish solution</h2>
<a href="https://www.varnish-cache.org/" target="_blank">Varnish Cache</a> is an open source web application accelerator (also referred to as an *HTTP accelerator* or *caching HTTP reverse proxy*). Varnish stores (or caches) files or fragments of files in memory; this enables Varnish to reduce the response time and network bandwidth consumption on future, equivalent requests. Unlike other servers like Apache and nginx, Varnish was designed for use exclusively with the HTTP protocol.

Magento 2 supports Varnish versions 3.0.5 or later or any Varnish 4.x version.

For more information about Varnish, see:

*	<a href="https://en.wikipedia.org/wiki/Varnish_%28software%29" target="_blank">wikipedia</a>
*	<a href="https://www.varnish-cache.org/about" target="_blank">About Varnish</a>
*	<a href="https://www.varnish-software.com/book/4.0/chapters/Introduction.html#what-is-varnish" target="_blank">Introduction to Varnish</a>

<h2 id="config-varnish-install">Install Varnish</h2>
Installing the Varnish software is beyond the scope of this guide. For more information about installing Varnish, see:

*	<a href="https://www.varnish-cache.org/docs" target="_blank">Varnish installation guides</a>
*	<a href="http://www.tecmint.com/install-varnish-cache-web-accelerator" target="_blank">How to install Varnish (Tecmint)</a>

<h2 id="config-varnish-config">Configure Magento to use Varnish</h2>
The following sections discuss how to configure your web server and Magento to use Varnish:

*	TBD
*	TBD
*	TBD

<h3 id="config-varnish-config-web">Configure your web server</h3>
Configure your web server to listen on a port other than the default port 80 because Varnish responds directly to incoming HTTP requests, not the web server. 

In the sections that follow, use use port 8080 as an example.

Consult the documentation provided with your web server for details.

<h3 id="config-varnish-config-sysvcl">Modify the Varnish system configuration</h3>
To modify the Varnish system configuration:

1.	As a user with `root` privileges, open `/etc/sysconfig/varnish` in a text editor.
2.	Set the Varnish listen port to 80:

		VARNISH_LISTEN_PORT=80

3.	Comment out the following:

		## Alternative 1, Minimal configuration, no VCL
		#DAEMON_OPTS="-a :6081 \
		#             -T localhost:6082 \
		#             -b localhost:8080 \
		#             -u varnish -g varnish \
		#             -s file,/var/lib/varnish/varnish_storage.bin,1G"
		## Alternative 2, Configuration with VCL
		#DAEMON_OPTS="-a :6081 \
		#             -T localhost:6082 \
		#             -f /etc/varnish/default.vcl \
		#             -u varnish -g varnish \
		#             -S /etc/varnish/secret \
		#             -s file,/var/lib/varnish/varnish_storage.bin,1G"


4.	Save your changes to `/etc/sysconfig/varnish` and exit the text editor.

<h3 id="config-varnish-config-default">Modify <code>default.vcl</code></h3>


#### Related topics

 *  <a href="{{ site.gdeurl }}config-guide/config/config-create.html">Create or extend configuration types</a>
 *  <a href="{{ site.gdeurl }}config-guide/config/config-php.html">Magento's deployment configuration</a>