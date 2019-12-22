---
group: configuration-guide
title: Associate cache frontends with cache types
redirect_from:
  - /guides/v2.3/config-guide/config/caching_frontend-cache-types.html
functional_areas:
  - Configuration
  - System
  - Setup
---

## Step 1: Define a cache frontend {#cache-mage-frontend}

The Magento application has a `default` cache [frontend](https://glossary.magento.com/frontend) you can use for any [cache type]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-cache.html#config-cli-subcommands-cache-clean-over). This section discusses how to optionally define a [cache frontend](https://glossary.magento.com/cache-frontend) with a different name, which is preferable if you expect to customize your frontend.

{:.bs-callout-info}
To use the `default` cache type, you don't need to modify `env.php` at all; you modify Magento's global `di.xml`. See the topics referenced in [Low-level cache options]({{ page.baseurl }}/config-guide/cache/cache-options.html).

You must specify a custom cache frontend either `app/etc/env.php` or Magento's global `app/etc/di.xml`.

The following example shows how to define it in `env.php` (which overrides `di.xml`):

```php?start_inline=1
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
```

where `<unique frontend id>` is a unique name to identify your frontend and `<cache options>` are options discussed in the topics specific to each type of caching (database, Redis, and so on).

## Step 2: Configure the cache {#cache-mage-adv}

You can specify frontend and [backend](https://glossary.magento.com/backend) cache configuration options in `env.php` or `di.xml`. This task is optional.

`env.php` example:

```php?start_inline=1
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
```

where

*  `<frontend_type>` is the low-level frontend [cache type](https://glossary.magento.com/cache-type). Specify the name of a class that is compatible with [Zend\Cache\Core](http://framework.zend.com/apidoc/1.7/Zend_Cache/Zend_Cache_Core.html){:target="_blank"}.

    If you omit `<frontend_type>`, [Magento\Framework\Cache\Core]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Cache/Core.php){:target="_blank"} is used.
*  `<frontend_option>`, `<frontend_option_value>` are the name and value of options the Magento framework passes as an associative array to the frontend cache upon its creation.
*  `<backend_type>` is the low-level backend cache type. Specify the name of a class that is compatible with [Zend_Cache_Backend](http://framework.zend.com/apidoc/1.7/Zend_Cache/Zend_Cache_Backend/Zend_Cache_Backend.html){:target="_blank"} and that implements [Zend_Cache_Backend_Interface](http://framework.zend.com/apidoc/1.6/Zend_Cache/Zend_Cache_Backend/Zend_Cache_Backend_Interface.html){:target="_blank"}.
*  `<backend_option>`, `<backend_option_value>` are the name and value of options the Magento framework passes as an associative array to backend cache upon its creation.

{:.ref-header}
Related topics

[Low-level cache options]({{ page.baseurl }}/config-guide/cache/cache-options.html)
