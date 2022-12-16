---
group: cloud-guide
title: Update ece-tools version
redirect_from:
  - /cloud/composer-packages/ece-tools.html
  - /cloud/composer-packages/ece-tools-update.html
functional_areas:
  - Cloud
  - Upgrade
redirect_to: https://experienceleague.adobe.com/docs/commerce-cloud-service/user-guide/dev-tools/ece-tools/update-package.html
status: migrated
---

An update to the `{{site.data.var.ct}}` package also updates the other [{{site.data.var.csuite}} packages][], which are dependencies for `{{site.data.var.ct}}`. Therefore, you must use a version of {{site.data.var.ece}} that supports the `{{site.data.var.ct}}` package.

{:.bs-callout-warning}
If you use a version of {{site.data.var.ece}} that does not contain the {{site.data.var.ct}} package, then you must perform a one-time [upgrade]({{site.baseurl}}/cloud/project/ece-tools-upgrade-project.html) to your cloud project to remove deprecated packages. To verify the {{site.data.var.ct}} package is installed, retrieve the Commerce template version using the `php vendor/bin/ece-tools -V` command at your local project root directory.

**Prerequisites**:

-  Before you update `{{site.data.var.ct}}`, review the [{{site.data.var.csuite}} release notes][{{site.data.var.csuite}} packages].
-  If you are updating from `{{site.data.var.ct}}` 2002.0.22 or earlier to 2002.1.0, review [backward incompatible changes] and make any required changes to your {{site.data.var.ece}} project.
-  Review [Upgrades and Patches] to determine the {{site.data.var.ct}} versions compatible with your {{site.data.var.ece}} project.

{% include cloud/note-upgrade.md %}

{:.procedure}
To update the `{{site.data.var.ct}}` package:

1. On your local workstation, perform an update using Composer.

   ```bash
   composer update magento/ece-tools --with-dependencies
   ```

   {:.bs-callout-info}
   If you cannot update beyond `{{site.data.var.ct}}` version 2002.0.8, see [Upgrade project]({{site.baseurl}}/cloud/project/ece-tools-upgrade-project.html).

1. Add, commit, and push code changes.

   ```bash
   git add -A
   ```

   ```bash
   git commit -m "Update magento/ece-tools"
   ```

   ```bash
   git push origin <branch-name>
   ```

1. After test validation, merge this branch to the Integration branch.

<!-- link definitions -->

[latest `{{site.data.var.ct}}` release]: {{site.baseurl}}/cloud/release-notes/ece-release-notes.html
[backward incompatible changes]: {{site.baseurl}}/cloud/release-notes/backward-incompatible-changes.html
[Upgrade to use ece-tools]: {{site.baseurl}}/cloud/project/ece-tools-upgrade-project.html
[upgrade {{site.data.var.ee}} version]: {{site.baseurl}}/cloud/project/project-upgrade.html
[Upgrades and Patches]: {{site.baseurl}}/cloud/project/project-upgrade-parent.html
[{{site.data.var.csuite}} packages]: {{site.baseurl}}/cloud/release-notes/cloud-tools.html
