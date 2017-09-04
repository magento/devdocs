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
version: 2.2
github_link: cloud/live/sens-data-over.md
---

In `magento-cloud-configuration` release 101.4.1 on Magento Enterprise Cloud Edition 2.1.4 and later, we provide the following improvements:

*	Better way to [manage the configuration](#cloud-confman-over) so your integration, staging, and production systems stay in synchronization with each other more easily.

	<!-- Sensitive data, such as payment processor passwords and API keys, are managed using either environment variables or using the Magento Admin only. -->
*	Less time required to [build](#cloud-confman-scd-over) and deploy your project by reducing the time required for static file deployment.

<div class="bs-callout bs-callout-info" markdown="1">
These new methods to manage your configuration are optional. You don't have to use them, although we strongly recommend you do.
</div>

### Managing the configuration {#cloud-confman-over}
We <!-- help you protect sensitive settings and  -->make it easy to manage system-specific settings as follows:

<!-- *	A new method to manage sensitive settings (such as {% glossarytooltip 5b963536-8f03-45c4-963b-688021f4eea7 %}payment gateway{% endglossarytooltip %} passwords).
 -->
 *	An improved method to manage system configuration settings (such as store {% glossarytooltip 05099dbb-d491-4e33-a065-16035cb2d4d9 %}locale{% endglossarytooltip %} settings and static file optimization settings) in a new configuration file, `app/etc/config.php`, which is in source control.

<!-- *	In your [staging]({{ page.baseurl }}cloud/reference/discover-arch.html#cloud-arch-stage) and [production]({{ page.baseurl }}cloud/reference/discover-arch.html#cloud-arch-prod) systems, you manage sensitive settings by defining environment variables.

	You can change sensitive variables using the Magento Enterprise Cloud Edition [Web Interface]({{ page.baseurl }}cloud/project/project-webint-basic.html).  -->
*	System values related to {% glossarytooltip a3e37235-4e8b-464f-a19d-4a120560206a %}static content{% endglossarytooltip %} deployment (for example, static file optimization) are also stored in `app/etc/config.php`.

	<!-- Sensitive values are _not_ stored in `app/etc/config.php`. -->

	`config.php` is a convenient way to move settings between systems. Managing `config.php` in source control means your settings for Integration, Staging, and Production environments are always consistent. For example, you can disable static file optimization in [Integration]({{ page.baseurl }}cloud/reference/discover-arch.html#cloud-arch-int) but enable it in both Staging and Production. After initially setting up the configuration, you don't need to touch it again because it's in source control.

	(_Static file optimization_ means merging and minifying JavaScript and Cascading Style Sheets, and minifying HTML templates.)

### Static content deployment performance {#cloud-confman-scd-over}
If you have a `config.php`, static files are deployed in the Magento Enterprise Cloud Edition [build phase]({{ page.baseurl}}cloud/reference/discover-deploy.html#cloud-deploy-over-phases-build) instead of in the [deployment phase]({{ page.baseurl}}cloud/reference/discover-deploy.html#cloud-deploy-over-phases-hook), which decreases the amount of time required to deploy changes to Cloud.

In other words, Cloud's build phase is less time-consuming than deployment. Therefore, any change you make to your Cloud project deploys faster overall if there is a `config.php` compared to having no `config.php`.

### Configuration settings locked in the Magento Admin {#cloud-confman-locked-over}
Settings in `config.php` are not editable in the {% glossarytooltip 18b930cf-09cc-47c9-a5e5-905f86c43f81 %}Magento Admin{% endglossarytooltip %}. This also helps keep your settings consistent across the integration, staging, and production systems.

### How to get `magento-cloud-configuration` release 101.4.1
Magento Enterprise Cloud Edition periodically provides patch releases in components like `magento-cloud-configuration`.

To test and apply the patch, see [Test general patches]({{ page.baseurl }}cloud/project/project-patch.html#cloud-patch-gen).

## Manage your configuration <!-- and protect sensitive settings --> {#cloud-config-manage-sens-over}
Magento's store configuration is located in the database and there is one database per system. This can make the configuration of multiple systems (such as staging and production) difficult.

Starting with version `magento-cloud-configuration` release 101.4.1 on Magento Enterprise Cloud Edition 2.1.4, we store configuration values are specified in a new configuration file, `app/etc/config.php`, which is in source control.

Using `config.php`, you can, for example, disable static file optimization in your integration system (where you are developing and testing) and enable static file optimization in staging and production.

<!-- *	Sensitive values, such as payment processor settings, are specified using environment variables. Viewing or changing environment variables is restricted to people who have at minimum a project reader role with [environment administrator]({{ page.baseurl }}cloud/project/user-admin.html#loud-role-env) privileges.
 -->

The following sections provide more detail.

### Example of managing system-specific settings {#cloud-config-specific-over}
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
2.	From `config.php`.

	Values in `config.php` override settings in the database.
3.	From the database.

If no value exists in any of those sources, we use either the default value or NULL.

For an example of how this works, see [Example of managing system-specific settings]({{ page.baseurl }}cloud/live/sens-data-initial.html).

#### Recommended procedure to manage your settings {#cloud-config-specific-recomm}
Managing store configuration is a complex task that's mostly up to you. What locales do you want to use? What custom themes do you need? Only you can determine the answers to those questions.

We can, however, help you manage those settings more easily. For example, suppose you want to change the default locale and also change a store's static file optimization settings. Currently, the way you do that is to log in to the Admin on the integration server, save your settings, then (when testing is complete) manually change those settings in staging.

What if someone changes a setting in the staging Admin? You'll have to go back and make the same change on integration; otherwise, next time you deploy to staging, the old settings are enabled.

Instead of doing that, we enable you to store your settings in `app/etc/config.php` which is managed in Git. (Because there's no Git user in integration, staging, or production, you must add the changes to `config.php` in your local system and push it to the integration server.) In addition, any setting in `config.php` is _not editable_ in the Admin.

The following figure shows a high-level overview of this process.

![Overview of Cloud configuration management]({{ site.baseurl }}common/images/cloud_vars_simple.png){:width="650px"}

Our recommended method relies on the following important points:

*	Do all of your configuration in your integration system's `master` branch; the `master` branch is your "source of truth" for configuration management.
*	Transfer those settings using `config.php` to the other systems (local, staging, and production).

**Step A**. Create and configure stores and create `config.php` in your integration system.

**Step B**. Push `config.php` to your integration server's `master` branch.

The following procedure is required because there is no Git user on your integration server so you can't use Git commands there. Instead, you generate the configuration on the integration server and transfer it to your local machine where you can push it.

1.	Generate `config.php` on your integration server's `master` branch.
3.	Transfer `config.php` to your local system using `rsync` or `scp` so you can add it to Git.
4.	Add `config.php` to Git (again, in the `master` branch).
5.	Push `config.php` to your integration server.

You generate `config.php` using `magento app:config:scd-dump`, which populates `config.php` with only the configuration values necessary for static content deployment..

<!-- *	`magento app:config:dump` populates `config.php` with all system configuration values _except_ sensitive values.
*	`magento app:config:scd-dump` populates `config.php` with only the configuration values necessary for static content deployment. -->

**Step C**. Magento Enterprise Cloud Edition automatically deploys the settings to your integration server.

**Step D**. To change settings:

1.	Delete `config.php` on your integration server.

	You must delete it to be able to change the same settings again. In other words, if you changed the store name, that setting isn't editable in the Admin. You must delete `config.php` on the integration server to be able to change the store name again.
2.	Make configuration changes in the Admin on the integration server.
3.	Re-create `config.php` and repeat Step B.

After you've configured the integration server and tested it thoroughly, see [Overview of staging and production]({{ page.baseurl }}cloud/live/stage-prod-over.html) to start the process of migrating to a staging or production system.

<div class="bs-callout bs-callout-warning" markdown="1">
We assume system settings are the same in staging and production. <!-- Only sensitive configuration values should change in those systems and you manage them using environment variables. -->

If you choose to use different system settings in staging and production, you can manually edit `config.php`, but that is beyond scope of this guide.
</div>

#### Next step
[Example of managing system-specific settings]({{ page.baseurl }}cloud/live/sens-data-initial.html)
