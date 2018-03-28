---
layout: default
group: mftf
title: Handling data implicitly in the Magento Functional Testing Framework
version: 2.2
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

* `dataType` value must match the `type` value in the corresponding file with data definition
* File name is of camel case format and contains name of data entity, which it handles, and suffix `Meta`. Example: `CategoryMeta.xml`.
* A metadata file may contain different types of operations (`type`) with the same data entity (`dataType`).

## Handling entities using REST API

The MFTF allows you to handle basic CRUD operations with an object using [Magento REST API] requests.
All you need is simply to wrap the corresponding REST API request into XML tags provided by the MFTF.
Reference documentation for this tags is at the end of this topic in the [Reference] section.

Let's see an example of how to handle a category using REST API operations provided by the `catalogCategoryRepositoryV1` service.

![REST API operations provided by catalogCategoryRepositoryV1][catalogCategoryRepositoryV1 image]

The above figure demonstrates a list of available operations to:
- [delete a category by its ID] (`method="POST"`)
- [get information about a category by its ID] (`method="GET"`)
- [create a new category] (`method="POST"`)
- [update category data by its ID] (`method="PUT"`)

### Create an object {#create-object-as-adminOauth}

Here, we will declare an operation for category creation using REST API POST method.
Let's see a Model Schema of the corresponding request parameter which is called .

> post /V1/categories _catalogCategoryRepositoryV1SavePostBody_
```json
{
  "category": {
    "id": 0,
    "parent_id": 0,
    "name": "string",
    "is_active": true,
    "position": 0,
    "level": 0,
    "children": "string",
    "created_at": "string",
    "updated_at": "string",
    "path": "string",
    "available_sort_by": [
      "string"
    ],
    "include_in_menu": true,
    "extension_attributes": {},
    "custom_attributes": [
      {
        "attribute_code": "string",
        "value": "string"
      }
    ]
  }
}
```

A default XML implementation in the MFTF is the following:

> acceptance/tests/functional/Magento/FunctionalTest/Catalog/Metadata/category-meta.xml
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

And data :

> acceptance/tests/functional/Magento/FunctionalTest/Catalog/Data/CategoryData.xml
```xml
<entity name="_defaultCategory" type="category">
    <data key="name" unique="suffix">simpleCategory</data>
    <data key="name_lwr" unique="suffix">simplecategory</data>
    <data key="is_active">true</data>
</entity>
```

#### Create an object as an anonymous user {#create-object-as-anonymous}


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

### Update an object {#update-object-as-adminOauth}


> PUT `/V1/categories/{id}`
```json
{
  "category": {
    "id": 0,
    "parent_id": 0,
    "name": "string",
    "is_active": true,
    "position": 0,
    "level": 0,
    "children": "string",
    "created_at": "string",
    "updated_at": "string",
    "path": "string",
    "available_sort_by": [
      "string"
    ],
    "include_in_menu": true,
    "extension_attributes": {},
    "custom_attributes": [
      {
        "attribute_code": "string",
        "value": "string"
      }
    ]
  }
}
```

> acceptance/tests/functional/Magento/FunctionalTest/Catalog/Metadata/category-meta.xml
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

### Delete an object {#delete-object-as-adminOauth}

> delete /V1/categories/{categoryId}
```json

```

> acceptance/tests/functional/Magento/FunctionalTest/Catalog/Metadata/category-meta.xml
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

### Get an object {#get-object-as-adminOauth}


> get /V1/categories/{categoryId} 
```json

```

> acceptance/tests/functional/Magento/FunctionalTest/Catalog/Metadata/category-meta.xml
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

### Create an object {#create-object-as-adminFormKey}

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

### Update an object {#update-object-as-adminFormKey}

### Delete an object {#delete-object-as-adminFormKey}

### Get an object {#get-object-as-adminFormKey}

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

[Reference]: #reference
[Magento REST API]: http://devdocs.magento.com/guides/v2.2/rest/bk-rest.html

[catalogCategoryRepositoryV1 image]: img/catalogCategoryRepository-operations.png

*[MFTF]: Magento Functional Testing Framework
*[CRUD]: Create Read Update Delete