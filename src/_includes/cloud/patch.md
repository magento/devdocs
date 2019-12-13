This topic discusses how to test patches to your {{site.data.var.ece}} system locally before you push them to the remote server. We strongly recommend you test patches locally so you can identify and resolve any issues.

When you perform a {{site.data.var.ee}} upgrade, you automatically upgrade with patches and hotfixes through the `composer update` command. If you upgrade a Cloud patch without upgrading the full {{site.data.var.ee}} application, see [Upgrade a {{site.data.var.ee}} patch](#upgrade-patch). To upgrade and test a full {{site.data.var.ee}} version (including patches and hotfixes), see [Upgrade and test {{site.data.var.ee}}]({{ site.baseurl }}/cloud/project/project-upgrade.html).

 {:.bs-callout-info}
We recommend installing full {{site.data.var.ee}} upgrades for important security updates. Full upgrades include all associated patches and hotfixes.

There are two types of patches:

*  [General patches](#cloud-patch-gen)

   These patches are provided for all {{site.data.var.ee}} customers in a GitHub repository that's referenced in your `composer.json`. We apply these patches automatically during the build phase.

   To install general patches, use `composer update`, test your system, and push the patches to the remote server.

*  [Custom patches](#cloud-patch-custom)

   Custom patches can be provided by Magento to address a specific issue you raised in a Support ticket. Third-party module / extension developers can also provide a custom patch.

   Copy custom patches to the `m2-hotfixes` directory and test them on your locally. After successfully testing them, push the patches to the remote server.

{:.bs-callout-warning}
Always test a patch your local system. When complete, push the local Git branch to deploy your Integration environment. Resolve any issues before you deploy to Staging or Production.

For more information on Composer, see [Composer in Cloud]({{ site.baseurl }}/cloud/reference/cloud-composer.html).

## Upgrade a {{site.data.var.ee}} patch {#upgrade-patch}

When you perform a {{site.data.var.ee}} upgrade, you automatically upgrade with patches and hotfixes through the `composer update` command.

### Back up the database

Back up your Integration environment database and code:

1. Enter the following command to make a local backup of the remote database:

   ```bash
   magento-cloud db:dump
   ```

1. Enter the following command to back up code and media:

   ```bash
   php bin/magento setup:backup --code [--media]
   ```

   You can optionally omit `[--media]` if you have a large number of static files that are already in source control.

Back up your Staging or Production environment database before deploying to those environments:

1. [SSH to the server]({{ site.baseurl }}/cloud/env/environments-ssh.html).
1. Find the database login information:

   ```bash
   php -r 'print_r(json_decode(base64_decode($_ENV["MAGENTO_CLOUD_RELATIONSHIPS"]))->database);'
   ```

1. Create a database dump:

   ```bash
   mysqldump -h <database host> --user=<database username> --password=<password> --single-transaction <database name> | gzip - > /tmp/database.sql.gz
   ```

### Verify other changes

Verify other changes you're going to submit to source control before you start the upgrade:

1. If you haven't done so already, change to your project root directory.
1. Enter the following command:

   ```bash
   git status
   ```

1. If there are changes you do *not* want to submit to source control, branch or stash them now.

### Upgrade the patch

1. Change to your Magento base directory and enter the following command:

   ```bash
   composer update
   ```

   This command automatically upgrades for patches associated to the installed {{site.data.var.ee}} version.

1. Add, commit, and push your changes to initiate a deployment:

   ```bash
   git add -A
   ```

   ```bash
   git commit -m "Upgrade patch"
   ```

   ```bash
   git push origin <branch name>
   ```

   `git add -A` is required to add all changed files to source control because of the way Composer marshals base packages.

   The files Composer marshals belong to the new version of Magento, to overwrite the outdated version of those same files. Currently, marshaling is disabled in {{site.data.var.ee}}, so you must add the marshaled files to source control.

1. Wait for deployment to complete.

## Test general patches {#cloud-patch-gen}

*General patches* are provided for all {{site.data.var.ee}} customers in a repository referenced in your `composer.json`. We apply patches automatically during the build phase when a patch is available. The procedure discussed in this section enables to you test a patch locally anytime you choose.

The procedure you use is slightly different, depending on the type of environment, see [Pro architecture]({{ site.baseurl }}/cloud/architecture/pro-architecture.html#cloud-arch-int).

### Get started {#gen-getstarted}

We recommend you test a patch in the `master` branch.

{% include cloud/cli-get-started.md %}

### Test a general patch on your local system {#gen-testlocal}

To test a general patch on your local system:

1. On your local system, enter the following commands as the [Magento file system owner]({{ site.baseurl }}/cloud/before/before-workspace-file-sys-owner.html):

   ```bash
   cd <project root dir>
   ```

   ```bash
   magento-cloud environment:checkout master
   ```

   ```bash
   git pull origin master
   ```

   ```bash
   composer update
   ```

1. Apply the patch locally:

   ```bash
   git apply vendor/magento/magento-cloud-configuration/patches/<patch file name>
   ```

1. Clean the Magento cache:

   ```bash
   php <Magento project root dir>/bin/magento cache:clean
   ```

   You can also clean the cache using the [Magento Admin](http://docs.magento.com/m2/ee/user_guide/system/cache-management.html).

1. Thoroughly test your local system to make sure the patch doesn't have unexpected side-affects.
1. After testing the patch, push it to the remote server and deploy it:

   ```bash
   git add -A && git commit -m "Apply patch"
   ```

   ```bash
   git push origin <branch name>
   ```

### Push a general patch to the staging or production environment {#gen-pushpatch}

After you've successfully tested a patch locally and on your integration environment, you can push the patch to staging or production as follows:

1. Open an SSH connection to your staging or production server:

   *  Staging: `ssh -A <project ID>_stg@<project ID>.ent.magento.cloud`
   *  Production: `ssh -A <project ID>@<project ID>.ent.magento.cloud`

1. Enter the following commands:

   ```bash
   <Magento project root dir>/composer update
   ```

1. Apply the patch locally:

   ```bash
   git apply vendor/magento/magento-cloud-configuration/patches/<patch file name>
   ```

1. Clean the Magento cache:

   ```bash
   php <Magento project root dir>/bin/magento cache:clean
   ```

   You can also clean the cache using the [Magento Admin](http://docs.magento.com/m2/ee/user_guide/system/cache-management.html).

1. Thoroughly test your local system to make sure the patch doesn't have unexpected side-affects.
1. After testing the patch, push it to the remote server and deploy it:

   ```bash
   git add -A && git commit -m "Apply patch"
   ```

   ```bash
   git push origin master
   ```

## Test custom patches {#cloud-patch-custom}

*Custom patches* are provided to specific customers in a Support ticket. Before you continue, make sure the patch file we provided you is available.

The procedure you use is slightly different, depending on the type of environment, see [Pro architecture]({{ site.baseurl }}/cloud/architecture/pro-architecture.html#cloud-arch-int).

### Get started {#custom-getstarted}

We recommend you test a patch locally in the `master` branch.

{% include cloud/cli-get-started.md %}

### Test a custom patch on your local system {#custom-testlocal}

To test a custom patch on your local system:

1. On your local system, enter the following command as the [Magento file system owner]({{ site.baseurl }}/cloud/before/before-workspace-file-sys-owner.html) if you haven't done so already:

   ```bash
   mkdir <Magento project root dir>/m2-hotfixes
   ```

1. Copy the patch file to that directory.
1. Apply the patch locally:

   ```bash
   cd <Magento project root dir>
   ```

   ```bash
   magento-cloud environment:checkout master
   ```

   ```bash
   git pull origin master
   ```

   ```bash
   git apply <Magento project root dir>/m2-hotfixes/<patch file name>
   ```

1. Clean the Magento cache:

   ```bash
   php <Magento project root dir>/bin/magento cache:clean
   ```

   You can also clean the cache using the [Magento Admin](http://docs.magento.com/m2/ee/user_guide/system/cache-management.html).

1. After testing the patch, push it to the remote server and deploy it:

   ```bash
   git add -A && git commit -m "Apply patch"
   ```

   ```bash
   git push origin <branch name>
   ```

### Push a custom patch to a staging or production environment {#custom-pushpatch}

After you've successfully tested a custom patch locally and on your integration environment, you can push the patch to staging or production as follows:

1. Open an SSH connection to your staging or production server:

   *  Staging: `ssh -A <project ID>_stg@<project ID>.ent.magento.cloud`
   *  Production: `ssh -A <project ID>@<project ID>.ent.magento.cloud`

1. On your staging or production system, enter the following command if you haven't done so already:

   ```bash
   mkdir <Magento project root dir>/m2-hotfixes
   ```

1. Copy the patch file to that directory.

   We suggest using the following command:

   ```bash
   rsync -azvP <source> <destination>
   ```

   Options:

   `a` archive

   `z` compress

   `v` verbose

   `P` partial progress

   For additional options, see the [rsync man page](http://linux.die.net/man/1/rsync).

1. Apply the patch:

   ```bash
   git apply <Magento project root dir>/m2-hotfixes/<patch file name>
   ```

1. Clean the Magento cache:

   ```bash
   php <Magento project root dir>/bin/magento cache:clean
   ```

   You can also clean the cache using the [Magento Admin](http://docs.magento.com/m2/ee/user_guide/system/cache-management.html).

1. After testing the patch, push it to the remote server and deploy it:

   ```bash
   git add -A && git commit -m "Apply patch"
   ```

   ```bash
   git push origin <branch name>
   ```
