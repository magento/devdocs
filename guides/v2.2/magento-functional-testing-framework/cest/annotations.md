---
layout: default
group: mftf
title: Annotations in the Magento Functional Testing Framework cests
github_link: magento-functional-testing-framework/annotations.md
---

This topic contains a reference list of available annotations in the MFTF cests.

## Overview

Annotations are essentially comments in the code.
(In PHP, they all are marked by a preceding `@` symbol.)
Within an XML test file, annotations are contained within their own node.

## Principles

* All annotations are within an `<annotations>` tag
* Each tag within corresponds to a supported annotation type
* There is no distinction made in XML between Codeception annotations and Allure annotations
* Each annotation tag contains only one value.
If multiple annotation values are supported and required (see `<env>` above) each value requires a separate tag.

## Example

```xml
<annotations>
 
       <features value="Category Creation"/>

       <title value="Create a Category via Admin"/>

       <group value="category"/>

       <env value="chrome"/>

       <env value="firefox"/>

       <env value="phantomjs"/>
 
</annotations>
```

## Available annotations

### env

Specifies the web driver under which the test can run.
There can be multiple `env` annotations to show that the test is compatible with multiple web drivers (e.g Chrome, Firefox, phanotmJS).

Attribute|Type|Use
---|---|--
value|string|required

### features

Sets a string that will be displayed as a **Feature** within the Allure report.
Tests under the same feature are grouped together in the report.

Attribute|Type|Use
---|---|--
value|string|required

### group

Specifies a string to identify and collect tests together.
Any test can be a part of multiple groups.
The purpose of grouping is to create a set of test for a purpose (e.g. all Cart tests, all Slow tests) and run them together.

Attribute|Type|Use
---|---|--
value|string|required

### stories

Same functionality as [`features`](#features), within the **Story** report group.

Attribute|Type|Use
---|---|--
value|string|required

### title

Metadata for report.

Attribute|Type|Use
---|---|--
value|string|required

### description

Metadata for report.

Attribute|Type|Use
---|---|--
value|string|required

### severity

Metadata for report.

Attribute|Type|Use
---|---|--
value|string|required

### testCaseId

Specifies a ZephyrId for a test.
If the linkage is set up correctly in Allure config, the test will have a hyperlink to the Zephyr test case in the report.

[Lean more about setup instructions in Allure](https://github.com/allure-framework/allure1/wiki/Test-Case-ID)

Attribute|Type|Use
---|---|--
value|string|required

### return

Specifies what is returned from a test execution.

Attribute|Type|Use
---|---|--
value|string|required

<!-- Abbreviations -->

*[MFTF]: Magento Functional Testing Framework