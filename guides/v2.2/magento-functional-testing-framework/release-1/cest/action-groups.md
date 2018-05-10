---
group: mftf
title: Action groups in the Magento Functional Testing Framework
version: 2.2
github_link: magento-functional-testing-framework/release-1/cest/action-groups.md
functional_areas:
 - Testing
redirect_from: guides/v2.2/magento-functional-testing-framework/cest/action-groups.html
mftf-release: 1.0.0
---

_This topic was updated due to the {{page.mftf-release}} MFTF release._
{: style="text-align: right"}

## Overview

In the MFTF, it is possible to re-use a group of actions declared in an XML file.
It is handy when you need to repeat same sequence of actions over and over again.
For example, to log in as an admin or a customer.

The following diagram demonstrates XML structure of an action group:

{% include_relative img/action-groups-dia.svg %}

## Format

```xml
<?xml version="1.0" encoding="UTF-8"?>

<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="../../../../../../vendor/magento/magento2-functional-testing-framework/src/Magento/FunctionalTestingFramework/Test/etc/testSchema.xsd">
    <actionGroup name="">
        <arguments>
            <argument name=""/>
            <argument name="" defaultValue=""/>
        </arguments>
    </actionGroup>
</config>
```

## Principles

* All action groups are declared in XML files stored in the _&lt;module&gt;/ActionGroup/_ directory.
* File name ends with `ActionGroup`. Example: _LoginToAdminActionGroup.xml_.
* File name and `<actionGroup>` name are the same.

## Example
{%raw%}
The following example demonstrates declaration of group of actions to execute authorization into Admin area.

### Declaration

This action group relates to functionality of the Backend module, so it should be stored as _Backend/ActionGroup/LoginToAdminActionGroup.xml_.

The name and identifier of the action group is `LoginToAdminActionGroup`.
In test, it will be used as a reference in `ref` parameter, like: `ref="LoginToAdminActionGroup"`.

Lets start from a template for our action group in _Backend/ActionGroup/LoginToAdminActionGroup.xml_:

```xml
<?xml version="1.0" encoding="UTF-8"?>

<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="../../../../../../vendor/magento/magento2-functional-testing-framework/src/Magento/FunctionalTestingFramework/Test/etc/testSchema.xsd">
    <actionGroup name="LoginToAdminActionGroup">

    </actionGroup>
</config>
```

The action group must wrap the following actions:

```xml
<fillField stepKey=”fillUsername” selector="#username" userInput="{{adminUser.username}}" />
<fillField stepKey="fillPassword” selector="#password" userInput="{{adminUser.password}}" />
<click stepKey="click” selector=”#login" />
```

So, now we have the following code:

```xml
<?xml version="1.0" encoding="UTF-8"?>

<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="../../../../../../vendor/magento/magento2-functional-testing-framework/src/Magento/FunctionalTestingFramework/Test/etc/testSchema.xsd">
    <actionGroup name="LoginToAdminActionGroup">
        <fillField stepKey=”fillUsername” selector="#username" userInput="{{adminUser.username}}" />
        <fillField stepKey="fillPassword” selector="#password" userInput="{{adminUser.password}}" />
        <click stepKey="click” selector=”#login" />
    </actionGroup>
</config>
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

<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="../../../../../../vendor/magento/magento2-functional-testing-framework/src/Magento/FunctionalTestingFramework/Test/etc/testSchema.xsd">
    <actionGroup name="LoginToAdminActionGroup">
        <arguments>
            <argument name="adminUser" defaultValue="_defaultAdmin"/>
        </arguments>
        <fillField stepKey=”fillUsername” selector="#username" userInput="{{adminUser.username}}" />
        <fillField stepKey="fillPassword” selector="#password" userInput="{{adminUser.password}}" />
        <click stepKey="click” selector=”#login" />
    </actionGroup>
</config>
```


### Usage in a test

Let's see how the action group can be used in tests.

In the following example, instead of adding a set of actions:

```xml
<fillField stepKey=”fillUsername” selector="#username" userInput="{{CustomAdminUser.username}}" />
<fillField stepKey="fillPassword” selector="#password" userInput="{{CustomAdminUser.password}}" />
<click stepKey="click” selector=”#login" />
```

we can use the action group _LoginToAdminActionGroup_ that we created above.

First, the `<actionGroup>` element must be added with reference to _LoginToAdminActionGroup_, like.   

```xml
<actionGroup stepKey=”loginToAdminPanel” ref="LoginToAdminActionGroup"/>
```

This action group will take data from the `_defaultAdmin` by default.
To change it to `CustomAdminUser`, we must add an argument `adminUser` with the corresponding value.

```xml
<actionGroup stepKey=”loginToAdminPanel” ref="LoginToAdminActionGroup">
    <argument name="adminUser" value=”CustomAdminUser” />
</actionGroup>
```

That's it!

## Reference

### actionGroup

Attribute|Type|Use|Description
---|---|---|---
name|string|required|Identifier of the action group.

It may contain `<arguments>`.

### arguments

A wrapper for an array of `<argument>` elements.

### argument

Attribute|Type|Use|Description
---|---|---|---
name|string|required|Identifier of an argument in scope of action group.
defaultValue|string|optional|Data entity that is used by default.

{%endraw%}

