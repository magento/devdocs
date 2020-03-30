---
group: ui-components-guide
title: Overview of UI components
redirect_from:
  - /guides/v2.3/ui-components/ui-listing-grid.html
---

## Overview of UI components

*Magento UI components are used to represent distinct UI elements, such as tables, buttons, dialogs, and others*.

They are designed for simple and flexible user interface (UI) rendering. Components are responsible for rendering result page fragments and providing/supporting further interactions of [JavaScript](https://glossary.magento.com/javascript) components and server.

Magento UI components are implemented as a standard [module](https://glossary.magento.com/module) named Magento_UI.

To use UI components in your custom module, you need to add a dependency for the Magento_UI module in [your component's composer.json file]({{ page.baseurl }}/extension-dev-guide/build/composer-integration.html).

The following XSD file contains rules and limitations shared between all components (both definitions and instance configurations):

`<your module root dir>/Magento/Ui/etc/ui_definition.xsd`

[Extension](https://glossary.magento.com/extension) developers cannot extend this XSD scheme and introduce new components, but can customize existing ones.

### General structure

In Magento 2 there are basic and secondary UI components.

Basic components are:

*  [Listing component]({{ page.baseurl }}/ui_comp_guide/components/ui-listing-grid.html)

*  [Form component]({{ page.baseurl }}/ui_comp_guide/components/ui-form.html)

All other UI components are secondary.

Basic components are declared in the [page layout files]({{ page.baseurl }}/frontend-dev-guide/layouts/layout-types.html#layout-types-page); secondary components are declared in the top-level components’ instances configuration files.

All components can be configured both for [Admin](https://glossary.magento.com/admin) and [storefront](https://glossary.magento.com/storefront).

 {:.bs-callout-info}
You need to configure styles manually for components on the storefront.

## When to use UI components?

With Magento, you may apply different approaches to implementing a UI element, and use:

*  [PHTML](https://glossary.magento.com/phtml) template with inline JavaScript

*  PHTML template with declaration of related JavaScript file via [XML](https://glossary.magento.com/xml) [layout](https://glossary.magento.com/layout)

*  [jQuery](https://glossary.magento.com/jquery) [widget](https://glossary.magento.com/widget)

*  Magento 2 [UI component](https://glossary.magento.com/ui-component)

We recommend using UI components as much as possible and tend to do the same in Magento core.

UI components work well together: they communicate with each other via the [uiRegistry service]({{ page.baseurl }}/ui_comp_guide/concepts/ui_comp_uiregistry.html#debug_uiregistry) that tracks their asynchronous initialization. Therefore, if we need to extend something that has already been implemented as a hierarchy of UI components or add a new feature that should interact with other UI components, it's easier and more effective to use a UI component.

## What is a UI component?

UI component is a combination of:

1. **XML declaration** that specifies the component's configuration settings and inner structure.

1. **JavaScript** class inherited from one of the Magento JavaScript framework UI components base classes (such as [UIElement]({{ page.baseurl }}/ui_comp_guide/concepts/ui_comp_uielement_concept.html), [UIClass]({{ page.baseurl }}/ui_comp_guide/concepts/ui_comp_uiclass_concept.html) or [UICollection]({{ page.baseurl }}/ui_comp_guide/concepts/ui_comp_uicollection_concept.html)).

1. **Related template(s)**

### XML Declaration

XML is widely used in Magento 2 which allows developers to easily reuse existing functionalities and add customizations.

Compared to XML layouts, UI components use a more semantical approach to declare and configure the user interface.

An instance of a UI component is usually based on the hierarchy of child UI components.

For example:

*  the Form component has Fieldsets, Tabs, and inner fields

*  the Listing component has Filters, Columns, Bookmark component, and others

### JavaScript class

The picture below shows how the JavaScript class of a UI component is implemented.

![JavaScript class implementation of a UI component]({{ site.baseurl }}/common/images/ui_comp_js_class.png)

### Templates

A UI component can be bound to one or more [HTML](https://glossary.magento.com/html) templates using the KnockoutJS bindings.

## Configuring a UI component

A particular instance of a UI component is defined primarily by the following:

1. `<Magento_Ui_module_dir>/view/base/ui_component/etc/definition.xml`: default component configuration. Can be extended in custom modules.
1. [UI component's XML declaration]({{ page.baseurl }}/ui_comp_guide/concepts/ui_comp_xmldeclaration_concept.html).
1. [Backend/PHP modifiers]({{ page.baseurl }}/ui_comp_guide/concepts/ui_comp_modifier_concept.html).
1. Configuration inside the JavaScript classes.

## UI component used in the frontend design area

*  Configured through layout XML.

*  The `jsLayout` argument is used to specify information.

```xml
<block name="block-name" template="Magento_Module::path_to_template.phtml">
  <arguments>
    <argument name="jsLayout" xsi:type="array">
      <item name="components" xsi:type="array">
        ...
      </item>
    </argument>
  </arguments>
</block>
```

## UI component used in the Adminhtml area

*  Configured through dedicated XML file (view/.../ui_component/[ui_component_name.xml])

*  Included in layout XML with uiComponent tag

## Things to remember when working with UI components

**UI components have different settings:**

Configuration settings (their list and names) are different among UI components; these settings contain constants, optional and required settings. Developers need to treat every UI component separately.

**Beware of mistakes in XML config:**

Surprisingly, most issues occur because of the typos and other mistakes in the UI component's XML configuration. Naming is critical because UI components are heavily cross-referenced.
