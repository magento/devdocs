---
layout: default
group: extension-dev-guide
subgroup: 7_Staging
title: Staging in Magento 2 EE
menu_title: SalesRuleStaging
menu_order: 2
level3_menu_node: level3child
level3_subgroup: staging_modules
github_link: extension-dev-guide/staging/SalesRuleStaging.md
---

<h2>Contents</h2>

* TOC
{:toc}

# The Magento SalesRuleStaging Module

## Overview
The **Magento_SalesRuleStaging** module is a part of the staging functionality in Magento EE. It enables you to add sales rule updates to existing store campaigns. In other words, you can add and/or remove sales rules for some period of time. These updates are shown on the campaign dashboard.

## Specific Implementation Details
The **Magento_SalesRuleStaging** module changes the Cart Price Rules page and the sales rule related database tables to make them compatible with the Magento Staging Framework. 
The **Magento_SalesRuleStaging** module enables you to stage the following sales rule attributes:
- Rule Name
- Description
- Websites
- Customer Groups
- Priority
- Condition
- Action

## Module Dependencies
This module depends on the **Magento_SalesRule** module and extends its functionality. It changes database structure of the **Magento_SalesRule** module and the way in which sales rules are managed. 
The **Magento_SalesRule** module cannot be disabled. Disabling it would make the **Magento_SalesRuleStaging** module behavior incorrect.

## Module Install/Uninstall
The **Magento_SalesRuleStaging** module does not require any specific settings.

## Specific Extension Points
The **Magento_SalesRuleStaging** module does not provide any specific extension points. You can extend it using the Magento extension mechanism.
