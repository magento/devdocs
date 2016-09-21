---
layout: default 
group: compman
subgroup: 26_CE-EEUpgrade
title: Upgrade from CE to EE
menu_title: Upgrade from CE to EE
menu_node: parent
menu_order: 1
version: 2.0
github_link: comp-mgr/upgrader/ce-ee-upgrade-start.md
---

<h2 id="compman-overview">Overview of Magento Community Edition (CE) to Magento Enterprise Edition (EE) upgrade</h2>
This section discusses how to upgrade Magento CE to Magento EE.

<div class="bs-callout bs-callout-info" id="info">
	<p>You must be authorized for Magento EE to perform the tasks discussed in this topic.</p>
</div>

<h2 id="compman-prereq">Prerequisites</h2>
Before continuing, complete all tasks discussed in <a href="{{page.baseurl}}comp-mgr/prereq/prereq_compman.html">Prerequisites</a>.

In addition, you might need to install the PHP <a href="http://php.net/manual/en/book.bc.php" target="_blank">`bcmath`</a> extension, which is required by EE. Examples follow:

*	CentOS (using the `webtatic` repository): `yum -y install php56w-bcmath`
*	Ubuntu (using the `ppa:ondrej/php5-5.6` repository): `apt-get -y install php5-bcmath`

<div class="bs-callout bs-callout-info" id="info">
	<p>Make sure you are authorized for Magento EE access before you continue. Contact <a href="http://support.magentocommerce.com" target="_blank">Magento Support</a> if you have questions.</p>
</div>

<h2 id="compman-access">Start System Upgrade from the Magento Admin</h2>
To run System Upgrade:

1.	Log in to the Magento Admin as an administrator.
2.	Click **System** > **Web Setup Wizard**.
	The following page displays.<br><br>
	<img src="{{ site.baseurl }}common/images/cman_upgr_initial.png" width="650px" alt="Specify whether to manage components or upgrade Magento">
3.	Click **System Upgrade**.

	Magento begins searching for core module updates immediately. To also search for component updates, click **Yes**. A sample follows:

	<img src="{{ site.baseurl }}common/images/upgr_initial-pg.png" width="650px" alt="Magento begins searching for upgrades right away">

	The page displays similar to the following when we find components to upgrade.<br><br>
	<img src="{{ site.baseurl }}common/images/upgr-ee-version-list.png" width="750px" alt="Magento finds software to upgrade"><br><br>

	From the list, click the version to which to upgrade. Typically, you'll choose the most recent version (indicated by **(latest)**.)

After the upgrade completes, restart Varnish if you use it for page caching.

	service varnish restart

#### Errors
*	The following error can indicate one of several issues, including that you haven't entered your <a href="{{page.baseurl}}comp-mgr/prereq/prereq_auth-token.html">authentication keys</a> in the Magento Admin:

	<img src="{{ site.baseurl }}common/images/upgr-sorry.png" width="600px">

	For suggested solutions to other causes indicated by this message, see <a href="{{page.baseurl}}comp-mgr/trouble/cman/were-sorry.html">troubleshooting</a>.

*	The following error might display:

		[2016-01-19 23:33:24 UTC] An error occurred while executing job 
		"setup:upgrade {"command":"setup:upgrade"}": Could not complete 
		setup:upgrade {"command":"setup:upgrade"} successfully: Source 
		class "\Cybersource" for "CybersourceLogger" generation does not exist.

	For more information, see <a href="{{page.baseurl}}comp-mgr/trouble/cman/ce-ee-upgrade.html">Error upgrading from CE to EE</a>.



<h2 id="ce-ee-continue">Continue your upgrade</h2>
From here, your upgrade is the same as any other upgrade. Continue with <a href="{{page.baseurl}}comp-mgr/upgrader/upgrade-main-pg.html">Step 1. Select versions to upgrade</a>.
