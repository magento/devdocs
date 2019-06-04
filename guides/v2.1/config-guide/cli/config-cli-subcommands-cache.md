---
group: configuration-guide
title: Manage the cache
functional_areas:
  - Configuration
  - System
  - Setup
---

{% include config/cli-intro.md %}

## Overview of cache types {#config-cli-subcommands-cache-clean-over}

Magento 2 has the following [cache](https://glossary.magento.com/cache) types:

|Cache type "friendly" name|Cache type code name|Description|
|--- |--- |--- |
|Configuration|config|Magento collects configuration from all modules, merges it, and saves the merged result to the cache. This cache also contains store-specific settings stored in the file system and database.<br><br>Clean or flush this cache type after modifying configuration files or settings within the admin panel.|
|Layout|layout|Compiled page layouts (that is, the layout components from all components).<br><br>Clean or flush this cache type after modifying layout files.|
|Block HTML output|block_html|HTML page fragments per block.<br><br>Clean or flush this cache type after modifying the view layer.|
|Collections data|collections|Results of database queries.<br><br>If necessary, Magento cleans up this cache automatically, but third-party developers can put any data in any segment of the cache.<br><br>Clean or flush this cache type if your custom module uses logic that results in cache entries that Magento cannot clean.|
|DDL|db_ddl|Database schema.<br><br>If necessary, Magento cleans up this cache automatically, but third-party developers can put any data in any segment of the cache.<br><br>Clean or flush this cache type after you make custom changes to the database schema. (In other words, updates that Magento does not make itself.)<br><br>One way to update the database schema automatically is using the [`magento setup:db-schema:upgrade command`]({{page.baseurl}}/install-gde/install/cli/install-cli-subcommands-db.html).|
|Entity attribute value (EAV)|eav|Metadata related to EAV attributes (for example, store labels, links to related PHP code, attribute rendering, search settings, and so on).<br><br>You should not typically need to clean or flush this cache type.|
|Page cache|full_page|Generated HTML pages. <br><br>If necessary, Magento cleans up this cache automatically, but third-party developers can put any data in any segment of the cache.<br><br>Clean or flush this cache type after modifying code level that affects HTML output. It’s recommended to keep this cache enabled because caching HTML improves performance significantly.|
|Reflection|reflection|Removes a dependency between the Webapi module and the Customer module.|
|Translations|translate|Merged translations from all modules.|
|Integration configuration|config_integration|Compiled integrations.<br><br>Clean or flush this cache after changing or adding integrations.|
|Integration API configuration|config_integration_api|Compiled integration APIs.|
|Web services configuration|config_webservice|Web API structure.|


## View the cache status

To view the status of the cache, enter

```bash
bin/magento cache:status
```

A sample follows:

```terminal
                config: 1
                layout: 1
            block_html: 1
           collections: 1
                db_ddl: 1
                   eav: 1
             full_page: 1
             translate: 1
    config_integration: 1
config_integration_api: 1
     config_webservice: 1
```

## Enable or disable cache types {#config-cli-subcommands-cache-en}

This command enables you to enable or disable all cache types or only the ones you specify. Disabling cache types is useful during development because you see the results of your changes without having to flush the cache; however, disabling cache types has an adverse effect on performance.

Command options:

```bash
bin/magento cache:enable [type] ... [type]
```

```bash
bin/magento cache:disable [type] ... [type]
```

Where omitting `[type]` enables or disables all cache types at the same time. The `type` option is a space-separated list of cache types.

To list cache types and their status:

```bash
bin/magento cache:status
```

For example, to disable the full page cache and the DDL cache:

```bash
bin/magento cache:disable db_ddl full_page
```

Sample result:

```terminal
	Changed cache status:
                        db_ddl: 1 -> 0
                     full_page: 1 -> 0
```

{:.bs-callout .bs-callout-info}
Enabling a [cache type](https://glossary.magento.com/cache-type) automatically clears that cache type.

## Clean and flush cache types {#config-cli-subcommands-cache-clean}

To purge out-of-date items from the cache, you can *clean* or *flush* cache types:

-   Cleaning a cache type deletes all items from enabled Magento cache types only. In other words, this option does not affect other processes or applications because it cleans only the cache that Magento uses.

    Disabled cache types are not cleaned.

	{:.bs-callout .bs-callout-tip}
	Always clean the cache after upgrading versions of {{site.data.var.ce}} or {{site.data.var.ee}}, upgrading from {{site.data.var.ce}} to {{site.data.var.ee}}, or installing {{site.data.var.b2b}} or any module.

-   Flushing a cache type purges the cache storage, which might affect other processes applications that are using the same storage.

Flush cache types if you've already tried cleaning the cache and you're still having issues that you cannot isolate.

Command usage:

```bash
bin/magento cache:clean [type] ... [type]
```

```bash
bin/magento cache:flush [type] ... [type]
```

Where `[type]` is a space-separated list of cache types. Omitting `[type]` cleans or flushes all cache types at the same time. For example, to flush all cache types:

```bash
bin/magento cache:flush
```

Sample result:

```terminal
	Flushed cache types:
	config
	layout
	block_html
	collections
	db_ddl
	eav
	full_page
	translate
	config_integration
	config_integration_api
	config_webservice
```

{:.bs-callout .bs-callout-info}
You can also clean and flush cache types in the [Magento Admin](https://glossary.magento.com/magento-admin). Go to **System** > **Tools** > **Cache Management**. **Flush Cache Storage** is equivalent to `bin/magento cache:flush`. **Flush Magento Cache** is equivalent to `bin/magento cache:clean`.
