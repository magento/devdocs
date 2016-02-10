---
layout: default
group: extension-dev-guide
subgroup: 1_Introduction
title: Introduction
menu_title: Introduction
menu_order: 1
menu_node: parent
github_link: extension-dev-guide/bk-extension-dev-guide.md
redirect_from: /guides/v1.0/extension-dev-guide/bk-extension-dev-guide.html
---

##{{page.menu_title}}

This guide contains information for developers who want to extend, or customize, any of the components in the Magento application. That includes building a new component from to extend Magento functionality. This guide is also for those who want to create components for Magento Marketplace, although it does not cover the publishing process.

##Magento components

Magento is made up of the following types of components:

* <a href="{{ site.gdeurl }}architecture/archi_perspectives/components/modules/mod_intro.html">Modules</a>
* <a href="{{ site.gdeurl }}frontend-dev-guide/themes/theme-general.html">Themes</a>
* <a href="{{ site.gdeurl }}frontend-dev-guide/translations/xlate.html#m2devgde-xlate-languagepack">Language packages</a>

A Magento *module* is code that accomplishes a particular business function or handles a Magento feature. A module is a collection `.php` and `.xml` files, but may also contain other files such as `.phtml` and image files. Modules are interactive with each other. A module also contains any user interface required for a user's interaction with the module, and any application interfaces that another module or code chunk might call, if you decide to expose any application interface to other Magento modules.

*Themes* change the look and feel of the Magento storefront or Admin. 

*Language packages* provide translations for strings that display on the storefront and Admin.

<div class="bs-callout bs-callout-info" id="info">
<p>You must follow a <a href="http://www.php-fig.org/psr/psr-4/">PSR compliant</a> structure when building a module.</p>
</div>

