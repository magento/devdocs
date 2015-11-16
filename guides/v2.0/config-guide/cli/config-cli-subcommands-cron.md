---
layout: default
group: config-guide 
subgroup: CLI
title: Configure and run cron
menu_title: Configure and run cron
menu_node: 
menu_order: 100
github_link: config-guide/cli/config-cli-subcommands-cron.md
redirect_from: /guides/v1.0/config-guide/cli/config-cli-subcommands-cron.html
---


#### Contents

*	<a href="#config-cli-cron-overview">Overview of cron</a>
*	<a href="#config-cli-before">First steps</a>
*	<a href="#config-cli-cron-bkg">Run cron in the background</a>
*	<a href="#config-cli-cron-group">Configure and run cron using the command line</a>

To run cron in a web browser, see <a href="{{ site.gdeurl }}config-guide/secy/secy-cron.html">Secure cron.php to run in a browser</a>

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

We recommend you run cron as the <a href="{{ site.gdeurl }}install-gde/prereq/apache-user.html#install-update-depend-user-over">Magento file system owner</a>. Do *not* run cron as `root`; we recommend against running cron as the web server user.

<div class="bs-callout bs-callout-warning">
    <p>You can no longer run <code>dev/tools/cron.sh</code> because the script has been removed.</p>
</div>

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>Magento depends on proper cron job configuration for many important system functions, including indexing. Failure to set it up properly means Magento won't function as expected.</p></span>
</div>

UNIX systems schedule tasks to be performed by particular users using a *crontab*, which is a file that contains instructions to the cron daemon that tell the daemon in effect to "run this command at this time on this date". Each user has its own crontab, and commands in any given crontab are executed as the user who owns it.

See one of the following sections:

*	<a href="#config-cli-before">First steps</a>
*	<a href="#config-cli-cron-bkg">Run cron in the background</a>
*	<a href="#config-cli-cron-group">Configure and run cron using the command line</a>

<h2 id="config-cli-before">First steps</h2>
{% include install/first-steps-cli.html %}
In addition to the command arguments discussed here, see <a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands.html#config-cli-subcommands-common">Common arguments</a>.

<h2 id="config-cli-cron-bkg">Run cron in the background</h2>
This section discusses how to run all Magento cron jobs every minute, which is the recommended interval for both Magento Community Edition (CE) and Enterprise Edition (EE).

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>Cron is critical for Magento operation; among other things, it's the only way to reindex on an ongoing basis, it generates automated e-mails, newsletters, the sitemap, and so on.</p></span>
</div>

Run Magento cron jobs as the <a href="{{ site.gdeurl }}install-gde/prereq/apache-user.html#install-update-depend-user-over">Magento file system owner</a>. 

To create a cron job as the Magento file system owner:

Create or edit a crontab for the Magento file system owner:

	crontab -u <Magento file system owner user name> -e

A text editor displays. (You might need to choose a text editor first.)

In the editor, enter the following:

	crontab -u <magento file system owner> -e

For example,

	crontab -u magento_user -e

A text editor displays. Enter the following:

	*/1 * * * * php -c <ini-file-path> <your Magento install dir>/bin/magento cron:run 
	*/1 * * * * php -c <ini-file-path> <your Magento install dir>/update/cron.php 
	*/1 * * * * php -c <ini-file-path> <your Magento install dir>/bin/magento setup:cron:run 

where `<ini-file-path>` is the path to a `php.ini` file to use for the cron job. To see a list of all `php.ini` files on your system, enter

	php -i | grep php.ini

A sample result follows:

	Configuration File (php.ini) Path => /etc/php5/cli // this is your PHP command-line .ini file
	Loaded Configuration File => /etc/php5/cli/php.ini // this is the .ini file used by the web server

(To confirm which `.ini` file the web server uses, create a <a href="{{ site.gdeurl }}install-gde/prereq/optional.html#install-optional-phpinfo">`phpinfo.php` file</a>.)

The first command (`magento cron:run`) reindexes indexers, send automated e-mails, generates the sitemap, and so on. Usually it's associated with the PHP command line `.ini` file.

The other commands are used by the <a href="{{ site.gdeurl }}comp-mgr/bk-compman-upgrade-guide.html">Component Manager and System Upgrade utilities</a>. Those command must use the web server's `php.ini`.

For example, if you installed Magento in `/var/www/html/magento2` and all commands use the web server's `php.ini`, enter

	*/1 * * * * php -c /etc/php5/cli/apache2 /var/www/html/magento2/bin/magento cron:run 
	*/1 * * * * php -c /etc/php5/cli/apache2 /var/www/html/magento2/update/cron.php 
	*/1 * * * * php -c /etc/php5/cli/apache2 /var/www/html/magento2/bin/magento setup:cron:run 

Save your changes to the crontab and exit the editor.

<h2 id="config-cli-cron-group">Configure and run cron using the command line</h2>
This section discusses how to run cron at any time using the command line. You can optionally configure a cron group for a custom module as discussed in the next section.

Most Magento modules are in the `default` group; other modules are in the `index` group.

See one of the following sections:

*	<a href="#config-cli-cron-group-conf">Configure cron groups for custom modules</a>
*	<a href="#config-cli-cron-group-run">Run cron from the command line</a>

<h3 id="config-cli-cron-group-conf">Configure cron groups for custom modules</h3>
This section discusses how to optionally create a cron group for a custom module. If you don't need to do this, continue with the next section.

A *cron group* is a logical group that enables you to easily run cron for more than one process at a time. Most Magento modules use the `default` cron group; some modules use the `index` group.

If you're implementing cron for a custom module, it's your choice of whether or not to use the `default` group or a different group.

To configure a cron group for your module, create `<your component base dir>/<vendorname>/module-<name>/etc/crontab.xml` with the following contents:

	<config>
    	<group id="<group_name>">
	        <job name="<job_name>" instance="<classpath>" method="<method>">
	            <schedule><time></schedule>
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
		<td><p>&lt;group_name></p></td>
		<td><p>Name of the cron group. The group name doesn't have to be unique.</p>
			<p>You can run cron for one group at a time.</p></td>
	</tr>
	<tr>
		<td><p>&lt;job_name></p></td>
		<td><p>Unique ID for this cron job.</p>
		</td>		
	</tr>
	<tr>
		<td><p>&lt;classpath></p></td>
		<td><p>Classpath.</p></td>		
	</tr>
	<tr>
		<td><p>&lt;method></p></td>
		<td><p>Method in <code>&lt;classpath></code> to call.</p></td>		
	</tr>
	<tr>
		<td><p>&lt;time></p></td>
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
		<td><p>Determines the number of minutes that cron history is kept in the database.</p></td>		
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

	magento cron:run [--group="<cron group name>"] 

where `--group` specifies the cron group to run (omit this option to run cron for the `default` group)

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <ul><li>You can run cron for one group at a time.</li>
  	<li>You must run cron twice: the first time to discover tasks to run and the second time to run the tasks themselves.</li></ul></span>
</div>

#### Related topics

*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-cache.html">Manage the cache</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-index.html">Manage the indexers</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-compiler.html">Code compiler</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-mode.html">Set the Magento mode</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-urn.html">URN highlighter</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-depen.html">Dependency reports</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-i18n.html">Translation dictionaries and language packages</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-static-view.html">Deploy static view files</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-less-sass.html">Create symlinks to LESS files</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-test.html">Run unit tests</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-layout-xml.html">Convert layout XML files</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-perf-data.html">Generate data for performance testing</a>
