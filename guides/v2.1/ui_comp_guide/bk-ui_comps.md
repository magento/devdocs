---
layout: default
group: UI_Components_guide
subgroup:
title: Overview of UI components
landing-page: UI Components
menu_title: Overview of UI components
menu_order: 1
version: 2.1
github_link: ui_comp_guide/bk-ui_comps.md
redirect_from: 
  - /guides/v2.1/ui-components/ui-component.html
  - /guides/v2.1/ui-components/ui-component.html
  - /guides/v2.1/ui-components/ui-definition.html
  - /guides/v2.1/ui-components/ui-secondary.html
  - /guides/v2.1/ui-components/ui_components_js.html
  - /guides/v2.1/ui-components/ui-listing-grid.html
---

## Welcome to the new UI components Guide

This document started as a [week-long doc sprint in Kyiv](http://bhmarks.com/blog/ui-components-doc-sprint-hello-kyiv/){:target="_blank"} with core Magento developers writing documentation about the UI Components. We will add additional topics to this book as we continue our work.

In the meantime, until we have completed this new book, you can also still [access the former (v2.0) UI Components docs](http://devdocs.magento.com/guides/v2.0/ui-components/ui-component.html).

## Overview of UI components
*Magento UI components are used to represent distinct UI elements, such as tables, buttons, dialogs, and others*. 

They are designed for simple and flexible user interface (UI) rendering.

Magento UI components are implemented as a standard module named Magento_Ui.

To use UI components in your custom module, you need to add a dependency for the Magento_UI module in [your component's composer.json file]({{page.baseurl}}extension-dev-guide/build/composer-integration.html).

The following XSD file contains rules and limitations shared between all components (both definitions and instance configurations):

`<your module root dir>/Magento/Ui/etc/ui_definition.xsd`

Extension developers cannot extend this XSD scheme and introduce new components, but can customize existing ones.

In Magento 2 there are basic and secondary UI components.

Basic components are:

* Listing component
* Form component

All other UI components are secondary. 

Basic components are declared in the page layout files; secondary components are declared in the top-level components’ instances configuration files.

All components can be configured both for Admin and storefront.

<div class="bs-callout bs-callout-info" id="info">
  <p>You need to configure styles manually for components on storefront.</p>
</div>

## When to use UI components?

With Magento, you may apply different approaches to implementing a UI element, and use:

* PHTML template with inline JavaScript

* PHTML template with declaration of related JavaScript file via XML layout

* jQuery widget

* Magento 2 UI component

We recommend using UI components as much as possible and tend to do the same in Magento core. 

UI components work well together: they communicate with each other via the [uiRegistry service]({{page.baseurl}}ui_comp_guide/troubleshoot/ui_comp_troubleshoot_js.html#debugging-using-the-uiregistry) that tracks their asynchronous initialization. Therefore, if we need to extend something that has already been implemented as a hierarchy of UI components or add a new feature that should interact with other UI components, it's easier and more effective to use a UI component.

## What is a UI component?

UI component is a combination of:

1. **XML declaration** that specifies the component's configuration settings and inner structure.

2. **JavaScript** class inherited from one of the Magento JavaScript framework UI components base classes (such as [UIElement]({{page.baseurl}}ui_comp_guide/concepts/ui_comp_uielement_concept.html), [UIClass]({{page.baseurl}}ui_comp_guide/concepts/ui_comp_uiclass_concept.html) or [UICollection]({{page.baseurl}}ui_comp_guide/concepts/ui_comp_uicollection_concept.html)).


3. **Related template(s)**

### XML Declaration

XML is widely used in Magento 2, which allows developers to easily reuse existing functionalities and add customizations.

Comparing to XML layouts, UI сomponents use more semantical approach to declare and configure user interface.

An instance of UI component is usually based on the hierarchy of child UI components. For example:

* the Form component has Fieldsets, Tabs, and inner fields

* the Listing component has Filters, Columns, Bookmark component, and others

### JavaScript class

The picture below shows how the JavaScript class of a UI component is implemented.

![JavaScript class implementation of a UI component]({{site.baseurl}}common/images/ui_comp_js_class.png)

### Templates

A UI component can be bound to one or more HTML templates using the KnockoutJS bindings.

## Configuring a UI component

A particular instance of a UI component is defined primarily by the following:

1. `<Magento_Ui_module_dir>/view/base/ui_component/etc/definition.xml`: default components' configuration, must not be modified by extension developers.
2. [UI component's XML declaration]({{page.baseurl}}ui_comp_guide/concepts/ui_comp_xmldeclaration_concept.html).
3. [Backend/PHP modifiers]({{page.baseurl}}ui_comp_guide/concepts/ui_comp_modifier_concept.html).
4. Configuration inside the JavaScript classes.

## Things to remember when working with UI components

**UI components have different settings**

Configuration settings (their list and names) are different among UI components; these settings contain constants, optional and required settings. Developers need to treat every UI component separately.

**Beware of mistakes in XML config**

Surprisingly, most issues occur because of the typos and other mistakes in the UI component's XML configuration. Naming is critical because UI components are heavily cross-referenced.
