Magento supports PHP 7.4.0. You can install Magento 2.4.0 with 7.3, but it is not tested or recommended. It is intended for upgrading from Magento 2.3.x to Magento 2.4.0.

{:.bs-callout-warning}
There is a [bug](https://bugs.php.net/bug.php?id=79174) in PHP 7.4.2 which causes some messages to not render properly. Magento recommends using other versions of 7.4.
There is a [bug](https://github.com/jbboehr/php-psr/issues/78) in the `psr` php extension which causes fatal errors during installation or upgrade. Magento recommends uninstalling or deactivating the `psr` php extension.
