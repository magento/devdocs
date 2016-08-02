<div markdown="1">

After you pass all readiness checks, you can back up:

*	The Magento 2 file system (excluding `var` and `pub/static` directories)
*	The `pub/media` directory
*	The Magento 2 database

Backups are stored in the `var/backups` directory and can be restored at any time using the [`magento setup:rollback`]({{page.baseurl}}install-gde/install/cli/install-cli-uninstall-mods.html#instgde-cli-uninst-mod-roll) or using the Magento Admin.

To back up:

1.	Select the check box of each item to back up and click **Create Backup**.

	The following figure shows an example of backing up everything.

	<img src="{{ site.baseurl }}common/images/cman_create-backup.png" width="650px" alt="You can back up the Magento 2 file system, media directory, and database">

	(If you choose not to back up, clear all check boxes and click **Next**.)

	<div class="bs-callout bs-callout-info" id="info">
      <p>We strongly recommend you <em>do</em> back up in the event of issues.</p>
    </div>

2. 	Wait while backups are created and continue with any of the following:

The following page displays to confirm a successful backup. 

![A page displays to confirm your backup was a success]({{ site.baseurl }}common/images/cman_backup-success.png){:width="650px"}

If errors display, see [Troubleshoot backups]({{page.baseurl}}comp-mgr/trouble/cman/tshoot_backup.html)