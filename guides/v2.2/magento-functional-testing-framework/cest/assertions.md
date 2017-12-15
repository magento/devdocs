---
layout: default
group: mftf
title: Assertions in the Magento Functional Testing Framework
version: 2.2
github_link: magento-functional-testing-framework/cest/annotations.md
functional_areas:
 - Testing
---

This topic contains general information about assertions in the MFTF and a reference list.

## Overview

Assertions serve to check whether a test returned expected values.

All assertions contain the following attributes (same as actions):

* `stepKey` is a required attribute that stores a unique identifier of the action. Example: `"conditionalClickStep1"`.
* `before` is an optional attribute that Set `stepKey` of an action that must be executed one step before the current one.
* `after` is an optional attribute that Set `stepKey` of an action that must be executed next.

Most assertions contain attribute `message` that specifies text of an informational message to help you to know more about the cause of the failure.

## Principles

## Example



## Available assertions

### assertElementContainsAttribute

Attribute|Type|Use|Description
---|---|---|---
selector|xs:string|required|
expectedValue|xs:string|optional|
attribute|xs:string|required|
variable|xs:string|optional|
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