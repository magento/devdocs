---
layout: default
group: mftf
title: Action groups in the Magento Functional Testing Framework cests
version: 2.2
github_link: magento-functional-testing-framework/cest/action-groups.md
functional_areas:
 - Testing
---


## Overview


## Principles

* One `*ActionGroup.xml`, one `<actionGroup>`
* File name ends with `ActionGroup`. Example: `LoginToAdminActionGroup.xml`
* File name and `<actionGroup>` name are equal

## Example

```xml
<actionGroup name=”LoginToAdmin">
    <arguments>
        <argument name=”adminUser" defaultValue=”defaultAdmin"/>
    </arguments>
    <fillField stepKey=”fillUsername” selector="#username" userInput="{{adminUser.username}}" />
    <fillField stepKey="fillPassword” selector="#password" userInput="{{adminUser.password}}" />
    <click stepKey="click” selector=”#login" />
</actionGroup>
```


```xml
<test name="Test">
    ...
    <actionGroup stepKey=”loginToAdminPanel” ref="LoginToAdmin">
        <argument name=" adminUser" value=”CustomAdminUser” />
    </actionGroup>
    ...
</test>
```


## Available elements

### actionGroup

name	string  : http://www.w3.org/2001/XMLSchema	required

### arguments

### argument

name	string  : http://www.w3.org/2001/XMLSchema	required
defaultValue	string  : http://www.w3.org/2001/XMLSchema	optional

