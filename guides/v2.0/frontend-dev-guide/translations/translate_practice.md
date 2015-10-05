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

This topic is a step-by-step illustration of creating a default locale <a href="{{site.gdeurl}}frontend-dev-guide/translations/#translate_terms">dictionary</a> for a custom theme. 

<h2 id="theme">Changing default strings</h2>
OrangeCo created a custom `orange` theme that inherits from the Magento basic Blank theme.
Among the other changes, they want to re-phrase certain strings used in the Blank theme and modules. 

Namely, they need the following changes:
<ul>
<li>
Change "Add to Compare" label to "Compare"
<p class="q"> image here</p> </li>
<li>
Change "Your Checkout Progress" label to "Checkout Progress"
<p class="q"> image here</p> </li>
<li>
Change the "Shop By" label to "Filter"
<p class="q"> image here</p></li>
</ul>
To overwrite the strings, OrangeCo plan to use the "en_US" dictionary file. 

So OrangeCo take the following steps:

<ol>

<li>
Run the i18n (internationalization) tool to generate the en_US dictionary for the `orange` theme:
<pre>
php magento2/bin/magento i18n:collect-phrases --output="magento2/app/design/frontend/OrangeCo/orange/i18n/en_US.csv" magento2/app/design/frontend/OrangeCo/orange
</pre>
</li>
<li>

Open the newly generated `magento2/app/design/frontend/OrangeCo/orange/i18n/en_US.csv` file and add the following rows:
"Add to Compare", "Compare"
Your Checkout Progress, Checkout Progress
Shop By, Filter
</li>
<p class="q">Why sometimes strings are in quotes and sometimes no?</p>
</ol>

When the OrangeCo apply the orange theme, the custom string are used instead default ones. 
For example, 

<img>

For general information about usage of the i18n tool see the <a href="{{site.gdeurl}}config-guide/cli/config-cli-subcommands-i18n.html#config-cli-subcommands-xlate-dict">Translation dictionaries and language packages</a> topic.