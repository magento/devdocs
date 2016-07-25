---
layout: default 
group: compman
subgroup: 06_UseExtMan
title: Start the Extension Manager
menu_title: Start the Extension Manager
menu_node: 
menu_order: 2
version: 2.2
github_link: comp-mgr/extens-man/extensman-start.md
---

## Start the Extension Manager from the Magento Admin
To run the Extension Manager:

1.	If you haven't done so already, create or get your authentication keys [authentication keys]({{page.baseurl}}install-gde/prereq/connect-auth.html).
2.	Log in to the Magento Admin as an administrator.
3.	Click **System** > **Web Setup Wizard**.
4.	Click **Extension Manager** as the following figure shows.

	![Click the Extension Manager]({{ site.baseurl }}common/images/extens_mgr_select.png){:width="500px"}
	The following page displays.

	![Install or upgrade extensions]({{ site.baseurl }}common/images/extens_mgr_initial.png){:width="600px"}
5.	Continue with one of the following sections:

	*	[]()
	*	[]()
	*	[]()

### Choose an existing login
TBD

### Log in for the first time


4.	Enter your authentication keys in the provided fields.

	The following figure shows an example if you *have* already entered your keys.

	![Authentication keys entered in the Setup Wizard]({{ site.baseurl }}common/images/compman_auth-keys.png)

	<div class="bs-callout bs-callout-warning">
    	<p>You must use the same authentication keys you used to install the Magento software. For example, you <em>cannot</em> use Magento CE authentication keys to update or upgrade Magento EE or vice versa. You also <em>cannot</em> use:</p>
    	<ul><li>Another user's authentication keys</li>
    	<li><a href="http://docs.magento.com/m2/ce/user_guide/magento/magento-account-share.html" target="_blank">Shared account</a> authentication keys</li></ul>   
	</div>
5.	Click **Save Config**.
3.	Click **Extension Manager** and continue with <a href="{{page.baseurl}}comp-mgr/module-man/compman-main-pg.html">Manage your components</a>.

	To upgrade Magento system software instead, see <a href="{{page.baseurl}}comp-mgr/upgrader/upgrade-start.html">Run System Upgrade</a>.
