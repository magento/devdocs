---
mftf-release: 2.3.0
redirect_from: /guides/v2.3/magento-functional-testing-framework/2.3/test/assertions.html
---

# Assertions

_This topic was updated due to the {{page.mftf-release}} MFTF release._
{: style="text-align: right"}

Assertions serve to pass or fail the [test](../test.html#test-tag) if a condition is not met. These assertions will look familiar to you if you've used any other testing framework, like PHPUnit.

All assertions contain the same [common actions attributes](./actions.html#common-attributes): `stepKey`, `before`, and `after`.

Most assertions contain a `message` attribute that specifies the text of an informational message to help you identify the cause of the failure.

## Principles

The [principles for actions](../test.html#principles) are also applicable to assertions.

Assertion actions have nested self-descriptive elements, `<expectedResult>` and `<actualResult>`. These elements contain a result type and a value:
* `type`
	* `const` (default)
	* `int`
	* `float`
	* `bool`
	* `string`
	* `variable`
	* `array`
* `value`

If `variable` is used, the test transforms the corresponding value to `$variable`. Use the `stepKey` of a test, that returns the value you want to use, in assertions:

`actual="stepKeyOfGrab" actualType="variable"`

To use variables embedded in a string in `expected` and `actual` of your assertion, use the `{$stepKey}` format:

`actual="A long assert string {$stepKeyOfGrab} with an embedded variable reference." actualType="variable"`

## Example

The following example shows a common test that gets text from a page and asserts that it matches what we expect to see. If it does not, the test will fail at the assert step.

```xml
<!-- Grab a value from the page using any grab action -->
<grabTextFrom selector="#elementId" stepKey="stepKeyOfGrab"/>

<!-- Ensure that the value we grabbed matches our expectation -->
<assertEquals message="This is an optional human readable hint that will be shown in the logs if this assert fails." stepKey="assertEquals1">
   <expectedResult type="string">Some String</expectedResult>
   <actualResult type="string">A long assert string {$stepKeyOfGrab} with an embedded variable reference.</actualResult>
</assertEquals>
```

## Elements reference

### assertElementContainsAttribute

Example:

```xml
<assertElementContainsAttribute selector=".admin__menu-overlay" attribute="style" expectedValue="color: #333;" stepKey="assertElementContainsAttribute"/>
```

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|required|
`expectedValue`|string|optional| A value of the expected result.
`attribute`|string|required|
`stepKey`|string|required| A unique identifier of the text step.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of the preceding action.

### assertArrayIsSorted

The `<assertArrayIsSorted>` asserts that the array is sorted according to a specified sort order, ascending or descending.

Example:

```xml
<assertArrayIsSorted sortOrder="asc" stepKey="assertSorted">
    <array>[1,2,3,4,5,6,7]</array>
</assertArrayIsSorted>
```

Attribute|Type|Use|Description
---|---|---|---
`sortOrder`|Possible values: `asc`, `desc`|required| A sort order to assert on array values.
`stepKey`|string|required| A unique identifier of the test step.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of the preceding action.

It contains an `<array>` child element that specifies an array to be asserted for proper sorting.
It must be in typical array format like `[1,2,3,4,5]` or `[alpha, brontosaurus, zebra]`.

### assertArrayHasKey

See [assertArrayHasKey docs on codeception.com](http://codeception.com/docs/modules/Asserts#assertArrayHasKey){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
`expected`|string|required| A value of the expected result.
`expectedType`|string|optional| A type of the expected result. Possible values: `const` (default), `int`, `float`, `bool`, `string`, `variable`, `array`.
`actual`|string|required| A value of the actual result.
`actualType`|string|optional| A type of the actual result. Possible values: `const` (default), `int`, `float`, `bool`, `string`, `variable`, `array`.
`message`|string|optional|Text of informational message about a cause of failure.
`stepKey`|string|required| A unique identifier of the text step.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of the preceding action.

### assertArrayNotHasKey

See [assertArrayNotHasKey docs on codeception.com](http://codeception.com/docs/modules/Asserts#assertArrayNotHasKey){:target='_blank'}.

Attribute|Type|Use|Description
---|---|---|---
`expected`|string|required| A value of the expected result.
`expectedType`|string|optional| A type of the expected result. Possible values: `const` (default), `int`, `float`, `bool`, `string`, `variable`, `array`.
`actual`|string|required| A value of the actual result.
`actualType`|string|optional| A type of the actual result. Possible values: `const` (default), `int`, `float`, `bool`, `string`, `variable`, `array`.
`message`|string|optional|Text of informational message about a cause of failure.
`stepKey`|string|required| A unique identifier of the text step.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of the preceding action.

### assertArraySubset

See [assertArraySubset docs on codeception.com](http://codeception.com/docs/modules/Asserts#assertArraySubset){:target='_blank'}.

Attribute|Type|Use|Description
---|---|---|---
`expected`|string|required| A value of the expected result.
`expectedType`|string|optional| A type of the expected result. Possible values: `const` (default), `int`, `float`, `bool`, `string`, `variable`, `array`.
`actual`|string|required| A value of the actual result.
`actualType`|string|optional| A type of the actual result. Possible values: `const` (default), `int`, `float`, `bool`, `string`, `variable`, `array`.
`strict`|boolean|optional|
`message`|string|optional|Text of informational message about a cause of failure.
`stepKey`|string|required| A unique identifier of the text step.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of the preceding action.

### assertContains

See [assertContains docs on codeception.com](http://codeception.com/docs/modules/Asserts#assertContains){:target='_blank'}.

Attribute|Type|Use|Description
---|---|---|---
`expected`|string|required| A value of the expected result.
`expectedType`|string|optional| A type of the expected result. Possible values: `const` (default), `int`, `float`, `bool`, `string`, `variable`, `array`.
`actual`|string|required| A value of the actual result.
`actualType`|string|optional| A type of the actual result. Possible values: `const` (default), `int`, `float`, `bool`, `string`, `variable`, `array`.
`message`|string|optional|Text of informational message about a cause of failure.
`stepKey`|string|required| A unique identifier of the text step.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of the preceding action.

### assertCount

See [assertCount docs on codeception.com](http://codeception.com/docs/modules/Asserts#assertCount){:target='_blank'}.

Attribute|Type|Use|Description
---|---|---|---
`expected`|string|required| A value of the expected result.
`expectedType`|string|optional| A type of the expected result. Possible values: `const` (default), `int`, `float`, `bool`, `string`, `variable`, `array`.
`actual`|string|required| A value of the actual result.
`actualType`|string|optional| A type of the actual result. Possible values: `const` (default), `int`, `float`, `bool`, `string`, `variable`, `array`.
`message`|string|optional|Text of informational message about a cause of failure.
`stepKey`|string|required| A unique identifier of the text step.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of the preceding action.

### assertEmpty

See [assertEmpty docs on codeception.com](http://codeception.com/docs/modules/Asserts#assertEmpty){:target='_blank'}.

Attribute|Type|Use|Description
---|---|---|---
`actual`|string|required| A value of the actual result.
`actualType`|string|optional| A type of the actual result. Possible values: `const` (default), `int`, `float`, `bool`, `string`, `variable`, `array`.
`message`|string|optional|Text of informational message about a cause of failure.
`stepKey`|string|required| A unique identifier of the text step.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of the preceding action.

### assertEquals

See [assertEquals docs on codeception.com](http://codeception.com/docs/modules/Asserts#assertEquals){:target='_blank'}.

Attribute|Type|Use|Description
---|---|---|---
`expected`|string|required| A value of the expected result.
`expectedType`|string|optional| A type of the expected result. Possible values: `const` (default), `int`, `float`, `bool`, `string`, `variable`, `array`.
`actual`|string|required| A value of the actual result.
`actualType`|string|optional| A type of the actual result. Possible values: `const` (default), `int`, `float`, `bool`, `string`, `variable`, `array`.
`delta`|string|optional|
`message`|string|optional|Text of informational message about a cause of failure.
`stepKey`|string|required| A unique identifier of the text step.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of the preceding action.

### assertFalse

See [assertFalse docs on codeception.com](http://codeception.com/docs/modules/Asserts#assertFalse){:target='_blank'}.

Attribute|Type|Use|Description
---|---|---|---
`actual`|string|required| Actual value.
`actualType`|assertEnum|optional| Type of actual value.
`message`|string|optional|Text of informational message about a cause of failure.
`stepKey`|string|required| A unique identifier of the text step.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of the preceding action.

### assertFileExists

See [assertFileExists docs on codeception.com](http://codeception.com/docs/modules/Asserts#assertFileExists){:target='_blank'}.

Attribute|Type|Use|Description
---|---|---|---
`actual`|string|required| A value of the actual result.
`actualType`|string|optional| A type of the actual result. Possible values: `const` (default), `int`, `float`, `bool`, `string`, `variable`, `array`.
`message`|string|optional|Text of informational message about a cause of failure.
`stepKey`|string|required| A unique identifier of the text step.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of the preceding action.

### assertFileNotExists

See [assertFileNotExists docs on codeception.com](http://codeception.com/docs/modules/Asserts#assertFileNotExists){:target='_blank'}.

Attribute|Type|Use|Description
---|---|---|---
`actual`|string|required| A value of the actual result.
`actualType`|string|optional| A type of the actual result. Possible values: `const` (default), `int`, `float`, `bool`, `string`, `variable`, `array`.
`message`|string|optional|Text of informational message about a cause of failure.
`stepKey`|string|required| A unique identifier of the text step.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of the preceding action.

### assertGreaterOrEquals

See [assertGreaterOrEquals docs on codeception.com](http://codeception.com/docs/modules/Asserts#assertGreaterOrEquals){:target='_blank'}.

Attribute|Type|Use|Description
---|---|---|---
`expected`|string|required| A value of the expected result.
`expectedType`|string|optional| A type of the expected result. Possible values: `const` (default), `int`, `float`, `bool`, `string`, `variable`, `array`.
`actual`|string|required| A value of the actual result.
`actualType`|string|optional| A type of the actual result. Possible values: `const` (default), `int`, `float`, `bool`, `string`, `variable`, `array`.
`message`|string|optional|Text of informational message about a cause of failure.
`stepKey`|string|required| A unique identifier of the text step.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of the preceding action.

### assertGreaterThan

See [assertGreaterThan docs on codeception.com](http://codeception.com/docs/modules/Asserts#assertGreaterThan){:target='_blank'}.

Attribute|Type|Use|Description
---|---|---|---
`expected`|string|required| A value of the expected result.
`expectedType`|string|optional| A type of the expected result. Possible values: `const` (default), `int`, `float`, `bool`, `string`, `variable`, `array`.
`actual`|string|required| A value of the actual result.
`actualType`|string|optional| A type of the actual result. Possible values: `const` (default), `int`, `float`, `bool`, `string`, `variable`, `array`.
`message`|string|optional|Text of informational message about a cause of failure.
`stepKey`|string|required| A unique identifier of the text step.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of the preceding action.

### assertGreaterThanOrEqual

See [assertGreaterThanOrEqual docs on codeception.com](http://codeception.com/docs/modules/Asserts#assertGreaterThanOrEqual){:target='_blank'}.

Attribute|Type|Use|Description
---|---|---|---
`expected`|string|required| A value of the expected result.
`expectedType`|string|optional| A type of the expected result. Possible values: `const` (default), `int`, `float`, `bool`, `string`, `variable`, `array`.
`actual`|string|required| A value of the actual result.
`actualType`|string|optional| A type of the actual result. Possible values: `const` (default), `int`, `float`, `bool`, `string`, `variable`, `array`.
`message`|string|optional|Text of informational message about a cause of failure.
`stepKey`|string|required| A unique identifier of the text step.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of the preceding action.

### assertInstanceOf

See [assertInstanceOf docs on codeception.com](http://codeception.com/docs/modules/Asserts#assertInstanceOf){:target='_blank'}.

Attribute|Type|Use|Description
---|---|---|---
`expected`|string|required| A value of the expected result.
`expectedType`|string|optional| A type of the expected result. Possible values: `const` (default), `int`, `float`, `bool`, `string`, `variable`, `array`.
`actual`|string|required| A value of the actual result.
`actualType`|string|optional| A type of the actual result. Possible values: `const` (default), `int`, `float`, `bool`, `string`, `variable`, `array`.
`message`|string|optional|Text of informational message about a cause of failure.
`stepKey`|string|required| A unique identifier of the text step.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of the preceding action.

### assertInternalType

See [assertInternalType docs on codeception.com](http://codeception.com/docs/modules/Asserts#assertInternalType){:target='_blank'}.

Attribute|Type|Use|Description
---|---|---|---
`expected`|string|required| A value of the expected result.
`expectedType`|string|optional| A type of the expected result. Possible values: `const` (default), `int`, `float`, `bool`, `string`, `variable`, `array`.
`actual`|string|required| A value of the actual result.
`actualType`|string|optional| A type of the actual result. Possible values: `const` (default), `int`, `float`, `bool`, `string`, `variable`, `array`.
`message`|string|optional|Text of informational message about a cause of failure.
`stepKey`|string|required| A unique identifier of the text step.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of the preceding action.

### assertIsEmpty

See [assertIsEmpty docs on codeception.com](http://codeception.com/docs/modules/Asserts#assertIsEmpty){:target='_blank'}.

Attribute|Type|Use|Description
---|---|---|---
`actual`|string|required| A value of the actual result.
`actualType`|string|optional| A type of the actual result. Possible values: `const` (default), `int`, `float`, `bool`, `string`, `variable`, `array`.
`message`|string|optional|Text of informational message about a cause of failure.
`stepKey`|string|required| A unique identifier of the text step.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of the preceding action.

### assertLessOrEquals

See [assertLessOrEquals docs on codeception.com](http://codeception.com/docs/modules/Asserts#assertLessOrEquals){:target='_blank'}.

Attribute|Type|Use|Description
---|---|---|---
`expected`|string|required| A value of the expected result.
`expectedType`|string|optional| A type of the expected result. Possible values: `const` (default), `int`, `float`, `bool`, `string`, `variable`, `array`.
`actual`|string|required| A value of the actual result.
`actualType`|string|optional| A type of the actual result. Possible values: `const` (default), `int`, `float`, `bool`, `string`, `variable`, `array`.
`message`|string|optional|Text of informational message about a cause of failure.
`stepKey`|string|required| A unique identifier of the text step.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of the preceding action.

### assertLessThan

See [assertLessThan docs on codeception.com](http://codeception.com/docs/modules/Asserts#assertLessThan){:target='_blank'}.

Attribute|Type|Use|Description
---|---|---|---
`expected`|string|required| A value of the expected result.
`expectedType`|string|optional| A type of the expected result. Possible values: `const` (default), `int`, `float`, `bool`, `string`, `variable`, `array`.
`actual`|string|required| A value of the actual result.
`actualType`|string|optional| A type of the actual result. Possible values: `const` (default), `int`, `float`, `bool`, `string`, `variable`, `array`.
`message`|string|optional|Text of informational message about a cause of failure.
`stepKey`|string|required| A unique identifier of the text step.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of the preceding action.

### assertLessThanOrEqual

See [assertLessThanOrEqual docs on codeception.com](http://codeception.com/docs/modules/Asserts#assertLessThanOrEqual){:target='_blank'}.

Attribute|Type|Use|Description
---|---|---|---
`expected`|string|required| A value of the expected result.
`expectedType`|string|optional| A type of the expected result. Possible values: `const` (default), `int`, `float`, `bool`, `string`, `variable`, `array`.
`actual`|string|required| A value of the actual result.
`actualType`|string|optional| A type of the actual result. Possible values: `const` (default), `int`, `float`, `bool`, `string`, `variable`, `array`.
`message`|string|optional|Text of informational message about a cause of failure.
`stepKey`|string|required| A unique identifier of the text step.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of the preceding action.

### assertNotContains

See [assertNotContains docs on codeception.com](http://codeception.com/docs/modules/Asserts#assertNotContains){:target='_blank'}.

Attribute|Type|Use|Description
---|---|---|---
`expected`|string|required| A value of the expected result.
`expectedType`|string|optional| A type of the expected result. Possible values: `const` (default), `int`, `float`, `bool`, `string`, `variable`, `array`.
`actual`|string|required| A value of the actual result.
`actualType`|string|optional| A type of the actual result. Possible values: `const` (default), `int`, `float`, `bool`, `string`, `variable`, `array`.
`message`|string|optional|Text of informational message about a cause of failure.
`stepKey`|string|required| A unique identifier of the text step.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of the preceding action.

### assertNotEmpty

See [assertNotEmpty docs on codeception.com](http://codeception.com/docs/modules/Asserts#assertNotEmpty){:target='_blank'}.

Attribute|Type|Use|Description
---|---|---|---
`actual`|string|required| A value of the actual result.
`actualType`|string|optional| A type of the actual result. Possible values: `const` (default), `int`, `float`, `bool`, `string`, `variable`, `array`.
`message`|string|optional|Text of informational message about a cause of failure.
`stepKey`|string|required| A unique identifier of the text step.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of the preceding action.

### assertNotEquals

See [assertNotEquals docs on codeception.com](http://codeception.com/docs/modules/Asserts#assertNotEquals){:target='_blank'}.

Attribute|Type|Use|Description
---|---|---|---
`expected`|string|required| A value of the expected result.
`expectedType`|string|optional| A type of the expected result. Possible values: `const` (default), `int`, `float`, `bool`, `string`, `variable`, `array`.
`actual`|string|required| A value of the actual result.
`actualType`|string|optional| A type of the actual result. Possible values: `const` (default), `int`, `float`, `bool`, `string`, `variable`, `array`.
`delta`|string|optional|
`message`|string|optional|Text of informational message about a cause of failure.
`stepKey`|string|required| A unique identifier of the text step.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of the preceding action.

### assertNotInstanceOf

See [assertNotInstanceOf docs on codeception.com](http://codeception.com/docs/modules/Asserts#assertNotInstanceOf){:target='_blank'}.

Attribute|Type|Use|Description
---|---|---|---
`expected`|string|required| A value of the expected result.
`expectedType`|string|optional| A type of the expected result. Possible values: `const` (default), `int`, `float`, `bool`, `string`, `variable`, `array`.
`actual`|string|required| A value of the actual result.
`actualType`|string|optional| A type of the actual result. Possible values: `const` (default), `int`, `float`, `bool`, `string`, `variable`, `array`.
`message`|string|optional|Text of informational message about a cause of failure.
`stepKey`|string|required| A unique identifier of the text step.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of the preceding action.

### assertNotNull

See [assertNotNull docs on codeception.com](http://codeception.com/docs/modules/Asserts#assertNotNull){:target='_blank'}.

Attribute|Type|Use|Description
---|---|---|---
`actual`|string|required| A value of the actual result.
`actualType`|string|optional| A type of the actual result. Possible values: `const` (default), `int`, `float`, `bool`, `string`, `variable`, `array`.
`message`|string|optional|Text of informational message about a cause of failure.
`stepKey`|string|required| A unique identifier of the text step.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of the preceding action.

### assertNotRegExp

See [assertNotRegExp docs on codeception.com](http://codeception.com/docs/modules/Asserts#assertNotRegExp){:target='_blank'}.

Attribute|Type|Use|Description
---|---|---|---
`expected`|string|required| A value of the expected result.
`expectedType`|string|optional| A type of the expected result. Possible values: `const` (default), `int`, `float`, `bool`, `string`, `variable`, `array`.
`actual`|string|required| A value of the actual result.
`actualType`|string|optional| A type of the actual result. Possible values: `const` (default), `int`, `float`, `bool`, `string`, `variable`, `array`.
`message`|string|optional|Text of informational message about a cause of failure.
`stepKey`|string|required| A unique identifier of the text step.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of the preceding action.

### assertNotSame

See [assertNotSame docs on codeception.com](http://codeception.com/docs/modules/Asserts#assertNotSame){:target='_blank'}.

Attribute|Type|Use|Description
---|---|---|---
`expected`|string|required| A value of the expected result.
`expectedType`|string|optional| A type of the expected result. Possible values: `const` (default), `int`, `float`, `bool`, `string`, `variable`, `array`.
`actual`|string|required| A value of the actual result.
`actualType`|string|optional| A type of the actual result. Possible values: `const` (default), `int`, `float`, `bool`, `string`, `variable`, `array`.
`message`|string|optional|Text of informational message about a cause of failure.
`stepKey`|string|required| A unique identifier of the text step.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of the preceding action.

### assertNull

See [assertNull docs on codeception.com](http://codeception.com/docs/modules/Asserts#assertNull){:target='_blank'}.

Attribute|Type|Use|Description
---|---|---|---
`actual`|string|required| A value of the actual result.
`actualType`|string|optional| A type of the actual result. Possible values: `const` (default), `int`, `float`, `bool`, `string`, `variable`, `array`.
`message`|string|optional|Text of informational message about a cause of failure.
`stepKey`|string|required| A unique identifier of the text step.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of the preceding action.

### assertRegExp

See [assertRegExp docs on codeception.com](http://codeception.com/docs/modules/Asserts#assertRegExp){:target='_blank'}.

Attribute|Type|Use|Description
---|---|---|---
`expected`|string|required| A value of the expected result.
`expectedType`|string|optional| A type of the expected result. Possible values: `const` (default), `int`, `float`, `bool`, `string`, `variable`, `array`.
`actual`|string|required| A value of the actual result.
`actualType`|string|optional| A type of the actual result. Possible values: `const` (default), `int`, `float`, `bool`, `string`, `variable`, `array`.
`message`|string|optional|Text of informational message about a cause of failure.
`stepKey`|string|required| A unique identifier of the text step.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of the preceding action.

### assertSame

See [assertSame docs on codeception.com](http://codeception.com/docs/modules/Asserts#assertSame){:target='_blank'}.

Attribute|Type|Use|Description
---|---|---|---
`expected`|string|required| A value of the expected result.
`expectedType`|string|optional| A type of the expected result. Possible values: `const` (default), `int`, `float`, `bool`, `string`, `variable`, `array`.
`actual`|string|required| A value of the actual result.
`actualType`|string|optional| A type of the actual result. Possible values: `const` (default), `int`, `float`, `bool`, `string`, `variable`, `array`.
`message`|string|optional|Text of informational message about a cause of failure.
`stepKey`|string|required| A unique identifier of the text step.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of the preceding action.

### assertStringStartsNotWith

See [assertStringStartsNotWith docs on codeception.com](http://codeception.com/docs/modules/Asserts#assertStringStartsNotWith){:target='_blank'}.

Attribute|Type|Use|Description
---|---|---|---
`expected`|string|required| A value of the expected result.
`expectedType`|string|optional| A type of the expected result. Possible values: `const` (default), `int`, `float`, `bool`, `string`, `variable`, `array`.
`actual`|string|required| A value of the actual result.
`actualType`|string|optional| A type of the actual result. Possible values: `const` (default), `int`, `float`, `bool`, `string`, `variable`, `array`.
`message`|string|optional|Text of informational message about a cause of failure.
`stepKey`|string|required| A unique identifier of the text step.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of the preceding action.

### assertStringStartsWith

See [assertStringStartsWith docs on codeception.com](http://codeception.com/docs/modules/Asserts#assertStringStartsWith){:target='_blank'}.

Attribute|Type|Use|Description
---|---|---|---
`expected`|string|required| A value of the expected result.
`expectedType`|string|optional| A type of the expected result. Possible values: `const` (default), `int`, `float`, `bool`, `string`, `variable`, `array`.
`actual`|string|required| A value of the actual result.
`actualType`|string|optional| A type of the actual result. Possible values: `const` (default), `int`, `float`, `bool`, `string`, `variable`, `array`.
`message`|string|optional|Text of informational message about a cause of failure.
`stepKey`|string|required| A unique identifier of the text step.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of the preceding action.

### assertTrue

See [assertTrue docs on codeception.com](http://codeception.com/docs/modules/Asserts#assertTrue){:target='_blank'}.

Attribute|Type|Use|Description
---|---|---|---
`actual`|string|required| A value of the actual result.
`actualType`|string|optional| A type of the actual result. Possible values: `const` (default), `int`, `float`, `bool`, `string`, `variable`, `array`.
`message`|string|optional|Text of informational message about a cause of failure.
`stepKey`|string|required| A unique identifier of the text step.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of the preceding action.

### expectException

See [expectException docs on codeception.com](http://codeception.com/docs/modules/WebDriver#expectException){:target='_blank'}.

Attribute|Type|Use|Description
---|---|---|---
`expected`|string|required| A value of the expected result.
`expectedType`|string|optional| A type of the expected result. Possible values: `const` (default), `int`, `float`, `bool`, `string`, `variable`, `array`.
`actual`|string|required| A value of the actual result.
`actualType`|string|optional| A type of the actual result. Possible values: `const` (default), `int`, `float`, `bool`, `string`, `variable`, `array`.
`stepKey`|string|required| A unique identifier of the text step.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of the preceding action.

### fail

See [fail docs on codeception.com](http://codeception.com/docs/modules/WebDriver#fail){:target='_blank'}.

Attribute|Type|Use|Description
---|---|---|---
`message`|string|required|
`stepKey`|string|required| A unique identifier of the text step.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of the preceding action.
