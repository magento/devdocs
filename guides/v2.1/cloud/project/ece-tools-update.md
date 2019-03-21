---
group: cloud-guide
title: Update ece-tools version
redirect_from:
  - guides/v2.1/cloud/composer-packages/ece-tools.html
  - guides/v2.2/cloud/composer-packages/ece-tools.html
  - guides/v2.1/cloud/composer-packages/ece-tools-update.html
  - guides/v2.2/cloud/composer-packages/ece-tools-update.html
functional_areas:
  - Cloud
  - Upgrade
---
Typically, an _update_ includes patches and available hotfixes as part of the `magento-cloud-metapackage`. If you still use a version of {{site.data.var.ece}} that does not contain the `{{site.data.var.ct}}` package, then your project requires an [upgrade]({{page.baseurl}}/cloud/project/ece-tools-upgrade-project.html).

{% include cloud/note-upgrade.md %}

#### To update the `{{site.data.var.ct}}` package:

1.  On your local workstation, perform an update using Composer.

    ```bash
    composer update magento/ece-tools
    ```

    {: .bs-callout .bs-callout-info}
    If you cannot update beyond `{{site.data.var.ct}}` version 2002.0.8, follow the [upgrade steps]({{page.baseurl}}/cloud/project/ece-tools-upgrade-project.html).

1.  Add, commit, and push your code changes.

    ```bash
    git add -A && git commit -m "Update magento/ece-tools" && git push origin <branch name>
    ```

1.  After test validation, merge this branch to the Integration branch.
