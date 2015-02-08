---
layout: default
group: install 
subgroup: T_Command-line installation
title: Command line installation
menu_title: Command line installation
menu_node: parent
menu_order: 1
github_link: install-gde/install/install-cli.md
---

  
<h4>Contents</h4>

See one of the following sections:

*	<a href="#instgde-install-cli-prereq">Before you start your installation</a>
*	<a href="#instgde-install-cli-first">First steps</a>
*	<a href="#instgde-install-cli-magento">Installing the Magento software from the command line</a>
*	<a href="#instgde-install-magento-update">Updating the Magento software</a>
*	<a href="#instgde-install-magento-reinstall">Reinstalling the Magento software</a>

<h2 id="instgde-install-cli-prereq">Before you start your installation</h2>

Before you begin, make sure that:

1.	Your system meets the requirements discussed in <a href="{{ site.gdeurl }}install-gde/system-requirements.html">Magento System Requirements</a>.
2.	You completed all prerequisite tasks discussed in <a href="{{ site.gdeurl }}install-gde/prereq/prereq-overview.html">Prerequisites</a>.
3.	You installed Composer and cloned the Magento GitHub repository as discussed in <a href="{{ site.gdeurl }}install-gde/install/composer-clone.html">Install Composer and clone the Magento GitHub repository</a>.
4.	After you log in to the Magento server, switch to the web server user as discussed in <a href="{{ site.gdeurl }}install-gde/install/prepare-install.html#install-update-depend-apache">Switching to the Apache user</a>.

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>You must install Magento from its <code>setup</code> subdirectory.</p></span>
</div>

<h2 id="instgde-install-cli-first">First steps</h2>

Before you begin:

1.	Log in to the Magento server as, or <a href="{{ site.gdeurl }}install-gde/install/prepare-install.html#install-update-depend-apache">switch to</a>, the web server user.
2.	Change to the following directory:

		cd <your Magento install dir>/setup
	
	<p>Examples:</p>
	
	*	Ubuntu: `cd /var/www/magento2/setup`
	*	CentOS: `cd /var/www/html/magento2/setup`

#### Next steps

*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands.html">Get started with the command-line installation</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-install.html">Install the Magento software using the command line</a>