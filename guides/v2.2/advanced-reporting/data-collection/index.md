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

A Magento instance collects data that the Magento Business Intelligence (MBI) service uses to build the advanced reports. You can configure data collection using a configuration file `/etc/analytics.xml`.

The file describes the information being collected and how it is distributed among the data sets (files).

## Setting



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
</config>
{% endhighlight %}

The example declares the following:

*   The `modules.csv` data file must be included into the data archive prepared for the MBI service
*   The file must be filled with data provided by the `\Magento\Analytics\ReportXml\ReportProvider` class
*   The class must provide data according to the definition of the `modules` report (see the `/etc/reports.xml` file)

## Extensibility

Configuration of data collection may be extended or changed in any module adding the corresponding `<module_name>/etc/analytics.xml` file.

## Structure

In accordance with the `app/code/Magento/Analytics/etc/analytics.xsd` schema

![analytics.xsd schema](./images/analytics_xsd.png)

the `/etc/analytics.xml` file may have the following nodes.

### `<config>`

Configuration of an XML.

|Attribute|Description|Constant value|Use|
|---|---|---|---|
|`xmlns:xsi`|Default namespace declaration.|`"http://www.w3.org/2001/XMLSchema-instance"`|Required|
|`xsi:noNamespaceSchemaLocation`|An XML Schema document that does not have a target namespace.|`"urn:magento:module:Magento_Analytics:etc/reports.xsd"`|Required|

### `<file>`

A file with collected data that must be transferred to the MBI service.

|Attribute|Description|Example value|Use|
|---|---|---|---|
|`name`|A filename with no extension.|`"modules"`|Required|
|`prefix`|Prefix to the file name in `name`.|`"test"`|Optional|

<div class="bs-callout bs-callout-info" id="info" markdown = "1">
The `\Magento\Analytics\Model\ReportWriter` class implements selection of a data file extension: `.csv`, `.json`, etc.
</div>

### `<providers>`

The node must contain at least a `<reportProvider>` node or a `<customProvider>` node.

### `<reportProvider>`

A class that provides data for a file defined in `<file>` with a parameter defined in `<parameters>`.

|Attribute|Description|Example value|Use|
|---|---|---|---|
|`name`|A provider name. This name can be used for merging.|`modules`|Required|
|`class`|Full name of a class that provides data.|`"Magento\Analytics\ReportXml\ReportProvider"`|Required|

### `<parameters>`

Parameters used by `<reportProvider>`. Each parameter is declared in `<name>` and is purposed for use by `<reportProvider>`.

If `reportProvider class="Magento\Analytics\ReportXml\ReportProvider"`, then `<name>` references to the `<report name />` in `reports.xml`.

### `<customProvider>`

A class that provides data for a file defined in `<file>`.

|Attribute|Description|Example value|Use|
|---|---|---|---|
|`name`|A provider name. This name can be used for merging.|"store_config"|Required|
|`class`|Full name of a class that provides data.|`"Magento\Analytics\Model\StoreConfigurationProvider"`|Required|


<!-- LINK DEFINITIONS -->


<!-- ABBREVIATIONS -->
*[MBI]: Magento Business Analytics