---
layout: default
group: config-guide
subgroup: Caching
title: Associating cache frontends with cache types
menu_title: Associating cache frontends with cache types
menu_order: 2
menu_node: 
github_link: config-guide/config/caching_frontend-cache-types.md
---

#### Contents 

*	<a href="#cache-mage-over">Overview of Magento caching</a>
*	TBD
* TBD

<h2 id="cache-mage-over">Overview of Magento caching</h2>
Magento uses the following caching terminology:

* *Frontend*: Similar to an interface or gateway to cache storage, implemented by <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Cache/Frontend" target="_blank">Magento\Framework\Cache\Frontend</a>.
* *Cache types*: Can be one of the types provided with Magento or you can create your own. <a href="{{ site.gdeurl }}config-guide/config/caching-cache-type.html">More information</a>
* *Backend*: Specifies details about <a href="http://framework.zend.com/manual/1.12/en/zend.cache.backends.html" target="_blank">cache storage</a>, implemented by <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Cache/Backend" target="_blank">Magento\Framework\Cache\Backend</a>
* *Two-level backend*: Stores cache records in two other backends&mdash;a faster one and a slower one.

<h2 id="cache-mage-frontend">Step 1: Define a cache frontend</h2>
Magento provides a `default` frontend you can use for any cache type. This section discusses how to optionally define a cache frontend with a different name, which is preferable if you expect to customize your frontend.
 
To use your own frontend, you must specify it in both `app/etc/env.php` and in your module's `di.xml` as the following examples show:

`env.php` example:

{% highlight PHP %}
<? php
'cache' => [
    'frontend' => [
        "<unique frontend name>" = [
             <cache options>,
        ],
    ],
],
?>
{% endhighlight %}

`di.xml` example:

{% highlight XML %}
<type name="Magento\App\Cache\Frontend\Pool">
    <arguments>
        <argument name="frontendSettings" xsi:type="array">
            <item name="<unique frontend name>" xsi:type="string">
               <cache options>
            </item>
            ...
        </argument>
    </arguments>
</type>
{% endhighlight %}

where `<unique frontend name>` is a unique name to identify your frontend and `<cache options>` are options discussed in TBD.

<h2 id="cache-mage-types">Step 2: Associate cache types</h2>
Once cache front-end is defined in the configuration, its unique identifier can be used to assign it to any cache type. A single cache front-end can be assigned to multiple cache types. In such a way, declaration of cache configuration is reused.

When no configuration is specified, all cache types utilize the default cache front-end.

The following configuration tells the system which cache front-end to use for which cache type:jjjjjjjj
