---
layout: default
group: cloud
subgroup: 080_setup
title: Prepare your existing Magento EE system
menu_title: Prepare your existing Magento EE system
menu_order: 153
menu_node:
level3_menu_node: level3child
level3_subgroup: import
version: 2.0
github_link: cloud/access-acct/first-time-setup_import-prepare.md
---

This topic discusses tasks you must perform in your existing Magento EE installation to prepare it to be imported into a Magento Enterprise Cloud Edition project.

Before you continue, push all pending changes to Git.

You must do the following:

*   Add Cloud-specific files and directories to Magento EE. Without these files and directories, your Magento EE code can't be imported to Cloud.
*   Modify your existing `composer.json` to specify Cloud-specific dependencies.
*   Add `composer.lock` to Git because Cloud reads it, and not `composer.json`, during the build and deploy process.
*   Transfer media files to Cloud.
*   Add your Magento EE authentication credentials to `auth.json` if you haven't done so already.
*   Dump your Magento EE database.

## Prepare Magento EE files {#cloud-import-prepare-files}
For your Magento EE code to import to a Magento Enterprise Cloud Edition project, you must have a directory and some files required by Cloud. Following is the list of those files:

*  [`.magento/routes.yaml`]({{ page.baseurl }}cloud/project/project-conf-files_routes.html)
*  [`.magento/services.yaml`]({{ page.baseurl }}cloud/project/project-conf-files_services.html)
*  [`.magento.app.yaml`]({{ page.baseurl }}cloud/project/project-conf-files_magento-app.html)
*  `magento-vars.php`

### Add required configuration files {#cloud-import-prepare-files-config}
To add required files to your Magento EE code:

