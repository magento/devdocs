---
group: mftf
title: Assertions in the Magento Functional Testing Framework
version: 2.2
github_link: magento-functional-testing-framework/release-1/cest/assertions.md
functional_areas:
 - Testing
redirect_from: guides/v2.2/magento-functional-testing-framework/cest/assertions.html
mftf-release: 1.0.0
---

_This topic was updated due to the {{page.mftf-release}} MFTF release._
{: style="text-align: right"}

This topic contains general information about assertions in the MFTF and the reference list of available assertions.

## Overview

Assertions serve to pass or fail the test if a condition is not met. These assertions will look familiar to you if you've used any other framework like PHPUnit.

All assertions contain same [common actions attributes](./actions.html#common-attributes): `stepKey`, `before`, and `after`.

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

`expectedType` and `actualType` can be:

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
<assertEquals expected="Some String" expectedType="string" actual="{$stepKeyOfGrab}" actualType="variable" message="This is an optional human readable hint that will be shown in the logs if this assert fails." stepKey="assertEquals1"/>
```

## Reference

### assertElementContainsAttribute

Example:

```xml
<assertElementContainsAttribute selector=".admin__menu-overlay" attribute="style" expectedValue="color: #333;" stepKey="assertElementContainsAttribute"/>
```

Attribute|Type|Use|Description
---|---|---|---
selector|xs:string|required|
expectedValue|xs:string|optional|
attribute|xs:string|required|
stepKey|xs:string|required|
before|xs:string|optional|
after|xs:string|optional|


### assertArrayHasKey

[See assertArrayHasKey docs on codeception.com](http://codeception.com/docs/modules/Asserts#assertArrayHasKey){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
expected|xs:string|required|
expectedType|assertEnum|optional|
actual|xs:string|required|
actualType|assertEnum|optional|
message|xs:string|optional|
stepKey|xs:string|required|
before|xs:string|optional|
after|xs:string|optional|

### assertArrayNotHasKey

[See assertArrayNotHasKey docs on codeception.com](http://codeception.com/docs/modules/Asserts#assertArrayNotHasKey){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
expected|xs:string|required|
expectedType|assertEnum|optional|
actual|xs:string|required|
actualType|assertEnum|optional|
message|xs:string|optional|
stepKey|xs:string|required|
before|xs:string|optional|
after|xs:string|optional|

### assertArraySubset

[See assertArraySubset docs on codeception.com](http://codeception.com/docs/modules/Asserts#assertArraySubset){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
expected|xs:string|required|
expectedType|assertEnum|optional|
actual|xs:string|required|
actualType|assertEnum|optional|
strict|xs:boolean|optional|
message|xs:string|optional|
stepKey|xs:string|required|
before|xs:string|optional|
after|xs:string|optional|

### assertContains

[See assertContains docs on codeception.com](http://codeception.com/docs/modules/Asserts#assertContains){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
expected|xs:string|required|
expectedType|assertEnum|optional|
actual|xs:string|required|
actualType|assertEnum|optional|
message|xs:string|optional|
stepKey|xs:string|required|
before|xs:string|optional|
after|xs:string|optional|

### assertCount

[See assertCount docs on codeception.com](http://codeception.com/docs/modules/Asserts#assertCount){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
expected|xs:string|required|
expectedType|assertEnum|optional|
actual|xs:string|required|
actualType|assertEnum|optional|
message|xs:string|optional|
stepKey|xs:string|required|
before|xs:string|optional|
after|xs:string|optional|

### assertEmpty

[See assertEmpty docs on codeception.com](http://codeception.com/docs/modules/Asserts#assertEmpty){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
actual|xs:string|required|
actualType|assertEnum|optional|
message|xs:string|optional|
stepKey|xs:string|required|
before|xs:string|optional|
after|xs:string|optional|

### assertEquals

[See assertEquals docs on codeception.com](http://codeception.com/docs/modules/Asserts#assertEquals){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
expected|xs:string|required|
expectedType|assertEnum|optional|
actual|xs:string|required|
actualType|assertEnum|optional|
delta|xs:string|optional|
message|xs:string|optional|
stepKey|xs:string|required|
before|xs:string|optional|
after|xs:string|optional|

### assertFalse

[See assertFalse docs on codeception.com](http://codeception.com/docs/modules/Asserts#assertFalse){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
actual|xs:string|required|
actualType|assertEnum|optional|
message|xs:string|optional|
stepKey|xs:string|required|
before|xs:string|optional|
after|xs:string|optional|

### assertFileExists

[See assertFileExists docs on codeception.com](http://codeception.com/docs/modules/Asserts#assertFileExists){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
actual|xs:string|required|
actualType|assertEnum|optional|
message|xs:string|optional|
stepKey|xs:string|required|
before|xs:string|optional|
after|xs:string|optional|

### assertFileNotExists

[See assertFileNotExists docs on codeception.com](http://codeception.com/docs/modules/Asserts#assertFileNotExists){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
actual|xs:string|required|
actualType|assertEnum|optional|
message|xs:string|optional|
stepKey|xs:string|required|
before|xs:string|optional|
after|xs:string|optional|

### assertGreaterOrEquals

[See assertGreaterOrEquals docs on codeception.com](http://codeception.com/docs/modules/Asserts#assertGreaterOrEquals){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
expected|xs:string|required|
expectedType|assertEnum|optional|
actual|xs:string|required|
actualType|assertEnum|optional|
message|xs:string|optional|
stepKey|xs:string|required|
before|xs:string|optional|
after|xs:string|optional|

### assertGreaterThan

[See assertGreaterThan docs on codeception.com](http://codeception.com/docs/modules/Asserts#assertGreaterThan){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
expected|xs:string|required|
expectedType|assertEnum|optional|
actual|xs:string|required|
actualType|assertEnum|optional|
message|xs:string|optional|
stepKey|xs:string|required|
before|xs:string|optional|
after|xs:string|optional|

### assertGreaterThanOrEqual

[See assertGreaterThanOrEqual docs on codeception.com](http://codeception.com/docs/modules/Asserts#assertGreaterThanOrEqual){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
expected|xs:string|required|
expectedType|assertEnum|optional|
actual|xs:string|required|
actualType|assertEnum|optional|
message|xs:string|optional|
stepKey|xs:string|required|
before|xs:string|optional|
after|xs:string|optional|

### assertInstanceOf

[See assertInstanceOf docs on codeception.com](http://codeception.com/docs/modules/Asserts#assertInstanceOf){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
expected|xs:string|required|
expectedType|assertEnum|optional|
actual|xs:string|required|
actualType|assertEnum|optional|
message|xs:string|optional|
stepKey|xs:string|required|
before|xs:string|optional|
after|xs:string|optional|

### assertInternalType

[See assertInternalType docs on codeception.com](http://codeception.com/docs/modules/Asserts#assertInternalType){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
expected|xs:string|required|
expectedType|assertEnum|optional|
actual|xs:string|required|
actualType|assertEnum|optional|
message|xs:string|optional|
stepKey|xs:string|required|
before|xs:string|optional|
after|xs:string|optional|

### assertIsEmpty

[See assertIsEmpty docs on codeception.com](http://codeception.com/docs/modules/Asserts#assertIsEmpty){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
actual|xs:string|required|
actualType|assertEnum|optional|
message|xs:string|optional|
stepKey|xs:string|required|
before|xs:string|optional|
after|xs:string|optional|

### assertLessOrEquals

[See assertLessOrEquals docs on codeception.com](http://codeception.com/docs/modules/Asserts#assertLessOrEquals){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
expected|xs:string|required|
expectedType|assertEnum|optional|
actual|xs:string|required|
actualType|assertEnum|optional|
message|xs:string|optional|
stepKey|xs:string|required|
before|xs:string|optional|
after|xs:string|optional|

### assertLessThan

[See assertLessThan docs on codeception.com](http://codeception.com/docs/modules/Asserts#assertLessThan){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
expected|xs:string|required|
expectedType|assertEnum|optional|
actual|xs:string|required|
actualType|assertEnum|optional|
message|xs:string|optional|
stepKey|xs:string|required|
before|xs:string|optional|
after|xs:string|optional|

### assertLessThanOrEqual

[See assertLessThanOrEqual docs on codeception.com](http://codeception.com/docs/modules/Asserts#assertLessThanOrEqual){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
expected|xs:string|required|
expectedType|assertEnum|optional|
actual|xs:string|required|
actualType|assertEnum|optional|
message|xs:string|optional|
stepKey|xs:string|required|
before|xs:string|optional|
after|xs:string|optional|

### assertNotContains

[See assertNotContains docs on codeception.com](http://codeception.com/docs/modules/Asserts#assertNotContains){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
expected|xs:string|required|
expectedType|assertEnum|optional|
actual|xs:string|required|
actualType|assertEnum|optional|
message|xs:string|optional|
stepKey|xs:string|required|
before|xs:string|optional|
after|xs:string|optional|

### assertNotEmpty

[See assertNotEmpty docs on codeception.com](http://codeception.com/docs/modules/Asserts#assertNotEmpty){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
actual|xs:string|required|
actualType|assertEnum|optional|
message|xs:string|optional|
stepKey|xs:string|required|
before|xs:string|optional|
after|xs:string|optional|

### assertNotEquals

[See assertNotEquals docs on codeception.com](http://codeception.com/docs/modules/Asserts#assertNotEquals){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
expected|xs:string|required|
expectedType|assertEnum|optional|
actual|xs:string|required|
actualType|assertEnum|optional|
delta|xs:string|optional|
message|xs:string|optional|
stepKey|xs:string|required|
before|xs:string|optional|
after|xs:string|optional|

### assertNotInstanceOf

[See assertNotInstanceOf docs on codeception.com](http://codeception.com/docs/modules/Asserts#assertNotInstanceOf){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
expected|xs:string|required|
expectedType|assertEnum|optional|
actual|xs:string|required|
actualType|assertEnum|optional|
message|xs:string|optional|
stepKey|xs:string|required|
before|xs:string|optional|
after|xs:string|optional|

### assertNotNull

[See assertNotNull docs on codeception.com](http://codeception.com/docs/modules/Asserts#assertNotNull){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
actual|xs:string|required|
actualType|assertEnum|optional|
message|xs:string|optional|
stepKey|xs:string|required|
before|xs:string|optional|
after|xs:string|optional|

### assertNotRegExp

[See assertNotRegExp docs on codeception.com](http://codeception.com/docs/modules/Asserts#assertNotRegExp){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
expected|xs:string|required|
expectedType|assertEnum|optional|
actual|xs:string|required|
actualType|assertEnum|optional|
message|xs:string|optional|
stepKey|xs:string|required|
before|xs:string|optional|
after|xs:string|optional|

### assertNotSame

[See assertNotSame docs on codeception.com](http://codeception.com/docs/modules/Asserts#assertNotSame){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
expected|xs:string|required|
expectedType|assertEnum|optional|
actual|xs:string|required|
actualType|assertEnum|optional|
message|xs:string|optional|
stepKey|xs:string|required|
before|xs:string|optional|
after|xs:string|optional|

### assertNull

[See assertNull docs on codeception.com](http://codeception.com/docs/modules/Asserts#assertNull){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
actual|xs:string|required|
actualType|assertEnum|optional|
message|xs:string|optional|
stepKey|xs:string|required|
before|xs:string|optional|
after|xs:string|optional|

### assertRegExp

[See assertRegExp docs on codeception.com](http://codeception.com/docs/modules/Asserts#assertRegExp){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
expected|xs:string|required|
expectedType|assertEnum|optional|
actual|xs:string|required|
actualType|assertEnum|optional|
message|xs:string|optional|
stepKey|xs:string|required|
before|xs:string|optional|
after|xs:string|optional|

### assertSame

[See assertSame docs on codeception.com](http://codeception.com/docs/modules/Asserts#assertSame){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
expected|xs:string|required|
expectedType|assertEnum|optional|
actual|xs:string|required|
actualType|assertEnum|optional|
message|xs:string|optional|
stepKey|xs:string|required|
before|xs:string|optional|
after|xs:string|optional|

### assertStringStartsNotWith

[See assertStringStartsNotWith docs on codeception.com](http://codeception.com/docs/modules/Asserts#assertStringStartsNotWith){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
expected|xs:string|required|
expectedType|assertEnum|optional|
actual|xs:string|required|
actualType|assertEnum|optional|
message|xs:string|optional|
stepKey|xs:string|required|
before|xs:string|optional|
after|xs:string|optional|

### assertStringStartsWith

[See assertStringStartsWith docs on codeception.com](http://codeception.com/docs/modules/Asserts#assertStringStartsWith){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
expected|xs:string|required|
expectedType|assertEnum|optional|
actual|xs:string|required|
actualType|assertEnum|optional|
message|xs:string|optional|
stepKey|xs:string|required|
before|xs:string|optional|
after|xs:string|optional|

### assertTrue

[See assertTrue docs on codeception.com](http://codeception.com/docs/modules/Asserts#assertTrue){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
actual|xs:string|required|
actualType|assertEnum|optional|
message|xs:string|optional|
stepKey|xs:string|required|
before|xs:string|optional|
after|xs:string|optional|

### expectException

[See expectException docs on codeception.com](http://codeception.com/docs/modules/WebDriver#expectException){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
expected|xs:string|required|
expectedType|assertEnum|optional|
actual|xs:string|required|
actualType|assertEnum|optional|
stepKey|xs:string|required|
before|xs:string|optional|
after|xs:string|optional|

### fail

[See fail docs on codeception.com](http://codeception.com/docs/modules/WebDriver#fail){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
message|xs:string|required|
stepKey|xs:string|required|
before|xs:string|optional|
after|xs:string|optional|



<!-- Abbreviations -->
*[MFTF]: Magento Functional Testing Framework
