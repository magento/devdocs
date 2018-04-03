---
layout: default
group: mftf
title: Handling data implicitly in the Magento Functional Testing Framework
version: 2.2
github_link: magento-functional-testing-framework/release-2/metadata.md
functional_areas:
 - Testing
mftf-release: 2.1.2
---

_This topic was updated due to the {{page.mftf-release}} MFTF release._
{: style="text-align: right"}

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

* `dataType` value must match the `type` value in the corresponding file with data definition.
* File name is of camel case format and contains name of data entity, which it handles, and suffix `Meta`.
Example: `CategoryMeta.xml`.
* A metadata file may contain different types of operations (`type`) with the same data entity (`dataType`).

## Handling entities using REST API

The MFTF allows you to handle basic CRUD operations with an object using [Magento REST API] requests.
All you need is to wrap the corresponding REST API request into XML tags provided by the MFTF.
Reference documentation for this tags is at the end of this topic in the [Reference] section.

{% include note.html
type="info"
content="GET must be used for retrieving data from objects.<br/>
POST must be used for creating new objects.<br/>
PUT must be used for updating objects.<br/>
DELETE must be used for deleting objects.<br/>" %}

Let's see an example of how to handle a category using REST API operations provided by the `catalogCategoryRepositoryV1` service.

![REST API operations provided by catalogCategoryRepositoryV1][catalogCategoryRepositoryV1 image]

The above figure demonstrates a list of available operations to:
- delete a category by its ID (`method="DELETE"`)
- get information about a category by its ID (`method="GET"`)
- [create a new category] (`method="POST"`)
- update category data by its ID (`method="PUT"`)

We assume that our `.env` file sets `MAGENTO_BASE_URL=https://example.com/` and `MAGENTO_BACKEND_NAME=admin`.

### Creating a simple object {#create-object-as-adminOauth}

Let's see what happens when you use the `<createData entity="_defaultCategory" stepKey="..."/>` test step.

The MFTF searches in _Data_ an entity with `<entity name="_defaultCategory">` and reads `type` of the entity.

> _Catalog/Data/CategoryData.xml_

```xml
<entity name="_defaultCategory" type="category">
    <data key="name" unique="suffix">simpleCategory</data>
    <data key="name_lwr" unique="suffix">simplecategory</data>
    <data key="is_active">true</data>
</entity>
```

Here, `type` equals to `"category"` that instructs the MFTF to search an operation with `dataType="category"`. 
Since the action is to create a category, the MFTF will also search for operation with `type="create"` in _Metadata_ for `dataType="category"`.
(The corresponding operation is provided by _catalogCategoryRepositoryV1_ in REST API.)

> _Catalog/Metadata/category-meta.xml_

```xml
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

Let's see what's encoded in `<operation>`:
  - `name="CreateCategory"` defines a consistent name of the operation, which is used for merging if needed
  - `dataType="category"` defines a reference to data file with input data for a Category entity, which is defined as `<entity type="category">`
  - `auth="adminOauth"` defines Oath authorization which is required for the Admin area
  - `url="/V1/categories"` defines a routing URL to the corresponding service class.
  The request is sent to `https://example.com/rest/V1/categories` if `MAGENTO_BASE_URL=https://example.com/` and `MAGENTO_BACKEND_NAME=admin` are set in the _acceptance/.env_ configuration file.
  - `method="POST"` defines an HTTP POST method of the request

`<contentType>application/json</contentType>` defines a content type of the REST API request, which is set as `application/json` here.

The parameter that declares a body of the request is _catalogCategoryRepositoryV1SavePostBody_.
Using the [Reference], we can trace how JSON request was converted into XML representation.

> Model schema for _catalogCategoryRepositoryV1SavePostBody_
{:#catalogCategoryRepositoryV1SavePostBody}
```json
{                                           // XML representation in the MFTF metadata format (see 'Catalog/Metadata/category-meta.xml')
  "category": {                             // <object key="category" dataType="category">
    "id": 0,                                // Skipped, because Category ID is not available on UI when you create a new category.
    "parent_id": 0,                         // <field key="parent_id">integer</field>\
    "name": "string",                       // <field key="name">string</field>'
    "is_active": true,                      // <field key="is_active">boolean</field>
    "position": 0,                          // <field key="position">integer</field>
    "level": 0,                             // <field key="level">integer</field>
    "children": "string",                   // <field key="children">string</field>
    "created_at": "string",                 // <field key="created_at">string</field>
    "updated_at": "string",                 // <field key="updated_at">string</field>
    "path": "string",                       // <field key="path">string</field>
    "available_sort_by": [                  // <array key="available_sort_by">
      "string"                              // <value>string</value>
    ],                                      // </array>
    "include_in_menu": true,                // <field key="include_in_menu">boolean</field>
    "extension_attributes": {},             // <field key="extension_attributes">empty_extension_attribute</field>, where 'empty_extension_attribute' is a reference to operation with 'dataType="empty_extension_attribute"' (see 'Catalog/Metadata/empty_extension_attribute-meta.xml')
    "custom_attributes": [                  // <array key="custom_attributes">
      {                                     // <value>custom_attribute</value>, where 'custom_attribute' is a reference to operation with 'dataType="custom_attribute"' (see 'Catalog/Metadata/custom_attribute-meta.xml')
        "attribute_code": "string",         
        "value": "string"                   
      }                                     
    ]                                       // </array>
  }                                         // </object>                                                                                  
}
```

So, the body of REST API request to create a simple category is the following:

```json
{                                             // XML representation of input data used to create a simple category ("Catalog/Data/CategoryData.xml")
  "category": {                               // <entity name="_defaultCategory" type="category">
    "name": "simpleCategory_0986576456",      // <data key="name" unique="suffix">simpleCategory</data>
    "is_active": true                         // <data key="is_active">true</data>
  }                                           // </entity>
}
```

### Creating an object as a guest {#create-object-as-anonymous}

The corresponding test step is 

```xml
<createData entity="guestCart" stepKey="..."/>
```

Let's see how it works.
The MFTF searches in _Data_ an entity with `<entity name="guestCart">` and reads `type`.

> _Quote/Data/GuestCartData.xml_

```xml
    <entity name="guestCart" type="guestCart">
    </entity>
```

`type="guestCart"` points to the operation with `dataType=guestCart"` and `type="create"` in _Metadata_.

> Source file: _Catalog/Data/CategoryData.xml_

```xml
 <operation name="CreateGuestCart" dataType="guestCart" type="create" auth="anonymous" url="/V1/guest-carts" method="POST">
     <contentType>application/json</contentType>
 </operation>
 ```
 
As a result, the MFTF sends unauthorized POST request with empty body to the _https://example.com/rest/V1/guest-carts_.

## Using HTML forms

For cases when REST API is not applicable, you may use persisting with [HTML forms] (when all object parameters are encoded in a URL as `key=name` attributes).
There two different attributes to split access to different areas:
* `auth="adminFormKey"` is used for objects in an Admin area
* `auth="customerFormKey"` is used for objects in a store front

Moreover, you are able to create assurances with `successRegex`, and even return values with `returnRegex`.
Let's see a couple of examples.


### Create an object in Admin {#create-object-as-adminFormKey}

The CreateStoreGroup operation is developed to persist a store group. 

> Source file: _Store/Metadata/store_group-meta.xml_

```xml
<operation name="CreateStoreGroup" dataType="group" type="create" auth="adminFormKey" url="/admin/system_store/save" method="POST" successRegex="/messages-message-success/" >
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

It is called when `<createData>` (`type="create"`) points to a data entity of type `"group"` (`dataType="group"`).
It sends a POST request (`method="POST"`) to _http://example.com/admin/system_store/save_ (`url="/admin/system_store/save"`) that is authorized for the Admin area (`auth="adminFormKey"`).
The request contains HTML form data encoded in the [application/x-www-form-urlencoded] content type (`<contentType>application/x-www-form-urlencoded</contentType>`).
If the returned HTML code contains the `messages-message-success` string, it is resolved as successful.

The operation allows to assign form fields with the following ids:
* `group/group_id`
* `group/name`
* `group/code`
* `group/root_category_id`
* `group/website_id`
* `store_action`
* `store_type`


### Create an object in store front {#create-object-as-customerFormKey}

> Source file: _Wishlist/Metadata/wishlist-meta.xml_

```xml
<operation name="CreateWishlist" dataType="wishlist" type="create" auth="customerFormKey" url="/wishlist/index/add/" method="POST" successRegex="" returnRegex="~\/wishlist_id\/(\d*?)\/~" >
    <contentType>application/x-www-form-urlencoded</contentType>
    <field key="product">integer</field>
    <field key="customer_email">string</field>
    <field key="customer_password">string</field>
</operation>
```

## Reference

### operations {#operations-tag}

Root element that points to the corresponding XML Schema.

### operation {#operation-tag}

Attribute|Type|Use|Description
---|---|---|---
`name`|string|optional|Name of the operation.
`dataType`|string|required|Data type of the operation. It refers to a `type` attribute of data entity that will be used as a source of input data.
`type`|string|required|Type of operation. Possible values: `create`, `delete`, `update`, `get`.
`url`|string|optional |A routing URL of the operation. Example: `/V1/categories`. The full URL at the end will contain: `ENV.baseUrl` + `/rest/` + `url`.
`auth`|Possible values: `adminOath`, `adminFormKey`, `customerFormKey`, `anonymous` |optional|Determines what kind of persistent type this operation describes. TODO add examples for each case.
`method`|string|optional|Operation methods. Possible values: `POST`, `DELETE`, `PUT`, `GET`.
`successRegex`|string|optional|Determines if the operation was successful. Parses the HTML body in response and asserts if the value assigned to the `successRegex` exists.
`returnRegex`|string|optional| It filters the response to return the value that matches `returnRegex`
`removeBackend`|boolean|optional| Removes backend name from request URL. Applicable when `auth="adminFormKey"`.

{% include note.html
type="info"
content="GET must be used for retrieving data from objects.<br/>
POST must be used for creating new objects.<br/>
PUT must be used for updating objects.<br/>
DELETE must be used for deleting objects.<br/>" %}


`adminOath` is for REST API persistence. [OAuth-based authentication][oauth] to the Admin area
`adminFormKey` is for form key persistence in UI (the whole request is in URL).
`customerFormKey` is for form key persistence on UI frontend
`anonymous` 

### contentType {#contentType-tag}

Sets one of the following operation types `application/json` or `application/x-www-form-urlencoded`.

### object {#object-tag}

Representation of a complex entity that may contain fields, arrays, and objects.
An object must match [entity] of the same `type`.

Attribute|Type|Use|Description
---|---|---|---
`key`|string|optional| Name of the object.
`dataType`|string|required| Should match `type` attribute in entity.
`required`|boolean|optional| Determines if the object is required or not. Must match the Magento REST API.

### field {#field-tag}

Representation of UI or REST API fields. 

Attribute|Type|Use|Description
---|---|---|---
`key`|string|required|Name of the field.
`type`|string|optional|Type of the value.
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

[delete a category by its ID]: #delete-object-as-adminOauth
[get information about a category by its ID]: #get-object-as-adminOauth
[create a new category]: #create-object-as-adminOauth
[simple category example]: #create-category-json-example
[catalogCategoryRepositoryV1SavePostBody]: #catalogCategoryRepositoryV1SavePostBody
[oauth]: {{page.baseurl}}get-started/authentication/gs-authentication-oauth.html
[update category data by its ID]: #update-object-as-adminOauth
[Reference]: #reference

[entity]: data.html#entity-tag

[Magento REST API]: {{page.baseurl}}rest/bk-rest.html

[catalogCategoryRepositoryV1 image]: img/catalogCategoryRepository-operations.png

[application/x-www-form-urlencoded]: https://www.w3.org/TR/html401/interact/forms.html#h-17.13.4.1
[HTML forms]: https://www.w3.org/TR/html401/interact/forms.html

*[MFTF]: Magento Functional Testing Framework
*[CRUD]: Create Read Update Delete