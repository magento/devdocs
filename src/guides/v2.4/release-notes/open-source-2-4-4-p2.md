---
group: release-notes
title: Magento Open Source 2.4.4-p2 Release Notes
---

{{ site.data.var.ee }} 2.4.4-p2 is a security release that provides five security fixes that enhance your {{ site.data.var.ee }} 2.4.4 or {{ site.data.var.ce }} 2.4.4 deployment. It provides fixes for vulnerabilities that have been identified in the previous release ({{ site.data.var.ee }} 2.4.4 and {{ site.data.var.ce }} 2.4.4).

{:.bs-callout-info}
Releases may contain backward-incompatible changes (BIC). To review minor backward-incompatible changes, see [BIC reference]({{page.baseurl}}/release-notes/backward-incompatible-changes/reference.html). (Major backward-incompatible issues are described in [BIC highlights]({{page.baseurl}}/release-notes/backward-incompatible-changes/index.html). Not all releases introduce major BICs.)

## Apply AC-3022.patch to continue offering DHL as a shipping carrier

DHL has introduced schema version 6.2 and will deprecate schema version 6.0 in the near future. Adobe Commerce 2.4.4 and earlier versions that support the DHL integration support only version 6.0. Merchants deploying these releases should apply `AC-3022.patch` at their earliest convenience to continue offering DHL as a shipping carrier. See the [Apply a patch to continue offering DHL as shipping carrier](https://support.magento.com/hc/en-us/articles/7707818131597-Apply-a-patch-to-continue-offering-DHL-as-shipping-carrier?_ga=2.201689433.994140970.1661546561-1218319047.1534347481) Knowledge Base article for information about downloading and installing the patch.

## What's in this release?

This security patch includes five security bug fixes. One fix included the creation of a new configuration setting. The **Require email confirmation if email has been changed** configuration setting lets administrators require email confirmation when an admin user changes their email address. <!--- AC-6292-->

See [Adobe Security Bulletin](https://helpx.adobe.com/security/products/magento/apsb22-48.html).

## Installation and upgrade instructions

For instructions on downloading and applying security patches (including patch 2.4.4-p2), see [Quick start install]({{site.baseurl}}/guides/v2.4/install-gde/composer.html).

## More information?

For general information about security patches, see [Introducing the New Security Patch Release](https://community.magento.com/t5/Magento-DevBlog/Introducing-the-New-Security-Patch-Release/ba-p/141287).
