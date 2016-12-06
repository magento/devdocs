---
layout: default
group: arch-guide
subgroup: Architectural Basics
title: Ease of frontend customization
menu_title: Ease of frontend customization
menu_node:
menu_order:
version: 2.0
github_link: architecture/frontend_custom_strategies.md
---

## {{page.menu_title}}
{:.no_toc}

* TOC
{:toc}

## Overview {#m2arch-whatis-overview}

The Magento frontend is designed to optimize storefront customization, with highly extensible <i>themes</i> being the central customization mechanism.

Merchants are encouraged to use Magento components and themes to extend and transform the appearance of their storefronts.

## Storefront customization tools

Magento provides several tools to help you significantly jumpstart the storefront customization process:

* Magento Blank Theme

* <a href="{{page.baseurl}}ui-components/ui-component.html">Magento UI Library Components</a>

* <a href="{{page.baseurl}}pattern-library/bk-pattern.html">Magento Admin Pattern Library</a>

See the <a href="{{page.baseurl}}frontend-dev-guide/bk-frontend-dev-guide.html">Frontend Developer Guide</a> for information on creating your themes.

### Magento Blank theme

The Magento blank theme template provides a launchpad for storefront customization. You can use this boilerplate as a robust starting point for your own theme development.

### Magento UI components
Using Magento standard coding and styling tools can help:

* enforce for consistency in design across your storefronts
* simplify (and speed up) the design process

This component library contains standard reusable components for form features, such as fields and buttons, and navigation elements. The Magento UI library is a set of generic web components and Magento-specific patterns, which simplifies the process of Magento theme creation and customization.

See <a href="{{page.baseurl}}ui-components/ui-component.html">Magento UI Library Components</a> for details about this library.

### Magento Admin pattern library

A <i>pattern library</i> is a collection of user interface (UI) design patterns that can be re-used in locations throughout your product installation. The <a href="{{page.baseurl}}pattern-library/bk-pattern.html">Magento Admin Pattern Library</a> defines examples of components that administrators working with the storefront can use.

Form elements included in the Magento Admin pattern library include:

* address form
* button bar
* container
* tabs
* sign-in form

Users of the default Magento storefront encounter examples of these form elements throughout the product. These patterns provide a valuable language of software components (and indirectly, user experiences) for extension developers and administrators.

The Magento Admin Pattern library is built on the LESS preprocessor and implemented as a module. You can download a free, current version of this module from [Magento Marketplace](https://marketplace.magento.com/){:target="_blank"}.

See <a href="{{page.baseurl}}pattern-library/bk-pattern.html">Magento Admin Pattern Library</a> for more information on using this library.

## Related topics {#m2arch-related}

<a href="{{page.baseurl}}architecture/extensibility.html">Extensibility and modularity</a>

<a href="{{page.baseurl}}architecture/global_extensibility_features.html">Global extensibility features</a>

<a href="{{page.baseurl}}pattern-library/bk-pattern.html">Magento Admin Pattern Library</a>

<a href="{{page.baseurl}}ui-components/ui-component.html">Magento UI Library Components</a>
