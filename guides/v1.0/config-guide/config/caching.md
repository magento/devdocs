---
layout: default
group: dev-guide
subgroup: Configuration
title: Caching
menu_title: Caching
menu_order: 2
github_link: config-guide/config/caching.md
---

<h2 id="m2devgde-cache-intro">Overview</h2>

In the Magento system, the functionality was split into several layers depending on role of each component:

* The system-level components went to **framework layer**
* The business-logic components went to **application layer**
* The components responsible for contact between a client and service provider went to **service layer**

A logical group in the application layer is _a module_ and a logical group in the framework layer is _a library_.

Moving some features to framework layer is to facilitate decreasing the module dependencies.

Features moved to the library depend only on the framework components and abstractions and do not depend on modules in the application layer.

To adjust the system to our new approach, we moved some elements out of the modules to libraries. In particular:

1.	Session
2. 	Cookies
3. 	Data types processing
4. 	Email
5.	functions.php
1.	Cache
1.	CAPTCHA

This article describes the changes in the Cache functionality.

<h2 id="m2devgde-cache-explore">Cache changes</h2>

Magento uses <a href="http://framework.zend.com/manual/1.12/en/zend.cache.html" target="_blank">Zend_Cache</a> component for interaction with the cache storage. However, Magento also has <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Cache" target="_blank">Magento\Cache</a> library component for implementing Magento-specific caching.

<h2 id="m2devgde-cache-configuring">Configure the cache</h2>

Make the primary configurations for cache in:

*	DI configuration files (`app/etc/di.xml` or `app/etc/*/di.xml`) to define the pre configured cache settings.
*	Deployment configuration files (`app/etc/local.xml`) to tweak the application during the deployment as necessary.

Configuring the cache involves setting up the <a href="#m2devgde-cache-frontend">cache frontend</a> and <a href="#m2devgde-cache-backend">cache backend</a>. Thus, you will need to specify the cache frontend configuration, attach the cache types to the cache frontend, and set up the cache backend for the cache frontend.

System uses <a href="#m2devgde-cache-frontend">cache frontend</a> for all caching operations.

Use `di.xml` file of a module to make the settings for the cache frontend:

<pre>&lt;type&nbsp;name=&quot;Magento\App\Cache\Frontend\Pool&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;arguments&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;argument&nbsp;name=&quot;frontendSettings&quot;&nbsp;xsi:type=&quot;array&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;item&nbsp;name=&quot;%cache_frontend_id%&quot;&nbsp;xsi:type=&quot;string&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;%cache_options%
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/item&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/argument&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/arguments&gt;
&lt;/type&gt;</pre>

These settings should contain a unique _identifier_, so the cache frontend could be easily retrieved from the pool.

The custom settings will override the default settings for the parts of the application that use corresponding cache frontend.

If necessary, you can prohibit saving new cache entities into the storage via <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Cache/Core.php" target="_blank">Magento\Cache\Core</a> class:

<pre>$options['disable_save'] = true;</pre>

As a result, new cache entities will not be saved, but the previously saved cache will be still available.

<h3 id="m2devgde-cache-type">Cache type</h3>

Cache type unites the cached data based on their functional role. Cache type serves to facilitate handling the cache, for instance, you can execute operations not to the whole cache, but to its part assigned to the same cache type. You can manage the cache divided into the types via the Cache Management page in the admin panel or via the programming interface in the run-time.

Tag scope component provides mechanism behind a cache type.

To create a new cache type:

<script src="https://gist.github.com/xcomSteveJohnson/574ff5d582c92f8f6acf.js"></script>

You must specify the following parameters:

*	`Namespace_Module` defines the name of a module that uses a cache type. A module can use several cache types and a cache type can be used in several modules.
*	`%cache_type_id%` defines unique identifier of a cache type.
*	`%cache_type_tag%` defines unique tag to be used in the cache type scoping.

Then you must make configurations of the grid on the Cache Management page or a new cache type. These configurations are taken from modules, that is, from `{Namespace}/{Module}/etc/cache.xml` file:

<pre>&lt;config&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;type&nbsp;name=&quot;%cache_type_id%&quot;&nbsp;instance=&quot;%cacheInstanceName%&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;label&gt;%cache_type_label%&lt;/label&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;description&gt;%cache_type_description%&lt;/description&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/type&gt;
&lt;/config&gt;</pre>

