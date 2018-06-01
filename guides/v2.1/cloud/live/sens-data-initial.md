---
group: cloud
title: Example of managing system-specific settings
version: 2.1
github_link: cloud/live/sens-data-initial.md
functional_areas:
  - Cloud
  - Deploy
---

Configuration management exports your configurations to a file for pushing across your environments. This file, `config.local.php`, keeps your configurations consistent across all environments, decreases downtime by moving static deploy to build, and much more. This information details an example for configuring your settings, exporting the file, and deploying it.

This example shows how to use the [recommended procedure]({{ page.baseurl }}/cloud/live/sens-data-over.html#cloud-config-specific-recomm) for managing the configuration:

1.	Enter your configurations in your Integration environment Admin panel.
2.	Create `config.local.php` and transfer it to your local system.
3.	Push `config.local.php` to the branch and Integration environment.
4.	Verify your settings are not editable in the Admin panel. Any configurations exported to `config.local.php` make those fields in the Admin panel read-only and disabled for edits.
5.	Update and modify configurations again in Integration and recreate the file to update in Git:
	1.	Delete `config.local.php` on the Integration environment.
	2.	Change configuration settings on the Integration environment.
	3.	Re-create and push the updated `config.local.php` to the Integration environment.

<!-- <div class="bs-callout bs-callout-info" id="info" markdown="1">
This example shows how you can set and lock configuration values for everything _except_ sensitive settings. You must set sensitive settings either as configuration variables or in the {% glossarytooltip 18b930cf-09cc-47c9-a5e5-905f86c43f81 %}Magento Admin{% endglossarytooltip %}. For more information, see [Sensitive and system-specific]({{ page.baseurl }}/config-guide/prod/config-reference-sens.html).
</div> -->

For example, you may want to set the following settings:

* Disable {% glossarytooltip 05099dbb-d491-4e33-a065-16035cb2d4d9 %}locale{% endglossarytooltip %} and static file optimization settings in your Integration environment
* Enable static file optimization in Staging and Production environments
* Configure Fastly in Staging and Production with specific credentials for each

_Static file optimization_ means merging and minifying {% glossarytooltip 312b4baf-15f7-4968-944e-c814d53de218 %}JavaScript{% endglossarytooltip %} and Cascading Style Sheets, and minifying {% glossarytooltip a2aff425-07dd-4bd6-9671-29b7edefa871 %}HTML{% endglossarytooltip %} templates.

## Prerequisites {#prereqs}
To complete these configuration management tasks, you need the following:

* Minimum a project reader role with [environment administrator]({{ page.baseurl }}/cloud/project/user-admin.html#cloud-role-env) privileges
* Magento Admin panel URL and credentials for Integration, Staging, and Production environments
* Push all updated code to your Integration environment:

	* For Starter: To an Integration branch and environment
	* For Pro: To the Integration `master` branch and environment

## Configure Magento through the Integration Admin panel {#configure}

Log into the Magento Admin panel in Integration to modify configurations. For a list of settings, see [List of system-specific configuration settings]({{ page.baseurl }}/cloud/live/sens-data-over.html#cloud-clp-settings) for details.

To change locale and static file optimization settings:

1.	Log in to the Integration environment Admin panel. You can access this URL through the Project Web Console.
2.	Navigate to **Stores** > Settings > **Configuration** > General > **General**.
2.	In the right pane, expand **Locale Options**.
3.	From the **Locale** list, change the locale. You can change it back later.

	![Change the locale]({{ site.baseurl }}/common/images/cloud_var_locale.png){:width="400px"}
4.	Click **Save Config**.
5.	In the left navigation pane, click **Advanced** > **Developer**.
5.	In the right pane, expand **Template Settings**.
6.	Clear the **Use default value** check box next to the **Minify Html** list.
7.	From the **Minify Html** list, click **No**.
5.	In the right pane, expand **CSS Settings**.
6.	From the **Merge CSS Files** list, click **No**.
7.	From the **Minify CSS Files** list, click **No**.

	![Set static file optimization settings]({{ site.baseurl }}/common/images/cloud_vars_set-minify.png){:width="550px"}
8.	Click **Save Config**.
9.	If prompted, [flush the Magento cache](http://docs.magento.com/m2/ee/user_guide/system/cache-management.html){:target="\_blank"}.
10.	Log out of the Magento Admin.

## Export values and transfer config.local.php to your local system {#export}
This step creates and transfers the `config.local.php` configuration file on the Integration environment using a command you run on your local machine.

This procedure corresponds to step 2 in the [recommended procedure]({{ page.baseurl }}/cloud/live/sens-data-over.html#cloud-config-specific-recomm). After you create `config.local.php`, transfer it to your local system so you can add it to Git.

To create and transfer `config.local.php`:

{% include cloud/sens-data-create-config-local.md %}

The following snippet from `config.local.php` shows an example of changing the default locale to `en_GB` and changing static file optimization settings:

<pre class="no-copy">
 'general' =>
      array (
        'locale' =>
        array (
          'code' => 'en_GB',
          'timezone' => 'UTC',
        ),

        ... more ...

 'dev' =>
      'template' =>
        array (
          'allow_symlink' => '0',
          'minify_html' => '0',
        ),

        ... more ...

        'js' =>
        array (
          'merge_files' => '0',
          'enable_js_bundling' => '0',
          'minify_files' => '0',
        ),
        'css' =>
        array (
          'merge_css_files' => '0',
          'minify_files' => '0',
        ),
</pre>

## Push and deploy config.local.php to environments {#deploy}
Now that you've created `config.local.php` and transferred it to your local system, commit it to Git and push it to your environments. This procedure corresponds to step 3 and 4 in the [recommended procedure]({{ page.baseurl }}/cloud/live/sens-data-over.html#cloud-config-specific-recomm).

The following command adds, commits, and pushes to master:

	git add app/etc/config.local.php && git commit -m "Add system-specific configuration" && git push origin master

Complete code deployment to Staging and Production. For Starter, you push to `staging` and `master` branches. For Production, you will need to SSH into your environments and push. For details on deployment commands, see [Deploy your store]({{ page.baseurl }}/cloud/live/stage-prod-live.html).

Wait for deployment to complete in all environments.

## Verify your configuration changes {#cloud-set-verify}
After you push `config.local.php` to your environments, any values you changed should be read-only in the Magento Admin. In this example, the modified default locale and static file optimization settings should not be editable in the Magento Admin. These configuration settings are set in `config.local.php`.

To verify your configuration changes:

1.	If you haven't done so already, log out of the Magento Admin in one of the environments.
2.	Log back in to the Magento Admin.
3.	Click **Stores** > Settings > **Configuration** > General > **General**.
4.	In the right pane, expand **Locale Options**.

	Notice several fields cannot be edited, as shown in the following sample. These configuration settings are maintained by `config.local.php`.

	![Can't edit certain values in the Admin]({{ site.baseurl }}/common/images/cloud_var_not-editable.png){:width="550px"}
5.	In the left navigation pane, click Advanced > **Developer**.
6.	In the right pane, expand **Template Settings**, **JavaScript Settings**, and **CSS Settings**.

	Notice several fields cannot be edited, as shown in the following sample. These configuration settings are maintained by `config.local.php`.

	![Can't edit certain values in the Admin ]({{ site.baseurl }}/common/images/cloud_var_not-editable2.png){:width="550px"}
7.	Log out of the Magento Admin.

## Change and update system-specific configuration settings {#modify}
If you need to modify any of these settings and update `config.local.php`, you will need to delete the file, update configurations, generate the file, and push it to Git following the previous steps. For an overview, see the [recommended procedure]({{ page.baseurl }}/cloud/live/sens-data-over.html#cloud-config-specific-recomm).

For this example, we'll modify static file optimization settings.

### Delete config.local.php on the Integration environment {#delete-file}
Before you can change settings on the Integration environment, delete `app/etc/config.local.php` from that environment. With this file removed, all configuration settings are available to modify in the Admin.

To delete `config.local.php`:

1.	On your local system, make sure you're on the `master` branch.
2.	SSH to the integration server:

		magento-cloud ssh
3.	Delete `config.local.php`.

		rm app/etc/config.local.php
4.	Close the SSH tunnel.

		exit

### Change configuration values in Integration {#change-settings}
To change values in the Integration environment Magento Admin:

1.	If you haven't done so already, log out of the Integration Admin.
1.	Log in to the Integration Admin.

	For URL and credentials, see [Find Admin login information](http://devdocs.magento.com/guides/v2.0/cloud/release-notes/CloudReleaseNotes2.1.3.html#cloud-es-config-mg).
4.	Click **Stores** > Settings > **Configuration** > **Advanced** > **Developer**.
5.	In the right pane, expand **Template Settings**.
6.	Clear the **Use default value** check box next to the **Minify Html** list.
7.	From the **Minify Html** list, click **Yes**.
5.	In the right pane, expand **CSS Settings**.
6.	From the **Merge CSS Files** list, click **Yes**.
7.	From the **Minify CSS Files** list, click **Yes**.

	![Set static file optimization settings]({{ site.baseurl }}/common/images/cloud_vars_reset-minify.png){:width="550px"}
8.	Click **Save Config**.
9.	If prompted, [flush the Magento cache](http://docs.magento.com/m2/ee/user_guide/system/cache-management.html){:target="_blank"}.
10.	Log out of the Magento Admin.

### Generate a new version of config.local.php {#regenerate}
To generate a new file:

1.	On your local system, find the integration server's SSH URL.

		magento-cloud environment:ssh --pipe
2.	Create `config.local.php` on the integration server.

		ssh <SSH URL> "php bin/magento magento-cloud:scd-dump"

	For example,

		ssh itnu84v4m4e5k-master-ouhx5wq@ssh.us.magentosite.cloud "php bin/magento magento-cloud:scd-dump"
5.	If you haven't done so already, change to the project root directory.
6.	Transfer `config.local.php` to your local system.

		rsync <SSH URL>:app/etc/config.local.php ./app/etc/config.local.php

### Push the changes to Git {#push-again}
To push your changes, enter the following command:

	git add app/etc/config.local.php && git commit -m "Add system-specific configuration" && git push origin master

Wait for deployment to complete.

Repeat the deployment process for pushing the code to all environments.
