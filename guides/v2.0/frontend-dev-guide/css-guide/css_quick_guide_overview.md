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

This chapter is a practical reference on how add a new theme based on the themes provided by Magento and start working with its styles. 

<h2>Magento out-of-the-box themes</h2>

Magento provides two themes out of the box: Blank and Luma. The one you see applied after installation is Luma. 

{storefront with luma}

Luma inhertis from Blank, which contains all the basic functionality and styling required for a theme.

<h2>When do you need to create a custom theme</h2>

You can use either Luma or Blank for your storeview, if there's literally nothing you want to change in their design.
 
But if there's something you want to change, the only recommended way is creating a new theme. It can inherit from Blank or Luma so you can preserve all you need, and change or add whatever needed. 

Making changes in the Magento out of the box themes is a bad idea, because can result in your changes being overwritten during update.

<h2>High-level steps to create a theme and change styles</h2>

1. In the file system, add a new theme inheriting from Magento Blank or Luma.
3. Apply your theme.
2. Decide which CSS compilation mode you will use. 
4. Customize styles.