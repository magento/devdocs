---
layout: default
group: install 
subgroup: T_Command-line installation
title: Get started with the command-line installation
menu_title: Get started with the command-line installation
menu_node: 
menu_order: 1
github_link: install-gde/install/install-cli-subcommands.md
---

  
<h4>Contents</h4>

See one of the following sections:

*	<a href="#instgde-install-cli-prereq">Before you start your installation</a>
*	<a href="#instgde-install-cli-first">First steps</a>
*	<a href="#instgde-cli-help">Command-line installer help commands</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-install.html">Installing the Magento software using the command line</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands-deployment.html">Create the deployment configuration, config.php</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands-enable.html">Enable and disable modules</a>
*	<a href="#instgde-cli-maint-configphp">Maintenance mode</a>
*	<a href="#instgde-cli-subcommands-uninstall">Uninstall</a>

<h2 id="instgde-install-cli-prereq">Before you start your installation</h2>
{% include install/before-you-begin-cli.html %}

The installer is designed to be run multiple times if necessary so you can:

*	Provide different values 

	For example, after you configure your web server for Secure Sockets Layer (SSL), you can run the installer to set SSL options.

*	Correct mistakes in previous installations
*	Install Magento in a different database instance

<h2 id="instgde-cli-before">First steps</h2>
{% include install/first-steps-cli.html %}

<h2 id="instgde-cli-help">Command-line installer help commands</h2>
To display a complete list of installer arguments, enter:

	php magento list

To get help for a particular argument, enter:

	php magento help <command>[:<option>]:<argument>

For example,

	php magento help setup:install
	php magento help setup:config:set

<h2 id="instgde-cli-subcommands-common">Common arguments</h2>
The following arguments are common to all installer commands:

<table>
	<tbody>
		<tr>
			<th>Long version</th>
			<th>Short version</th>
			<th>Meaning</th>
		</tr>
		
	<tr>
		<td>--help</td>
		<td>-h</td>
		<td>Get help for any argument. For example, <code>php magento help setup:install</code> or <code>php magento help setup:config:set</code>.</td>
	</tr>
	<tr>
		<td>--quiet</td>
		<td>-q</td>
		<td>Quiet mode; no output.</td>
	</tr>
	<tr>
		<td>--no-interaction</td>
		<td>-n</td>
		<td>No interactive questions.</td>
	</tr>
	<tr>
		<td>--verbose=1|2|3</td>
		<td>-v|vv|vvv</td>
		<td>Verbosity level. For example, <code>--verbose=3</code> or <code>-vvv</code> displays debug verbosity, which is the most verbose output. Default is <code>--verbose=1</code> or <code>-v</code>.</td>
	</tr>
	<tr>
		<td>--version</td>
		<td>-V</td>
		<td>Display this application version</td>
	</tr>
	<tr>
		<td>--ansi</td>
		<td>n/a</td>
		<td><a href="http://symfony.com/doc/current/components/console/usage.html" target="_blank">Force ANSI output</a></td>
	</tr>
		<tr>
		<td>--no-ansi</td>
		<td>n/a</td>
		<td><a href="http://symfony.com/doc/current/components/console/usage.html" target="_blank">Disable ANSI output</a></td>
	</tr>
	<tr>
		<td>db_prefix</td>
		<td><p>Use only if you're installing the Magento database tables in a database instance that has Magento tables in it already.</p>
		<p>In that case, use a prefix to identify the Magento tables for this installation. Some customers have more than one Magento instance running on a server with all tables in the same database.</p>
		<p>This option enables those customers to share the database server with more than one Magento installation.</p></td>
		<td>No</td>
	</tr>
	
	</tbody>
</table>

 --magento_init_params           Add to any command to customize Magento initialization parameters
                                 For example: 'MAGE_MODE=developer&MAGE_DIRS[base][path]=/var/www/examp                          le.com&MAGE_DIRS[cache][path]=/var/tmp/cache'
 
 
 
 


<h2 id="instgde-cli-subcommands">Command line installer arguments</h2>
The following sections discuss the available arguments.

*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-install.html">Installing the Magento software using the command line</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands-deployment.html">Create the deployment configuration, config.php</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands-enable.html">Enable and disable modules</a>
*	<a href="#instgde-cli-subcommands-update">Update the database</a>
*	<a href="#instgde-cli-maint-configphp">Maintenance mode</a>
*	<a href="#instgde-cli-subcommands-uninstall">Uninstall</a>

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>Not all arguments are currently documented. Provide us input by <a href="{{ site.githuburl }}install-gde/install/install-cli-subcommands.md }}">editing this page on GitHub</a>.</p></span>
</div>



#### Related topics

*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-install.html">Install the Magento software using the command line</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands-enable.html">Enable and disable modules</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands-deployment.html">Create the deployment configuration, config.php</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-cli.html">Command line installation</a>