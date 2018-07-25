---
group: mftf
title: Create and use parameterized selectors
version: 2.2
github_link: magento-functional-testing-framework/release-2/section/parameterized-selectors.md
functional_areas:
 - Testing
mftf-release: 2.0.2
---

_This topic was updated due to the {{page.mftf-release}} MFTF release._
{: style="text-align: right"}

{%raw%}
Use the following examples to create and use parameterized selectors in the MFTF.

## Set up a selector in section

Create a new `<element/>` in a `<section></section>`, :

```xml
<section name="SampleSection">
    <element name="" type="" selector=""/>
</section>
```

Add the attribute `parameterized="true"` to the `<element/>`:

```xml
<section name="SampleSection">
    <element name="" type="" selector="" parameterized="true"/>
</section>
```

Add your selector in the `selector=""` attribute:

```xml
<section name="SampleSection">
    <element name="" type="" selector="#element" parameterized="true"/>
</section>
```

### Selector with single variable

For the parameterized part of the selector, add `{{var1}}` to represent the first piece of data that you want to replace:

```xml
<section name="SampleSection">
    <element name="" type="" selector="#element .{{var1}}" parameterized="true"/>
</section>
```

Add a descriptive name in the `name=""` attribute:

```xml
<section name="SampleSection">
    <element name="oneParamElement" type="" selector="#element .{{var1}}" parameterized="true"/>
</section>
```

Add the type of UI element that the `<element/>` represents in `type`:

```xml
<section name="SampleSection">
    <element name="oneParamElement" type="text" selector="#element .{{var1}}" parameterized="true"/>
</section>
```

### Selector with multiple variables

For the parameterized part of the selector, add `{{var1}}, {{var2}}, ..., {{varN}}` for each parameter that you need to pass in:

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

<div class="bs-callout bs-callout-info" id="info" markdown="1">
There is no need to use sequential variables like `{{var1}}`, `{{var2}}`. Parameterized replacement reads variables and maps them to the test call of the element sequentially from left to right, meaning you can use a selector like `#element .{{categoryId}} .{{productId}}`."
</div>

## Use a parameterized selector in a test

Create a new [test](../test.html):

```xml
<test name="SampleTest">

</test>
```

Add an action:

```xml
<test name="SampleTest">
    <click selector="" stepKey="click1"/>
</test>
```

Enter `"{{}}"` in the `selector=""` attribute:

```xml
<test name="SampleTest">
    <click selector="{{}}" stepKey="click1"/>
</test>
```

Make a reference to the section that the element is assigned to inside the `{{}}`:

```xml
<test name="SampleTest">
    <click selector="{{SampleSection}}" stepKey="click1"/>
</test>
```

Add name of a parameterized element, separated by `"."`, inside the `{{}}`:

```xml
<test name="SampleTest">
    <click selector="{{SampleSection.threeParamElement}}" stepKey="click1"/>
</test>
```

Add a set of `"()"` following the parameterized element inside the `{{}}`:

```xml
<test name="SampleTest">
    <click selector="{{SampleSection.threeParamElement()}}" stepKey="click1"/>
</test>
```

Add the first parameter, that you would like to pass to the selector, inside of the `()`:

```xml
<test name="SampleTest">
    <click selector="{{SampleSection.threeParamElement(_defaultCategory.is_active)}}" stepKey="click1"/>
</test>
```

Add the second or third parameters, that you'd like to pass to the selector, separated by `, `:

```xml
<test name="SampleTest">
    <click selector="{{SampleSection.threeParamElement(_defaultCategory.is_active,'StringLiteral',$createDataKey.id$)}}" stepKey="click1"/>
</test>
```

Any data can be used in parameterized elements, as well as entered in test actions:

* `_defaultCategory.is_active` is a reference to `<data key="is_active">` in `<entity name="_defaultCategory" ... ></entity>` in the corresponding `.../Data/*.xml`.
* `'StringLiteral'` is a literal.
* `$createDataKey.id$` is a reference to persisted data created in the `SampleTest1` within the `stepKey="createDataKey"` action.
* `{$variable}` is a reference to data returned by a test action, like `<grabValueFrom>`.

{%endraw%}


