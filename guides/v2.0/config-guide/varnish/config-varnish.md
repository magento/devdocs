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
*	<a href="#config-varnish-process">Process overview</a>
*	<a href="#config-varnish-install">Install Varnish</a>
*	<a href="#config-varnish-config-var">Configure Varnish</a>
*	<a href="#config-varnish-magento">Configure Magento to use Varnish</a>

<h2 id="config-varnish-over">Overview of the Varnish solution</h2>
<a href="https://www.varnish-cache.org/" target="_blank">Varnish Cache</a> is an open source web application accelerator (also referred to as an *HTTP accelerator* or *caching HTTP reverse proxy*). Varnish stores (or caches) files or fragments of files in memory; this enables Varnish to reduce the response time and network bandwidth consumption on future, equivalent requests. Unlike other servers like Apache and nginx, Varnish was designed for use exclusively with the HTTP protocol.

Magento 2 supports Varnish versions 3.0.5 or later or any Varnish 4.x version.

For more information about Varnish, see:

*	<a href="https://en.wikipedia.org/wiki/Varnish_%28software%29" target="_blank">wikipedia</a>
*	<a href="https://www.varnish-cache.org/about" target="_blank">About Varnish</a>
*	<a href="https://www.varnish-software.com/book/4.0/chapters/Introduction.html#what-is-varnish" target="_blank">Introduction to Varnish</a>

<div class="bs-callout bs-callout-info" id="info">
	<ul><li>Except where noted, you must enter all commands discussed in this topic as a user with <code>root</code> privileges.</li>
		<li>This topic is written for Varnish on CentOS. If you're setting up Varnish on Ubuntu, some commands are likely different. Consult Varnish documentation for more information.</li></ul>
</div>

<h2 id="config-varnish-issues">Known issues</h2>
TBD

<h2 id="config-varnish-process">Process overview</h2>
TBD, say what is going to happen:

1.	Install Varnish software
2.	Minimal config
3.	Make sure it works
4.	Configure Magento, replace default.vcl
5.	Be amazed

<h2 id="config-varnish-install">Install Varnish</h2>
Installing the Varnish software is beyond the scope of this guide. For more information about installing Varnish, see:

*	<a href="https://www.varnish-cache.org/docs" target="_blank">Varnish installation guides</a>
*	<a href="http://www.tecmint.com/install-varnish-cache-web-accelerator" target="_blank">How to install Varnish (Tecmint)</a>
*	<a href="http://wiki.mikejung.biz/Varnish" target="_blank">wiki</a>

<h2 id="config-varnish-version">Confirm your Varnish version</h2>
Enter the following command to display the version of Varnish you're running:

	varnishd -V

A sample follows:

	varnishd (varnish-4.0.3 revision b8c4a34)
	Copyright (c) 2006 Verdens Gang AS
	Copyright (c) 2006-2014 Varnish Software AS

Make sure the version is at least 3.0.5 or any version of 4.x before continuing.

<h2 id="config-varnish-config-var">Configure Varnish</h2>
The following sections discuss how to configure your web server and Magento to use Varnish:

*	TBD
*	TBD
*	TBD

<h3 id="config-varnish-config-web">Configure your web server</h3>
Configure your web server to listen on a port other than the default port 80 because Varnish responds directly to incoming HTTP requests, not the web server. 

In the sections that follow, use use port 8080 as an example.

To change the Apache 2.2 listen port:

1.	Open `/etc/httpd/conf/httpd.conf` in a text editor.
2.	Locate the `Listen` directive.
3.	Change the value of the listen port to `8080`. (You can use any value you want.)
4.	Save your changes to `httpd.conf` and exit the text editor.

<h3 id="config-varnish-config-sysvcl">Modify the Varnish system configuration</h3>
To modify the Varnish system configuration:

1.	Open `/etc/sysconfig/varnish` in a text editor.
2.	Set the Varnish listen port to 80:

		VARNISH_LISTEN_PORT=80

3.	If necessary, comment out the following:

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
This section discusses how to provide minimal configuration so Varnish caches pages and you can verify it works before you configure Magento to use it.

To minimally configure Varnish:

1.	Back up `default.vcl`:

		cp /etc/varnish/default.vcl /etc/varnish/default.vcl.bak

2.	Open `/etc/varnish/default.vcl` in a text editor.
3.	Locate the following stanza:

		backend default {
  			.host = "127.0.0.1";
  			.port = "80";
		}

