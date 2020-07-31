---
group: cloud-guide
title: Set up multiple websites or stores
functional_areas:
  - Cloud
  - Setup
  - Configuration
  - Website
---

Magento Cloud Docker supports multi-website by using different subdomains.

## Add subdomains

1. Ensure that the `php.ini` file includes the configuration for the `magento-vars.php` file:

    ```ini
    auto_prepend_file = /app/magento-vars.php
    ```
    {:.bs-callout-info}
    {{ site.data.var.mcd-prod }} applies the configuration in the `php.ini` file if it is included in the root directory of your project.

1. Add each subdomain to the `/etc/hosts` configuration file.

    ```
    127.0.0.1 magento2.docker
    127.0.0.1 second.magento2.docker
    ```

    {:.bs-callout-info}
   You can make next changes while your Cloud Docker is running.

1. Add specific stores and websites in Magento admin:

   - [Set up websites, stores, and store views]({{site.baseurl}}/cloud/project/project-multi-sites.html#set-stores)

1. Add the configuration for Magento store and website codes to the `magento-vars.php` file:

   - [Modify Magento variables]({{site.baseurl}}/cloud/project/project-multi-sites.html#modify-magento-variables)
