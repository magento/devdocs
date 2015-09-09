---
layout: default
group: fedg
subgroup: D_CSS_G
title: Quick start guide to working with styles for a new theme 
menu_title: Quick start guide to styles
menu_order: 1
menu_node: parent
github_link: frontend-dev-guide/css-guide/css_quick_guide_overview.md
---

This chapter combines the topics aiming to help you to quickly start working with styles of your custom theme:

- <a href="{{site.gdeurl}}frontend-dev-guide/css-guide/css_quick_guide_approach.html">Simple ways to customize a theme's styles</a>
- <a href="{{site.gdeurl}}frontend-dev-guide/css-guide/css_quick_guide_mode.html">Simple style changes with client-side LESS compilation vs. server-side</a>


The topics give the information you might need on the steps 3 and 4 of the general theme customization procedure (described briefly in the following paragraph).

<h2>High-level steps to create a theme and change styles</h2>

1. In the file system, <a href="{{site.gdeurl}}frontend-dev-guide/themes/theme-create.html" target="_blank">add a new theme</a> inheriting from Magento Blank or Luma.
3.  <a href="{{site.gdeurl}}frontend-dev-guide/themes/theme-apply.html" target="_blank">Apply your theme</a>.
2. Decide which CSS compilation mode you will use. Compilation modes are described in the following topics:
	- <a href="{{site.gdeurl}}frontend-dev-guide/css-topics/css_debug.html">Styles debugging</a>: detailed description. 
	- <a href="{{site.gdeurl}}frontend-dev-guide/css-guide/css_quick_guide_mode.html">Simple style changes with client-side LESS compilation vs. server-side</a>: practical illustration. 
4. Customize styles. To learn how, check out the following sources:
	- <a href="{{site.gdeurl}}frontend-dev-guide/css-topics/frontend-dev-guide/css-topics/css-overview.html">CSS chapter of this book</a>
	- <a href="{{site.gdeurl}}frontend-dev-guide/css-guide/css_quick_guide_approach.html">Simple ways to customize a theme's styles</a>



<h2>Why do you need to create a custom theme</h2>

Magento provides two themes out of the box: Blank and Luma. The one you see applied after installation is Luma. 

<img src="{{site.baseurl}}common/images/css_guide_luma.png">

Luma inherits from Blank, which contains all the basic functionality and styling required for a theme.

You can use either Luma or Blank for your storeview, if there is literally nothing you want to change in their design.
 
But if there is something you want to improve, the only recommended way is creating a new theme. It can inherit from Blank or Luma so you can preserve all you need, and change or add whatever required. 

Making changes in the Magento out-of-the-box themes is a bad idea, because can result in your changes being overwritten during update.
