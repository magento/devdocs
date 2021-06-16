---
group: live-search
title: Live Search Release Notes
ee_only: True
---

These release notes describe the initial release of Live Search Public Beta and include:

-  {:.new}New features
-  {:.fix}Fixes and improvements
-  {:.bug}Known issues

## Live Search v1.1.0

-  Compatible with Adobe Commerce on prem (EE): 2.4.x
-  Compatible with Adobe Commerce on Cloud (ECE): 2.4.x
-  Stability: Stable
-  {:.bug}The Live Search service supports only the [base currency](https://docs.magento.com/user-guide/stores/currency-configuration.html) of the Adobe Commerce installation.
-  {:.bug}When adding a facet, the _Product Attributes Feed_ doesn't update correctly when set to `Update on Save`. To avoid this problem, go to [Index Management](https://docs-beta.magento.com/user-guide/system/index-management.html) and set _Product Attributes Feed_ to `Update by Schedule`.
-  {:.bug}If a synonym term contains multiple words, each word is treated as a separate synonym. For example, if you define “time piece” as a synonym of “watch”, both “time” and “piece” are treated as synonyms of watch.
## Documentation

To learn more:

-  [Adobe Commerce Developer Documentation]({{ site.baseurl }}/live-search/overview.html)
-  [Adobe Commerce User Guide](https://docs-beta.magento.com/user-guide/live-search/overview.html)
-  [Support Knowledge Base](https://support.magento.com/hc/en-us)
