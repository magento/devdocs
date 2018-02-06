---
layout: default
group: mftf
title: Merging in the Magento Functional Testing Framework
version: 2.3
github_link: magento-functional-testing-framework/release-2/merging.md
functional_areas:
 - Testing
mftf-release: 2.0.2
---

_This topic corresponds to the MFTF {{page.mftf-release}} release._
{: style="text-align: right"}

The MFTF allows you to merge entities defined in XML files such as [Tests], [Pages], [Sections], and [Data].
It is useful for supporting rapid test creation for extensions and customizations.

You can specify changes needed to an existing file and have that merged.
This produces a modification of the original that incorporates the specified changes (the 'delta').

## General

Merging operates on XML tag level.
It is triggered by our parser when there are two (or more) entities with the same name.
Therefore, your change file (file with changes) **must have** the same file name and the same attribute `name` as its base file (target object to be changed).

### Deletion

An action can be removed from the original test.
This is done by using the `<remove>` action and specifying a `stepKey` of the action in the original file to be removed.

## Merging in Tests

### Add a test

Adding of a `<test>` is done by creating a new file, or adding a `<test>` node to an existing `*Test.xml` file.

<!-- **Use case**: Add a test for the `Magento_Foo` module related to your extension implemented in the `Foo_extension` module
`Magento_Foo` -->



### Remove a test

Tests **cannot be removed** while merging.

If a test must be skipped due to a module completely invalidating a functionality, you can add the test to the `skip` group.

Learn more about running tests with different options using [robo] or [codecept] commands.

**Example**:

Skip `AdminLoginTest` test in `.../Backend/Test/AdminLoginTest.xml` while merging with `.../Foo/Test/AdminLoginTest.xml`:

`.../Backend/Test/AdminLoginTest.xml` code:

```xml
<tests ...>
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
</tests>
```

Create `.../Foo/Test/AdminLoginTest.xml`:

```xml
<tests ...>
    <test name="AdminLoginTest">
            <annotations>
                <group value="skip"/>
            </annotations>
    </test>
</tests>
```

The resulted `AdminLoginTest` will correspond to the following code:

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
This means it must include information about where it should be inserted relative to other test steps.
Usually, is is relative to the original, but can reference itself or other change files.

This is done by a `before` or `after` element.
The action can only specify either a before or after.
See the above examples.

#### Add a test step

**Use case**: Add `checkOption` before `click` (`stepKey="clickLogin"`) and `seeInCurrentUrl` after the `click` in the `LogInAsAdminTest` test (in `.../Backend/Test/LogInAsAdminTest.xml`) while merging with `.../Foo/Test/LogInAsAdminTest.xml`

`.../Backend/Test/LogInAsAdminTest.xml` code:

```xml
<tests ...>
    <test name="LogInAsAdminTest">
        <amOnPage url="{{AdminLoginPage}}" stepKey="navigateToAdmin"/>
        <fillField selector="{{AdminLoginFormSection.username}}" userInput="admin" stepKey="fillUsername"/>
        <fillField selector="{{AdminLoginFormSection.password}}" userInput="password" stepKey="fillPassword"/>
        <click selector="{{AdminLoginFormSection.signIn}}" stepKey="clickLogin"/>
        <see userInput="Lifetime Sales" stepKey="seeLifetimeSales"/>
    </test>
</tests>
```

Create `.../Foo/Test/LogInAsAdminTest.xml`:

```xml
<tests ...>
    <test name="LogInAsAdminTest">
        <checkOption selector="{{AdminLoginFormSection.rememberMe}}" stepKey="checkRememberMe" before="clickLogin"/>
        <seeInCurrentUrl url="admin/admin/dashboard/" stepKey="seeAdminUrl" after="clickLogin"/>
    </test>
</tests>
```

The resulted `LogInAsAdminTest` will correspond to the following code:

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

#### Remove a test step

**Use case**: Remove `see` (`stepKey="seeLifetimeSales"`) from the `LogInAsAdminTest` test (in `.../Backend/Test/LogInAsAdminTest.xml`) while merging with `.../Foo/Test/LogInAsAdminTest.xml`

`.../Backend/Test/LogInAsAdminTest.xml` code:

```xml
<tests ...>
    <test name="LogInAsAdminTest">
        <amOnPage url="{{AdminLoginPage}}" stepKey="navigateToAdmin"/>
        <fillField selector="{{AdminLoginFormSection.username}}" userInput="admin" stepKey="fillUsername"/>
        <fillField selector="{{AdminLoginFormSection.password}}" userInput="password" stepKey="fillPassword"/>
        <click selector="{{AdminLoginFormSection.signIn}}" stepKey="clickLogin"/>
        <see userInput="Lifetime Sales" stepKey="seeLifetimeSales"/>
    </test>
</tests>
```

Create `.../Foo/Test/LogInAsAdminTest.xml`:

