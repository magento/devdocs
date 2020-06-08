---
group: software-update-guide
title: Maintenance mode options for upgrade
functional_areas:
  - Upgrade
---

This topic discusses how you can create a custom maintenance page to display to users while your Magento application is being upgraded. Creating a custom page is optional but recommended because your site is accessible during part of the upgrade.

Creating a custom page to which to redirect users prevents any access to the site and also informs your users that the site is undergoing maintenance.

{:.bs-callout-info}
You must perform the tasks in this section as a user with `root` privileges. Custom maintenance pages cannot be set while in developer mode.

See one of the following sections for more information:

*  [Create the custom maintenance page](#compman-trouble-maint-create)
*  [Custom maintenance page for Apache](#compman-trouble-maint-apache)
*  [Custom maintenance page for nginx](#compman-trouble-maint-nginx)

## Create the custom maintenance page {#compman-trouble-maint-create}

To create a maintenance page and redirect to it, first create a maintenance page named:

*  Apache: `<web server docroot>/maintenance.html`
*  nginx: `<magento_root>/maintenance.html`

Add to it the following contents:

```html
<!DOCTYPE html>
<html>
<head>
<title>Temporarily Offline</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<style>
h1
{ font-size: 50px; }

body
{ text-align:center; font: 20px Helvetica, sans-serif; color: #333; }

</style>
</head>
<body>

# Temporarily offline

<p>We're down for a short time to perform maintenance on our site to give you the best possible experience. Check back soon!</p>
</body>
</html>
```

## Custom maintenance page for Apache {#compman-trouble-maint-apache}

This section discusses how to create a custom maintenance page and how to redirect traffic to it.

The example in this section shows how to modify the following files, which is one way to set up your maintenance page:

*  Apache 2.4: `/etc/apache2/sites-available/000-default.conf`
*  Apache 2.2: `/etc/apache2/sites-available/default` (Ubuntu), `/etc/httpd/conf/httpd.conf` (CentOS)

To redirect traffic to a custom maintenance page:

1. Update your Apache configuration to do the following:

   *  Redirect all traffic to the maintenance page
   *  Whitelist certain IPs so an administrator can run the System Upgrade utility to upgrade the Magento software.

   The following example whitelists 192.0.2.110.

   Add the following at the end of your Apache configuration file:

   ```terminal
   RewriteEngine On
   RewriteCond %{REMOTE_ADDR} !^192\.0\.2\.110
   RewriteCond %{DOCUMENT_ROOT}/maintenance.html -f
   RewriteCond %{DOCUMENT_ROOT}/maintenance.enable -f
   RewriteCond %{SCRIPT_FILENAME} !maintenance.html
   RewriteRule ^.*$ /maintenance.html [R=503,L]
   ErrorDocument 503 /maintenance.html
   Header Set Cache-Control "max-age=0, no-store"
   ```

1. Restart Apache:

   *  CentOS: `service httpd restart`
   *  Ubuntu: `service apache2 restart`

1. Enter the following command:

   ```bash
   touch <web server docroot>/maintenance.enable
   ```

1. [Upgrade your system]({{ page.baseurl }}/comp-mgr/cli/cli-upgrade.html).
1. Test your site to make sure it functions correctly.
1. After the upgrade is done, delete `maintenance.enable`.

## Custom maintenance page for nginx {#compman-trouble-maint-nginx}

This section discusses how to create a custom maintenance page and how to redirect traffic to it.

To redirect traffic to a custom maintenance page:

1. Use a text editor to open the [nginx](https://glossary.magento.com/nginx) configuration file that contains your server block.
1. Add the following to the server block (`server` is shown for clarity only; don't add a second server block).

   The following whitelists IP address 192.0.2.110 and 192.0.2.115 on a system where Magento is installed in `/var/www/html/magento2`:

   ```conf
   server {
        listen 80;
        set $MAGE_ROOT /var/www/html/magento2;

        set $maintenance off;

        if (-f $MAGE_ROOT/maintenance.enable) {
            set $maintenance on;
        }

        if ($remote_addr ~ (192.0.2.110|192.0.2.115)) {
            set $maintenance off;
        }

        if ($maintenance = on) {
            return 503;
        }

        location /maintenance {
        }

        error_page 503 @maintenance;

        location @maintenance {
        root $MAGE_ROOT;
        rewrite ^(.*)$ /maintenance.html break;
    }

        include /var/www/html/magento2/nginx.conf;
   }
   ```

1. Enter the following command:

   ```bash
   touch <magento_root>/maintenance.enable
   ```

1. Reload the nginx configuration:

   ```bash
   service nginx reload
   ```

1. [Upgrade your system]({{ page.baseurl }}/comp-mgr/cli/cli-upgrade.html).
1. Test your site to make sure it functions correctly.
1. After the upgrade is done, delete or rename `maintenance.enable`
1. Reload the nginx configuration:

   ```bash
   service nginx reload
   ```
