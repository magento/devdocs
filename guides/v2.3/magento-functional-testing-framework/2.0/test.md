---
layout: default
group: mftf
title: Cest structure in the Magento Functional Testing Framework
version: 2.2
github_link: magento-functional-testing-framework/cest.md
functional_areas:
 - Testing
---

## Overview

Test cases in the MFTF are defined in XML as [tests][test].
Tests is a [Codeception test container][codeception cest] that contains multiple individual tests with metadata and before/after actions.
Tests in the MFTF are considered as a sequence of actions with associated parameters.
Any failed assertion within a test fails the test.

The following diagram demonstrates XML structure of a Cest in the MFTF:

{% include_relative img/test-dia.svg %}

## Format

```xml
<?xml version="1.0" encoding="UTF-8"?>

<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../../../../../vendor/magento/magento2-acceptance-test-framework/src/Magento/FunctionalTestingFramework/Test/etc/testSchema.xsd">
    <cest name="">
        <annotations>
            <features value=""/>
            <stories value=""/>
            <group value=""/>
            <env value=""/>
        </annotations>
        <before>
            <!-- LIST OF ACTIONS -->
            <click selector="" stepKey=""/>
            <!-- ACTION GROUPS -->
            <actionGroup ref="" stepKey="">
                <argument name="" value=""/>
            </actionGroup>       
        </before>
        <after>
            <!-- LIST OF ACTIONS -->
            <click selector="" stepKey=""/>
            <!-- ACTION GROUPS -->
            <actionGroup ref="" stepKey="">
                <argument name="" value=""/>
            </actionGroup>
        </after>
        <test name="">
            <annotations>
                <title value=""/>
                <description value=""/>
                <severity value=""/>
                <testCaseId value=""/>
            </annotations>
            <!-- LIST OF ACTIONS -->
            <click selector="" stepKey=""/>
            <!-- ACTION GROUPS -->
            <actionGroup ref="" stepKey="">
                <argument name="" value=""/>
            </actionGroup>
        </test>
    </cest>
</config>
```

## Principles

* One `*.xml`, one `<cest>`
* File name and `<cest>` name are equal
* All names within the framework are in the CamelCase format
* A test may have any number of assertions, at any point within the `<test>`

## Reference

The following list is reference documentation of elements that may be used in tests.

### tests {#tests-tag}

A container for multiple tests. Logically, it is a group of tests that define test flows within a test case.

It MUST contain at least one [`<test>`][test].

***
***

### test

A set of actions with an assertion.

Attribute|Type|Use|Description
---|---|---|---
name|string|optional|
remove|boolean|optional|Set `true` to remove the test when merging.

It MAY contain [`<annotations>`][annotations], [`<before>`][before], [`<after>`][after], any [action], [`<actionGroup>`][action group]

***
***

### annotations {#annotations-element}

Annotations are supported by both Codeception and Allure.
Codeception annotations typically provide metadata and, also, they are able to influence test selection.
Allure annotations provide metadata for reporting.

Read about annotations in a separate topic [Annotations][annotations].

***
***

### before

Specifies actions to perform before all [tests][test] in a [test].

Attribute|Type|Use|Description
---|---|---|---
name|string|optional|
remove|boolean|optional|

It MAY contain the following child elements:

 * any [action]
 * [`<actionGroup>`][action group]

***
***

### after

Specifies actions to perform after all [tests][test] in a [test].

Attribute|Type|Use|Description
---|---|---|---
name|string|optional|
remove|boolean|optional|

It MAY contain:

 * any [action]
 * [`<actionGroup>`][action group]

***
***

### actionGroup

Calls a corresponding action group.

Attribute|Type|Use|Description
---|---|---|---
ref|string|required|
stepKey|string|required|
remove|boolean|optional|
before|string|optional|
after|string|optional|

It MAY contain [`<argument>`][argument]


***
***

### argument

Sets an argument that is used in parent [action group].

Attribute|Type|Use
---|---|---
name|string|optional
value|string|optional


<!-- LINKS DEFINITIONS -->

[action]: cest/actions.html
[action group]: #actiongroup
[after]: #after
[annotations]: cest/annotations.html
[argument]: #argument
[before]: #before
[test]: #cest
[test]: #test

[Allure]: https://github.com/allure-framework/
[codeception cest]: http://codeception.com/docs/07-AdvancedUsage#Cest-Classes

<!-- Abbreviations -->

*[MFTF]: Magento Functional Testing Framework
