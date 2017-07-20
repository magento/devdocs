---
layout: default
group: cloud
subgroup: 100_project
title: Backup and restore (snapshot)
menu_title: Backup and restore (snapshot)
menu_order: 25
menu_node:
version: 2.0
github_link: cloud/project/project-webint-snap.md
---

You can back up and restore an environment at any time using a *snapshot*. Creating a snapshot backs up the environment and because an environment is deployed as a read-only file system, restoring a snapshot is very fast.

A *snapshot* is a complete backup of an environment. It includes all
persistent data from all running services (for example, your MySQL database, Redis, and so on) and any files stored on the mounted volumes.

<div class="bs-callout bs-callout-warning" markdown="1">
If you want to rollback to previous code or added extensions in an environment, restoring a snapshot is not the recommended method. Every deploy will push the master branch (code and extensions) to the target environment. You need to remove the code from the branch prior to building and deploying. For details, see the [Deployment Process]({{page.baseurl}}cloud/reference/discover-deploy.html).
</div>

You can *restore* a snapshot up to 14 days after the snapshot was created.

We provide two methods for creating and managing snapshots:

* Through the Magento Web Interface
* Through Magento CLI commands

## Create a snapshot
To create an environment snapshot using the Magento Web Interface:

1.	[Log in to your project]({{page.baseurl}}cloud/project/project-webint-basic.html#project-login).
2.	In the left pane, click the name of the environment to back up.
3.	In the top pane, click ![Take a snapshot of an environment]({{ site.baseurl }}common/images/cloud_snapshots.png){:width="30px"} (snapshots).
4.	You are required to confirm the action.

To create an environment snapshot using the Magento CLI:

1. Make sure you’re in the directory of the project and environment you want to snapshot.
2. Use the following command to create the snapshot:

		magento-cloud snapshot:create

	The following modifiers further specify how to create the snapshot:

		-p, --project=PROJECT          The project ID
		-e, --environment=ENVIRONMENT  The environment ID

	For a full list of options, enter `magento-cloud snapshot:create --help`.
3. Use the `magento-cloud snapshots` command so see the most recent snapshots. For a full list, enter `magento-cloud snapshot:list`.

## Restore a snapshot
To restore an environment's snapshot using the Magento Web Interface:

1.	[Log in to your project]({{page.baseurl}}cloud/project/project-webint-basic.html#project-login).
2.	In the left pane, click the name of the environment to restore.
3.	In the environment's history, click the **restore** link next to the snapshot to restore.

	The following figure shows an example.

	![Take a snapshot of an environment]({{ site.baseurl }}common/images/cloud_snapshot-restore.png)
4.	You are required to confirm the action.

To restore an environment snapshot using the Magento CLI:

1. Make sure you’re in the directory of the project and environment you want to snapshot.
2. List all available snapshots to copy the ID using this command:

		magento-cloud snapshot:list
3. Use the following command to restore the snapshot using the ID you copied:

			magento-cloud snapshot:restore <id>

	For example: `magento-cloud snapshot:restore 92c9a4b2aa75422efb3d`

	The following modifiers further specify how to restore the snapshot:

		-p, --project=PROJECT          The project ID
		-e, --environment=ENVIRONMENT  The environment ID

	For a full list of options, enter `magento-cloud snapshot:restore --help`.


#### Related topics
*	[Basic project information]({{page.baseurl}}cloud/project/project-webint-basic.html)
*	[Manage environments (branches)]({{page.baseurl}}cloud/project/project-webint-branch.html)
*	[Get started with a project]({{page.baseurl}}cloud/project/project-start.html)
