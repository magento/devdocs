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
---

In Magento 2.1 or later, when creating a new product in the Magento Admin, the following error might display:

	Warning: Illegal string offset 'is_in_stock' in [...]/vendor/
	magento/module-catalog-inventory/Ui/DataProvider/Product/Form/
	Modifier/AdvancedInventory.php on line 87

### Detail

Magento 2.1 and later use PHP code comments in the `getDocComment` validation call in the [`getExtensionAttributes`]({{ site.mage2100url }}lib/internal/Magento/Framework/Api/ExtensionAttributesFactory.php#L64-L73) method in `Magento\Framework\Api\ExtensionAttributesFactory.php`.

If you enabled the {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} OPcache (which we recommend), this error displays because by default, the OPcache setting [`opcache.save_comments`](http://php.net/manual/en/opcache.configuration.php#ini.opcache.save_comments) is disabled.

### Workaround

To solve the issue, locate your OPcache configuration settings and enable `opcache.save_comments` as follows:

#### Step 1: Locate your OPcache configuration
{% collapsible To find OPcache configuration settings: %}

PHP OPcache settings are typically located either in `php.ini` or `opcache.ini`. The location might depend on your operating system and PHP version. The OPcache configuration file might have an `[opcache]` section or settings like `opcache.enable`.

Use the following guidelines to find it:

*	Apache web server:

	For Ubuntu with Apache, OPcache settings are typically located in `php.ini`.

	For CentOS with Apache or nginx, OPcache settings are typically located in `/etc/php.d/opcache.ini`

	If not, use the following command to locate it:

		sudo find / -name 'opcache.ini'

*	nginx web server with PHP-FPM: `/etc/php5/fpm/php.ini`

If you have more than one `opcache.ini`, modify all of them.

{% endcollapsible %}

#### Step 2: Enable `opcache.save_comments`

1.	Open your OPcache configuration file in a text editor.
2.	Locate `opcache.save_comments` and uncomment it if necessary.
3.	Make sure its value is set to `1`.
4.	Save your changes and exit the text editor.
5.	Restart your web server:

	*	Apache, Ubuntu: `service apache2 restart`
	*	Apache, CentOS: `service httpd restart`
	*	nginx, Ubuntu and CentOS: `service nginx restart`

6.	Regenerate DI configuration and all missing classes that can be auto-generated:

	*	`bin/magento setup:di:compile`
