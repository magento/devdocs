---
mftf-release: 2.3.7
redirect_from: /guides/v2.3/magento-functional-testing-framework/2.3/test/action-groups.html
---

# Action groups

_This topic was updated due to the {{page.mftf-release}} MFTF release._
{: style="text-align: right"}

In the MFTF, you can re-use a group of [actions](./actions.html){:target="_blank"}, such as logging in as an administrator or a customer, declared in an XML file when you need to perform the same sequence of actions multiple times.

The following diagram shows the structure of an MFTF action group:

{% include_relative img/action-groups-dia.svg %}

## Principles

The following conventions apply to MFTF action groups:

- All action groups are declared in XML files and stored in the `<module>/ActionGroup/` directory.
- Every file name ends with `ActionGroup`, such as `LoginToAdminActionGroup`.

The XML format for the `actionGroups` declaration is:

```xml
<?xml version="1.0" encoding="UTF-8"?>

<actionGroups xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="urn:magento:mftf:Test/etc/actionGroupSchema.xsd">
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

{% raw %}

These examples build a declaration for a group of actions that grant authorization to the Admin area, and use the declaration in a test.

The _Backend/ActionGroup/LoginToAdminActionGroup.xml_ `<actionGroup>` relates to the functionality of the _Backend_ module.
In [test](../test.html), the name and identifier of the `<actionGroup>` is used as a reference in the `ref` parameter, such as `ref="LoginToAdminActionGroup"`.

### Create an action group declaration

To create the `<actionGroup>` declaration:

1. Begin with a _Backend/ActionGroup/LoginToAdminActionGroup.xml_ template for the `<actionGroup>`:

    ```xml
    <?xml version="1.0" encoding="UTF-8"?>

    <actionGroups xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
            xsi:noNamespaceSchemaLocation="urn:magento:mftf:Test/etc/actionGroupSchema.xsd">
        <actionGroup name="LoginToAdminActionGroup">
    ...
        </actionGroup>
    </actionGroups>
    ```

1. Add actions to the `actionGroup` arguments:

    ```xml
    <actionGroup name="LoginToAdminActionGroup">
        <fillField stepKey="fillUsername" selector="#username" userInput="{{adminUser.username}}" />
        <fillField stepKey="fillPassword" selector="#password" userInput="{{adminUser.password}}" />
        <click stepKey="click" selector="#login" />
    </actionGroup>
    ```

1. The `userInput` variable must contain a data value for test.
   Add a default data value for the variable to use in the most common cases.
   For this example, the default value is `_defaultAdmin`.

    ```xml
    <argument name="adminUser" defaultValue="_defaultAdmin"/>
    ```

1. The following example shows the complete declaration:

    ```xml
    <?xml version="1.0" encoding="UTF-8"?>

    <actionGroups xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
            xsi:noNamespaceSchemaLocation="urn:magento:mftf:Test/etc/actionGroupSchema.xsd">
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

1. Reference the `LoginToAdminActionGroup` action group:

    ```xml
    <actionGroup stepKey="loginToAdminPanel" ref="LoginToAdminActionGroup"/>
    ```

1. Update the argument name/value pair to `adminUser` and `CustomAdminUser`:

    ```xml
    <actionGroup stepKey="loginToAdminPanel" ref="LoginToAdminActionGroup">
        <argument name="adminUser" value="CustomAdminUser"/>
    </actionGroup>
    ```

## Data type usage

