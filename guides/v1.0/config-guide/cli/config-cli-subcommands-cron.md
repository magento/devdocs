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
*	<a href="#config-cli-cron-bkg">Run cron in the background</a>
*	<a href="#config-cli-cron-browser">Run cron from a web browser</a>
*	<a href="#config-cli-cron-group">Configure and run cron using the command line</a>


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

See one of the following sections:

*	<a href="#config-cli-cron-bkg">Run cron in the background</a>
*	<a href="#config-cli-cron-browser">Run cron from a web browser</a>
*	<a href="#config-cli-cron-group">Configure and run cron using the command line</a>

<h2 id="config-cli-cron-bkg">Run cron in the background</h2>
This section discusses how to run all Magento cron jobs every minute, which is the recommended interval for both Magento Community Edition (CE) and Enterprise Edition (EE).

First, determine the user cron should run as. For Magento, you should run cron as the web server user. To determine your web server's user ID, enter the following command:

	ps -o "user group command" -C httpd,apache2

In CentOS, the Apache user is typically `apache`; in Ubuntu, it's typically `www-data`

To create a cron job as the user who runs Apache, the following commands in the order shown:

1.	Create or edit a crontab for the Apache user:

		crontab -u <apache user name> -e

	A text editor displays. (You might need to choose a text editor first.)
2.	In the editor, enter the following:

		*/1 * * * * php <your Magento install dir>/bin/magento cron:run &

	For example, for CentOS,

		*/1 * * * * php /var/www/html/magento2/bin/magento cron:run &

Save your changes to the crontab and exit the editor.

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

	The exact URL you use to run the Magento application depends on how you configured your web server and virtual host.
*	`<group name>` is any valid cron group name

For example,

	http://magento.example.com/magento2/pub/cron.php?group=default

<a href="#config-cli-cron-group-conf">More information about cron groups</a>.

<h2 id="config-cli-cron-group">Configure and run cron using the command line</h2>
A *cron group* is a logical group that enables you to easily run cron for more than one process at a time. Most Magento modules use the `default` cron group; some modules use the `index` group.

If you're implementing cron for a custom module, it's your choice of whether or not to use the `default` group or a different group.

<h3 id="config-cli-cron-group-conf">Configure cron groups</h3>
This section discusses how to optionally create a cron group for a custom module. If you don't need to do this, continue with the next section.

To configure a cron group for your module, create `<your Magento install dir>/app/code/<VendorName>/<ModuleName>/etc/crontab.xml` with the following contents:

	<config>
    	<group id="%group_name%">
	        <job name="%job_name%" instance="%classpath%" method="%method%">
	            <schedule>%time%</schedule>
	        </job>
	    </group>
	</config>

The following table discusses the meanings of the options.

<table>
	<col width="25%">
	<col width="65%">
	<tbody>
		<tr>
			<th>Value</th>
			<th>Description</th>
		</tr>
		
	<tr>
		<td><p>%group_name%</p></td>
		<td><p>Name of the cron group. The group name doesn't have to be unique.</p>
			<p>You can run cron for one group at a time.</p></td>
	</tr>
	<tr>
		<td><p>%job_name%</p></td>
		<td><p>Unique ID for this cron job.</p>
		</td>		
	</tr>
	<tr>
		<td><p>%classpath%</p></td>
		<td><p>Classpath.</p></td>		
	</tr>
	<tr>
		<td><p>%method%</p></td>
		<td><p>Method in <code>%classpath%</code> to call.</p></td>		
	</tr>
	<tr>
		<td><p>%time%</p></td>
		<td><p>Schedule in <a href="http://www.nncron.ru/help/EN/working/cron-format.htm" target="_blank">cron format</a>.</p>
			<p>Omit this parameter if the schedule is defined in the Magento database or other storage.</p></td>		
	</tr>
	</tbody>
</table>

In addition, the `<group>` element supports the following options, all of which run in store view scope:

<table>
	<col width="25%">
	<col width="65%">
	<tbody>
		<tr>
			<th>Option</th>
			<th>Description</th>
		</tr>
		
	<tr>
		<td><p>schedule_generate_every</p></td>
		<td><p>Determines the frequency, in minutes, that schedules are written to the <code>cron_schedule</code> table.</p></td>
	</tr>
	<tr>
		<td><p>schedule_ahead_for</p></td>
		<td><p>Determines the number of minutes in advance that schedules are written to the <code>cron_schedule</code> table.</p>
		</td>		
	</tr>
	<tr>
		<td><p>schedule_lifetime</p></td>
		<td><p>Schedule lifetime in minutes.</p></td>		
	</tr>
	<tr>
		<td><p>history_cleanup_every</p></td>
		<td><p>Determines the number of minutes that pass before the cron history is cleaned.</p></td>		
	</tr>
	<tr>
		<td><p>history_success_lifetime</p></td>
		<td><p>Determines the number of minutes that the record of successfully completed cron jobs are kept in the database.</p></td>		
	</tr>
	<tr>
		<td><p>history_failure_lifetime</p></td>
		<td><p>Determines the number of minutes that the record of failed cron jobs are kept in the database.</p></td>		
	</tr>
	<tr>
		<td><p>use_separate_process</p></td>
		<td><p>If set to <code>1</code>, all cron jobs in this group run in parallel as separate processes.</p>
			<p>If set to <code>0</code>, all cron jobs in this group run one after the other as separate processes.</p></td>		
	</tr>
	</tbody>
</table>


As an example, see <a href="{{ site.mage2000url }}app/code/Magento/Customer/etc/crontab.xml" target="_blank">Magento_Customer crontab.xml</a>

<h3 id="config-cli-cron-group-run">Run cron from the command line</h3>
Command options:

	php magento cron:run [--group="<cron group name>"] [--bootstrap="<options>"]

where `--group` specifies the cron group to run (omit this option to run cron for the `default` group)

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>You can run cron for one group at a time.</p></span>
</div>


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
