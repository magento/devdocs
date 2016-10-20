---
layout: default
group: cloud
subgroup: 10_howto
title: Upgrade the Magento software
menu_title: Upgrade the Magento software
menu_order: 7
level3_menu_node: level3child
level3_subgroup: upgrade-update
menu_node: 
version: 2.0
github_link: cloud/howtos/upgrade-magento.md
---

## How upgrade the Magento software {#cloud-howto-upgrade}
This topic discusses how to upgrade the Magento Enterprise Cloud Edition software from version 2.0.9 to a later version. If you have a version earlier than 2.0.9, [contact Support]({{ page.baseurl }}cloud/get-help.html).

## Upgrade to the latest version

{% collapsible To get started: %}

{% include cloud/cli-get-started.md %}

{% endcollapsible %}

{% collapsible To upgrade to the latest version: %}

1.  Back up the Magento application in its current state.

        php <Magento root dir>/bin/magento setup:backup --code --db --media
        
1.	Open `composer.json` in a text editor.

	It's located in your Magento project root directory.
2.	In the `require` block, change the value of `"magento/magento-cloud-metapackage":` to the desired version.

	An example follows:

        "require": {
           "magento/magento-cloud-metapackage": "2.1.2",
           "composer/composer": "@alpha",
           "colinmollenhour/credis": "1.6",
           "colinmollenhour/php-redis-session-abstract": "1.1",
        },

3.	Save your changes to `composer.json` and exit the text editor.
4.	Enter the following commands in the order shown:

		composer update
        git add -A && git commit -m "Upgrade"
        git push origin <branch name>

5.	Wait for deployment to complete.
5.  Take a snapshot of your environment:

        magento-cloud snapshot:create -e <environment ID>
6.  [Verify your upgrade](#upgrade-verify).

{% endcollapsible %}

## Upgrade from version 2.0.4
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

Move `app/NonComposerComponentRegistration.php` to `app/etc/NonComposerComponentRegistration.php`.
Make sure the relative paths that point to locations in the app and lib directories reflect the 
new location of the file. For an example that can be copied, see the [copy in this project](app/etc/NonComposerComponentRegistration.php).

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

{% endcollapsible %}

## Verify your upgrade {#upgrade-verify}
This section discusses how to verify your upgrade on your local development machine and in the cloud.

### Verify the upgrade locally
To verify your upgrade locally, enter the following command from your Magento root directory:

    php bin/magento --version

You can also log in to the Magento Admin; the version displays in the lower right corner of the page.

To find the base URL for your integration environment, enter the following command:

    magento-cloud environment:url

When prompted, choose the HTTP or HTTPS URL.

If errors display in the browser, see [Troubleshooting your upgrade](#upgrade-verify-tshoot).

### Troubleshooting your upgrade {#upgrade-verify-tshoot}
In some cases, an error similar to the following displays when you try to access your storefront or the Magento Admin in a browser:

    There has been an error processing your request
    Exception printing is disabled by default for security reasons.
      Error log record number: <number>

To view error details locally, open the indicated file name in the `<Magento root dir>/var/report` directory. 

To view the error in your integration environment, [SSH]({{ page.baseurl }}cloud/env/environments-start.html#env-start-ssh) to the environment and open the indicated file in the `/app/var/report` directory.

If the error includes the following, run the `bin/magento setup:upgrade` command to resolve it:

    a:4:{i:0;s:433:"Please upgrade your database: Run "bin/magento setup:upgrade" from the Magento root directory.
    The following modules are outdated:
    Magento_Sales schema: current version - 2.0.2, required version - 2.0.3
    Magento_Sales data: current version - 2.0.2, required version - 2.0.3
    Magento_CatalogStaging schema: current version - 2.0.0, required version - 2.1.0

To resolve the error:

1.  Enter the following command:

        php bin/magento setup:upgrade
2.  Wait for the command to complete.
3.  Update the branch:

        git add -A && git commit -m "Update"
        git push origin <branch name>

#### Related topic
*	[Install components]({{page.baseurl}}cloud/howtos/install-components.html)
*	[Install optional sample data]({{page.baseurl}}cloud/howtos/sample-data.html)
*	[Merge and delete an environment]({{page.baseurl}}cloud/howtos/environment-tutorial-env-merge.html)
