---
group: mftf
title: Create and use parameterized selectors in the Magento Functional Testing Framework
version: 2.2
github_link: magento-functional-testing-framework/release-1/section/parameterized-selectors.md
functional_areas:
 - Testing
redirect_from: guides/v2.2/magento-functional-testing-framework/section/parameterized-selectors.html
mftf-release: 1.0.0
---

_This topic was updated due to the {{page.mftf-release}} MFTF release._
{: style="text-align: right"}

{%raw%}

## Setting up a selector in section

In a `<section></section>`, create a new `<element/>`.

```xml
<section name="SampleSection">
    <element name="" type="" selector=""/>
</section>
```

Add the attribute `parameterized="true"` to the `<element/>`.

```xml
<section name="SampleSection">
    <element name="" type="" selector="" parameterized="true"/>
</section>
```

In the `selector=""` attribute add your selector.

```xml
<section name="SampleSection">
    <element name="" type="" selector="#element" parameterized="true"/>
</section>
```

### Selector with single variable

For the parameterized part of the selector, add `{{var1}}` to represent the first piece of data that you want to replace.

```xml
<section name="SampleSection">
    <element name="" type="" selector="#element .{{var1}}" parameterized="true"/>
</section>
```

Enter a descriptive name into the `name=""` attribute.

```xml
<section name="SampleSection">
    <element name="oneParamElement" type="" selector="#element .{{var1}}" parameterized="true"/>
</section>
```

In `type`, enter the type of UI element that the `<element/>` represents.

```xml
<section name="SampleSection">
    <element name="oneParamElement" type="text" selector="#element .{{var1}}" parameterized="true"/>
</section>
```

### Selector with multiple variables

For the parameterized part of the selector, add `{{var1}}, {{var2}}, ..., {{varN}}` for each parameter that you need to pass in.

```xml
<section name="SampleSection">
    <element name="threeParamElement" type="text" selector="#element .{{var1}} .{{var2}}" parameterized="true"/>
</section>
```

```xml
<section name="SampleSection">
    <element name="threeParamElement" type="text" selector="#element .{{var1}} .{{var2}}-{{var3}}" parameterized="true"/>
</section>
```

{%
include note.html
type="info"
content="Note that there is no need to use sequential variables like `{{var1}}`, `{{var2}}`.
Parameterized replacement reads variables and maps them to the test call of the element sequentially from left to right, meaning you can use a selector like `#element .{{categoryId}} .{{productId}}`."
%}

## Using a parameterized selector in a test

Create a new [test].

```xml
<test name="SampleTest">

</test>
```

Add an action.

```xml
<test name="SampleTest">
    <click selector="" stepKey="click1"/>
</test>
```

In the `selector=""` attribute, enter `"{{}}"`.

```xml
<test name="SampleTest">
    <click selector="{{}}" stepKey="click1"/>
</test>
```

Inside the `{{}}`, make a reference to the section that the element is assigned to.

```xml
<test name="SampleTest">
    <click selector="{{SampleSection}}" stepKey="click1"/>
</test>
```

Inside the `{{}}`, add name of a parameterized element separated by `"."`

```xml
<test name="SampleTest">
    <click selector="{{SampleSection.threeParamElement}}" stepKey="click1"/>
</test>
```

Inside the `{{}}`, add a set of `"()"` following the parameterized element.

```xml
<test name="SampleTest">
    <click selector="{{SampleSection.threeParamElement()}}" stepKey="click1"/>
</test>
```

Inside of the `()`, add the first parameter that you would like to pass to the selector.

```xml
<test name="SampleTest">
    <click selector="{{SampleSection.threeParamElement(_defaultCategory.is_active)}}" stepKey="click1"/>
</test>
```

Add the 2nd/3rd parameters that you'd like to pass to the selector separated by `, `

```xml
<test name="SampleTest">
    <click selector="{{SampleSection.threeParamElement(_defaultCategory.is_active,'StringLiteral',$createDataKey.id$)}}" stepKey="click1"/>
</test>
```

Any data can be used in parameterized elements as well as entered in test actions like so:

* `_defaultCategory.is_active` is a reference to `<data key="is_active">` in `<entity name="_defaultCategory" ... ></entity>` in the corresponding _.../Data/*.xml_
* `'StringLiteral'` is a literal
* `$createDataKey.id$` is a reference to persisted data created in the `SampleTest1` within action with `stepKey="createDataKey"`
* `{$variable}` is a reference to data returned by a test action, like `<grabValueFrom>`.

{%endraw%}


<!-- LINK DEFINITIONS -->

<!-- Internal -->



<!-- LINK DEFINITIONS -->

<!-- Internal -->

[test]: ../cest.html







