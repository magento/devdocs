---
group: installation-guide
subgroup: 10_php
title: Resolve an illegal offset error
menu_title: Resolve an illegal offset error
menu_node:
menu_order: 2
functional_areas:
  - Install
  - System
  - Setup
redirect_to: https://support.magento.com/hc/en-us/articles/360034597391
---

In Magento 2.1 or later, when creating a new product in the Magento Admin, the following error might display:

```text
Warning: Illegal string offset 'is_in_stock' in [...]/vendor/
magento/module-catalog-inventory/Ui/DataProvider/Product/Form/
Modifier/AdvancedInventory.php on line 87
```

### Detail

Magento 2.1 and later use PHP code comments in the `getDocComment` validation call in the [`getExtensionAttributes`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Api/ExtensionAttributesFactory.php#L64-L73) method in `Magento\Framework\Api\ExtensionAttributesFactory.php`.

If you enabled the [PHP](https://glossary.magento.com/php) OPcache (which we recommend), this error displays because by default, the OPcache setting [`opcache.save_comments`](http://php.net/manual/en/opcache.configuration.php#ini.opcache.save_comments) is disabled.

### Workaround

To solve the issue, locate your OPcache configuration settings and enable `opcache.save_comments` as follows:

#### Step 1: Locate your OPcache configuration
{% collapsible To find OPcache configuration settings: %}

PHP OPcache settings are typically located either in `php.ini` or `opcache.ini`. The location might depend on your operating system and PHP version. The OPcache configuration file might have an `[opcache]` section or settings like `opcache.enable`.

Use the following guidelines to find it:

*  Apache web server:

   For Ubuntu with Apache, OPcache settings are typically located in `php.ini`.

   For CentOS with Apache or nginx, OPcache settings are typically located in `/etc/php.d/opcache.ini`

   If not, use the following command to locate it:

   ```bash
   sudo find / -name 'opcache.ini'
   ```

*  nginx web server with PHP-FPM: `/etc/php5/fpm/php.ini`

If you have more than one `opcache.ini`, modify all of them.

{% endcollapsible %}

#### Step 2: Enable `opcache.save_comments`

1. Open your OPcache configuration file in a text editor.
1. Locate `opcache.save_comments` and uncomment it if necessary.
1. Make sure its value is set to `1`.
1. Save your changes and exit the text editor.
1. Restart your web server:

   *  Apache, Ubuntu: `service apache2 restart`
   *  Apache, CentOS: `service httpd restart`
   *  nginx, Ubuntu and CentOS: `service nginx restart`

1. Regenerate DI configuration and all missing classes that can be auto-generated:

   ```bash
   bin/magento setup:di:compile`
   ```
