---
layout: default
group: config-guide
subgroup: 999_prod
title: Example of managing the shared configuration
menu_title: Example of managing the shared configuration
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

You can use the same procedure to configure any of the settings in the following references:

*	[Other configuration paths reference]({{ page.baseurl }}config-guide/prod/config-reference-most.html)
*	[Payment configuration paths reference]({{ page.baseurl }}config-guide/prod/config-reference-payment.html)

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

	<pre class="no-copy"># On branch mybranch
# Changed but not updated:
#   (use "git add <file>..." to update what will be committed)
#   (use "git checkout -- <file>..." to discard changes in working directory)
#
#       modified:   app/etc/config.php
#

	@@@ IMPORTANT NOTE ABOUT OTHER CHANGES
4.	If you modified `config.php` only, check it in to source control.

	The Git command follows:

		git add app/etc/config.php && git commit -m "Updated shared configuration" && git push <remote name> <branch name>

## Step 3: Update your build system and generate files
Now that you've committed your changes to the shared configuration to source control, you can pull those changes in your build system, compile code, and generate static files. The last step is to pull those changes to your production system. As a result, your production system's configuration will match your development system.

To update your build system:

1.	Log in to your build system as, or switch to, the {% glossarytooltip 5e7de323-626b-4d1b-a7e5-c8d13a92c5d3 %}Magento file system owner{% endglossarytooltip %}.
2.	Change to the build system's Magento root directory.
3.	Pull the changes to `app/etc/config.php` from source control.

	The Git command follows:

		git pull <remote name> <branch name>
4.	Compile code:

		php bin/magento setup:di:compile
5.	After code has been compiled, generate static view files:

		php bin/magento setup:static-content:deploy -f
6.	Check the changes into source control.


