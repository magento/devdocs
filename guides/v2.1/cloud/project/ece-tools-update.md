---
group: cloud
title: Update ece-tools
version: 2.1
github_link: cloud/project/ece-tools-update.md
functional_areas:
  - Cloud
  - Upgrade
---
Typically, an _update_ includes patches and available hotfixes as part of the `magento-cloud-metapackage`. If you still use a version of Cloud that does not contain ece-tools, then your project requires an [upgrade]({{page.baseurl}}/cloud/project/ece-tools-upgrade-project).

{% include cloud/note-upgrade.md %}

#### To update ece-tools:

1.  On your local workstation, perform an update using Composer.

    ```bash
    composer update magento/magento-cloud-metapackage
    ```

    {: .bs-callout .bs-callout-info}
    If you cannot update beyond ece-tools version 2002.0.08, follow the [upgrade steps](#upgrade-project-to-use-ece-tools).

1.  Add, commit, and push your code changes.

    ```bash
    git add -A && git commit -m "Update magento/ece-tools" && git push origin <branch name>
    ```

1.  After test validation, merge this branch to the Integration branch.