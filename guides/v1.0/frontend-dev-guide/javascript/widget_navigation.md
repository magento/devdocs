---
layout: default
group: fedg
subgroup: Javascript
title: Magento Navigation widget
menu_order: 2
menu_title: Magento Navigation widget
github_link: frontend-dev-guide/javascript/widget_navigation.md
---

<h2>Overview</h2>
Magento navigation widget is a customized <a href="http://api.jqueryui.com/menu/" target="_blank">jQuery UI menu widget</a>. This widget extends functionality to include:
<ul>
<li>expanding all layers of the menu tree past the second layer.</li>
<li>limiting the maximum number of list items contained within the main navigation(overflow items are placed into a secondary navigation item).</li>
<li>method for handling the responsive layout of the menu.</li>
</ul>

The navigation widget source is located in magento/pub/lib/mage/ folder

<p class="q">•	Menu and Navigation widgets
They both are placed in lib/web/mage/menu.js file. But they need further investigation: why two widgets? Why in same file? What do with ‘design/blank/navigation-menu.js’ ? What features were left after bug-fixing? What are new ones?
</p>