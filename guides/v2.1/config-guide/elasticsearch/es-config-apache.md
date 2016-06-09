---
layout: default
group: config-guide
subgroup: 14_Elastic
title: Configure Apache and Elasticsearch
menu_title: Configure Apache and Elasticsearch
menu_order: 7
menu_node: 
version: 2.1
github_link21: config-guide/elasticsearch/es-config-apache.md
---

<img src="{{ site.baseurl }}common/images/ee-only_large.png" alt="This topic applies to Enterprise Edition only">


#### Contents

*	[Overview of secure web server communication](#es-ws-secure-over)
*	[Set up a proxy](#es-apache-proxy)
*	[Configure Magento to use Elasticsearch](#elastic-m2-configure)
*	[Secure communication with Apache](#es-ws-secure-apache)
*	[Verify communication is secure](#es-ws-secure-verify-apache)

{% include config/es-webserver-overview.md %}

## Set up a proxy {#es-apache-proxy}
This section discusses how to configure Apache as an *unsecure* proxy so that Magento can use Elasticsearch running on this server. This section does not discuss setting up HTTP Basic authentication; that is discussed in [Secure communication with Apache](#es-ws-secure-apache).

<div class="bs-callout bs-callout-info" id="info">
	<p>The reason the proxy is not secured in this example is it's easier to set up and verify. You can use TLS with this proxy if you want; to do so, make sure you add the proxy information to your secure virtual host configuration.</p>
</div>

See one of the following sections:

*	[Set up a proxy for Apache 2.4](#es-apache-proxy-24)
*	[Set up a proxy for Apache 2.2](#es-apache-proxy-22)

### Set up a proxy for Apache 2.4 {#es-apache-proxy-24}
This section discusses how to configure an Elasticsearch proxy using a virtual host. 

1.	Enable `mod_proxy` as follows:

		a2enmod proxy_http
2.	Use a text editor to open `/etc/apache2/sites-available/000-default.conf`
3.	Add the following directive at the top of the file:

		Listen 8080
4.	Add the following at the bottom of the file:

		<VirtualHost *:8080>
		   ProxyPass "/" "http://localhost:9200/"
		   ProxyPassReverse "/" http://localhost:9200/"
		</VirtualHost>
5.	Restart Apache:

		service apache2 restart
6.	Verify the proxy works by entering the following command:

		curl -i http://localhost:<proxy port>/_cluster/health

	For example, if your proxy uses port 8080:

		curl -i http://localhost:8080/_cluster/health

	Messages similar to the following display to indicate success:

		HTTP/1.1 200 OK
		Date: Tue, 23 Feb 2016 20:38:03 GMT
		Content-Type: application/json; charset=UTF-8
		Content-Length: 389
		Connection: keep-alive

		{"cluster_name":"elasticsearch","status":"yellow","timed_out":false,"number_of_nodes":1,"number_of_data_nodes":1,"active_primary_shards":5,"active_shards":5,"relocating_shards":0,"initializing_shards":0,"unassigned_shards":5,"delayed_unassigned_shards":0,"number_of_pending_tasks":0,"number_of_in_flight_fetch":0,"task_max_waiting_in_queue_millis":0,"active_shards_percent_as_number":50.0}
6.	Continue with [Configure Magento to use Elasticsearch](#elastic-m2-configure).

### Set up a proxy for Apache 2.2 {#es-apache-proxy-22}
This section discusses how to configure an Elasticsearch proxy using a virtual host. 

1.	As a user with `root` privileges, open `/etc/httpd/conf/httpd.conf` in a text editor.

2.	Locate the `Listen` directive and add another listen port; for example:

		Listen 8080

2.	Scroll to the bottom of the file and add the following lines:

		<VirtualHost *:8080>
			ProxyPass http://localhost:9200/
			ProxyPassReverse http://localhost:9200/
		</VirtualHost>

3.	Restart Apache:

	*	CentOS: `service httpd restart`
	*	Ubuntu: `service apache2 restart`
6.	Verify the proxy works by entering the following command:

		curl -i http://localhost:<proxy port>/_cluster/health

	For example, if your proxy uses port 8080:

		curl -i http://localhost:8080/_cluster/health

	Messages similar to the following display to indicate success:

		HTTP/1.1 200 OK
		Date: Tue, 23 Feb 2016 20:38:03 GMT
		Content-Type: application/json; charset=UTF-8
		Content-Length: 389
		Connection: keep-alive

		{"cluster_name":"elasticsearch","status":"yellow","timed_out":false,"number_of_nodes":1,"number_of_data_nodes":1,"active_primary_shards":5,"active_shards":5,"relocating_shards":0,"initializing_shards":0,"unassigned_shards":5,"delayed_unassigned_shards":0,"number_of_pending_tasks":0,"number_of_in_flight_fetch":0,"task_max_waiting_in_queue_millis":0,"active_shards_percent_as_number":50.0}

{% include config/es-elasticsearch-magento.md %}

## Secure communication with Apache {#es-ws-secure-apache}
This section discusses how to secure communication between Apache and Elasticsearch using <a href="http://tools.ietf.org/html/rfc2617" target="_blank">HTTP Basic</a> authentication with Apache. For more options, consult one of the following resources:

*	<a href="http://httpd.apache.org/docs/2.2/howto/auth.html" target="_blank">Apache 2.2 authentication and authorization tutorial</a>
*	<a href="http://httpd.apache.org/docs/2.4/howto/auth.html" target="_blank">Apache 2.4 authentication and authorization tutorial</a>

See one of the following sections:

*	[Step 1: Create a password file](#es-ws-secure-apache-pwd)
*	[Step 2: Configure your secure virtual host](#es-ws-secure-finish)
*	[Verify communication is secure](#es-ws-secure-verify)

### Step 1: Create a password {#es-ws-secure-apache-pwd}
{% include config/secure-ws-apache_step1.md %}

### Step 2: Secure communication with Apache {#es-ws-secure-finish}
This section discusses how to set up [HTTP Basic authentication](https://httpd.apache.org/docs/2.2/howto/auth.html){:target="_blank"}. Use of TLS and HTTP Basic authentication together prevents anyone from intercepting communication with Elasticsearch or with your Magento server.

This section discusses how to specify who can access the Apache server. 

1.	Use a text editor to add the following contents to your secure virtual host. 

	*	Apache 2.2: Depending on how you set up SSL, the Apache 2.2 SSL configuration might be located in `/etc/httpd/conf/httpd.conf` or `/etc/httpd/conf.d/ssl.conf`.

	*	Apache 2.4: Edit `/etc/apache2/sites-available/default-ssl.conf`

			<Proxy *>
			  Order deny,allow
			  Allow from all

			 AuthType Basic
			 AuthName "Elastic Server"
			 AuthBasicProvider file
			 AuthUserFile /usr/local/apache/password/.htpasswd_elasticsearch
			 Require valid-user
	  
			# This allows OPTIONS-requests without authorization
			 <LimitExcept OPTIONS>
			   Require valid-user
			 </LimitExcept>
			 </Proxy>
3.	If you added the preceding to your secure virtual host, remove `Listen 8080` and the `<VirtualHost *:8080>` directives you added earlier to your unsecure virtual host.
4.	Save your changes, exit the text editor, and restart Apache:

*	CentOS: `service httpd restart`
*	Ubuntu: `service apache2 restart`

{% include config/es-verify-proxy.md %}

#### Next
<a href="{{ site.gdeurl21 }}config-guide/elasticsearch/es-config-stopwords.html">Configure Elasticsearch stopwords</a>
