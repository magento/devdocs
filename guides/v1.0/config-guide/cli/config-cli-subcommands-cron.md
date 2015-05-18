---
layout: default
group: config-guide 
subgroup: CLI
title: Configure and run cron
menu_title: Configure and run cron
menu_node: 
menu_order: 8
github_link: config-guide/cli/config-cli-subcommands-cron.md
---


#### Contents

*	<a href="#config-cli-before">First steps</a>
*	<a href="#config-cli-cron-overview">Overview of cron</a>
*	<a href="#config-cli-cron-browser"Run cron from a web browser</a>
*	<a href="#config-cli-cron-group">Configure and run cron groups using the command line</a>


<h2 id="config-cli-before">First steps</h2>
{% include install/first-steps-cli.html %}

<h2 id="config-cli-cron-overview">Overview of cron</h2>
Several Magento features require at least one cron job, which schedules activities to occur in the future. A partial list of these activities follows:

*	Catalog price rules
*	Newsletters
*	Generating Google sitemaps
*	Customer Alerts/Notifications (product price change, product back in stock)
*	Reindexing
*	Private sales (Magento EE only)
*	Automatic updating of currency rates
*	All Magento e-mails (including order confirmation and transactional)

<div class="bs-callout bs-callout-warning">
    <p>You can no longer run <code>dev/tools/cron.sh</code> because the script has been removed.</p>
</div>

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>Magento depends on proper cron job configuration for many important system functions, including indexing. Failure to set it up properly means Magento won't function as expected.</p></span>
</div>

UNIX systems schedule tasks to be performed by particular users using a *crontab*, which is a file that contains instructions to the cron daemon that tell the daemon in effect to "run this command at this time on this date". Each user has its own crontab, and commands in any given crontab are executed as the user who owns the crontab.

For Magento, this user is the web server. To determine your web server's user, enter the following command:

	ps -o "user group command" -C httpd,apache2

In CentOS, the Apache user is typically `apache`; in Ubuntu, it's typically `www-data`

See one of the following sections:

*	<a href="#config-cli-cron-browser">Run cron from a web browser</a>
*	<a href="#config-cli-cron-group">Configure and run cron using the command line</a>

<h2 id="config-cli-cron-browser">Run cron from a web browser</h2>
You can run cron anytime using a web browser (for example, during development).

Before you run cron in the browser, remove the restriction from `.htaccess` as follows:

1.	Log in to your Magento server as a user with permissions to write to the Magento file system.
2.	Open `<your Magento install dir>/pub/.htaccess` in a text editor.
3.	Delete or comment out the following:

		## Deny access  to cron.php
    	<Files cron.php>
        	order allow,deny
        	deny from all
    	</Files>

    For example,

    	## Deny access  to cron.php
    	#<Files cron.php>
        #	order allow,deny
        #	deny from all
    	#</Files>

3.	Save your changes and exit the text editor.

You can then run cron in a web browser as follows:

	<your Magento host name or IP>/<Magento root>/pub/cron.php[?group=<group name>]

where

*	`<your Magento host name or IP>` is the host name or IP address of your Magento installation
*	`<Magento root>` is the docroot-relative directory to which you installed the Magento software
*	`<group name>` is any valid cron group name

For example,

	http://magento.example.com/magento2/pub/cron.php?group=default

TBD More information about cron groups.


<h2 id="config-cli-cron-group">Configure and run cron groups using the command line</h2>
TBD

Command options:

	php magento info:dependencies:{show-modules|show-modules-circular|show-framework} [-d|--directory="<path>"] [-o|--output="<path and filename"]

where

*	`{show-modules}` results in a module dependency report
*	`{show-modules-circular}` results in a circular dependency report
*	`{show-framework}` results in a framework dependency report

The following table discusses the meanings of this command's parameters and values. 

<table>
	<col width="25%">
	<col width="65%">
	<col width="10%">
	<tbody>
		<tr>
			<th>Parameter</th>
			<th>Value</th>
			<th>Required?</th>
		</tr>
		
	<tr>
		<td><p>-d|--directory</p></td>
		<td><p>Path to the base directory to start searching for report data.</p></td>
		<td><p>No</p></td>
	</tr>
	<tr>
		<td><p>-o|--output</p></td>
		<td><p>Specifies the absolute file system path and file name of the comma-separated value (csv) output file for the report.</p>
		</td>
		<td>
			<p>No</p>
		</td>
	</tr>
	</tbody>
</table>





#### Related topics

*	<a href="{{ site.gdeurl }}architecture/behavior/xlate.html">Translation</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-cache.html">Manage the cache</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-index.html">Manage the indexers</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-compiler-multi.html">Multi-tenant compiler</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-compiler-single.html">Single-tenant compiler</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-log.html">Clean the logs</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-static-view.html">Deploy static view files</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-less-sass.html">Create LESS from CSS</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-test.html">Run tests</a>
