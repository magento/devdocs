## PHP memcache and memcached extensions   {#config-memcache-memcached}

Because PHP has no native support for memcache, you must install an extension for PHP to use it. There are two PHP extensions available and it's important to decode which to use:

*  `memcache` (no *d*), an older but very popular extension that is not maintained regularly. The `memcache` extension currently *does not* work with PHP 7.

   [PHP documentation for memcache](http://php.net/manual/en/book.memcache.php)

   The exact name is `php5-memcache` for Ubuntu and `php-pecl-memcache` for CentOS

*  `memcached` (with a `d`), a newer and maintained extension that should be compatible with PHP 7.

   [PHP documentation for memcached](http://php.net/memcached)

   The exact name is `php5-memcached` for Ubuntu and `php-pecl-memcached` for CentOS

 {:.bs-callout-info}
For simplicity, we use the PHP `memcache` extension in this guide although we provide examples for both when configuring Magento to use memcache.