You must specify the following parameters:

*	`%cache_type_label%` defines the text name (label) that will display in the **Cache Type** column of the grid.
*	`%cache_type_description%` defines the text that will display in the **Description** column of the grid.

<h3 id="m2devgde-cache-frontend">Cache frontend</h3>

The cache frontend interface is API to the cache storage. When this interface is used, the cache does not appear in the client code. The frontend interface serves for

*	Manipulating an individual cache entry, including validating its existence, loading, saving, and removing cache.
*	Manipulating the subset of the cache entries, for instance, batch cache cleaning.

We use the <a href="http://www.php5dp.com/php-decorator-design-pattern-accessorizing-your-classes/" target="_blank">decorator</a> and proxy patterns in implementation of the cache frontend interface. For instance, these patterns can be used for

*	Segmentation by the cache tag
*	Profiling
*	Decorating individual operations

**Segmentation of the cache** ensures that cache in the cache storage is used by appropriate applications. We distinguish the cache entries in the storage by tagging them and adding unique prefixes to the tags. A tag and a prefix help to figure out to which application cache belongs as well as to avoid influence of cache with different tags (or without tags at all) on each other. To strengthen isolation of the cache, we use the cache tag scope. Cache tag scope ensures grouping of cache according to the specified type.

Use <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Cache/Frontend/Decorator/TagScope.php" target="_blank">Magento\Cache\Frontend\Decorator\TagScope</a> component to handle the isolation of the cache segments:

<pre>/** @var $cacheFrontend \Magento\Cache\FrontendInterface */

$cacheFrontendOne = new \Magento\Cache\Frontend\Decorator\TagScope($cacheFrontend, 'cache_segment_one_tag');
$cacheFrontendTwo = new \Magento\Cache\Frontend\Decorator\TagScope($cacheFrontend, 'cache_segment_two_tag');

$cacheFrontendOne->save('example_data_one', 'example_id_one');
$cacheFrontendTwo->save('example_data_two', 'example_id_two');

// erase 'example_data_one', but not 'example_data_two'
$cacheFrontendOne->clean();</pre>

<a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Cache/Frontend/Decorator/TagScope.php" target="_blank">Magento\Cache\Frontend\Decorator\TagScope</a> component serves to associate a cache entry with a cache type and restrict the cache operations, as necessary, for a cache type.

For **profiling the cache** we use <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Cache/Frontend/Decorator/Profiler.php" target="_blank">Magento\Cache\Frontend\Decorator\Profiler</a> class that implements the caching integration with the Magento_Profiler. The following records are gathered for every cache operation:

1.	Profiler timer name: `cache_&lt;cache_operation>`.
1.	Profiler tag group: `cache`
1.	Profiler tag operation: `cache:<cache_operation>`. `cache_operation` defines the frontend method used, for instance: `test()`, `load()`, `save()`, `remove()`, `clean()`.
1.	Profiler tag `frontend_type`: `<frontend_class>`. `frontend_class` defines name of Zend frontend class.
1.	Profiler tag `backend_type`: `<backend_type_name>`. `backend_type_name` defines name of Zend backend class; it may retrieve the prefix of the class name passed to the constructor.

To enable the cache profiling in the run-time:
<pre>/** @var $cacheFrontend \Magento\Cache\FrontendInterface */

if (\Magento\Profiler::isEnabled()) {
    $cacheFrontend = new Magento\Cache\Frontend\Decorator\Profiler($cacheFrontend);
}

$cacheFrontend->save('example_data', 'example_id'); // corresponds to 'cache_save' profiler timer
$cachedData = $cacheFrontend->load('example_id');   // corresponds to 'cache_load' profiler timer
$cacheFrontend->remove('example_id');               // corresponds to 'cache_remove' profiler timer</pre>

Some **decorator methods** influence several objects, while others influence a single method. This diversity may lead to duplication of the decorated methods. To address this problem, we use <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Cache/Frontend/Decorator/Bare.php" target="_blank">Magento\Cache\Frontend\Decorator\Bare</a> class. This decorator does not attach any additional responsibility to a decorated subject. Use this class, if you need to create decorators that imply only the individual actions:

<pre>namespace Magento\Cache\Frontend\Decorator;

