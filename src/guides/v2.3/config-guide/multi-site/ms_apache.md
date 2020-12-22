---
group: configuration-guide
title: Tutorial&mdash;Set up multiple websites with Apache
functional_areas:
  - Configuration
  - System
  - Setup
---

## Set values in an entry point script {#ms-entry-script}

If necessary, copy the existing `index.php` entry point script for your [website](https://glossary.magento.com/website) or [store view](https://glossary.magento.com/store-view) and add to it the following:

*  You're working on a development machine (laptop, virtual machine, and so on)

   Additional tasks might be required to deploy multiple websites in a hosted environment; check with your hosting provider for more information.

   Additional tasks are required to set up {{site.data.var.ece}}. After you complete the tasks discussed in this topic, see [Set up multiple {{site.data.var.ece}} websites or stores]({{ site.baseurl }}/cloud/project/project-multi-sites.html).

*  You use one virtual host per website; the virtual host configuration file is `/etc/httpd/httpd.conf`

    Different versions of Apache on different operating systems set up virtual hosts differently. Consult the [Apache documentation](https://httpd.apache.org/docs/2.4/vhosts) or a network administrator if you're not sure how to set up a virtual host.

*  The Magento software is installed in `/var/www/html/magento2`
*  You have two websites other than the default:

   *  `french.mysite.mg` with website code `french` and store view code `fr`
   *  `german.mysite.mg` with website code `german` and store view code `de`

### Roadmap for setting up multiple websites with Apache

Setting up multiple stores consists of the following tasks:

1. [Set up websites, stores, and store views]({{ page.baseurl }}/config-guide/multi-site/ms_websites.html) in the [Magento Admin](https://glossary.magento.com/magento-admin).
1. Create one [Apache virtual host](#ms-apache-vhosts) per Magento website.

## Step 1: Create websites, stores, and store views in the Magento Admin

See [Set up multiple websites, stores, and store views in the Admin]({{ page.baseurl }}/config-guide/multi-site/ms_websites.html).

## Step 2: Create Apache virtual hosts {#ms-apache-vhosts}

This section discusses how to set values for `MAGE_RUN_TYPE` and `MAGE_RUN_CODE` using the Apache server variable `SetEnvIf` in a virtual host.

For more information about `SetEnvIf`, see:

*  [Apache 2.2](http://httpd.apache.org/docs/2.2/mod/mod_setenvif.html)
*  [Apache 2.4](http://httpd.apache.org/docs/2.4/mod/mod_setenvif.html)

{% collapsible To create Apache virtual hosts: %}

1. As a user with `root` privileges, open the virtual host configuration file in a text editor.

   For example, open `/etc/httpd/conf/httpd.conf`

1. Locate the section starting with `<VirtualHost *:80>`.
1. Create the following virtual hosts after any existing virtual hosts:

   ```conf
   <VirtualHost *:80>
      ServerName          mysite.mg
      DocumentRoot        /var/www/html/magento2/pub/
   </VirtualHost>

   <VirtualHost *:80>
      ServerName          french.mysite.mg
      DocumentRoot        /var/www/html/magento2/pub/
      SetEnv MAGE_RUN_CODE "french"
      SetEnv MAGE_RUN_TYPE "website"
   </VirtualHost>

   <VirtualHost *:80>
      ServerName          german.mysite.mg
      DocumentRoot        /var/www/html/magento2/pub/
      SetEnv MAGE_RUN_CODE "german"
      SetEnv MAGE_RUN_TYPE "website"
   </VirtualHost>
   ```

1. Save your changes to `httpd.conf` and exit the text editor.
1. Restart Apache:

   *  CentOS: `service httpd restart`
   *  Ubuntu: `service apache2 restart`

{% endcollapsible %}

## Verify your site  {#ms-apache-verify}

{% include config/multi-site_verify.md %}
