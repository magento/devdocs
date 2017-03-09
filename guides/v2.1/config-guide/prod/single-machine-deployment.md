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

This topic provides instructions for deploying updates on a Magento production server using the command line.

If you are looking for guidelines on how to use the Web Setup Wizard to update your Magento installation, see the [user guide][3]{:target="_blank"}.

<div class="bs-callout bs-callout-warning" markdown="1">

The process described below can result in several minutes of downtime and may not be acceptable for large stores.

We are currently working on documenting a split deployment process that moves the build process onto a separate machine.

</div>

## Environment assumptions

This guide assumes you have Magento installed and running on a production server and you are directly applying updates to that server.

## Deployment steps

Log into your production server and perform the following steps in the Magento root directory.

1. Enable maintenance mode using the command:

   `php bin/magento maintenance:enable`

2. Apply updates to Magento or its components using the appropriate method.

   * For Composer and compressed archive installations, run the command:
     
     `composer require <package> <version> --no-update`

     **package**: The name of the package you want to update.
     
     For example:

     * `magento/product-community-edition`
     * `magento/product-enterprise-edition`

     **version**: The target version of the package you want to update.

   * For GitHub installations:
      
     1. Make a copy of `composer.json`:

        `cp composer.json composer.json.old`
     
     2. Get the latest Magento code:
        
        `git pull origin develop`
     
     3. Diff and merge your changes in `composer.json.old` with `composer.json`

3. Update Magento's components with Composer:
   
   `composer update`

4. Update the database schema and data:

   `php bin/magento setup:upgrade`

5. Compile the code:

   `php bin/magento setup:di:compile`

6. Deploy static content:

   `php bin/magento setup:static-content:deploy`

7. Exit maintenance mode:

   `php bin/magento maintenance:disable`

## Related Topics

* [Enable or disable maintenance mode][4]
* [Command line upgrade][1]
* [Update the Magento application][2]

[0]: {{page.baseurl}}
[1]: {{page.baseurl}}comp-mgr/cli/cli-upgrade.html
[2]: {{page.baseurl}}install-gde/install/cli/dev_update-magento.html
[3]: http://docs.magento.com/m2/ce/user_guide/system/web-setup-wizard.html
[4]: {{page.baseurl}}install-gde/install/cli/install-cli-subcommands-maint.html
