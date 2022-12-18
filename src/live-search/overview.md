---
group: live-search
title: Live Search
ee_only: True
redirect_to: https://experienceleague.adobe.com/docs/commerce-merchant-services/live-search/guide-overview.html?lang=en
status: migrated
---

Live Search powered by [Adobe Sensei](https://www.adobe.com/sensei.html) delivers a lightning fast, super relevant, and intuitive search experience for the storefront. Live Search is available for {{site.data.var.ee}} at no additional charge.

For merchants, this robust and highly customizable solution features multidimensional, [faceted search](https://experienceleague.adobe.com/docs/commerce-merchant-services/live-search/live-search-admin/facets/facets.html) with [synonyms](https://experienceleague.adobe.com/docs/commerce-merchant-services/live-search/live-search-admin/synonyms/synonyms.html) and merchandising [rules](https://experienceleague.adobe.com/docs/commerce-merchant-services/live-search/live-search-admin/rules/rules.html) that make it easy to add conditions that trigger events that boost or bury products on schedule.

In the storefront, a search-as-you-type [popover](https://experienceleague.adobe.com/docs/commerce-merchant-services/live-search/live-search-storefront/storefront-popover.html) replaces the standard quick Search box for stores that use the Luma theme or a derivative theme.

## Architectural overview

Live Search is deployed as a service. The {{site.data.var.ee}} side of the architecture includes hosting the search Admin, syncing catalog data, and running the query service.

![Live Search architecture diagram]({{ page.baseurl }}/live-search/images/architecture-diagram.svg)
_Live Search architecture_

After the Live Search module (with catalog modules as dependencies) is [installed and configured]({{ site.user_guide_url }}/live-search/install.html), {{site.data.var.ee}} begins sharing search and catalog data with SaaS services. At this point, Admin users can set up, customize, and manage search facets, synonyms, and merchandising rules.
