---
layout: default
group: mftf
title: Handling data implicitly in the Magento Functional Testing Framework
version: 2.3
github_link: magento-functional-testing-framework/release-2/metadata.md
functional_areas:
 - Testing
---

## Overview

Metadata files in the MFTF allows to handle entities using REST API or emulating HTTP request to the corresponding page.

Define metadata in XML when data entity needs to be persisted in the Magento database.
The metadata specifies the operations according to the persistence mechanism.
It can be either Magento REST API or formKey based request.

The following diagram demonstrates XML structure of a metadata file in the MFTF:
{% include_relative img/metadata-dia.svg %}

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

## Principles

* File name is of camel case format and contains name of data entity, which it handles, and suffix `Meta`. Example: `CategoryMeta.xml`.
* A metadata file may contain different types of operations (`type`) with the same data entity (`dataType`).

## Example

The following example defines an operation for persisting a category using [Magento REST API] (`catalogCategoryRepositoryV1` is used).

_.../Catalog/Metadata/CategoryMeta.xml_:

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

## Reference

### operations {#operations-tag}

Root element that points to the corresponding XML Schema.

### operation {#operation-tag}

Attribute|Type|Use|Description
---|---|---|---
name|string|optional|Name of the operation.
dataType|string|required|Data type of the operation.
type|string|required|Type of operations. Possible values: `create`, `delete`, `update`, `get`.
url|string|optional Relative URL of the operation. Example: `/V1/categories`.
auth|authEnum |optional
method|string|optional|Operation methods. Possible values: `POST`, `DELETE`, `PUT`, `GET`.
successRegex|string|optional
returnRegex|string|optional

### contentType {#contentType-tag}

Sets one of the following operation types `application/json` or `application/x-www-form-urlencoded`.

### object {#object-tag}

Attribute|Type|Use|Description
---|---|---|---
key|string|optional
dataType|string|required
required|boolean|optional

### field {#field-tag}

Attribute|Type|Use|Description
---|---|---|---
key|string|required
type|string|optional
required|boolean|optional

### array {#array-tag}

Attribute|Type|Use|Description
---|---|---|---
key|string|required
type|string|optional
required|boolean|optional

### value {#value-tag}

### header {#header-tag}

Attribute|Type|Use|Description
---|---|---|---
param|string|required

### param {#param-tag}

Attribute|Type|Use|Description
---|---|---|---
key|string|required


<!-- LINK DEFINITIONS -->

[Magento REST API]: http://devdocs.magento.com/swagger/index_22.html

*[MFTF]: Magento Functional Testing Framework
