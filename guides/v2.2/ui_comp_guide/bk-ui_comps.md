---
group: UI_Components_guide
subgroup:
title: Overview of UI components
landing-page: UI Components
menu_title: Overview of UI components
menu_order: 1
version: 2.2
github_link: ui_comp_guide/bk-ui_comps.md
redirect_from:
  - /guides/v2.1/ui-components/ui-component.html
  - /guides/v2.2/ui-components/ui-component.html
  - /guides/v2.1/ui-components/ui-definition.html
  - /guides/v2.1/ui-components/ui-secondary.html
  - /guides/v2.1/ui-components/ui_components_js.html
  - /guides/v2.1/ui-components/ui-listing-grid.html
  - /guides/v2.1/ui_comp_guide/concepts/ui_comp_architecture_concept.html
  - /guides/v2.1/ui_comp_guide/ui_component_explained.html
---

## Overview of UI components
*Magento UI components are used to represent distinct UI elements, such as tables, buttons, dialogs, and others*.

They are designed for simple and flexible user interface (UI) rendering. Components are responsible for rendering result page fragments and providing/supporting further interactions of {% glossarytooltip 312b4baf-15f7-4968-944e-c814d53de218 %}JavaScript{% endglossarytooltip %} components and server.

Magento UI components are implemented as a standard {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %} named Magento_UI.

To use UI components in your custom module, you need to add a dependency for the Magento_UI module in [your component's composer.json file]({{ page.baseurl }}/extension-dev-guide/build/composer-integration.html).

The following XSD file contains rules and limitations shared between all components (both definitions and instance configurations):

`<your module root dir>/Magento/Ui/etc/ui_definition.xsd`

{% glossarytooltip 55774db9-bf9d-40f3-83db-b10cc5ae3b68 %}Extension{% endglossarytooltip %} developers cannot extend this XSD scheme and introduce new components, but can customize existing ones.

### General structure
In Magento 2 there are basic and secondary UI components.

Basic components are:
* [Listing component]({{ page.baseurl }}/ui_comp_guide/components/ui-listing-grid.html)

* [Form component]({{ page.baseurl }}/ui_comp_guide/components/ui-form.html)

All other UI components are secondary.

Basic components are declared in the [page layout files]({{ page.baseurl }}/frontend-dev-guide/layouts/layout-types.html#layout-types-page); secondary components are declared in the top-level components’ instances configuration files.

All components can be configured both for {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}Admin{% endglossarytooltip %} and {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %}.

<div class="bs-callout bs-callout-info" id="info">
  <p>You need to configure styles manually for components on storefront.</p>
</div>

## When to use UI components?

With Magento, you may apply different approaches to implementing a UI element, and use:

* {% glossarytooltip ae0f1f68-c466-4189-88fd-6cd8b23c804f %}PHTML{% endglossarytooltip %} template with inline JavaScript

* PHTML template with declaration of related JavaScript file via {% glossarytooltip 8c0645c5-aa6b-4a52-8266-5659a8b9d079 %}XML{% endglossarytooltip %} {% glossarytooltip 73ab5daa-5857-4039-97df-11269b626134 %}layout{% endglossarytooltip %}

* {% glossarytooltip 5bfa8a8e-6f3e-4fed-a43e-62339916f02e %}jQuery{% endglossarytooltip %} {% glossarytooltip f0dcf847-ce21-4b88-8b45-83e1cbf08100 %}widget{% endglossarytooltip %}

* Magento 2 {% glossarytooltip 9bcc648c-bd08-4feb-906d-1e24c4f2f422 %}UI component{% endglossarytooltip %}

We recommend using UI components as much as possible and tend to do the same in Magento core.

UI components work well together: they communicate with each other via the [uiRegistry service]({{ page.baseurl }}/ui_comp_guide/troubleshoot/ui_comp_troubleshoot_js.html#debugging-using-the-uiregistry) that tracks their asynchronous initialization. Therefore, if we need to extend something that has already been implemented as a hierarchy of UI components or add a new feature that should interact with other UI components, it's easier and more effective to use a UI component.

## What is a UI component?

UI component is a combination of:

1. **XML declaration** that specifies the component's configuration settings and inner structure.

2. **JavaScript** class inherited from one of the Magento JavaScript framework UI components base classes (such as [UIElement]({{ page.baseurl }}/ui_comp_guide/concepts/ui_comp_uielement_concept.html), [UIClass]({{ page.baseurl }}/ui_comp_guide/concepts/ui_comp_uiclass_concept.html) or [UICollection]({{ page.baseurl }}/ui_comp_guide/concepts/ui_comp_uicollection_concept.html)).


3. **Related template(s)**

### XML Declaration

XML is widely used in Magento 2, which allows developers to easily reuse existing functionalities and add customizations.

Comparing to XML layouts, UI сomponents use more semantical approach to declare and configure user interface.

An instance of UI component is usually based on the hierarchy of child UI components. For example:

* the Form component has Fieldsets, Tabs, and inner fields

* the Listing component has Filters, Columns, Bookmark component, and others

### JavaScript class

The picture below shows how the JavaScript class of a UI component is implemented.

![JavaScript class implementation of a UI component]({{ site.baseurl }}/common/images/ui_comp_js_class.png)

### Templates

A UI component can be bound to one or more {% glossarytooltip a2aff425-07dd-4bd6-9671-29b7edefa871 %}HTML{% endglossarytooltip %} templates using the KnockoutJS bindings.

## Configuring a UI component

A particular instance of a UI component is defined primarily by the following:

1. [definition.xml](https://github.com/magento/magento2/blob/2.2/app/code/Magento/Ui/view/base/ui_component/etc/definition.xml): default components' configuration. Can be extended in custom modules.
2. [UI component's XML declaration]({{ page.baseurl }}/ui_comp_guide/concepts/ui_comp_xmldeclaration_concept.html).
3. [Backend/PHP modifiers]({{ page.baseurl }}/ui_comp_guide/concepts/ui_comp_modifier_concept.html).
4. Configuration inside the JavaScript classes.

## Things to remember when working with UI components

**UI components have different settings**

Configuration settings (their list and names) are different among UI components; these settings contain constants, optional and required settings. Developers need to treat every UI component separately.

**Beware of mistakes in XML config**

Surprisingly, most issues occur because of the typos and other mistakes in the UI component's XML configuration. Naming is critical because UI components are heavily cross-referenced.
