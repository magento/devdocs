---
group: cloud-guide
title: Snapshots and backup management
functional_areas:
  - Cloud
---

You can back up and restore specific environments at any time using a snapshot. Snapshot options are available for all Starter environments and Pro Integration environments. You cannot snapshot Pro Staging or Production environments.

A _snapshot_ is a complete backup of an environment that includes all persistent data from all running services (for example, your MySQL database, Redis, and so on) and any files stored on the mounted volumes. Because an environment deploys as a read-only file system, restoring a snapshot is very fast.

{:.bs-callout-warning}
If you want to rollback to previous code or remove added extensions in an environment, restoring a snapshot is not the recommended method. See [Rollbacks to remove code](#rollback-code). If you need to restore an unstable environment that does not have a snapshot, see [Restore an environment]({{ site.baseurl }}/cloud/env/restore-environment.html).

You have up to **7 days** to _restore_ a snapshot.

We provide two methods for creating and managing snapshots:

-  Magento Web Interface
-  Magento CLI

## Create a snapshot {#create-snapshot}

{:.procedure}
To create a snapshot using the Magento Web Interface:

1. Log in to your project.
1. In the left pane, click the name of the environment to back up.
1. In the top pane, click ![Take a snapshot of an environment]({{ site.baseurl }}/common/images/cloud_snapshots.png){:width="30px"} (snapshots).
1. Click **Create**.

{:.procedure}
To create a snapshot using the Magento CLI:

1. Open a terminal and navigate to your {{site.data.var.ece}} project.
1. Checkout the environment branch to snapshot.
1. Create the snapshot.

   ```bash
   magento-cloud snapshot:create
   Creating a snapshot of production
   Waiting for the snapshot to complete...
   ```

   The following modifiers further specify how to create the snapshot:

   ```text
   -p, --project=PROJECT          The project ID
   -e, --environment=ENVIRONMENT  The environment ID
   ```

   For a full list of options, enter `magento-cloud snapshot:create --help`.

1. Verify the most recent snapshots.

   ```bash
   magento-cloud snapshots
   ```

   The list returns information about the snapshot status:

   ```terminal
   Finding snapshots for the environment <environment_name>
   +---------------------------+--------------------+----------+----------+---------+
   | Created                   | Snapshot name      | Progress | State    | Result  |
   +---------------------------+--------------------+----------+----------+---------+
   | 2018-04-09T14:43:39-05:00 | <snapshot_ID>.     | 100%     | complete | success |
   +---------------------------+--------------------+----------+----------+---------+
   ```

## Restore a snapshot {#restore-snapshot}

{:.procedure}
To restore a snapshot using the Magento Web Interface:

1. Log in to your project.
1. In the left pane, click the name of the environment to restore.
1. In the environment messages, select **snapshot** from the _all types of_ drop-down list.
1. Click **restore** next to the snapshot.
1. Review the Snapshot restore date and click **Restore**.

{:.procedure}
To restore a snapshot using the Magento CLI:

1. Open a terminal and navigate to your {{site.data.var.ece}} project.
1. Checkout the environment branch to restore.
1. List all available snapshots.

   ```bash
   magento-cloud snapshot:list
   ```

   The list returns information about the available snapshots:

   ```terminal
   Finding snapshots for the environment <environment_name>
   +---------------------------+--------------------+----------+----------+---------+
   | Created                   | Snapshot name      | Progress | State    | Result  |
   +---------------------------+--------------------+----------+----------+---------+
   | 2018-04-09T14:43:39-05:00 | <snapshot_ID>.     | 100%     | complete | success |
   +---------------------------+--------------------+----------+----------+---------+
   ```

1. Restore a snapshot using the snapshot ID from the list.

   ```bash
   magento-cloud snapshot:restore <snapshot_id>
   ```

   The following modifiers further specify how to restore the snapshot:

   ```text
   -p, --project=PROJECT          The project ID
   -e, --environment=ENVIRONMENT  The environment ID
   ```

## Dump your database {#db-dump}

You can create a copy of your database using [`magento/ece-tools`]({{ site.baseurl }}/cloud/reference/cloud-composer.html#ece-tools).

{:.procedure}
To create a database dump:

1. [SSH into the environment]({{ site.baseurl }}/cloud/env/environments-ssh.html) that contains the database you want to copy:

   -  **Staging:** `ssh -A <project ID>_stg@<project ID>.ent.magento.cloud`
   -  **Production:** `ssh -A <project ID>@<project ID>.ent.magento.cloud`
   -  To SSH into the `master` branch of your Integration environment:

      ```bash
      magento-cloud environment:ssh
      ```

1. Enter the following command:

   ```bash
   vendor/bin/ece-tools db-dump
   ```

 {:.bs-callout-info}

-  We recommend putting the application in maintenance mode before doing a database dump in Production environments.
-  The command creates an archive in your local project directory called  `dump-<timestamp>.sql.gz`.
-  If an error occurs during the dump, the command deletes the dump file to conserve disk space. Review the logs for details (`var/log/cloud.log`).
-  For Pro Production environments, this command dumps only from one of three high-availability nodes, so production data written to a different node during the dump may not be copied. It generates a `var/dbdump.lock` file to prevent running the command on more than one node.

{:.bs-callout-tip}
If you want to push this data into an environment, see [Migrate data and static files]({{ site.baseurl }}/cloud/live/stage-prod-migrate.html).

## Rollbacks to remove code {#rollback-code}

We recommend creating a snapshot of the environment and a backup of the database prior to deployments.

If you need to restore a snapshot specifically to remove new code and added extensions, the process can be complicated depending on the amount of changes and when you rollback. Some rollbacks may require database changes.

Specifically for code, you should investigate reverting code changes from your branch before redeploying. If not, every deploy pushes the master branch (code and extensions) again to the target environment. See the [Deployment Process]({{ site.baseurl }}/cloud/reference/discover-deploy.html).
