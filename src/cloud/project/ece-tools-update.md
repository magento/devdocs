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

When you update {{site.data.var.ct}}, you also update to the latest version of the following {{site.data.var.csuite}} packages, which are dependencies for the `{{site.data.var.ct}}` package:

-  **`{{site.data.var.mcp}}`**–A set of patches which improve the integration of all Magento versions with Cloud environments. This package includes Magento patches and available hot fixes that are applied when you use `{{site.data.var.ct}}` to deploy to Staging and Production environments.

-  **`{{site.data.var.mcd}}`**–Functionality and Docker images to deploy Magento Commerce to a local Cloud environment.

-  **`{{site.data.var.mcc}}`**–Extended Magento Commerce core functionality for sites deployed on the Cloud platform.

**Prerequisites**:

-  Before you update `{{site.data.var.ct}}`, review the [{{site.data.var.csuite}} release notes].
-  If you are updating from `{{site.data.var.ct}}` v2002.0.22 or earlier to v2002.1.0, review [backward incompatible changes] and make any required changes to your {{site.data.var.ece}} project.
-  Review [Upgrades and Patches] to determine the {{site.data.var.ct}} versions compatible with your {{site.data.var.ece}} project.
-  You must use a version of Magento Commerce Cloud that supports the `ece-tools` package. The `composer.json` includes a dependency for the `magento-cloud/metapackage` and the hooks in the  `.magento.app.yaml` file use `ece-tools` commands to build, deploy, and run post-deploy hooks. If your project does not support {{site.data.var.ct}} tools, you must [upgrade your project].

{% include cloud/note-upgrade.md %}

{:.procedure}
To update the `{{site.data.var.ct}}` package:

1. On your local workstation, perform an update using Composer.

    ```bash
    composer update magento/ece-tools
    ```

     {:.bs-callout-info}
    If you cannot update beyond `{{site.data.var.ct}}` version 2002.0.8, follow the [upgrade steps]({{ site.baseurl }}/cloud/project/ece-tools-upgrade-project.html).

1. Add, commit, and push your code changes.

    ```bash
    git add -A && git commit -m "Update magento/ece-tools" && git push origin <branch-name>
    ```

1. After test validation, merge this branch to the Integration branch.

[latest `{{site.data.var.ct}}` release]: {{site.baseurl}}/cloud/release-notes/ece-release-notes.html
[{{site.data.var.csuite}} release notes]: {{site.baseurl}}/cloud/release-notes/cloud-tools.html
[{{site.data.var.mcp-product}} release notes]: {{site.baseurl}}/cloud/release-notes/mcp-release-notes.html
[{{site.data.var.mcd-product}} release notes]: {{site.baseurl}}/cloud/release-notes/mcd-release-notes.html
[{{site.data.var.mcc-product}} release notes]: {{site.baseurl}}/cloud/release-notes/mcc-release-notes.html
[backward incompatible changes]: {{site.baseurl}}/cloud/release-notes/backward-incompatible-changes.html
[Upgrade to use ece-tools]: {{site.baseurl}}/cloud/project/ece-tools-upgrade-project.html
[upgrade your project]: {{site.baseurl}}/cloud/project/ece-tools-upgrade-project.html
[upgrade Magento version]: {{site.baseurl}}/cloud/project/project-upgrade.html
[Upgrades and Patches]: {{site.baseurl}}/cloud/project/project-upgrade-parent.html