<div markdown="1">

<h2 id="config-memcache-memcached">PHP memcache and memcached extensions</h2>
Because PHP has no native support for memcache, you must install an extension for PHP to use it. There are two PHP extensions available and it's important to decode which to use:

*	`memcache` (no *d*), an older but very popular extension that is not maintained regularly. The `memcache` extension currently *does not* with PHP 7.

	<a href="http://php.net/manual/en/book.memcache.php" target="_blank">PHP documentation for memcache</a>

	The exact name is `php5-memcache` for Ubuntu and `php-pecl-memcache` for CentOS

*	`memcached` (with a `d`), a newer and maintained extension that should be compatible with PHP 7.

	<a href="http://php.net/memcached" target="_blank">PHP documentation for memcached</a>

	The exact name is `php5-memcached` for Ubuntu and `php-pecl-memcached` for CentOS

<div class="bs-callout bs-callout-info" id="info">
   <span class="glyphicon-class">
   <p>For simplicity, we use the PHP <code>memcache</code> extension in this guide although we provide examples for both when configuring Magento to use memcache.</p></span>
</div>