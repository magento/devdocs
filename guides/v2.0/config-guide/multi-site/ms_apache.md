---
layout: default
group: config-guide
subgroup: 500_sites
title: Set up multiple websites with Apache (tutorial)
menu_title: Set up multiple websites with Apache (tutorial)
menu_order: 9
menu_node: 
version: 2.0
github_link: config-guide/multi-site/ms_apache.md
---

## Set up multiple websites with Apache  {#ms-apache-over}
This tutorial shows you step-by-step how to set up multiple stores with Magento using Apache. We assume the following:

*   You're developing on a local machine or a development machine

    Additional tasks might be required to deploy multiple websites in a hosted environment; check with your hosting provider for more information.

    Additional tasks are required to set up Magento Enterprise Cloud Edition; for more information, see [Set up multiple Cloud websites or stores]({{ page.baseurl }}cloud/project/project-multi-sites.html)
*   You use one virtual host per store; the virtual host configuration file is `/etc/httpd/httpd.conf`

    Different versions of Apache on different operating systems set up virtual hosts differently. Consult the Apache documentation or a network administrator if you're not sure how to set yours up.
*   The Magento software is installed in `/var/www/html/magento2`
*   You have two websites other than the default:

    *   `french.example.com` with website code `french` and storeview code `fr`
    *   `german.example.com` with website code `german` and storeview code `de`

Setting up multiple stores consists of the following tasks:

1.  [Set up websites, stores, and store views]({{ page.baseurl }}config-guide/multi-site/ms_websites.html) in the Magento Admin.
2.  Create one [Apache virtual host](#ms-apache-vhosts) per Magento website or store view.
3.  Pass the values of the [Magento variables](#ms-apache-vars) `$MAGE_RUN_TYPE` and `$MAGE_RUN_CODE` to Apache using the Magento-provided `Apache.conf.sample`.

    *   `$MAGE_RUN_TYPE` can be either `store` or `website`

        *   Use `website` to load your website in your storefront.
        *   Use `store` to load any store view in your storefront.

    *   `$MAGE_RUN_CODE` is the unique website or store view code that corresponds to `$MAGE_RUN_TYPE`

## Step 1: Create websites, stores, and store views in the Magento Admin

See [Set up multiple websites, stores, and store views in the Admin]({{ page.baseurl }}config-guide/multi-site/ms_websites.html).

## Step 2: Create Apache virtual hosts {#ms-htaccess}
This section discusses how to set values for `MAGE_RUN_TYPE` and `MAGE_RUN_CODE` using Apache server variables `SetEnvIf` or `RewriteCond`. If you're not sure what environment variable to use, consult a network administrator.

For more information about `SetEnvIf` or `RewriteCond`, see:

*   Apache 2.2: <a href="http://httpd.apache.org/docs/2.2/mod/mod_setenvif.html" target="_blank">SetEnvIf</a>, <a href="http://httpd.apache.org/docs/2.2/mod/mod_rewrite.html#rewritecond" target="_blank">RewriteCond</a>
*   Apache 2.4: <a href="http://httpd.apache.org/docs/2.4/mod/mod_setenvif.html" target="_blank">SetEnvIf</a>, <a href="http://httpd.apache.org/docs/2.4/mod/mod_rewrite.html#rewritecond" target="_blank">RewriteCond</a>

### SetEnvIf example
To set values for `MAGE_RUN_TYPE` and `MAGE_RUN_CODE` using the Apache `SetEnvIf` variable:

1.  Open the virtual host configuration file in a text editor.

    In this tutorial, open `/etc/httpd/conf/httpd.conf`
2. Locate the line `<VirtualHost *:80>` and uncomment the entire section if necessary.
3. Enter the following between the `<VirtualHost *:80>` and `</VirtualHost>` tags:

        ServerName          french.example.com
        DocumentRoot        /var/www/html/magento2/
        SetEnv MAGE_RUN_CODE "french"
        SetEnv MAGE_RUN_TYPE "website"
4.  Copy that virtual host definition to another one and change it as follows:

        ServerName          german.example.com
        DocumentRoot        /var/www/html/magento2/
        SetEnv MAGE_RUN_CODE "german"
        SetEnv MAGE_RUN_TYPE "website"
5.  Save your changes to `httpd.conf` and exit the text editor.



Add the following after `RewriteEngine on` in `.htaccess`:

    SetEnvIf Host .*<your domain>.* MAGE_RUN_CODE=<code>
    SetEnvIf Host .*<your domain>.* MAGE_RUN_TYPE={store|website}

For example, to use a website with the code `frenchsite.example.com`:

    SetEnvIf Host .*example.com.* MAGE_RUN_CODE=frenchsite.example.com
    SetEnvIf Host .*example.com.* MAGE_RUN_TYPE=website

#### RewriteCond example
Add code similar to the following after `RewriteBase /magento/` in `.htaccess`:

    RewriteCond %{HTTP_HOST} ^(.*)<your domain>\<domain suffix>
    RewriteRule .* – [E=MAGE_RUN_CODE:<code>]
    RewriteCond %{HTTP_HOST} ^(.*)<your domain>\<domain suffix>
    RewriteRule .* – [E=MAGE_RUN_TYPE:{store|website}]

For example, to use a website with the code `frenchsite.example.com`:

    RewriteCond %{HTTP_HOST} ^(.*)example\.com
    RewriteRule .* – [E=MAGE_RUN_CODE:frenchsite.example.com]
    RewriteCond %{HTTP_HOST} ^(.*)example\.com
    RewriteRule .* – [E=MAGE_RUN_TYPE:website]

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>The preceding is an example only. There is more than one way to configure the <code>RewriteCond</code> rule. Consult a system integrator or network administrator for more information.</p></span>
</div>
