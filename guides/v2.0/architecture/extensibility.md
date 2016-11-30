---
layout: default
group: arch-guide
subgroup: Architectural Basics
title: Extensibility and modularity
menu_title: Extensibility and modularity
menu_node:
menu_order:
version: 2.0
github_link: architecture/extensibility.md
---

## {{page.menu_title}}
{:.no_toc}

* TOC
{:toc}

## Overview

Product <i>extensibility</i> describes how easy it is to expand a product's feature set. An extensible product has been designed from its earliest  stages for customization and enhancement. Extensible products are designed for ease in expanding your installation's feature set, enriching current features, and integrating with third-party software.

Maximizing extensibility has been our goal through all aspects of Magento development. Core tasks such as shipping are packaged as discrete modules, and you expand your features by installing modules that you either buy from third-party vendors or create yourself. While logic specific to each shipping carrier is packaged in a discrete module, you can easily add or delete shipping providers by simply adding or deleting modules. The Magento Framework provides common logic to control routing and other core application functions.

## What makes a product extensible?

<i>Magento extensibility</i> describes the product's built-in ability for developers and merchants to routinely extend their storefront’s capabilities as their business grows.

Below are the main factors affect extensibility.

### Architectural principles that guide product structure

Central to the Magento model of software development is the practice of replacing or extending core code rather than editing it. This strategy supports your efforts to maintain the integrity of the tested code we provide while still extensively customizing your storefront.

### Open-source software to create and manage extensions

Magento is built on open-source technologies, created for the development community. For example, it uses Composer to manage dependencies. See <a href="{{page.baseurl}}architecture/tech-stack.html">Technology Stack</a> for a complete list of technologies used.

### Coding standards

Adherence to standard best practices for PHP and JavaScript code ensures that the code base is sound. Magento has adopted most of the Zend Framework Coding Standards for PHP. See <a href="{{page.baseurl}}coding-standards/bk-coding-standards.html">Coding Standards</a> for more information.

### Upgrade and versioning strategies

Magento has well-defined upgrade and versioning strategies that can help you avoid any problems with software component dependencies. Add modules after confirming that the module version is compatible with the Magento Framework version.

## Related topics {#m2arch-related}

<a href="{{page.baseurl}}architecture/archi_perspectives/ABasics_intro.html">Architectural basics</a>

<a href="{{page.baseurl}}architecture/global_extensibility_features.html">Global features that support extensibility</a>

<a href="{{page.baseurl}}architecture/frontend_custom_strategies.html">Ease of frontend customization</a>
