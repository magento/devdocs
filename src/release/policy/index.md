---
title: Release policy
group: release
---

{{site.data.var.ee}} uses [semantic versioning](https://semver.org/) on the individual module level (for example magento/framework 101.1.1) but not for the Magento marketing version number. For example:

-  **MAJOR release**—2
-  **MINOR release**—2.3
-  **PATCH release**—2.3.1
-  **SECURITY release**—2.3.2-p1
-  **Hot fix**
-  **Individual patch**
-  **Custom patch**

## MINOR release

Magento releases a large, minor version of {{site.data.var.ee}} about once a year.

The following guidelines apply to minor releases:

-  Breaking changes are possible; code written for 2.2.x may no longer work with 2.3.x. For example, minor releases can introduce support for major system requirements and dependencies, such as PHP.
-  Module versions can vary. For example, some module changes are introduced in a new patch whereas others are introduced in a major release.
-  Minor releases can include new features that may require additional work from partners during upgrade to ensure compatibility.
-  Minor releases can include fixes for security and compliance issues.

## PATCH release

Patch releases are primarily focused on delivering security and quality enhancements on a regular basis to help you keep your sites performing at their peak. Magento releases security and functional patches for each supported release line of {{site.data.var.ee}} every quarter.

The following guidelines apply to patch releases:

-  All supported versions receive security fixes.
-  Newer versions receive full functional fixes and enhancements.
-  Changes that could break extensions or code compatibility are avoided. For example, code written for 2.2.0 should still work on 2.2.7.
-  On an exceptional basis, breaking changes or additional patches or hotfixes may be released to address security or compliance issues and high-impact quality issues. On the module level, these are mostly PATCH-level changes; sometimes MINOR-level changes.
-  Patches may include new features as long as they are not expected to break other code. The new feature can be included in the core code or as an extension, such as Page Builder.

## SECURITY release

Security releases provide fixes for vulnerabilities that have been identified in previous quarterly patch releases. You can install time-sensitive security fixes without applying the hundreds of functional fixes and enhancements that a full quarterly patch release contains. These releases are appended with `-pN`, where N is the incremental patch version beginning with 1 (for example, 2.3.5-p1). These releases can also include hotfixes required to address critical issues that affect the Magento application.

For general information about security releases, see [Introducing the New Security-only Patch Release](https://community.magento.com/t5/Magento-DevBlog/Introducing-the-New-Security-only-Patch-Release/ba-p/141287). For instructions on downloading and applying security patches, see [Install Magento using Composer]({{ site.baseurl }}/guides/v2.3/install-gde/composer.html).

## Hot fix

Hot fixes are patches that contain high-impact security or quality fixes that affect a large number of Magento merchants. These fixes are applied to the next patch release for the applicable Magento minor version. Magento releases hot fixes as needed.

{:.bs-callout-info}
Hot fixes can contain backward incompatible changes.

## Individual patch

Individual patches contain low-impact quality fixes for a specific issue. These fixes are applied to the most recently supported minor version of Magento (for example, 2.4.x), but could be missing from the previous supported minor version of Magento (for example, 2.3.x). Magento releases individual patches as needed.

{:.bs-callout-info}
Individual patches do not contain backward incompatible changes.

## Custom patch

Created by non-Magento personnel to fix an issue or modify the Magento code for various reasons. Magento does not support custom patches.

### Related topics

-  [Planning and Budgeting for Commerce Upgrade Cycles](https://magento.com/sites/default/files8/2019-08/Magento-Release-Cycle-Infosheet_Aug_2019.pdf)
-  [Magento Software Lifecycle Policy](https://magento.com/sites/default/files/magento-software-lifecycle-policy.pdf)
-  [Versioning]({{ site.baseurl }}/guides/v2.3/extension-dev-guide/versioning/).
