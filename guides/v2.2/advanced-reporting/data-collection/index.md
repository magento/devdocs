---
layout: default
group: analytics
subgroup: Advanced Reporting
title: Data collection for advanced reporting
menu_title: Data collection
menu_order: 3
menu_node:
version: 2.2
github_link: advanced-reporting/data-collection/index.md
---

A Magento instance collects data that the Magento Business Intelligence (MBI) service uses to build the advanced reports. You can configure data collection using a configuration file `/etc/analytics.xml`. It declares:

- which report files must be included into archive file
- which provider classes must collect data for each report file
- which data configuration must be applied to collected data

<div class="bs-callout bs-callout-caution" markdown="1" >
The MBI service doesn't expect any changes of configuration in the current version. 
</div>

## Example

An example of the `/etc/analytics.xml` file:

{% highlight xml %}
<?xml version="1.0"?>
<!--
/**
 * Copyright © 2013-2017 Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */
-->
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Analytics:etc/analytics.xsd">
    <file name="modules">
        <providers>
            <reportProvider name="modules" class="Magento\Analytics\ReportXml\ReportProvider">
                <parameters>
                    <name>modules</name>
                </parameters>
            </reportProvider>
        </providers>
    </file>
    <file name="store_config">
        <providers>
            <customProvider name="store_config" class="Magento\Analytics\Model\StoreConfigurationProvider"/>
        </providers>
    </file>
    <file name="stores">
        <providers>
            <reportProvider name="stores" class="Magento\Analytics\ReportXml\ReportProvider">
                <parameters>
                    <name>stores</name>
                </parameters>
            </reportProvider>
            <customProvider name="store_config" class="Magento\Analytics\Model\StoreConfigurationProvider"/>
        </providers>
    </file>
</config>
{% endhighlight %}

The example declares the following:

*   The `modules.csv`, `store_config.csv`, `stores.csv` report files must be included into the archive file prepared for the MBI service.
*   `modules.csv` must contain data provided by the `\Magento\Analytics\ReportXml\ReportProvider` class. Provided data must be configured according to the `modules` report declarations defined in the `/etc/reports.xml` file.
*   `store_config.csv` must contain data provided by the `Magento\Analytics\Model\StoreConfigurationProvider` class.
*   `stores.csv` must contain data provided by the `\Magento\Analytics\ReportXml\ReportProvider` class. Provided data are configured according to the `store_config` report declarations defined in the `/etc/reports.xml` file. Also, the report file must contain data provided by the `Magento\Analytics\Model\StoreConfigurationProvider` class.

## Extensibility

Configuration of data collection can be extended or changed in any module adding the corresponding `<module_name>/etc/analytics.xml` file.

## Structure

In accordance with the `app/code/Magento/Analytics/etc/analytics.xsd` schema

![analytics.xsd schema](./images/analytics_xsd.png)

the `/etc/analytics.xml` file can contain the following nodes.

### `<config>`

Configuration of an XML.

|Attribute|Description|Constant value|Use|
|---|---|---|---|
|`xmlns:xsi`|Default namespace declaration.|`"http://www.w3.org/2001/XMLSchema-instance"`|Required|
|`xsi:noNamespaceSchemaLocation`|An XML Schema document that does not have a target namespace.|`"urn:magento:module:Magento_Analytics:etc/reports.xsd"`|Required|

### `<file>`

A report file (`.csv` by default) with collected data that must be transferred to the MBI service.

|Attribute|Description|Example value|Use|
|---|---|---|---|
|`name`|A filename with no extension.|`"modules"`|Required|
|`prefix`|The attribute is not available in this version.{: style="color: yellow"}|--|--|

{% highlight xml %}
<config ...>

    <!-- Adds a report file `module.csv` to the archive file -->
    <file name="modules"> 
        ...
    </file>
    
    <!-- Adds a report file `stores.csv` to the archive file -->
    <file name="stores">
        ...
    </file>
    
</config>
{% endhighlight %}

### `<providers>`

The node must contain a `<reportProvider>` node, or a `<customProvider>` node, or both.

{% highlight xml %}
...
    <file ...>    
        <!-- A report provider adds data to the report file  -->
        <providers>
            <reportProvider ...>   
        </providers>
    </file>
    
    <file ...>
        <!-- A custom provider adds data to the report file  -->
        <providers>
            <customProvider ...>        
        </providers>
    </file>
    
    <file ...>
        <providers>
            <!-- A report provider and a custom provider add data to the report file  -->
            <reportProvider ...>
            <customProvider ...>        
        </providers>
    </file>
...
{% endhighlight %}

### `<reportProvider>`

A class that provides data for a report file.

|Attribute|Description|Example value|Use|
|---|---|---|---|
|`name`|A provider name. This name can be used for merging.|`modules`|Required|
|`class`|Full name of a class that provides data. There is only one report provider in this version that is `"Magento\Analytics\ReportXml\ReportProvider"`|`"Magento\Analytics\ReportXml\ReportProvider"`|Required|

{% highlight xml %}
...
    <providers>
        <!-- A report provider `stores` uses the `Magento\Analytics\ReportXml\ReportProvider` class to collect report data -->
        <reportProvider name="stores" class="Magento\Analytics\ReportXml\ReportProvider">
            ...
        </reportProvider>
    </providers>
...
{% endhighlight %}

### `<parameters>`

Parameters used by `<reportProvider>`. Each parameter is declared in `<name>` and is purposed for use by `<reportProvider>`.

If `reportProvider class="Magento\Analytics\ReportXml\ReportProvider"`, then `<name>` references to the `<report name />` in `reports.xml`.

{% highlight xml %}
...
    <reportProvider name="stores" class="Magento\Analytics\ReportXml\ReportProvider">
        <!-- The report provider `stores` uses a configuration of a report with name `store_report` declared in `etc/reports.xml` -->
        <parameters>
            <name>store_report</name>
        </parameters>
    </reportProvider>            
...
{% endhighlight %}

### `<customProvider>`

A class that provides data for a report file defined in `<file>`. It cannot contain any

|Attribute|Description|Example value|Use|
|---|---|---|---|
|`name`|A provider name. This name can be used for merging.|"store_config"|Required|
|`class`|Full name of a class that provides data.|`"Magento\Analytics\Model\StoreConfigurationProvider"`|Required|

{% highlight xml %}
...
    <providers>
        <!-- A report provider `store_config` uses the `Magento\Analytics\Model\StoreConfigurationProvider` class to collect report data -->
        <customProvider name="store_config" class="Magento\Analytics\Model\StoreConfigurationProvider"/>
    </providers>
...
{% endhighlight %}


<!-- LINK DEFINITIONS -->


<!-- ABBREVIATIONS -->
*[MBI]: Magento Business Analytics