---
group: cloud
title: Patch Magento Commerce (Cloud)
version: 2.0
redirect_from:
  - /guides/v2.0/cloud/howtos/patch-magento.html
  - /guides/v2.1/cloud/howtos/patch-magento.html
  - /guides/v2.2/cloud/howtos/patch-magento.html
functional_areas:
  - Cloud
  - Upgrade
---

You can apply patches as they are available to update {{site.data.var.ece}}. We recommend using a new active branch and Integration environment for applying and testing the patch prior to fully deploying across all environments. We strongly recommend you test patches locally so you can identify and resolve any issues.

When you perform a {{site.data.var.ece}} upgrade, you automatically upgrade with patches and hotfixes through the `composer update` command. To upgrade and test {{site.data.var.ece}} (including patches and hotfixes), see [Upgrade Magento Commerce (Cloud)]({{ page.baseurl }}/cloud/project/project-upgrade.html).

To check for patches, you can check the `vendor/magento/magento-cloud-configuration/patches` folder.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
We recommend installing full {{site.data.var.ece}} upgrades for important security updates. Full upgrades include all associated patches and hotfixes.
</div>

There are two types of patches:

*   [General patches](#cloud-patch-gen)

    These patches are provided for all Magento Commerce customers in a GitHub repository that's referenced in your `composer.json`. We apply these patches automatically during the build phase.

    To install general patches, use `composer update`, test your system, and push the patches to the remote server.

*   [Custom patches](#cloud-patch-custom)

    Custom patches can be provided by Magento to address a specific issue you raised in a Support ticket. Third-party extension developers can also provide a custom patch.

    Copy custom patches to the `m2-hotfixes` directory and test them on your locally. After successfully testing them, push the patches to the remote server.

<div class="bs-callout bs-callout-warning" markdown="1">
Always apply and test a patch your local system in an active branch. You can push and test in an Integration environment prior to deploying across all environments. All environments are read-only. You must update locally and push the Git branch to deploy across all environments.
</div>

Our patches are Composer driven. For more information on Composer, see [Composer in Cloud]({{ page.baseurl }}/cloud/reference/cloud-composer.html). When you perform a {{site.data.var.ece}} upgrade, you automatically upgrade with patches and hotfixes through the `composer update` command.

## Verify or set the ADMIN_EMAIL variable {#variable}

The environment variable `ADMIN_EMAIL` is required for upgrading and patching. This email is used for sending password reset requests and verified during when updating {{site.data.var.ece}}. See [Set environment and project variables]({{ page.baseurl }}/cloud/project/project-webint-basic.html#project-conf-env-var).

## Back up the database {#backup-db}

Back up your Integration environment database and code:

1.  Enter the following command to make a local backup of the remote database:

        magento-cloud db:dump
2.  Enter the following command to back up code and media:

        php bin/magento setup:backup --code [--media]

    You can optionally omit `[--media]` if you have a large number of static files that are already in source control.

Back up your Staging or Production environment database before deploying to those environments:

1.  [SSH to the server]({{ page.baseurl }}/cloud/env/environments-ssh.html).
2.  Find the database login information:

        php -r 'print_r(json_decode(base64_decode($_ENV["MAGENTO_CLOUD_RELATIONSHIPS"]))->database);'

3.  Create a database dump:

        mysqldump -h <database host> --user=<database username> --password=<password> --single-transaction <database name> | gzip - > /tmp/database.sql.gz

## Verify other changes {#verify-changes}

Verify other changes you're going to submit to source control before you start the upgrade:

1.  If you haven't done so already, change to your project root directory.
2.  Enter the following command:

        git status
3.  If there are changes you do *not* want to submit to source control, branch or stash them now.

## Apply the patch {#patch}

To apply the patch, you run the `composer update` command. The command uses `composer.json` to pull and install the patch to your local. When complete, you will add the files to the Git branch and push to build and deploy.

If multiple patches are installed, they are applied in order by name. The name of the patches include the version number.

1.  Change to your Magento base directory and enter the following command:

        composer update

    This command automatically upgrades for patches associated to the installed Magento Commerce version.

4.  Add, commit, and push your changes to initiate a deployment:

        git add -A
        git commit -m "Upgrade patch"
        git push origin <branch name>

    `git add -A` is required to add all changed files to source control because of the way Composer marshals base packages.

    The files Composer marshals belong to the new version of Magento, to overwrite the outdated version of those same files. Currently, marshaling is disabled in Magento Commerce, so you must add the marshaled files to source control.

5.  Wait for deployment to complete.

## Test general patches {#cloud-patch-gen}

*General patches* are provided for all Magento Commerce customers in a repository referenced in your `composer.json`. We apply patches automatically during the build phase when a patch is available. The procedure discussed in this section enables to you test a patch locally anytime you choose.

### Get started {#gen-getstarted}

We recommend testing patches in an active branch, prior to deploying to Staging and Production environments.

{% include cloud/cli-get-started.md %}

### Test a general patch on your local system {#gen-testlocal}

To test a general patch on your local system, you create a branch from the Pro Integration `master` branch or Starter plan `staging` branch. The commands used in the instructions are for Pro plan using the `master` branch.

1.	On your local system, enter the following commands as the [Magento file system owner]({{ page.baseurl }}/cloud/before/before-workspace-file-sys-owner.html):

		cd <project root dir>
		magento-cloud environment:checkout master
		git pull origin master
		composer update
2.	Apply the patch locally:

		git apply vendor/magento/magento-cloud-configuration/patches/<patch file name>
3.	Clean the Magento cache:

		php <Magento project root dir>/bin/magento cache:clean

	You can also clean the cache using the [Magento Admin](http://docs.magento.com/m2/ee/user_guide/system/cache-management.html){:target="_blank"}.
4.	Thoroughly test your local system to make sure the patch doesn't have unexpected side-affects.
5.	After testing the patch, push it to the remote server and deploy it:

		git add -A && git commit -m "Apply patch"
		git push origin <branch name>

### Push a general patch to Staging or Production environments {#gen-pushpatch}

After you've successfully tested a patch locally and on your integration environment, you can push the patch to Staging or Production environment:

1.  Open an SSH connection to your Staging or Production environment. For Starter, see the Project Web Interface for the SSH links. Your Production environment is the Master. For Pro, the SSH access is one of the following:

    *   Staging: `ssh -A <project ID>_stg@<project ID>.ent.magento.cloud`
    *   Production: `ssh -A <project ID>@<project ID>.ent.magento.cloud`
2.	Enter the following commands:

		<Magento project root dir>/composer update
2.	Apply the patch locally:

		git apply vendor/magento/magento-cloud-configuration/patches/<patch file name>
3.	Clean the Magento cache:

		php <Magento project root dir>/bin/magento cache:clean

	You can also clean the cache using the [Magento Admin](http://docs.magento.com/m2/ee/user_guide/system/cache-management.html){:target="_blank"}.
3.	Thoroughly test your local system to make sure the patch doesn't have unexpected side-affects.
4.	After testing the patch, push it to the remote server and deploy it:

		git add -A && git commit -m "Apply patch"
		git push origin master

## Test custom patches {#cloud-patch-custom}

*Custom patches* are provided to specific customers in a Support ticket. Before you continue, make sure the patch file we provided you is available.

### Get started {#custom-getstarted}

We recommend you test a patch locally in an active branch. After completing testing, you can push the branch to Staging and Production.

{% include cloud/cli-get-started.md %}

### Test a custom patch on your local system {#custom-testlocal}

To test a custom patch on your local system:

1.	On your local system, enter the following command as the [Magento file system owner]({{ page.baseurl }}/cloud/before/before-workspace-file-sys-owner.html) if you haven't done so already:

		mkdir <Magento project root dir>/m2-hotfixes
3.	Copy the patch file to that directory.
2.	Apply the patch locally:

		cd <Magento project root dir>
		magento-cloud environment:checkout master
		git pull origin master
		git apply <Magento project root dir>/m2-hotfixes/<patch file name>
3.	Clean the Magento cache:

		php <Magento project root dir>/bin/magento cache:clean

	You can also clean the cache using the [Magento Admin](http://docs.magento.com/m2/ee/user_guide/system/cache-management.html){:target="_blank"}.
4.	After testing the patch, push it to the remote server and deploy it:

		git add -A && git commit -m "Apply patch"
		git push origin <branch name>

### Push a custom patch to Staging or Production environments {#custom-pushpatch}

After you've successfully tested a custom patch locally and on your Integration environment, you can push the patch to Staging or Production for Starter and Pro.

1.  Open an SSH connection to your Staging or Production environment. For Starter, see the Project Web Interface for the SSH links. Your Production environment is the Master. For Pro, the SSH access is one of the following:

    *   Staging: `ssh -A <project ID>_stg@<project ID>.ent.magento.cloud`
    *   Production: `ssh -A <project ID>@<project ID>.ent.magento.cloud`
2.	On your staging or production system, enter the following command if you haven't done so already:

		mkdir <Magento project root dir>/m2-hotfixes
3.	Copy the patch file to that directory.

	We suggest using the following command:

		rsync -azvP <source> <destination>

	Options:

	`a` archive

	`z` compress

	`v` verbose

	`P` partial progress

	For additional options, see the [rsync man page](http://linux.die.net/man/1/rsync){:target="_blank"}.
2.	Apply the patch:

		git apply <Magento project root dir>/m2-hotfixes/<patch file name>
3.	Clean the Magento cache:

		php <Magento project root dir>/bin/magento cache:clean

	You can also clean the cache using the [Magento Admin](http://docs.magento.com/m2/ee/user_guide/system/cache-management.html){:target="_blank"}.
4.	After testing the patch, push it to the remote server and deploy it:

		git add -A && git commit -m "Apply patch"
		git push origin <branch name>

#### Related topic

* [Composer]({{ page.baseurl }}/cloud/reference/cloud-composer.html)
