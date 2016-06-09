---
layout: default 
group: compman
subgroup: 05_UseCompMan
title: Step 2. Back up the file system and database
menu_title: Step 2. Back up the file system and database
menu_node: 
menu_order: 7
version: 2.0
github_link: comp-mgr/compman-backup.md
---

After you pass all readiness checks, you can back up:

*	The Magento 2 file system (excluding `var` and `pub/static` directories)
*	The `pub/media` directory
*	The Magento 2 database

Backups are stored in the `var/backups` directory and can be restored at any time using the <a href="{{ site.gdeurl }}install-gde/install/cli/install-cli-uninstall-mods.html#instgde-cli-uninst-mod-roll">magento setup:rollback</a> command.

To back up:

1.	Select the check box of each item to back up and click **Create Backup**.

	The following figure shows an example of backing up everything.

	<img src="{{ site.baseurl }}common/images/cman_create-backup.png" width="650px" alt="You can back up the Magento 2 file system, media directory, and database">

	(If you choose not to back up, clear all check boxes and click **Next**.)

	<div class="bs-callout bs-callout-info" id="info">
      <p>We strongly recommend you <em>do</em> back up in the event of issues.</p>
    </div>

2. 	Wait while backups are created and continue with any of the following:

	*	Installing new purchases or updates: <a href="{{ site.gdeurl }}comp-mgr/compman-new-purchase.html">Step 3. Component Install</a>
	*	Updating components: <a href="{{ site.gdeurl }}comp-mgr/compman-update.html">Step 3. Update components</a>
	*	Enabling or disabling components: <a href="{{ site.gdeurl }}comp-mgr/compman-enable-disable.html">Step 3. Enable/disable components</a>
	*	Uninstalling components: <a href="{{ site.gdeurl }}comp-mgr/compman-uninst-data.html">Step 3. Data Option</a>

The following page displays to confirm a successful backup. If errors display, see <a href="{{ site.gdeurl }}comp-mgr/trouble/cman/tshoot_backup.html">Troubleshoot backups</a>.<br><br>
<img src="{{ site.baseurl }}common/images/cman_backup-success.png" width="650px" alt="A page displays to confirm your backup was a success">
