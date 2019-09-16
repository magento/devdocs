---
group: cloud-guide
title: Upgrade Magento version
functional_areas:
  - Cloud
  - Upgrade
---

You can upgrade the core {{site.data.var.ee}} code base to version 2.3. It is best to review the summary of the updated [technology stack]({{site.baseurl}}/guides/v2.3/install-gde/system-requirements-tech.html) before upgrading your project. If you need to upgrade from a version older than 2.1, you must upgrade to a supported version first. See [Upgrades and patches]({{page.baseurl}}/cloud/project/project-upgrade-parent.html) for upgrade path details.

{% include cloud/note-upgrade.md %}

{% include cloud/note-ece-tools-package.md %}

## Back up the database

{% include cloud/backup-db.md %}

## Complete the upgrade

If you use PHP version 7.2, you must remove the `mcrypt` extension from the [`extensions` section of the `.magento.app.yaml` file]({{page.baseurl}}/cloud/project/project-conf-files_magento-app.html#configure-php-options). For Pro projects, you need to create a support ticket to completely disable the `mcrypt` extension.

1.  Before completing the upgrade, you must [update the `autoload`]({{page.baseurl}}/comp-mgr/cli/cli-upgrade.html#update-autoload) property of the `composer.json` file.

1.  Change to your Magento root directory and set the upgrade version using the [version constraint syntax]({{page.baseurl}}/cloud/project/ece-tools-upgrade-project.html#metapackage).

    ```bash
    composer require "magento/magento-cloud-metapackage":">=2.3.2 <2.3.3" --no-update
    ```

    {: .bs-callout-info }
    You must use the version constraint syntax to successfully update the `{{site.data.var.ct}}` package.

1.  Update the project.

    ```bash
    composer update
    ```

1.  Add, commit, and push code changes.

    ```bash
    git add -A && git commit -m "Upgrade" && git push origin <branch name>
    ```

    `git add -A` is required to add all changed files to source control because of the way Composer marshals base packages. Both `composer install` and `composer update` marshal files from the base package (that is, `magento/magento2-base` and `magento/magento2-ee-base`) into the package root.

    The files Composer marshals belong to the new version of Magento, to overwrite the outdated version of those same files. Currently, marshaling is disabled in {{site.data.var.ee}}, so you must add the marshaled files to source control.

1.  Wait for deployment to complete.

1.  Verify the upgrade in your Integration, Staging, or Production environment by using SSH to log in and check the version.

    ```bash
      bin/magento --version
    ```

## Verify and upgrade your extensions {#extensions}

{%
include note.html
type='info'
content='Review your third-party extension and module pages in Marketplace or other company sites to verify support for Magento Commerce 2.3.

If you need to upgrade any third-party extensions and modules that support version 2.3, we recommend working in a new Integration branch with your extensions disabled.'
%}

1.  Create a new branch on your local workstation.
1.  Disable your extensions as needed.
1.  When available, download extension upgrades.
1.  Install the upgrade as documented by the third-party documentation.
1.  Enable and test the extension.
1.  Add, commit, and push the code changes to the remote.
1.  Push to and test in your Integration environment.
1.  Push to the Staging environment to test in a pre-production environment.

We strongly recommend upgrading your Production environment _before_ including the upgraded extensions in your go-live process.

We strongly recommend upgrading your Fastly module to the latest version.

## Troubleshoot upgrade

If the upgrade failed, you receive an error message in the browser indicating you cannot access your storefront or the Magento Admin pane:

```terminal
There has been an error processing your request
Exception printing is disabled by default for security reasons.
  Error log record number: <error number>
```

#### To resolve the error:

1.  Using SSH, log in to the remote server and open the `./app/var/report/<error number>` file.

1.  [Examine the logs]({{page.baseurl}}/cloud/project/log-locations.html) to determine the source of the issue.

1.  Add, commit, and push code changes.

    ```bash
    git add -A && git commit -m "Fixed deployment failure" && git push origin <branch name>
    ```
