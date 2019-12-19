---
group: php-developer-guide
title: Introduction to Composer
---

{% include install/composer-overview.md %}

## Links to Magento code
The key to developing any [Magento component](https://glossary.magento.com/magento-component) is its [`composer.json`](https://getcomposer.org/doc/04-schema.md){:target="_blank"}, which specifies version and dependency information for a component, among other things. You can look at Magento 2 code, such as:

*  Metapackage, look at `<magento_root>/composer.json`.
*  [Customer module]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Customer/composer.json){:target="_blank"}
*  [Luma theme]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/design/frontend/Magento/luma/composer.json){:target="_blank"}
*  [en_us language package]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/i18n/Magento/en_US/composer.json){:target="_blank"}

## For more information
For more information about Composer, see the [Composer documentation](https://getcomposer.org/doc/00-intro.md){:target="_blank"}.