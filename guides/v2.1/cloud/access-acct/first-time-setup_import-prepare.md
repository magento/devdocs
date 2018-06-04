---
group: cloud
subgroup: 080_setup
title: Prepare your existing Magento Commerce install
menu_title: Prepare your existing Magento Commerce install
menu_order: 153
menu_node:
level3_menu_node: level3child
level3_subgroup: import
version: 2.1
github_link: cloud/access-acct/first-time-setup_import-prepare.md
functional_areas:
  - Cloud
  - Setup
---

You need to prepare your existing {{site.data.var.ee}} implementation to import it into a new {{site.data.var.ece}} project. This includes updating and adding files, transferring media files, and migrating data.

Before preparing your project and importing code, push all pending changes to Git. Your remote {{site.data.var.ece}} branch should be fully updated. When you push, build and deploy scripts run to update code, static content, and environment services.

These import preparation steps include the following:

* [Prepare and add required files](#required-files):
* [Add Cloud-specific files and directories ]to {{site.data.var.ee}}. Without these files and directories, your {{site.data.var.ee}} code can't be imported to Cloud.
* [Add Authentication Keys to `auth.json`.](#auth-json)
* [Modify your existing `composer.json`](#composer-json) to specify Cloud-specific dependencies. Make sure to include all modules. Cloud uses this file for `composer install` commands. Add `composer.lock` to Git. Cloud uses this file for `composer update` commands and during the build and deploy process.
* [Transfer media files to Cloud.](#media)
* [Add your {{site.data.var.ee}} authentication credentials](#encryption-key) to `auth.json` if you haven't done so already.
* [Migrate your {{site.data.var.ee}} data.](#migrate-db)

## Prepare and add required files {#required-files}
To import {{site.data.var.ee}} code to a {{site.data.var.ece}} project, you need to add a directory and the following files to your existing code.

*  [`.magento.app.yaml`]({{ page.baseurl }}/cloud/project/project-conf-files_magento-app.html) manages applications, service relationships, mounts for writable directories, and cron jobs
*  [`.magento/services.yaml`]({{ page.baseurl }}/cloud/project/project-conf-files_services.html) for service configurations including MySQL, PHP, Redis, Solr (2.0.X only), ElasticSearch (2.1.X and later)
*  [`.magento/routes.yaml`]({{ page.baseurl }}/cloud/project/project-conf-files_routes.html) for handling routes including redirections, caching, and server-side includes
*  [`magento-vars.php`]({{ page.baseurl }}/cloud/project/project-multi-sites.html#cloud-multi-stores-magento-vars) for multiple websites and stores

You need to add these files to your {{site.data.var.ee}} code:

1.  Go to the [{{site.data.var.ece}} GitHub](https://github.com/magento/magento-cloud){:target="\_blank"}.
2.  Select the branch corresponding to the {{site.data.var.ee}} version you currently have.

    The following figure shows an example of selecting the `2.1.4` branch.

    ![Switch to your current Magento Commerce branch]({{ site.baseurl }}/common/images/cloud_cloud-git-214.png){:width="600px"}

    In the procedure that follows, you'll copy the contents of some of these files to your {{site.data.var.ee}} system.
3.  Log in to your {{site.data.var.ee}} system as, or switch to, the [Magento file system owner]({{ page.baseurl }}/cloud/before/before-workspace-file-sys-owner.html).
4.  Enter the following commands in the order shown:

        cd <Magento installation dir>
        mkdir .magento
5.  One at a time, create the following files in your {{site.data.var.ee}} system using the contents of the files in the {{site.data.var.ece}} GitHub:

    *   `<Magento Commerce install dir>/.magento.app.yaml`
    *   `<Magento Commerce install dir>/magento-vars.php`
    *   `<Magento Commerce install dir>/.magento/services.yaml`
    *   `<Magento Commerce install dir>/.magento/routes.yaml`

    For example, to create `<Magento Commerce install dir>/.magento.app.yaml` from the 2.1.4 branch:

    1.  In the  {{site.data.var.ece}} GitHub, click [**.magento.app.yaml**](https://github.com/magento/magento-cloud/blob/2.1.4/.magento.app.yaml){:target="\_blank"}.
    2.  In the upper right, click **Raw**, as the following figure shows.

        ![View the raw version of the file]({{ site.baseurl }}/common/images/cloud_cloud-git_raw.png){:width="600px"}
    3.  In your {{site.data.var.ee}} project, open a text editor in the {{site.data.var.ee}} installation directory (for example, `/var/www/html/magento2`).
    4.  Paste the raw contents of `.magento.app.yaml` from GitHub into the text editor.
    5.  Make sure the file is named `.magento.app.yaml` when you save the file.
    6.  Repeat these tasks for the other files.

        * Make sure to create `magento-vars.php` in the Magento root directory.
        * Make sure to create `routes.yaml` and `services.yaml` in the `.magento` subdirectory.

Modify these files as necessary as discussed in the following topics:

*  [`.magento/routes.yaml`]({{ page.baseurl }}/cloud/project/project-conf-files_routes.html)
*  [`.magento/services.yaml`]({{ page.baseurl }}/cloud/project/project-conf-files_services.html)
*  [`.magento.app.yaml`]({{ page.baseurl }}/cloud/project/project-conf-files_magento-app.html)

When you push your code, all services are configured into the associated environment per active branch of code. These files affect all Starter environments and all Pro Integration environments. To update these settings in Pro Staging and Production, you need to enter a ticket.

## Add or update `auth.json` with Magento Authentication keys {#auth-json}
To enable install and update commands for {{site.data.var.ece}}, you must have an `auth.json` file in your project's root directory. `auth.json` contains your {{site.data.var.ee}} [authorization credentials](http://devdocs.magento.com/guides/v2.1/install-gde/prereq/connect-auth.html) for {{site.data.var.ece}}.

In some cases, you might already have `auth.json`. Verify if you have the file and add your authentication credentials before you create a new one. It's located in your Magento root directory. You can also [get a sample `auth.json`](https://github.com/magento/magento2/blob/2.2-develop/auth.json.sample){:target="\_blank"}.

To create a new `auth.json` in the {% glossarytooltip c57aef7c-97b4-4b2b-a999-8001accef1fe %}event{% endglossarytooltip %} you don't have one:

1.  Use a text editor to create a file named `auth.json` in your Magento root directory.
3.  Replace `<public-key>` and `<private-key>` with your {{site.data.var.ee}} authentication credentials.

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

## Edit `composer.json` {#composer-json}
Before you push code to the {{site.data.var.ece}} Git repository, modify your `composer.json` for Cloud. You can also [view a sample `composer.json`](https://raw.githubusercontent.com/magento/magento-cloud/master/composer.json){:target="\_blank"}.

To edit `composer.json`:

1.  If you haven't done so already, log in to your {{site.data.var.ece}} server as the [Magento file system owner]({{ page.baseurl }}/cloud/before/before-workspace-file-sys-owner.html).
2.  In a text editor, open `composer.json` in the project root directory.
3.  Substitute the following value in the `require` section:

        "magento/product-enterprise-edition": "<version>",

    with

        "magento/magento-cloud-metapackage": "<version>",

    <div class="bs-callout bs-callout-info" id="info" markdown="1">
    Both `<version>` values _must be the same_. For example, if your current {{site.data.var.ee}} version is 2.1.9, your `magento-cloud-metapackage` version must also be 2.1.9.
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
6.  In the terminal application, run `composer update` to update `composer.lock`. Wait while dependencies are updated.
7.  Commit the changes to GitHub:

        git add -A && git commit -m "Add Cloud files" && git push origin <branch name>

## Back up and transfer media files {#media}
Use the command [`magento setup:backup --media`]({{ page.baseurl }}/install-gde/install/cli/install-cli-backup.html) to back up media files:

1.  Get the  integration system's [SSH URL]({{ page.baseurl }}/cloud/access-acct/first-time-setup_import-first-steps.html#ssh).
2.  To back up media files, enter the following command:

        php <Magento Commerce install dir>/bin/magento setup:backup --media

    The backup is stored in the `<Magento Commerce install dir>/var/backups` directory.
2.  Transfer the media file to your {{site.data.var.ece}} system:

        rsync <Magento Commerce install dir>/var/backups/<backup file name> <cloud ssh url>:var/media.tgz

    For example,

        rsync /var/www/html/magento2/var/backups/1487962699_filesystem_media.tgz 43bkopvkhelhy-master-l8uv4kp@ssh.us.magentosite.cloud:var/media.tgz

## Copy the encryption key {#encryption-key}
To be able to decrypt encrypted data from your imported database, copy your encryption from your existing `env.php` file. Every environment inIntegration, Staging, and Production has an `env.php` of sensitive data and environment variables. The file contains a nested PHP array storing configuration data.

1.  Open `<Magento install dir>/app/etc/env.php` in a text editor.
2.  Search for the value of `key` in the `crypt` array.
3.  Copy the value to the clipboard and save it.

You must paste the encryption key into your {{site.data.var.ece}} `env.php` file in each environment in a [later step]({{ page.baseurl }}/cloud/access-acct/first-time-setup_import-import.html#encryption-key).

## Migrate Magento Commerce data {#migrate-db}
Create a database dump and transfer the data from an existing database. You will import this data to your {{site.data.var.ece}} database.

The following command example compresses the dump so it doesn't significantly interfere with traffic from in live site. The dump file is named `db.sql.gz`. You may want to include the date in the file name if you do multiple dumps over time. Because the database dump can be large, we recommend you create it in a directory not tracked by Git.

1. In your existing environment, create a database dump.

        mysqldump -h <db-host> -P <db-port> -p -u <db-user> <db-name> --single-transaction --no-autocommit --quick | gzip > ~/db.sql.tgz

  For example, if your database is on localhost with the default port (3306), database user name is `magento`, and database name is also `magento`:

        mysqldump -p -u magento magento --single-transaction --no-autocommit --quick | gzip > ~/db.sql.tgz

2. Use the `rsync` command to transfer the database dump to the {{site.data.var.ece}} environment in the `var` directory of the application you are importing into:

        rsync <db dump file name> <cloud SSH URL>:var/db.sql.gz

To find `<cloud SSH URL>`, see [Find the information you need for your import]({{ page.baseurl }}/cloud/access-acct/first-time-setup_import-first-steps.html#db-creds).

#### Next step
[Import Magento Commerce into {{site.data.var.ece}}]({{ page.baseurl }}/cloud/access-acct/first-time-setup_import-import.html)
