---
layout: default
group: config-guide
subgroup: Configuration
title: Caching
menu_title: Caching
menu_order: 5
github_link: config-guide/config/caching.md
---

*	<a href="#m2devgde-cache-explore">Overview of caching</a>
*	<a href="#m2devgde-cache-type">Create a cache type</a>
* 	<a href="#m2devgde-cache-more">More information about caching</a>

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

A *cache type* enables you to specify what is cached and enables merchants to clear that cache type using the Cache Management page in the Magento Admin.

The tag *scope* provides a mechanism for a cache type.

To create a new cache type:

<script src="https://gist.github.com/xcomSteveJohnson/574ff5d582c92f8f6acf.js"></script>

You must specify the following parameters:

*	`Namespace_Module` defines the name of a module that uses a cache type. A module can use several cache types and a cache type can be used in several modules.
*	`%cache_type_id%` defines unique identifier of a cache type.
*	`%cache_type_tag%` defines unique tag to be used in the cache type scoping.

<h2 id="m2devgde-cache-more">More information about caching</h2>
At this time, you can get more information about caching by looking at the code. To start, look for `const CONFIG_KEY =` in the following classes. Specify each key in `config.php` and add configuration detail (including cache storage) under that key.

* <a href="{{ site.mage2000url }}ib/internal/Magento/Framework/App/Cache/Type/ConfigSegment.php" target="_blank">ConfigSegment.php</a> for the cache segments (that is, cache types).
* <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/App/DeploymentConfig/CacheConfig.php" target="_blank">CacheConfig.php</a> for the frontend cache.
* <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/App/DeploymentConfig/BackendConfig.php" target="_blank">BackendConfig.php</a> for the backend cache.
* <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/App/DeploymentConfig/DbConfig.php" target="_blank">DbConfig.php</a> for database caching.
* <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/App/DeploymentConfig/EncryptConfig.php" target="_blank">EncryptConfig.php</a> for the `encrypt` cache.
* <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/App/DeploymentConfig/InstallConfig.php" target="_blank">InstallConfig.php</a> for the `installconfig` cache.
* <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/App/DeploymentConfig/ResourceConfig.php" target="_blank">ResourceConfig.php</a> for the `resourceconfig` cache.
* <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/App/DeploymentConfig/SegmentInterface.php" target="_blank">SegmentInterface.php</a> for the `segmentinterface` cache.
* <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/App/DeploymentConfig/SessionConfig.php" target="_blank">SessionConfig.php</a> for the session cache.


<div class="bs-callout bs-callout-info" id="info">
  <p>Please help us improve this topic by suggesting details using the <strong>Edit this page in GitHub</strong> link at the top of the page. </p>
</div>





