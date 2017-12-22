---
layout: default
group: mftf
title: Merging in the Magento Functional Testing Framework
version: 2.2
github_link: magento-functional-testing-framework/merging.md
functional_areas:
 - Testing
---

The MFTF allows you to merge entities defined in XML files such as [Cests], [Pages], [Sections], and [Data].
This will be used to support rapid test creation for extensions and customizations.

We allow a user to specify their changes needed to an existing file and to have that merged. This produces a modification of the original that incorporates the specified changes (the 'delta').

Merging operates on XML tag level. MFTF allows a change file to
     * Specify additional steps to be added
     * The removal of steps from original.
The items in the change file must specify the order in which they should be merged.
Merging is triggered by our parser when there are two (or more) entities with the same name. Therefore, your change file must have the same name attribute as it's target object to be changed.

## Example

Original test

```xml
<test name="LogInAsAdminTest">
    <amOnPage url="{{AdminLoginPage}}" mergeKey="navigateToAdmin"/>
    <fillField selector="{{AdminLoginFormSection.username}}" userInput="admin" mergeKey="fillUsername"/>
    <fillField selector="{{AdminLoginFormSection.password}}" userInput="admin123" mergeKey="fillPassword"/>
    <click selector="{{AdminLoginFormSection.signIn}}" mergeKey="clickLogin"/>
    <see userInput="Lifetime Sales" mergeKey="seeLifetimeSales"/>
</test>
```

Test update


```xml
<test name="LogInAsAdminTest">
    <checkOption selector="{{AdminLoginFormSection.rememberMe}}" mergeKey="checkRememberMe" before="clickLogin"/>
    <seeInCurrentUrl url="admin/admin/dashboard/" mergeKey="seeAdminUrl" after="clickLogin"/>
    <see mergeKey="seeLifetimeSales" remove="true"/>
</test>
```

<!-- LINK DEFINITIONS -->

[Cests]: cest.html
[Pages]: page.html
[Sections]: section.html
[Data]: data.html