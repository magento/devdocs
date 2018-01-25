---
layout: default
group: mftf
title: Merging in the Magento Functional Testing Framework
version: 2.3
github_link: magento-functional-testing-framework/2.0/merging.md
functional_areas:
 - Testing
---

The MFTF allows you to merge entities defined in XML files such as [Tests], [Pages], [Sections], and [Data].
It is useful for supporting rapid test creation for extensions and customizations.

We allow a user to specify their changes needed to an existing file and to have that merged.
This produces a modification of the original that incorporates the specified changes (the 'delta').

## General

Merging operates on XML tag level. It is triggered by our parser when there are two (or more) entities with the same name.
Therefore, your change file (file with changes) must have the same file name and the same attribute `name`  as its base file (target object to be changed).

### Deletion

An action can be removed from the original test.
This is done by using the `<remove>` action and specifying a `stepKey` of the action in the original file to be removed.

## Merging in Tests

### Add a test

```xml
base
```

```xml
update
```

```xml
Result
```

### Remove a test

```xml
base
```

```xml
update
```

```xml
Result
```

### Update a test

Any change must specify it's sequence.
This means it must include information about where it should be inserted relative to other test steps - usually relative to the original, but can reference itself or other change files.

This is done by a `before` or after `element`. See the above example.
The action can only specify either a before or after.

#### Add an action

Test:

```xml
<test name="LogInAsAdminTest">
    <amOnPage url="{{AdminLoginPage}}" stepKey="navigateToAdmin"/>
    <fillField selector="{{AdminLoginFormSection.username}}" userInput="admin" stepKey="fillUsername"/>
    <fillField selector="{{AdminLoginFormSection.password}}" userInput="password" stepKey="fillPassword"/>
    <click selector="{{AdminLoginFormSection.signIn}}" stepKey="clickLogin"/>
    <see userInput="Lifetime Sales" stepKey="seeLifetimeSales"/>
</test>
```

Update:

```xml
<test name="LogInAsAdminTest">
    <checkOption selector="{{AdminLoginFormSection.rememberMe}}" stepKey="checkRememberMe" before="clickLogin"/>
    <seeInCurrentUrl url="admin/admin/dashboard/" stepKey="seeAdminUrl" after="clickLogin"/>
</test>
```

Result

```xml
<test name="LogInAsAdminTest">
    <amOnPage url="{{AdminLoginPage}}" stepKey="navigateToAdmin"/>
    <fillField selector="{{AdminLoginFormSection.username}}" userInput="admin" stepKey="fillUsername"/>
    <fillField selector="{{AdminLoginFormSection.password}}" userInput="password" stepKey="fillPassword"/>
    <checkOption selector="{{AdminLoginFormSection.rememberMe}}" stepKey="checkRememberMe"/>
    <click selector="{{AdminLoginFormSection.signIn}}" stepKey="clickLogin"/>
    <seeInCurrentUrl url="admin/admin/dashboard/" stepKey="seeAdminUrl"/>
    <see userInput="Lifetime Sales" stepKey="seeLifetimeSales"/>
</test>
```

#### Remove an action

Test:

```xml
<test name="LogInAsAdminTest">
    <amOnPage url="{{AdminLoginPage}}" stepKey="navigateToAdmin"/>
    <fillField selector="{{AdminLoginFormSection.username}}" userInput="admin" stepKey="fillUsername"/>
    <fillField selector="{{AdminLoginFormSection.password}}" userInput="password" stepKey="fillPassword"/>
    <click selector="{{AdminLoginFormSection.signIn}}" stepKey="clickLogin"/>
    <see userInput="Lifetime Sales" stepKey="seeLifetimeSales"/>
</test>
```

Update:

```xml
<test name="LogInAsAdminTest">
    <see stepKey="seeLifetimeSales" remove="true"/>
</test>
```

Result

```xml
<test name="LogInAsAdminTest">
    <amOnPage url="{{AdminLoginPage}}" stepKey="navigateToAdmin"/>
    <fillField selector="{{AdminLoginFormSection.username}}" userInput="admin" stepKey="fillUsername"/>
    <fillField selector="{{AdminLoginFormSection.password}}" userInput="password" stepKey="fillPassword"/>
    <click selector="{{AdminLoginFormSection.signIn}}" stepKey="clickLogin"/>
</test>
```

#### Update an action

Test:

```xml
<test name="LogInAsAdminTest">
    <amOnPage url="{{AdminLoginPage}}" stepKey="navigateToAdmin"/>
    <fillField selector="{{AdminLoginFormSection.username}}" userInput="admin" stepKey="fillUsername"/>
    <fillField selector="{{AdminLoginFormSection.password}}" userInput="password" stepKey="fillPassword"/>
    <click selector="{{AdminLoginFormSection.signIn}}" stepKey="clickLogin"/>
    <see userInput="Lifetime Sales" stepKey="seeLifetimeSales"/>
</test>
```

Update:

```xml
<test name="LogInAsAdminTest">
    <fillField selector="{{AdminLoginFormSection.wrong-password}}" userInput="password" stepKey="fillPassword"/>
</test>
```

Result

```xml
<test name="LogInAsAdminTest">
    <amOnPage url="{{AdminLoginPage}}" stepKey="navigateToAdmin"/>
    <fillField selector="{{AdminLoginFormSection.username}}" userInput="admin" stepKey="fillUsername"/>
    <fillField selector="{{AdminLoginFormSection.wrong-password}}" userInput="password" stepKey="fillPassword"/>
    <click selector="{{AdminLoginFormSection.signIn}}" stepKey="clickLogin"/>
    <see userInput="Lifetime Sales" stepKey="seeLifetimeSales"/>
</test>
```

## Pages merging

### Add a section

```xml
base
```

```xml
update
```

```xml
Result
```

### Remove a section

```xml
base
```

```xml
update
```

```xml
Result
```

## Sections merging

### Add an element

```xml
base
```

```xml
update
```

```xml
Result
```

### Remove an element

```xml
base
```

```xml
update
```

```xml
Result
```

### Update an element

```xml
base
```

```xml
update
```

```xml
Result
```

## Data merging

### Add data

```xml
base
```

```xml
update
```

```xml
Result
```

### Remove data

```xml
base
```

```xml
update
```

```xml
Result
```

### Update data

```xml
base
```

```xml
update
```

```xml
Result
```


<!-- LINK DEFINITIONS -->

[Tests]: ./test.html
[Pages]: ./page.html
[Sections]: ./section.html
[Data]: ./data.html