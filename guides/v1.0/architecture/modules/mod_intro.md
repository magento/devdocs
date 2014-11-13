---
layout: default-arch
title: Introduction to Modules
---

<h1 id="m2arch-module-intro">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}guides/v1.0/architecture/modules/mod_intro.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<h2 id="arch-modules-overview">Overview</h2>
Magento is an application that is built  of several different types of components: themes, modules, libraries, and translation files.

Themes and modules are the units of customization in Magento, themes for user experience and modules for business features. Both have a lifecycle allowing them to be installed, deleted, disabled, etc.

<h3 id="arch-modules-modules-defintion">Modules</h3>

Modules encapsulate a particular business feature or set of features. They can relate to and depend on each other in a variety of ways, but should be as independent as possible to maximum flexibility when customizing a site. And while modules primarily define new business features, or customizations to existing ones, they also define a default user interface for those features, which can be customized by themes.

A Module is a logical group--that is, a directory containing blocks, controllers, helpers, models, and so on related to the specific feature or a widget. Module is a part of the application layer. A module is designed to work independently and not to intervene into work of other functionality. Using a modular approach implies that every module encapsulates a feature and has minimum dependencies on other modules.

Modules live in the /app/modules folder of a Magento installation, in a directory with the following PSR-0 compliant format: /app/modules/<vendor>/<module_name>, e.g. the Customer module of Magento can be found at /app/modules/Magento/Customer. Inside of this folder, you will find all of the code and configuration related to this module, including the etc/module.xml file, which contains the name and version of the module, as well as any dependencies.


