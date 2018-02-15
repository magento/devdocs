---
layout: default
group: mftf
title: Action groups in the Magento Functional Testing Framework
version: 2.3
github_link: magento-functional-testing-framework/release-2/test/action-groups.md
functional_areas:
 - Testing
mftf-release: 2.0.2
---

_This topic corresponds to the MFTF {{page.mftf-release}} release._
{: style="text-align: right"}

## Overview

In the MFTF, it is possible to re-use a group of [actions] declared in an XML file.
It is handy when you need to repeat same sequence of actions over and over again.
For example, to log in as an admin or a customer.

The following diagram demonstrates XML structure of an action group:

{% include_relative img/action-groups-dia.svg %}

## Format

```xml
<?xml version="1.0" encoding="UTF-8"?>

<actionGroups xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="../../../../../../vendor/magento/magento2-functional-testing-framework/src/Magento/FunctionalTestingFramework/Test/etc/testSchema.xsd">
    <actionGroup name="">
        <arguments>
            <argument name=""/>
            <argument name="" defaultValue=""/>
            <argument name="" defaultValue="" type=""/>
        </arguments>
    </actionGroup>
</actionGroups>
```

## Principles

* All action groups are declared in XML files stored in the _\<module\>/ActionGroup/_ directory.
* File name ends with `ActionGroup`. Example: _LoginToAdminActionGroup.xml_.
* File name and [`<actionGroup>`] name are the same.

## Example
{%raw%}
The following example demonstrates declaration of group of actions to execute authorization into Admin area.

### Declaration

This action group relates to functionality of the Backend module, so it should be stored as _Backend/ActionGroup/LoginToAdminActionGroup.xml_.

The name and identifier of the action group is `LoginToAdminActionGroup`.
In [test], it will be used as a reference in `ref` parameter, like: `ref="LoginToAdminActionGroup"`.

Lets start from a template for our action group in _Backend/ActionGroup/LoginToAdminActionGroup.xml_:

```xml
<?xml version="1.0" encoding="UTF-8"?>

<actionGroups xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="../../../../../../vendor/magento/magento2-functional-testing-framework/src/Magento/FunctionalTestingFramework/Test/etc/testSchema.xsd">
    <actionGroup name="LoginToAdminActionGroup">

    </actionGroup>
</actionGroups>
```

The action group must wrap the following actions:

```xml
<fillField stepKey="fillUsername" selector="#username" userInput="{{adminUser.username}}" />
<fillField stepKey="fillPassword" selector="#password" userInput="{{adminUser.password}}" />
<click stepKey="click" selector="#login" />
```

So, now we have the following code:

```xml
<?xml version="1.0" encoding="UTF-8"?>

<actionGroups xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="../../../../../../vendor/magento/magento2-functional-testing-framework/src/Magento/FunctionalTestingFramework/Test/etc/testSchema.xsd">
    <actionGroup name="LoginToAdminActionGroup">
        <fillField stepKey="fillUsername" selector="#username" userInput="{{adminUser.username}}" />
        <fillField stepKey="fillPassword" selector="#password" userInput="{{adminUser.password}}" />
        <click stepKey="click" selector="#login" />
    </actionGroup>
</actionGroups>
```

Since we use a variable for data in `userInput`, we need to create a corresponding argument, where this variable will be defined in a test.
Also we can add a default value for the variable that will be used in the most frequent cases.
Let's assume that we want to use the `_defaultAdmin` entity by default.

```xml
<argument name="adminUser" defaultValue="_defaultAdmin"/>
```

Let's finalize our action group code:

```xml
<?xml version="1.0" encoding="UTF-8"?>

<actionGroups xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="../../../../../../vendor/magento/magento2-functional-testing-framework/src/Magento/FunctionalTestingFramework/Test/etc/testSchema.xsd">
    <actionGroup name="LoginToAdminActionGroup">
        <arguments>
            <argument name="adminUser" defaultValue="_defaultAdmin"/>
        </arguments>
        <fillField stepKey="fillUsername" selector="#username" userInput="{{adminUser.username}}" />
        <fillField stepKey="fillPassword" selector="#password" userInput="{{adminUser.password}}" />
        <click stepKey="click" selector="#login" />
    </actionGroup>
</actionGroups>
```


