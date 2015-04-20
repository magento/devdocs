---
layout: default
group: install 
subgroup: T_Command-line installation
title: Create the Magento database
menu_title: Create the Magento database
menu_node: 
menu_order: 30
github_link: install-gde/install/install-cli-subcommands-db.md
---

  
<h4>Contents</h4>

See one of the following sections:

*	<a href="#instgde-install-cli-first">First steps</a>
*	<a href="#instgde-cli-subcommands-store-prereq">Prerequisites</a>
*	TBD


<h2 id="instgde-cli-before">First steps</h2>
{% include install/first-steps-cli.html %}

<h2 id="instgde-cli-subcommands-db-prereq">Prerequisites</h2>
Before you run this command, you must <a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands-deployment.html">Create or update the deployment configuration, config.php</a>.

<h2 id="instgde-cli-dbconfig">Configure the database and add data</h2>
Command usage:

	php magento setup:db-schema:upgrade
	php magento setup:db-data:upgrade

To see the status of the database, enter

	php magento setup:db:status

#### Related topics

*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-install.html">Install the Magento software using the command line</a>

<!-- *	<a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands-enable.html">Enable and disable modules</a>
 -->
*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands-deployment.html">Create the deployment configuration, config.php</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-cli.html">Command line installation</a>