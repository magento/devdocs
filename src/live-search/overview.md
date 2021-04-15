---
group: live-search
title: Live Search
ee_only: True
---

Live Search from Magento delivers a lightning fast, super relevant, and intuitive search experience for the storefront.

-  For merchants, this robust and highly customizable solution features multidimensional, [faceted search](https://docs.magento.com/user-guide/live-search/facets.html) with [synonyms](https://docs.magento.com/user-guide/live-search/synonyms.html) and merchandising [rules](https://docs.magento.com/user-guide/live-search/rules.html) that make it easy to add conditions that trigger events such as “boosting” and “burying” products on schedule.

Live Search is available for Magento Commerce at no additional charge.

## Architectural Overview

Live Search is deployed as a Magento service. The Magento side includes hosting the search Admin, syncing catalog data, and running the query service.

![Live Search architecture diagram]({{ page.baseurl }}/live-search/images/architecture-diagram.svg)
_Live Search architecture_

After the Live Search module (with catalog modules as dependencies) is installed and configured, Magento begins sharing search and catalog data with Magento services. At this point, Admin users can set up, customize, and manage search facets, synonyms, and merchandising rules.
