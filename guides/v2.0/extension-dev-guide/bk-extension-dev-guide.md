---
layout: default
group: extension-dev-guide
subgroup: 01_Introduction
title: Introduction
menu_title: Introduction
menu_order: 1
menu_node: parent
version: 2.0
github_link: extension-dev-guide/bk-extension-dev-guide.md
redirect_from:
  - /guides/v1.0/extension-dev-guide/bk-extension-dev-guide.html
  - /guides/v2.0/mktpl-quickstart/bk-marketplace-qs.html
  - /guides/v2.0/mktpl-quickstart/intro-moreinfo.html
---

## {{page.menu_title}}

The PHP Developer Guide contains information for developers who want to know more about developing or modifying Magento components. With this knowledge you can extend or customize any of the existing components in the Magento application. You can also create components that introduce new functionality and distribute them to merchants.

## Magento components

The Magento application is made up of *Modules*, *Themes*, and *Language Packages*:

* <a href="{{page.baseurl}}architecture/archi_perspectives/components/modules/mod_intro.html">*Modules*</a> interact with other parts of the application to accomplish a particular business function or provide a feature. A module can contain a user interface for displaying information or interacting with the user. It can also contain application interfaces that another Magento module or code chunk might call.

* <a href="{{page.baseurl}}frontend-dev-guide/themes/theme-general.html">*Themes*</a> provide a personalized touch for each Magento installation by changing the look and feel of the storefront or Admin.

* <a href="{{page.baseurl}}frontend-dev-guide/translations/xlate.html">*Language packages*</a> assist in internationalization(I18n) and localization by providing translations for strings that display on the storefront and Admin.

<div class="bs-callout bs-callout-info" id="info">
<p>You must follow a <a href="http://www.php-fig.org/psr/psr-4/">PSR compliant</a> structure when building a module.</p>
</div>

#### Related topics

*	<a href="{{page.baseurl}}extension-dev-guide/intro/developers_roadmap.html">Developer roadmap</a>
*	<a href="{{page.baseurl}}extension-dev-guide/intro/intro-composer.html">Introduction to Composer</a>
*	<a href="{{page.baseurl}}extension-dev-guide/intro/intro-composer-gloss.html">Glossary of common terms</a>
