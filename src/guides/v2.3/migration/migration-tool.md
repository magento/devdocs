---
group: migration-guide
subgroup: C_DMTool
title: Data Migration Tool
menu_title: Data Migration Tool
menu_node: parent
menu_order: 3
functional_areas:
  - Tools
---

## Overview

Data Migration Tool is a command-line interface (CLI) used for transferring data from Magento 1 to Magento 2. The Tool verifies consistency between Magento 1 and 2 database structures (tables and fields), tracks the data transfer progress, creates logs, and runs data verification tests.

## Modes

The Tool operates in three modes:

1. **Settings**: migrates configuration settings

1. **Data**: bulk migrates main data in the database

1. **Delta**: transfers incremental data updates, added to Magento 1 [storefront](https://glossary.magento.com/storefront) and [Admin](https://glossary.magento.com/admin) Panel while running previous migration modes

## Steps

Each mode consists of several steps that perform tasks specific to the mode (for example: URL rewrite, EAV, settings, etc.). Each step initially checks for data and structure integrity between Magento 1 and Magento 2 databases and, after verification succeeds, performs the transfer. The Tool then checks the volume of transferred data.