```xml
<tests ...>
    <test name="LogInAsAdminTest">
        <see stepKey="seeLifetimeSales" remove="true"/>
    </test>
</tests>
```

The resulted `LogInAsAdminTest` will correspond to the following code:

```xml
<test name="LogInAsAdminTest">
    <amOnPage url="{{AdminLoginPage}}" stepKey="navigateToAdmin"/>
    <fillField selector="{{AdminLoginFormSection.username}}" userInput="admin" stepKey="fillUsername"/>
    <fillField selector="{{AdminLoginFormSection.password}}" userInput="password" stepKey="fillPassword"/>
    <click selector="{{AdminLoginFormSection.signIn}}" stepKey="clickLogin"/>
</test>
```

#### Update a test step

**Use case**: Change selector in `fillField` (`stepKey="fillPassword"`) of the `LogInAsAdminTest` test (in `.../Backend/Test/LogInAsAdminTest.xml`) while merging with `.../Foo/Test/LogInAsAdminTest.xml`

```xml
<tests ...>
    <test name="LogInAsAdminTest">
        <amOnPage url="{{AdminLoginPage}}" stepKey="navigateToAdmin"/>
        <fillField selector="{{AdminLoginFormSection.username}}" userInput="admin" stepKey="fillUsername"/>
        <fillField selector="{{AdminLoginFormSection.password}}" userInput="password" stepKey="fillPassword"/>
        <click selector="{{AdminLoginFormSection.signIn}}" stepKey="clickLogin"/>
        <see userInput="Lifetime Sales" stepKey="seeLifetimeSales"/>
    </test>
</tests>
```

Create `.../Foo/Test/LogInAsAdminTest.xml`:

```xml
<tests ...>
    <test name="LogInAsAdminTest">
        <fillField selector="{{AdminLoginFormSection.wrong-password}}" userInput="password" stepKey="fillPassword"/>
    </test>
</tests>
```

The resulted `LogInAsAdminTest` will correspond to the following code:

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

Using merging in [pages][page], you can add or remove [sections][section] defining updates in your module.
To merge [pages][page], the file name and `page name` must be the same as in base model (set in the `module` attribute).

### Add a section

**Use case**: The `FooBackend` module extends the `Backend` module and requires use of two new sections that must be covered with tests.
Add `BaseBackendSection` and `AnotherBackendSection` to the `BaseBackendPage`.

`.../Backend/Page/BaseBackendPage.xml` code:

```xml
<pages ...>
    <page name="BaseBackendPage" url="admin" area="admin" module="Magento_Backend">
        <section name="BaseBackendSection"/>
        <section name="AnotherBackendSection"/>
    </page>
</pages>
```

Create `.../FooBackend/Page/BaseBackendPage.xml`:

```xml
<pages ...>
    <page name="BaseBackendPage" url="admin" area="admin" module="Magento_Backend">
        <section name="NewExtensionSection"/>
    </page>
</pages>
```

The resulted `BaseBackendPage` will correspond to the following code:

```xml
<page name="BaseBackendPage" url="admin" area="admin" module="Magento_Backend">
    <section name="BaseBackendSection"/>    
    <section name="AnotherBackendSection"/>
    <section name="NewExtensionSection"/>
</page>
```

### Remove a section

**Use case**: The `FooBackend` module extends the `Backend` module and requires deletion of `AnotherBackendSection` section.

`.../Backend/Page/BaseBackendPage.xml` code:

```xml
<page name="BaseBackendPage" url="admin" area="admin" module="Magento_Backend">
    <section name="BaseBackendSection"/>    
    <section name="AnotherBackendSection"/>
</page>
```

Create `.../FooBackend/Page/BaseBackendPage.xml`:

```xml
<page name="BaseBackendPage" url="admin" area="admin" module="Magento_Backend">
    <section name="AnotherBackendSection" remove="true"/>
</page>
```

The resulted `BaseBackendPage` will correspond to the following code:

```xml
<page name="BaseBackendPage" url="admin" area="admin" module="Magento_Backend">
    <section name="BaseBackendSection"/>
</page>
```

## Sections merging

If you need to add, remove, or update [elements][element] in sections, you can use merging functionality.
All sections with the same _file name_, _section name_, and _element name_ are merged during test generation.

### Add an element

**Use case**: The `FooBackend` module extends the `Backend` module and requires a new element `mergeElement` in the `AdminLoginFormSection`.
Add `mergeElement` to the `AdminLoginFormSection`.

`.../Backend/Section/AdminLoginFormSection.xml` code:

```xml
<sections ...>
    <section name="AdminLoginFormSection">
        <element name="username" type="input" selector="#username"/>
        <element name="password" type="input" selector="#login"/>
        <element name="signIn" type="button" selector=".actions .action-primary" timeout="30"/>
    </section>
</sections>
```

Create `.../FooBackend/Section/AdminLoginFormSection.xml`:

