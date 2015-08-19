---
layout: default
group: extension-dev-guide
subgroup: 1_Introduction
title: PHP developers guide
menu_title: Introduction
menu_order: 1
menu_node: parent
github_link: extension-dev-guide/bk-extension-dev-guide.md
redirect_from: /guides/v1.0/extension-dev-guide/bk-extension-dev-guide.html
---

##{{page.menu_title}}

This guide contains information for developers who want to extend, or customize, any of the components in the Magento platform. That includes building a new module from scratch for custom extension of Magento functionality. This guide is also for those who want to create an extension for Magento Connect, although it does not cover the publishing process.


##Magento components

Magento is made up of components:

* Modules
* Themes
* Language packages


A Magento *module* is code that accomplishes a particular business function or handles a Magento feature. A module is a collection `.php` and `.xml` files, but may also contain other files such as `.phtml` and image files. Modules are interactive with each other. A module also contains any user interface required for a user&#8217;s interaction with the module, and any application interfaces that another module or code chunk might call, if you decide to expose any application interface to other Magento modules.

*Themes* applied to your Magento development can change your modules appearance. 
*Language Packages* provides translations for strings that display on the frontend and Administration panels.

This guide focuses on Magento modules.


###Modules


A *package* is a module that is wrapped up in a distributable form using Composer.

An *extension* is a module&#8212;plus any themes and/or language packages needed for the extension&#8212;that is packaged for sale on Magento Connect.




<div class="bs-callout bs-callout-info" id="info">
<p>You must follow a <a href="http://www.php-fig.org/psr/psr-4/">PSR compliant</a> structure when building a module.</p>
</div>





<h2 id="m2arch-related">Related topic</h2>

<a href="{{ site.gdeurl }}architecture/modules/mod_intro.html">Modules</a> in the Magento Architecture Guide.
