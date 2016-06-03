---
layout: default
group: config-guide
subgroup: 09_Varnish
title: Configure Varnish and your web server
menu_title: Configure Varnish and your web server
menu_order: 10
menu_node: 
github_link21: config-guide/varnish/config-varnish-configure.md
---

<h2 id="config-varnish-config-var">Configure Varnish and your web server</h2>
The following sections discuss how to configure your web server and Magento to use Varnish:

*	<a href="#config-varnish-config-web">Configure your web server</a>
*	<a href="#config-varnish-config-sysvcl">Modify the Varnish system configuration</a>
*	<a href="#config-varnish-config-default">Modify <code>default.vcl</code></a>
*	<a href="#config-varnish-verify">Verify Varnish is working</a>
*	<a href="#config-varnish-install">Install the Magento 2 software</a>
*	<a href="#config-varnish-verify-headers">Verify HTTP response headers</a>


<h2 id="config-varnish-config-web">Configure your web server</h2>
Configure your web server to listen on a port other than the default port 80 because Varnish responds directly to incoming HTTP requests, not the web server. 

In the sections that follow, we use port 8080 as an example.

To change the Apache 2.2 listen port:

1.	Open `/etc/httpd/conf/httpd.conf` in a text editor.
2.	Locate the `Listen` directive.
3.	Change the value of the listen port to `8080`. (You can use any available listen port.)
4.	Save your changes to `httpd.conf` and exit the text editor.

<h2 id="config-varnish-config-sysvcl">Modify the Varnish system configuration</h2>
To modify the Varnish system configuration:

1.	Open `/etc/sysconfig/varnish` (or `/etc/default/varnish` on Debian and Ubuntu) in a text editor.
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


4.	Save your changes to `/etc/sysconfig/varnish` (or `/etc/default/varnish` on Debian and Ubuntu) and exit the text editor.

<h3 id="config-varnish-config-default">Modify <code>default.vcl</code></h3>
This section discusses how to provide minimal configuration so Varnish returns HTTP response headers. This enables you to verify Varnish works before you configure Magento to use Varnish.

To minimally configure Varnish:

1.	Back up `default.vcl`:

		cp /etc/varnish/default.vcl /etc/varnish/default.vcl.bak

2.	Open `/etc/varnish/default.vcl` in a text editor.
3.	Locate the following stanza:

		backend default {
	      .host = "127.0.0.1";
	      .port = "80";
		}

4.	Replace the value of `.host` with the fully qualified host name or IP address and listen port of the Varnish *backend* or *origin server*; that is, the server providing the content Varnish will accelerate. 

	Typically, this is your web server. 

	<a href="https://www.varnish-cache.org/docs/trunk/users-guide/vcl-backends.html" target="_blank">More information</a>
5.	Replace the value of `.port` with the web server's listen port (8080 in this example).

	Example: Apache is installed on host 192.0.2.55 and Apache is listening on port 8080:

		backend default {
	      .host = "192.0.2.55"; 
	      .port = "8080";
		}		

	<div class="bs-callout bs-callout-info" id="info">
		<p>If Varnish and Apache are running on the same host, we recommend you use an IP address or host name and not <code>localhost</code>.</p>
	</div>
		
7.	Save your changes to `default.vcl` and exit the text editor.

8.	Restart Varnish:

		service varnish restart

If Varnish fails to start, try running it from the command line as follows:

	varnishd -d -f /etc/varnish/default.vcl

This should display error messages.

<div class="bs-callout bs-callout-info" id="info">
	<p>If Varnish does not start as a service, you must configure SELinux rules to allow it to run. Consult the following resources:</p>
		<ul><li><a href="http://flatlinesecurity.com/posts/varnish-4-selinux/" target="_blank">flatlinesecurity</a></li>
			<li><a href="https://wiki.centos.org/HowTos/SELinux" target="_blank">CentOS wiki</a></li>
			<li><a href="https://www.centos.org/docs/5/html/Deployment_Guide-en-US/sec-sel-policy-customizing.html" target="_blank">CentOS documentation</a></li></ul>
</div>

<h2 id="config-varnish-verify">Verify Varnish is working</h2>
The following sections discuss how you can verify that Varnish is working but *without* configuring Magento to use it. You should try this before you configure Magento.

Perform the tasks discussed in the following sections in the order shown:

*	<a href="#config-varnish-verify-start">Start Varnish</a>
*	<a href="#config-varnish-verify-netstat">netstat</a>

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

Look for the following output in particular:

	tcp        0      0 0.0.0.0:80                  0.0.0.0:*                   LISTEN      32614/varnishd
	tcp        0      0 127.0.0.1:58484             0.0.0.0:*                   LISTEN      32604/varnishd
	tcp        0      0 :::8080                     :::*                        LISTEN      26822/httpd
	tcp        0      0 ::1:48509                   :::*                        LISTEN      32604/varnishd

The preceding shows Varnish running on port 80 and Apache running on port 8080.

If you don't see output for `varnishd`, make sure Varnish is running.

<a href="http://tldp.org/LDP/nag2/x-087-2-iface.netstat.html" target="_blank">More information about netstat options</a>

<h2 id="config-varnish-install">Install the Magento 2 software</h2>
Install the Magento 2 software if you haven't already done so. When prompted for a Base URL, use the Varnish host and port 80 (for Varnish) because Varnish receives all incoming HTTP requests.

Possible error installing Magento:

	Error 503 Service Unavailable
	Service Unavailable
	XID: 303394517
	Varnish cache server

If you experience this error, edit `default.vcl` and add a timeout to the `backend` stanza as follows:

	backend default {
	     .host = "127.0.0.1";
	     .port = "8080";
	     .first_byte_timeout = 600s;
	}

<h2 id="config-varnish-verify-headers">Verify HTTP response headers</h2>
Now you can verify that Varnish is serving pages by looking at HTML response headers returned from any Magento page.

Before you can look at headers, you must set Magento for developer mode. There are several ways to do it, the simplest of which is to modify `.htaccess` in the Magento 2 root. You can also use the <a href="{{ site.gdeurl21 }}config-guide/cli/config-cli-subcommands-mode.html">`magento deploy:mode:set`</a> command.

#### Set Magento for developer mode
To set Magento for developer mode, use the [`magento deploy:mode:set`]({{ site.gdeurl21 }}config-guide/cli/config-cli-subcommands-mode.html#config-mode-change) command.

#### Look at the Varnish log
Make sure Varnish is running then enter the following command on the Varnish server:

	varnishlog

In a web browser, go to any Magento 2 page.

A long list of response headers display in your command prompt window. Look for headers like the following:

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
There are several ways to look at response headers, including using a browser plug-in like Live HTTP Headers (<a href="https://addons.mozilla.org/en-GB/firefox/addon/live-http-headers/" target="_blank">Firefox</a>, <a href="https://chrome.google.com/webstore/detail/live-http-headers/iaiioopjkcekapmldfgbebdclcnpgnlo?hl=en" target="_blank">Chrome</a>), or a browser inspector.

The following example uses `curl`. You can enter this command from any machine that can access the Magento server using HTTP.

	curl -I -v --location-trusted '<your Magento base URL>'

For example,

	curl -I -v --location-trusted 'http://192.0.2.55/magento2'

Look for headers like the following:

	Content-Type: text/html; charset=iso-8859-1
	X-Varnish: 15
	Age: 0
	Via: 1.1 varnish-v4
	X-Magento-Cache-Debug: HIT

#### Next step
<a href="{{ site.gdeurl21 }}config-guide/varnish/config-varnish-magento.html">Configure Magento to use Varnish</a>
