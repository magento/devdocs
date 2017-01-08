---
layout: default
group: cloud
subgroup: 40_live
title: Manage file optimization settings 
menu_title: Manage file optimization settings
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
This section discusses how to create `config.local.php` on the integration server. Before you continue, make sure the `master` branch on the integration server is up-to-date with all the store configuration you've created on your local system.

To create `config.local.php` on the integration server:

1.	Find the integration server's SSH URL.

		magento-cloud environment:ssh --pipe -e master
2.	Create `config.local.php` on the integration server.

		ssh -k <SSH URL>@ssh.us.magentosite.cloud "php bin/magento app:config:dump"

	For example,

		ssh -k itnu84v4m4e5k-prod1-ouhx5wq@ssh.us.magentosite.cloud "php bin/magento app:config:dump"
3.	If you haven't done so already, change to the project root directory.
4.	Transfer `config.local.php` to your local system.

		rsync -avz -e "ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null" --progress <SSH URL>@ssh.us.magentosite.cloud:/app/app/etc/config.local.php ./app/etc

{% endcollapsibleh2 %}

{% collapsibleh2 Push config.local.php to the integration server %}
Now that you've created `config.local.php` and transferred it to your local system, commit it to Git and push it to your integration server as follows:

	git add app/etc/config.local.php && git commit -m "Add system-specific configuration" && git push origin master

Wait for deployment to complete.

{% endcollapsibleh2 %}

{% collapsibleh2 Verify your configuration changes %}
After you push `config.local.php` to your integration server, any values you changed should be unavailable in the Magento Admin.

The following procedure assumes you changed locale settings (such as store time zone).

To verify your configuraiton changes:

1.	

{% endcollapsibleh2 %}