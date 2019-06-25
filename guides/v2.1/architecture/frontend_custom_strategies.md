---
group: architecture-guide
title: Ease of frontend customization
menu_title: Ease of frontend customization
---

## Overview {#m2arch-whatis-overview}

The Magento [frontend](https://glossary.magento.com/frontend) is designed to optimize [storefront](https://glossary.magento.com/storefront) customization, with highly extensible *themes* being the central customization mechanism.

Merchants are encouraged to use Magento components and themes to extend and transform the appearance of their storefronts.

## Storefront customization tools

Magento provides several tools to help you significantly jumpstart the storefront customization process:

* Magento Blank [Theme](https://glossary.magento.com/theme)

* [Magento UI Library Components]({{page.baseurl}}/ui-components/ui-component.html)

* [Magento Admin Pattern Library]({{page.baseurl}}/pattern-library/bk-pattern.html)

See the [Frontend Developer Guide]({{page.baseurl}}/frontend-dev-guide/bk-frontend-dev-guide.html) for information on creating your themes.

### Magento Blank theme

The Magento blank theme template provides a launchpad for storefront customization. You can use this boilerplate as a robust starting point for your own theme development.

### Magento UI components

Using Magento standard coding and styling tools can help:

* enforce for consistency in design across your storefronts
* simplify (and speed up) the design process

This component [library](https://glossary.magento.com/library) contains standard reusable components for form features, such as fields and buttons, and navigation elements. The Magento UI library is a set of generic web components and Magento-specific patterns, which simplifies the process of Magento theme creation and customization.

See [Magento UI Library Components]({{page.baseurl}}/ui-components/ui-component.html) for details about this library.

### Magento Admin pattern library

A *pattern library* is a collection of user interface (UI) design patterns that can be re-used in locations throughout your product installation. The [Magento Admin Pattern Library]({{page.baseurl}}/pattern-library/bk-pattern.html) defines examples of components that administrators working with the storefront can use.

Form elements included in the [Magento Admin](https://glossary.magento.com/magento-admin) pattern library include:

* address form
* button bar
* container
* tabs
* sign-in form

Users of the default Magento storefront encounter examples of these form elements throughout the product. These patterns provide a valuable language of software components (and indirectly, user experiences) for [extension](https://glossary.magento.com/extension) developers and administrators.

The Magento [Admin](https://glossary.magento.com/admin) Pattern library is built on the Less preprocessor and implemented as a [module](https://glossary.magento.com/module). You can download a free, current version of this module from [Magento Marketplace](https://marketplace.magento.com/).

See [Magento Admin Pattern Library]({{page.baseurl}}/pattern-library/bk-pattern.html) for more information on using this library.

## Related topics {#m2arch-related}

[Extensibility and modularity]({{page.baseurl}}/architecture/extensibility.html)

[Global extensibility features]({{page.baseurl}}/architecture/global_extensibility_features.html)

[Magento Admin Pattern Library]({{page.baseurl}}/pattern-library/bk-pattern.html)

[Magento UI Library Components]({{page.baseurl}}/ui-components/ui-component.html)