### Usage in a test

Let's see how the action group can be used in tests.

In the following example, instead of adding a set of actions:

```xml
<fillField stepKey="fillUsername" selector="#username" userInput="{{CustomAdminUser.username}}" />
<fillField stepKey="fillPassword" selector="#password" userInput="{{CustomAdminUser.password}}" />
<click stepKey="click" selector="#login" />
```

we can use the action group _LoginToAdminActionGroup_ that we created above.

First, the `<actionGroup>` element must be added with reference to _LoginToAdminActionGroup_, like.

```xml
<actionGroup stepKey="loginToAdminPanel" ref="LoginToAdminActionGroup"/>
```

This action group will take data from the `_defaultAdmin` by default.
To change it to `CustomAdminUser`, we must add an argument `adminUser` with the corresponding value.

```xml
<actionGroup stepKey="loginToAdminPanel" ref="LoginToAdminActionGroup">
    <argument name="adminUser" value="CustomAdminUser" />
</actionGroup>
```

That's it!

## Data Type Usage

There are cases where instead of passing in an entity, you may need to only send in a `string` or an `integer` as a `argument`. By default, `argument`s expect to be an entire entity, but when defining an `actionGroup`'s `argument`, you may define the argument to have a primitive data type like so:

```xml
<actionGroup name="fillExample">
    <arguments>
        <argument name="relevantString" defaultValue="defaultString" type="string"/>
    </arguments>
    <fillField stepKey="fillField1" selector="#input" userInput="{{relevantString}}"/>
    <click stepKey="clickSave" selector="#save"/>
    <see stepKey="seeItWorked" selector="#outputArea" userInput="{{relevantString}}"/>
    <click stepKey="clickParameterizedSelector" selector="{{SomeSection.parameterizedElement(relevantString)}}"/>
</actionGroup>
```

The above tells the `actionGroup` that the replacement argument is not a data entity, but rather just a simple piece of data that needs to be replaced. By default, and if no `data` attribute is defined, it is assumed to be an `entity`
This allows you to pass singular pieces of data for use in the `actionGroup` in the middle of a test, instead of passing the entire entity:

```xml
<actionGroup stepKey="fillWithStringLiteral" ref="fillExample">
    <argument name="relevantString" value="overrideString" />
</actionGroup>
<actionGroup stepKey="fillWithXmlData" ref="fillExample">
    <argument name="relevantString" value="myCustomEntity.field1" />
</actionGroup>
<actionGroup stepKey="fillWithStringLiteral" ref="fillExample">
    <argument name="relevantString" value="$persistedData.field1$" />
</actionGroup>
```

## Reference

### actionGroups {#actiongroups-tag}

A root element that contains XML configuration attributes.

Attribute|Value|Description
---|---|---
xmlns:xsi|`"http://www.w3.org/2001/XMLSchema-instance"`|Tells the XML parser that this document should be validated against a schema.
xsi:noNamespaceSchemaLocation|`"../../../../../../vendor/magento/magento2-functional-testing-framework/src/Magento/FunctionalTestingFramework/Test/etc/testSchema.xsd"`|Relative path to the corresponding schema.

It may contain one or more `<actionGroup>`.

### actionGroup {#actiongroup-tag}

Attribute|Type|Use|Description
---|---|---|---
name|string|required|Identifier of the action group.

It may contain `<arguments>`.

### arguments {#arguments-tag}

A wrapper for an array of `<argument>` elements.

### argument {#argument-tag}

Attribute|Type|Use|Description
---|---|---|---
name|string|required|Identifier of an argument in scope of action group.
defaultValue|string|optional|Data entity that is used by default.
data|sting|optional|Defines what type of data the argument is supposed to be. Defaults to `entity`

{%endraw%}

<!-- LINK DEFINITIONS -->

[actions]: ./actions.html
[`<actionGroup>`]: #actiongroup-tag
[test]: ../test.html
