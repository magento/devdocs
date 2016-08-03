---
layout: default
group: config-guide
subgroup: 08_Caching
title: Associate cache frontends with cache types
menu_title: Associate cache frontends with cache types
menu_order: 3
menu_node: 
level3_menu_node: level3child
level3_subgroup: cache-types
version: 2.0
github_link: config-guide/cache/caching_frontend-cache-types.md
redirect_from: /guides/v2.0/config-guide/config/caching_frontend-cache-types.html
---

#### Contents 

*	<a href="#cache-mage-over">Overview of Magento caching</a>
*	<a href="#cache-mage-frontend">Step 1: Define a cache frontend</a>
*   <a href="#cache-mage-adv">Step 2: Configure the cache</a>

<h2 id="cache-mage-over">Overview of Magento caching</h2>
Magento enables you to configure alternatives to the default file system caching. This guide discusses some of those alternatives; namely,

*   Set up the following cache mechanisms in the Magento configuration:

    *   <a href="{{page.baseurl}}config-guide/database/database.html">Database</a>
    *   <a href="{{page.baseurl}}config-guide/redis/config-redis.html">Redis</a>
    *   File system (default): No configuration is necessary to use file system caching.

*   Set up the <a href="{{page.baseurl}}config-guide/varnish/config-varnish.html">Varnish</a> without modifying the Magento configuration.

<div class="bs-callout bs-callout-info" id="info">
  <p>We'll periodically add more cache alternatives so watch this space.</p>
</div> 

Magento uses the following caching terminology:

* *Frontend*: Similar to an interface or gateway to cache storage, implemented by <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Cache/Frontend" target="_blank">Magento\Framework\Cache\Frontend</a>.
* *Cache types*: Can be one of the types provided with Magento or you can <a href="{{page.baseurl}}config-guide/config/caching-cache-type.html">create your own</a>.
* *Backend*: Specifies details about <a href="http://framework.zend.com/manual/1.12/en/zend.cache.backends.html" target="_blank">cache storage</a>, implemented by <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Cache/Backend" target="_blank">Magento\Framework\Cache\Backend</a>
* *Two-level backend*: Stores cache records in two backends&mdash;a faster one and a slower one.

    Two-level backend cache configuration is beyond the scope of this guide at this time.

This topic discusses the following options for configuring caching:

*   Modifying the provided `default` cache frontend, which means you modify only `<your Magento install dir>/app/etc/di.xml` (the Magento application's global dependency injection configuration)
*   Configuring your own custom cache frontend, which means you modify only `<your Magento install dir>/app/etc/env.php` because it overrides the equivalent configuration in `di.xml`

<div class="bs-callout bs-callout-info" id="info">
  <p>Varnish requires no changes to the Magento configuration. For more information, see <a href="{{page.baseurl}}config-guide/varnish/config-varnish.html">Configure and use Varnish</a>.</p>
</div> 

<h2 id="cache-mage-frontend">Step 1: Define a cache frontend</h2>
The Magento application has a `default` cache frontend you can use for any <a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-cache.html#config-cli-subcommands-cache-clean-over">cache type</a>. This section discusses how to optionally define a cache frontend with a different name, which is preferable if you expect to customize your frontend.

<div class="bs-callout bs-callout-info" id="info">
  <p>To use the <code>default</code> cache type, you don't need to modify <code>env.php</code> at all; you modify Magento's global <code>di.xml</code>. See the topics referenced in <a href="{{page.baseurl}}config-guide/config/caching_low-level.html">Low-level cache options</a>. </p>
</div>
 
You must specify a custom cache frontend either `app/etc/env.php` or Magento's global `app/etc/di.xml`. 

The following example shows how to define it in `env.php` (which overrides `di.xml`):

{% highlight php startinline=true %}
'cache' => [
    'frontend' => [
        '<unique frontend id>' => [
             <cache options>
        ],
    ],
    'type' => [
         <cache type 1> => [
             'frontend' => '<unique frontend id>'
        ],
    ],
    'type' => [
         <cache type 2> => [
             'frontend' => '<unique frontend id>'
        ],
    ],
],
{% endhighlight %}

where `<unique frontend id>` is a unique name to identify your frontend and `<cache options>` are options discussed in the topics specific to each type of caching (database, Redis, and so on).

<h2 id="cache-mage-adv">Step 2: Configure the cache</h2>
You can specify frontend and backend cache configuration options in `env.php` or `di.xml`. This task is optional.

`env.php` example:

{% highlight php startinline=true %}
'frontend' => <frontend_type>,
'frontend_options' => [
    <frontend_option> => <frontend_option_value>,
    ...
],
'backend' => <backend_type>,
'backend_options' => [
    <backend_option> => <backend_option_value>,
    ...
],
{% endhighlight %}

where

*   `<frontend_type>` is the low-level frontend cache type. Specify the name of a class that is compatible with <a href="http://framework.zend.com/apidoc/1.7/Zend_Cache/Zend_Cache_Core.html" target="_blank">Zend_Cache_Core</a>. 

    If you omit `<frontend_type>`, <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Cache/Core.php" target="_blank">Magento\Framework\Cache\Core</a> is used.
*   `<frontend_option>`, `<frontend_option_value>` are the name and value of options the Magento framework passes as an associative array to the frontend cache upon its creation. 
*   `<backend_type>` is the low-level backend cache type. Specify the name of a class that is compatible with <a href="http://framework.zend.com/apidoc/1.7/Zend_Cache/Zend_Cache_Backend/Zend_Cache_Backend.html" target="_blank">Zend_Cache_Backend</a> and that implements <a href="http://framework.zend.com/apidoc/1.6/Zend_Cache/Zend_Cache_Backend/Zend_Cache_Backend_Interface.html" target="_blank">Zend_Cache_Backend_Interface</a>.
*   `<backend_option>`, `<backend_option_value>` are the name and value of options the Magento framework passes as an associative array to backend cache upon its creation.

#### Next step
<a href="{{page.baseurl}}config-guide/config/caching_low-level.html">Low-level cache options</a>
