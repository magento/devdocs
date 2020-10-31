---
group: configuration-guide
title: Tutorial&mdash;Set up multiple websites or stores with nginx
functional_areas:
  - Configuration
  - System
  - Setup
---

## Set up multiple websites with nginx {#ms-nginx-over}

This tutorial shows you step-by-step how to set up multiple websites using [nginx](https://glossary.magento.com/nginx).

### Assumptions

We assume that:

*  You are working on a development machine (laptop, virtual machine, or similar).

   Additional tasks might be required to deploy multiple websites in a hosted environment; check with your hosting provider for more information.

   Additional tasks are required to set up {{site.data.var.ece}}. After you complete the tasks discussed in this topic, see [Set up multiple {{site.data.var.ece}} websites or stores]({{ site.baseurl }}/cloud/project/project-multi-sites.html).

*  You accept multiple domains in one virtual host file or use one virtual host per website; the virtual host configuration files are located in `/etc/nginx/sites-available`.
*  You use the `nginx.conf.sample` provided by Magento with only the modifications discussed in this tutorial.
*  The Magento software is installed in `/var/www/html/magento2`.
*  You have two websites other than the default:

   *  `french.mysite.mg` with website code `french` and store view code `fr`
   *  `german.mysite.mg` with website code `german` and store view code `de`
   *  `mysite.mg` is the default website and default store view

 {:.bs-callout-tip}
Refer to [Create websites]({{ page.baseurl }}/config-guide/multi-site/ms_websites.html#step-2-create-websites) and [Create store views]({{ page.baseurl }}/config-guide/multi-site/ms_websites.html#step-4-create-store-views) for help locating these values.

### Roadmap for setting up multiple websites with nginx

To set up multiple stores:

1. [Set up websites, stores, and store views]({{ page.baseurl }}/config-guide/multi-site/ms_websites.html) in the [Magento Admin](https://glossary.magento.com/magento-admin).
1. Create an [nginx virtual host](#ms-nginx-vhosts) to map many websites or one [nginx virtual host](#ms-nginx-vhosts) per Magento [website](https://glossary.magento.com/website) (steps detailed below).
1. Pass the values of the [Magento variables]({{ page.baseurl }}/config-guide/multi-site/ms_over.html) `$MAGE_RUN_TYPE` and `$MAGE_RUN_CODE` to nginx using the Magento-provided `nginx.conf.sample` (steps detailed below).

   *  `$MAGE_RUN_TYPE` can be either `store` or `website`:

      *  Use `website` to load your website in your storefront.
      *  Use `store` to load any store view in your storefront.

   *  `$MAGE_RUN_CODE` is the unique website or store view code that corresponds to `$MAGE_RUN_TYPE`.

## Step 2: Create nginx virtual hosts {#ms-nginx-vhosts}

This section discusses how to load websites on the [storefront](https://glossary.magento.com/storefront). You can use either websites or store views; if you use store views, you must adjust parameter values accordingly. You must complete the tasks in this section as a user with `sudo` privileges.

By using just one [nginx virtual host file](#ms-nginx-vhosts), you can keep your nginx configuration simple and clean. By using several virtual host files, you can customize each store (to use a custom location for `french.mysite.mg` for instance).

{% collapsible To use one virtual host (simplified): %}

This configuration expands upon [Magento Nginx Configuration]({{ page.baseurl }}/install-gde/prereq/nginx.html). To create one virtual host:

1. Open a text editor and add the following contents to a new file named `/etc/nginx/sites-available/magento`:

   ```conf
   map $http_host $MAGE_RUN_CODE {
       default '';
       french.mysite.mg french;
       german.mysite.mg german;
   }

   server {
       listen 80;
       server_name mysite.mg french.mysite.mg german.mysite.mg;
       set $MAGE_ROOT /var/www/html/magento2;
       set $MAGE_MODE developer;
       set $MAGE_RUN_TYPE website; #or set $MAGE_RUN_TYPE store;
       include /var/www/html/magento2/nginx.conf;
   }
   ```

1. Save your changes to the files and exit the text editor.
1. Verify the server configuration:

   ```bash
   nginx -t
   ```

1. If successful, the following message displays:

   ```terminal
   nginx: configuration file /etc/nginx/nginx.conf test is successful
   ```

   If errors display, check the syntax of your virtual host configuration files.

1. Create symbolic link in the `/etc/nginx/sites-enabled` directory:

   ```bash
   cd /etc/nginx/sites-enabled
   ```

   ```bash
   ln -s /etc/nginx/sites-available/magento magento
   ```

For more detail about the map directive, see [nginx documentation on the map directive](http://nginx.org/en/docs/http/ngx_http_map_module.html#map).

{% endcollapsible %}

{% collapsible To create multiple virtual hosts (customize per website): %}
To create multiple virtual hosts:

1. Open a text editor and add the following contents to a new file named `/etc/nginx/sites-available/french.mysite.mg`:

   ```conf
   map $http_host $MAGE_RUN_CODE {
       french.mysite.mg french;
   }

   server {
       listen 80;
       server_name french.mysite.mg;
       set $MAGE_ROOT /var/www/html/magento2;
       set $MAGE_MODE developer;
       set $MAGE_RUN_TYPE website; #or set $MAGE_RUN_TYPE store;
       include /var/www/html/magento2/nginx.conf;
   }
   ```

1. Create another file named `german.mysite.mg` in the same directory with the following contents:

   ```conf
   map $http_host $MAGE_RUN_CODE {
       german.mysite.mg german;
   }

   server {
       listen 80;
       server_name german.mysite.mg;
       set $MAGE_ROOT /var/www/html/magento2;
       set $MAGE_MODE developer;
       set $MAGE_RUN_TYPE website; #or set $MAGE_RUN_TYPE store;
       include /var/www/html/magento2/nginx.conf;
   }
   ```

1. Save your changes to the files and exit the text editor.
1. Verify the server configuration:

   ```bash
   nginx -t
   ```

1. If successful, the following message displays:

   ```terminal
   nginx: configuration file /etc/nginx/nginx.conf test is successful
   ```

   If errors display, check the syntax of your virtual host configuration files.

1. Create symbolic links in the `/etc/nginx/sites-enabled` directory:

   ```bash
   cd /etc/nginx/sites-enabled
   ```

   ```bash
   ln -s /etc/nginx/sites-available/french.mysite.mg french.mysite.mg
   ```

   ```bash
   ln -s /etc/nginx/sites-available/german.mysite.mg german.mysite.mg
   ```

For more details about the map directive, see [nginx documentation on the map directive](http://nginx.org/en/docs/http/ngx_http_map_module.html#map).

{% endcollapsible %}

## Step 3: Modify nginx.conf.sample {#ms-nginx-conf-sample}
{%
include note.html
type="tip"
content="Do not edit the `nginx.conf.sample` file; it is a core Magento file that may be updated with each new release. Instead, copy the `nginx.conf.sample` file, rename it, and then edit the copied file."
%}

{% collapsible To edit the PHP entry point for the main application: %}
To modify the `nginx.conf.sample` file:

1. Open a text editor and review the `nginx.conf.sample` file ,`<magento2_installation_directory>/nginx.conf.sample`. Look for the following section:

   ```conf
   # PHP entry point for main application
   location ~ (index|get|static|report|404|503|health_check)\.php$ {
       try_files $uri =404;
       fastcgi_pass   fastcgi_backend;
       fastcgi_buffers 1024 4k;

       fastcgi_param  PHP_FLAG  "session.auto_start=off \n suhosin.session.cryptua=off";
       fastcgi_param  PHP_VALUE "memory_limit=1G \n max_execution_time=18000";
       fastcgi_read_timeout 600s;
       fastcgi_connect_timeout 600s;

       fastcgi_index  index.php;
       fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
       include        fastcgi_params;
   }
   ```

1. Update the `nginx.conf.sample` file with the following two lines before the include statement:

   ```conf
   fastcgi_param MAGE_RUN_TYPE $MAGE_RUN_TYPE;
   fastcgi_param MAGE_RUN_CODE $MAGE_RUN_CODE;
   ```

An example updated PHP entry point for the main application looks like:

```conf
# PHP entry point for main application

location ~ (index|get|static|report|404|503|health_check)\.php$ {
    try_files $uri =404;
    fastcgi_pass   fastcgi_backend;
    fastcgi_buffers 1024 4k;

    fastcgi_param  PHP_FLAG  "session.auto_start=off \n suhosin.session.cryptua=off";
    fastcgi_param  PHP_VALUE "memory_limit=1G \n max_execution_time=18000";
    fastcgi_read_timeout 600s;
    fastcgi_connect_timeout 600s;

    fastcgi_index  index.php;
    fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
    # START - Multisite customization
    fastcgi_param MAGE_RUN_TYPE $MAGE_RUN_TYPE;
    fastcgi_param MAGE_RUN_CODE $MAGE_RUN_CODE;
    # END - Multisite customization
    include        fastcgi_params;
}
```

{% endcollapsible %}

## Verify your site  {#ms-nginx-verify}

{% include config/multi-site_verify.md %}
