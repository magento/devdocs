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

Metadata files in the MFTF serve to handle entities using REST API or emulating HTTP request to the corresponding page.

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
    <operation name=""
               dataType=""
               type=""
               auth=""
               url=""
               method="">
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

## Handling entities using REST API

### Create an object

```xml
<operation name="CreateCategory"
           dataType="category"
           type="create"
           auth="adminOauth"
           url="/V1/categories"
           method="POST">
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

#### Create an object as an anonymous user  

```xml
 <operation name="CreateGuestCart"
            dataType="guestCart"
            type="create"
            auth="anonymous"
            url="/V1/guest-carts"
            method="POST">
     <contentType>application/json</contentType>
 </operation>
 ```

### Update an object

```xml
<operation name="UpdateCategory"
           dataType="category"
           type="update"
           auth="adminOauth"
           url="/V1/categories/{id}"
           method="PUT">
    <contentType>application/json</contentType>
    <object key="category" dataType="category">
        <field key="id">integer</field>
        <field key="parent_id">integer</field>
        <field key="name">string</field>
        <field key="is_active">boolean</field>
        <field key="position">integer</field>
        <field key="level">integer</field>
        <field key="children">string</field>
        <field key="created_at">string</field>
        <field key="updated_at">string</field>
        <field key="path">string</field>
        <array key="available_sort_by">
            <value>string</value>
        </array>
        <field key="include_in_menu">boolean</field>
        <field key="extension_attributes">empty_extension_attribute</field>
        <array key="custom_attributes">
            <value>custom_attribute</value>
        </array>
    </object>
</operation>
```

### Delete an object

```xml
<operation name="DeleteCategory"
           dataType="category"
           type="delete"
           auth="adminOauth"
           url="/V1/categories/{id}"
           method="DELETE">
    <contentType>application/json</contentType>
</operation>
```

### Get an object

```xml
<operation name="GetProductAttributesFromDefaultSet"
           dataType="ProductAttributesFromDefaultSet"
           type="get"
           auth="adminOauth"
           url="/V1/products/attribute-sets/4/attributes"
           method="GET">
    <contentType>application/json</contentType>
</operation>
```

## Emulating an HTTP request

### Create an object

#### Backend

```xml
<operation name="CreateStoreGroup"
           dataType="group"
           type="create"
           auth="adminFormKey"
           url="/admin/system_store/save"
           method="POST"
           successRegex="/messages-message-success/"
           returnRegex="" >
    <contentType>application/x-www-form-urlencoded</contentType>
    <object dataType="group" key="group">
        <field key="group_id">string</field>
        <field key="name">string</field>
        <field key="code">string</field>
        <field key="root_category_id">integer</field>
        <field key="website_id">integer</field>
    </object>
    <field key="store_action">string</field>
    <field key="store_type">string</field>
</operation>
```

#### Frontend

```xml
<operation name="CreateWishlist"
           dataType="wishlist"
           type="create"
           auth="customerFormKey"
           url="/wishlist/index/add/"
           method="POST"
           successRegex=""
           returnRegex="~\/wishlist_id\/(\d*?)\/~" >
    <contentType>application/x-www-form-urlencoded</contentType>
    <field key="product">integer</field>
    <field key="customer_email">string</field>
    <field key="customer_password">string</field>
</operation>
```

### Update an object

### Delete an object

### Get an object

## Example

The following example defines operation that persists a category using [Magento REST API] (`catalogCategoryRepositoryV1` is used).

_.../Catalog/Metadata/CategoryMeta.xml_:

```xml
<operations xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="../../../../../../vendor/magento/magento2-functional-testing-framework/src/Magento/FunctionalTestingFramework/DataGenerator/etc/dataOperation.xsd">
    <operation name="CreateCategory"
               dataType="category"
               type="create"
               auth="adminOauth"
               url="/V1/categories"
               method="POST">
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
`name`|string|optional|Name of the operation.
`dataType`|string|required|Data type of the operation. Should match `type` attribute in entity.
`type`|string|required|Type of operations. Possible values: `create`, `delete`, `update`, `get`.
`url`|string|optional |Relative URL of the operation. Example: `/V1/categories`. The full URL at the end will contain: baseUrl + /rest/ + `url`.
`auth`|Possible values: `adminOath`, `adminFormKey`, `customerFormKey`, `anonymous` |optional|Determines what kind of persistent type this operation describes. TODO add examples for each case.
`method`|string|optional|Operation methods. Possible values: `POST`, `DELETE`, `PUT`, `GET`.
`successRegex`|string|optional|Determines if the operation was successful. Parses the HTML body in response and asserts if the value assigned to the `successRegex` exists.
`returnRegex`|string|optional| It filters the response to return the value that matches `returnRegex`
`removeBackend`|boolean|optional| Removes backend name from request URL. Applicable when `auth="adminFormKey"`.


`adminOath` is for REST API persistence.
`adminFormKey` is for form key persistence in UI (the whole request is in URL)
`customerFormKey` is for form key persistence on UI frontend
`anonymous` 

### contentType {#contentType-tag}

Sets one of the following operation types `application/json` or `application/x-www-form-urlencoded`.

### object {#object-tag}

Representation of complex entity that may contain fields, arrays, and objects.
Objects need to match entities XML definition.

Attribute|Type|Use|Description
---|---|---|---
`key`|string|optional| Name of the object.
`dataType`|string|required| Should match `type` attribute in entity.
`required`|boolean|optional| Determines if the object is required or not. Must match the Magento REST API.

### field {#field-tag}

Attribute|Type|Use|Description
---|---|---|---
`key`|string|required|Name of the field.
`type`|string|optional|Primitive type of the value.
`required`|boolean|optional| Determines if the field is required or not. Must match the Magento REST API.

### array {#array-tag}

Attribute|Type|Use|Description
---|---|---|---
`key`|string|required|Name of the array.
`type`|string|optional|Primitive type of the value.
`required`|boolean|optional|

It contains one or more `value` elements.

### value {#value-tag}

An item in `array`.

### header {#header-tag}

REST API header parameter.

Attribute|Type|Use|Description
---|---|---|---
`param`|string|required|REST API header parameter.

```xml
<header param="status">available</header>
```

### param {#param-tag}

Adds an additional parameter in URL.

Attribute|Type|Use|Description
---|---|---|---
`key`|string|required|Name of the URL parameter.

Example:

```xml
<param key="status">someValue</param>
```



<!-- LINK DEFINITIONS -->

[Magento REST API]: http://devdocs.magento.com/swagger/index_22.html

*[MFTF]: Magento Functional Testing Framework
