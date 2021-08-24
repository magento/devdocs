---
group: live-search
title: Live Search Release Notes
ee_only: True
---

These release notes describe the initial release of Live Search and include:

-  {:.new}New features
-  {:.fix}Fixes and improvements
-  {:.bug}Known issues

## Live Search v1.1.0

-  Compatible with {{site.data.var.ee}} (EE): 2.4.x
-  Compatible with {{site.data.var.ece}} (ECE): 2.4.x
-  Stability: Stable
-  {:.bug}The Live Search service supports only the [base currency](https://docs.magento.com/user-guide/stores/currency-configuration.html) of the {{site.data.var.ee}} installation.
-  {:.bug}When adding a facet, the _Product Attributes Feed_ does not update correctly when set to `Update on Save`. To avoid this problem, go to [Index Management](https://docs.magento.com/user-guide/system/index-management.html) and set _Product Attributes Feed_ to `Update by Schedule`.
-  {:.bug}Live Search synonyms are defined per store view, but are currently stored per website and identified with a combination of `environmentId` + `storeViewCode`. As a result, all websites and store views within the {{site.data.var.ee}} installation share the same set of synonyms. The most recently created set of synonyms for the store view takes precedence.
-  {:.bug}If a synonym term contains multiple words, each word is treated as a separate synonym. For example, if you define “time piece” as a synonym of “watch”, both “time” and “piece” are treated as synonyms of watch.

## Documentation

To learn more:

-  [{{site.data.var.ee}} Developer Documentation]({{ site.baseurl }}/live-search/overview.html)
-  [{{site.data.var.ee}} User Guide](https://docs.magento.com/user-guide/live-search/overview.html)
-  [Support Knowledge Base](https://support.magento.com/hc/en-us)
