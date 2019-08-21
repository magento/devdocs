---
group: cloud-guide
title: Prepare your existing Magento Commerce install
redirect_from:
  - /guides/v2.2/cloud/access-acct/first-time-setup_import-prepare.html
  - /guides/v2.3/cloud/access-acct/first-time-setup_import-prepare.html
functional_areas:
  - Cloud
  - Setup
---

You need to prepare your existing {{site.data.var.ee}} implementation to import it into a new {{site.data.var.ece}} project. This includes updating and adding files, transferring media files, and migrating data.

Before preparing your project and importing code, push all pending changes from your local workstation to your remote {{site.data.var.ece}} repository. When you push, the build and deploy scripts run to update code, static content, and environment services.

The import preparation steps include the following:

-  [Prepare and add required files](#required-files)
-  [Add Magento authentication keys](#auth-json)
-  [Modify your existing `composer.json`](#composer-json)
-  [Transfer media files to Cloud](#media)
-  [Add your {{site.data.var.ee}} encryption key](#encryption-key)
-  [Migrate your {{site.data.var.ee}} data](#migrate-db)

## Prepare and add required files {#required-files}

To import {{site.data.var.ee}} code to a {{site.data.var.ece}} project, you must add the following files to your existing code:

-  [`.magento.app.yaml`]({{ page.baseurl }}/cloud/project/project-conf-files_magento-app.html)—manages applications, service relationships, mounts for writable directories, and cron jobs
-  [`.magento/services.yaml`]({{ page.baseurl }}/cloud/project/project-conf-files_services.html)—for service configurations including MySQL, PHP, Redis, Solr (2.0.X only), ElasticSearch (2.1.X and later)
-  [`.magento/routes.yaml`]({{ page.baseurl }}/cloud/project/project-conf-files_routes.html)—for handling routes including redirections, caching, and server-side includes
-  [`magento-vars.php`]({{ page.baseurl }}/cloud/project/project-multi-sites.html)—for multiple websites and stores

Add these files to your {{site.data.var.ee}} code:

1.  In the [{{site.data.var.ece}} GitHub repository](https://github.com/magento/magento-cloud), select the branch corresponding to the {{site.data.var.ee}} version you currently have.

    The following figure shows an example of selecting the `2.1.4` branch.

    ![Switch to your current Magento Commerce branch]({{ site.baseurl }}/common/images/cloud_cloud-git-214.png){:width="600px"}

1.  Log in to your {{site.data.var.ee}} system as, or switch to, the [Magento file system owner]({{ page.baseurl }}/cloud/before/before-workspace-file-sys-owner.html).
1.  Change to the Magento installation directory and create a `.magento` directory.

    ```bash
    cd <Magento installation dir>
    ```

    ```bash
    mkdir .magento
    ```

5.  One at a time, create the following files in your {{site.data.var.ee}} system using the contents of the files in the {{site.data.var.ece}} repository:

    *   `<Magento Commerce install dir>/.magento.app.yaml`
    *   `<Magento Commerce install dir>/magento-vars.php`
    *   `<Magento Commerce install dir>/.magento/services.yaml`
    *   `<Magento Commerce install dir>/.magento/routes.yaml`

    For example, to create `<Magento Commerce install dir>/.magento.app.yaml` from the 2.1.4 branch:

    1.  In the  {{site.data.var.ece}} GitHub, click [**.magento.app.yaml**](https://github.com/magento/magento-cloud/blob/2.1.4/.magento.app.yaml).
    2.  In the upper right, click **Raw**, as the following figure shows.

        ![View the raw version of the file]({{ site.baseurl }}/common/images/cloud_cloud-git_raw.png){:width="600px"}
    3.  In your {{site.data.var.ee}} project, open a text editor in the {{site.data.var.ee}} installation directory (for example, `/var/www/html/magento2`).
    4.  Paste the raw contents of `.magento.app.yaml` from GitHub into the text editor.
    5.  Save the file using the name: `.magento.app.yaml`
    6.  Repeat these tasks for the other files.

        * Create `magento-vars.php` in the Magento root directory.
        * Create `routes.yaml` and `services.yaml` in the `.magento` subdirectory.

When you push your code, all services are configured into the associated environment per active branch of code. These files affect all Starter environments and all Pro Integration environments. To update these settings in Pro Staging and Production, you need to enter a ticket.

## Add Magento authentication keys {#auth-json}

You must have an authentication key to access the {{site.data.var.ee}} repository and to enable install and update commands for your {{site.data.var.ece}} project. There are two methods for specifying Composer authorization credentials.

-  **authentication file**—You must have an `auth.json` file that contains your {{site.data.var.ee}} [authorization credentials]({{ page.baseurl }}/install-gde/prereq/connect-auth.html) in your {{site.data.var.ece}} root directory.
-  **environment variable**—Alternatively, you can use an environment variable to set up authentication keys in your {{site.data.var.ece}} project to prevent accidental exposure.

#### To create a new `auth.json` file:

First, verify if you have an `auth.json` file, located in your Magento root directory. You can also [get a sample `auth.json`]({{ site.mage2bloburl }}/2.2/auth.json.sample).

1.  Using a text editor, create an `auth.json` file and save it in your Magento root directory.

1.  Replace `<public-key>` and `<private-key>` with your {{site.data.var.ee}} authentication credentials.

    ```json
    {
       "http-basic": {
          "repo.magento.com": {
          "username": "<public-key>",
          "password": "<private-key>"
        }
      }
    }
    ```

1.  Save your changes to `auth.json` file and exit the text editor.

#### To add authentication keys using an environment variable:

This method is best to prevent accidental exposure of credentials, such as pushing an `auth.json` file to a public repository.

1.  In the _Project Web Interface_, click the configuration icon in the upper left corner.

1.  In the _Configure Project_ view, click the **Variables** tab.

1.  Click **Add Variable**.

1.  In the _Name_ field, enter `env:COMPOSER_AUTH`.

1.  In the _Value_ field, add the following and replace `<public-key>` and `<private-key>` with your {{site.data.var.ee}} authentication credentials:

    ```json
    {
       "http-basic": {
          "repo.magento.com": {
          "username": "<public-key>",
          "password": "<private-key>"
        }
      }
    }
    ```

1.  Select **Visible during build** and deselect **Visible at run**.

1.  Click **Add Variable**.

1.  Remove the `auth.json` file from each environment.

## Edit `composer.json` {#composer-json}

Before you push code to the {{site.data.var.ece}} Git repository, modify your `composer.json` for Cloud. You can also [view a sample `composer.json`](https://raw.githubusercontent.com/magento/magento-cloud/master/composer.json).

To edit `composer.json`:

1.  If you haven't done so already, log in to your {{site.data.var.ece}} server as the [Magento file system owner]({{ page.baseurl }}/cloud/before/before-workspace-file-sys-owner.html).
2.  In a text editor, open `composer.json` in the project root directory.
3.  Substitute the following value in the `require` section:

        "magento/product-enterprise-edition": "<version>",

    with

        "magento/magento-cloud-metapackage": "<version>",

    {:.bs-callout .bs-callout-info}
    Both `<version>` values _must be the same_. For example, if your current {{site.data.var.ee}} version is 2.1.9, your `magento-cloud-metapackage` version must also be 2.1.9.

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

1.  Get the  integration system's [SSH URL]({{ page.baseurl }}/cloud/setup/first-time-setup-import-first-steps.html#ssh).
2.  To back up media files, enter the following command:

        php <Magento Commerce install dir>/bin/magento setup:backup --media

    The backup is stored in the `<Magento Commerce install dir>/var/backups` directory.
2.  Transfer the media file to your {{site.data.var.ece}} system:

        rsync <Magento Commerce install dir>/var/backups/<backup file name> <cloud ssh url>:var/media.tgz

    For example,

        rsync /var/www/html/magento2/var/backups/1487962699_filesystem_media.tgz 43bkopvkhelhy-master-l8uv4kp@ssh.us.magentosite.cloud:var/media.tgz

## Copy the encryption key {#encryption-key}

To decrypt the encrypted data from your imported database, copy your encryption key from your existing `env.php` file. Every environment in Integration, Staging, and Production has an `env.php` of sensitive data and environment variables. The file contains a nested PHP array storing configuration data.

1.  Open `<Magento install dir>/app/etc/env.php` in a text editor.
2.  Search for the value of `key` in the `crypt` array.
3.  Copy the value to the clipboard and save it.

You must paste the encryption key into your {{site.data.var.ece}} `env.php` file in each environment in a [later step]({{ page.baseurl }}/cloud/setup/first-time-setup-import-import.html#encryption-key).

## Migrate Magento Commerce data {#migrate-db}

Create a database dump and transfer the data from an existing database. You will import this data to your {{site.data.var.ece}} database.

The following example compresses the dump so that it does not significantly interfere with traffic from a live site. The dump file is named `db.sql.gz`. You may want to include the date in the file name if you do multiple dumps over time. Because the database dump can be large, we recommend you create it in a directory not tracked by Git.

1. In your existing environment, create a database dump.

        mysqldump -h <db-host> -P <db-port> -p -u <db-user> <db-name> --single-transaction --no-autocommit --quick | gzip > ~/db.sql.tgz

  For example, if your database is on localhost with the default port (3306), database username is `magento`, and database name is also `magento`:

        mysqldump -p -u magento magento --single-transaction --no-autocommit --quick | gzip > ~/db.sql.tgz

2. Use the `rsync` command to transfer the database dump to the {{site.data.var.ece}} environment in the `var` directory of the application you are importing into:

        rsync <db dump file name> <cloud SSH URL>:var/db.sql.gz

To find `<cloud SSH URL>`, see [Find the information you need for your import]({{ page.baseurl }}/cloud/setup/first-time-setup-import-first-steps.html#db-creds).

#### Next step
[Import {{site.data.var.ee}} into {{site.data.var.ece}}]({{ page.baseurl }}/cloud/setup/first-time-setup-import-import.html)
