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
This tutorial shows you step-by-step how to set up multiple stores with Magento using Apache. 

### Assumptions
We assume the following:

*   You're working on a development machine (laptop, virtual machine, and so on)

    Additional tasks might be required to deploy multiple websites in a hosted environment; check with your hosting provider for more information.

    Additional tasks are required to set up Magento Enterprise Cloud Edition. After you complete the tasks discussed in this topic, see [Set up multiple Cloud websites or stores]({{ page.baseurl }}cloud/project/project-multi-sites.html).
*   You use one virtual host per website; the virtual host configuration file is `/etc/httpd/httpd.conf`

    Different versions of Apache on different operating systems set up virtual hosts differently. Consult the [Apache documentation](https://httpd.apache.org/docs/2.4/vhosts){:target="_blank"} or a network administrator if you're not sure how to set up a virtual host.
*   The Magento software is installed in `/var/www/html/magento2`
*   You have two websites other than the default:

    *   `french.mysite.mg` with website code `french` and storeview code `fr`
    *   `german.mysite.mg` with website code `german` and storeview code `de`

### Roadmap for setting up multiple websites with Apache
Setting up multiple stores consists of the following tasks:

1.  [Set up websites, stores, and store views]({{ page.baseurl }}config-guide/multi-site/ms_websites.html) in the Magento Admin.
2.  Create one [Apache virtual host](#ms-apache-vhosts) per Magento website.


## Step 1: Create websites, stores, and store views in the Magento Admin

See [Set up multiple websites, stores, and store views in the Admin]({{ page.baseurl }}config-guide/multi-site/ms_websites.html).

## Step 2: Create Apache virtual hosts {#ms-apache-vhosts}
This section discusses how to set values for `MAGE_RUN_TYPE` and `MAGE_RUN_CODE` using the Apache server variable `SetEnvIf` in a virtual host.

For more information about `SetEnvIf`, see:

*   [Apache 2.2](http://httpd.apache.org/docs/2.2/mod/mod_setenvif.html){:target="_blank"}
*   [Apache 2.4](http://httpd.apache.org/docs/2.4/mod/mod_setenvif.html){:target="_blank"}

{% collapsible To create Apache virtual hosts: %}

1.  As a user with `root` privileges, open the virtual host configuration file in a text editor.

    For example, open `/etc/httpd/conf/httpd.conf`
2. Locate the section starting with `<VirtualHost *:80>`.
3. Create the following virtual hosts after any existing virtual hosts:

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
        
5.  Save your changes to `httpd.conf` and exit the text editor.
6.  Restart Apache:

    *   CentOS: `service httpd restart`
    *   Ubuntu: `service apache2 restart`

{% endcollapsible %}

## Verify your site  {#ms-apache-verify}
{% include config/multi-site_verify.md %}