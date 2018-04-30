---
layout: default
group: arch-guide
subgroup: Architectural Basics
title: Extensibility and modularity
menu_title: Extensibility and modularity
menu_node:
menu_order:
version: 2.1
github_link: architecture/extensibility.md
---

## Overview

Product <i>extensibility</i> describes how easy it is to expand a product's feature set. An extensible product has been designed from its earliest  stages for customization and enhancement. Extensible products are designed for ease in expanding your installation's feature set, enriching current features, and integrating with third-party software.

Maximizing extensibility has been our goal through all aspects of Magento development. Core tasks such as shipping are packaged as discrete modules, and you expand your features by installing modules that you either buy from third-party vendors or create yourself. While logic specific to each {% glossarytooltip b51bd4e9-7174-4ca0-83a0-1a895c9fc9e8 %}shipping carrier{% endglossarytooltip %} is packaged in a discrete module, you can easily add or delete shipping providers by simply adding or deleting modules. The Magento Framework provides common logic to control routing and other core application functions.

## What makes a product extensible?

<i>Magento extensibility</i> describes the product's built-in ability for developers and merchants to routinely extend their storefront's capabilities as their business grows.

Below are the main factors affect extensibility.

### Architectural principles that guide product structure

Central to the Magento model of software development is the practice of replacing or extending core code rather than editing it. This strategy supports your efforts to maintain the integrity of the tested code we provide while still extensively customizing your {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %}.

### Open-source software to create and manage extensions

Magento is built on open-source technologies, created for the development community. For example, it uses {% glossarytooltip d85e2d0a-221f-4d03-aa43-0cda9f50809e %}Composer{% endglossarytooltip %} to manage dependencies. See <a href="{{page.baseurl}}/architecture/tech-stack.html">Technology Stack</a> for a complete list of technologies used.

### Coding standards

Adherence to standard best practices for {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} and {% glossarytooltip 312b4baf-15f7-4968-944e-c814d53de218 %}JavaScript{% endglossarytooltip %} code ensures that the code base is sound. Magento has adopted most of the Zend Framework Coding Standards for PHP. See <a href="{{page.baseurl}}/coding-standards/bk-coding-standards.html">Coding Standards</a> for more information.

### Upgrade and versioning strategies

Magento has well-defined upgrade and versioning strategies that can help you avoid any problems with software component dependencies. Add modules after confirming that the {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %} version is compatible with the Magento Framework version.

## Related topics {#m2arch-related}

<a href="{{page.baseurl}}/architecture/archi_perspectives/ABasics_intro.html">Architectural basics</a>

<a href="{{page.baseurl}}/architecture/global_extensibility_features.html">Global features that support extensibility</a>

<a href="{{page.baseurl}}/architecture/frontend_custom_strategies.html">Ease of frontend customization</a>
