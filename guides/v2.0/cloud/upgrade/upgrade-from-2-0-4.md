---
group: cloud
subgroup: 130_upgrades
title: Upgrade from 2.0.4
menu_title: Upgrade from 2.0.4
menu_order: 30
menu_node:
version: 2.0
github_link: cloud/upgrade/upgrade-from-2-0-4.md
functional_areas:
  - Cloud
  - Upgrade
---

This section discusses steps to upgrade *only* if your current {{site.data.var.ece}} version is 2.0.4. When upgrading only from this version, follow these instructions.

## Create an authorization file
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

Deploy section:

```
deploy: |
    php ./vendor/magento/magento-cloud-configuration/pre-deploy.php
    php ./bin/magento magento-cloud:deploy
```

Crons section:

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

In some cases, your `composer.json` might already be correct.

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

## Verify your upgrade {#upgrade-verify}
This section discusses how to verify your upgrade and to troubleshoot any issues you might find.

To verify the upgrade in your integration, staging, or production system:

1.  [SSH to the server]({{ page.baseurl }}/cloud/env/environments-ssh.html).
2.  Enter the following command from your Magento root directory to verify the installed version:

        php bin/magento --version

## Troubleshoot your upgrade {#upgrade-verify-tshoot}
In some cases, an error similar to the following displays when you try to access your storefront or the Magento Admin in a browser:

    There has been an error processing your request
    Exception printing is disabled by default for security reasons.
      Error log record number: <error number>

### View error details on the server
To view the error in your integration system, [SSH to the server]({{ page.baseurl }}/cloud/env/environments-ssh.html) and enter the following command:

    vi /app/var/report/<error number>

### Resolve the error
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
* [Composer]({{ page.baseurl }}/cloud/reference/cloud-composer.html)
* [Install, manage, and upgrade modules]({{ page.baseurl }}/cloud/howtos/install-components.html)
* [Install optional sample data]({{ page.baseurl }}/cloud/howtos/sample-data.html)
* [Merge and delete an environment]({{ page.baseurl }}/cloud/howtos/environment-tutorial-env-merge.html)
