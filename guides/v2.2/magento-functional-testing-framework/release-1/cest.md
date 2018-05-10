---
group: mftf
title: Cest structure in the Magento Functional Testing Framework
version: 2.2
github_link: magento-functional-testing-framework/release-1/cest.md
functional_areas:
 - Testing
redirect_from:
    - guides/v2.2/magento-functional-testing-framework/cest.html
    - guides/v2.2/magento-functional-testing-framework/1.0/cest.html
mftf-release: 1.0.0
---

_This topic was updated due to the {{page.mftf-release}} MFTF release._
{: style="text-align: right"}

## Overview

Test cases in the MFTF are defined in XML as [cests][cest].
A Cest is [Codeception test container][codeception cest] that contains multiple individual tests with cest-level metadata and before/after actions with dependency management.
Tests in the MFTF are considered as a sequence of actions with associated parameters.
Any failed assertion within a test fails that test and the MFTF reports it using [Allure].

The following diagram demonstrates XML structure of a Cest in the MFTF:

{% include_relative img/cest-dia.svg %}

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

The following list is reference documentation of elements that may be used in Cests.

### cest {#cest-element}

A cest is a Codeception container for multiple tests. Logically, it is a group of tests that define test flows within a test case.

Attribute|Type|Use
---|---|---
name|string|required

It MUST contain at least one [`<test>`][test].

It MAY contain [`<annotations>`][annotations], [`<before>`][before], [`<after>`][after].

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

Specifies actions to perform before all [tests][test] in a [cest].

Attribute|Type|Use|Description
---|---|---|---
name|string|optional|
remove|boolean|optional|

It MAY contain the following child elements:

 * any [action]
 * [`<actionGroup>`][action group tag]

***
***

### after

Specifies actions to perform after all [tests][test] in a [cest].

Attribute|Type|Use|Description
---|---|---|---
name|string|optional|
remove|boolean|optional|

It MAY contain:

 * any [action]
 * [`<actionGroup>`][action group tag]

***
***

### test

A set of actions with an assertion.

Attribute|Type|Use|Description
---|---|---|---
name|string|optional|
remove|boolean|optional|

It MAY contain:

 * any [action]
 * [`<annotations>`][annotations]
 * [`<actionGroup>`][action group tag]

***
***

### actionGroup

Calls a corresponding [action group].

Attribute|Type|Use|Description
---|---|---|---
ref|string|required|Reference to the required action group by its `name`.
stepKey|string|required|Identifier of the element within `<test>`.
before|string|optional|`<stepKey>` of an action or action group that must be executed next while merging.
after|string|optional|`<stepKey>` of an action or action group that must be executed one step before the current one while merging.

It MAY contain [`<argument>`][argument]


***
***

### argument

Sets an argument that is used in parent [action group tag].

Attribute|Type|Use
---|---|---
name|string|optional
value|string|optional


<!-- LINKS DEFINITIONS -->

[action group tag]: #actiongroup
[after]: #after
[argument]: #argument
[before]: #before
[cest]: #cest
[test]: #test

[action]: ./cest/actions.html
[annotations]: ./cest/annotations.html
[action group]: ./cest/action-groups.html

[Allure]: https://github.com/allure-framework/
[codeception cest]: http://codeception.com/docs/07-AdvancedUsage#Cest-Classes

<!-- Abbreviations -->

*[MFTF]: Magento Functional Testing Framework
