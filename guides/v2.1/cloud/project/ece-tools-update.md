---
group: cloud
title: Update ECE-tools version
version: 2.1
github_link: cloud/project/ece-tools-update.md
functional_areas:
  - Cloud
  - Upgrade
---
Typically, an _update_ includes patches and available hotfixes as part of the `magento-cloud-metapackage`. If you still use a version of {{site.data.var.ece}} that does not contain the `ece-tools` package, then your project requires an [upgrade]({{page.baseurl}}/cloud/project/ece-tools-upgrade-project.html).

{% include cloud/note-upgrade.md %}

#### To update the `ece-tools` package:

1.  On your local workstation, perform an update using Composer.

    ```bash
    composer update magento/ece-tools
    ```

    {: .bs-callout .bs-callout-info}
    If you cannot update beyond`ece-tools`version 2002.0.8, follow the [upgrade steps]({{page.baseurl}}/cloud/project/ece-tools-upgrade-project.html).

1.  Add, commit, and push your code changes.

    ```bash
    git add -A && git commit -m "Update magento/ece-tools" && git push origin <branch name>
    ```

1.  After test validation, merge this branch to the Integration branch.