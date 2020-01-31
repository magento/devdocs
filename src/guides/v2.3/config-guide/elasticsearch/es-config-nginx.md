---
group: configuration-guide
title: Configure nginx and Elasticsearch
functional_areas:
  - Configuration
  - Search
  - System
  - Setup
---

{% include config/es-webserver-overview.md %}

## Set up a proxy {#es-nginx-proxy}

This section discusses how to configure nginx as an *unsecure* proxy so that Magento can use Elasticsearch running on this server. This section does not discuss setting up HTTP Basic authentication; that is discussed in [Secure communication with nginx](#es-ws-secure-nginx).

 {:.bs-callout-info}
The reason the proxy is not secured in this example is it's easier to set up and verify. You can use TLS with this proxy if you want; to do so, make sure you add the proxy information to your secure server block configuration.

See one of the following sections for more information:

*  [Step 1: Specify additional configuration files in your global `nginx.conf`](#es-ws-secure-nginx-conf)
*  [Step 2: Set up nginx as a proxy](#es-ws-secure-nginx-proxy)

### Step 1: Specify additional configuration files in your global `nginx.conf` {#es-ws-secure-nginx-conf}

Make sure your global `/etc/nginx/nginx.conf` contains the following line so it loads the other configuration files discussed in the following sections:

```conf
include /etc/nginx/conf.d/*.conf;
```

### Step 2: Set up nginx as a proxy {#es-ws-secure-nginx-proxy}

This section discusses how to specify who can access the [nginx](https://glossary.magento.com/nginx) server.

1. Use a text editor to create a new file `/etc/nginx/conf.d/magento_es_auth.conf` with the following contents:

   ```conf
   server {
      listen 8080;
      location /_cluster/health {
         proxy_pass http://localhost:9200/_cluster/health;
      }
   }
   ```

1. Restart nginx:

   ```bash
   service nginx restart
   ```

1. Verify the proxy works by entering the following command:

   ```bash
   curl -i http://localhost:<proxy port>/_cluster/health
   ```

   For example, if your proxy uses port 8080:

   ```bash
   curl -i http://localhost:8080/_cluster/health
   ```

   Messages similar to the following display to indicate success:

   ```terminal
   HTTP/1.1 200 OK
   Date: Tue, 23 Feb 2016 20:38:03 GMT
   Content-Type: application/json; charset=UTF-8
   Content-Length: 389
   Connection: keep-alive

   {"cluster_name":"elasticsearch","status":"yellow","timed_out":false,"number_of_nodes":1,"number_of_data_nodes":1,"active_primary_shards":5,"active_shards":5,"relocating_shards":0,"initializing_shards":0,"unassigned_shards":5,"delayed_unassigned_shards":0,"number_of_pending_tasks":0,"number_of_in_flight_fetch":0,"task_max_waiting_in_queue_millis":0,"active_shards_percent_as_number":50.0}
   ```

1. Continue with the next section.

## Configure Magento to use Elasticsearch {#elastic-m2-configure}

{% include config/es-elasticsearch-magento.md %}

## Secure communication with nginx {#es-ws-secure-nginx}

This section discusses how to set up [HTTP Basic authentication](http://nginx.org/en/docs/http/ngx_http_auth_basic_module.html) with your secure proxy. Use of TLS and HTTP Basic authentication together prevents anyone from intercepting communication with Elasticsearch or with your Magento server.

Because nginx natively supports HTTP Basic authentication, we recommend it over, for example, [Digest authentication](https://www.nginx.com/resources/wiki/modules/auth_digest/), which isn't recommended in production.

Additional resources:

*  [How To Set Up Password Authentication with Nginx on Ubuntu 14.04 (Digitalocean)](https://www.digitalocean.com/community/tutorials/how-to-set-up-password-authentication-with-nginx-on-ubuntu-14-04)
*  [Basic HTTP Authentication With Nginx (HowtoForge)](https://www.howtoforge.com/basic-http-authentication-with-nginx)
*  [Example Nginx Configurations for Elasticsearch](https://gist.github.com/karmi/b0a9b4c111ed3023a52d)

See the following sections for more information:

*  [Step 1: Create passwords](#es-ws-secure-nginx-pwd)
*  [Step 2: Set up access to nginx](#es-ws-secure-nginx-access)
*  [Step 3: Set up a restricted context for Elasticsearch](#es-ws-secure-nginx-context)
*  [Verify communication is secure](#es-ws-secure-verify)

### Step 1: Create a password {#es-ws-secure-nginx-pwd}

We recommend you use the Apache `htpasswd` command to encode passwords for a user with access to Elasticsearch (named `magento_elasticsearch` in this example).

To create a password:

1. Enter the following command to determine if `htpasswd` is already installed:

   ```bash
   which htpasswd
   ```

   If a path displays, it is installed; if the command returns no output, `htpasswd` is not installed.

1. If necessary, install `htpasswd`:

   *  Ubuntu: `apt-get -y install apache2-utils`
   *  CentOS: `yum -y install httpd-tools`

1. Create a `/etc/nginx/passwd` directory to store passwords:

   ```bash
   mkdir -p /etc/nginx/passwd
   ```

   ```bash
   htpasswd -c /etc/nginx/passwd/.<filename> <username>
   ```

   {:.bs-callout-warning}
   For security reasons, `<filename>` should be hidden; that is, it must start with a period.

1. *(Optional).* To add another user to your password file, enter the same command without the `-c` (create) option:

   ```bash
   htpasswd /etc/nginx/passwd/.<filename> <username>
   ```

1. Verify that the contents of `/etc/nginx/passwd` is correct.

### Step 3: Set up access to nginx {#es-ws-secure-nginx-access}

This section discusses how to specify who can access the nginx server.

{:.bs-callout-warning}
The example shown is for an *unsecure* proxy. To use a secure proxy, add the following contents (except the listen port) to your secure server block.

Use a text editor to modify either `/etc/nginx/conf.d/magento_es_auth.conf` (unsecure) or your secure server block with the following contents:

```conf
server {
  listen 8080;
  server_name 127.0.0.1;

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
```

 {:.bs-callout-info}
The Elasticsearch listen port shown in the preceding example are examples only. For security reasons, we recommend you use a non-default listen port for Elasticsearch.

### Step 4: Set up a restricted context for Elasticsearch {#es-ws-secure-nginx-context}

This section discusses how to specify who can access the Elasticsearch server.

1. Enter the following command to create a new directory to store the authentication configuration:

   ```bash
   mkdir /etc/nginx/auth/
   ```

1. Use a text editor to create a new file `/etc/nginx/auth/magento_elasticsearch.conf` with the following contents:

   ```conf
   location /elasticsearch {
   auth_basic "Restricted - elasticsearch";
   auth_basic_user_file /etc/nginx/passwd/.htpasswd_magento_elasticsearch;

   proxy_pass http://127.0.0.1:9200;
   proxy_redirect off;
   proxy_set_header Host $host;
   proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
   }
   ```

1. If you set up a secure proxy, delete `/etc/nginx/conf.d/magento_es_auth.conf`.
1. Restart nginx and continue with the next section:

   ```bash
   service nginx restart
   ```

{% include config/es-verify-proxy.md %}

#### Next

[Configure Elasticsearch stopwords]({{page.baseurl}}/config-guide/elasticsearch/es-config-stopwords.html)
