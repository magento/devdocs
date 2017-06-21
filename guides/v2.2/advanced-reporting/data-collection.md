---
layout: default
group: analytics
subgroup: Advanced Reporting
title: Data collection and transition to MBI
menu_title: Data collection and transition to MBI
menu_order: 8
menu_node:
version: 2.2
github_link: advanced-reporting/data-collection.md
---

A Magento instance collects data that the MBI service uses for building advanced reports. To configure data collection, use the new configuration file: `/etc/analytics.xml`.

The file describes the information being collected and how it is distributed among the data sets (files).

**An example of a '/etc/analytics.xml' file**

```
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
```

The example describes the following:

*   The `modules.csv` data file must be included into the data archive prepared for the MBI service

*   The file must be filled with data provided by the `\Magento\Analytics\ReportXml\ReportProvider` class

*   The class must provide data according to the definition of the `modules` report (see the `/etc/reports.xml` file)

Note: the '\Magento\Analytics\Model\ReportWriter' class is responsible for choosing the data file extension (.csv, .json, and others).

Configuration of data collection may be extended or changed in any module by adding the corresponding `/etc/analytics.xml` file.

#### The Structure

In accordance with the `app/code/Magento/Analytics/etc/analytics.xsd` schema, the `/etc/analytics.xml` file may have the following structure:

```
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Analytics:etc/analytics.xsd">
    <file name="file_name_1" prefix="file_name_1_prefix">
        <providers>
            <reportProvider name="provider_name_1" class="Path\To\TheFirst\Provider">
                <parameters>
                    <name>report_name_1</name>
                </parameters>
            </reportProvider>
            <customProvider name="provider_name_2" class="Path\To\TheFirst\Custom\Provider">
            ...
        </providers>
    </file>
    ...
</config>
```

**Note:**

*   The _&lt;prefix&gt;_ attribute of the _&lt;file&gt;_ node is optional

*   The _&lt;providers&gt;_ node must contain at least one _&lt;reportProvider&gt;_ node or one _&lt;customProvider&gt;_ node

### Notify MBI that data collection is complete

The cron job that collects data makes a call to notify MBI when data collection has been complete.

#### Request URL declaration

Request URL is declared in the `config.xml` in the Analytics module. Configuration value is stored in the following config storage path (XML path or DB field in the `core_config_data` table):

```
default/analytics/url/notify_data_changed
```

#### Request format

**Method:** POST

**Headers:** Content-Type: application/json

**Body:** {"access-token": "mbi-user-secret-token", "url": "secure-url-to-magento-store"}

#### Response

The MBI service does not provide any response that can be used in Magento.