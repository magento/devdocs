---
group: mftf
title: Use Codeception's Locator Functions in the Magento Functional Testing Framework
version: 2.2
github_link: magento-functional-testing-framework/release-1/section/locator-functions.md
functional_areas:
 - Testing
redirect_from: guides/v2.2/magento-functional-testing-framework/section/locator-functions.html
mftf-release: 1.0.0
---

_This topic was updated due to the {{page.mftf-release}} MFTF release._
{: style="text-align: right"}

{%raw%}

## Defining Locator::functions in Elements

Codeception has a set of very useful [Locator Functions] that may be used by elements inside a [section].

Declaration of an element with a `locatorFunction` can be done as follows:
```xml
<element name="simpleLocator" type="button" locatorFunction="Locator::contains('label', 'Name')"/>
```
When using the `locatorFunction`, you can also omit `Locator::` for code simplicity.
```xml
<element name="simpleLocatorShorthand" type="button" locatorFunction="contains('label', 'Name')"/>
```
An element's `locatorFunction` can also be parameterized the same way as [parameterized selectors].
```xml
<element name="simpleLocatorTwoParam" type="button" locatorFunction="contains({{arg1}}, {{arg2}})" parameterized="true"/>
```
Lastly, an element **cannot** have both a `selector` and a `locatorFunction`.

## Calling Elements that use locatorFunction

Given the above element definitions, we call the elements in a test just like any other element.

No special reference is required, as you are still just referring to an `element` inside a `section`. 

```xml
<test name="LocatorFuctionTest">
    <click stepKey="SimpleLocator" selector="{{LocatorFunctionSection.simpleLocator}}"/>
    <click stepKey="TwoParamLiteral" selector="{{LocatorFunctionSection.simpleLocatorTwoParam('string1', 'string2')}}"/>
</test>
```

{%endraw%}


<!-- LINK DEFINITIONS -->

<!-- Internal -->

[section]: ../section.html
[parameterized selectors]: parameterized-selectors.html

<!-- External -->
[Locator Functions]: http://codeception.com/docs/reference/Locator