---
layout: default
group: mftf
title: Section structure in the Magento Functional Testing Framework
version: 2.2
github_link: magento-functional-testing-framework/release-2/section.md
functional_areas:
 - Testing
mftf-release: 2.0.2
---

_This topic was updated due to the {{page.mftf-release}} MFTF release._
{: style="text-align: right"}

## Overview

{%raw%}
A section is a reusable part of a [page].
It is the standard file for defining UI elements on a page used under test.

You are able to define:

- explicit element that has a selector equal to constant string.
Example: `selector="#add_root_category_button"`
- parameterized element that contains substitutable values in selector.
Example: `selector="#element .{{var1}} .{{var2}}"`.
{% endraw %}
### Substitutable values

Substitutable values in the test can be of the following formats:

* String literals: `stringLiteral`
* Reference to [data entity][data] (XML data from the corresponding _.../Data/*.xml_): `entityName.Field`
* Persisted Data
    * `$persistedCreateDataKey.field$` for data created in scope of a [test] using the [createData] action with `stepKey="persistedCreateDataKey"`
    * `$$persistedCreateDataKey.field$$` for data created in [before] and [after] hooks. Even though `<before>`and `<after>` are nested inside a [`<test>`][test], persisted data is stored differently when it is done in a test hook, therefore it must be accessed with a different notation.

The following diagram demonstrates XML structure of a section in the MFTF:

{%include_relative img/section-dia.svg%}

## Format

```xml
<?xml version="1.0" encoding="UTF-8"?>

<sections xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="../../../../../../vendor/magento/magento2-functional-testing-framework/src/Magento/FunctionalTestingFramework/Page/etc/SectionObject.xsd">
    <section name="">
        <element name="" type="" selector="" />
        <element name="" type="" selector="" parameterized="true"/>
        <element name="" type="" selector="" timeout=""/>
    </section>
</sections>
```

## Principles

* `<section>` name is the same as the file name
* `*Section.xml` is stored in the _Section_ directory of a module
* a name format is `{Admin|Storefront}{SectionDescription}Section.xml`
* Elements in sections are given camel case with first letter lowercase name.
  They describe the function of the element rather than attempting to describe the selector used.

## Example

_.../Catalog/Section/AdminCategorySidebarActionSection.xml_:

```xml
<?xml version="1.0" encoding="utf-8"?>

<sections xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="../../../../../../vendor/magento/magento2-functional-testing-framework/src/Magento/FunctionalTestingFramework/Page/etc/SectionObject.xsd">
    <section name="AdminCategorySidebarActionSection">
        <element name="addRootCategoryButton" type="button" selector="#add_root_category_button" timeout="30"/>
        <element name="addSubcategoryButton" type="button" selector="#add_subcategory_button" timeout="30"/>
    </section>
</sections>
```

The example demonstrates a section `AdminCategorySidebarActionSection`.
All sections with same name will be merged during tests generation.

The section declares two buttons:

* `addRootCategoryButton` is a button with a locator `#add_root_category_button` on the parent web page.
* `addSubcategoryButton` is a button with a locator `#add_subcategory_button` on the parent web page.

Example of a call in test:
{%raw%}
```xml
<!-- Click on the button with locator "#add_subcategory_button" on the web page-->
<click selector="{{AdminCategorySidebarActionSection.addSubcategoryButton}}" stepKey="clickOnAddSubCategory"/>
```

## Reference

### section {#section-tag}

Contains sequence of UI elements in a section of a [page].

Attributes|Type|Use|Description
---|---|---|---
name|string|required|Unique section name identifier
remove|boolean|optional|Default: `false`. Set to `true` to remove this element during parsing

### element {#element-tag}

A UI element used in an [action].

Attributes|Type|Use|Description
---|---|---|---
name|string|required|Element name
type|string|required|The type of the element. Possible values: `text`, `textarea`, `input`, `button`, `checkbox`, `radio`, `checkboxset`, `radioset`, `date`, `file`, `select`, `multiselect`, `wysiwyg`, `iframe`.
selector|string|optional|[XPath] or [CSS] selector of the element.
locatorFunction|string|optional|[Locator Function] declaration to be used in lieu of a selector.
timeout|string|optional|Default: `-`. Optional timeout value in seconds to wait for the operation on the element.
parameterized|boolean|optional|Include and set to `true` if the `selector` for this element has parameters that need to be replaced for proper use. Learn more in [Parameterized selectors].
remove|boolean|optional|Default: `false`. Set to `true` to remove this element during parsing.

{% endraw %}

<!-- LINK DEFINITIONS -->

<!-- devdocs links -->

[action]: ./test/actions.html
[before]: ./test.html#before-tag
[createData]: ./test/actions.html#createdata
[data]: ./data.html
[Locator Function]: ./section/locator-functions.html
[page]: ./page.html
[Parameterized selectors]: ./section/parameterized-selectors.html
[test]: ./test.html#test-tag
[tests]: ./test.html

<!-- External links -->

[CSS]: https://www.w3schools.com/cssref/css_selectors.asp
[XPath]: https://www.w3schools.com/xml/xpath_nodes.asp

<!-- Abbreviations -->

*[MFTF]: Magento Functional Testing Framework