class SuccessfulSave extends \Magento\Cache\Frontend\Decorator\Bare
{
    public function save($data, $id, array $tags = array(), $lifeTime = null)
    {
        return true;
    }
}</pre>

<h3 id="m2devgde-cache-backend">Cache backend</h3>

For the cache backend you can use any class that implements `Zend_Cache_Backend_Interface` or its extended interface - `Zend_Cache_Backend_ExtendedInterface`. By default, Magento uses four classes for the cache backend:

1.	<a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Cache/Backend/Database.php" target="_blank">Magento\Cache\Backend\Database</a> retrieves the database Zend adapter and its callback, name of the tables containing the cache data and cache tags as well as whether cache should be stored to the database.
1.	<a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Cache/Backend/Eaccelerator.php" target="_blank">Magento\Cache\Backend\Eaccelerator</a> facilitates work with <a href="http://eaccelerator.net/" target="_blank">eAccelerator</a>.
1.	<a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Cache/Backend/Memcached.php" target="_blank">Magento\Cache\Backend\Memcached</a> defines the size of the data to be saved into one memcache cell. This class extends `Zend_Cache_Backend_Memcached` class.
1.	<a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Cache/Backend/MongoDb.php" target="_blank">Magento\Cache\Backend\MongoDb</a> defines the connection string and additional <a href="http://www.php.net/manual/en/mongoclient.construct.php" target="_blank">connection options for Mongo database</a> s well as saves and gets data from Mongo database.

To modify the behavior of the cache backend, use the decorator pattern. The cache backend's decorator implements `Zend_Cache_Backend_ExtendedInterface` and extends <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Cache/Backend/Decorator/AbstractDecorator.php" target="_blank">Magento\Cache\Backend\Decorator\AbstractDecorator</a> abstract class.

For more information about the decorator pattern, see the following:

*	<a href="http://sourcemaking.com/design_patterns/Decorator/php" target="_blank">sourcemaking.com</a>
*	<a href="http://framework.zend.com/manual/1.12/en/learning.form.decorators.simplest.html" target="_blank">Zend decorator basics</a>
*	<a href="http://www.php5dp.com/php-decorator-design-pattern-accessorizing-your-classes/" target="_blank">php5dp.com</a>

To configure the cache backend's decorator in <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Cache/Core.php" target="_blank">Magento\Cache\Core</a> class:</p>

<pre>$options['backend_decorators']&nbsp;=&gt;&nbsp;array(
&nbsp;&nbsp;&nbsp;&nbsp;array(
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'class'&nbsp;=&gt;&nbsp;'&lt;decorator_class&gt;',
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;['options'&nbsp;=&gt;&nbsp;&lt;decorator_options&gt;],
&nbsp;&nbsp;&nbsp;&nbsp;),
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;...
);
</pre>

You must specify the following parameters:

*	`<decorator_class>` defines the name of a class extending <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Cache/Backend/Decorator/AbstractDecorator.php" target="_blank">Magento\Cache\Backend\Decorator\AbstractDecorator</a>.
*	`<decorator_options>` retrieves an array of arbitrary options to be passed to the constructor during creation of a decorator.

<a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Cache/Backend/Decorator/Compression.php" target="_blank">Magento\Cache\Backend\Decorator\Compression</a> class is used to compresses the data before saving them to the cache backend. The data string, which consists of more symbol than specified in `compression_threshold` parameter, will be compressed. You can distinguish the compressed data by the `compression_prefix`.

Magento also uses <a href="http://framework.zend.com/manual/1.12/en/zend.cache.backends.html#zend.cache.backends.twolevels" target="_blank">Zend framework's two-level cache backend</a>. You can customize it by changing the deployment settings in `local.xml` or `di.xml` file. However, some default parameters cannot be overridden:

*	`fast_backend_custom_naming`
*	`fast_backend_autoload`
*	`slow_backend_custom_naming`
*	`slow_backend_autoload`

To configure the two-level cache with the memcache as fast backend and file system as slow backend cache use `app/etc/local.xml`:

