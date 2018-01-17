---
layout: default
group: mftf
title: Input testing data in the Magento Functional Testing Framework
version: 2.2
github_link: magento-functional-testing-framework/data.md
functional_areas:
 - Data Persistence
---

## Overview

Define metadata in xml when data entity needs to be persisted to Magento database. Metadata specifies the operations according to the persistence mechanism. It can be either Magento REST API or formkey based request.

## Format

```xml
<?xml version="1.0" encoding="UTF-8"?>
<operations xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="../../../../../../vendor/magento/magento2-functional-testing-framework/src/Magento/FunctionalTestingFramework/DataGenerator/etc/dataOperation.xsd">
    <operation name="" dataType="" type="" auth="" url="" method="">
        <contentType></contentType>
        <object key="" dataType="">
            <field key="">integer</field>
            <field key="">string</field>
            <field key="">boolean</field>
            <array key="">
                <value>string</value>
            </array>
        </object>
    </operation>
```

## Example

_.../Catalog/Metadata/category-meta.xml_:

```xml
<operations xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="../../../../../../vendor/magento/magento2-functional-testing-framework/src/Magento/FunctionalTestingFramework/DataGenerator/etc/dataOperation.xsd">
    <operation name="CreateCategory" dataType="category" type="create" auth="adminOauth" url="/V1/categories" method="POST">
        <contentType>application/json</contentType>
        <object key="category" dataType="category">
            <field key="parent_id">integer</field>
            <field key="name">string</field>
            <field key="is_active">boolean</field>
            <field key="position">integer</field>
            <field key="level">integer</field>
            <field key="children">string</field>
            <field key="created_at">string</field>
            <field key="updated_at">string</field>
            <field key="path">string</field>
            <field key="include_in_menu">boolean</field>
            <array key="available_sort_by">
                <value>string</value>
            </array>
            <field key="extension_attributes">empty_extension_attribute</field>
            <array key="custom_attributes">
                <value>custom_attribute</value>
            </array>
        </object>
    </operation>
```

This example defines an operation for persisting `Category`.

`operation` tag and attributes:

`name` that defines name of operation.
`dataType` that defines the data type of the operation.
`auth` that defines authentication types. possible values in `adminOauth`, `adminFormKey`, `customerFormKey`, `anonymous`.
`type` that defines type of operations. possible values in `create`, `delete`, `update`, `get`.
`url` that defines partial url of the operation. e.g. `/V1/categories`.
`method` that defines operation methods. possible values in `POST`, `DELETE`, `PUT`, `GET`.

`contentType` tag:
possible values in  `application/json` or `application/x-www-form-urlencoded`


*[MFTF]: Magento Functional Testing Framework
