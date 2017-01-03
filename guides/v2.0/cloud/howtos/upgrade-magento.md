---
layout: default
group: cloud
subgroup: 15_howto
title: Upgrade the Magento application
menu_title: Upgrade the Magento application
menu_order: 3
level3_menu_node: level3child
level3_subgroup: update-magento
menu_node: 
version: 2.0
github_link: cloud/howtos/upgrade-magento.md
---

This topic discusses how to upgrade the Magento Enterprise Cloud Edition software from any version after 2.0.4. If you're currently using version 2.0.4, see [Upgrade from version 2.0.4](#cloud-upgrade-204).

<div class="bs-callout bs-callout-warning">
    <p>Always upgrade your local system first, then your <a href="{{ page.baseurl }}cloud/discover-arch.html#cloud-arch-int">integration environment</a> system (that is, the remote Cloud server). Resolve any issues before upgrading to either <a href="{{ page.baseurl }}cloud/discover-arch.html#cloud-arch-stage">staging</a> or <a href="{{ page.baseurl }}cloud/discover-arch.html#cloud-arch-prod">production</a>.</p>
</div>

## Get started

{% collapsible To get started: %}

{% include cloud/cli-get-started.md %}

{% endcollapsible %}

## Upgrade to the latest version
We recommend you start by backing up all of the databases you're about to change (local, remote integration, and staging or production).

### Step 1: Back up your local system (database, code, and media)

{% collapsible To back up your local system: %}

Enter the following command:

    php <Magento root dir>/bin/magento setup:backup --code --db [--media]

You can omit `[--media]` if you have a large number of media files and if you don't expect the upgrade to affect them. 

