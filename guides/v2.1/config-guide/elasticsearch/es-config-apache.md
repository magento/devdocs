---
layout: default
group: config-guide
subgroup: Elastic
title: Configure Apache and Elasticsearch
menu_title: Configure Apache and Elasticsearch
menu_order: 7
menu_node: 
github_link: config-guide/elasticsearch/es-config-apache.md
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
This section discusses how to configure Apache as a proxy so that Magento can use Elasticsearch running on this server. This section does not discuss setting up HTTP Basic authentication; that is discussed in [Secure communication with nginx](#es-ws-secure-apache).

This section discusses how to configure an Elasticsearch proxy using a virtual host. 

1.	As a user with `root` privileges, open your virtual host configuration file in a text editor.

	*	Apache 2.4: `vim /etc/apache2/sites-available/default-000.conf`
	*	Apache 2.2: `vim /etc/httpd/conf/httpd.conf`

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

{% include config/es-elasticsearch-magento.md %}

## Secure communication with Apache {#es-ws-secure-apache}
This section discusses how to secure communication between Apache and Elasticsearch using <a href="http://tools.ietf.org/html/rfc2617" target="_blank">HTTP Basic</a> authentication with Apache. For more options, consult one of the following resources:

*	<a href="http://httpd.apache.org/docs/2.2/howto/auth.html" target="_blank">Apache 2.2 authentication and authorization tutorial</a>
*	<a href="http://httpd.apache.org/docs/2.4/howto/auth.html" target="_blank">Apache 2.4 authentication and authorization tutorial</a>

The instructions that follow are based on Apache 2.2 with CentOS 6:

*	[Step 1: Create a password file](#es-ws-secure-apache-pwd)
*	[Step 2: Configure your secure virtual host](#es-ws-secure-finish)
*	[Verify communication is secure](#es-ws-secure-verify)

### Step 1: Create a password file {#es-ws-secure-apache-pwd}
{% include config/secure-ws-apache_step1.md %}

### Step 2: Secure communication with Apache {#es-ws-secure-finish}
This section discusses how to set up [HTTP Basic authentication](https://httpd.apache.org/docs/2.2/howto/auth.html){:target="_blank"}. Use of SSL and HTTP Basic authentication together prevents anyone from intercepting communication with Elasticsearch or with your Magento server.

This section discusses how to specify who can access the Apache server.

Use a text editor to modify one of the following:

*	Apache 2.4: `vim /etc/apache2/sites-available/default-000.conf`
*	Apache 2.2: `vim /etc/httpd/conf/httpd.conf`

Add the following contents to the virtual host you created earlier:

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

Save your changes, exit the text editor, and restart Apache:

*	CentOS: `service httpd restart`
*	Ubuntu: `service apache2 restart`

{% include config/es-verify-proxy.md %}

#### Next
<a href="{{ site.gdeurl21 }}config-guide/elasticsearch/es-config-stopwords.html">Configure Elasticsearch stopwords</a>