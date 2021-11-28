---
group: extensions
title: Yotpo Release Notes
---

[Yotpo](https://www.yotpo.com/) is a user-generated content marketing platform enabling merchants to gather, curate, manage, and respond to all kinds of user content from just a single platform. Yotpo integrates with Magento to help you to maximize the power of user-generated content.

See our [User Guide]({{ site.user_guide_url }}/marketing/yotpo-reviews-intro.html) for information about setup and configuration of Yotpo product reviews in the Admin.

These release notes include:

-  {:.new}New features
-  {:.fix}Fixes and improvements
-  {:.bug}Known issues

## v3.1.3

-  {:.fix}Some users who upgraded from an older version of Magento, to one of the latest versions, found that the `yotpo_rich_snippets` table was not created. This issue is now fixed and the `yotpo_rich_snippets` table should display correctly.

-  {:.fix}We have improved the mechanism for syncing orders to Yotpo. If an order fails to sync for any reason, this order will be skipped and the process will continue to sync the next order.

-  {:.fix}We have added Google fonts to the Content Security Policies (CSP) whitelist.
