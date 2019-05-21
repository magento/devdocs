---
group: cloud-guide
title: Upgrade Magento version
redirect_from:
  - /guides/v2.1/cloud/howtos/upgrade-magento.html
functional_areas:
  - Cloud
  - Upgrade
---
You can upgrade the core {{site.data.var.ee}} code base to version 2.1. If you need to upgrade from a version older than 2.1, you must upgrade to a supported version first.

{% include cloud/note-upgrade.md %}

{% include cloud/note-ece-tools-package.md %}

## Back up the database

{% include cloud/backup-db.md %}

## Complete the upgrade

1.  Change to your Magento root directory and set the upgrade version.

    ```bash
    composer require magento/magento-cloud-metapackage <requiredversion> --no-update
    ```

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
    php bin/magento --version
    ```

## Verify and upgrade your extensions {#extensions}

If you need to upgrade any third-party extensions and modules that support version 2.1, we recommend working in a new Integration branch with your extensions disabled. Review your third-party extension and module pages in Marketplace or other company sites to verify support for {{site.data.var.ee}} and {{site.data.var.ece}} version 2.1.

1.  Create a new branch on your local workstation.
1.  Disable your extensions as needed.
1.  When available, download extension upgrades.
1.  Install the upgrade as documented by the third-party documentation.
1.  Enable and test the extension.
1.  Add, commit, and push the code changes to the remote.
1.  Push to and test in your Integration environment.
1.  Push to the Staging environment to test in a pre-production environment.

We strongly recommend upgrading your Production environment _before_ including the upgraded extensions in your go-live process.

We strongly recommend upgrading your Fastly module to v1.2.33 or later for {{site.data.var.ece}} 2.1.X.

## Troubleshoot upgrade

If the upgrade failed, you receive an error message in the browser indicating you cannot access your storefront or the Magento Admin pane:

```terminal
There has been an error processing your request
Exception printing is disabled by default for security reasons.
  Error log record number: <error number>
```

#### To resolve the error:

1.  Using SSH, log in to the remote server and open the `./app/var/report/<error number>` file. 

1.  [Examine the logs]({{ page.baseurl }}/cloud/trouble/environments-logs.html) to determine the source of the issue.

1.  Add, commit, and push code changes.

    ```bash
    git add -A && git commit -m "Fixed deployment failure" && git push origin <branch name>
    ```