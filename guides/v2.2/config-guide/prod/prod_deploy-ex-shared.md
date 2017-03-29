---
layout: default
group: config-guide
subgroup: 999_prod
title: Simple example&mdash;manage the shared configuration
menu_title: Simple example&mdash;manage the shared configuration
menu_node: 
menu_order: 52
level3_menu_node: level3child
level3_subgroup: deploy-ex
version: 2.2
github_link: config-guide/prod/prod_deploy-shared.md
---

This example shows how to change the following settings in your development system, update the shared configuration file, `config.php`, in your build system, and implement the same settings in your production system:

*	Timezone
*	Locale
*	Weight unit

These settings are available in the Magento Admin in **Stores** > Settings > **Configuration** > General > **General**.

You can use the same procedure to configure any non-sensitive, non-system-specific settings in the following references:

*	[Other configuration paths reference]({{ page.baseurl }}config-guide/prod/config-reference-most.html)
*	[Payment configuration paths reference]({{ page.baseurl }}config-guide/prod/config-reference-payment.html)
*	[Magento Enterprise B2B Extension configuration paths reference]({{ page.baseurl }}config-guide/prod/config-reference-b2b.html)

## Assumptions
This topic provides an example of modifying the production system configuration. You can choose different configuration options if you wish.

For the purposes of this example, we assume the following:

*	You use Git source control
*	The development system is available in a Git remote named `mconfig`
*	Your Git working branch is named `m2.2_split-deploy`

## Step 1: Set the configuration in the development system
To set the default locale and weight units in your development system:

1.	Log in to the Magento Admin.
2.	Click **Stores** > Settings > **Configuration** > General > **General**.
3.	In the right pane, expand **Locale Options**.

	The following figure shows an example.

	![Set locale options in the development system]({{ site.baseurl }}common/images/config_split-deploy_simple_set-locale.png){:width="550px"}
4.	From the **Timezone** list, click **GMT+00:00 (UTC)**.
5.	From the **Locale** list, click **English (United Kingdom)**.
6.	Clear the **Use system value** check box next to the **Weight Unit** field.
7.	From the **Weight Unit** list, click **kgs**.
8.	Click **Save Config**.
9.	If prompted, flush the Magento cache.

## Step 2: Update the shared configuration
Generate the shared configuration file, `app/etc/config.php`, in your development system and transfer it using source control to your build system as discussed in this section.

1.	Log in to your development system as, or switch to, the {% glossarytooltip 5e7de323-626b-4d1b-a7e5-c8d13a92c5d3 %}Magento file system owner{% endglossarytooltip %}.
2.	Enter the following commands in the order shown:

	<pre class="no-copy">cd &lt;Magento root dir>
	php bin/magento app:config:dump</pre>

	For example, if Magento is installed in `/var/www/html/magento2`, enter:

		cd /var/www/html/magento2
		php bin/magento app:config:dump
3.	If you use Git, enter the following command to confirm that `app/etc/config.php` was updated:

		git status

	You should see output similar to the following:

	<pre class="no-copy"># On branch m2.2_split-deploy
# Changed but not updated:
#   (use "git add &lt;file>..." to update what will be committed)
#   (use "git checkout -- &lt;file>..." to discard changes in working directory)
#
#       modified:   app/etc/config.php
#</pre>

	<div class="bs-callout bs-callout-warning" id="warning" markdown="1">
	_Do not_ submit changes to the `generated`, `pub/media`, or `pub/static` directories to source control. You'll generate those files on your build system. The production system likely has code, themes, and so on that aren't ready to use on production.
	</div>

4.	Check in your changes to `app/etc/config.php` only to source control.

	The Git command follows:

		git add app/etc/config.php && git commit -m "Updated shared configuration" && git push mconfig m2.2_split-deploy

## Step 3: Update your build system and generate files
Now that you've committed your changes to the shared configuration to source control, you can pull those changes in your build system, compile code, and generate static files. The last step is to pull those changes to your production system. As a result, your production system's configuration will match your development system.

To update your build system:

1.	Log in to your build system as, or switch to, the {% glossarytooltip 5e7de323-626b-4d1b-a7e5-c8d13a92c5d3 %}Magento file system owner{% endglossarytooltip %}.
2.	Change to the build system's Magento root directory.
3.	Pull the changes to `app/etc/config.php` from source control.

	The Git command follows:

		git pull mconfig m2.2_split-deploy
4.	Compile code:

		php bin/magento setup:di:compile
5.	After code has been compiled, generate static view files:

		php bin/magento setup:static-content:deploy -f
6.	Check the changes into source control.

	The Git command follows:

		git add -A && git commit -m "Updated files on build system" && git push mconfig m2.2_split-deploy

## Step 4: Update the production system
The last step in the process is to update your production system from source control. This pulls all the changes you made on your development and build systems, which means your production system is completely up-to-date.

To update the production system:

1.	Log in to your production system as, or switch to, the {% glossarytooltip 5e7de323-626b-4d1b-a7e5-c8d13a92c5d3 %}Magento file system owner{% endglossarytooltip %}.
2.	Start maintenance mode:

		cd <Magento root dir>
		php bin/magento maintenance:enable

	For additional options, such as the ability to set an IP address whitelist, see [`magento maintenance:enable`]({{ page.baseurl }}install-gde/install/cli/install-cli-subcommands-maint.html).
3.	If you use Magento EE, stop queue workers. TBD
3.	Pull code from source control.

	The Git command follows:

		git pull mconfig m2.2_split-deploy
4.	Update the configuration:

		php bin/magento app:config:import
4.	End maintenance mode:

		php bin/magento maintenance:disable

### Verify the changes in the Magento Admin
To verify these settings are not editable in the Magento Admin:

1.	Log in to the Magento Admin.
2.	Click **Stores** > Settings > **Configuration** > General > **General**.
3.	In the right pane, expand **Locale Options**.

	The options you just set are displayed as follows:

	![Configuration options not editable in the Admin]({{ site.baseurl }}common/images/config_split-deploy_not-editable.png){:width="650px"}

<div class="bs-callout bs-callout-info" id="info" markdown="1">
To change a setting that is locked in the Admin, use the [`magento config:set --lock` command]({{ page.baseurl }}config-guide/cli/config-cli-subcommands-config-mgmt-set.html).
</div>