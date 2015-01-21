
---
layout: default  
group: fedg
subgroup: C_Templates
title: Templates overview
menu_title: Templates overview
menu_order: 1
menu_node:
github_link: frontend-dev-guide/templates/template-overview.md
---

<h2>Introduction to customizing a theme using templates</h2>

<h3>Overview</h3>

In Magento application the markup of a certain page is defined by a "layout plus template" bundle. Where <a href="{{site.gdeurl}}frontend-dev-guide/layouts/layout-overview.html" target="_blank">layout files</a> control the presence or absence of each content block in a theme. What, specifically, gets rendered inside of that block is controlled by the template files. Most templates do not contain any logic about whether they will or will not be rendered, this is typically handled by the layout files. Once a template is called, it is expected that it will be parsed and displayed.

Default template files in Magento are PHTML files that contain HTML and PHP that is parsed and then rendered by a browser. 

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
 <p><a href="{{site.gdeurl}}architecture/view/template-engine.htmljr" target="_blank">Magento template rendering subsystem</a> can support multiple template engines, including the default PHP-based engine for processing PHTML templates.</p></span>
</div>

Once you <a href="{{site.gdeurl}}frontend-dev-guide/themes/debug-theme.html#debug-theme-templ" target="_blank">identify which template file is being used</a> to generate the contents of a specific block, you can modify that template file if desired. Or you can modify the layout file to associate a different template file with a block, which allows you to create completely new template files.

<h3>Conventional templates location</h3>
Templates are stored in the following locations:

* Module templates: `app/code/<Namespace>/<Module>/view/frontend/templates`
* Theme templates: `app/design/frontend/<Vendor>/<theme>/<Namespace>_<Module>/templates`

Theme inheritance mechanism empowers the overriding flow for templates. 

We strongly recommend not to change the default templates, because if you do edit them, your changes can be overwritten by the new version of the default files during upgrades.
The best practice is creating a new design theme and adding your modified templates there.

<h3>Sample template customization: changing a layout of the mini shopping cart</h3>
In the default Blank theme, in the mini shopping cart products are listed under the Go to Checkout button, like following:
<img src="{{ site.baseurl }}common/images/inherit_mini1.png" alt="An image of a mini shopping cart where products are listed under the Go to checkout button">

OrangeCo are creating a custom design for their store and decided they want the product list to be displayed before the Go to Checkout button. 





A company named OrangeCo created a theme named Orange. The theme files are located in `app/design/frontend/OrangeCo/orange`.
Orange inherits from the Magento Blank theme.




