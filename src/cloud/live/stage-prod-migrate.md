---
group: cloud-guide
title: Deploy code and migrate static files and data
functional_areas:
  - Cloud
  - Deploy
---

{:.ref-header}
Previous step

[Prepare to deploy to Staging and Production]({{ site.baseurl }}/cloud/live/stage-prod-migrate-prereq.html)

To migrate your database and static files to Staging and Production:

-  [Deploy code](#code)
-  [Migrate static files](#cloud-live-migrate-static)
-  [Migrate the database](#cloud-live-migrate-db)

If you encounter errors or need to change project configuration, complete the required updates in your local environment. Then, push the code changes to the Integration environment to deploy and test before pushing to Staging and Production environments.

## Deploy code to Staging and Production {#code}

You can use the [Project Web Interface](#interface) or [SSH and CLI commands](#ssh) to deploy your code to Staging and Production.

### Deploy code with the Project Web Interface {#interface}

The Project Web Interface provides features to create, manage, and deploy code in Integration, Staging, and Production environments for Starter and Pro plans.

For Pro projects, deploy the Integration branch you created to Staging and Production:

1. [Log in](https://accounts.magento.cloud) to your project.
1. Select the Integration branch.
1. Select the **Merge** option to deploy to Staging. Complete all testing.
1. Select the Staging branch.
1. Select the **Merge** option to deploy to Production.

For Starter, deploy the development branch you created to Staging and Production:

1. [Log in](https://accounts.magento.cloud) to your project.
1. Select the prepared code branch.
1. Select the **Merge** option to deploy to Staging. Complete all testing.
1. Select the Staging branch.
1. Select the **Merge** option to deploy to Production.

![Use the merge option to deploy]({{ site.baseurl }}/common/images/cloud/cloud_project-merge.png)

### Deploy code with SSH and CLI {#ssh}

You can use the [Magento Cloud CLI commands]({{ site.baseurl }}/cloud/reference/cli-ref-topic.html) to deploy code to Starter and Pro environments. You need SSH and Git access to your project. See [prepare for deployment]({{ site.baseurl}}/cloud/live/stage-prod-migrate-prereq.html).

**Prerequisites:**

-  [Build and deploy on local]({{ site.baseurl }}/cloud/live/live-sanity-check.html)
-  [Prepare to deploy to Staging and Production]({{ site.baseurl }}/cloud/live/stage-prod-migrate-prereq.html)

#### Step 1:  Deploy and test the Integration environment:

1. After logging into the project, check out the Integration environment:

   ```bash
   magento-cloud environment:checkout <environment-ID>
   ```

1. Synchronize your local Integration environment with the remote environment:

   ```bash
   magento-cloud environment:synchronize <environment-ID>
   ```

1. Create a snapshot of the environment as a backup:

   ```bash
   magento-cloud snapshot: create -e <environment-ID>
   ```

1. Update code in your local branch as needed.

1. Add, commit, and push changes to the environment.

   ```bash
   git add -A && git commit -m "Commit message" && git push magento <environment-ID>
   ```

1. Complete site testing.

#### Step 2: Merge changes to Staging and deploy

1. Check out the Staging environment:

   ```bash
   magento-cloud environment:checkout <environment-ID>
   ```

1. Synchronize your local Staging environment with the remote environment:

   ```bash
   magento-cloud environment:synchronize <environment-ID>
   ```

1. Create a snapshot of the environment as a backup:

   ```bash
   magento-cloud snapshot: create -e <environment-ID>
   ```

1. Merge the Integration environment to Staging to deploy:

   ```bash
   magento-cloud environment:merge <Integration-ID>
   ```

1. Complete site testing.

#### Step 3: Deploy to Production:

1. Check out, synchronize, and create a snapshot of your local Production environment.

1. Merge the Staging environment to Production to deploy:

   ```bash
   magento-cloud environment:merge <Staging-ID>
   ```

1. Complete site testing.

## Migrate static files {#cloud-live-migrate-static}

You migrate [static files](https://glossary.magento.com/static-files) from your `pub/media` directory to Staging or Production.

We recommend using the Linux remote synchronization and file transfer command [`rsync`](https://en.wikipedia.org/wiki/Rsync). The rsync utility uses an algorithm that minimizes the amount of data by moving only the portions of files that have changed. Rsync also supports compression.

Use the following command to migrate files:

```bash
rsync -azvP <source> <destination>
```

This command uses the following options:

-  `a`–archive
-  `z`–compress
-  `v`–verbose
-  `P`–partial progress

For additional options, see the [rsync man page](http://linux.die.net/man/1/rsync).

To migrate static files from your local machine, use the `rsync` command to copy the `pub/media` directory from your local Magento server to staging or production:

```bash
rsync -azvP local_machine/pub/media/ <environment_ssh_link@ssh.region.magento.cloud>:pub/media/
```

{:.procedure}
To migrate static files from remote-to-remote environments directly (fast approach):

{:.bs-callout-info}
To transfer media from remote-to-remote environments directly, you must enable ssh agent forwarding, see [GitHub guidance](https://developer.github.com/v3/guides/using-ssh-agent-forwarding/).

1. [Open an SSH connection]({{ site.baseurl }}/cloud/env/environments-ssh.html#ssh) to the source environment.

   To find the **SSH access** link in your Project Web Interface, select the environment and click **Access Site**. The syntax for the SSH command is as follows:

   ```bash
   ssh -A <environment_ssh_link@ssh.region.magento.cloud>
   ```

1. Use the `rsync` command to copy the `pub/media` directory from your current environment to  another remote environment:

   ```bash
   rsync -azvP pub/media/ <destination_environment_ssh_link@ssh.region.magento.cloud>:pub/media/
   ```

## Migrate the database {#cloud-live-migrate-db}

{%include cloud/note-db-import-export-warning.md%}

**Prerequisite:** A database dump (see Step 3) should include database triggers. For dumping them, confirm you have the [TRIGGER privilege](https://dev.mysql.com/doc/refman/5.7/en/privileges-provided.html#priv_trigger).

**Important:** The Integration environment database is strictly for development testing and can include data that you do not want to migrate into Staging and Production.

For continuous integration deployments, we **do not recommend** migrating data from Integration to Staging and Production. You could pass testing data or overwrite important data. Any vital configurations will be passed using the [configuration file]({{ site.baseurl }}/cloud/live/sens-data-over.html) and `setup:upgrade` command during build and deploy.

We **do recommend** migrating data from Production into Staging to fully test your site and store(s) in a near-production environment with all services and settings.

{:.bs-callout-info}
To transfer media from remote-to-remote environments directly you must enable ssh agent forwarding, see [GitHub guidance](https://developer.github.com/v3/guides/using-ssh-agent-forwarding/)

{:.procedure}
To migrate a database:

1. SSH into the environment you want to create a database dump from:

   ```bash
   ssh -A <environment_ssh_link@ssh.region.magento.cloud>
   ```

1. List the environment relationships to find the database login information:

   ```bash
   php -r 'print_r(json_decode(base64_decode($_ENV["MAGENTO_CLOUD_RELATIONSHIPS"]))->database);'
   ```

1. Create a database dump file in `gzip` format:

   For Starter environments and Pro Integration environments:

   ```bash
   mysqldump -h <database host> --user=<database username> --password=<password> --single-transaction --triggers main | gzip - > /tmp/database.sql.gz
   ```

   For Pro Staging and Production environments, the name of the database is in the `MAGENTO_CLOUD_RELATIONSHIPS` variable (typically the same as the application name and username):

   ```bash
   mysqldump -h <database host> --user=<database username> --password=<password> --single-transaction --triggers <database name> | gzip - > /tmp/database.sql.gz
   ```

1. Transfer the database dump to another remote environment with the `rsync` command:

   ```bash
   rsync -azvP /tmp/database.sql.gz <destination_environment_ssh_link@ssh.region.magento.cloud>:/tmp
   ```

1. Type `logout` to terminate the SSH connection.

1. Open an SSH connection to the environment you want to migrate the database into:

   ```bash
   ssh -A <destination_environment_ssh_link@ssh.region.magento.cloud>
   ```

1. Import the database dump:

   ```bash
   zcat /tmp/database.sql.gz | mysql -h <database_host> -u <username> -p<password> <database name>
   ```

   The following example references the gzip file created by the database dump operation:

   ```bash
   zcat /tmp/database.sql.gz | mysql -h database.internal -u user main
   ```

### Troubleshooting the database migration

If you encounter the following error, you can try to create a database dump with the DEFINER replaced:

```terminal
ERROR 1277 (42000) at line <number>: Access denied; you need (at least one of) the SUPER privilege(s) for this operation
```
{:.no-copy}

This error occurs because the DEFINER for the triggers in the SQL dump is the production user. This user requires administrative permissions.

To solve this problem, you can generate a new database dump changing or removing the `DEFINER` clause as shown in the following example:

```bash
mysqldump -h <database host> --user=<database username> --password=<password> --single-transaction <database name>  | sed -e 's/DEFINER[ ]*=[ ]*[^*]*\*/\*/' | gzip > /tmp/database_no-definer.sql.gz
```

Use the database dump file to [migrate the database](#cloud-live-migrate-db).

{:.bs-callout-info}
After migrating the database, you can set up your stored procedures or views in Staging or Production the same way you did in your Integration environment.

{:.ref-header}
Related topics

[Test deployment]({{ site.baseurl }}/cloud/live/stage-prod-test.html)
