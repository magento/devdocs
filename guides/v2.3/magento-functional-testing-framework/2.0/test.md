---
layout: default
group: mftf
title: Tests in the Magento Functional Testing Framework
version: 2.3
github_link: magento-functional-testing-framework/2.0/test.md
functional_areas:
 - Testing
---

## Overview

Test cases in the MFTF are defined in XML as [tests][test].
Tests is a [Codeception test container][codeception] that contains multiple individual tests with metadata and before/after actions.
Tests in the MFTF are considered as a sequence of actions with associated parameters.
Any failed assertion within a test fails the test.

The following diagram demonstrates XML structure of a test case in the MFTF:

{% include_relative img/test-dia.svg %}

## Format

```xml
<?xml version="1.0" encoding="UTF-8"?>

<tests xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:noNamespaceSchemaLocation="../../../../../../vendor/magento/magento2-functional-testing-framework/src/Magento/FunctionalTestingFramework/Test/etc/testSchema.xsd">
    <tests name="">
        <annotations>
            <features value=""/>
            <stories value=""/>
            <group value=""/>
        </annotations>
        <test name="">
            <annotations>
                <!-- TEST ANNOTATIONS -->
            </annotations>
            <before>
                <!-- ACTIONS AND ACTION GROUPS PERFORMED BEFORE THE TEST -->
            </before>
            <after>
                <!-- ACTIONS AND ACTION GROUPS PERFORMED AFTER THE TEST -->
            </after>
            <!-- TEST ACTIONS AND ACTION GROUPS -->
        </test>
    </tests>
</config>
```

## Principles

* One `*.xml`, one `<tests>`
* File name and `<tests>` name are equal
* All names within the framework are in the CamelCase format
* Each action and action group has its own identifier `<stepKey>` to be able to reference on it
* A test may have any number of [assertions], at any point within the `<test>`

## Reference

Reference documentation with details about XML elements that may be used in tests.

### tests {#tests-tag}

A container for multiple tests. Logically, it is a group of tests that define test flows within a test case.

It MUST contain at least one [`<test>`][test].

***
***

### test

A set of actions with an assertion.

Attribute|Type|Use|Description
---|---|---|---
name|string|optional| Test identifier used while merging.
remove|boolean|optional|Set `true` to remove the test when merging.

It MAY contain [`<annotations>`][annotations], [`<before>`][before], [`<after>`][after], any [action], [`<actionGroup>`][action group tag]

***
***

### annotations {#annotations-element}

Annotations are supported by both [Codeception][codeception] and [Allure].
Codeception annotations typically provide metadata. Also, they are able to influence test selection.
Allure annotations provide metadata for reporting.

Read about annotations in a separate topic [Annotations][annotations].

***
***

### before

Wraps actions to perform before the [test].

It MAY contain the following child elements:

 * any [action]
 * [`<actionGroup>`][action group tag]

***
***

### after

Wraps actions to perform after the [test].

It MAY contain:

 * any [action]
 * [`<actionGroup>`][action group tag]

***
***

### actionGroup

Calls a corresponding [action group].

Attribute|Type|Use|Description
---|---|---|---
ref|string|required|Reference to the required action group by its `name`.
stepKey|string|required| Identifier of the element within `<test>`.
before|string|optional|
after|string|optional|

It MAY contain [`<argument>`][argument]

***
***

### argument

Sets an argument that is used in parent [`<actionGroup>`][action group tag].

Attribute|Type|Use
---|---|---
name|string|optional
value|string|optional


<!-- LINKS DEFINITIONS -->

[action]: cest/actions.html
[action group]: test/action-group.html
[action group tag]: #actiongroup
[after]: #after
[annotations]: cest/annotations.html
[argument]: #argument
[assertions]: test/assertions.html
[before]: #before
[test]: #cest
[test]: #test

[Allure]: https://github.com/allure-framework/
[codeception]: http://codeception.com/docs/07-AdvancedUsage

<!-- Abbreviations -->

*[MFTF]: Magento Functional Testing Framework
