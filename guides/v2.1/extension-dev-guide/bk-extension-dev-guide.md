---
layout: default
group: extension-dev-guide
subgroup: 01_Introduction
title: PHP Developer Guide
landing-page: PHP Developer Guide
menu_title: Introduction
menu_order: 1
menu_node: parent
version: 2.1
github_link: extension-dev-guide/bk-extension-dev-guide.md
redirect_from:
  - /guides/v1.0/extension-dev-guide/bk-extension-dev-guide.html
  - /guides/v2.0/mktpl-quickstart/bk-marketplace-qs.html
  - /guides/v2.0/mktpl-quickstart/intro-moreinfo.html
  - /guides/v2.1/mktpl-quickstart/bk-marketplace-qs.html
  - /guides/v2.2/mktpl-quickstart/intro-moreinfo.html
  - /guides/v2.1/mktpl-quickstart/intro-moreinfo.html
---

The {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} Developer Guide contains information for developers who want to know more about developing or modifying Magento components. With this knowledge you can extend or customize any of the existing components in the Magento application. You can also create components that introduce new functionality and distribute them to merchants.

## Magento components

The Magento application is made up of *Modules*, *Themes*, and *Language Packages*:

* <a href="{{page.baseurl}}/architecture/archi_perspectives/components/modules/mod_intro.html">*Modules*</a> interact with other parts of the application to accomplish a particular business function or provide a feature. A {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %} can contain a user interface for displaying information or interacting with the user. It can also contain application interfaces that another Magento module or code chunk might call.

* <a href="{{page.baseurl}}/frontend-dev-guide/themes/theme-general.html">*Themes*</a> provide a personalized touch for each Magento installation by changing the look and feel of the {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %} or {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}Admin{% endglossarytooltip %}. Two themes are already available within the default Magento 2.x code structure: Blank theme and Luma theme. Refer to these default themes when creating custom themes. 

* <a href="{{page.baseurl}}/frontend-dev-guide/translations/xlate.html">*Language packages*</a> assist in internationalization(i18n) and localization by providing translations for strings that display on the storefront and Admin.

<div class="bs-callout bs-callout-info" id="info">
<p>You must follow a <a href="http://www.php-fig.org/psr/psr-4/">PSR-4 compliant</a> structure when building a module.</p>
</div>

#### Related topics

*	<a href="{{page.baseurl}}/extension-dev-guide/intro/developers_roadmap.html">Developer roadmap</a>
*	<a href="{{page.baseurl}}/extension-dev-guide/intro/intro-composer.html">Introduction to Composer</a>
*	<a href="{{page.baseurl}}/extension-dev-guide/intro/intro-composer-gloss.html">Glossary of common terms</a>
