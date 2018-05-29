---
group: fedg
subgroup: G_Translate
title: Create a translation dictionary for a theme
menu_title: Create a translation dictionary for a theme, illustration
menu_order: 2
version: 2.1
github_link: frontend-dev-guide/translations/translate_practice.md
functional_areas:
  - Frontend
---

<h2>What's in this topic</h2>

This topic is a step-by-step illustration of creating a default en_US {% glossarytooltip 05099dbb-d491-4e33-a065-16035cb2d4d9 %}locale{% endglossarytooltip %} <a href="{{ page.baseurl }}/frontend-dev-guide/translations/xlate.html#translate_terms">dictionary</a> for a custom {% glossarytooltip d2093e4a-2b71-48a3-99b7-b32af7158019 %}theme{% endglossarytooltip %}. 

<h2 id="theme">Changing default strings</h2>
OrangeCo created a custom `orange` theme that inherits from the Magento Blank theme.
Among the other changes, they want to rephrase certain strings used in the Blank theme and modules for the default locale. 

Namely, they need the following changes:
<ul>
<li>
Change <b>Add to Cart</b> label to <b>Purchase</b>
</li>
<li>
Change <b>Add to Compare</b> label to <b>Compare</b>
</li>
<li>
Change <b>Add to Wish List</b> label to <b>Wishlist</b>
</li>
</ul>

The following image shows a page where the strings meant to be changed are used:

<div style="border: 1px solid #ABABAB">
<img width="700px" src="{{ site.baseurl }}/common/images/fdg_trans_bag.png" alt="Product page where the Add to Compare string is displayed">
</div>

To override the strings, OrangeCo plan to use the en_US dictionary file. 

So OrangeCo take the following steps:

<ol>

<li>
Run the <a href="{{ page.baseurl }}/config-guide/cli/config-cli-subcommands-i18n.html#config-cli-subcommands-xlate-dict">i18n (internationalization) tool</a> to generate the en_US dictionary for the <code>orange</code> theme:
<pre>
{% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}php{% endglossarytooltip %} magento2/bin/magento i18n:collect-phrases --output="magento2/app/design/frontend/OrangeCo/orange/i18n/en_US.csv" magento2/app/design/frontend/OrangeCo/orange
</pre>
</li>
<li>

Open the newly generated <code>magento2/app/design/frontend/OrangeCo/orange/i18n/en_US.csv</code> file and add the following rows:

<pre>
"Add to Cart", "Purchase"
"Add to Compare", "Compare"
"Add to Wish List", "Wishlist"
</pre>
</li>

</ol>

Now you can run deploy command to get changes of localization,
<pre>
php bin/magento setup:static-content:deploy
</pre>

When the OrangeCo apply the orange theme, the custom strings are used instead default ones. 

For example:

<div style="border: 1px solid #ABABAB">
<img width="700px" src="{{ site.baseurl }}/common/images/fdg_translations_bag2.png" alt="Product page where the customized Compare string is displayed"> 
</div>

<h2> Recommended reading </h2>

<ul>
<li><a href="{{ page.baseurl }}/frontend-dev-guide/translations/xlate.html">Translations overview</a></li>
<li><a href="{{ page.baseurl }}/config-guide/cli/config-cli-subcommands-i18n.html#config-cli-subcommands-xlate-dict">Translation dictionaries and language packages</a></li>
<li><a href="{{ page.baseurl }}/frontend-dev-guide/translations/theme_dictionary.html">Using translation dictionary to customize strings</a></li>
</ul>