4.	Replace the value of `.host` with the fully qualified host name or IP address and listen port of the Varnish *backend* or *origin server*; that is, the server providing the content Varnish will accelerate. Typically, this is your web server. 

	<a href="https://www.varnish-cache.org/docs/trunk/users-guide/vcl-backends.html" target="_blank">More information</a>
5.	Replace the value of `.port` with the web server's listen port (8080 in this example).

	Example: Varnish and Apache are both installed on host TBD and Apache is listening on port 8080:

		backend default {
  			.host = "192.0.2.55"; 
  			.port = "8080";
		}		
		
7.	Save your changes to `default.vcl` and exit the text editor.
8.	Restart Apache:

		service httpd restart
8.	Restart Varnish:

		service varnish start

If Varnish fails to start, try running it from the command line as follows:

	varnishd -d -f /etc/varnish/default.vcl

This should display error messages.

<h2 id="config-varnish-verify">Verify Varnish is working</h2>
The following sections discuss how you can verify that Varnish is working but *without* configuring Magento to use it. You should try this before you configure Magento.

You must perform these tasks as a user with `root` privileges to the machine on which Varnish is installed.

Perform the tasks discussed in the following sections in the order shown:

*	TBD
*	TBD

<h3 id="config-varnish-verify-start">Start Varnish</h3>
Enter `service varnish start`

If Varnish fails to start as a service, start it from the command line as follows:

1. Start the Varnish CLI:

		varnishd -d -f /etc/varnish/default.vcl

2.	Start the Varnish child process:

	When prompted, enter `start`

	The following messages display to confirm a successful start:

		child (29805) Started
		200 0

		Child (29805) said
		Child (29805) said Child starts

<h3 id="config-varnish-verify-netstat">netstat</h3>
Log in to the Varnish server and enter the following command:

	netstat -tulpn

Look for the following output in particualr:

	tcp        0      0 0.0.0.0:80                  0.0.0.0:*                   LISTEN      32614/varnishd
	tcp        0      0 127.0.0.1:58484             0.0.0.0:*                   LISTEN      32604/varnishd
	tcp        0      0 :::8080                     :::*                        LISTEN      26822/httpd
	tcp        0      0 ::1:48509                   :::*                        LISTEN      32604/varnishd

The preceding show Varnish running on port 80 and Apache running on port 8080.

If you don't see output for `varnishd`, TBD.

<a href="http://tldp.org/LDP/nag2/x-087-2-iface.netstat.html" target="_blank">More information about netstat options</a>

<h3 id="config-varnish-install">Install the Magento 2 software</h3>
Install the Magento 2 software if you haven't already done so. When prompted for a Base URL, use port 80 (for Varnish) rathern than port 8080 (for Apache) because Varnish receives all incoming HTTP requests.

<h3 id="config-varnish-verify-headers">HTTP response headers</h3>
Now you can verify that Varnish is serving pages by looking at HTML response headers returned from any Magento page.

Before you can look at headers, you must set Magento for developer mode. There are several ways to do it, the simplest of which is to modify `.htaccess` in the Magento 2 root. You can also use the <a href="{{ site.gdeurl }}#">`magento deploy:mode:set`</a> command.

#### Set Magento for developer mode
To set Magento for developer mode using its `.htaccess` file:

1.	Log in to the Magento server as, or switch to, a user who has permissions to modify files in the Magento file system.
2.	Open `<your Magento install dir>/.htaccess` in a text editor.
3.	Uncomment the following line:

		SetEnv MAGE_MODE developer
4.	Save your changes to `.htaccess` and exit the text editor.

#### Look at the Varnish log
Make sure Varnish is running then enter the following command on the Varnish server:

	varnishlog

In a web browser, go to any Magento 2 page.

A long list of response headers display. Look for headers like the following:

	-   BereqHeader    X-Varnish: 3
	-   VCL_call       BACKEND_FETCH
	-   VCL_return     fetch
	-   BackendOpen    17 default(10.249.151.10,,8080) 10.249.151.10 60914
	-   Backend        17 default default(10.249.151.10,,8080)
	-   Timestamp      Bereq: 1440449534.261791 0.000618 0.000618
	-   ReqHeader      Host: 10.249.151.10
	-   ReqHeader      Connection: keep-alive
	-   ReqHeader      Content-Length: 86
	-   ReqHeader      Cache-Control: max-age=0
	-   ReqHeader      Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
	-   ReqHeader      Origin: http://10.249.151.10

