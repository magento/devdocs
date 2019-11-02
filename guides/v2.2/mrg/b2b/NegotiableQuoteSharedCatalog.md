---
group: module-reference-guide
subgroup: 30_B2B
title: Magento_NegotiableQuoteSharedCatalog module
menu_title: NegotiableQuoteSharedCatalog
menu_order: 170
functional_areas:
  - B2B
---

## Overview

The `Magento_NegotiableQuoteSharedCatalog` module enables the `NegotiableQuote` module to interact with a `SharedCatalog` in an B2B environment. This module extends the `Magento_NegotiableQuote` module and `Magento_SharedCatalog` modules.

The `Magento_NegotiableQuoteSharedCatalog` module provides the following features:

*  Remove items from a negotiable quote if corresponding products were removed from this company's shared catalog.

## Installation details

This module has a dependency on the `Magento_NegotiableQuote` and `Magento_SharedCatalog` module, which must be installed and enabled first.

The `Magento_NegotiableQuoteSharedCatalog` module does not create any backward incompatible changes. It can be uninstalled at any time.

## Structure

[Learn about a typical file structure for a Magento 2 module]({{ page.baseurl }}/extension-dev-guide/build/module-file-structure.html).

## Extensibility

Extension developers can interact with the `Magento_NegotiableQuoteSharedCatalog` module. For more information about the Magento extension mechanism, see [Magento plug-ins]({{ page.baseurl }}/extension-dev-guide/plugins.html).

[The Magento dependency injection mechanism]({{ page.baseurl }}/extension-dev-guide/depend-inj.html) enables you to override the functionality of the `Magento_NegotiableQuoteSharedCatalog` module.

## Additional information

You can track [backward incompatible changes made in a Magento B2b mainline after the Magento 2.2 release]({{ page.baseurl }}/release-notes/changes/b2b_changes.html).
