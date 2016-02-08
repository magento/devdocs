---
layout: default
group: config-guide
subgroup: Elastic
title: Secure communications between your web server and Elasticsearch
menu_title: Secure communications between your web server and Elasticsearch
menu_order: 5
menu_node: 
github_link: config-guide/elasticsearch/es-config-web-server.md
---

<img src="{{ site.baseurl }}common/images/ee-only_large.png" alt="This topic applies to Enterprise Edition only">


#### Contents

*	[Secure communication with Apache](#es-ws-secure-apache)
*	[Secure communication with nginx](#es-ws-secure-nginx)
*	[Verify communication is secure](#es-ws-secure-verify)

## Overview of secure web server communication {#es-ws-secure-over}
This topic discusses an example of securing communication between your web server and Elasticsearch using <a href="http://tools.ietf.org/html/rfc2617" target="_blank">HTTP Basic</a> authentication. You can optionally configure other types of authentication as well; we provide references for that information.

## Secure communication with Apache {#es-ws-secure-apache}
This section discusses how to secure communication between Apache and Elasticsearch using <a href="http://tools.ietf.org/html/rfc2617" target="_blank">HTTP Basic</a> authentication with Apache. For more options, consult one of the following resources:

*	<a href="http://httpd.apache.org/docs/2.2/howto/auth.html" target="_blank">Apache 2.2 authentication and authorization tutorial</a>
*	<a href="http://httpd.apache.org/docs/2.4/howto/auth.html" target="_blank">Apache 2.4 authentication and authorization tutorial</a>

The instructions that follow are based on Apache 2.2 with CentOS 6:

*	[Step 1: Create a password file](#es-ws-secure-apache-pwd)
*	[Step 2: Optionally add users to create an authorized group](#es-ws-secure-group)
*	[Step 3: Complete the process](#es-ws-secure-finish)
*	[Verify communication is secure](#es-ws-secure-verify)

### Step 1: Create a password file {#es-ws-secure-apache-pwd}
{% include config/secure-ws-apache_step1.md %}

### Step 2: Optionally add users to create an authorized group {#es-ws-secure-group}
{% include config/secure-ws-apache_step2.md %}

### Step 3: Complete the process {#es-ws-secure-finish}
This section discusses how to add the reference to your Apache password file to your secure virtual host configuration.

This secure virtual host starts with the following line:

	<VirtualHost *:443>

To add Elasticsearch to your secure virtual host:

1.	Your Apache server must use Secure Sockets Layer (SSL).

	For more information, see <a href="https://httpd.apache.org/docs/2.2/en/ssl" target="_blank">Apache 2.2 documentation</a> or <a href="https://httpd.apache.org/docs/2.4/ssl/ssl_howto.html" target="_blank">Apache 2.4 documentation</a>.

2.	Add the following to authenticate a *user*:

		ProxyPreserveHost On
		ProxyPass        / http://<elastic search server host name or ip>:<elasticsearch port>/
		ProxyPassreverse / http://<elastic search server host name or ip>:<elasticsearch port>/

		<Proxy *>
		Order deny,allow
		Allow from all

		AuthType Basic
		AuthName "Elasticsearch server"
		AuthBasicProvider file
		AuthUserFile /etc/apache2/htpasswd
		Require valid-user

		# This allows OPTIONS-requests without authorization
		<LimitExcept OPTIONS>
		</LimitExcept>
		</Proxy>

3.	Add the following to authenticate a *group*:

		ProxyPreserveHost On
		ProxyPass        / http://<elastic search server host name or ip>:<elasticsearch port>/
		ProxyPassreverse / http://<elastic search server host name or ip>:<elasticsearch port>/

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

## Secure communication with nginx {#es-ws-secure-nginx}
TBD

## Verify communication is secure {#es-ws-secure-verify}
TBD