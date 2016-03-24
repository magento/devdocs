---
layout: default
group: extension-dev-guide
subgroup: 7_Staging
title: Staging in Magento 2 EE
menu_title: CmsStaging
menu_order: 2
level3_menu_node: level3child
level3_subgroup: staging_modules
github_link: extension-dev-guide/staging/CmsStaging.md
---

<h2>Contents</h2>

* TOC
{:toc}

# The Magento_CmsStaging module

## Overview

The Magento_CmsStaging module is a part of the staging functionality in Magento EE. It enables you to add CMS page and/or  block updates to the existing store campaigns. These updates are shown on the campaign dashboard.

## Implementation Details

The Magento_CmsStaging module changes the CMS Pages/Blocks creation page to make them compatible with the Magento Staging Framework. This module depends on the Magento_Cms module and extends its functionality. It changes database structure of the Magento_Cms module and the way in which CMS Pages/Blocks is managed.

The Magento_CmsStaging module enables you to stage the following information:

### CMS Pages:

- Enable/disable CMS Page
- Page Title
- Content 
    - Content Heading
    - Content (wysiwyg)
- Search Engine Optimisation 
    - URL Key
    - Meta Keywords
    - Meta Description
- Page in Websites
- Design 
    - Layout
    - Layout Update XML
- Custom Design Update 
    - Custom Design Update From
    - Custom Design Update To
    - New Theme
    - New Layout

### CMS Blocks:

- Enable/disable CMS Block
- Block Title
- Identifier 
- Store View
- Content (wysiwyg) 

## Specific Settings

The Magento_CmsStaging module does not provide any specific settings.

## Extension Points

The Magento_CmsStaging module does not provide any specific extension points. You can extend it using the Magento extension mechanism.