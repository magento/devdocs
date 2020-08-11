---
group: cloud-guide
title: Set up multiple websites or stores using Magento Cloud Docker
functional_areas:
  - Cloud
  - Setup
  - Configuration
  - Website
---

Magento Cloud Docker supports multiple websites or stores by adding subdomains to your Magento configuration. See [Understanding websites, stores, and store views][].

{:.procedure}
To add support for multiple websites and stores:

1. Ensure that the `php.ini` file includes the configuration for the `magento-vars.php` file:

   ```ini
   auto_prepend_file = /app/magento-vars.php
   ```

   {:.bs-callout-info}
   {{ site.data.var.mcd-prod }} applies the configuration in the `php.ini` file to the Docker environment if it is included in the root directory of your project.

1. Add each subdomain to the `/etc/hosts` configuration file.

   ```conf
   127.0.0.1 magento2.docker
   127.0.0.1 second.magento2.docker
   ```

After updating the `php.ini` file and adding subdomains, start the Docker environment and complete the following tasks to update the website and store configuration from the [Magento Admin](https://glossary.magento.com/magento-admin):

-  Add specific stores and websites. See [Set up websites, stores, and store views][].
-  Add the configuration for Magento store and website codes to the  `magento-vars.php`. See [Modify Magento variables][].

<!--Link definitions-->

[Modify Magento variables]: {{site.baseurl}}/cloud/project/project-multi-sites.html#modify-magento-variables
[Understanding websites, stores, and store views]: {{site.baseurl}}/cloud/configure/configure-best-practices.html#sites
[Set up websites, stores, and store views]: {{site.baseurl}}/guides/v2.4/config-guide/multi-site/ms_websites.html
