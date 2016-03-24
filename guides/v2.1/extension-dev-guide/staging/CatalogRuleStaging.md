---
layout: default
group: extension-dev-guide
subgroup: 7_Staging
title: Staging in Magento 2 EE
menu_title: CatalogRuleStaging
menu_order: 2
level3_menu_node: level3child
level3_subgroup: staging_modules
github_link: extension-dev-guide/staging/CatalogRuleStaging.md
---

<h2>Contents</h2>

* TOC
{:toc}

# The Magento CatalogRuleStaging Module

## Overview
The **Magento_CatalogRuleStaging** module is a part of the staging functionality in Magento EE. It enables you to add catalog rule updates to existing store campaigns. In other words, you can add and/or remove catalog rules for some period of time. These updates are shown on the campaign dashboard.

## Backward incompatible changes
No backward incompatible changes

## Dependencies
The **Magento_CatalogRuleStaging** is dependent on the following modules:

- Magento_Staging
- Magento_Backend
- Magento_CatalogRule
- Magento_Store
- Magento_Catalog
- Magento_Customer
- Magento_Rule
- Magento_Ui

## Specific Implementation Details
The **Magento_CatalogRuleStaging** module changes the catalog rule creation page and the catalog rule related database tables to make them compatible with the Magento Staging Framework. This module depends on the **Magento_CatalogRule** module and extends its functionality. It changes database structure of the **Magento_CatalogRule** module and the way in which catalog rules are managed. The **Magento_CatalogRule** module cannot be disabled. Disabling it you make the **Magento_CatalogRule** module behaviour incorrect.
The **Magento_CatalogRuleStaging** module enables you to stage the following catalog rule attributes:

- Rule Name
- Description
- Websites
- Customer Groups
- Priority
- Product Apply
- Product Discount Amount
- Subproduct Discounts
- Subproduct Apply
- Subproduct Discount Amount
- Discard Subsequent Rules

This attribute set cannot be modified and is a part of the static Magento Catalog Rule form.

## Specific Settings
The **Magento_CatalogRuleStaging** module does not provide any specific settings.

## Specific Extension Points
The **Magento_CatalogRuleStaging** module does not provide any specific extension points. You can extend it using the Magento extension mechanism.
