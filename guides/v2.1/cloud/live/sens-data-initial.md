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

_This topic just started, ignore for now_

This topic discusses how to manage file optimization settings in your integration system. _File optimization_ means merging and minifying JavaScript and Cascading Style Sheets, and minifying HTML templates.

File optimization should be enabled in integration (where you're testing) and disabled in staging and production. File optimization has an adverse affect on performance so you shouldn't enable it in staging or production.

You can use the procedure discussed in this topic to manage any system-specific configuration settings. 

To manage _sensitive_ configuration settings, see TBD.

## Prerequisites
Before you continue, make sure you have done all of the following:

*	Set up a [local Magento environment]({{ page.baseurl }}cloud/access-acct/set-up-env.html) from the `master` branch of your integration system.
*	Created and configured stores and pushed the configuration to your integration system.
*	Reviewed our [recommended procedure]({{ page.baseurl }}cloud/live/sens-data-over.html##cloud-config-specific-recomm) for managing the configuration

{% collapsibleh2 Get started %}

To get started:

1.	On your local system, switch to the [Magento file system owner]({{ page.baseurl }}install-gde/prereq/file-sys-perms-over.html).
2.	Log in to your Magento Enterprise Cloud Edition project.

		magento-cloud login
3.	Switch to the project root directory.
4.	Find teh current branch.

		git branch
4.	If necessary, [merge changes in the current]({{ page.baseurl }}cloud/howtos/environment-tutorial-env-merge.html) branch with the `master` branch.
5.	Switch to the master branch locally.

		magento-cloud environment:checkout master
6.	Pull updated code.

		git pull origin master
		
{% endcollapsibleh2 %}

{% collapsibleh2 Create config.local.php on the integration server %}
This section discusses how to create `config.local.php` on the integration server. This procedure corresponds to step B, 1&ndash;2 of our [recommended procedure]({{ page.baseurl }}cloud/live/sens-data-over.html#cloud-config-specific-recomm).

To create `config.local.php` on the integration server:

{% include cloud/sens-data-create-config-local.md %}

{% endcollapsibleh2 %}

{% collapsibleh2 Push config.local.php to the integration server %}
Now that you've created `config.local.php` and transferred it to your local system, commit it to Git and push it to your integration server. This procedure corresponds to step B, 3&mdash;4 of our [recommended procedure]({{ page.baseurl }}cloud/live/sens-data-over.html#cloud-config-specific-recomm).

	git add app/etc/config.local.php && git commit -m "Add system-specific configuration" && git push origin master

Wait for deployment to complete.

{% endcollapsibleh2 %}

{% collapsibleh2 Verify your configuration changes %}
After you push `config.local.php` to your integration server, any values you changed should be unavailable in the Magento Admin.

The following procedure assumes you changed locale settings (such as store time zone).

A snippet from `config.local.php` follows:

<pre class="no-copy">
 'store_information' =>
     array (
      'name' => 'Our store',
      'phone' => '1-512-555-1212',
      'hours' => NULL,
      'country_id' => 'US',
      'region_id' => '57',
      'postcode' => NULL,
      'city' => NULL,
      'street_line1' => NULL,
      'street_line2' => NULL,
      'merchant_vat_number' => NULL,
   ),
</pre>

In this example, several fields, including the name and telephone number of the store, should not be editable in the Admin.

To verify your configuration changes:

1.	Find your integration server's URL:

		magento-cloud environment:url
2.	Find your Magento Admin login information:

		magento-cloud variable:list
3.	Using the information from the preceding steps, log in to the integration server's Admin.
4.	Click **Stores** > Settings > **Configuration** > General > **General**.
5.	In the right pane, expand **Store Information**.

	Notice several fields cannot be edited, as shown in the following sample.

	![Can't edit certain values in the Admin]({{ site.baseurl }}common/images/cloud_var_not-editable.png){:width="550px"}

To change other configuration values, see the next section.

{% endcollapsibleh2 %}


{% collapsibleh2 Change system-specific configuration settings %}
This section discusses how to change system-specific settings. Our [recommended procedure]({{ page.baseurl }}cloud/live/sens-data-over.html#cloud-config-specific-recomm) is to make the changes on the integration server and repeat the process of creating `config.local.php` and pushing it back to the integration server.

For this example, we'll use file optimization settings. If you've already changed those settings, you can use this procedure to set other options of your choosing.

### Change configuration values in the integration server Admin
1.	Find your integration server's URL:

		magento-cloud environment:url
2.	Find your Magento Admin login information:

		magento-cloud variable:list
3.	Using the information from the preceding steps, log in to the integration server's Admin.
4.	Click **Stores** > Settings > **Configuration** > **Advanced** > **Developer**.
5.	In the right pane, expand **Template Settings**.
6.	Clear the **Use default value** check box next to the **Minify Html** list.
7.	From the **Minify Html** list, click **Yes**.
5.	In the right pane, expand **CSS Settings**.
6.	From the **Merge CSS Files** list, click **Yes**.
7.	From the **Minify CSS Files** list, click **Yes**.

	The following figure shows an example.

	![Set file optimization settings]({{ site.baseurl }}common/images/cloud_vars_set-minify.png){:width="550px"}
8.	Click **Save Config**.

### Delete config.local.php on the integration server
Before you can create a new `config.local.php` on the integration server, you must delete the existing one because we don't overwrite an existing file.

To delete `config.local.php`:

1.	On your local system, make sure you're on the `master` branch.
2.	SSH to the integration server:

		magento-cloud ssh
3.	Delete `config.local.php`.

		rm app/etc/config.local.php
4.	Close the SSH tunnel.

		exit

### Add the changes to config.local.php
{% include cloud/sens-data-create-config-local.md %}

### Push the changes to Git
To push your changes, enter the following command:

	git add app/etc/config.local.php && git commit -m "Add system-specific configuration" && git push origin master

Wait for deployment to complete.

{% endcollapsibleh2 %}





