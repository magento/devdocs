---
group: php-developer-guide
title: PHP Developer Guide
---

The [PHP](https://glossary.magento.com/php) Developer Guide contains information for developers who want to know more about developing or modifying Magento components. With this knowledge you can extend or customize any of the existing components in the Magento application. You can also create components that introduce new functionality and distribute them to merchants.

## Magento components

The Magento application is made up of *Modules*, *Themes*, and *Language Packages*:

*  [**Modules**]({{ page.baseurl }}/architecture/archi_perspectives/components/modules/mod_intro.html) interact with other parts of the application to accomplish a particular business function or provide a feature. A [module](https://glossary.magento.com/module) can contain a user interface for displaying information or interacting with the user. It can also contain application interfaces that another Magento module or code chunk might call.

*  [**Themes**]({{ page.baseurl }}/frontend-dev-guide/themes/theme-overview.html) provide a personalized touch for each Magento installation by changing the look and feel of the [storefront](https://glossary.magento.com/storefront) or [Admin](https://glossary.magento.com/admin). Two themes are already available within the default Magento 2.x code structure: Blank theme and Luma theme. Refer to these default themes when creating custom themes.

*  [**Language packages**]({{ page.baseurl }}/frontend-dev-guide/translations/xlate.html) assist in internationalization(i18n) and localization by providing translations for strings that display on the storefront and Admin.

 {:.bs-callout-info}
You must follow a [PSR-4 compliant](http://www.php-fig.org/psr/psr-4/) structure when building a module.

{:.ref-header}
Related topics

*  [Developer roadmap]({{ page.baseurl }}/extension-dev-guide/intro/developers_roadmap.html)
*  [Introduction to Composer]({{ page.baseurl }}/extension-dev-guide/intro/intro-composer.html)
*  [Glossary of common terms]({{ page.baseurl }}/extension-dev-guide/intro/intro-composer-gloss.html)
