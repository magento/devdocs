---
group: marketplace-sellers
title: Extension Footprint analysys
---

{: .bs-callout .bs-callout-info}Footprint analyzer is currently released as a beta feature meaning that some of the information may not be copletely accurate or present at all. Beta status of the feature is also indicated on the product lisging page.

## Overview

Foorptint analysis is an automated check that generates report based on static analysis of the extension code. After processing, reports are visible on the product listing page and include information on certain specific features which provide Magento Marketplace customers insights on extension capabilities from the code perspective.

## When testing is done

All extension packages have their footprint analyzed at the time of submissions. This check is not a test and therefore cannot be passed or failed.

## What is being checked

At the moment Footptint Analyzer check is performing static package code testing to identify APIs exposed by the module. Report usually consists of the following sections:
 - Programmatic API and Data interfaces – provides information on the number of programmatic APIs found in the extension code package.
 - Web API – provides insights on the number of REST and SOAP APIs exposed by the extension package.
 - GraphQL – verifies if extension exposes any GraphQL entities
