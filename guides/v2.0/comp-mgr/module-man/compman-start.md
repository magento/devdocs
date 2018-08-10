---
group: compman
subgroup: 05_UseCompMan
title: Start the Component Manager
menu_title: Start the Component Manager
menu_node:
menu_order: 2
version: 2.0
redirect_from:
  - /guides/v2.0/comp-mgr/compman-start.html
  - /guides/v2.1/comp-mgr/compman-start.html
  - /guides/v2.2/comp-mgr/compman-start.html
  - /guides/v2.3/comp-mgr/compman-start.html
functional_areas:
  - Upgrade
---

## Start the Component Manager from the Magento Admin   {#compman-access}

To run the Component Manager:

1.	Log in to the {% glossarytooltip 18b930cf-09cc-47c9-a5e5-905f86c43f81 %}Magento Admin{% endglossarytooltip %} as an administrator.
2.	Click **System** > **Web Setup Wizard**.
	The following page displays.<br><br>
	<img src="{{ site.baseurl }}/common/images/cman_upgr_initial.png" width="650px" alt="Specify whether to manage components or upgrade Magento"><br><br>
3.	Click **System Configuration**.
4.	If you haven't already done so, enter your [authentication keys]({{ page.baseurl }}/install-gde/prereq/connect-auth.html) in the provided fields.

	The following figure shows an example if you *have* already entered your keys.

	![Authentication keys entered in the Setup Wizard]({{ site.baseurl }}/common/images/compman_auth-keys.png)

	<div class="bs-callout bs-callout-warning">
    	<p>For upgrade or update, you must use the same authentication keys you used to install the Magento software. For example, you <em>cannot</em> use {{site.data.var.ce}} authentication keys to update or upgrade Magento EE or vice versa. You also <em>cannot</em> use:</p>
    	<ul><li>Another user's authentication keys</li>
    	<li><a href="http://docs.magento.com/m2/ce/user_guide/magento/magento-account-share.html" target="_blank">Shared account</a> authentication keys</li></ul>   
	</div>
5.	Click **Save Config**.
3.	Click **Component Manager** and continue with <a href="{{ page.baseurl }}/comp-mgr/module-man/compman-main-pg.html">Manage your components</a>.

	To upgrade Magento system software instead, see <a href="{{ page.baseurl }}/comp-mgr/upgrader/upgrade-start.html">Run System Upgrade</a>.
