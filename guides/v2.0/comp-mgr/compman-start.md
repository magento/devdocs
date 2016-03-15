---
layout: default 
group: compman
subgroup: C_UseCompMan
title: Run the Component Manager
menu_title: Run the Component Manager
menu_node: parent
menu_order: 1
github_link: comp-mgr/compman-start.md
---

<h2 id="compman-overview">Overview of the Component Manager</h2>
This section discusses how to start the Component Manager, which updates or uninstalls Magento components:

*	Modules (extend Magento capabilities)
*	Themes (change the look and feel of your storefront and Admin)
*	Language packages (localize the storefront and Admin)

<div class="bs-callout bs-callout-warning">
    <p>If you installed the Magento application by <a href="{{ site.gdeurl }}install-gde/prereq/dev_install.html">cloning the GitHub repository</a>, you <em>cannot</em> use the Component Manager utility to update components. Instead, you must <a href="{{ site.gdeurl }}install-gde/install/cli/dev_options.html">update them manually</a>.</p>
</div>

<h2 id="compman-prereq">Prerequisites</h2>
Before continuing, complete all tasks discussed in <a href="{{ site.gdeurl }}comp-mgr/prereq/prereq_compman.html">Prerequisites</a>.

<h2 id="compman-access">Start the Component Manager from the Magento Admin</h2>
To run the Component Manager:

1.	Log in to the Magento Admin as an administrator.
2.	Click **System** > **Web Setup Wizard**.
	The following page displays.<br><br>
	<img src="{{ site.baseurl }}common/images/cman_upgr_initial.png" width="650px" alt="Specify whether to manage components or upgrade Magento"><br><br>
3.	Click **Component Manager** and continue with <a href="{{ site.gdeurl }}comp-mgr/compman-main-pg.html">Manage your components</a>.

	You have the following options from this page:

	*	To enter your authentication keys so you can use the Component Manager and System Upgrade utilities, see <a href="{{ site.gdeurl }}comp-mgr/prereq/prereq_auth-token.html">Enter your authentication keys in the Admin</a>.
	*	To upgrade Magento instead, see <a href="{{ site.gdeurl }}comp-mgr/upgrader/upgrade-start.html">Run System Upgrade</a>.