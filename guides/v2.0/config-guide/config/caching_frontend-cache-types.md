---
layout: default
group: config-guide
subgroup: Caching
title: Associate cache frontends with cache types
menu_title: Associate cache frontends with cache types
menu_order: 2
menu_node: 
github_link: config-guide/config/caching_frontend-cache-types.md
---

#### Contents 

*	<a href="#cache-mage-over">Overview of Magento caching</a>
*	<a href="#cache-mage-frontend">Step 1: Define a cache frontend</a>
*   <a href="#cache-mage-types">Step 2: Associate cache types with your frontend</a>
*   <a href="#cache-mage-adv">Step 3: Configure the cache</a>

<h2 id="cache-mage-over">Overview of Magento caching</h2>
Magento uses the following caching terminology:

* *Frontend*: Similar to an interface or gateway to cache storage, implemented by <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Cache/Frontend" target="_blank">Magento\Framework\Cache\Frontend</a>.
* *Cache types*: Can be one of the types provided with Magento or you can <a href="{{ site.gdeurl }}config-guide/config/caching-cache-type.html">create your own</a>.
* *Backend*: Specifies details about <a href="http://framework.zend.com/manual/1.12/en/zend.cache.backends.html" target="_blank">cache storage</a>, implemented by <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Cache/Backend" target="_blank">Magento\Framework\Cache\Backend</a>
* *Two-level backend*: Stores cache records in two backends&mdash;a faster one and a slower one.

<h2 id="cache-mage-frontend">Step 1: Define a cache frontend</h2>
The Magento application has a `default` frontend you can use for any <a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-cache.html#config-cli-subcommands-cache-clean-over">cache type</a>. This section discusses how to optionally define a cache frontend with a different name, which is preferable if you expect to customize your frontend.

<div class="bs-callout bs-callout-info" id="info">
  <p>To use the <code>default</code> cache type, you don't need to modify <code>env.php</code> at all. For details about modifying <code>di.xml</code> for other cache types, see the topics referenced in <a href="{{ site.gdeurl }}config-guide/config/caching_low-level.html">Low-level cache options</a>. </p>
</div>
 
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

where `<unique frontend name>` is a unique name to identify your frontend and `<cache options>` are options discussed in the topics specific to each type of caching (database, Redis, Varnish, and so on).

<h2 id="cache-mage-types">Step 2: Associate cache types with your frontend</h2>
You can now associate your frontend with cache types. You can associate one cache frontend with multiple <a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-cache.html#config-cli-subcommands-cache-clean-over">cache types</a>. 

Update `env.php` and `di.xml` as shown in the following examples.

`env.php` example:

{% highlight PHP %}
<? php
'cache' => [
    'type' => [
         <cache type> => [
             'frontend' => "<unique frontend name>"
        ],
    ],
],
?>
{% endhighlight %}

`di.xml` example:

{% highlight XML %}
<type name="Magento\App\Cache\Type\FrontendPool">
    <arguments>
        <argument name="typeFrontendMap" xsi:type="array">
            <item name="<cache type>" xsi:type="string"><unique frontend name></item>
            ...
        </argument>
    </arguments>
</type>
{% endhighlight %}


<h2 id="cache-mage-adv">Step 3: Configure the cache</h2>
You can specify frontend and backend cache configuration options in `env.php` and `di.xml` in the form of an associative array. This task is optional.

`env.php` example:

{% highlight PHP %}
<? php
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
?>
{% endhighlight %}

`di.xml` example:

{% highlight XML %}
<item name="frontend" xsi:type="string"><frontend_type></item>
<item name="frontend_options" xsi:type="array">
    <item name="<frontend_option>" xsi:type="string"><frontend_option_value></item>
    ...
</item>
<item name="backend" xsi:type="string"><backend_type></item>
<item name="backend_options" xsi:type="array">
    <item name="<backend_option>" xsi:type="string"><backend_option_value></item>
    ...
</item>
{% endhighlight %}

where

*   `<frontend_type>` is the low-level frontend cache type. Specify the name of a class that is compatible with <a href="http://framework.zend.com/apidoc/1.7/Zend_Cache/Zend_Cache_Core.html" target="_blank">Zend_Cache_Core</a>. 

    If you omit `<frontend_type>`, <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Cache/Core.php" target="_blank">Magento\Framework\Cache\Core</a> is used.
*   `<frontend_option>`, `<frontend_option_value>` are the name and value of options the Magento framework passes as an associative array to the frontend cache upon its creation. 
*   `<backend_type>` is the low-level backend cache type. Specify the name of a class that is compatible with <a href="http://framework.zend.com/apidoc/1.7/Zend_Cache/Zend_Cache_Backend/Zend_Cache_Backend.html" target="_blank">Zend_Cache_Backend</a> and that implements <a href="http://framework.zend.com/apidoc/1.6/Zend_Cache/Zend_Cache_Backend/Zend_Cache_Backend_Interface.html" target="_blank">Zend_Cache_Backend_Interface</a>.
*   `<backend_option>`, `<backend_option_value>` are the name and value of options the Magento framework passes as an associative array to backend cache upon its creation.

#### Next step
<a href="{{ site.gdeurl }}config-guide/config/caching_low-level.html">Low-level cache options</a>