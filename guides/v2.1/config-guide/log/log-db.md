---
group: configuration-guide
title: Example&mdash;logging database activity
functional_areas:
  - Configuration
  - System
  - Setup
---

## Example&mdash;logging database activity

To log database activity, use [`Magento\Framework\DB\LoggerInterface`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/DB/LoggerInterface.php), which has two implementations:

*	Logs nothing (default): [`Magento\Framework\DB\Logger\Quiet`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/DB/Logger/Quiet.php)
*	Logs to the Magento `var/log` directory: [`Magento\Framework\DB\Logger\File`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/DB/Logger/File.php)

To change the preference to `\Magento\Framework\DB\Logger\File`, edit your `app/etc/di.xml`.

First, change the default preference

    <preference for="Magento\Framework\DB\LoggerInterface" type="Magento\Framework\DB\Logger\Quiet"/>

to

	<preference for="Magento\Framework\DB\LoggerInterface" type="Magento\Framework\DB\Logger\File"/>

After that, add the following block to configure file-based logging:

```php?start_inline=1
<type name="Magento\Framework\DB\Logger\File">
    <arguments>
        <argument name="logAllQueries" xsi:type="boolean">true</argument>
        <argument name="debugFile" xsi:type="string">log/db.log</argument>
    </arguments>
</type>
```
