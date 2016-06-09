---
layout: default
group: quickstart
subgroup: 01_Introduction
title: Introduction to Composer
menu_title: Introduction to Composer
menu_order: 2
menu_node: 
version: 2.1
github_link: mktpl-quickstart/intro-composer.md
---

{% include install/composer-overview.html %}

## `composer.json`
The key to developing any Magento component is its <a href="https://getcomposer.org/doc/04-schema.md" target="_blank">`composer.json`</a>, which specifies version and dependency information for a component, among other things. You can look at examples in the Magento codebase, such as:

*	Metapackage (<a href="http://packages.magento.com/_packages/magento_product-community-edition-2.0.0-rc.zip" target="_blank">old metapackage</a> for Community Edition from packages.magento.com)
*	<a href="{{ site.mage2100url }}app/code/Magento/Customer/composer.json" target="_blank">Customer module</a>
*	<a href="{{ site.mage2100url }}app/design/frontend/Magento/luma/composer.json" target="_blank">Luma theme</a>
*	<a href="{{ site.mage2100url }}app/i18n/magento/en_us/composer.json" target="_blank">en_us language package</a>

## For more information
For more information about Composer, see the <a href="https://getcomposer.org/doc/00-intro.md" target="_blank">Composer documentation</a>.



