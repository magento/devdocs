---
layout: default
group: config-guide
subgroup: Configuration
title: Caching
menu_title: Caching
menu_order: 5
github_link: config-guide/config/caching.md
---

#### Contents 

*	<a href="#m2devgde-cache-explore">Overview of caching</a>
*	<a href="#m2devgde-cache-type">Create a cache type</a>
* <a href="#m2devgde-cache-more">More information about caching</a>

<h2 id="m2devgde-cache-explore">Overview of caching</h2>

Magento uses <a href="http://framework.zend.com/manual/1.12/en/zend.cache.html" target="_blank">Zend_Cache</a> component for interaction with the cache storage. However, Magento also has <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Cache" target="_blank">Magento\Cache</a> library component for implementing Magento-specific caching.

<div class="bs-callout bs-callout-info" id="info">
  <p>By default, file system caching is enabled; no configuration is necessary to use it. This means the cache is located under <code>&lt;your Magento install dir>/var</code>.</p>
</div>

To change the cache configuration, edit `<Magento install dir>/app/etc/config.php`.

The cache configuration is an associative array similar to the following:

{% highlight PHP %}
<? php
'cache_types' =>
  array (
    'config' => 1,
    'layout' => 1,
    'block_html' => 1,
    'view_files_fallback' => 1,
    'view_files_preprocessing' => 1,
    'collections' => 1,
    'db_ddl' => 1,
    'eav' => 1,
    'full_page' => 1,
    'translate' => 1,
    'config_integration' => 1,
    'config_webservice' => 1,
    'config_integration_api' => 1,
  ),
); ?>
{% endhighlight %}

<h2 id="m2devgde-cache-type">Create a cache type</h2>

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





