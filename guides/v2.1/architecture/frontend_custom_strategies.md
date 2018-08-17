---
group: arch-guide
title: Ease of frontend customization
menu_title: Ease of frontend customization
---

## Overview {#m2arch-whatis-overview}

The Magento {% glossarytooltip b00459e5-a793-44dd-98d5-852ab33fc344 %}frontend{% endglossarytooltip %} is designed to optimize {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %} customization, with highly extensible *themes* being the central customization mechanism.

Merchants are encouraged to use Magento components and themes to extend and transform the appearance of their storefronts.

## Storefront customization tools

Magento provides several tools to help you significantly jumpstart the storefront customization process:

* Magento Blank {% glossarytooltip d2093e4a-2b71-48a3-99b7-b32af7158019 %}Theme{% endglossarytooltip %}

* [Magento UI Library Components]({{page.baseurl}}/ui-components/ui-component.html)

* [Magento Admin Pattern Library]({{page.baseurl}}/pattern-library/bk-pattern.html)

See the [Frontend Developer Guide]({{page.baseurl}}/frontend-dev-guide/bk-frontend-dev-guide.html) for information on creating your themes.

### Magento Blank theme

The Magento blank theme template provides a launchpad for storefront customization. You can use this boilerplate as a robust starting point for your own theme development.

### Magento UI components

Using Magento standard coding and styling tools can help:

* enforce for consistency in design across your storefronts
* simplify (and speed up) the design process

This component {% glossarytooltip 08968dbb-2eeb-45c7-ae95-ffca228a7575 %}library{% endglossarytooltip %} contains standard reusable components for form features, such as fields and buttons, and navigation elements. The Magento UI library is a set of generic web components and Magento-specific patterns, which simplifies the process of Magento theme creation and customization.

See [Magento UI Library Components]({{page.baseurl}}/ui-components/ui-component.html) for details about this library.

### Magento Admin pattern library

A *pattern library* is a collection of user interface (UI) design patterns that can be re-used in locations throughout your product installation. The [Magento Admin Pattern Library]({{page.baseurl}}/pattern-library/bk-pattern.html) defines examples of components that administrators working with the storefront can use.

Form elements included in the {% glossarytooltip 18b930cf-09cc-47c9-a5e5-905f86c43f81 %}Magento Admin{% endglossarytooltip %} pattern library include:

* address form
* button bar
* container
* tabs
* sign-in form

Users of the default Magento storefront encounter examples of these form elements throughout the product. These patterns provide a valuable language of software components (and indirectly, user experiences) for {% glossarytooltip 55774db9-bf9d-40f3-83db-b10cc5ae3b68 %}extension{% endglossarytooltip %} developers and administrators.

The Magento {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}Admin{% endglossarytooltip %} Pattern library is built on the LESS preprocessor and implemented as a {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %}. You can download a free, current version of this module from [Magento Marketplace](https://marketplace.magento.com/).

See [Magento Admin Pattern Library]({{page.baseurl}}/pattern-library/bk-pattern.html) for more information on using this library.

## Related topics {#m2arch-related}

[Extensibility and modularity]({{page.baseurl}}/architecture/extensibility.html)

[Global extensibility features]({{page.baseurl}}/architecture/global_extensibility_features.html)

[Magento Admin Pattern Library]({{page.baseurl}}/pattern-library/bk-pattern.html)

[Magento UI Library Components]({{page.baseurl}}/ui-components/ui-component.html)
