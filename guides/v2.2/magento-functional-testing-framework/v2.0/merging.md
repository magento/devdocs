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
It is useful for supporting rapid test creation for extensions and customizations.

We allow a user to specify their changes needed to an existing file and to have that merged.
This produces a modification of the original that incorporates the specified changes (the 'delta').

## General

Merging operates on XML tag level.
MFTF allows a change file to
     * Specify additional steps to be added
     * The removal of steps from original.

The items in the change file must specify the order in which they should be merged.

Merging is triggered by our parser when there are two (or more) entities with the same name.
Therefore, your change file must have the same name attribute as it's target object to be changed.

### Sequencing

Any change must specify it's sequence.
This means it must include information about where it should be inserted relative to other test steps - usually relative to the original, but can reference itself or other change files.

This is done by a `before` or after `element`. See the above example.
The action can only specify either a before or after.

### Deletion

An action can be removed from the original test.
This is done by using the <remove> action and specifying the stepKey of the action in the original file to be removed.

## Merging in Cests

### Remove a cest



### Add a test

### Remove a test

### Change a test

#### Add an action

#### Remove an action

#### Change an action

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

## Pages merging

### Add a section

### Remove a section

## Sections merging

### Add an element

### Remove an element

### Change an element

## Data merging

### Add data

### Remove data

### Change data


<!-- LINK DEFINITIONS -->

[Cests]: cest.html
[Pages]: page.html
[Sections]: section.html
[Data]: data.html