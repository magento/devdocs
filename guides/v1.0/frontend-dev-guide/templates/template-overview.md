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


In Magento application templates are the part of the view layer. Templates define exactly how the content of <a href="{{site.gdeurl}}frontend-dev-guide/layouts/layout-overview.html" target="_blank">layout blocks</a> are presented on a page: order, CSS classes, elements  grouping, and so on. 
In most cases, templates do not contain any logic about whether they will or will not be rendered, this is typically handled by the layout files. Once a template is called in a layout, it will be displayed.

Default Magento templates are PHTML files that contain HTML and PHP defining the logic for visual presentation. 

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
 <p><a href="{{site.gdeurl}}architecture/view/template-engine.html" target="_blank">Magento template rendering subsystem</a> supports multiple template engines, including the default PHP-based engine for processing PHTML templates.</p></span>
</div>

This chapter describes how to customize templates in your design theme, and provides both the practice reference and the theoretical background of how templates are applied in a Magento store. 




We strongly recommend that you do not change the default templates, because if you do edit them, your changes can be overwritten by the new version of the default files during upgrades.
The best practice is <a href="{{site.gdeurl}}frontend-dev-guide/themes/theme-create.html" target="_blank">creating a new design theme</a> and adding your modified templates there.











