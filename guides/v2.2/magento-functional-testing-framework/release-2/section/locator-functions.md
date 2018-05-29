---
group: mftf
title: Use Codeception's Locator functions
version: 2.2
github_link: magento-functional-testing-framework/release-2/section/locator-functions.md
functional_areas:
 - Testing
mftf-release: 2.0.2
---

_This topic was updated due to the {{page.mftf-release}} MFTF release._
{: style="text-align: right"}

{%raw%}

## Define Locator::functions in elements

Codeception has a set of very useful [Locator functions](http://codeception.com/docs/reference/Locator) that may be used by elements inside a [section](../section.html).

Declare an element with a `locatorFunction`:
```xml
<element name="simpleLocator" type="button" locatorFunction="Locator::contains('label', 'Name')"/>
```

When using the `locatorFunction`, omit `Locator::` for code simplicity:

```xml
<element name="simpleLocatorShorthand" type="button" locatorFunction="contains('label', 'Name')"/>
```

An element's `locatorFunction` can also be parameterized the same way as [parameterized selectors](./parameterized-selectors.html):

```xml
<element name="simpleLocatorTwoParam" type="button" locatorFunction="contains({{arg1}}, {{arg2}})" parameterized="true"/>
```

An element cannot, however, have both a `selector` and a `locatorFunction`.

## Call Elements that use locatorFunction

Given the above element definitions, you call the elements in a test just like any other element. No special reference is required, as you are still just referring to an `element` inside a `section`:

```xml
<test name="LocatorFuctionTest">
    <click selector="{{LocatorFunctionSection.simpleLocator}}" stepKey="SimpleLocator"/>
    <click selector="{{LocatorFunctionSection.simpleLocatorTwoParam('string1', 'string2')}}" stepKey="TwoParamLiteral"/>
</test>
```

{%endraw%}
