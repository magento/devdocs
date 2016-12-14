---
layout: default
group:  UI Library
subgroup: A_Overview
title: Overview
landing-page: UI Components
menu_title: Overview
menu_node: parent
version: 2.0
github_link: ui-components/ui-component.md
redirect_from: /guides/v2.0/ui-library/ui-library-component.html
---

<h2 id="general">Overview of UI components</h2>
Magento UI components are designed for simple and flexible UI rendering. They allow you to configure the page manipulating the UI components.

Magento UI components are implemented as a standard module and can be found under Magento\UI namespace.

Components are responsible for rendering result page fragments and providing/supporting further interactions of JavaScript components and server.


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
