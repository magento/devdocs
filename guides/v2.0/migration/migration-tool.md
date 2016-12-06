---
layout: default
group:  migration
subgroup: C_Data Migration Tool
title: Data Migration Tool
menu_title: Data Migration Tool
menu_node: parent
menu_order: 3
version: 2.0
github_link: migration/migration-tool.md
redirect_from: /guides/v1.0/migration/migration-tool.html
---

## Overview

Data Migration Tool is a command-line interface (CLI) used for transferring data from Magento 1 to Magento 2. The Tool verifies consistency between Magento 1 and 2 database structures (tables and fields), tracks the data tranfer progress, creates logs, and runs data verification tests.

## Modes

The Tool operates in three modes:

1. **Settings**: migrates configuration settings

2. **Data**: bulk migrates main data in the database

3. **Delta**: transfers incremental data updates, added to Magento 1 storefront and Admin Panel while running previous migration modes

## Steps

Each mode consists of several steps that perform specific steps (for example: URL rewrite, EAV, settings, etc.). Each step initially checks data integrity between Magento 1 and Magento 2 databases and, after verification succeeds, performs the transfer. Then the Tool runs the data verification tests again.
