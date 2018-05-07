---
layout: default
group: cloud
subgroup: 100_project
title: Snapshots and backup management
menu_title: Snapshots and backup management
menu_order: 30
menu_node:
version: 2.0
github_link: cloud/project/project-webint-snap.md
redirect_from:
  - /guides/v2.0/cloud/admin/admin-snap.html
  - /guides/v2.1/cloud/admin/admin-snap.html
functional_areas:
  - Cloud
---

You can back up and restore specific environments at any time using a snapshot. Snapshot options are available for all Start environments and Pro plan Integration environments. You cannot snapshot Pro plan Staging and Production environments.

Creating a snapshot backs up the environment and because an environment is deployed as a read-only file system, restoring a snapshot is very fast.

A *snapshot* is a complete backup of an environment. It includes all
persistent data from all running services (for example, your MySQL database, Redis, and so on) and any files stored on the mounted volumes.

<div class="bs-callout bs-callout-warning" markdown="1">
If you want to rollback to previous code or remove added extensions in an environment, restoring a snapshot is not the recommended method. See [Rollbacks to remove code](#rollback-code).
</div>

You can *restore* a snapshot up to 14 days after the snapshot was created.

We provide two methods for creating and managing snapshots:

* Through the Magento Web Interface
* Through Magento CLI commands

## Create a snapshot {#create-snapshot}
To create an environment snapshot using the Magento Web Interface:

1.	[Log in to your project]({{page.baseurl}}/cloud/project/project-webint-basic.html#project-access).
2.	In the left pane, click the name of the environment to back up.
3.	In the top pane, click ![Take a snapshot of an environment]({{ site.baseurl}}/common/images/cloud_snapshots.png){:width="30px"} (snapshots).
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

## Restore a snapshot {#restore-snapshot}
To restore an environment's snapshot using the Magento Web Interface:

1.	[Log in to your project]({{page.baseurl}}/cloud/project/project-webint-basic.html#project-access).
2.	In the left pane, click the name of the environment to restore.
3.	In the environment's history, click the **restore** link next to the snapshot to restore.

	The following figure shows an example.

	![Take a snapshot of an environment]({{ site.baseurl}}/common/images/cloud_snapshot-restore.png)
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

## Dump your database {#db-dump}
To create a copy of your database, you dump the data from the database to a file on your local.

1.	SSH into the environment you want to create a database dump from:

	*	Staging: `ssh -A <project ID>_stg@<project ID>.ent.magento.cloud`
	*	Production: `ssh -A <project ID>@<project ID>.ent.magento.cloud`
	* To SSH into the `master` branch of your Integration environment:

			magento-cloud environment:ssh
2.	Find the database login information:

		php -r 'print_r(json_decode(base64_decode($_ENV["MAGENTO_CLOUD_RELATIONSHIPS"]))->database);'
3.	Create a database dump:

  For Starter environments and Pro Integration environments:

		mysqldump -h <database host> --user=<database user name> --password=<password> --single-transaction --triggers main | gzip - > /tmp/database.sql.gz

  For Pro Staging and Production environments, the name of the database is in the `MAGENTO_CLOUD_RELATIONSHIPS` variable (typically the same as the application name and user name):

    mysqldump -h <database host> --user=<database user name> --password=<password> --single-transaction --triggers <database name> | gzip - > /tmp/database.sql.gz

If you want to push this data into an environment, see [Migrate data and static files]({{page.baseurl}}/cloud/live/stage-prod-migrate.html).

## Rollbacks to remove code {#rollback-code}
We recommend creating a snapshot of the environment and a backup of the database prior to deployments.

If you need to restore a snapshot specifically to remove new code and added extensions, the process can be complicated depending on the amount of changes and when you rollback. Some rollbacks may require database changes.

Specifically for code, you should investigate [reverting code](https://git-scm.com/docs/git-revert) changes from your branch before redeploying. If not, every deploy will push the master branch (code and extensions) again to the target environment. For details, see the [Deployment Process]({{page.baseurl}}/cloud/reference/discover-deploy.html).

#### Related topics
*	[Basic project information]({{page.baseurl}}/cloud/project/project-webint-basic.html)
*	[Manage environments (branches)]({{page.baseurl}}/cloud/project/project-webint-branch.html)
*	[Get started with a project]({{page.baseurl}}/cloud/project/project-start.html)
