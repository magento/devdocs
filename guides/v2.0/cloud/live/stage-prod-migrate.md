---
group: cloud
title: Deploy code and migrate static files and data
version: 2.0
github_link: cloud/live/stage-prod-migrate.md
functional_areas:
  - Cloud
  - Deploy
---

#### Previous step:
[Prepare to deploy to Staging and Production]({{ page.baseurl }}/cloud/live/stage-prod-migrate-prereq.html)

To migrate your database and static files to Staging and Production:

* [Deploy code](#code)
*	[Migrate static files](#cloud-live-migrate-static)
*	[Migrate the database](#cloud-live-migrate-db)

If you encounter errors or need to make changes, complete those updates on your local. Push the code changes to the Integration environment. Deploy the updated `master` branch again. See instructions in the [previous step]({{ page.baseurl }}/cloud/live/stage-prod-migrate.html).

## Deploy code to Staging and Production {#code}
You can also use the [Project Web Interface](#interface) or [SSH and CLI commands](#ssh) to deploy your code to Staging and Production.

### Deploy code with the Project Web Interface {#interface}
The Project Web Interface provides full features to create, manage, and deploy code branches in your Integration, Staging, and Production environments for Starter and Pro plans.

For Pro projects created **after October 23, 2017** or [updated]({{ page.baseurl }}/cloud/trouble/pro-env-management.html), deploy the Integration `master` branch you created to Staging and Production:

1. [Log in](https://accounts.magento.cloud) to your project.
2. Select the Integration branch.
3. Select the **Merge** option to deploy to Staging. Complete all testing.
4. Select the Staging branch.
5. Select the **Merge** option to deploy to Production.

{% include cloud/wings-management.md %}

For Starter, deploy your development branch you created to Staging and Production:

1. [Log in](https://accounts.magento.cloud) to your project.
2. Select the prepared code branch.
3. Select the **Merge** option to deploy to Staging. Complete all testing.
4. Select the Staging branch.
5. Select the **Merge** option to deploy to Production.

![Use the merge option to deploy]({{ site.baseurl }}/common/images/cloud_project-merge.png)

### Deploy code with SSH and CLI {#ssh}
If you prefer to use CLI for deploying, you will need to configure additional SSH settings and Git remotes to use commands. You can SSH into the Staging and Production environments to push the `master` branch.

You'll need the SSH and Git access information for your project.

* For Starter projects, locate the SSH and Git information through the Project Web Interface.
* For Pro projects created **after October 23, 2017** or [updated]({{ page.baseurl }}/cloud/trouble/pro-env-management.html), locate the SSH and Git information through the Project Web Interface.
* For Pro projects created **before October 23, 2017**, the formats are as follows:

  *	Git URL format:

  	*	Staging: `git@git.ent.magento.cloud:<project ID>_stg.git`
  	*	Production: `git@git.ent.magento.cloud:<project ID>.git`

  *	SSH URL format:

  	*	Staging: `<project ID>_stg@<project ID>.ent.magento.cloud`
  	*	Production: `<project ID>@<project ID>.ent.magento.cloud`

#### Deploy to Pro: updated or created after October 23, 2017
To deploy to Pro projects **created after October 23, 2017** or [updated]({{ page.baseurl }}/cloud/trouble/pro-env-management.html):

1. Open an SSH connection to your Staging or Production environment using the SSH command.
2. Checkout your Staging or Production branch:

  * Staging: `git checkout staging`
  * Production: `git checkout production`
3. Pull the `master` branch from Integration. Remember, a pull performs a fetch and a merge in one step.

        git pull origin master

  You merge this code as `staging` and `production` are branches of `master`.
4. To fully update all code, then perform a push:

        git push origin


#### Deploy to Pro: created before October 23, 2017 {#classic}
For these environments, you are pushing code from repository to repository: Integration `master` to Staging or Production `master`. Due to these being `master` branches in different repositories, you cannot merge as if branch to branch. You should have completed all [prerequisites]({{ page.baseurl }}/cloud/live/stage-prod-migrate-prereq.html) prior to deployment.

1. Open an SSH connection to your Staging or Production environment using the SSH command.
2. Pull the `master` branch to the server.

        git pull origin master

3. Merge changes to Staging or Production:

  * Staging: `git push staging master:master`
  * Production: `git push production master:master`

  You must force push for these branches as they are separate repositories with a master branch.

## Migrate static files {#cloud-live-migrate-static}
You will migrate {% glossarytooltip 363662cb-73f1-4347-a15e-2d2adabeb0c2 %}static files{% endglossarytooltip %} from your `pub/media` directory to Staging or Production.

We recommend using the Linux remote synchronization and file transfer command [`rsync`](https://en.wikipedia.org/wiki/Rsync){:target="\_blank"}. rsync uses an algorithm that minimizes the amount of data by moving only the portions of files that have changed; in addition, it supports compression.

We suggest using the following syntax:

	rsync -azvP <source> <destination>

Options:

	a archive
	z compress
	v verbose
	P partial progress

For additional options, see the [rsync man page](http://linux.die.net/man/1/rsync){:target="\_blank"}.

To migrate static files:

1.	Copy media folder to your local environment:

		rsync -azvP <environment_ssh_link@ssh.region.magento.cloud>:pub/media/ /local_machine/pub/media/ 

2.	rsync the `pub/media` directory from your local Magento server to staging or production:

		rsync -azvP local_machine/pub/media/ <environment_ssh_link@ssh.region.magento.cloud>:pub/media/ 

## Migrate the database {#cloud-live-migrate-db}

**Prerequisite:** A database dump (see Step 3) should include database triggers. For dumping them, make sure you have the [TRIGGER privilege](https://dev.mysql.com/doc/refman/5.7/en/privileges-provided.html#priv_trigger){:target="\_blank"}.

**Important:** The Integration environment database is strictly for development testing and may include data you may not want to migrate into Staging and Production.

For continuous integration deployments, we **do not recommend** migrating data from Integration to Staging and Production. You could pass testing data or overwrite important data. Any vital configurations will be passed using the [configuration file](http://devdocs.magento.com/guides/v2.1/cloud/live/sens-data-over.html) and `setup:upgrade` command during build and deploy.

We **do recommend** migrating data from Production into Staging to fully test your site and store(s) in a near-production environment with all services and settings.

To migrate a database:

1.	SSH into the environment you want to create a database dump from:

	*	Staging: `ssh -A <project ID>_stg@<project ID>.ent.magento.cloud`
	*	Production: `ssh -A <project ID>@<project ID>.ent.magento.cloud`
	* To SSH into the `master` branch of your Integration environment:

			magento-cloud environment:ssh
2.	Find the database login information with the following command:

    ```
		php -r 'print_r(json_decode(base64_decode($_ENV["MAGENTO_CLOUD_RELATIONSHIPS"]))->database);'
    ```

3.	Create a database dump. The following command creates a database dump as a gzip file.

	For Starter environments and Pro Integration environments:

		mysqldump -h <database host> --user=<database user name> --password=<password> --single-transaction --triggers main | gzip - > /tmp/database.sql.gz

	For Pro Staging and Production environments, the name of the database is in the `MAGENTO_CLOUD_RELATIONSHIPS` variable (typically the same as the application name and user name):

		mysqldump -h <database host> --user=<database user name> --password=<password> --single-transaction --triggers <database name> | gzip - > /tmp/database.sql.gz
		
4. 	Enter `exit` to terminate the SSH connection.

5.	Transfer the database dump to local machine with an `rsync` command:

		rsync -azvP <environment_ssh_link@ssh.region.magento.cloud>:/tmp/database.sql.gz /local_folder/
		
6. 	Transfer the database dump from local machine to remote cloud environment (staging or production):

		rsync  -azvP /local_folder/database.sql.gz <environment_ssh_link@ssh.region.magento.cloud>:/tmp
	
7.	Open an SSH connection to the environment you want to migrate the database into:

	*	Staging: `ssh -A <project ID>_stg@<project ID>.ent.magento.cloud`
	*	Production: `ssh -A <project ID>@<project ID>.ent.magento.cloud`
	* To SSH into the `master` branch of your Integration environment:

			magento-cloud environment:ssh
8.	Import the database dump with the following command:

		zcat database.sql.gz | mysql -h <database_host> -u <username> -p<password> <database name>

	The following is an example using information from step 2:

		zcat database.sql.gz | mysql -h database.internal -u user main

### Troubleshooting the database migration
If you encounter the following error, you can try to create a database dump with the DEFINER replaced:

```
ERROR 1277 (42000) at line <number>: Access denied; you need (at least one of) the SUPER privilege(s) for this operation
```

This error occurs because the DEFINER for the triggers in the SQL dump is the production user. This user requires administrative permissions.

To solve the issue, you can generate a new database dump changing or removing the `DEFINER` clause. The following is one example of completing this change:

```bash
mysqldump -h <database host> --user=<database user name> --password=<password> --single-transaction main  | sed -e 's/DEFINER[ ]*=[ ]*[^*]*\*/\*/' | gzip > /tmp/database_no-definer.sql.gz
```

Use the database dump you just created to [migrate the database](#cloud-live-migrate-db).

<div class="bs-callout bs-callout-info" id="info" markdown="1">
After migrating the database, you can set up your stored procedures or views in Staging or Production the same way you did in your Integration environment.
</div>

#### Next step
[Test deployment]({{ page.baseurl }}/cloud/live/stage-prod-test.html)
