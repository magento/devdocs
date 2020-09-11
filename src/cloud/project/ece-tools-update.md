---
group: cloud-guide
title: Update ece-tools version
redirect_from:
  - /cloud/composer-packages/ece-tools.html
  - /cloud/composer-packages/ece-tools-update.html
functional_areas:
  - Cloud
  - Upgrade
---

When you update {{site.data.var.ct}}, you also update the other [{{site.data.var.csuite}} packages], which are dependencies for {{site.data.var.ct}}.

**Prerequisites**:

-  Before you update `{{site.data.var.ct}}`, review the [{{site.data.var.csuite}} release notes][{{site.data.var.csuite}} packages].
-  If you are updating from `{{site.data.var.ct}}` 2002.0.22 or earlier to 2002.1.0, review [backward incompatible changes] and make any required changes to your {{site.data.var.ece}} project.
-  Review [Upgrades and Patches] to determine the {{site.data.var.ct}} versions compatible with your {{site.data.var.ece}} project.
-  You must use a version of {{site.data.var.ece}} that supports the `{{site.data.var.ct}}` package. The `composer.json` includes a dependency for the `magento-cloud/metapackage` and the hooks in the  `.magento.app.yaml` file use `{{site.data.var.ct}}`commands to build, deploy, and run post-deploy hooks. If your project does not support {{site.data.var.ct}}, you must [upgrade your project].

{% include cloud/note-upgrade.md %}

{:.procedure}
To update the `{{site.data.var.ct}}` package:

1. On your local workstation, perform an update using Composer.

   ```bash
   composer update magento/ece-tools --with-dependencies
   ```

   {:.bs-callout-info}
   If you cannot update beyond `{{site.data.var.ct}}` version 2002.0.8, follow the [upgrade steps]({{ site.baseurl }}/cloud/project/ece-tools-upgrade-project.html).

1. Add, commit, and push your code changes.

   ```bash
   git add -A && git commit -m "Update magento/ece-tools" && git push origin <branch-name>
   ```

1. After test validation, merge this branch to the Integration branch.

[latest `{{site.data.var.ct}}` release]: {{site.baseurl}}/cloud/release-notes/ece-release-notes.html
[backward incompatible changes]: {{site.baseurl}}/cloud/release-notes/backward-incompatible-changes.html
[Upgrade to use ece-tools]: {{site.baseurl}}/cloud/project/ece-tools-upgrade-project.html
[upgrade your project]: {{site.baseurl}}/cloud/project/ece-tools-upgrade-project.html
[upgrade Magento version]: {{site.baseurl}}/cloud/project/project-upgrade.html
[Upgrades and Patches]: {{site.baseurl}}/cloud/project/project-upgrade-parent.html
[{{site.data.var.csuite}} packages]: {{site.baseurl}}/cloud/release-notes/cloud-tools.html
