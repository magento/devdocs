---
layout: default
group: cloud
subgroup: 20_admin
title: Snapshot and restore
menu_title: Snapshot and restore
menu_order: 4
menu_node: 
version: 2.1
github_link21: cloud/admin/admin-snap.md
---

#### Contents
*	[Overview of snapshot and restore](#cloud-snap-over)
*	[Create a snapshot](#cloud-snap-create)
*	[Restore a snapshot](#cloud-snap-restore)

## Overview of snapshot and restore {#cloud-snap-over}
A *snapshot* is a complete backup of an environment. It includes all
persistent data from all running services (for example, your MySQL database, Redis, and so on) and any files
stored on the mounted volumes.

You can *restore* a snapshot up to 14 days after the snapshot was created.

To create and restore snapshots, you must have [administrator privileges]({{ site.gdeurl21 }}cloud/admin/admin-user-admin.html) in the project.

<div class="bs-callout bs-callout-info" id="info">
  <p>We advise you to make backups of your live environment before merging an environment 
to the live environment, or each time you increase the storage space of your services.</p>
</div>

## Create a snapshot {#cloud-snap-create}
First, make sure you're in the directory of the environment you want to snapshot.

Use the following command to create a snapshot:

	magento-cloud environment:backup

## Restore a snapshot {#cloud-snap-restore}
First, make sure you're viewing the environment for which you want to restore a snapshot.

You will see the snapshot in the activity feed of you environment in the Platform.sh Web Interface where you can trigger the restore by clicking on the `restore` link.

To list available snapshots, use the following command:

	magento-cloud environment:backup --list

Sample output follows:

	Finding snapshots for the environment master
	+---------------------+------------+----------------------+
	| Created             | % Complete | Backup name          |
	+---------------------+------------+----------------------+
	| 2015-06-19 17:11:42 | 100        | 2ca4d90639f706283fee |
	| 2015-05-28 15:05:42 | 100        | 1a1fbcb9943849706ee6 |
	| 2015-05-21 14:38:40 | 100        | 7dbdcdb16f41f9e1c061 |
	| 2015-05-20 15:29:58 | 100        | 4997900d2804d5b2fc39 |
	| 2015-05-20 13:31:57 | 100        | c1f2c976263bec03a10e |
	| 2015-05-19 14:51:18 | 100        | 71051a8fe6ef78bca0eb |

To restore a snapshot, enter the following command:

	magento-cloud environment:restore <backup name>

For example:

	magento-cloud environment:restore 7dbdcdb16f41f9e1c061
