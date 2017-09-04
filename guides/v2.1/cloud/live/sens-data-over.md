---
layout: default
group: cloud
subgroup: 120_env
title: Configuration management
menu_title: Configuration management
menu_order:  91
menu_node:
level3_menu_node: level3child
level3_subgroup: manageconfig
version: 2.1
github_link: cloud/live/sens-data-over.md
---

In `magento-cloud-configuration` release 101.4.1 on Magento Enterprise Cloud Edition 2.1.4 and later, we provide the following improvements:

*	Better way to [manage the configuration](#cloud-confman-over) so your Integration, Staging, and Production environments stay in synchronization with each other more easily.

	<!-- Sensitive data, such as payment processor passwords and API keys, are managed using either environment variables or using the Magento Admin only. -->
*	Less time required to [build](#cloud-confman-scd-over) and deploy your project by reducing the time required for static file deployment.

<div class="bs-callout bs-callout-info" markdown="1">
These new methods are optional but strongly recommended. The process ensures faster deployments and consistent configurations across your environments.
</div>

### Managing the configuration {#cloud-confman-over}
We <!-- help you protect sensitive settings and  -->make it easy to manage system-specific settings for your stores by generating a single file with all of your Magento configurations.

<!-- *	A new method to manage sensitive settings (such as {% glossarytooltip 5b963536-8f03-45c4-963b-688021f4eea7 %}payment gateway{% endglossarytooltip %} passwords).
 -->
 This new configuration management feature creates a file, `app/etc/config.local.php`, that includes all system configuration settings for stores, sites, extensions, and static file optimization settings. System values related to {% glossarytooltip a3e37235-4e8b-464f-a19d-4a120560206a %}static content{% endglossarytooltip %} deployment (for example, static file optimization) are also stored in `app/etc/config.local.php`. _Static file optimization_ means merging and minifying JavaScript and Cascading Style Sheets, and minifying HTML templates.

<!-- *	In your [staging]({{ page.baseurl }}cloud/reference/discover-arch.html#cloud-arch-stage) and [production]({{ page.baseurl }}cloud/reference/discover-arch.html#cloud-arch-prod) systems, you manage sensitive settings by defining environment variables.

You can change sensitive variables using the Magento Enterprise Cloud Edition [Web Interface]({{ page.baseurl }}cloud/project/project-webint-basic.html).  -->


<!-- Sensitive values are _not_ stored in `app/etc/config.local.php`. -->

`config.local.php` is a convenient way to move settings between your environments. You will add `config.local.php` to your `master` Git branch, storing the file in source control. Your Magento installation accesses the configurations stored in this file in your Integration, Staging, and Production environments for complete consistency.

### Static content deployment performance {#cloud-confman-scd-over}
If you have a `config.local.php`, static files are deployed in the Magento Enterprise Cloud Edition [build phase]({{ page.baseurl}}cloud/reference/discover-deploy.html#cloud-deploy-over-phases-build) instead of in the [deployment phase]({{ page.baseurl}}cloud/reference/discover-deploy.html#cloud-deploy-over-phases-hook), which decreases the amount of time required to deploy changes to Cloud.

This makes Cloud's build phase less time-consuming than deployment. Therefore, any change you make to your Cloud project deploys faster overall if there is a `config.local.php`.

### Configuration settings locked in the Magento Admin {#cloud-confman-locked-over}
Settings in `config.local.php` are not editable in the {% glossarytooltip 18b930cf-09cc-47c9-a5e5-905f86c43f81 %}Magento Admin{% endglossarytooltip %}. This also helps keep your settings consistent across all environments.

### How to get `magento-cloud-configuration` release 101.4.1
Magento Enterprise Cloud Edition periodically provides patch releases in components like `magento-cloud-configuration`. To test and apply the patch, see [Test general patches]({{ page.baseurl }}cloud/project/project-patch.html#cloud-patch-gen).

## Manage your configuration <!-- and protect sensitive settings --> {#cloud-config-manage-sens-over}
Magento's store configuration is located in the database. When updating configurations in Integration, Staging, and Production environments, you would need to make those changes in the Admin per environment. By generating this file, all of your Magento configuration settings are exported from the database into a single text file. Magento accesses this file for configuration settings per environment.

You can also modify the settings in each file per environment. For example, you may want to disable static file optimization in your Integration environment (where you are developing and testing) and enable it in Staging and Production environments. Modifying the file does require direct edits per environment.

<!-- *	Sensitive values, such as payment processor settings, are specified using environment variables. Viewing or changing environment variables is restricted to people who have at minimum a project reader role with [environment administrator]({{ page.baseurl }}cloud/project/user-admin.html#loud-role-env) privileges.
 -->

The following sections provide more detail.

## Example of managing system-specific settings {#cloud-config-specific-over}
System settings refer to the configuration in the Magento {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}Admin{% endglossarytooltip %} in **Stores** > Settings > **Configuration**. A list of settings can be found in [Configuration settings you can change]({{ page.baseurl }}cloud/live/cloud/live/sens-data-initial.html#cloud-clp-settings).

<!-- #### How we set system values
In each of your Magento Enterprise Cloud Edition systems (integration, staging, and production), you have the option of overriding certain configuration settings:

*	Some settings, such as the search engine and caching system, might be the same across all systems
*	Other settings, such as static file optimization settings, can be unique to a particular system
*	Sensitive settings, such as payment processor settings, are set using environment variables

	<div class="bs-callout bs-callout-info" markdown="1">
	*	You can set _any_ value using environment variables but we emphasize sensitive values for obvious reasons. For a list of all variables you can set, see [System settings reference]({{ page.baseurl }}cloud/live/config-reference-var-name.html).
	*	We assume system settings are the same in staging and production. Sensitive settings might be different.
	</div> -->

To enable you to set system settings, we use the following override scheme.

![How configuration variable values are determined]({{ site.baseurl }}common/images/cloud_vars_flow-diagram.png){:width="550px"}

As the diagram shows, we get configuration values in the following order:

1.	From an environment variable.

	Environment variables, if they exist, override all other values.
2.	From `config.local.php`.

	Values in `config.local.php` override settings in the database.
3.	From the database.

If no value exists in any of those sources, we use either the default value or NULL. For an example of how this works, see [Example of managing system-specific settings]({{ page.baseurl }}cloud/live/sens-data-initial.html).

## Recommended procedure to manage your settings {#cloud-config-specific-recomm}
Managing store configuration is a complex task that's mostly up to you. What locales do you want to use? What custom themes do you need? Only you can determine the answers to those questions.

We can, however, help you manage those settings more easily. For example, suppose you want to change the default locale and also change a store's static file optimization settings. Currently, the way you do that is to log in to the Admin on the integration server, save your settings, then (when testing is complete) manually change those settings in staging.

What if someone changes a setting in the staging Admin? You'll have to go back and make the same change on integration; otherwise, next time you deploy to staging, the old settings are enabled.

Instead of doing that, we enable you to store your settings in `app/etc/config.local.php` which is managed in Git. (Because there's no Git user in integration, staging, or production, you must add the changes to `config.local.php` in your local system and push it to the integration server.) In addition, any setting in `config.local.php` is _not editable_ in the Admin.

The following figure shows a high-level overview of this process.

![Overview of Cloud configuration management]({{ site.baseurl }}common/images/cloud_vars_simple.png){:width="650px"}

Our recommended method relies on the following important points:

*	Complete all of your configuration in your Integration `master` branch. The `master` branch is your "source of truth" for configuration management.
*	Transfer those settings using `config.local.php` to the other systems (local, staging, and production).

To generate and deploy:

**Step A**. Complete all configurations for your stores in the Admin console.

1. Log into your Integration environment for the `master` branch.
2. Create and configure stores.
3. Generate `config.local.php` on your Integration environment using the `magento-cloud:scd-dump` command. The command which populates `config.local.php` with only the configuration values necessary for static content deployment.

**Step B**. Push `config.local.php` to the Integration `master` branch. To push this file to the `master` Git branch, you need to complete a few extra steps because this environment is read-only.

1.	Transfer `config.local.php` to your local system using `rsync` or `scp`. You can only add this file to the Git branch through your local.
2.	Add and push `config.local.php` to the Git `master` branch.

<!-- *	`magento-cloud:dump` populates `config.local.php` with all system configuration values _except_ sensitive values.
*	`magento-cloud:scd-dump` populates `config.local.php` with only the configuration values necessary for static content deployment. -->

**Step C**. When you push to the Git branch, Magento Enterprise Cloud Edition automatically deploys the settings to your Integration environment for the `master` branch. This file is included in any branches from Master, transfering the locked configurations into those environments.

**Step D**. If you need to change any configuration settings on the Integration environment, we recommend completing them in the Integration environment for the `master` branch. You need to take a few extra steps because all Integration environments are read-only.

To complete these changes:

1.	Delete `config.local.php` on your Integration environment.

	You must delete the file to change settings. The stored configurations in the file are blocked from editing in the Admin console. For example, if you want to change a store name, you can't edit it until this file is removed.
2.	Make configuration changes in the Admin on the Integration environment.
3.	Re-create `config.local.php` and repeat Step B.

After you've configured the Integration environment and tested it thoroughly, see [Overview of staging and production]({{ page.baseurl }}cloud/live/stage-prod-over.html) to start the process of migrating to a staging or production system.

<div class="bs-callout bs-callout-warning" markdown="1">
We assume system settings are the same in Staging and Production environments. <!-- Only sensitive configuration values should change in those systems and you manage them using environment variables. -->

If you choose to use different system settings in Staging and Production, you can manually edit `config.local.php`. We highly recommend making any configuration changes in Integration to deploy into Staging and Production.
</div>

#### Next step
[Example of managing system-specific settings]({{ page.baseurl }}cloud/live/sens-data-initial.html)
