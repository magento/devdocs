---
layout: default
group: UI_Components_guide
subgroup:
title: Overview of UI components
menu_title: Overview of UI components
menu_order: 1
version: 2.1
github_link: ui_comp_guide/bk_ui_comps.md
---

## Welcome to the new UI Components Guide.

This document started as a [week-long doc sprint in Kyiv](http://bhmarks.com/blog/ui-components-doc-sprint-hello-kyiv/){:target="_blank"} with core Magento developers writing documentation about the UI Components. We will add additional topics to this books as we continue our work.

In the meantime, until we have completed this new book, you can also still [access the former UI Components docs]({{page.baseurl}}ui-components/ui-component.html).

## Overview of UI components
Magento UI components are designed for simple and flexible UI rendering. They allow you to configure the page manipulating the UI components.

Magento UI components are implemented as a standard module and can be found under Magento\UI namespace.

Components are responsible for rendering result page fragments and providing/supporting further interactions of JavaScript components and server.

[your component's composer.json file]({{page.baseurl}}extension-dev-guide/build/composer-integration.html)

### General structure
In Magento 2 there are basic and secondary UI components.

Basic components are:

* Listing component
* Form component

Secondary components are extensions of basic components.

All components can be configured both for Admin and storefront.

<div class="bs-callout bs-callout-info" id="info">
  <p>You need to configure styles manually for components on storefront.</p>
</div>

<h3>Using UI component in layout file</h3>
Using UI component is as simple as adding the following code to the appropriate layout section:

`<uiСomponent name="some_ui_component_instance_name"/>`

All UI components have base declaration in <a href="{{page.baseurl}}ui-library/ui-definition.html">`Magento/Ui/view/base/ui_component/etc/definition.xml`</a>.

UI components configuration reader searches through all active modules and read files:

<a href="{{page.baseurl}}ui-library/ui-definition.html">`<your module root dir>/<vendor>/<module>/view/<area>/ui_component/etc/definition.xml`</a>


And concrete instances of the components each in separate XML configuration file:


`<your module root dir>/<vendor>/<module>/view/<area>/ui_component/<component_instance_name>.xml`

### Configuration

Extension developers cannot introduce new components but can customize existing ones locally.

XSD file contains rules and limitations shared between all components (both definitions and instance configurations):

`<your module root dir>/Magento/Ui/etc/ui_definition.xsd`

It is possible to create custom component by setting `class`, `component` and `template` parameters of the <a href="{{page.baseurl}}ui-library/ui-container.html">Container component</a>.

You can configure existing component and all filter types in the following ways:

* Globally: using any module's <a href="{{page.baseurl}}ui-library/ui-definition.html">`view/*/ui_component/etc/definition.xml`</a> file. All settings declared in this file will be applied to all component's instances
* Locally: using concrete component instance configuration, such as `<your module root dir>/Magento/Cms/view/adminhtml/ui_component/cms_page_listing.xml`
