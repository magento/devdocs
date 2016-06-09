---
layout: default
group: extension-dev-guide
subgroup: 01_Introduction
title: Introduction to Composer
menu_title: Introduction to Composer
menu_order: 2
menu_node: 
github_link: extension-dev-guide/intro/intro-composer.md
redirect_from: 
  - /guides/v2.0/mktpl-quickstart/intro-composer.html
  - /guides/v2.0/extension-dev-guide/intro-composer.html
---

{% include install/composer-overview.html %}

## Links to Magento code
The key to developing any Magento component is its <a href="https://getcomposer.org/doc/04-schema.md" target="_blank">`composer.json`</a>, which specifies version and dependency information for a component, among other things. You can look at Magento 2 code, such as:

*	Metapackage, look at `<your Magento install dir>/composer.json`.
*	<a href="{{ site.mage2000url }}app/code/Magento/Customer/composer.json" target="_blank">Customer module</a>
*	<a href="{{ site.mage2000url }}app/design/frontend/Magento/luma/composer.json" target="_blank">Luma theme</a>
*	<a href="{{ site.mage2000url }}app/i18n/magento/en_us/composer.json" target="_blank">en_us language package</a>

## For more information
For more information about Composer, see the <a href="https://getcomposer.org/doc/00-intro.md" target="_blank">Composer documentation</a>.



