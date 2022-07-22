---
group: ui-components-guide
title: Declare a custom UI component
---

Declaring a custom [UI component](https://glossary.magento.com/ui-component) refers to creating the [XML](https://glossary.magento.com/xml) configuration of your custom component, and is a part of a bigger task of creating a custom UI component.

This topic describes the XML elements that must be used for declaring a custom component and where this declaration should be placed.

## XML elements used for declaring the custom component

A custom UI component can be declared using one of the following elements: `<component>` or `<container>`.

The `<component>` element is typically used for declaring simple custom components that do not have other nested components. `<component>` uses the [uiElement] constructor by default.

The `<container>` element is typically used for declaring custom components that are collections, or in other words, can have nested components. `<container>` uses the [uiCollection] constructor by default.

### Attributes you can use

The `<container>` and `<component>` elements have no mandatory attributes. The following optional attributes are available for both these elements:

-  `component`: link to the component's [JavaScript](https://glossary.magento.com/javascript) constructor.
-  `class`: link to the component's [PHP](https://glossary.magento.com/php) class.
-  `template`: link to component's `.html` template.
-  `provider`: link to component's data provider.
-  `sortOrder`: component's sort order
-  `displayArea`: the placeholder which defines the area for rendering the component in the [layout](https://glossary.magento.com/layout) file.

{%
include note.html
type = 'warning'
content = 'If the following elements are used inside `<container>` or `<component>`, they should be specified strictly in the following order:

1. `<argument>`
1. `<settings>`
1. `<childComponent>`

For the component configuration inside `<container>` and `<component>`, [use the "arbitrary" structure].'
%}

## Declare a custom basic component

If the custom component you create is a [basic UI component] (like Form or Listing), you need to take the following steps to declare it:

1. Specify the XML file with its configuration it in the page layout file in your module, as described in the [About XML configuration of UI components] topic.
1. Declare the component in a separate `.xml` file using the `<container>` or `<component>` as parent node.

## Declare a custom secondary component
**The current version of Magento does not yet support secondary components.**

<!-- Link Definitions -->

[uiElement]: {{ page.baseurl }}/ui_comp_guide/concepts/ui_comp_uielement_concept.html
[uiCollection]: {{ page.baseurl }}/ui_comp_guide/concepts/ui_comp_uicollection_concept.html
[use the "arbitrary" structure]: {{ page.baseurl }}/ui_comp_guide/best-practices/semantic_config.html#info_structure_except
[basic UI component]: {{ page.baseurl }}/ui_comp_guide/bk-ui_comps.html#general-structure
[About XML configuration of UI components]: {{ page.baseurl }}/ui_comp_guide/concepts/ui_comp_xmldeclaration_concept.html#about-the-layout-configuration-file-and-ui-component-declaration
