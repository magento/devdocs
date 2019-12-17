---
group: cloud-guide
title: Import Magento Commerce code into a Cloud project
functional_areas:
  - Cloud
  - Setup
---

Use the following instructions to import your {{site.data.var.ee}} code into your current {{ site.data.var.ece }} project code.

{:.bs-callout-warning}
When you force push code from an existing Git branch to your {{site.data.var.ece}} project, you overwrite the project code in `master` which removes all data, sites, stores, and other development work you have done on the project. If you want to keep any files or directories, copy them to a directory outside of your project.

## Required information

You need the following information to import code into your project:

-  [Encryption key]({{ site.baseurl }}/cloud/setup/first-time-setup-import-prepare.html) from your {{site.data.var.ee}} system

-  SSH or HTTPS [URL](https://glossary.magento.com/url) for your {{site.data.var.ee}} installation Git repository.

## Create a remote Git reference {#cloud-import-ref}

Create a remote Git reference from your Cloud Git repository to the repository containing your {{site.data.var.ee}} installation so you can pull the {{site.data.var.ee}} code into your project.

1. Log in to your local {{site.data.var.ece}} development machine as, or switch to, the [Magento file system owner]({{ site.baseurl }}/cloud/before/before-workspace-file-sys-owner.html).

1. Copy `composer.json` to a _non-tracked directory_ so it does not get overwritten.

    ```
    cp composer.json ../composer.json.cloud
    ```

1. Rename your Cloud Git remote from `origin` to `cloud-project` to make it clear which repository is which:

    ```
    git remote rename origin cloud-project
    ```

1. Add a remote upstream for your existing {{site.data.var.ee}} installation:

    ```
    git remote add prev-project <git url>
    ```

1. Review the remote branch configuration.

    ```
    git remote -v
    ```

    Verify that the remote branch configuration matches the following sample configuration, with your project name instead of `ikyyrqvlgnrai`.

    ```
    cloud-project   ikyyrqvlgnrai@git.us.magento.cloud:ikyykimjgnrao.git (fetch)
    cloud-project   ikyyrqvlgnrai@git.us.magento.cloud:ikyykimjgnrao.git (push)
    magento ikyyrqvlgnrai@git.us.magento.cloud:ikyykimjgnrao.git (fetch)
    magento ikyyrqvlgnrai@git.us.magento.cloud:ikyykimjgnrao.git (push)
    prev-project    git@github.com:mygitusername/myeereponame.git (fetch)
    prev-project    git@github.com:mygitusername/myeereponame.git (push)
    ```

1. Checkout the Cloud project `master` branch.

    ```
    magento-cloud environment:checkout master
    ```

1. Set the `cloud-project` branch as an upstream tracking branch for `master`.

    ```
    git fetch cloud-project
    git branch -u cloud-project/master
    ```

## Import your {{site.data.var.ee}} code to your Cloud project {#cloud-import-imp}

After you have completed the git reference configuration, you can import the {{site.data.var.ee}} code.

1. Fetch the {{site.data.var.ee}} branch.

    ```
    git fetch prev-project
    ```

1. Reset your Cloud `master` branch to contain the code and the commit history of your {{site.data.var.ee}} branch.

    ```
    git reset --hard prev-project/<branch name>
    ```

1. Push code from your {{site.data.var.ee}} project to your {{site.data.var.ece}} project, overwriting the previous contents and commit history with that of your project.

    ```
    git push -f cloud-project master
    ```

    If the import succeeds, the {{site.data.var.ece}} environment redeploys.

    ```
    Re-deploying environment 43biovskhelhy-master-l5ut8gq.
       Environment configuration:
         mymagento (type: php:7.0, size: S, disk: 2048)
         mysql (type: mysql:10.0, size: S, disk: 2048)
         redis (type: redis:3.0, size: S)
         solr (type: solr:4.10, size: S, disk: 1024)

    Environment routes:
       http://master-o9gv6gq-43biovskhelhy.us.magentosite.cloud/ is served by application `mymagento`
       https://master-o9gv6gq-43biovskhelhy.us.magentosite.cloud/ is served by application `mymagento`
    ```

## Import the Magento database {#cloud-import-db}

Before you can use your existing {{site.data.var.ee}} code in {{site.data.var.ece}}, you must import the database.

You need the following information to complete this task:

-  [SSH URL]({{ site.baseurl }}/cloud/setup/first-time-setup-import-first-steps.html#ssh) for the {{site.data.var.ece}} environment
-  The database name, username, and password for the [Cloud database]({{ site.baseurl }}/cloud/setup/first-time-setup-import-first-steps.html#db-creds)

{:.bs-callout-info}
This topic discusses how to import the Integration environment database. The database connection information is different for Staging and Production environments.

When importing data, you will need to drop and create a new database. If you have done any data you want to keep, [create a backup]({{ site.baseurl }}/cloud/project/project-webint-snap.html) of the database.

To drop and re-create the Cloud database:

1. SSH to the Integration environment.

    ```
    magento-cloud ssh
    ```

1. Connect to the database.

    ```
    mysql -h <db-host> -P <db-port> -p -u <db-user> <db-name>
    ```

1. Drop the database. At the `MariaDB [main]>` prompt, enter:

    ```
    drop database main;
    ```

1. Re-create the database:

    ```
    create database main;
    ```

1. At the `MariaDB [main]>` prompt, enter `exit`.

1. At the shell command prompt, enter the following command to re-create the database.

    ```
    zcat var/db.sql.tgz | sed -e 's/DEFINER[ ]*=[ ]*[^*]*\*/\*/' | mysql -h <db-host> -P <db-port> -p -u <db-user> <db-name>
    ```

    For example,

    ```
    zcat var/db.sql.tgz | sed -e 's/DEFINER[ ]*=[ ]*[^*]*\*/\*/' | mysql -h database.internal -p -u user main
    ```

### Update base URLs {#baseurl}

Before you can access Magento from your local Cloud development system, you must change the Base URLs in the Magento database. Base URLs are stored in the `core_config_data` table.

The following example shows how to change _only_ the insecure URL but you can use the same procedure to change secure URLs as well.

To update the unsecure base URL:

1. If you haven't already done so, SSH to the Cloud integration server.

    ```
    magento-cloud ssh
    ```

1. Connect to the database.

    ```
    mysql -h <db-host> -P <db-port> -p -u <db-user> <db-name>
    ```

1. Show the contents of the `core_config_data` table.

    ```
    SELECT * from core_config_data;
    ```

    Note the `path` of `web/unsecure/base_url`; this is the value you'll change.

1. Enter the following command to change the value of `path` to your integration server's unsecure base URL:

    ```
    UPDATE core_config_data SET value='<Cloud unsecure base URL>' WHERE path='web/unsecure/base_url';
    ```

    {:.bs-callout-warning}
    The base URL _must_ end with a `/` character.

1. Confirm the change by entering the following command:

    ```
    SELECT * from core_config_data;
    ```

1. If the change was successful, enter `exit` to exit the `[Maria DB]` prompt.
1. Continue with the next section.

{:.bs-callout-info}
For your system to be fully functional, you must also set unsecure and secure URLs for the default scope as well as for all websites, stores, and store views.

## Add the Magento encryption key {#encryption-key}

The {{site.data.var.ee}} encryption key is required as an environment variable in `env.php` for Integration, Staging, and Production environments. If you deployed Magento when first creating a project across all environments, the encryption key should have been saved to `env.php`. If you have not deployed previously, you should verify and add the encryption key if needed in every environment. Without this key, the store encounters authentication and authorization errors such as payments and shipping.

You copied the key in a [previous step]({{ site.baseurl }}/cloud/setup/first-time-setup-import-prepare.html#encryption-key).

To add your {{site.data.var.ee}} encryption key:

1. If you haven't done so already, SSH to the Cloud environment.

    ```
    magento-cloud environment:ssh
    ```

1. Open `app/etc/env.php` in a text editor.
1. Replace the existing value of `key` with your [{{site.data.var.ee}} key]({{ site.baseurl }}/cloud/setup/first-time-setup-import-prepare.html#encryption-key).

    ```php
    return array (
      'crypt' =>
      array (
        'key' => '<your encryption key>',
      ),
    );
    ```

1. Save your changes to `env.php` and exit the text editor.

    {:.bs-callout-info}
    You must add this key to the `env.php` file for all environments: Integration, Staging, and Production.

## Import media {#media}

To import media files into your Cloud environment:

1. If you haven't done so already, SSH to the Cloud environment.

    ```
    magento-cloud ssh -p <project ID> -e <environment ID>
    ```

1. Enter the following command to clear existing media files:

    ```
    rm -rf pub/media/*
    ```

1. Enter the following command to extract the media files to the `pub/media` directory:

    ```
    tar -xzf var/media.tgz pub/media
    ```

## Clear the cache {#cache}

On the Cloud environment, enter the following commands in the order shown:

```bash
bin/magento setup:upgrade
```

```bash
bin/magento setup:static-content:deploy
```

```bash
bin/magento cache:clean
```

After the [cache](https://glossary.magento.com/cache) flushes, enter `exit` to close the SSH tunnel.

## Verify the import {#verify}

To verify everything imported properly, perform the following tasks in your local Cloud development environment:

1. On your Cloud environment, enter the following commands to find the information to log in to the [Magento Admin](https://glossary.magento.com/magento-admin) and to view the storefront:

    ```
    magento-cloud environment:url
    ```

1. Log in to the Magento [Admin](https://glossary.magento.com/admin) using the username and password of your {{site.data.var.ee}} system.
1. Verify that the settings in the Admin are the same as your {{site.data.var.ee}} system.
1. Access the [storefront](https://glossary.magento.com/storefront).
1. Confirm that categories, products, and other content display as expected.
1. Test everything thoroughly.
