---
group: advanced-reporting
title: Data collection for advanced reporting
functional_areas:
    - Reports
---

A Magento instance collects data that the Magento Business Intelligence (MBI) service uses to build the advanced reports. All the data are stored in an encrypted archive file which is securely transferred to MBI. Data collection is declared in a configuration file `etc/analytics.xml`. It declares:

-  Which report files must be included into the archive file.
-  Which provider classes must collect data for each report file.
-  Which report data configuration must be applied to collected data.

You do not need to have an MBI account to use Advanced Reporting.

{:.bs-callout-warning}
This topic serves to provide better understanding of how data collection works. Any changes in configuration files will cause issues, because the MBI service does not expect any changes of configuration in the current version.

## Example

An example of the `etc/analytics.xml` file:

```xml
<?xml version="1.0"?>

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
```

The example configuration file declares the following:

-  The `modules.csv`, `store_config.csv`, and `stores.csv` report files must be included in the archive file prepared for the MBI service.
-  `modules.csv` must contain data provided by the `\Magento\Analytics\ReportXml\ReportProvider` class.
 Provided data must be configured according to the `modules` report declarations defined in the `etc/reports.xml` file.
-  `store_config.csv` must contain data provided by the `Magento\Analytics\Model\StoreConfigurationProvider` class.
-  `stores.csv` must contain data provided by the `\Magento\Analytics\ReportXml\ReportProvider` class.
 Provided data is configured according to the `store_config` report declarations defined in the `etc/reports.xml` file.
 Also, the report file must contain data provided by the `Magento\Analytics\Model\StoreConfigurationProvider` class.

## Extensibility

Configuration of data collection can be extended or changed in any module adding the corresponding `<module_name>/etc/analytics.xml` file with nodes that must be changed or added.

## Structure

The `etc/analytics.xsd` schema declares the structure of the `etc/analytics.xml` file.

{% include_relative img/analytics_xsd.svg %}

### `<config>`

Configuration of an XML.

|Attribute|Description|Constant value|Use|
|---|---|---|---|
|`xmlns:xsi`|Default namespace declaration|`"http://www.w3.org/2001/XMLSchema-instance"`|Required|
|`xsi:noNamespaceSchemaLocation`|An XML Schema document that does not have a target namespace|`"urn:magento:module:Magento_Analytics:etc/analytics.xsd"`|Required|

### `<file>`

A report file (`.csv` by default) with collected data to be added to the archive file.
The `\Magento\Analytics\Model\ReportWriter` class is responsible for a decision about a data file extension (`.csv`, `.json`, etc.).

|Attribute|Description|Example value|Use|
|---|---|---|---|
|`name`|A filename with no extension|`"modules"`|Required|
|`prefix`|Reserved for future use.|--|--|

```xml
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
```

### `<providers>`

The node must contain a `<reportProvider>` node, or a `<customProvider>` node, or both.

```xml
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
```

### `<reportProvider>`

A class that provides data for a report file.
It can contain parameters.

|Attribute|Description|Example value|Use|
|---|---|---|---|
|`name`|A provider name|`modules`|Required|
|`class`|Full name of a class that provides data|`"Magento\Analytics\ReportXml\ReportProvider"`|Required|

Currently there is only one report provider available that is `Magento\Analytics\ReportXml\ReportProvider`.

```xml
...
    <providers>
        <!-- A report provider `stores` uses the `Magento\Analytics\ReportXml\ReportProvider` class to collect report data -->
        <reportProvider name="stores" class="Magento\Analytics\ReportXml\ReportProvider">
            ...
        </reportProvider>
    </providers>
...
```

### `<parameters>`

Parameters used by `<reportProvider>`.
Currently there is only one parameter is available. It is declared in `<name>`.

```xml
...
    <reportProvider name="stores" class="Magento\Analytics\ReportXml\ReportProvider">
        <!-- The report provider `stores` uses a configuration of a report with name `store_report` declared in `etc/reports.xml` -->
        <parameters>
            <name>store_report</name>
        </parameters>
    </reportProvider>
...
```

If `reportProvider class="Magento\Analytics\ReportXml\ReportProvider"`, then `<name>` references to the `<report name />` in `reports.xml`.

### `<customProvider>`

A class that provides data for a report file.
It cannot contain any parameters.

|Attribute|Description|Example value|Use|
|---|---|---|---|
|`name`|A provider name|"store_config"|Required|
|`class`|Full name of a class that provides data|`"Magento\Analytics\Model\StoreConfigurationProvider"`|Required|

```xml
...
    <providers>
        <!-- A report provider `store_config` uses the `Magento\Analytics\Model\StoreConfigurationProvider` class to collect report data -->
        <customProvider name="store_config" class="Magento\Analytics\Model\StoreConfigurationProvider"/>
    </providers>
...
```

{:.ref-header}
Related topics

 [Modules providing advanced reporting][modules]

<!-- LINK DEFINITIONS -->

[modules]: modules.html

<!-- ABBREVIATIONS -->
*[MBI]: Magento Business Analytics
