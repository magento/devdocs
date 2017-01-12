---
layout: default
group: cloud
subgroup: 40_live
title: Manage system-specific settings 
menu_title: Manage system-specific settings
menu_order: 15
menu_node: 
level3_menu_node: level3child
level3_subgroup: sens-data
version: 2.1
github_link: cloud/live/sens-data-initial.md
---

This topic discusses how to manage default locale and file optimization settings in your integration system. _File optimization_ means merging and minifying JavaScript and Cascading Style Sheets, and minifying HTML templates. File optimization should be disabled in integration (where you're testing) and enabled in staging and production.  

These settings are discussed only to explain how the procedure works; you can use the same procedure to manage any available settings. For a complete list of settings, see [List of system-specific configuration settings]({{ page.baseurl }}cloud/live/sens-data-over.html#cloud-config-specific-list). 

To manage _sensitive_ configuration settings, see [Manage sensitive configuration values]({{ page.baseurl }}cloud/live/sens-data-mg-sens.html).

## Required role
To complete the tasks discussed in this topic, you must have at minimum a project reader role with [environment administrator]({{ page.baseurl }}cloud/admin/admin-user-admin.html#loud-role-env) privileges.

## Prerequisites
Before you continue, make sure you have done all of the following.

### Reviewed the procedure
Review our [recommended procedure]({{ page.baseurl }}cloud/live/sens-data-over.html##cloud-config-specific-recomm) for managing the configuration.

### Change settings in the integration server Admin
This section discusses how to change the locale for the Default Config and also how to change file optimization settings in the integration server. You can change different settings if you wish; see [List of system-specific configuration settings]({{ page.baseurl }}cloud/live/sens-data-over.html#cloud-config-specific-list) for details.

#### Step 1: Get started

To get started:

1.	On your local system, switch to the [Magento file system owner]({{ page.baseurl }}install-gde/prereq/file-sys-perms-over.html).
2.	Log in to your Magento Enterprise Cloud Edition project.

		magento-cloud login
3.	Switch to the project root directory.
4.	Find the current branch.

		git branch
4.	If necessary, [merge changes in the current]({{ page.baseurl }}cloud/howtos/environment-tutorial-env-merge.html) branch with the `master` branch.
5.	Switch to the master branch locally.

		magento-cloud environment:checkout master
6.	Pull updated code.

		git pull origin master
		
#### Step 2: Find Admin login information
To find login information for the integration server Admin:

1.	Log in to your local system as the Magento file system owner.
2.	Log in to your Magento Enterprise Cloud Edition project:

		magento-cloud login
3.	Find the integration server URL and Admin login information:

		magento-cloud environment:url
		magento-cloud variable:list
4.	Using the preceding information, log in to the integration server's Admin.

#### Step 3: Change settings
To change locale and file optimization settings:

1.	Click **Stores** > Settings > **Configuration** > General > **General**. 
2.	In the right pane, expand **Locale Options**. 
3.	From the **Locale** list, change the locale. (You can change it back later.)
4.	Click **Save Config**.
5.	Click **Advanced** > **Developer**.
5.	In the right pane, expand **Template Settings**.
6.	Clear the **Use default value** check box next to the **Minify Html** list.
7.	From the **Minify Html** list, click **No**.
5.	In the right pane, expand **CSS Settings**.
6.	From the **Merge CSS Files** list, click **No**.
7.	From the **Minify CSS Files** list, click **No**.

	The following figure shows an example.

	![Set file optimization settings]({{ site.baseurl }}common/images/cloud_vars_set-minify.png){:width="550px"}
8.	Click **Save Config**.
9.	If prompted, [flush the Magento cache](http://docs.magento.com/m2/ee/user_guide/system/cache-management.html){:target="_blank"}.
10.	Log out of the Magento Admin.

{% collapsibleh2 Create config.local.php and transfer it to your local system %}
This section discusses how to create `config.local.php` on the integration server. This procedure corresponds to step B, 1&ndash;2 of our [recommended procedure]({{ page.baseurl }}cloud/live/sens-data-over.html#cloud-config-specific-recomm). After you create `config.local.php`, transfer it to your local system so you can add it to Git.

To create `config.local.php` on the integration server:

{% include cloud/sens-data-create-config-local.md %}

The following snippet from `config.local.php` show an example of changing the default locale to `en_GB` and file optimization settings:

<pre class="no-copy">
 'general' =>
      array (
        'locale' =>
        array (
          'code' => 'en_GB',
          'timezone' => 'America/Chicago',
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

{% endcollapsibleh2 %}

{% collapsibleh2 Push config.local.php to the integration server %}
Now that you've created `config.local.php` and transferred it to your local system, commit it to Git and push it to your integration server. This procedure corresponds to step B, 3&mdash;4 of our [recommended procedure]({{ page.baseurl }}cloud/live/sens-data-over.html#cloud-config-specific-recomm).

	git add app/etc/config.local.php && git commit -m "Add system-specific configuration" && git push origin master

Wait for deployment to complete.

{% endcollapsibleh2 %}

{% collapsibleh2 Verify your configuration changes %}
After you push `config.local.php` to your integration server, any values you changed should be unavailable in the Magento Admin.

In this example, the default locale and file optimization settings should not be editable in the Admin.

To verify your configuration changes:

1.	If you haven't done so already, log out of the integration server's Magento Admin.
2.	Log back in to the Admin.
4.	Click **Stores** > Settings > **Configuration** > General > **General**.
5.	In the right pane, expand **Locale Options**.

	Notice several fields cannot be edited, as shown in the following sample.

	![Can't edit certain values in the Admin]({{ site.baseurl }}common/images/cloud_var_not-editable.png){:width="550px"}
6.	Click Click **Stores** > Settings > **Configuration** > Advanced > **Developer**.
7.	In the right pane, click 

	Notice several fields cannot be edited, as shown in the following sample.

	![Can't edit certain values in the Admin ]({{ site.baseurl }}common/images/cloud_var_not-editable2.png)
8.	Log out of the Magento Admin.

{% endcollapsibleh2 %}

{% collapsibleh2 Change system-specific configuration settings %}
This section discusses how to change system-specific settings. Our [recommended procedure]({{ page.baseurl }}cloud/live/sens-data-over.html#cloud-config-specific-recomm) is to make the changes on the integration server and repeat the process of creating `config.local.php` and pushing it back to the integration server.

For this example, we'll use file optimization settings. If you've already changed those settings, you can use this procedure to set other options of your choosing.

### Delete config.local.php on the integration server
Before you can change settings on the integration server, you should delete `app/etc/config.local.php` so all settings are available in the Admin. (Any non-default setting in `config.local.php` is uneditable in the Admin.)

To delete `config.local.php`:

1.	On your local system, make sure you're on the `master` branch.
2.	SSH to the integration server:

		magento-cloud ssh
3.	Delete `config.local.php`.

		rm app/etc/config.local.php
4.	Close the SSH tunnel.

		exit

### Change configuration values in the integration server Admin
To change values in the Admin:

1.	If you haven't done so already, log out of the Magento Admin.
1.	Log in to the integration server's Admin.
4.	Click **Stores** > Settings > **Configuration** > **Advanced** > **Developer**.
5.	In the right pane, expand **Template Settings**.
6.	Clear the **Use default value** check box next to the **Minify Html** list.
7.	From the **Minify Html** list, click **Yes**.
5.	In the right pane, expand **CSS Settings**.
6.	From the **Merge CSS Files** list, click **Yes**.
7.	From the **Minify CSS Files** list, click **Yes**.

	The following figure shows an example.

	![Set file optimization settings]({{ site.baseurl }}common/images/cloud_vars_reset-minify.png){:width="550px"}
8.	Click **Save Config**.
9.	If prompted, [flush the Magento cache](http://docs.magento.com/m2/ee/user_guide/system/cache-management.html){:target="_blank"}.
10.	Log out of the Magento Admin.

### Add the changes to config.local.php
{% include cloud/sens-data-create-config-local.md %}

### Push the changes to Git
To push your changes, enter the following command:

	git add app/etc/config.local.php && git commit -m "Add system-specific configuration" && git push origin master

Wait for deployment to complete.

{% endcollapsibleh2 %}





