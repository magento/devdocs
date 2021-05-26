---
group: marketplace-sellers
title: Extension Footprint Analysis
---

{: .bs-callout .bs-callout-info} The footprint analyzer is currently released as a beta feature, meaning that some of the information may not be completely accurate or present at all. Beta status of the feature is also indicated on the product listing page.

## Overview

Footprint analysis is an automated check that generates a report based on the static analysis of the extension code. After processing, reports are visible on the product listing page and include information on certain specific features which provide Magento Marketplace customers insights on extension capabilities from the code perspective.

## When testing is done

All extension packages have their footprint analyzed at the time of submission. This check is not a test and therefore cannot be passed or failed.

## What is being checked

At the moment the footprint analyzer check is performed on the static package code to identify APIs exposed by the module. The report usually consists of the following sections:

*  Programmatic API and Data interfaces – provides information on the number of programmatic APIs found in the extension code package.
*  Web API – provides insights on the number of REST and SOAP APIs exposed by the extension package.
*  GraphQL – verifies if the extension exposes any GraphQL entities.
