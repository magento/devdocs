---
layout: default  
group: fedg
subgroup: G_Translate
title: Create a translation dictionary for a theme
menu_title: Create a translation dictionary for a theme
menu_order: 2
github_link: frontend-dev-guide/translations/translate_practice.md
---

<h2>Overview</h2>
When creating a custom theme, you might need to add a <a href="{{site.gdeurl}}frontend-dev-guide/translations/#translate_terms">dictionary</a> for the default language (en_US). This will make your theme easily localized. Additionally, this is the simplest way to replace certain strings of a <a href="{{site.gdeurl}}frontend-dev-guide/themes/theme-inherit.html">parent theme</a>, if required.

This topic is a step-by-step illustration of creating a en_US dictionary for a custom theme. 

<h2 id="theme">The custom theme</h2>
OrangeCo created a custom `orange` theme that inherits from the Magento basic Blank theme.
Among the other changes, they want to re-phrase certain strings used in the Blank theme. 

Namely, they need the following changes:
Add to Compare -> Compare
Your Checkout Progress -> Checkout Progress
Shop By -> Filter

The default Magento locale is en_US. 