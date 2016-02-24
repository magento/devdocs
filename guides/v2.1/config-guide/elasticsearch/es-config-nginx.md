---
layout: default
group: config-guide
subgroup: Elastic
title: Configure nginx and Elasticsearch
menu_title: Configure nginx and Elasticsearch
menu_order: 5
menu_node: 
github_link: config-guide/elasticsearch/es-config-nginx.md
---

<img src="{{ site.baseurl }}common/images/ee-only_large.png" alt="This topic applies to Enterprise Edition only">


#### Contents

*	[Overview of secure web server communication](#es-ws-secure-over)
*	[Set up a proxy](#es-nginx-proxy)
*	[Configure Magento to use Elasticsearch](#elastic-m2-configure)
*	[Secure communication with nginx](#es-ws-secure-nginx)
*	[Verify communication is secure](#es-ws-secure-verify)

{% include config/es-webserver-overview.md %}

## Set up a proxy {#es-nginx-prox}
This section discusses how to configure nginx as a proxy so that Magento can use Elasticsearch running on this server. This section does not discuss setting up HTTP Basic authentication; that is discussed in [Secure communication with nginx](#es-ws-secure-nginx).

See one of the following sections for more information:

*	[Step 1: Specify additional configuration files in your global `nginx.conf`](#es-ws-secure-nginx-conf)
*	[Step 2: Set up nginx as a proxy](#es-ws-secure-nginx-proxy)

### Step 1: Specify additional configuration files in your global `nginx.conf` {#es-ws-secure-nginx-conf}
Make sure your global `nginx.conf` contains the following line so it loads the other configuration files discussed in the following sections:

	include /etc/nginx/conf.d/*.conf;

By default, the global configuration is located as follows:

*	CentOS: `/etc/nginx/nginx.conf`
*	Ubuntu: TBD

### Step 2: Set up nginx as a proxy {#es-ws-secure-nginx-proxy}
This section discusses how to specify who can access the nginx server.

1.	Use a text editor to create a new file `/etc/nginx/conf.d/magento_es_auth.conf` with the following contents:

		server {
			listen 8080;
			location / {
				proxy_pass http://localhost:9200;
			}
		}
		
2.	Restart nginx:

		service nginx restart

3.	Continue with the next section.

{% include config/es-elasticsearch-magento.md %}

## Secure communication with nginx {#es-ws-secure-nginx}
This section discusses how to set up [HTTP Basic authentication](http://nginx.org/en/docs/http/ngx_http_auth_basic_module.html){:target="_blank"}. Use of SSL and HTTP Basic authentication together prevents anyone from intercepting communication with Elasticsearch or with your Magento server.

Because nginx natively supports HTTP Basic authentication, we recommend it over, for example, <a href="https://www.nginx.com/resources/wiki/modules/auth_digest/" target="_blank">Digest authentication</a>, which isn't recommended in production.

Additional resources:

*	<a href="https://www.digitalocean.com/community/tutorials/how-to-set-up-password-authentication-with-nginx-on-ubuntu-14-04" target="_blank">How To Set Up Password Authentication with Nginx on Ubuntu 14.04 (Digitalocean)</a>
*	<a href="https://www.howtoforge.com/basic-http-authentication-with-nginx" target="_blank">Basic HTTP Authentication With Nginx (HowtoForge)</a>
*	<a href="https://gist.github.com/karmi/b0a9b4c111ed3023a52d" target="_blank">Example Nginx Configurations for Elasticsearch</a>

See the following sections for more information:

*	[Step 1: Create passwords](#es-ws-secure-nginx-pwd)
*	[Step 2: Set up access to nginx](#es-ws-secure-nginx-access)
*	[Step 3: Set up a restricted context for Elasticsearch](#es-ws-secure-nginx-context)
*	[Verify communication is secure](#es-ws-secure-verify)

### Step 1: Create passwords {#es-ws-secure-nginx-pwd}
We recommend you use the Apache `htpasswd` command to encode passwords for the following users:

*	User with access to nginx (named `magento_nginx` in this example)
*	User with access to Elasticsearch (named `magento_elasticsearch` in this example)

To create passwords:

1.	Enter the following command to determine if `htpasswd` is already installed:

		which htpasswd

	If a path displays, it is installed; if the command returns no output, `htpasswd` is not installed.
2.	If necessary, install `htpasswd`:

	*	Ubuntu: `apt-get -y install apache2-utils`
	*	CentOS: `yum -y install httpd-tools`
3.	Create a `/etc/nginx/passwd` directory to store passwords: 

		mkdir -p /etc/nginx/passwd
		htpasswd -c /etc/nginx/.htpasswd <username>

	Example:

		mkdir -p /etc/nginx/passwd
		htpasswd -c /etc/nginx/passwd/.htpasswd_magento_elasticsearch magento_elasticsearch

	Follow the prompts on your screen to create a password the user.

5.	*(Optional).* To add another user to your password file, enter the same command without the `-c` (create) option:

		htpasswd /etc/nginx/passwd/.htpasswd <username>
6.	Verify that the contents of `/etc/nginx/passwd` is correct.

### Step 3: Set up access to nginx {#es-ws-secure-nginx-access}
This section discusses how to specify who can access the nginx server.

Use a text editor to modify `/etc/nginx/conf.d/magento_es_auth.conf` with the following contents:

	server {
		listen       8080;
		server_name  127.0.0.1;

	location / {
		limit_except HEAD {
			auth_basic "Restricted";
			auth_basic_user_file  /etc/nginx/passwd/.htpasswd_magento_elasticsearch;
		}
		proxy_pass http://127.0.0.1:9200;
		proxy_redirect off;
		proxy_set_header Host $host;
		proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
	}

	location /_aliases {
		auth_basic "Restricted";
		auth_basic_user_file  /etc/nginx/passwd/.htpasswd_magento_elasticsearch;
		proxy_pass http://127.0.0.1:9200;
		proxy_redirect off;
		proxy_set_header Host $host;
		proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
	}
	
		include /etc/nginx/auth/*.conf;
	}

<div class="bs-callout bs-callout-info" id="info">
	<p>The listen ports shown in the preceding example are examples only. For security reasons, we recommend you use non-default listen ports for the proxy and for Elasticsearch.</p>
</div>

### Step 4: Set up a restricted context for Elasticsearch {#es-ws-secure-nginx-context}
This section discusses how to specify who can access the Elasticsearch server.

Enter the following command to create a new directory to store the authentication configuration:

	mkdir /etc/nginx/auth/

Use a text editor to create a new file `/etc/nginx/auth/magento_elasticsearch.conf` with the following contents:

	location /elasticsearch {
	auth_basic "Restricted - elasticsearch";
	auth_basic_user_file /etc/nginx/passwd/.htpasswd_magento_elasticsearch;
		
	proxy_pass http://127.0.0.1:9200;
	proxy_redirect off;
	proxy_set_header Host $host;
   	proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
	}

After you've made these changes, restart nginx and continue with the next section:

	service nginx restart

{% include config/es-verify-proxy.md %}

#### Next
<a href="{{ site.gdeurl21 }}config-guide/elasticsearch/es-config-stopwords.html">Configure Elasticsearch stopwords</a>