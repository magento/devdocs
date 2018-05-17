---
group: config-guide
title: Example&mdash;logging database activity
version: 2.2
github_link: config-guide/log/log-db.md
functional_areas:
  - Configuration
  - System
  - Setup
---

To log database activity, use [`Magento\Framework\DB\LoggerInterface`]({{ site.mage2200url }}lib/internal/Magento/Framework/DB/LoggerInterface.php){:target="_blank"}, which has two implementations:

*   Logs nothing (default): [`Magento\Framework\DB\Logger\Quiet`]({{ site.mage2200url }}lib/internal/Magento/Framework/DB/Logger/Quiet.php){:target="_blank"}
*   Logs to the Magento `var/log` directory: [`Magento\Framework\DB\Logger\File`]({{ site.mage2200url }}lib/internal/Magento/Framework/DB/Logger/File.php){:target="_blank"}


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
