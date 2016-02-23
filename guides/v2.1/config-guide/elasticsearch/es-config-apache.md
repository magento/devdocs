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

## Configure Magento to use Elasticsearch {#elastic-m2-configure}
{% include config/es-elasticsearch-magento.md %}

## Secure communication with Apache {#es-ws-secure-apache}
This section discusses how to secure communication between Apache and Elasticsearch using <a href="http://tools.ietf.org/html/rfc2617" target="_blank">HTTP Basic</a> authentication with Apache. For more options, consult one of the following resources:

*	<a href="http://httpd.apache.org/docs/2.2/howto/auth.html" target="_blank">Apache 2.2 authentication and authorization tutorial</a>
*	<a href="http://httpd.apache.org/docs/2.4/howto/auth.html" target="_blank">Apache 2.4 authentication and authorization tutorial</a>

The instructions that follow are based on Apache 2.2 with CentOS 6:

*	[Step 1: Create a password file](#es-ws-secure-apache-pwd)
*	[Step 2: Optionally add users to create an authorized group](#es-ws-secure-group)
*	[Step 3: Configure your secure virtual host](#es-ws-secure-finish)
*	[Verify communication is secure](#es-ws-secure-verify)

### Step 1: Create a password file {#es-ws-secure-apache-pwd}
{% include config/secure-ws-apache_step1.md %}

### Step 2: Optionally add users to create an authorized group {#es-ws-secure-group}
{% include config/secure-ws-apache_step2.md %}

### Step 3: Configure your secure virtual host {#es-ws-secure-finish}
This section discusses how to add the reference to your Apache password file to your secure virtual host configuration.

Depending on how you set up SSL, the Apache 2.2 SSL configuration might be located in `/etc/httpd/conf/httpd.conf` or `/etc/httpd/conf.d/ssl.conf`.

This secure virtual host starts with one of the following lines:

	<VirtualHost *:443>

or

	<VirtualHost _default_:443>

To add Elasticsearch to your secure virtual host:

Add the following to authenticate a *user*:

	ProxyPreserveHost On
	ProxyPass / http://127.0.0.1:<elasticsearch port>/
	ProxyPassreverse / http://127.0.0.1:<elasticsearch port>/

	<Proxy *>
	Order deny,allow
	Allow from all

	AuthType Basic
	AuthName "Elasticsearch server"
	AuthBasicProvider file
	AuthUserFile /usr/local/apache/password/.htpasswd_elasticsearch
	Require valid-user

	# This allows OPTIONS-requests without authorization
	<LimitExcept OPTIONS>
	   Require valid-user
	</LimitExcept>
	</Proxy>

Add the following to authenticate a *group*:

	ProxyPreserveHost On
	ProxyPass        / http://127.0.0.1:<elasticsearch port>/
	ProxyPassreverse / http://127.0.0.1:<elasticsearch port>/

	<Proxy *>
	Order deny,allow
	Allow from all

	AuthType Basic
	AuthName "Elasticsearch server"
	AuthBasicProvider file
	AuthGroupFile <path to optional group file>
	Require group <name>

	# This allows OPTIONS-requests without authorization
	<LimitExcept OPTIONS>
	</LimitExcept>
	</Proxy>


## Verify communication is secure {#es-ws-secure-verify}
TBD

#### Next
<a href="{{ site.gdeurl21 }}config-guide/elasticsearch/es-config-stopwords.html">Configure Elasticsearch stopwords</a>