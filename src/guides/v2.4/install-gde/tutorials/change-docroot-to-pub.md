---
group: installation-guide
title: Modify docroot to improve security
---

In a standard installation with an Apache web server, Magento is installed to the default web root: `/var/www/html/magento2`.
Within the `magento2` folder are:

-  /pub/
-  /setup/
-  /var/
-  other folders

The Magento app is served from `/var/www/html/magento2/pub`. The rest of the Magento file system is vulnerable because it is accessible from a browser.
Setting the webroot to the `pub/` directory prevents site visitors from accessing sensitive areas of the Magento file system from a browser.

This topic describes how to change the Apache [docroot]({{ page.baseurl }}/install-gde/basics/basics_docroot.html) on an existing Magento instance to serve files from the Magento `pub/` directory, which is more secure.

## A note about nginx

If you are using [nginx]({{ page.baseurl }}/install-gde/prereq/nginx.html) and the [`nginx.conf.sample`]({{ site.mage2bloburl }}/{{ page.guide_version }}/nginx.conf.sample) file included in the Magento installation directory, you are probably already serving files from the `pub/` directory.

When used in your server block that defines your site, the `nginx.conf.sample` configuration overrides your server's docroot settings to serve files from Magento's `pub/` directory. For example, see the last line in the following configuration:

```bash
    # /etc/nginx/sites-available/magento

    upstream fastcgi_backend {
         server  unix:/run/php/php7.4-fpm.sock;
     }

     server {

              listen 80;
              server_name 192.168.33.10;
              set $MAGE_ROOT /var/www/html/magento2ce;
              include /var/www/html/magento2ce/nginx.conf.sample;
    }
```

## Before you begin

To complete this tutorial, you will need access to a working Magento installation running on a [LAMP](https://en.wikipedia.org/wiki/LAMP_(software_bundle)){:target="_blank"} stack:

-  Linux
-  Apache (2.2+)
-  MySQL (5.7+)
-  PHP (7.3 or 7.4)
-  Elasticsearch (7.x)
-  Magento (2.3+)

{:.bs-callout-info}
Refer to [Prerequisites]({{ page.baseurl }}/install-gde/prereq/prereq-overview.html) and the [Installation Guide]({{ page.baseurl }}/install-gde/bk-install-guide.html) for more information.

## 1. Edit your server configuration

The name and location of your virtual host file depends on which version of Apache you are running. This example shows the name and location of the virtual host file on Apache v2.4.

1. Log in to your Magento server.
1. Edit your virtual host file:

   ```bash
   vim /etc/apache2/sites-available/000-default.conf
   ```

1. Add the path to your Magento `pub/` directory to the `DocumentRoot` directive:

   ```conf
    <VirtualHost *:80>

            ServerAdmin webmaster@localhost
            DocumentRoot /var/www/html/magento2ce/pub

            ErrorLog ${APACHE_LOG_DIR}/error.log
            CustomLog ${APACHE_LOG_DIR}/access.log combined

            <Directory "/var/www/html">
                        AllowOverride all
            </Directory>
    </VirtualHost>
    ```

1. Restart Apache:

   ```bash
   systemctl restart apache2
   ```

## 2. Update your base URL

If you appended a directory name to your server's hostname or IP address to create the base URL when you installed Magento (for example `http://192.168.33.10/magento2`), you'll need to remove it.

 {:.bs-callout-info}
Replace `192.168.33.10` with your server's hostname.

1. Log in to the Magento database:

   ```bash
   mysql -u <user> -p
   ```

1. Specify the Magento database you created when you installed Magento:

   ```shell
   use <database-name>
   ```

1. Update the base URL:

   ```shell
   UPDATE core_config_data SET value='http://192.168.33.10' WHERE path='web/unsecure/base_url';
   ```

## 3. Update the env.php file

The following node needs to be appended to the `env.php` file.

```conf
'directories' => [
    'document_root_is_pub' => true
]
```

Refer to the [env.php reference]({{ page.baseurl }}/config-guide/prod/config-reference-envphp.html) for more information.

## 4. Switch modes

[Magento modes]({{ page.baseurl }}/config-guide/bootstrap/magento-modes.html), which include `production` and `developer`, are designed to improve security and make development easier. As the names suggest, you should switch to `developer` mode when extending or customizing Magento and switch to `production` mode when running Magento in a live environment.

Switching between modes is an important step in verifying that your server configuration is working properly. You can switch between modes using the Magento CLI tool:

1. Go to your Magento installation directory.
1. Switch to `production` mode.

   ```bash
   bin/magento deploy:mode:set production
   ```

   ```bash
   bin/magento cache:flush
   ```

1. Refresh your browser and verify that the storefront displays properly.
1. Switch to `developer` mode.

   ```bash
   bin/magento deploy:mode:set developer
   ```

   ```bash
   bin/magento cache:flush
   ```

1. Refresh your browser and verify that the storefront displays properly.

## 5. Verify the storefront

Go to the [storefront](https://glossary.magento.com/storefront) in a web browser to verify that everything is working.

1. Open a web browser and enter your server's hostname or IP address in the address bar. For example, http://192.168.33.10.

   The following figure shows a sample storefront page. If it displays as follows, your installation was a success!

   ![Magento storefront which verifies a successful installation]({{ site.baseurl }}/common/images/install-success_store.png){:width="450px"}

   Refer to the [troubleshooting section](https://support.magento.com/hc/en-us/articles/360032994352) if the page displays a 404 (Not Found) or fails to load other assets like images, CSS, and JS.

1. Try accessing a Magento directory from a browser. Append the directory name to your server's hostname or IP address in the address bar:

   If you see a 404 or the "Access denied" message, you've successfully restricted access to the Magento file system.

   ![Access denied]({{ site.baseurl }}/common/images/access-denied.png)

## Congratulations! You're finished.
{:.no_toc}