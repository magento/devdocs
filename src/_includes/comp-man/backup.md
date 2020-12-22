After you pass all readiness checks, you can back up:

*  The Magento 2 file system (excluding `var` and `pub/static` directories)
*  The `pub/media` directory
*  The Magento 2 database

Backups are stored in the `var/backups` directory and can be restored at any time using the [`magento setup:rollback`]({{ page.baseurl }}/install-gde/install/cli/install-cli-uninstall-mods.html#instgde-cli-uninst-mod-roll) or using the Magento Admin.

{:.bs-callout-info}
Magento backup features must be enabled. For more information and commands, see [Enable backups]({{ page.baseurl }}/install-gde/install/cli/install-cli-backup.html#enable-backups).

To back up:

1. Select the checkbox of each item to back up and click **Create Backup**.

   The following figure shows an example of backing up everything.

   ![You can back up the Magento 2 file system, media directory, and database]({{ site.baseurl }}/common/images/modman_create-backup.png){:width="550px"}

   (If you choose not to back up, clear all checkboxes and click **Next**.)

   {:.bs-callout-info}
   We strongly recommend you <em>do</em> back up in the event of issues.

1. Wait while backups are created and continue with any of the following:

The following page displays to confirm a successful backup.

![A page displays to confirm your backup was a success]({{ site.baseurl }}/common/images/extensman_backup-success.png){:width="650px"}

If errors display, see [Troubleshoot backups](https://support.magento.com/hc/en-us/articles/360032990672).
