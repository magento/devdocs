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
redirect_from:
  - /guides/v2.0/cloud/admin/admin-snap.html
  - /guides/v2.1/cloud/admin/admin-snap.html
---

You can back up and restore an environment at any time using a *snapshot*. Creating a snapshot backs up the environment and because an environment is deployed as a read-only file system, restoring a snapshot is very fast.

A *snapshot* is a complete backup of an environment. It includes all
persistent data from all running services (for example, your MySQL database, Redis, and so on) and any files stored on the mounted volumes.

You can *restore* a snapshot up to 14 days after the snapshot was created.

## Create a snapshot (back up)
To back up an environment by creating a snapshot:

1.	[Log in to your project]({{page.baseurl}}cloud/project/project-webint-basic.html#project-login).
2.	In the left pane, click the name of the environment to back up.
3.	In the top pane, click ![Take a snapshot of an environment]({{ site.baseurl }}common/images/cloud_snapshots.png){:width="30px"} (snapshots).
4.	You are required to confirm the action.

## Restore a snapshot
To restore an environment's snapshot:

1.	[Log in to your project]({{page.baseurl}}cloud/project/project-webint-basic.html#project-login).
2.	In the left pane, click the name of the environment to restore.
3.	In the environment's history, click the **restore** link next to the snapshot to restore.

	The following figure shows an example.

	![Take a snapshot of an environment]({{ site.baseurl }}common/images/cloud_snapshot-restore.png)
4.	You are required to confirm the action.

#### Related topics
*	[Basic project information]({{page.baseurl}}cloud/project/project-webint-basic.html)
*	[Manage environments (branches)]({{page.baseurl}}cloud/project/project-webint-branch.html)
*	[Get started with a project]({{page.baseurl}}cloud/project/project-start.html)
