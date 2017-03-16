---
layout: default
group: config-guide
subgroup: 999_prod
title: Single machine deployment
menu_title: Single machine deployment
menu_node: 
menu_order: 500
version: 2.1
github_link: config-guide/prod/single-machine-deployment.md
---

This topic provides instructions for deploying updates to Magento on a production server using the command line.

This process applies to small merchants running their stores on a single machine with a few themes and locales installed.

If you are looking for guidelines on how to use the System Upgrade feature in the Admin, see the [user guide][3]{:target="_blank"}.

<div class="bs-callout bs-callout-warning" markdown="1">

The following process can result in several minutes of downtime and may not be acceptable for large stores.

</div>

## Assumptions

* Magento was installed using [Composer][8] or a [compressed archive][7].
* Magento is running in [production mode][5] on a single production server.
* You are directly applying updates to the server.
* Your store can afford several minutes of downtime.

<div class="bs-callout bs-callout-warning" markdown="1">
This guide does not apply if you used `git clone` to install Magento.
Contributing developers should use [this guide][6] to update their Magento installation.
</div>

## Deployment steps

Log into your production server and perform the following steps in the Magento root directory.

1. Enable maintenance mode using the command:

        php bin/magento maintenance:enable

2. Apply updates to Magento or its components using the following command pattern:

     composer require <package> <version> --no-update

   **package**: The name of the package you want to update.
   
   For example:

   * `magento/product-community-edition`
   * `magento/product-enterprise-edition`

   **version**: The target version of the package you want to update.

3. Update Magento's components with Composer:
   
        composer update

4. Update the database schema and data:

        php bin/magento setup:upgrade

5. Compile the code:

        php bin/magento setup:di:compile

6. Deploy static content:

        php bin/magento setup:static-content:deploy

7. Exit maintenance mode:

        php bin/magento maintenance:disable

## Related Topics

* [Enable or disable maintenance mode][4]
* [Command line upgrade][1]
* [Update the Magento application][2]

[0]: {{page.baseurl}}
[1]: {{page.baseurl}}comp-mgr/cli/cli-upgrade.html
[2]: {{page.baseurl}}install-gde/install/cli/dev_update-magento.html
[3]: http://docs.magento.com/m2/ce/user_guide/system/web-setup-wizard.html
[4]: {{page.baseurl}}install-gde/install/cli/install-cli-subcommands-maint.html
[5]: {{page.baseurl}}config-guide/bootstrap/magento-modes.html#mode-production
[6]: {{page.baseurl}}install-gde/install/cli/dev_options.html
[7]: {{page.baseurl}}install-gde/prereq/zip_install.html
[8]: {{page.baseurl}}install-gde/prereq/integrator_install.html