1.  Go to the [Magento Enterprise Cloud Edition GitHub](https://github.com/magento/magento-cloud){:target="_blank"}.
2.  Select the branch corresponding to the Magento EE version you currently have.

    The following figure shows an example of selecting the `2.1.4` branch.

    ![Switch to your current EE branch]({{ site.baseurl }}common/images/cloud_cloud-git-214.png){:width="600px"}

    In the procedure that follows, you'll copy the contents of some of these files to your Magento EE system.
3.  Log in to your Magento EE system as, or switch to, the [Magento file system owner]({{ page.baseurl }}cloud/before/before-workspace-file-sys-owner.html).
4.  Enter the following commands in the order shown:

        cd <Magento installation dir>
        mkdir .magento
5.  One at a time, create the following files in your Magento EE system using the contents of the files in the Magento Enterprise Cloud Edition GitHub:

    *   `<Magento EE install dir>/.magento.app.yaml`
    *   `<Magento EE install dir>/magento-vars.php`
    *   `<Magento EE install dir>/.magento/services.yaml`
    *   `<Magento EE install dir>/.magento/routes.yaml`

    For example, to create `<Magento EE install dir>/.magento.app.yaml` from the 2.1.4 branch:

    1.  In the  Magento Enterprise Cloud Edition GitHub, click [**.magento.app.yaml**](https://github.com/magento/magento-cloud/blob/2.1.4/.magento.app.yaml){:target="_blank"}.
    2.  In the upper right, click **Raw**, as the following figure shows.

        ![View the raw version of the file]({{ site.baseurl }}common/images/cloud_cloud-git_raw.png){:width="600px"}
    3.  In your Magento EE project, open a text editor in the Magento EE installation directory (for example, `/var/www/html/magento2`).
    4.  Paste the raw contents of `.magento.app.yaml` from GitHub into the text editor.
    5.  Make sure the file is named `.magento.app.yaml` when you save the file.
    6.  Repeat these tasks for the other files.

        Make sure to create `magento-vars.php` in the Magento root directory.

        Make sure to create `routes.yaml` and `services.yaml` in the `.magento` subdirectory.

Modify these files as necessary as discussed in the following topics:

*  [`.magento/routes.yaml`]({{ page.baseurl }}cloud/project/project-conf-files_routes.html)
*  [`.magento/services.yaml`]({{ page.baseurl }}cloud/project/project-conf-files_services.html)
*  [`.magento.app.yaml`]({{ page.baseurl }}cloud/project/project-conf-files_magento-app.html)

### Add or update `auth.json` {#cloud-import-authjson}
To enable you to install and update Magento Enterprise Cloud Edition, you must have an `auth.json` file in your project's root directory. `auth.json` contains your Magento EE [authorization credentials](http://devdocs.magento.com/guides/v2.1/install-gde/prereq/connect-auth.html) for Magento Enterprise Cloud Edition.

In some cases, you might already have `auth.json` so check to see if it exists and has your authentication credentials before you create a new one. It's located in your Magento root directory.

[Get a sample `auth.json`](https://raw.githubusercontent.com/magento/magento-cloud/master/auth.json.sample){:target="_blank"}

To create a new `auth.json` in the {% glossarytooltip c57aef7c-97b4-4b2b-a999-8001accef1fe %}event{% endglossarytooltip %} you don't have one:

1.  Use a text editor to create a file named `auth.json` in your Magento root directory.
3.  Replace `<public-key>` and `<private-key>` with your Magento EE authentication credentials.

    See the following example:

        {
           "http-basic": {
              "repo.magento.com": {
              "username": "<public-key>",
              "password": "<private-key>"
            }
          }
        }
3.  Save your changes to `auth.json` and exit the text editor.

### Edit `composer.json` {#cloud-import-composer}
Before you push code to the Magento Enterprise Cloud Edition Git repository, you must change your `composer.json` so it meets Cloud requirements.

[View a sample `composer.json`](https://raw.githubusercontent.com/magento/magento-cloud/master/composer.json){:target="_blank"}

To edit `composer.json`:

1.  If you haven't done so already, log in to your Magento Enterprise Cloud Edition server as, or switch to, the [Magento file system owner]({{ page.baseurl }}cloud/before/before-workspace-file-sys-owner.html).
2.  In a text editor, open `composer.json` in the project root directory.
3.  Substitute the following value in the `require` section:

        "magento/product-enterprise-edition": "<version>",

    with

        "magento/magento-cloud-metapackage": "<version>",

    <div class="bs-callout bs-callout-info" id="info" markdown="1">
    Both `<version>` values _must be the same_. In other words, if your current EE version is 2.1.3, your `magento-cloud-metapackage` version must also be 2.1.3.
    </div>

4.  Update the `"files"` directive in the `autoload` section to refer to `app/etc/NonComposerComponentRegistration.php` as follows:

        "autoload": {
        "psr-4": {
            "Magento\\Framework\\": "lib/internal/Magento/Framework/",
            "Magento\\Setup\\": "setup/src/Magento/Setup/",
            "Magento\\": "app/code/Magento/"
        },
        "psr-0": {
            "": "app/code/"
        },
        "files": [
            "app/etc/NonComposerComponentRegistration.php"
        ]
    }
5.  Save your changes to `composer.json` and exit the text editor.
6.  Run `composer update` to update `composer.lock`:

        composer update
7.  Wait while dependencies are updated.
6.  When you're done, commit the changes to GitHub:

        git add -A && git commit -m "Add Cloud files" && git push origin <branch name>

### Back up and transfer media files
This section discusses how to use the [`magento setup:backup --media`]({{ page.basesurl }}install/cli/install-cli-backup.html) to back up media files.

1.  Get the  integration system's [SSH URL]({{ page.baseurl}}cloud/access-acct/first-time-setup_import-prereq.html#cloud-import-pre-sshurl).
2.  To back up media files, enter the following command:

        php <Magento EE install dir>/bin/magento setup:backup --media

    The backup is stored in the `<Magento EE install dir>/var/backups` directory.
2.  Transfer the media file to your Magento Enterprise Cloud Edition system:

        rsync <Magento EE install dir>/var/backups/<backup file name> <cloud ssh url>:var/media.tgz

    For example,

        rsync /var/www/html/magento2/var/backups/1487962699_filesystem_media.tgz 43bkopvkhelhy-master-l8uv4kp@ssh.us.magentosite.cloud:var/media.tgz

### Copy the encryption key {#cloud-import-copykey}
To be able to decrypt encrypted data from your imported database, copy your encryption from your existing `env.php` file. Each environment (Integration, Staging, and Production) has an `env.php` of environment variables. The file contains a nested {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} array storing configuration data.

1.  Open `<Magento install dir>/app/etc/env.php` in a text editor.
2.  Search for the value of `key` (it's in the `crypt` array).
3.  Copy the value to the clipboard and save it.

    You must paste the encryption key into your Magento Enterprise Cloud Edition `env.php` file in each environment in a later step.

## Prepare the Magento EE database  {#cloud-import-prepare-db}
Create a dump of the database you want to import using mysqldump.

### Create a database dump
The following example shows how to compress the dump so it doesn't significantly interfere with traffic from in live site.

In the example, the dump file is named `db.sql.gz`. It's a good idea to include the date in the file name if you do multiple dumps over time.

Because the database dump can be large, we recommend you create it in a directory not tracked by Git.

Command syntax follows:

    mysqldump -h <db-host> -P <db-port> -p -u <db-user> <db-name> --single-transaction --no-autocommit --quick | gzip > ~/db.sql.tgz

Example if your database is on localhost with the default port (3306), database user name is `magento`, and database name is also `magento`:

    mysqldump -p -u magento magento --single-transaction --no-autocommit --quick | gzip > ~/db.sql.tgz

### Transfer the database dump from Magento EE to Cloud
Use the `rsync` command as follows to transfer the database dump from your Magento EE system to the Magento Enterprise Cloud Edition environment.

Now that you have created the dump, move it to the var directory of the application you are importing into:

    rsync <db dump file name> <cloud SSH URL>:var/db.sql.gz

To find `<cloud SSH URL>`, see [Find the information you need for your import]({{ page.baseurl }}cloud/access-acct/first-time-setup_import-prereq.html#cloud-import-pre-sshurl).

#### Next step
[Import Magento EE into Magento Enterprise Cloud Edition]({{ page.baseurl }}cloud/access-acct/first-time-setup_import-import.html)
