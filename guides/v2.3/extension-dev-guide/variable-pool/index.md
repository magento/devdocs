---
group: php-developer-guide
title: Variable Pool
---

The variable pool contains pre-defined values you can use inside CMS content.
These values are defined in [`di.xml`] files or created through the Admin interface.

## Configuration variables

Configuration variables are values that are set in the Admin area under the **Stores > Settings > Configuration** section.

The default list of variable paths available to the Variable Insertion Dialog is defined in the `di.xml` file in the [Variable module].
This list can be extended by adding more entries to the `configPaths` argument for the `Magento\Variable\Model\Source\Variables` class in your module's `di.xml` file.

**Example:** di.xml file for the Variable module

```xml
<?xml version="1.0"?>
<!--
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */
-->
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:ObjectManager/etc/config.xsd">
    <type name="Magento\Variable\Model\Source\Variables">
        <arguments>
            <argument name="configPaths" xsi:type="array">
                <item name="web" xsi:type="array">
                    <item name="web/unsecure/base_url" xsi:type="string">1</item>
                    <item name="web/secure/base_url" xsi:type="string">1</item>
                </item>
                <item name="trans_email/ident_general" xsi:type="array">
                    <item name="trans_email/ident_general/name" xsi:type="string">1</item>
                    <item name="trans_email/ident_general/email" xsi:type="string">1</item>
                </item>
                <item name="trans_email/ident_sales" xsi:type="array">
                    <item name="trans_email/ident_sales/name" xsi:type="string">1</item>
                    <item name="trans_email/ident_sales/email" xsi:type="string">1</item>
                </item>
                <item name="trans_email/ident_custom1" xsi:type="array">
                    <item name="trans_email/ident_custom1/name" xsi:type="string">1</item>
                    <item name="trans_email/ident_custom1/email" xsi:type="string">1</item>
                </item>
                <item name="trans_email/ident_custom2" xsi:type="array">
                    <item name="trans_email/ident_custom2/name" xsi:type="string">1</item>
                    <item name="trans_email/ident_custom2/email" xsi:type="string">1</item>
                </item>
                <item name="general/store_information" xsi:type="array">
                    <item name="general/store_information/name" xsi:type="string">1</item>
                    <item name="general/store_information/phone" xsi:type="string">1</item>
                    <item name="general/store_information/hours" xsi:type="string">1</item>
                    <item name="general/store_information/country_id" xsi:type="string">1</item>
                    <item name="general/store_information/region_id" xsi:type="string">1</item>
                    <item name="general/store_information/postcode" xsi:type="string">1</item>
                    <item name="general/store_information/city" xsi:type="string">1</item>
                    <item name="general/store_information/street_line1" xsi:type="string">1</item>
                    <item name="general/store_information/street_line2" xsi:type="string">1</item>
                    <item name="general/store_information/merchant_vat_number" xsi:type="string">1</item>
                </item>
            </argument>
            <argument name="configStructure" xsi:type="object">Magento\Config\Model\Config\Structure\Proxy</argument>
        </arguments>
    </type>
</config>
```

## Custom variables

Custom variables are values created in the Admin area under **System > Other Settings > Custom Variables**.
These variables have a store view scope level and have all the features available to configuration values.

Custom Variable entities can also be created in your module's `DataInstall` or `DataUpgrade` classes.
See [Module Lifecycle] for more information.

[Variable module]: https://github.com/magento/magento2/tree/{{page.guide_version}}/app/code/Magento/Variable/etc
[Module Lifecycle]: {{page.baseurl }}/extension-dev-guide/prepare/lifecycle.html
[`di.xml`]: {{page.baseurl }}/extension-dev-guide/build/di-xml-file.html