By default, an [`argument`](#argument-tag) expects an entire `entity` when the `type` value is not defined.
There are cases when you use a string instead of a whole entity.

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

### Explicitly define the argument value

```xml
<actionGroup stepKey="fillWithStringLiteral" ref="fillExample">
    <argument name="relevantString" value="overrideString"/>
</actionGroup>
```

### Use persisted data references to define the argument value

```xml
<actionGroup stepKey="fillWithStringLiteral" ref="fillExample">
    <argument name="relevantString" value="$persistedData.field1$"/>
</actionGroup>
```

The `relevantString` argument value points to the data [created](../data.html#persist-data){:target="_blank"} in the `stepKey="persistedData"` test step.
`field1` is a data key of the required data string.
Even with the `persistedData` data entity, the MFTF interprets the `$persistedData.field1$` value as a string.

### Define the argument value based on data entity resolution

The argument value points to a piece of data defined in a `data.xml` file.
The `field1` data contains the required string.
MFTF resolves `{{myCustomEntity.field1}}` the same as it would in a `selector` or `userInput` attribute.

```xml
<actionGroup stepKey="fillWithXmlData" ref="fillExample">
    <argument name="relevantString" value="{{myCustomEntity.field1}}"/>
</actionGroup>
```

## Optimizing action group structures

Structuring properly an action group increases code reusability and readability.

Starting with an action group such as:

```xml
<actionGroup name="CreateCategory">
    <arguments>
        <argument name="categoryEntity" defaultValue="_defaultCategory"/>
    </arguments>
    <seeInCurrentUrl url="{{AdminCategoryPage.url}}" stepKey="seeOnCategoryPage"/>
    <click selector="{{AdminCategorySidebarActionSection.AddSubcategoryButton}}" stepKey="clickOnAddSubCategory"/>
    <see selector="{{AdminHeaderSection.pageTitle}}" userInput="New Category" stepKey="seeCategoryPageTitle"/>
    <fillField selector="{{AdminCategoryBasicFieldSection.CategoryNameInput}}" userInput="{{categoryEntity.name}}" stepKey="enterCategoryName"/>
    <click selector="{{AdminCategorySEOSection.SectionHeader}}" stepKey="openSEO"/>
    <fillField selector="{{AdminCategorySEOSection.UrlKeyInput}}" userInput="{{categoryEntity.name_lwr}}" stepKey="enterURLKey"/>
    <click selector="{{AdminCategoryMainActionsSection.SaveButton}}" stepKey="saveCategory"/>
    <seeElement selector="{{AdminCategoryMessagesSection.SuccessMessage}}" stepKey="assertSuccess"/>
    <seeInTitle userInput="{{categoryEntity.name}}" stepKey="seeNewCategoryPageTitle"/>
    <seeElement selector="{{AdminCategorySidebarTreeSection.categoryInTree(categoryEntity.name)}}" stepKey="seeCategoryInTree"/>
</actionGroup>
```

{: .no-copy}

It can be reworked into more manageable pieces, as below. These smaller steps are easier to read, update, and reuse.

```xml
<actionGroup name="GoToCategoryGridAndAddNewCategory">
    <seeInCurrentUrl url="{{AdminCategoryPage.url}}" stepKey="seeOnCategoryPage"/>
    <click selector="{{AdminCategorySidebarActionSection.AddSubcategoryButton}}" stepKey="clickOnAddSubCategory"/>
    <see selector="{{AdminHeaderSection.pageTitle}}" userInput="New Category" stepKey="seeCategoryPageTitle"/>
</actionGroup>

<actionGroup name="FillInBasicCategoryFields">
    <arguments>
        <argument name="categoryEntity" defaultValue="_defaultCategory"/>
    </arguments>
    <fillField selector="{{AdminCategoryBasicFieldSection.CategoryNameInput}}" userInput="{{categoryEntity.name}}" stepKey="enterCategoryName"/>
    <click selector="{{AdminCategorySEOSection.SectionHeader}}" stepKey="openSEO"/>
    <fillField selector="{{AdminCategorySEOSection.UrlKeyInput}}" userInput="{{categoryEntity.name_lwr}}" stepKey="enterURLKey"/>
</actionGroup>

<actionGroup name="SaveAndVerifyCategoryCreation">
    <click selector="{{AdminCategoryMainActionsSection.SaveButton}}" stepKey="saveCategory"/>
    <seeElement selector="{{AdminCategoryMessagesSection.SuccessMessage}}" stepKey="assertSuccess"/>
    <seeInTitle userInput="{{categoryEntity.name}}" stepKey="seeNewCategoryPageTitle"/>
    <seeElement selector="{{AdminCategorySidebarTreeSection.categoryInTree(categoryEntity.name)}}" stepKey="seeCategoryInTree"/>
</actionGroup>
```

{: .no-copy}

## Elements reference

### actionGroups {#actiongroups-tag}

The `<actionGroups>` element is a root element that contains XML configuration attributes.

Attribute|Value|Description
---|---|---
`xmlns:xsi`|`"http://www.w3.org/2001/XMLSchema-instance"`|Tells the XML parser to validate this document against a schema.
`xsi:noNamespaceSchemaLocation`|`"urn:magento:mftf:Test/etc/actionGroupSchema.xsd"`|Relative path to the corresponding schema.

It may contain one or more `<actionGroup>`.

### actionGroup {#actiongroup-tag}

Attribute|Type|Use|Description
---|---|---|---
`name`|string|required|Identifier of the action group.
`extends`|string|optional|Identifies the action group to extend.

It may contain `<arguments>`.

### arguments {#arguments-tag}

The `<arguments>` element is a wrapper for an array of `<argument>` elements.

### argument {#argument-tag}

Attribute|Type|Use|Description
---|---|---|---
`name`|string|required|Identifier of an argument in the scope of the corresponding action group.
`defaultValue`|string|optional|Provides a default data value.
`type`|Possible values: `string`, `entity` (default).|optional|Defines the argument data type; Defaults to `entity`.

{% endraw %}
