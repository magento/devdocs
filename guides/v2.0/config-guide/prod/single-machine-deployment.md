---
layout: default
group: config-guide
subgroup: 999_prod
title: Single machine deployment
menu_title: Single machine deployment
menu_node:
menu_order: 500
version: 2.0
github_link: config-guide/prod/single-machine-deployment.md
functional_areas:
  - Configuration
  - Deploy
  - System
  - Setup
---

This topic provides instructions for deploying updates to Magento on a production server using the command line.

This process applies to technical users responsible for stores running on a single machine with some themes and locales installed.

For less technical users, i.e. business users, we recommend using the [System Upgrade][9] feature in the {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}Admin{% endglossarytooltip %}.

## Assumptions

* You installed Magento using [Composer][8] or a [compressed archive][7].
* You are directly applying updates to the server.

<div class="bs-callout bs-callout-warning" markdown="1">
This guide does not apply if you used `git clone` to install Magento.
Contributing developers should use [this guide][6] to update their Magento installation.
</div>

## Deployment steps

1. Log in to your production server as, or switch to, the [Magento file system owner][10].

2. Change directory to the Magento base directory:

        cd <Magento base directory>

3. Enable maintenance mode using the command:

        php bin/magento maintenance:enable

4. Apply updates to Magento or its components using the following command pattern:

        composer require <package> <version> --no-update

   **package**: The name of the package you want to update.

   For example:

   * `magento/product-community-edition`
   * `magento/product-enterprise-edition`

   **version**: The target version of the package you want to update.

5. Update Magento's components with Composer:

        composer update

6. Update the {% glossarytooltip 66b924b4-8097-4aea-93d9-05a81e6cc00c %}database schema{% endglossarytooltip %} and data:

        php bin/magento setup:upgrade

7. Compile the code:

        php bin/magento setup:di:compile

8. Deploy static content:

        php bin/magento setup:static-content:deploy

9. Exit maintenance mode:

        php bin/magento maintenance:disable

## Alternative deployment strategies

For deployment strategies developed by the Magento community, see the blog posts listed under the [Install/deploy][11] section in our Community Resources page.

In Magento 2.2, a near-zero downtime deployment model will be available for a variety of complex environments, including {{site.data.var.ece}}.

## Related topics

* [Enable or disable maintenance mode][4]
* [Command line upgrade][1]
* [Update the Magento application][2]
* [User Guide: Web Setup Wizard][3]
* [Running the System Upgrade][9]

[0]: {{page.baseurl}}
[1]: {{page.baseurl}}/comp-mgr/cli/cli-upgrade.html
[2]: {{page.baseurl}}/install-gde/install/cli/dev_update-magento.html
[3]: http://docs.magento.com/m2/ce/user_guide/system/web-setup-wizard.html
[4]: {{page.baseurl}}/install-gde/install/cli/install-cli-subcommands-maint.html
[5]: {{page.baseurl}}/config-guide/bootstrap/magento-modes.html#production-mode
[6]: {{page.baseurl}}/install-gde/install/cli/dev_options.html
[7]: {{page.baseurl}}/install-gde/prereq/zip_install.html
[8]: {{page.baseurl}}/install-gde/prereq/integrator_install.html
[9]: {{page.baseurl}}/comp-mgr/upgrader/upgrade-start.html
[10]: {{page.baseurl}}/install-gde/prereq/file-sys-perms-over.html#magento-file-system-owner
[11]: {{site.baseurl}}/community/resources/#installdeploy
