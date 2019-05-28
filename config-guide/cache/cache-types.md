---
group: configuration-guide
subgroup: 08_Configure caching
title: Associate cache frontends with cache types
menu_title: Associate cache frontends with cache types
menu_order: 1
menu_node:
redirect_from:
  - /guides/v2.0/config-guide/config/caching_frontend-cache-types.html
functional_areas:
  - Configuration
  - System
  - Setup
---

## Step 1: Define a cache frontend   {#cache-mage-frontend}

The Magento application has a `default` cache {% glossarytooltip b00459e5-a793-44dd-98d5-852ab33fc344 %}frontend{% endglossarytooltip %} you can use for any <a href="{{ page.baseurl }}/config-guide/cli/config-cli-subcommands-cache.html#config-cli-subcommands-cache-clean-over">cache type</a>. This section discusses how to optionally define a {% glossarytooltip ca5ad9ac-9d39-45b5-80b1-e90d192f20d0 %}cache frontend{% endglossarytooltip %} with a different name, which is preferable if you expect to customize your frontend.

{: .bs-callout .bs-callout-info }
To use the `default` cache type, you don't need to modify `env.php` at all; you modify Magento's global `di.xml`. See the topics referenced in [Low-level cache options]({{ page.baseurl }}/config-guide/cache/cache-options.html).

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

## Step 2: Configure the cache   {#cache-mage-adv}

You can specify frontend and {% glossarytooltip 74d6d228-34bd-4475-a6f8-0c0f4d6d0d61 %}backend{% endglossarytooltip %} cache configuration options in `env.php` or `di.xml`. This task is optional.

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

*   `<frontend_type>` is the low-level frontend {% glossarytooltip 65f9a5a1-79ee-4f27-aac7-29abe24db40d %}cache type{% endglossarytooltip %}. Specify the name of a class that is compatible with <a href="http://framework.zend.com/apidoc/1.7/Zend_Cache/Zend_Cache_Core.html" target="_blank">Zend_Cache_Core</a>.

    If you omit `<frontend_type>`, <a href="{{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Cache/Core.php" target="_blank">Magento\Framework\Cache\Core</a> is used.
*   `<frontend_option>`, `<frontend_option_value>` are the name and value of options the Magento framework passes as an associative array to the frontend cache upon its creation.
*   `<backend_type>` is the low-level backend cache type. Specify the name of a class that is compatible with <a href="http://framework.zend.com/apidoc/1.7/Zend_Cache/Zend_Cache_Backend/Zend_Cache_Backend.html" target="_blank">Zend_Cache_Backend</a> and that implements <a href="http://framework.zend.com/apidoc/1.6/Zend_Cache/Zend_Cache_Backend/Zend_Cache_Backend_Interface.html" target="_blank">Zend_Cache_Backend_Interface</a>.
*   `<backend_option>`, `<backend_option_value>` are the name and value of options the Magento framework passes as an associative array to backend cache upon its creation.

#### Next step

<a href="{{ page.baseurl }}/config-guide/cache/cache-options.html">Low-level cache options</a>
