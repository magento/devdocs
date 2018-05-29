---
layout: default 
group: release-notes
subgroup: 05_techbull
title: MasterCard BIN Range Upgrade Magento 2.0.x
menu_title: MasterCard BIN Upgrade for 2.0.x (May 19, 2017)
menu_node: 
menu_order: 7
version: 2.0
github_link: release-notes/tech_bull_20x_MasterCard.md
---

*Technical bulletin published on May 19, 2017.*

These instructions apply to anyone running Magento Open Source (formerly Community Edition) or Magento Commerce (formerly Enterprise Edition) version 2.0.x. 

### Issue

MasterCard recently added a new series of Bank Identification Numbers (BIN). As of June 30, 2017, MasterCard may fine merchants who do not support cards that use this new range of BIN numbers, and transactions on your store for customers that use cards with these new BINs may fail. 


### How does this issue affect users of Magento 2.0.x?
You must upgrade to Magento 2.0.14 before June 30 to support transactions made with cards that implement these new BIN numbers. 

<div class="bs-callout bs-callout-warning" markdown="1">
Magento 2.0.14 is scheduled for the end of May. This patch will include support for this MasterCard BIN update plus other critical security fixes. 
</div>

### More information
[MasterCard Bank Identification Numbers Range Update](https://devdocs.magento.com/guides/v2.1/release-notes/tech_bull_21x_MasterCard.html){:target="_blank"} provides an overview of platform-wide MasterCard-related issues for Magento. 

MasterCard discusses the issue [here](https://www.mastercard.us/en-us/issuers/get-support/2-series-bin-expansion.html){:target="_blank"}. 








