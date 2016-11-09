<div markdown="1">

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