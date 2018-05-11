---
group: mftf
title: Action groups
version: 2.2
github_link: magento-functional-testing-framework/release-2/test/action-groups.md
functional_areas:
 - Testing
mftf-release: 2.1.0
---

_This topic was updated due to the {{page.mftf-release}} MFTF release._
{: style="text-align: right"}

In the MFTF, you can re-use a group of [actions](./actions.html){:target="_blank"}, such as logging in as an administrator or a customer, declared in an XML file when you need to perform the same sequence of actions multiple times.

The following diagram shows the structure of an MFTF action group:

{% include_relative img/action-groups-dia.svg %}

## Principles

The following conventions apply to MFTF action groups:

-  All action groups are declared in XML files and stored in the _\<module\>/ActionGroup/_ directory.
-  Every file name ends with `ActionGroup`, such as `LoginToAdminActionGroup.xml`.
-  The file name and the [`<actionGroup>`](#actiongroup-tag) name are the same.

The XML format for the `actionGroups` declaration is:

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

These examples build a declaration for a group of actions that grant authorization to the Admin area, and use the declaration in a test.

The _Backend/ActionGroup/LoginToAdminActionGroup.xml_ `<actionGroup>` relates to the functionality of the _Backend_ module. In [test](../test.html), the name and identifier of the `<actionGroup>` is used as a reference in the `ref` parameter, such as `ref="LoginToAdminActionGroup"`.

### Create an action group declaration

To create the `<actionGroup>` declaration:

1.  Begin with a _Backend/ActionGroup/LoginToAdminActionGroup.xml_ template for the `<actionGroup>`:

    ```xml
    <?xml version="1.0" encoding="UTF-8"?>

    <actionGroups xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
            xsi:noNamespaceSchemaLocation="../../../../../../vendor/magento/magento2-functional-testing-framework/src/Magento/FunctionalTestingFramework/Test/etc/testSchema.xsd">
        <actionGroup name="LoginToAdminActionGroup">
    ...
        </actionGroup>
    </actionGroups>
    ```

1.  Add actions to the `actionGroup` arguments:

    ```xml
    <actionGroup name="LoginToAdminActionGroup">
        <fillField stepKey="fillUsername" selector="#username" userInput="{{adminUser.username}}" />
        <fillField stepKey="fillPassword" selector="#password" userInput="{{adminUser.password}}" />
        <click stepKey="click" selector="#login" />
    </actionGroup>
    ```

1.  The `userInput` variable must contain a data value for test. Add a default data value for the variable to use in the most common cases. For this example, the default value is `_defaultAdmin`.

    ```xml
    <argument name="adminUser" defaultValue="_defaultAdmin"/>
    ```

1.  The following example shows the complete declaration:

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

### Use the declaration in a test

In this test example, we want to add the following set of actions:

```xml
<fillField stepKey="fillUsername" selector="#username" userInput="{{CustomAdminUser.username}}" />
<fillField stepKey="fillPassword" selector="#password" userInput="{{CustomAdminUser.password}}" />
<click stepKey="click" selector="#login" />
```

Instead of adding this set of actions, use the _LoginToAdminActionGroup_ `<actionGroup>` declaration in tests:

1.  Reference the `LoginToAdminActionGroup` action group:

    ```xml
    <actionGroup stepKey="loginToAdminPanel" ref="LoginToAdminActionGroup"/>
    ```

1.  Update the argument name/value pair to `adminUser` and `CustomAdminUser`:

    ```xml
    <actionGroup stepKey="loginToAdminPanel" ref="LoginToAdminActionGroup">
        <argument name="adminUser" value="CustomAdminUser"/>
    </actionGroup>
    ```

## Data type usage

By default, an [`argument`](#argument-tag) expects an entire `entity` when the `type` value is not defined. There are cases when you use a string instead of a whole entity.

For example, the following defines the replacement argument `relevantString` using a primitive data type:

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

The `string` argument type provides a method to pass a single piece of data to the `<actionGroup>`during a test instead of passing an entire entity.

**To explicitly define the argument value**:

```xml
<actionGroup stepKey="fillWithStringLiteral" ref="fillExample">
    <argument name="relevantString" value="overrideString"/>
</actionGroup>
```

**To define the argument value using persisted data references**:

```xml
<actionGroup stepKey="fillWithStringLiteral" ref="fillExample">
    <argument name="relevantString" value="$persistedData.field1$"/>
</actionGroup>
```

**To define the argument value based on data entity resolution**:

Create an argument of `type="entity"`. The argument value points to an entity and string pair [created](../data.html#persisting-a-data-entity-as-a-prerequisite-of-a-test){:target="_blank"}  in a previous `stepKey="persistedData"` test step. The `field1` data contains the required string. Even with the `myCustomEntity` data entity, MFTF interprets the `myCustomEntity.field1` value as a string.

```xml
<actionGroup stepKey="fillWithXmlData" ref="fillExample">
    <argument name="relevantString" value="myCustomEntity.field1"/>
</actionGroup>
```

## Elements reference

### actionGroups {#actiongroups-tag}

The `<actionGroups>` element is a root element that contains XML configuration attributes.

Attribute|Value|Description
---|---|---
`xmlns:xsi`|`"http://www.w3.org/2001/XMLSchema-instance"`|Tells the XML parser to validate this document against a schema.
`xsi:noNamespaceSchemaLocation`|`"../../../../../../vendor/magento/magento2-functional-testing-framework/src/Magento/FunctionalTestingFramework/Test/etc/testSchema.xsd"`|Relative path to the corresponding schema.

It may contain one or more `<actionGroup>`.

### actionGroup {#actiongroup-tag}

Attribute|Type|Use|Description
---|---|---|---
`name`|string|required|Identifier of the action group.

It may contain `<arguments>`.

### arguments {#arguments-tag}

The `<arguments>` element is a wrapper for an array of `<argument>` elements.

### argument {#argument-tag}

Attribute|Type|Use|Description
---|---|---|---
`name`|string|required|Identifier of an argument in the scope of the corresponding action group.
`defaultValue`|string|optional|Provides a default data value.
`type`|Possible values: `string`, `entity` (default).|optional|Defines the argument data type; Defaults to `entity`.

{%endraw%}

