---
group: configuration-guide
title: Single machine deployment
functional_areas:
  - Configuration
  - Deploy
  - System
  - Setup
---

This topic provides instructions for deploying updates to Magento on a production server using the command line.

This process applies to technical users responsible for stores running on a single machine with some themes and locales installed.

For less technical users, i.e. business users, we recommend using the [System Upgrade][9] feature in the [Admin](https://glossary.magento.com/admin).

## Assumptions

* You installed Magento using [Composer][8] or a [compressed archive][7].
* You are directly applying updates to the server.

{:.bs-callout .bs-callout-warning}
This guide does not apply if you used `git clone` to install Magento. Contributing developers should use [this guide][6] to update their Magento installation.

## Deployment steps

1. Log in to your production server as, or switch to, the [Magento file system owner][10].

2. Change directory to the Magento base directory:

        cd <Magento base directory>

3. Enable maintenance mode using the command:

        bin/magento maintenance:enable

4. Apply updates to Magento or its components using the following command pattern:

        composer require <package> <version> --no-update

   **package**: The name of the package you want to update.

   For example:

   * `magento/product-community-edition`
   * `magento/product-enterprise-edition`

   **version**: The target version of the package you want to update.

5. Update Magento's components with Composer:

        composer update

6. Update the [database schema](https://glossary.magento.com/database-schema) and data:

        bin/magento setup:upgrade

7. Compile the code:

        bin/magento setup:di:compile

8. Deploy static content:

        bin/magento setup:static-content:deploy

9. Exit maintenance mode:

        bin/magento maintenance:disable

## Alternative deployment strategies

For deployment strategies developed by the Magento community, see the blog posts listed under the [Install/deploy][11] section in our Community Resources page.

In Magento 2.2, a near-zero downtime deployment model will be available for a variety of complex environments, including {{site.data.var.ece}}.

## Related topics

* [Enable or disable maintenance mode][4]
* [Command line upgrade][1]
* [Update the Magento application][2]
* [User Guide: Web Setup Wizard][3]
* [Running the System Upgrade][9]

[0]: {{ page.baseurl }}/
[1]: {{ page.baseurl }}/comp-mgr/cli/cli-upgrade.html
[2]: {{ page.baseurl }}/install-gde/install/cli/dev_update-magento.html
[3]: http://docs.magento.com/m2/ce/user_guide/system/web-setup-wizard.html
[4]: {{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-maint.html
[5]: {{ page.baseurl }}/config-guide/bootstrap/magento-modes.html#production-mode
[6]: {{ page.baseurl }}/install-gde/install/cli/dev_options.html
[7]: {{ page.baseurl }}/install-gde/prereq/zip_install.html
[8]: {{ page.baseurl }}/install-gde/composer.html
[9]: {{ page.baseurl }}/comp-mgr/upgrader/upgrade-start.html
[10]: {{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html#magento-file-system-owner
[11]: {{ site.baseurl }}/community/resources/resources.html#installdeploy
