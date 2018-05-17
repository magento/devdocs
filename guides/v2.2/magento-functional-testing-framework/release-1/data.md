---
group: mftf
title: Input testing data in the Magento Functional Testing Framework
version: 2.2
github_link: magento-functional-testing-framework/release-1/data.md
functional_areas:
 - Testing
redirect_from:
    - guides/v2.2/magento-functional-testing-framework/data.html
    - guides/v2.2/magento-functional-testing-framework/1.0/data.html
mftf-release: 1.0.0
---

_This topic was updated due to the {{page.mftf-release}} MFTF release._
{: style="text-align: right"}

## Overview

For the correct functioning of tests, they require data to operate on.

This framework allows you to specify and use data entities defined in XML.
Default data entities are provided for use and as templates for entity creation/manipulation.

To this end, there are three methods in which data can be supplied to a test.

The following diagram demonstrates XML structure of a data object in the MFTF:

{%include_relative img/data-dia.svg%}

### Supplying data to test by reference to a data entity
{%raw%}
Test steps requiring data input in an action (e.g. Fill field with string) may reference an attribute from a data entity.

```xml
userInput="{{SimpleSubCategory.name}}"
```

Here, 

* `SimpleSubCategory` is an entity name
* `name` is a data key of the entity. The corresponding value will be assigned to `userInput` as a result.

```xml
userInput="{{_ENV.MAGENTO_ADMIN_USERNAME}}
```

Here,

* `_ENV` is a reference to the `dev/tests/acceptance/.env` file, where basic environmental variables are set
* `MAGENTO_ADMIN_USERNAME` is a name of an environmental variable. The corresponding value will be assigned to `userInput` as a result.

### Persisting a data entity as a prerequisite of a test

A test can specify an entity which should be persisted (created in the database) so that the test actions can operate on known existing data.

```xml
userInput="$$customer.email$$"
```

Here,

* `customer` is a stepKey of the corresponding action, where an entity is created
* `email` is a data key of the entity. The corresponding value will be assigned to `userInput` as a result.

### Using data returned by test actions

A test can also reference data that was returned as a result of [test actions], like the action `<grabValueFrom selector="someSelector" stepKey="grabStepKey>`.
Further in the test, the data grabbed by selector `someSelector` can be referenced using the `stepKey` value. In this case, it is `grabStepKey`.

The following example demonstrates the usage of `grabValueFrom` in test, where the returned value is used by action's `stepKey`:

```xml
<grabValueFrom selector="someSelector" stepKey="grabStepKey"/>
<fillField selector=".functionalTestSelector" userInput="{$grabStepKey}" stepKey="fillFieldKey1"/>
```

### Hard-coded data input

The data to operate against can be included as literals in a test. Hard-coded data input can be useful in assertions ([see] actions).

```xml
userInput="We'll email you an order confirmation with details and tracking info."
```

## Format

```xml
<?xml version="1.0" encoding="UTF-8"?>

<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="../../../../../../vendor/magento/magento2-functional-testing-framework/src/Magento/FunctionalTestingFramework/DataGenerator/etc/dataProfileSchema.xsd">
    <entity name="" type="">
        <data key=""></data>
    </entity>
    <entity name="" type="">
        <data key="" unique=""></data>
        <var key="" entityType="" entityKey=""/>
    </entity>
</config>
```

## Principles

* A data file may contain multiple data entities
* File name is given camel case with first letter upper case name.  The name represents data type. For example, file with Customer data is _CustomerData.xml_, for Simple Product it should be `SimpleProductData.xml`.
* entity name is given camel case with first letter upper case name.

## Example

_.../Catalog/Data/CategoryData.xml_:

```xml
<?xml version="1.0" encoding="UTF-8"?>

<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="../../../../../../vendor/magento/magento2-functional-testing-framework/src/Magento/FunctionalTestingFramework/DataGenerator/etc/dataProfileSchema.xsd">
    <entity name="_defaultCategory" type="category">
        <data key="name" unique="suffix">simpleCategory</data>
        <data key="name_lwr" unique="suffix">simplecategory</data>
        <data key="is_active">true</data>
    </entity>
    <entity name="SimpleSubCategory" type="category">
        <data key="name" unique="suffix">SimpleSubCategory</data>
        <data key="name_lwr" unique="suffix">simplesubcategory</data>
        <data key="is_active">true</data>
        <data key="include_in_menu">true</data>
    </entity>
</config>
```

