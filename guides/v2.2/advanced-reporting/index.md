---
layout: default
group: analytics
subgroup: Advanced Reporting
title: Advanced Reporting
menu_title: Advanced Reporting
menu_order: 1
menu_node: parent
version: 2.2
github_link: advanced-reporting/index.md
---

Advanced reporting functionality is provided through integration of a Magento instance with the [Magento Business Intelligence] (MBI).
Magento collects data and sends them to the MBI for analytics.
 
**Magento Admin > Dashboard > "Go to Advanced Reporting" button"** opens reports in  `https://advancedreporting.rjmetrics.com/report` with corresponding authorization.
 
Learn more about:

- [Magento modules that implement the functionality][modules]
- [Data collection configuration and settings][collection]

## Preconditions

1. A Magento store website has a real domain name.
2. The website works using HTTPS with valid certificate.
3. Successful subscription to the Advanced reporting.

<div class="bs-callout bs-callout-info" markdown="1">
First synchronization of a Magento instance and the MBI can take a day after successful subscription.
</div>

## Extensibility

Though the Analytics module provides API, it is used specifically to interchange data with the MBI. We do not recommend to extend the advanced reporting functionality in this version.

## Recommendations

To avoid system overload during its prime time, you can set the preferable time of a day for a data collection.

**Magento Admin > Stores > Settings > Configuration > General > Advanced Reporting**


<!-- LINK DEFINITIONS -->

[Magento Business Intelligence]: https://magento.com/products/business-intelligence
[modules]: ./modules
[collection]: ./data-collection