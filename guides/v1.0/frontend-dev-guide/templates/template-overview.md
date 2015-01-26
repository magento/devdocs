---
layout: default  
group: fedg
subgroup: C_Templates
title: Templates overview
menu_title: Templates
menu_order: 1
menu_node: parent
github_link: frontend-dev-guide/templates/template-overview.md
---

<h2>Introduction to customizing a theme using templates</h2>

<h3>Overview</h3>

In Magento application the markup of a certain page is defined by a "layout plus template" bundle. Where <a href="{{site.gdeurl}}frontend-dev-guide/layouts/layout-overview.html" target="_blank">layout files</a> control the presence or absence of each content block in a theme. What, specifically, gets rendered inside of that block is controlled by the template files. Most templates do not contain any logic about whether they will or will not be rendered, this is typically handled by the layout files. Once a template is called, it is expected that it will be parsed and displayed.

Default Magento templates are PHTML files that contain HTML and PHP defining the logic for visual presentation. And in this guide by the term "a template" we mean a default Magento `.phtml` template.

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
 <p><a href="{{site.gdeurl}}architecture/view/template-engine.htmljr" target="_blank">Magento template rendering subsystem</a> can support multiple template engines, including the default PHP-based engine for processing PHTML templates.</p></span>
</div>

Once you <a href="{{site.gdeurl}}frontend-dev-guide/themes/debug-theme.html#debug-theme-templ" target="_blank">identify which template file is being used</a> to generate the contents of a specific block, you can modify that template file if desired. Or you can modify the layout file to associate a different template file with a block, which allows you to create completely new template files.

We strongly recommend not change the default templates, because if you do edit them, your changes can be overwritten by the new version of the default files during upgrades.
The best practice is creating a new design theme and adding your modified templates there.

<h3>Templates overriding</h3>
For template files with the same name the following is true: 
<a href="{{site.gdeurl}}frontend-dev-guide/template-override.html#theme">theme templates</a> override <a href="{{site.gdeurl}}frontend-dev-guide/template-override.html#module">module templates</a>, and those of a <a href="{{site.gdeurl}}frontend-dev-guide/themes/theme-inherit.html">child theme</a> override parent theme templates.

For more details about overriding templates please refer to the <a href="{{site.gdeurl}}frontend-dev-guide/templates/template-override.md" target="_blank">Templates overriding</a> article.

<h3>Template customization waklthrough</h3>

To customize a template in your theme:

1. Locate which template is associated with the page/block you want to change using <a href="{{site.gdeurl}}frontend-dev-guide/themes/debug-theme.html#debug-theme-templ" target="_blank">template hints</a>.

2. Copy the template to your theme folder, according to the <a href="{{site.gdeurl}}frontend-dev-guide/template-override.html#template-convention" target="_blank">template storing convention</a>: app/design/<Vendor>/<theme>/<Namespace_Module>/templates/<path_to_template>

3. Make the required changes.

To add a new template in a theme:

1. Add your new template in your theme directory according to the <a href="{{site.gdeurl}}frontend-dev-guide/template-override.html#template-convention" target="_blank">conventional location</a>. 

2. Assign your template to a block or page in the <a href="{{site.gdeurl}}frontend-dev-guide/template-override.html#template-layout" target="_blank">corresponding layout file</a>. 


A company named OrangeCo created a theme named Orange. The theme files are located in `app/design/frontend/OrangeCo/orange`.
Orange inherits from the Magento Blank theme.




