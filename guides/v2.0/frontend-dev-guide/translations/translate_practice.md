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

So OrangeCo take the following steps:

<ol>

<li>
Run the i18n (internationalization) tool to generate the en_US dictionary for the `orange` theme:
<pre>
php magento2/bin/magento i18n:collect-phrases --output="magento2/app/design/frontend/OrangeCo/orange/i18n/en_US.csv" magento2/app/design/frontend/OrangeCo/orange
</pre>

For general information about usage of the i18n tool see the <a href="{{site.gdeurl}}config-guide/cli/config-cli-subcommands-i18n.html#config-cli-subcommands-xlate-dict">Translation dictionaries and language packages</a> topic.
If the custom theme files do not contain any additional strings, the i18n tool does not create a dictionary for this theme. 
</li>
<li>
If the Add the following strings to the `magento2/app/design/frontend/OrangeCo/orange/i18n/en_US.csv` file:
"Add to Compare", "Compare"
</li>
</ol>