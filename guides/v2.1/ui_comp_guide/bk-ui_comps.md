---
layout: default
group: UI_Components_guide
subgroup:
title: Overview of UI components
menu_title: Overview of UI components
menu_order: 1
version: 2.1
github_link: ui_comp_guide/bk-ui_comps.md
redirect_from: /guides/v2.1/ui-components/ui-component.html
---

## Welcome to the new UI components Guide.

This document started as a [week-long doc sprint in Kyiv](http://bhmarks.com/blog/ui-components-doc-sprint-hello-kyiv/){:target="_blank"} with core Magento developers writing documentation about the UI Components. We will add additional topics to this books as we continue our work.

In the meantime, until we have completed this new book, you can also still [access the former (v2.0) UI Components docs](http://devdocs.magento.com/guides/v2.0/ui-components/ui-component.html).

## Overview of UI components
Magento UI components are designed for simple and flexible user interface (UI) rendering. They allow you to configure the page manipulating the UI components.

Magento UI components are implemented as a standard module and can be found under `Magento\UI` namespace.

Components are responsible for rendering result page fragments and providing/supporting further interactions of JavaScript components and server.

To use UI components in your custom module, you need to add a dependency for the Magento_UI module in [your component's composer.json file]({{page.baseurl}}extension-dev-guide/build/composer-integration.html).

### General structure
In Magento 2 there are basic and secondary UI components.

Basic components are:

* Listing component
* Form component

Secondary components are located in the basic components.

All components can be configured both for Admin and storefront.

<div class="bs-callout bs-callout-info" id="info">
  <p>You need to configure styles manually for components on storefront.</p>
</div>

### Using UI component in layout file

Using UI component is as simple as adding the following code to the appropriate layout section:

`<uiСomponent name="some_ui_component_instance_name"/>`

All UI components have base declaration in [`Magento/Ui/view/base/ui_component/etc/definition.xml`]({{page.baseurl}}ui_comp_guide/concepts/ui_comp_config_flow_concept.html).

UI components configuration reader searches through all active modules and read files:

`<module root dir>/view/<area>/ui_component/etc/definition.xml`


And concrete instances of the components each in separate XML configuration file:


`<module root dir>/view/<area>/ui_component/<component_instance_name>.xml`

### Configuration

Extension developers cannot introduce new components but can customize existing ones.

XSD file contains rules and limitations shared between all components (both definitions and instance configurations):

`<your module root dir>/Magento/Ui/etc/ui_definition.xsd`

It is possible to create custom component by setting `class`, `component` and `template` parameters of the Container UI component.
