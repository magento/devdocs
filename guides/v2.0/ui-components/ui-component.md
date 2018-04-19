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
redirect_from: 
  - /guides/v2.0/ui-library/ui-library-component.html
  - /guides/v2.0/ui_comp_guide/bk-ui_comps.html
---

<h2 id="general">Overview of UI components</h2>
Magento UI components are designed for simple and flexible UI rendering. They allow you to configure the page manipulating the UI components.

Magento UI components are implemented as a standard {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %} and can be found under Magento\UI {% glossarytooltip 621ef86b-7314-4fbc-a80d-ab7fa45a27cb %}namespace{% endglossarytooltip %}.

Components are responsible for rendering result page fragments and providing/supporting further interactions of {% glossarytooltip 312b4baf-15f7-4968-944e-c814d53de218 %}JavaScript{% endglossarytooltip %} components and server.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
This guide is actual for Magento 2.0 UI components. You might be also interested in the [UI Components Guide for Magento 2.1](http://devdocs.magento.com/guides/v2.1/ui_comp_guide/bk-ui_comps.html), as it has more conceptual topics.   
</div>


### General structure
In Magento 2 there are basic and secondary UI components. 

Basic components are: 

* Listing component
* Form component

Secondary components are extensions of basic components.  

All components can be configured both for {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}Admin{% endglossarytooltip %} and {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %}.

<div class="bs-callout bs-callout-info" id="info">
  <p>You need to configure styles manually for components on storefront.</p>
</div>

<h3>Using UI component in layout file</h3>
Using {% glossarytooltip 9bcc648c-bd08-4feb-906d-1e24c4f2f422 %}UI component{% endglossarytooltip %} is as simple as adding the following code to the appropriate {% glossarytooltip 73ab5daa-5857-4039-97df-11269b626134 %}layout{% endglossarytooltip %} section:

`<uiСomponent name="some_ui_component_instance_name"/>`

All UI components have base declaration in <a href="{{page.baseurl}}/ui-library/ui-definition.html">`Magento/Ui/view/base/ui_component/etc/definition.xml`</a>. 

UI components configuration reader searches through all active modules and read files:

<a href="{{page.baseurl}}/ui-library/ui-definition.html">`<your module root dir>/<vendor>/<module>/view/<area>/ui_component/etc/definition.xml`</a>


And concrete instances of the components each in separate {% glossarytooltip 8c0645c5-aa6b-4a52-8266-5659a8b9d079 %}XML{% endglossarytooltip %} configuration file:


`<your module root dir>/<vendor>/<module>/view/<area>/ui_component/<component_instance_name>.xml`

### Configuration

{% glossarytooltip 55774db9-bf9d-40f3-83db-b10cc5ae3b68 %}Extension{% endglossarytooltip %} developers cannot introduce new components but can customize existing ones locally. 

XSD file contains rules and limitations shared between all components (both definitions and instance configurations):

`<your module root dir>/Magento/Ui/etc/ui_definition.xsd`

It is possible to create custom component by setting `class`, `component` and `template` parameters of the Container component.

You can configure existing component and all filter types in the following ways:

* Globally: using any module's <a href="{{page.baseurl}}/ui-library/ui-definition.html">`view/*/ui_component/etc/definition.xml`</a> file. All settings declared in this file will be applied to all component's instances
* Locally: using concrete component instance configuration, such as `<your module root dir>/Magento/Cms/view/adminhtml/ui_component/cms_page_listing.xml`