If the upgrade fails, you can roll back your backup using the [`magento setup:rollback` command]({{ page.baseurl }}install-gde/install/cli/install-cli-backup.html#instgde-cli-uninst-roll).

{% endcollapsible %}

### Step 2: Back up your remote integration database

{% collapsible To back up your remote integration database: %}

Enter the following command to make a local backup of the remote database:

    magento-cloud environment:mysql-dump

{% endcollapsible %} 

### Step 3: Back up your staging and production databases

{% collapsible To back up your staging and production databases: %}

1.  Open an SSH connection to your staging or production server:

    *   Staging: `ssh -A <project ID>_stg@<project ID>.ent.magento.cloud`
    *   Production: `ssh -A <project ID>@<project ID>.ent.magento.cloud`
3.  Find the database login information:

        php -r 'print_r(json_decode(base64_decode($_ENV["MAGENTO_CLOUD_RELATIONSHIPS"]))->database);'

7.  Create a database dump:

        mysqldump -h <database host> --user=<database user name> --password=<password> --single-transaction main | gzip - > /tmp/database.sql.gz
8.  Enter `exit` to terminate the SSH connection.

{% endcollapsible %} 

### Step 4: Verify other changes

{% collapsible To verify other changes: %}

Verify other changes you're going to submit to source control before you start the upgrade:

1.  If you haven't done so already, change to your project root directory.
2.  Enter the following command:

        git status
3.  If there are changes you do *not* want to submit to source control, branch or stash them now.

{% endcollapsible %} 

### Step 5: Complete the upgrade

{% collapsible To complete the upgrade: %}

1.  Change to your Magento base directory and enter the following commands in the order shown:

        composer require magento/magento-cloud-metapackage <requiredversion> --no-update
        composer update

    For example, to upgrade to version 2.1.2:

        composer require magento/magento-cloud-metapackage 2.1.2 --no-update
        composer update
2.  Wait for dependencies to update.
4.  Add, commit, and push your changes to start deployment:

        git add -A && git commit -m "Upgrade"
        git push origin <branch name>

    `git add -A` is required to add all changed files to source control because of the way Composer marshals base packages. Both `composer install` and `composer update` marshal files from the base package (that is, `magento/magento2-base` and `magento/magento2-ee-base`) into the package root. 

    The files Composer marshals belong to the new version of Magento, to overwrite the outdated version of those same files. Currently, marshaling is disabled in Magento Enterprise Cloud Edition, so you must add the marshaled files to source control.

5.  Wait for deployment to complete.
5.  Take a snapshot of your environment:

        magento-cloud snapshot:create -e <environment ID>
6.  [Verify your upgrade](#upgrade-verify).

{% endcollapsible %}

## Upgrade from version 2.0.4 {#cloud-upgrade-204}
This section discusses steps to upgrade *only* if your current Magento Enterprise Cloud Edition version is 2.0.4.

{% collapsible To upgrade from version 2.0.4 %}

### Create an authorization file
To enable you to install and update the Magento software, you must have an `auth.json` file in your project's root directory. `auth.json` contains your Magento EE [authorization credentials](http://devdocs.magento.com/guides/v2.1/install-gde/prereq/connect-auth.html).

In some cases, you might already have `auth.json` so check to see if it exists and has your authentication credentials before you create a new one.

To create a new `auth.json` in the event you don't have one:

1.  Copy the provided sample using the following command:

        cp auth.json.sample auth.json
2.  Open `auth.json` in a text editor.
3.  Replace `<public-key>` and `<private-key>` with your authentication credentials.

    See the following example:

        "http-basic": {
           "repo.magento.com": {
              "username": "<public-key>",
              "password": "<private-key>"
            }
        }
3.  Save your changes to `auth.json` and exit the text editor.

## Update .magento.app.yaml and composer.json
This section discusses how to update:

*   `.magento.app.yaml`, the main project configuration file.
*   `composer.json`, which specifies project dependencies.

Changes are discussed in the sections that follow.

### `.magento.app.yaml`
Open `.magento.app.yaml` in a text editor and update the `build` section (which is nested in the `deploy` section) and `crons` sections as follows:

#### deploy section
```
deploy: |
    php ./vendor/magento/magento-cloud-configuration/pre-deploy.php
    php ./bin/magento magento-cloud:deploy
```

#### crons section
```
crons:
        cronrun:
            spec: "*/5 * * * *"
            cmd: "php bin/magento cron:run && php bin/magento cron:run"
```

### `composer.json`
Open `composer.json` and update the `"files"` directive in the `autoload` section as follows:

```
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
```

Move `app/NonComposerComponentRegistration.php` to `app/etc/NonComposerComponentRegistration.php`. Make sure the relative paths that point to locations in the `app` and `lib` directories reflect the  new location of the file. 

Update the `require` section as follows to:

*   Replace `"magento/product-enterprise-edition": "<current version>",` with `"magento/magento-cloud-metapackage": "<upgrade version>",`
*   Remove `"magento/magento-cloud-configuration": "1.0.*",`

(In some cases, your `composer.json` might already be correct.)

```
 },
    "require": {
        "magento/magento-cloud-metapackage": "2.1.0",
        "composer/composer": "@alpha",
        "colinmollenhour/credis": "1.6",
        "colinmollenhour/php-redis-session-abstract": "1.1",
        "fastly/magento2": "^1.0"
    },
```

Run `composer update`, and make sure the updated composer.lock and other changed files are
checked in to git.

## Repository structure
Here are the specific files for this example to work on Magento Enterprise Cloud Edition:

```
.magento/
         /routes.yaml
         /services.yaml
.magento.app.yaml
auth.json
composer.json
magento-vars.php
php.ini
```

`.magento/routes.yaml` redirects `www` to the naked domain, and that the application that will be serving HTTP is named `php`.

`.magento/services.yaml` sets up a MySQL instance, plus Redis and Solr. 

``composer.json`` fetches the Magento Enterprise Edition and some configuration scripts to prepare your application.

Verify your upgrade as discussed in the next section.

{% endcollapsible %}

## Verify your upgrade {#upgrade-verify}
This section discusses how to verify your upgrade on your local development machine and in the cloud.

### Verify the upgrade locally
To verify your upgrade locally, enter the following command from your Magento root directory:

    php bin/magento --version

You can also log in to the Magento Admin; the version displays in the lower right corner of the page.

### Verify the upgrade locally
To verify the upgrade in your local Cloud integration environment:

1.  Find the base URL for your integration environment:

        magento-cloud environment:url
2.  When prompted, choose the HTTP or HTTPS URL.
2.  Find the values of the Admin URL, user name, and password:

        magento-cloud variable:list
4.  Log in to the Magento Admin.

    The version displays in the lower right corner of the page.

### Troubleshoot your upgrade {#upgrade-verify-tshoot}
In some cases, an error similar to the following displays when you try to access your storefront or the Magento Admin in a browser:

    There has been an error processing your request
    Exception printing is disabled by default for security reasons.
      Error log record number: <error number>

#### View error details locally
To view error details locally, open the indicated file name in the `<Magento root dir>/var/report` directory. 

#### View error details on the server
To view the error in your Cloud integration environment, enter the following commands:

    magento-cloud environment:ssh
    vim /app/var/report/<error number>

#### Resolve the error
If the error includes the following, run the `bin/magento setup:upgrade` command to resolve it:

    a:4:{i:0;s:433:"Please upgrade your database: Run "bin/magento setup:upgrade" from the Magento root directory.
    The following modules are outdated:
    Magento_Sales schema: current version - 2.0.2, required version - 2.0.3
    Magento_Sales data: current version - 2.0.2, required version - 2.0.3
    Magento_CatalogStaging schema: current version - 2.0.0, required version - 2.1.0

To resolve the error:

1.  If the error is in your integration environment, SSH to the environment:

        magento-cloud environment:ssh
2.  Enter the following command:

        php <Magento root dir>/bin/magento setup:upgrade
3.  Wait for the command to complete.
4.  *Local environment only*. Update the branch:

        git add -A && git commit -m "Update"
        git push origin <branch name>

#### Related topic
*   [Install components]({{page.baseurl}}cloud/howtos/install-components.html)
*   [Install optional sample data]({{page.baseurl}}cloud/howtos/sample-data.html)
*   [Merge and delete an environment]({{page.baseurl}}cloud/howtos/environment-tutorial-env-merge.html)
