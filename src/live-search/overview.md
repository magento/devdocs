---
group: live-search
title: Live Search
ee_only: True
---

Live Search powered by [Adobe Sensei](https://www.adobe.com/sensei.html) delivers a lightning fast, super relevant, and intuitive search experience for the storefront.

-  For merchants, this robust and highly customizable solution features multidimensional, [faceted search]({{ site.user_guide_url }}/live-search/facets.html) with [synonyms]({{ site.user_guide_url }}/live-search/synonyms.html) and merchandising [rules]({{ site.user_guide_url }}/live-search/rules.html) that make it easy to add conditions that trigger events such as “boosting” and “burying” products on schedule.

Live Search is available for {{site.data.var.ee}} at no additional charge.

## Architectural overview

Live Search is deployed as a service. The {{site.data.var.ee}} side includes hosting the search Admin, syncing catalog data, and running the query service.

![Live Search architecture diagram]({{ page.baseurl }}/live-search/images/architecture-diagram.svg)
_Live Search architecture_

After the Live Search module (with catalog modules as dependencies) is installed and configured, {{site.data.var.ee}} begins sharing search and catalog data with SaaS services. At this point, Admin users can set up, customize, and manage search facets, synonyms, and merchandising rules.
