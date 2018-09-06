---
group: installation-guide
subgroup: 05_Command-line installation
title: Uninstall or reinstall Magento
menu_title: Uninstall or reinstall Magento
menu_node:
menu_order: 5
redirect_from:
  - /guides/v1.0/install-gde/install/install-cli-uninstall.html
  - /guides/v2.0/install-gde/install/install-cli-uninstall.html
functional_areas:
  - Install
  - System
  - Setup
---

## First steps {#instgde-cli-before}
{% include install/first-steps-cli.md %}
In addition to the command arguments discussed here, see [Common arguments]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands.html#instgde-cli-subcommands-common).

## Prerequisites {#instgde-install-magento-prereq}

Before you use this command, you must [install the Magento software]({{ page.baseurl }}/install-gde/install/cli/install-cli-install.html).

## Update the Magento software {#instgde-install-magento-update}

To update the Magento software:

*	If you installed the software from an archive or if you used 'composer-create-project', use the Component Manager or System Upgrade utilities.
*	If you are a contributing developer (that is, you used `git clone`), see [Contributing developers—update, reinstall Magento]({{ page.baseurl }}/install-gde/install/cli/dev_options.html).

## Reinstall the Magento software {#instgde-install-magento-reinstall}

This section discusses how to uninstall and then reinstall the Magento software with the latest version.

The way you reinstall the Magento application from the command line depends on your role:

*	If you installed the software from an archive or if you used 'composer-create-project', see [Reinstall as a system integrator](#instgde-install-reinst-update-sys).
*	If you're a contributing developer (that is, you started using `composer clone`), see [Contributing developers—update, reinstall Magento]({{ page.baseurl }}/install-gde/install/cli/dev_options.html).

### Reinstall as a system integrator {#instgde-install-reinst-update-sys}

To reinstall the Magento software as a system integrator:

1.	Log in to your Magento server as a user with permissions to modify files in the Magento file system (for example, the [switch to the Magento file system owner]({{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html).
2.	Enter the following commands in the order shown:

		cd <your Magento install dir>
		git pull origin develop
		php bin/magento setup:uninstall

	<div class="bs-callout bs-callout-info" markdown="1">
	*   If `git pull origin develop` fails, see [troubleshooting]({{ page.baseurl }}/install-gde/trouble/git/tshoot_git-pull-origin.html).
	*   To use your existing Magento software version , omit the `git pull origin develop` command.
	</div>
3.	Install the Magento software:

	*	[Install the Magento software using the command line]({{ page.baseurl }}/install-gde/install/cli/install-cli-install.html#instgde-install-cli-magento.html)
	*	[Install the Magento software using the Setup Wizard]({{ page.baseurl }}/install-gde/install/web/install-web.html)

## Uninstall the Magento software {#instgde-install-uninstall}

Uninstalling the Magento software drops and restores the database, removes the deployment configuration, and clears directories under `var`.

To uninstall the Magento software, enter the following command:

	magento setup:uninstall

The following message displays to confirm a successful uninstallation:

	[SUCCESS]: Magento uninstallation complete.

## Optionally keeping generated files {#instgde-install-keep}

By default, `magento setup:upgrade` clears compiled code and the cache. Typically, you use `magento setup:upgrade` to update components and each component can require different compiled classes.

However, in some situations (particularly, deploying Magento to production), you might wish to avoid clearing compiled code because it can take some time. (The {% glossarytooltip 0bc9c8bc-de1a-4a06-9c99-a89a29c30645 %}cache{% endglossarytooltip %} is still cleared.) To update the Magento {% glossarytooltip 66b924b4-8097-4aea-93d9-05a81e6cc00c %}database schema{% endglossarytooltip %} and data *without* clearing compiled code, enter:

	magento setup:upgrade --keep-generated

{:.bs-callout .bs-callout-warning}
The optional `--keep-generated` option should be used _only_ in limited circumstances by experienced system integrators. This option should _never_ be used in a development environment. Improper use of this optional parameter can cause errors during code execution.


6.	Install the Magento software:

	*	[Install the Magento software using the command line]({{ page.baseurl }}/install-gde/install/cli/install-cli-install.html#instgde-install-cli-magento.html)
	*	[Install the Magento software using the Setup Wizard]({{ page.baseurl }}/install-gde/install/web/install-web.html)