This example declares two data entities: `_defaultCategory` and `SimpleSubCategory`. They set data required for category creation (see [Creating Categories]).
All entities that have same names will be merged during test generation.
Both entities are of type `category`.

`_defaultCategory` sets three data fields:

* `name` that defines Category Name to `simpleCategory` with unique suffix. It will look like `simpleCategory598742365`.
* `name_lwr` that defines Category Name in lower case format with unique suffix. It will look like `simplecategory697543215`.
* `is_active` that sets Enable Category to true.
    
`SimpleSubCategory` sets four data fields:

* `name` that defines Category Name with unique suffix. It will look like `SimpleSubCategory458712365`.
* `name_lwr` that defines Category Name in lower case format with unique suffix. It will look like `simplesubcategory753698741`.
* `is_active` that sets Enable Category to `true`.
* `include_in_menu` that sets Include in Menu to `true`.
    
Example of use in test:

```xml
<fillField selector="{{AdminCategoryBasicFieldSection.categoryNameInput}}" userInput="{{_defaultCategory.name}}" stepKey="enterCategoryName"/>
```

This action inputs data from `name` of the `_defaultCategory` entity (for example, `simpleCategory598742365`) into the field with locator defined in the selector of the `categoryNameInput` element of the `AdminCategoryBasicFieldSection`.

## Reference

### entity

An element that contains configuration array containing all Entity elements.

Attributes|Type|Use|Description
---|---|---|---
name|string|optional|Name of the Entity.
type|string|optional|Node containing the exact name of Entity type. Used later to find specific Persistence Layer Model class. `type` in data can be whatever the user wants; there are no constraints. It becomes important when persisting data, as depending on the `type` given, it will try to match a metadata definition with the operation being done. For example, given an entity `myCustomer` with a `type="customer"`, if you call `<createData entity="myCustomer"/>`, it will try to find a metadata entry with the following attributes: `<operation dataType="customer" type="create">`

`<entity>` may contain one or more [`<data`], [`<var>`], [`<required-entities>`], [`<array>`] elements in any sequence.

### data {#data-tag}

Element containing Data/Value pair.

Attributes|Type|Use|Description
---|---|---|---
key|string|optional|Key attribute of data/value pair.
unique|enum: `"prefix"`, `"suffix"`|optional|Add suite or test wide unique sequence as "prefix" or "suffix" to the data value if specified.

### var

Element that can be used to grab a key value from another entity. For example, when creating a customer with the
`<createData>` action, the server responds with the autoincremented ID of that customer. To access that ID and use it
in another data entity, you can use this.

Attributes|Type|Use|Description
---|---|---|---
key|string|optional|Key attribute of this entity to assign a value to.
entityType|string|optional|Type attribute of referenced entity.
entityKey|string|optional|Key attribute of the referenced entity from which to get a value.
unique|--|--|*This attribute hasn't been implemented yet.*

### required-entity

Element that specifies the parent/child relationship between complex types. For example, a customer may have an address.
Specifying that relationship looks like:

```xml
<entity name="CustomerEntity" type="customer">
    ...
    <required-entity type="address">AddressEntity</required-entity>
    ...
</entity>
```

Attributes|Type|Use|Description
---|---|---|---
type|string|optional|Type attribute of required entity.

### array

Element that contains a reference to an array of values. For example:

```xml
<entity name="AddressEntity" type="address">
    ...
    <array key="street">
        <item>7700 W Parmer Ln</item>
        <item>Bld D</item>
    </array>
    ...
</entity>
```

Attributes|Type|Use|Description
---|---|---|---
key|string|required|Key attribute of this entity to assign a value to.

`<array>` may contain [`<item>`] elements.

### item

Individual piece of data to be passed in as part of the parent array type.

{%endraw%}

<!-- LINK DEFINITIONS -->

<!-- Anchors -->

[`<data`]: #data-tag
[`<var>`]: #var
[`<required-entities>`]: #required-entity
[`<array>`]: #array
[`<item>`]: #item

<!-- Internal -->

[see]: cest/actions.html#see
[test actions]: cest/actions.html#actions-returning-a-variable

<!-- External -->

[Creating Categories]: http://docs.magento.com/m2/ce/user_guide/catalog/category-create.html

<!-- Abbreviations -->

*[MFTF]: Magento Functional Testing Framework
