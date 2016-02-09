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

<div class="bs-callout bs-callout-warning">
    <p>Unless otherwise noted, all commands in this topic must be entered as a user with <code>root</code> privileges.</p>
</div>

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
		AuthUserFile /usr/local/apache/password/passwords
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
Because nginx natively supports <a href="http://nginx.org/en/docs/http/ngx_http_auth_basic_module.html" target="_blank">HTTP Basic authentication</a>, we recommend it over, for example, <a href="https://www.nginx.com/resources/wiki/modules/auth_digest/" target="_blank">Digest authentication</a>, which isn't recommended in production.

Additional resources:

*	<a href="https://www.digitalocean.com/community/tutorials/how-to-set-up-password-authentication-with-nginx-on-ubuntu-14-04" target="_blank">How To Set Up Password Authentication with Nginx on Ubuntu 14.04 (Digitalocean)</a>
*	<a href="https://www.howtoforge.com/basic-http-authentication-with-nginx" target="_blank">Basic HTTP Authentication With Nginx (HowtoForge)</a>
*	<a href="https://gist.github.com/karmi/b0a9b4c111ed3023a52d" target="_blank">Example Nginx Configurations for Elasticsearch</a>

See the following sections for more information:

*	[Step 1: Specify additional configuration files in `nginx.conf`](#es-ws-secure-nginx-conf)
*	[Step 2: Create passwords](#es-ws-secure-nginx-pwd)
*	[Step 2: Set up access to nginx](#es-ws-secure-nginx-access)
*	[Step 3: Set up a restricted context for Elasticsearch](#es-ws-secure-nginx-context)
*	[Verify communication is secure](#es-ws-secure-verify)

### Step 1: Specify additional configuration files in `nginx.conf` {#es-ws-secure-nginx-conf}
Make sure your `nginx.conf` contains the following line so it loads the other configuration files discussed in the following sections:

	include /etc/nginx/conf.d/*.conf;

### Step 2: Create passwords {#es-ws-secure-nginx-pwd}
We recommend you use the Apache `htpasswd` command to encode passwords for the following users:

*	User with access to nginx (named `magento_nginx` in this example)
*	User with access to Elasticsearch (named `magento_elasticsearch` in this example)

To create passwords:

1.	Enter the following command to determine if `htpasswd` is already installed:

		which htpasswd

	If a path displays, it is installed; if the command returns no output, `htpasswd` is not installed.
2.	If necessary, install `htpasswd`:

	*	Ubuntu: `apt-get -y install apache2-utils`
	*	CentOS: TBD
3.	Create passwords in the `/etc/nginx/passwd` directory: 

		mkdir -p /etc/nginx/passwd
		htpasswd -c /etc/nginx/passwd <username>

	You must create two users. Following is an example:

		mkdir -p /etc/nginx/passwd
		htpasswd -c /etc/nginx/passwd magento_nginx
		httpasswd -c /etc/ngins/passwd magento_elasticsearch

	Follow the prompts on your screen to create a different password for each user.

4.	After you create two individual users, create another password file with both users in it, one on each line.

	Name the file `/etc/nginx/passwd/magento_all` and copy the values from the other files you created.

5.	*(Optional).* To add another user to your password file, enter the same command without the `-c` (create) option:

		htpasswd /etc/nginx/passwd <username>
6.	Verify that all three files are in `/etc/nginx/passwd` and that `/etc/nginx/passwd/magento_all` has passwords for both users.

### Step 3: Set up access to nginx {#es-ws-secure-nginx-access}
This section discusses how to specify who can access the nginx server.

Use a text editor to create a new file `/etc/nginx/conf.d/magento_es_auth.conf` with the following contents:

	server {
		listen       80;
		server_name  localhost;

	location / {
		limit_except HEAD {
			auth_basic "Restricted";
			auth_basic_user_file  /etc/nginx/passwd/es_auth_magento;
		}
		proxy_pass http://<elastic search server host name or ip>:<elasticsearch port>;
		proxy_redirect off;
		proxy_set_header Host $host;
		proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
	}

	location /_aliases {
		auth_basic "Restricted";
		auth_basic_user_file  /etc/nginx/passwd/es_auth_all;
		proxy_pass http://<elastic search server host name or ip>:<elasticsearch port>;
		proxy_redirect off;
		proxy_set_header Host $host;
		proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
	}
	
		include /etc/nginx/auth/*.conf;
	}


### Step 4: Set up a restricted context for Elasticsearch {#es-ws-secure-nginx-context}
This section discusses how to specify who can access the Elasticsearch server.

Use a text editor to create a new file `/etc/nginx/auth/magento_elasticsearch.conf` with the following contents:

	location /elasticsearch {
	auth_basic "Restricted - elasticsearch";
	auth_basic_user_file /etc/nginx/passwd/elasticsearch;
		
	proxy_pass http://<elastic search server host name or ip>:<elasticsearch port>;
	proxy_redirect off;
	proxy_set_header Host $host;
   	proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
	}


## Verify communication is secure {#es-ws-secure-verify}
TBD

#### Next
<a href="{{ site.gdeurl21 }}config-guide/elasticsearch/es-config-stopwords.html">Configure Elasticsearch stopwords</a>