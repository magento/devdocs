---
group: live-search
title: Live Search
ee_only: True
---

Live Search from Magento delivers a lightning fast, super relevant, and intuitive search experience for the storefront.

-  For merchants, this robust and highly customizable solution features multidimensional, [faceted search](https://docs.magento.com/user-guide/live-search/facets.html) with [synonyms](https://docs.magento.com/user-guide/live-search/synonyms.html) and merchandising [rules](https://docs.magento.com/user-guide/live-search/rules.html) that make it easy to add conditions that trigger events such as “boosting” and “burying” products on schedule.

-  For developers, Live Search represents a next-generation service with PWA components and support for both Graph QL & JS SDK and PHP/Luma.

Live Search is available for Magento Commerce out-of-the-box at no additional charge.

## Architectural Overview

Live Search is deployed as a Magento service. The Magento side includes the Live Search SDK, Admin search management, and catalog data sync. The SaaS side includes Catalog Services to sync catalog data, Search Admin Service to manage search configuration, and Search Service that handles the actual search.

![Live Search architecture diagram]({{ page.baseurl }}/live-search/images/architecture-diagram.svg)
_Live Search architecture_

After the Live Search module (with catalog modules as dependencies) is installed and configured, Magento begins sharing search and catalog data with Magento services. At this point, Admin users can set up, customize, and manage search facets, synonyms, and merchandising rules.
