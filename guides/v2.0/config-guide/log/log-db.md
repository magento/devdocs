---
layout: default
group: config-guide 
subgroup: 05_log
title: Example&mdash;logging database activity
menu_title: Example&mdash;logging database activity
menu_node: 
menu_order: 3
version: 2.0
github_link: config-guide/log/log-db.md
---


## Example&mdash;logging database activity
To log database activity, use [`Magento\Framework\DB\LoggerInterface`]({{ site.mage2100url }}lib/internal/Magento/Framework/DB/LoggerInterface.php){:target="_blank"}, which has two implementations:

*	Logs nothing (default): [`Magento\Framework\DB\Logger\Quiet`]({{ site.mage2100url }}lib/internal/Magento/Framework/DB/Logger/Quiet.php){:target="_blank"}
*	Logs to the Magento `var/log` directory: [`Magento\Framework\DB\Logger\File`]({{ site.mage2100url }}lib/internal/Magento/Framework/DB/Logger/File.php){:target="_blank"}

To change the preference to `\Magento\Framework\DB\Logger\File`, edit your `app/etc/di.xml`.

First, change the default preference

    <preference for="Magento\Framework\DB\LoggerInterface" type="Magento\Framework\DB\Logger\Quiet"/>

to

	<preference for="Magento\Framework\DB\LoggerInterface" type="Magento\Framework\DB\Logger\File"/>

After that, add the following block to configure file-based logging:

{% highlight php startinline=true %}
<type name="Magento\Framework\DB\Logger\File">
    <arguments>
        <argument name="logAllQueries" xsi:type="boolean">true</argument>
        <argument name="debugFile" xsi:type="string">log/db.log</argument>
    </arguments>
</type>
{% endhighlight %}