```xml
<sections ...>
    <section name="AdminLoginFormSection">
        <element name="mergeElement" type="input" selector="#selector"/>
    </section>
</sections>
```

The resulted `AdminLoginFormSection` will correspond to the following code:

```xml
<section name="AdminLoginFormSection">
    <element name="username" type="input" selector="#username"/>
    <element name="password" type="input" selector="#login"/>
    <element name="signIn" type="button" selector=".actions .action-primary" timeout="30"/>
    <element name="mergeElement" type="input" selector="#selector"/>
</section>
```

### Remove an element

**Use case**: The `FooBackend` module extends the `Backend` module and requires deletion of `username` in the `AdminLoginFormSection`.
Remove `username` from the `AdminLoginFormSection`.

`.../Backend/Section/AdminLoginFormSection.xml` code:

```xml
<sections ...>
    <section name="AdminLoginFormSection">
        <element name="username" type="input" selector="#username"/>
        <element name="password" type="input" selector="#login"/>
        <element name="signIn" type="button" selector=".actions .action-primary" timeout="30"/>
    </section>
</sections>
```

Create `.../FooBackend/Section/AdminLoginFormSection.xml`:

```xml
<sections ...>
    <section name="AdminLoginFormSection">
        <element name="username" type="input" remove="true"/>
    </section>
</sections>
```

The resulted `AdminLoginFormSection` will correspond to the following code:

```xml
<section name="AdminLoginFormSection">
    <element name="password" type="input" selector="#login"/>
    <element name="signIn" type="button" selector=".actions .action-primary" timeout="30"/>
</section>
```

### Update an element

**Use case**: The `FooBackend` module extends the `Backend` module and requires change of selector in `username` in the `AdminLoginFormSection`.
Update `username` in the `AdminLoginFormSection`.

`.../Backend/Section/AdminLoginFormSection.xml` code:

```xml
<sections ...>
    <section name="AdminLoginFormSection">
        <element name="username" type="input" selector="#username"/>
        <element name="password" type="input" selector="#login"/>
        <element name="signIn" type="button" selector=".actions .action-primary" timeout="30"/>
    </section>
</sections>
```

Create `.../FooBackend/Section/AdminLoginFormSection.xml`:

```xml
<sections ...>
    <section name="AdminLoginFormSection">
        <element name="username" type="input" selector="#newSelector"/>
    </section>
</sections>
```

The resulted `AdminLoginFormSection` will correspond to the following code:

```xml
<section name="AdminLoginFormSection">
    <element name="username" type="input" selector="#newSelector"/>
    <element name="password" type="input" selector="#login"/>
    <element name="signIn" type="button" selector=".actions .action-primary" timeout="30"/>
</section>
```

## Data merging

You can add or update `<data>` elements within an [entity]. Removal of individual `<data>` tags is not supported.
Entities and data with the same _file name_, _entity name and type_, and _data key_ are merged during test generation.

### Add data

**Use case**: The `FooSample` module extends the `Sample` module and requires a new data item `thirdField` in the `_defaultSample` entity.
Add `<data key="thirdField">field3</data>` to the `_defaultSample`.

`.../Sample/Data/SampleData.xml` code:

```xml
<entities ...>
    <entity name="_defaultSample" type="testData">
        <data key="firstField">field1</data>
        <data key="secondField">field2</data>
    </entity>
</entities>
```

Create `.../FooSample/Data/SampleData.xml`:

```xml
<entities ...>
    <entity name="sampleData" type="testData">
        <data key="thirdField">field3</data>
    </entity>
</entities>
```

The resulted `_defaultSample` will correspond to the following code:

```xml
<entity name="_defaultSample" type="testData">
    <data key="firstField">field1</data>
    <data key="secondField">field2</data>
    <data key="thirdField">field3</data>
</entity>
```

### Update data

**Use case**: The `FooSample` module extends the `Sample` module and requires change of data item `firstField` in the `_defaultSample` entity.
Change `firstField` to `<data key="firstField">overrideField</data>` in the `_defaultSample`.

`.../Sample/Data/SampleData.xml` code:

```xml
<entities ...>
    <entity name="_defaultSample" type="testData">
        <data key="firstField">field1</data>
        <data key="secondField">field2</data>
    </entity>
</entity>
```

Create `.../FooSample/Data/SampleData.xml`:

```xml
<entities ...>
    <entity name="_defaultSample" type="testData">
        <data key="firstField">overrideField</data>
    </entity>
</entity>
```

The resulted `_defaultSample` will correspond to the following code:

```xml
<entity name="_defaultSample" type="testData">
    <data key="firstField">overrideField</data>
    <data key="secondField">field2</data>
</entity>
```


<!-- LINK DEFINITIONS -->

[codecept]: ./commands/codeception.html
[Data]: ./data.html
[Pages]: ./page.html
[robo]: ./commands/robo.html#run-all-functional-tests-excluding-group-skip
[Sections]: ./section.html
[Tests]: ./test.html




