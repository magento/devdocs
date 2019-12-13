---
group: configuration-guide
title: Example&mdash;logging database activity
functional_areas:
  - Configuration
  - System
  - Setup
---

The following example shows how to log database activity using the [`Magento\Framework\DB\LoggerInterface`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/DB/LoggerInterface.php), which has two implementations:

*  Logs nothing (default): [`Magento\Framework\DB\Logger\Quiet`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/DB/Logger/Quiet.php)
*  Logs to the Magento `var/log` directory: [`Magento\Framework\DB\Logger\File`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/DB/Logger/File.php)

{:.bs-callout-info}
You can also use the Magento CLI to [enable and disable database logging]({{page.baseurl}}/config-guide/cli/logging.html#database-logging).

To change the default configuration of `\Magento\Framework\DB\Logger\LoggerProxy`, edit your `app/etc/di.xml`.

First, change the default values of `loggerAlias` and `logCallStack` arguments to:

```xml
<type name="Magento\Framework\DB\Logger\LoggerProxy">
    <arguments>
        <argument name="loggerAlias" xsi:type="const">Magento\Framework\DB\Logger\LoggerProxy::LOGGER_ALIAS_FILE</argument>
        <argument name="logAllQueries" xsi:type="init_parameter">Magento\Framework\Config\ConfigOptionsListConstants::CONFIG_PATH_DB_LOGGER_LOG_EVERYTHING</argument>
        <argument name="logQueryTime" xsi:type="init_parameter">Magento\Framework\Config\ConfigOptionsListConstants::CONFIG_PATH_DB_LOGGER_QUERY_TIME_THRESHOLD</argument>
        <argument name="logCallStack" xsi:type="boolean">false</argument>
    </arguments>
</type>
```

After that, provide the file path for `Magento\Framework\DB\Logger\File`:

```xml
<type name="Magento\Framework\DB\Logger\File">
    <arguments>
        <argument name="debugFile" xsi:type="string">log/db.log</argument>
    </arguments>
</type>
```

Finally, compile the code with:

```bash
bin/magento setup:di:compile
```

and clean the cache with:

```bash
bin/magento cache:clean
```
