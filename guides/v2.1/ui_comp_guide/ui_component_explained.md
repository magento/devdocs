---
layout: default
group: UI_Components_guide
subgroup:
title: UI component explained
menu_title: UI component explained
menu_order: 2
version: 2.1
github_link: ui_comp_guide/ui_component_explained.md
---

## What is a UI component?

Magento UI components are used to represent distinct UI elements, such as tables, buttons, dialogs, and others.

UI component is a combination of:

1. **XML declaration** that specifies the component's configuration settings and inner structure.

2. **JavaScript** class inherited from one of the Magento JavaScript framework UI components base classes (such as [UIElement]({{page.baseurl}}ui_comp_guide/concepts/ui_comp_uielement_concept.html), [UIClass]({{page.baseurl}}ui_comp_guide/concepts/ui_comp_uiclass_concept.html) or [UICollection]({{page.baseurl}}ui_comp_guide/concepts/ui_comp_uicollection_concept.html)).


3. **Related template(s)**

### XML Declaration

XML is widely used in Magento 2, which allows developers to easily reuse existing functionalities and add customizations.

Comparing to XML Layouts, UI Components use more semantical approach to declare and configure User Interface.

An instance of UI component is usually based on the hierarchy of child UI components. For example:

* the Form component has Fieldsets, Tabs, and inner fields

* the Listing component has Filters, Columns, Bookmark component, and others

### JavaScript class

The picture below shows how the JavaScript class of a UI component is implemented.

![JavaScript class implementation of a UI component]({{site.baseurl}}common/images/ui_comp_js_class.png)

### Templates

A UI component can be bound to one or more HTML templates using the KnockoutJS bindings.

## When to use UI components?

With Magento, you may apply different approaches to implementing a UI element, and use:

* PHTML template with inline JavaScript

* PHTML template with declaration of related JavaScript file via XML layout

* jQuery widget

* Magento 2 UI component

We recommend using UI components as much as possible and tend to do the same in Magento core. 

### Interaction with other UI components

UI components work well together: they communicate with each other via the [uiRegistry service]({{page.baseurl}}ui_comp_guide/troubleshoot/ui_comp_troubleshoot_js.html#debugging-using-the-uiregistry) that tracks their asynchronous initialization. Therefore, if we need to extend something that has already been implemented as a hierarchy of UI components or add a new feature that should interact with other UI components, it's easier and more effective to use a UI component.

## Things to remember working with UI components

**Read the docs**

Creating new UI component instance is not always intuitive, so we recommend to always read the documentation first.

**UI components have different settings**

Configuration settings (their list and names) are different among UI components; these settings contain constants, optional and required settings. Developers need to treat every UI component separately.

**Beware of mistakes in XML config**

Surprisingly, most issues occur because of the typos and other mistakes in the UI component's XML configuration. Naming is critical because UI components are heavily cross-referenced.


