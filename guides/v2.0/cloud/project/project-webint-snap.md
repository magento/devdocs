---
layout: default
group: cloud
subgroup: 07_project
title: Project backup and restore (snapshot)
menu_title: Project backup and restore (snapshot)
menu_order: 7
menu_node: 
level3_menu_node: level3child
level3_subgroup: project
version: 2.0
github_link: cloud/project/project-webint-snap.md
---

## Project backup and restore (snapshot) {#project-snap}
You can back up and restore an environment at any time using a *snapshot*. Creating a snapshot backs up the environment and because an environment is deployed as a read-only file system, restoring a snapshot is very fast.

## Create a snapshot (back up)
To back up an environment by creating a snapshot:

1.	[Log in to your project]({{ site.gdeurl }}cloud/project/project-webint-basic.html#project-login).
2.	In the left pane, click the name of the environment to back up.
3.	In the top pane, click ![Take a snapshot of an environment]({{ site.baseurl }}common/images/cloud_snapshots.png){:width="30px"} (snapshots).
4.	You are required to confirm the action.

## Restore a snapshot
To restore an environment's snapshot:

1.	[Log in to your project]({{ site.gdeurl }}cloud/project/project-webint-basic.html#project-login).
2.	In the left pane, click the name of the environment to restore.
3.	In the environment's history, click the **restore** link next to the snapshot to restore.

	The following figure shows an example.

	![Take a snapshot of an environment]({{ site.baseurl }}common/images/cloud_snapshot-restore.png)
4.	You are required to confirm the action.

#### Related topics
*	[Basic project information]({{ site.gdeurl }}cloud/project/project-webint-basic.html)
*	[Manage environments (branches)]({{ site.gdeurl }}cloud/project/project-webint-branch.html)
*	[Get started with a project]({{ site.gdeurl }}cloud/project/project-start.html)
