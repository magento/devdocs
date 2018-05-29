<div markdown="1">

This information details how to upgrade Magento Commerce (Cloud) from any version after 2.0.4. If you're currently using version 2.0.4, see [Upgrade from version 2.0.4](#cloud-upgrade-204).

When you upgrade Magento Commerce (Cloud), you also upgrade with patches and available hotfixes as part of the `magento-cloud-metapackage`. Make sure you have `auth.json` in your project root folder if there isn’t one already.

For more information on Composer, see [Composer in Cloud]({{ page.baseurl }}/cloud/reference/cloud-composer.html).

<div class="bs-callout bs-callout-warning" markdown="1">
Always upgrade your local workstation first, then update your remote Integration environment. Resolve any issues before upgrading either the Staging or Production environments.
</div>

## Upgrade to the latest version
We recommend that you first back up the database of the system you are upgrading. Use the following steps to back up your integration, staging, and production systems.

### Back up the database
Back up your integration system database and code:

1.  Enter the following command to make a local backup of the remote database:

        magento-cloud db:dump
2.  Enter the following command to back up code and media:

        php bin/magento setup:backup --code [--media]

    You can optionally omit `[--media]` if you have a large number of static files that are already in source control.

Back up your staging or production system database:

1.  [SSH to the server]({{ page.baseurl }}/cloud/env/environments-ssh.html).
2.  Find the database login information:

        php -r 'print_r(json_decode(base64_decode($_ENV["MAGENTO_CLOUD_RELATIONSHIPS"]))->database);'

3.  Create a database dump:

        mysqldump -h <database host> --user=<database user name> --password=<password> --single-transaction <database name> | gzip - > /tmp/database.sql.gz

### Verify other changes
Verify other changes you're going to submit to source control before you start the upgrade:

1.  If you haven't done so already, change to your project root directory.
2.  Enter the following command:

        git status
3.  If there are changes you do *not* want to submit to source control, branch or stash them now.

### Complete the upgrade

1.  Change to your Magento base directory and enter the following command:

        composer require magento/magento-cloud-metapackage <requiredversion> --no-update
        composer update

    For example, to upgrade to version 2.1.4:

        composer require magento/magento-cloud-metapackage 2.1.4 --no-update
        composer update

4.  Add, commit, and push your changes to initiate a deployment:

        git add -A
        git commit -m "Upgrade"
        git push origin <branch name>

    `git add -A` is required to add all changed files to source control because of the way Composer marshals base packages. Both `composer install` and `composer update` marshal files from the base package (that is, `magento/magento2-base` and `magento/magento2-ee-base`) into the package root.

    The files Composer marshals belong to the new version of Magento, to overwrite the outdated version of those same files. Currently, marshaling is disabled in Magento Commerce, so you must add the marshaled files to source control.

5.  Wait for deployment to complete.

6.  [Verify your upgrade](#upgrade-verify).

<p id="cloud-upgrade-204"></p>{% collapsibleh2 Upgrade from version 2.0.4 %}

This section discusses steps to upgrade *only* if your current Magento Commerce version is 2.0.4.

### Create an authorization file
To enable you to install and update the Magento software, you must have an `auth.json` file in your project's root directory. `auth.json` contains your Magento Commerce [authorization credentials](http://devdocs.magento.com/guides/v2.1/install-gde/prereq/connect-auth.html).

In some cases, you might already have `auth.json` so check to see if it exists and has your authentication credentials before you create a new one.

To create a new `auth.json` in the event you don't have one:

{% include cloud/auth-json.md %}

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
Here are the specific files for this example to work on Magento Commerce:

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

{% endcollapsibleh2 %}

## Verify your upgrade {#upgrade-verify}
This section discusses how to verify your upgrade and to troubleshoot any issues you might find.

To verify the upgrade in your integration, staging, or production system:

1.  [SSH to the server]({{ page.baseurl }}/cloud/env/environments-ssh.html).
2.  Enter the following command from your Magento root directory to verify the installed version:

        php bin/magento --version

### Troubleshoot your upgrade {#upgrade-verify-tshoot}
In some cases, an error similar to the following displays when you try to access your storefront or the Magento Admin in a browser:

    There has been an error processing your request
    Exception printing is disabled by default for security reasons.
      Error log record number: <error number>

#### View error details on the server
To view the error in your integration system, [SSH to the server]({{ page.baseurl }}/cloud/env/environments-ssh.html) and enter the following command:

    vi /app/var/report/<error number>

#### Resolve the error
One possible error occurs when the deployment hook failed, and therefore the database has not yet been fully upgraded. If so, an error similar to the following is displayed:

    a:4:{i:0;s:433:"Please upgrade your database: Run "bin/magento setup:upgrade" from the Magento root directory.
    The following modules are outdated:
    Magento_Sales schema: current version - 2.0.2, required version - 2.0.3

To resolve the error:

1.  [SSH to the server]({{ page.baseurl }}/cloud/env/environments-ssh.html).
2.  [Examine the logs]({{ page.baseurl }}/cloud/trouble/environments-logs.html) to determine the source of the issue.
3.  After you fix the source of the issue, push the change to the server, which causes the upgrade to restart.

    For example, on a local branch, enter the following commands:

        git add -A && git commit -m "fixed deployment failure" && git push origin <branch name>

#### Related topic
*   [Install, manage, and upgrade modules]({{ page.baseurl }}/cloud/howtos/install-components.html)
*   [Install optional sample data]({{ page.baseurl }}/cloud/howtos/sample-data.html)
*   [Merge and delete an environment]({{ page.baseurl }}/cloud/howtos/environment-tutorial-env-merge.html)
