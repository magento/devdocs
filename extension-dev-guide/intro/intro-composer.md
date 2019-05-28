---
group: php-developer-guide
subgroup: 01_Introduction
title: Introduction to Composer
menu_title: Introduction to Composer
menu_order: 2
menu_node:
redirect_from:
  - /guides/v2.0/mktpl-quickstart/intro-composer.html
---

{% include install/composer-overview.md %}

## Links to Magento code

The key to developing any {% glossarytooltip 3425e9ae-5edf-4fc6-b645-06023e9e5e5b %}Magento component{% endglossarytooltip %} is its [`composer.json`](https://getcomposer.org/doc/04-schema.md){: target="_blank"}, which specifies version and dependency information for a component, among other things. You can look at Magento 2 code, such as:

*	Metapackage, look at `<your Magento install dir>/composer.json`.
*	[Customer module]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Customer/composer.json){: target="_blank"}
*	[Luma theme]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/design/frontend/Magento/luma/composer.json){: target="_blank"}
*	[en\_us language package]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/i18n/magento/en_us/composer.json){: target="_blank"}

## For more information

For more information about Composer, see the [Composer documentation](https://getcomposer.org/doc/00-intro.md){: target="_blank"}.