<pre>&lt;config&gt;
....
&nbsp;&nbsp;&nbsp;&nbsp;&lt;cache&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;frontend&nbsp;name=&quot;default&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;backend&gt;memcached&lt;/backend&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;slow_backend&gt;File&lt;/slow_backend&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;slow_backend_store_data&gt;1&lt;/slow_backend_store_data&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;auto_refresh_fast_cache&gt;1&lt;/auto_refresh_fast_cache&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;slow_backend_options&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;hashed_directory_level&gt;1&lt;/hashed_directory_level&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;hashed_directory_umask&gt;0777&lt;/hashed_directory_umask&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;file_name_prefix&gt;custom&lt;/file_name_prefix&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;cache_dir&gt;&lt;![CDATA[cache_slow]]&gt;&lt;/cache_dir&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/slow_backend_options&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;memcached&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;servers&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;server1&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;host&gt;&lt;![CDATA[localhost]]&gt;&lt;/host&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;port&gt;&lt;![CDATA[11211]]&gt;&lt;/port&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;persistent&gt;&lt;![CDATA[1]]&gt;&lt;/persistent&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;weight&gt;&lt;![CDATA[1]]&gt;&lt;/weight&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;timeout&gt;&lt;![CDATA[60]]&gt;&lt;/timeout&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;retry_interval&gt;&lt;![CDATA[10]]&gt;&lt;/retry_interval&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/server1&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/servers&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/memcached&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/frontend&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/cache&gt;
&lt;/config&gt;
</pre>

Alternatively, you can configure the two-level cache with the memcache as fast backend and file system as slow backend cache via `di.xml`. For instance, in `app/etc/di.xml` file:

<pre>&lt;config&nbsp;&gt;
....
&nbsp;&nbsp;&nbsp;&nbsp;&lt;type&nbsp;name=&quot;Magento\App\Cache\Frontend\Pool&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;arguments&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;argument&nbsp;name=&quot;frontendSettings&quot;&nbsp;xsi:type=&quot;array&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;item&nbsp;name=&quot;default&quot;&nbsp;xsi:type=&quot;array&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;item&nbsp;name=&quot;backend&quot;&nbsp;xsi:type=&quot;string&quot;&gt;memcached&lt;/item&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;item&nbsp;name=&quot;slow_backend&quot;&nbsp;xsi:type=&quot;string&quot;&gt;File&lt;/item&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;item&nbsp;name=&quot;slow_backend_store_data&quot;&nbsp;xsi:type=&quot;number&quot;&gt;1&lt;/item&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;item&nbsp;name=&quot;auto_refresh_fast_cache&quot;&nbsp;xsi:type=&quot;number&quot;&gt;1&lt;/item&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;item&nbsp;name=&quot;slow_backend_options&quot;&nbsp;xsi:type=&quot;array&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;item&nbsp;name=&quot;hashed_directory_level&quot;&nbsp;xsi:type=&quot;number&quot;&gt;1&lt;/item&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;item&nbsp;name=&quot;hashed_directory_umask&quot;&nbsp;xsi:type=&quot;number&quot;&gt;0777&lt;/item&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;item&nbsp;name=&quot;file_name_prefix&quot;&nbsp;xsi:type=&quot;string&quot;&gt;custom&lt;/item&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;item&nbsp;name=&quot;cache_dir&quot;&nbsp;xsi:type=&quot;string&quot;&gt;cache_slow&lt;/item&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/item&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;item&nbsp;name=&quot;memcached&quot;&nbsp;xsi:type=&quot;array&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;item&nbsp;name=&quot;servers&quot;&nbsp;xsi:type=&quot;array&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;item&nbsp;name=&quot;server1&quot;&nbsp;xsi:type=&quot;array&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;item&nbsp;name=&quot;host&quot;&nbsp;xsi:type=&quot;string&quot;&gt;localhost&lt;/item&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;item&nbsp;name=&quot;port&quot;&nbsp;xsi:type=&quot;number&quot;&gt;11211&lt;/item&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;item&nbsp;name=&quot;persistent&quot;&nbsp;xsi:type=&quot;number&quot;&gt;1&lt;/item&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;item&nbsp;name=&quot;weight&quot;&nbsp;xsi:type=&quot;number&quot;&gt;1&lt;/item&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;item&nbsp;name=&quot;timeout&quot;&nbsp;xsi:type=&quot;number&quot;&gt;60&lt;/item&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;item&nbsp;name=&quot;retry_interval&quot;&nbsp;xsi:type=&quot;number&quot;&gt;10&lt;/item&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/item&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/item&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/item&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/item&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/argument&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/arguments&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/type&gt;
&lt;/config&gt;</pre>








