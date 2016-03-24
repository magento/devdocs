---
layout: default
group: extension-dev-guide
subgroup: 7_Staging
title: Staging in Magento 2 EE
menu_title: Staging
menu_order: 2
level3_menu_node: level3child
level3_subgroup: staging_modules
github_link: extension-dev-guide/staging/Staging.md
---

<h2>Contents</h2>

* TOC
{:toc}

## Overview
Magento_Staging module is used for setting up, previewing and managing future store updates

## Dependencies
The **Magento_Staging** is dependent on the following modules:
 - Magento_Ui

## Extension points
Magento_Staging module have configured timeline view that simplify representation of campaigns. Configuration of
timeline is present in view/adminhtml/ui_component/staging_update_grid.xml file. Difference between simple grid is
in next components declaration:
 - listingToolbar
    * template - overloaded template to provide switcher between grid and timeline, legend for timeline.
    * updateTypes - path to status column that provide data for legend
 - columns
    * component - timeline component tht extends listing.
    * recordTmpl - overloaded template for timeline records.
    * detailsTmpl - template for tooltip that provide details about campaign.
 - status column
    * component - extends selection column, sets class based on value.
    * updateTypesMap - array that contains bounded classes and values.