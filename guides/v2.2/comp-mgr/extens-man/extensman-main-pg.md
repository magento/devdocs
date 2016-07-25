---
layout: default 
group: compman
subgroup: 06_UseExtMan
title: Start the Extension Manager
menu_title: Start the Extension Manager
menu_node: 
menu_order: 2
version: 2.2
github_link: comp-mgr/extens-man/extensman-main-pg.md
---

## Start the Extension Manager from the Magento Admin
To run the Extension Manager:

1.	If you haven't done so already, create or get your authentication keys [authentication keys]({{page.baseurl}}install-gde/prereq/connect-auth.html).
2.	Log in to the Magento Admin as an administrator.
3.	Click **System** > **Web Setup Wizard**.
4.	Click **Extension Manager** as the following figure shows.

	![Click the Extension Manager]({{ site.baseurl }}common/images/extens_mgr_select.png){:width="500px"}

	The following page displays.

	![Install or upgrade extensions]({{ site.baseurl }}common/images/extens_mgr_initial.png){:width="500px"}
5.	Continue with one of the following sections:

	*	[Choose an existing login](#extens-login-exist)
	*	[Log in for the first time](#extens-login-first)
	*	[]()

To upgrade Magento system software instead, see <a href="{{page.baseurl}}comp-mgr/upgrader/upgrade-start.html">Run System Upgrade</a>.

<div class="bs-callout bs-callout-warning">
   	<p>You must use the same authentication keys you used to install the Magento software. For example, you <em>cannot</em> use Magento CE authentication keys to update or upgrade Magento EE or vice versa. You also <em>cannot</em> use:</p>
   	<ul><li>Another user's authentication keys</li>
   	<li><a href="http://docs.magento.com/m2/ce/user_guide/magento/magento-account-share.html" target="_blank">Shared account</a> authentication keys</li></ul>   
</div>

### Choose an existing login {#extens-login-exist}
TBD Not implemented?

### Log in for the first time {#extens-login-first}
To log in to the Extension Manager if you haven't logged in before:

1.	Enter your authentication keys in the provided fields.

	TBD
2.	Click **Submit**.
3.	Continue with TBD.

## Choose components to install or uninstall
After you log in to the Extension Manager, a list of components available to install or update displays as follows:

![Choose components to install, update, or uninstall]({{ site.baseurl }}common/images/extens_mgr_updates.png){:width="400px"}

*	Updates Available displays the number of components you can update.
*	Ready to Install displays the number of components you can install.
*	Refresh displays the last time you refreshed the list of components on Magento Marketplace. 

	Click **Refresh** to update the information, such as after you purchase new components.

Click the Review button corresponding to which action you'd like to take and continue with one of the following sections.

## Install or uninstall components

{% collapsible To install or uninstall components: %}

1.	Select the check box next to each component, or click **Select All** from the list.
2.	After you select components, click the **Install** or **Uninstall** link next to a component.
3.	Continue with [Step 1. Readiness check]({{ page.baseurl }}comp-mgr/extens-man/extensman-readiness.html).


{% endcollapsible %}

## Update components

{% collapsible To update components: %}

TBD

{% endcollapsible %}






