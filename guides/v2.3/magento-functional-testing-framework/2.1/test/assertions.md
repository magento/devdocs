---
layout: default
group: mftf
title: Assertions in the Magento Functional Testing Framework
version: 2.3
github_link: magento-functional-testing-framework/2.1/test/assertions.md
functional_areas:
 - Testing
---

This topic contains general information about assertions in the MFTF and the reference list of available assertions.

## Overview

Assertions serve to pass or fail the test if a condition is not met. These assertions will look familiar to you if you've used any other framework like PHPUnit.

All assertions contain the following attributes (same as actions):

* `stepKey` is a required attribute that stores a unique identifier of the action. Example: `"conditionalClickStep1"`.
* `before` is an optional attribute that Set `stepKey` of an action that must be executed one step before the current one.
* `after` is an optional attribute that Set `stepKey` of an action that must be executed next.

Most assertions contain attribute `message` that specifies text of an informational message to help you to know more about the cause of the failure.

## Principles

`stepKey` value format principles:

* Must be unique within [`<test>`](../cest.html#test)
* Naming should be as descriptive as possible
  * Should describe the action performed
  * Should briefly describe the purpose
  * May describe which data is in use
* Should be in camelCase with lowercase first letter
* Should be the last attribute of an element

Assertion actions have a nested `<expectedResult>` and `<actualResult>`. These elements contain the expected and actual:
* `type`
* `value`

`type` can be any of the following:
* int
* float
* bool
* string
* variable
* array
* const

If `variable` is used, the corresponding value reference uses PHP language style like `{$nameOfStepKey}`. See the example below.

## Example

In this very common test writing example we are grabbing text from a page and then asserting that it matches what we expect to see. If it does not, the test will fail at the assert step.

```xml
<!-- Grab a value from the page using any grab action -->
<grabTextFrom selector="#elementId" stepKey="stepKeyOfGrab"/>

<!-- Ensure that the value we grabbed matches our expectation -->
<assertEquals stepKey="assertEquals1"  message="This is an optional human readable hint that will be shown in the logs if this assert fails.">
    <expectedResult type="string">Some String</expectedResult>
    <actualResult type="string">{$stepKeyOfGrab}</actualResult>
</assertEquals>
```

## Reference

<!--
TODO: though this old schema below is still valid, there were a lot of changes that would cause the below to be incomplete. Personally I think we should provide examples of the new schema only. If you need code samples, in MQE-559 magento2-functional-testing-framework/dev/tests/verification/TestModule/Test/AssertTest.xml has an example of each assert.
-->

<!-- Abbreviations -->
*[MFTF]: Magento Functional Testing Framework