If headers like these do *not* display, stop Varnish, check your `default.vcl`, and try again.

#### Look at HTML response headers
There are several ways to look at response headers, including using a browser plug-in like Live HTTP Headers, or a browser's developer mode.

The following example uses `curl`. You don't have to log in to the Magento server to run this command.

	curl -I -v --location-trusted '<your Magento base URL>'

For example,

	curl -I -v --location-trusted 'http://192.0.2.55/magento2'

Look for headers like the following:

	Content-Type: text/html; charset=iso-8859-1
	X-Varnish: 15
	Age: 0
	Via: 1.1 varnish-v4
	X-Magento-Cache-Debug: HIT

<h2 id="config-varnish-magento">Configure Magento to use Varnish</h2>
To configure Magento to use Varnish:

1.	Log in to the Magento Admin as an administrator.
2.	Click **Stores** > **Configuration** > ADVANCED > **System** > **Full Page Cache**
3.	From the **Caching Application** list, click **Varnish Caching**
4.	Enter a value in the **TTL for public content** field.
5.	Expand **Varnish Configuration** and enter the following information:

	<table>
	<col width="40%">
  	<col width="30%">
	<tbody>
		<tr>
			<th>Field</th>
			<th>Description</th>
		</tr>
	<tr>
		<td>Access list</td>
		<td><p>Enter the fully qualified host name, IP address, or <a href="https://www.digitalocean.com/community/tutorials/understanding-ip-addresses-subnets-and-cidr-notation-for-networking" target="_blank">Classless Inter-Domain Routing (CIDR)</a> notation IP address range for which to invalidate content.</p>
			<p><a href="https://www.varnish-cache.org/docs/3.0/tutorial/purging.html" target="_blank">More information</a></p></td>
	</tr>	
	<tr>
		<td>Backend host</td>
		<td><p>Enter the fully qualified host name or IP address and listen port of the Varnish <code>backend</code> or <code>origin server</code>; that is, the server providing the content Varnish will accelerate. Typically, this is your web server. </p>
		<p><a href="https://www.varnish-cache.org/docs/trunk/users-guide/vcl-backends.html" target="_blank">More information</a></p></td>
	</tr>
	<tr>
		<td>Backend port</td>
		<td>Origin server's listen port.</td>
	</tr>
	
	</tbody>
	</table>

6.	Click **Save Config**.
7.	Click one of the export buttons to create a <code>default.vcl</code> you can use with Varnish.

	For example, if you have Varnish 4, click **Export VCL for Varnish 4**

	The following figure shows an example.<br><br>
	<img src="{{ site.baseurl }}common/images/config_varnish_admin.png" alt="Configure Magento to use Varnish in the Admin">

8.	Replace your existing <code>default.vcl</code> with the one you just exported.
9.	Restart Varnish and your web server.

<h2 id="config-varnish-final-verify">Final verification</h2>
Now that you're using the `default.vcl` generated for you by Magento, you can check HTTP response headers again and you can also make sure pages are not being cached on the Magento file system.

<h3 id="config-varnish-final-verify-headers">Verify HTTP response headers</h3>
Use `curl` or another utility to view HTTP response headers when you visit any Magento page in a web browser.

For example,

	curl -I -v --location-trusted 'http://192TBD/magento2'

Important headers:

	X-Magento-Cache-Control: max-age=86400, public, s-maxage=86400
	Age: 0
	X-Magento-Cache-Debug: MISS

<div class="bs-callout bs-callout-info" id="info">
	<p>This is also an acceptable verification: <code>X-Magento-Cache-Debug: HIT</code>.</p>
</div>

<h3 id="config-varnish-final-verify-cache">Verify the Magento cache</h3>
The final step to make sure Varnish is working properly is to make sure the `<your Magento install dir>/var/page_cache` directory is empty even after you access several Magento pages.

If the directory is empty, congratulations! You successfully configured Varnish and Magento to work together!


#### Related topics

 *  <a href="{{ site.gdeurl }}config-guide/config/config-create.html">Create or extend configuration types</a>
 *  <a href="{{ site.gdeurl }}config-guide/config/config-php.html">Magento's deployment configuration</a>