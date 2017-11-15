---
layout: default
group: mftf
title: Create and use parameterized selectors in the Magento Functional Testing Framework
github_link: magento-functional-testing-framework/section/structure/parameterized-selectors.md
---

{%raw%}

## Setting up a selector in section

In a `<section></section>`, create a new `<element/>`.

![Create a new element]

Add the attribute `parameterized="true"` to the `<element/>`.

![Set parameterized flag]

In the `selector=""` attribute add your selector.

![Specify your selector]

### Selector with single variable

For the parameterized part of the selector, add ```{{var1}}``` to represent the first piece of data that you want to replace.

![Add a parameter to substitute]

Enter a descriptive name into the `name=""` attribute.

![Add a name for the element]

Enter the type of UI element that the `<element/>` represents.

![Enter the type]

### Selector with multiple variables

For the parameterized part of the selector, add `{{var1}}, {{var2}}, ..., {{varN}}` for each parameter that you need to pass in.

![Add var2]

![Add var3]
 
## Using a parameterized selector in a test

Create a new [test] in a [cest].

![Create a test]

Add an action.

![Add action]

In the `selector=""` attribute, enter `"{{}}"`.

![Add braces to selector]

Inside the `{{}}`, make a reference to the section that the element is assigned to.

![Reference section]

![Make a reference to the section]

Inside the `{{}}`, add name of a parameterized element separated by `"."`

![Add the reference element]

Inside the `{{}}`, add a set of `"()"` following the parameterized element.

![Add parentheses]

Inside of the `()`, add the first parameter that you'd like to pass to the selector.

![Add the first parameter]

You can pass in String Lierals, XML Data and Persisted Data.
Inside of the `()` add a `,` after the fist parameter, add the 2nd/3rd parameters that you'd like to pass to the Selector.

![Add other parameters]

You can use string literals, XML data, and persisted data.

{%endraw%}


<!-- LINK DEFINITIONS -->


<!-- Internal -->

[test]: ../cest.html#test
[cest]: ../cest.html




<!-- Images -->

[Create a new element]: img/create-element.png
[Set parameterized flag]: img/add-param.png
[Specify your selector]: img/add-selector.png
[Add a parameter to substitute]: img/add-var1.png
[Add a name for the element]: img/add-name.png
[Enter the type]: img/enter-type.png
[Add var2]: img/add-var2.png
[Add var3]: img/add-var3.png
[Create a test]: img/add-test.png
[Add action]: img/add-action.png
[Add braces to selector]: img/add-braces.png
[Reference section]: img/reference-section.png
[Make a reference to the section]: img/use-in-action.png
[Add the reference element]: img/add-ref-element.png
[Add parentheses]: img/add-parentheses.png
[Add the first parameter]: img/add-param1.png
[Add other parameters]: img/add-params2-3.png







