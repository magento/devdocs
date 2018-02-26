---
layout: default
group: mftf
title: Action groups in the Magento Functional Testing Framework
version: 2.2
github_link: magento-functional-testing-framework/release-2/test/action-groups.md
functional_areas:
 - Testing
mftf-release: 2.1.0
---

_This topic was updated due to the {{page.mftf-release}} MFTF release._
{: style="text-align: right"}

In the MFTF, you can re-use a group of [actions]{:target="_blank"}—such as logging in as an administrator or a customer—declared in an XML file when you need to perform the same sequence of actions multiple times.

The following diagram demonstrates XML structure of an action group:

{% include_relative img/action-groups-dia.svg %}

## Principles

-  All action groups are declared in XML files and stored in the _\<module\>/ActionGroup/_ directory.
-  Every file name ends with `ActionGroup`, such as _LoginToAdminActionGroup.xml_.
-  The file name and  the [`<actionGroup>`] name are the same.

The following is an example of the XML format for the `actionGroups` declaration:

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

## Example
{%raw%}
The following examples build a declaration for a group of actions that grant authorization to the Admin area and uses the declaration in a test. The _Backend/ActionGroup/LoginToAdminActionGroup.xml_ action group relates to the functionality of the _Backend_ module. In [test]{:target="_blank"}, the name and identifier of the action group is used as a reference in `ref` parameter, such as `ref="LoginToAdminActionGroup"`.

### To create the action group declaration:

1.  Begin with a template for the action group:  _Backend/ActionGroup/LoginToAdminActionGroup.xml_

    ```xml
    <?xml version="1.0" encoding="UTF-8"?>

    <actionGroups xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
            xsi:noNamespaceSchemaLocation="../../../../../../vendor/magento/magento2-functional-testing-framework/src/Magento/FunctionalTestingFramework/Test/etc/testSchema.xsd">
        <actionGroup name="LoginToAdminActionGroup">
    ...
        </actionGroup>
    </actionGroups>
    ```

1.  Add actions to the `actionGroup` arguments.

    ```xml
    <actionGroup name="LoginToAdminActionGroup">
        <fillField stepKey="fillUsername" selector="#username" userInput="{{adminUser.username}}" />
        <fillField stepKey="fillPassword" selector="#password" userInput="{{adminUser.password}}" />
        <click stepKey="click" selector="#login" />
    </actionGroup>
    ```

1.  The `userInput`variable must contain a data value for test. Add a default data value for the variable to use in the most common cases. For this example, the default value is `_defaultAdmin`.

    ```xml
    <argument name="adminUser" defaultValue="_defaultAdmin"/>
    ```

1.  The following code shows the completed declaration.

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

### To use the declaration in a test:
In this test example, we want to add the following set of actions:

```xml
<fillField stepKey="fillUsername" selector="#username" userInput="{{CustomAdminUser.username}}" />
<fillField stepKey="fillPassword" selector="#password" userInput="{{CustomAdminUser.password}}" />
<click stepKey="click" selector="#login" />
```

Instead of adding this set of actions, you can use the _LoginToAdminActionGroup_ action group declaration in tests.

1.  Reference the `LoginToAdminActionGroup` action group.

    ```xml
    <actionGroup stepKey="loginToAdminPanel" ref="LoginToAdminActionGroup"/>
    ```

1.  Update the argument **name** and **value** pair to `adminUser` and `CustomAdminUser`.

    ```xml
    <actionGroup stepKey="loginToAdminPanel" ref="LoginToAdminActionGroup">
        <argument name="adminUser" value="CustomAdminUser" />
    </actionGroup>
    ```

## Data type usage

By default, an [`argument`][argument] expects an entire _entity_ when the `type` value is not defined; however, there are cases when you use a string instead of a whole entity.

The following defines the `argument` of the `actionGroup` using a primitive data type:

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

The above code tells the `actionGroup` that the replacement argument `relevantString` expects a string as a `value` when it is used in a test.
This allows you to pass singular pieces of data for use in the `actionGroup` in the middle of a test, instead of passing in an entire entity.
Let's see several examples of the above `fillExample` action group usage in test.
In all examples the value expects a string.

When `value` in a test is defined explicitly:

```xml
<actionGroup stepKey="fillWithStringLiteral" ref="fillExample">
    <argument name="relevantString" value="overrideString" />
</actionGroup>
```

The same is true for persisted data references.

```xml
<actionGroup stepKey="fillWithStringLiteral" ref="fillExample">
    <argument name="relevantString" value="$persistedData.field1$" />
</actionGroup>
```

Here the value points to the entity [created]{:target="_blank"} somewhere previously on test step `stepKey="persistedData"` where the `field1` data contains the required string.

To make use of data entity resolution, you must still name the argument's `type="entity"`. Even if you have a data entity with a name `myCustomEntity`, passing in the following will cause MFTF to interpret it as the string `myCustomEntity.field1`.

```xml
<actionGroup stepKey="fillWithXmlData" ref="fillExample">
    <argument name="relevantString" value="myCustomEntity.field1" />
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
name|string|required|Identifier of an argument in scope of the corresponding action group.
defaultValue|string|optional|Data value that is used by default.
type|Possible values: `string`, `entity` (default).|optional|Defines what type of data the argument is supposed to be. Defaults to `entity`.

{%endraw%}

<!-- LINK DEFINITIONS -->

[`<actionGroup>`]: #actiongroup-tag
[argument]: #argument-tag

[actions]: ./actions.html
[created]: ../data.html#persisting-a-data-entity-as-a-prerequisite-of-a-test
[test]: ../test.html
