---
layout: default
group:  UI Library
subgroup: A_Overview
title: Overview
menu_title: Overview
menu_node: parent
github_link: uilibrary/ui-library-overview.md
---

<h2 id="general">Overview of UI library</h2>

Magento UI components Library is designed for simple and flexible UI rendering. It allows to configure the page manipulating the UI library components.

Magento UI components  Library is implemented as a usual module and can be found under Magento\UI namespace.

Components are responsible for rendering result page fragments and providing/supporting further interactions of JavaScript components and server.


###General structure
In Magento 2 there are basic and secondary UI components. Basic components are UI Library Listing component and UI Library Form component. Secondary components are extensions of basic components  

<h3>Using UI library component in layout file</h3>

Using UI Library component is as simple as adding the following code to the appropriate layout section:

`<ui_component name="some_ui_component_instance_name"/>`

All UI Library components have base declaration in <a href="{{ site.gdeurl }}ui-library/ui-definition.html">`Magento/Ui/view/base/ui_component/etc/definition.xml`</a>.

Any module can introduce its own set of custom components or modify initial configuration for existing components in a common to Magento way.

UI components configuration reader searches through all active modules and read files:

<a href="{{ site.gdeurl }}ui-library/ui-definition.html">`app/code/<vendor>/<module>/view/<area>/ui_component/etc/definition.xml`</a>


And concrete instances of the components each in separate XML configuration file:


`app/code/<vendor>/<module>/view/<area>/ui_component/<component_instance_name>.xml`

A single XSD is shared between all components (both definitions and instance configurations):

`app/code/Magento/Ui/etc/ui_definition.xsd`

###Configuration

You can configure component and all filter types in the following ways:

* Globally: using any module's <a href="#example">`view/*/ui_component/etc/definition.xml`</a> file. All settings declared in this file will be applied to all component's instances
* Locally: using concrete component instance configuration, such as `app/code/Magento/Cms/view/adminhtml/ui_component/cms_page_listing.xml`
