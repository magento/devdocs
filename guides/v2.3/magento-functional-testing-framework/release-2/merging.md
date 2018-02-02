---
layout: default
group: mftf
title: Merging in the Magento Functional Testing Framework (release 2)
version: 2.3
github_link: magento-functional-testing-framework/release-2/merging.md
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
Adding of a `<test>` is done by creating a new file, or adding a `<test>` node to an existing `*test.xml` file.

### Remove a test
Tests cannot be removed by deltas. If a test must be skipped due to a module completely invalidating a functionality, you can add the test to the `skip` group.

```xml
<test name="AdminLoginTest">
        <annotations>
            <features value="Admin Login"/>
            <stories value="Login on the Admin Login page"/>
            <title value="You should be able to log into the Magento Admin backend."/>
            <description value="You should be able to log into the Magento Admin backend."/>
            <severity value="CRITICAL"/>
            <testCaseId value="MAGETWO-71572"/>
            <group value="example"/>
            <group value="login"/>
        </annotations>
    <amOnPage url="{{AdminLoginPage.url}}" stepKey="amOnAdminLoginPage"/>
    <fillField selector="{{AdminLoginFormSection.username}}" userInput="{{_ENV.MAGENTO_ADMIN_USERNAME}}" stepKey="fillUsername"/>
    <fillField selector="{{AdminLoginFormSection.password}}" userInput="{{_ENV.MAGENTO_ADMIN_PASSWORD}}" stepKey="fillPassword"/>
    <click selector="{{AdminLoginFormSection.signIn}}" stepKey="clickOnSignIn"/>
    <closeAdminNotification stepKey="closeAdminNotification"/>
    <seeInCurrentUrl url="{{AdminLoginPage.url}}" stepKey="seeAdminLoginUrl"/>
</test>
```

```xml
<test name="AdminLoginTest">
        <annotations>
            <group value="skip"/>
        </annotations>
</test>
```

```xml
<test name="AdminLoginTest">
        <annotations>
            <features value="Admin Login"/>
            <stories value="Login on the Admin Login page"/>
            <title value="You should be able to log into the Magento Admin backend."/>
            <description value="You should be able to log into the Magento Admin backend."/>
            <severity value="CRITICAL"/>
            <testCaseId value="MAGETWO-71572"/>
            <group value="example"/>
            <group value="login"/>
            <group value="skip"/>
        </annotations>
    <amOnPage url="{{AdminLoginPage.url}}" stepKey="amOnAdminLoginPage"/>
    <fillField selector="{{AdminLoginFormSection.username}}" userInput="{{_ENV.MAGENTO_ADMIN_USERNAME}}" stepKey="fillUsername"/>
    <fillField selector="{{AdminLoginFormSection.password}}" userInput="{{_ENV.MAGENTO_ADMIN_PASSWORD}}" stepKey="fillPassword"/>
    <click selector="{{AdminLoginFormSection.signIn}}" stepKey="clickOnSignIn"/>
    <closeAdminNotification stepKey="closeAdminNotification"/>
    <seeInCurrentUrl url="{{AdminLoginPage.url}}" stepKey="seeAdminLoginUrl"/>
</test>
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
<page name="BaseBackendPage" url="admin" area="admin" module="Magento_Backend">
    <section name="BaseBackendSection"/>    
    <section name="AnotherBackendSection"/>
</page>
```

```xml
<page name="BaseBackendPage" url="admin" area="admin" module="Magento_Backend">
    <section name="NewExtensionSection"/>
</page>
```

```xml
<page name="BaseBackendPage" url="admin" area="admin" module="Magento_Backend">
    <section name="BaseBackendSection"/>    
    <section name="AnotherBackendSection"/>
    <section name="NewExtensionSection"/>
</page>
```

### Remove a section

```xml
<page name="BaseBackendPage" url="admin" area="admin" module="Magento_Backend">
    <section name="BaseBackendSection"/>    
    <section name="AnotherBackendSection"/>
</page>
```

```xml
<page name="BaseBackendPage" url="admin" area="admin" module="Magento_Backend">
    <section name="AnotherBackendSection" remove="true"/>
</page>
```

```xml
<page name="BaseBackendPage" url="admin" area="admin" module="Magento_Backend">
    <section name="BaseBackendSection"/>
</page>
```

## Sections merging

### Add an element

```xml
<section name="AdminLoginFormSection">
    <element name="username" type="input" selector="#username"/>
    <element name="password" type="input" selector="#login"/>
    <element name="signIn" type="button" selector=".actions .action-primary" timeout="30"/>
</section>
```

```xml
<section name="AdminLoginFormSection">
    <element name="mergeElement" type="input" selector="#selector"/>
</section>
```

```xml
<section name="AdminLoginFormSection">
    <element name="username" type="input" selector="#username"/>
    <element name="password" type="input" selector="#login"/>
    <element name="signIn" type="button" selector=".actions .action-primary" timeout="30"/>
    <element name="mergeElement" type="input" selector="#selector"/>
</section>
```

### Remove an element

```xml
<section name="AdminLoginFormSection">
    <element name="username" type="input" selector="#username"/>
    <element name="password" type="input" selector="#login"/>
    <element name="signIn" type="button" selector=".actions .action-primary" timeout="30"/>
</section>
```

```xml
<section name="AdminLoginFormSection">
    <element name="username" type="input" remove="true"/>
</section>
```

```xml
<section name="AdminLoginFormSection">
    <element name="password" type="input" selector="#login"/>
    <element name="signIn" type="button" selector=".actions .action-primary" timeout="30"/>
</section>
```

### Update an element

```xml
<section name="AdminLoginFormSection">
    <element name="username" type="input" selector="#username"/>
    <element name="password" type="input" selector="#login"/>
    <element name="signIn" type="button" selector=".actions .action-primary" timeout="30"/>
</section>
```

```xml
<section name="AdminLoginFormSection">
    <element name="username" type="input" selector="#newSelector"/>
</section>
```

```xml
<section name="AdminLoginFormSection">
    <element name="username" type="input" selector="#newSelector"/>
    <element name="password" type="input" selector="#login"/>
    <element name="signIn" type="button" selector=".actions .action-primary" timeout="30"/>
</section>
```

## Data merging

`<data>` elements within an entity are additive; removal of individual `<data>` tags is not supported.

### Add data

```xml
<entity name="sampleData" type="testData">
    <data key="firstField">field1</data>
    <data key="secondField">field2</data>
</entity>
```

```xml
<entity name="sampleData" type="testData">
    <data key="thirdField">field3</data>
</entity>
```

```xml
<entity name="sampleData" type="testData">
    <data key="firstField">field1</data>
    <data key="secondField">field2</data>
    <data key="thirdField">field3</data>
</entity>
```

### Update data

```xml
<entity name="sampleData" type="testData">
    <data key="firstField">field1</data>
    <data key="secondField">field2</data>
</entity>
```

```xml
<entity name="sampleData" type="testData">
    <data key="firstField">overrideField</data>
</entity>
```

```xml
<entity name="sampleData" type="testData">
    <data key="firstField">overrideField</data>
    <data key="secondField">field2</data>
</entity>
```


<!-- LINK DEFINITIONS -->

[Tests]: ./test.html
[Pages]: ./page.html
[Sections]: ./section.html
[Data]: ./data.html
