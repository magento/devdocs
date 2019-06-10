---
group: software-update-guide
subgroup: 05_UseCompMan
title: Start the Component Manager
menu_title: Start the Component Manager
menu_node:
menu_order: 2
redirect_from:
  - /guides/v2.1/comp-mgr/compman-start.html
functional_areas:
  - Upgrade
---

## Start the Component Manager from the Magento Admin {#compman-access}

To run the Component Manager:

1.	Log in to the [Magento Admin](https://glossary.magento.com/magento-admin) as an administrator.
2.	Click **System** > **Web Setup Wizard**.
	The following page displays.<br><br>
	![Specify whether to manage components or upgrade Magento]({{ site.baseurl }}/common/images/cman_upgr_initial.png)<br><br>
3.	Click **System Configuration**.
4.	If you haven't already done so, enter your [authentication keys]({{ page.baseurl }}/install-gde/prereq/connect-auth.html) in the provided fields.

	The following figure shows an example if you *have* already entered your keys.

	![Authentication keys entered in the Setup Wizard]({{ site.baseurl }}/common/images/compman_auth-keys.png)

	<div class="bs-callout bs-callout-warning" markdown="1">
	For upgrade or update, you must use the same authentication keys you used to install the Magento software. For example, you *cannot* use {{site.data.var.ce}} authentication keys to update or upgrade Magento EE or vice versa. You also *cannot* use:

	* Another user's authentication keys
	* [Shared account](http://docs.magento.com/m2/ce/user_guide/magento/magento-account-share.html){: target="_blank"} authentication keys
	</div>
5.	Click **Save Config**.
3.	Click **Component Manager** and continue with [Manage your components]({{ page.baseurl }}/comp-mgr/module-man/compman-main-pg.html).

	To upgrade Magento system software instead, see [Run System Upgrade]({{ page.baseurl }}/comp-mgr/upgrader/upgrade-start.html).
