---
layout: default
group: extension-dev-guide
subgroup: 7_Staging
title: Staging in Magento 2 EE
menu_title: CatalogStaging
menu_order: 2
level3_menu_node: level3child
level3_subgroup: staging_modules
github_link: extension-dev-guide/staging/CatalogStaging.md
---

<h2>Contents</h2>

* TOC
{:toc}

# The Magento_CatalogStaging module

## Overview

The Magento_CatalogStaging module is a part of the staging functionality in Magento EE. It enables you to add catalog updates to the existing store campaigns. In other words, you can change the category entity attributes in campaigns. These updates are shown on the campaign dashboard.

## Specific Implementation Details

The Magento_CatalogStaging module changes the category creation page and the category related database tables to make them compatible with the Magento Staging Framework. This module depends on the Magento_Catalog module and extends its functionality. It changes database structure of the Magento_Catalog module and the way in which a category is managed.

The Magento_CatalogStaging module enables you to stage the following category attributes:

- Enable/disable category
- Include in menu
- Category Name
- Content 
    - Category image
    - Description
    - Cms blocks
- Display Settings 
    - Display mode
    - Anchor
    - Product sorting
    - Layered Navigation Price Step
- Search Engine Optimization
    - Meta Title
    - Meta Keywords
    - Meta Description
- Design 
    - Layout
    - Layout Update XML
- Schedule Design Update 
    - Schedule Update From
    - New Theme
    
The following category attributes cannot be staged:

- Assignment of products to a category
- URL

The Magento_CatalogStaging module enables you to stage the following product attributes:

- Attribute Set
- Product Name
- SKU
- Price
- weight attributes
- Visibility
- New(flag)
- Country of Manufacture
- Description
- Websites(assignment)
- Design
  - Layout
  - Display Product Options In
  - Layout Update XML
- Related Products, Up-Sells, and Cross-Sells

Not stageable product attributes:

- Quantity
- URL key

## Specific Settings

The Magento_CatalogStaging module does not provide any specific settings.

## Specific Extension Points

The Magento_CatalogStaging module does not provide any specific extension points. You can extend it using the Magento extension mechanism.